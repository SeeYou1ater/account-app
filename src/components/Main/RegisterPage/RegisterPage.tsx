import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { registerUserThunkCreator } from "../../../redux/appReducer"
import { AppDispatchType, RootStateType } from "../../../redux/redux-store"
import Menu from "../../common/Menu"
import './RegisterPage.css'


const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isAuth = useSelector( (state: RootStateType) => { return state.isAuth} )

  const dispatch: AppDispatchType = useDispatch()

  const submit = (e: any) => {
    e.preventDefault()
    const dataSubmit = { 
      email: e.target.email.value,
      password: e.target.password.value
    }
    dispatch(registerUserThunkCreator(dataSubmit))
  }

  if (isAuth) { return  <div>
                          <Menu/>
                          <p className="before-reg-style">Before registration you need to logout!</p>
                        </div> 
  } else return (
    <div>
      <p className="menu"><NavLink to="/*">Menu</NavLink></p>
      <form action="" onSubmit={submit} className='register-form form'>
        <h2 className="form-title">Register</h2>
        <input className='register-form__input-email input-form' type="text" name='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input className='register-form__input-password input-form' type='password' name='password' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className="register-buton form-button">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage