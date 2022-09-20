import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { registerUserThunkCreator } from "../../../redux/appReducer"
import Menu from "../../common/Menu"
import './RegisterPage.css'


const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isAuth = useAppSelector( state => state.isAuth )

  const dispatch = useAppDispatch()

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const dataSubmit = { 
      email,
      password
    }
    dispatch(registerUserThunkCreator(dataSubmit))
  }

  if (isAuth) { return  <div>
                          <Menu/>
                          <p className="before-reg-style">Before registration you need to logout!</p>
                        </div> 
  } else return (
    <div>
      <Menu/>
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