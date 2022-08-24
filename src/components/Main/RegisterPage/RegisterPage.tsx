import { useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { registerUserThunkCreator } from "../../../redux/appReducer"
import { AppDispatchType } from "../../../redux/redux-store"
import './RegisterPage.css'


const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch: AppDispatchType = useDispatch()

  const submit = (e: any) => {
    e.preventDefault()
    const dataSubmit = { 
      email: e.target.email.value,
      password: e.target.password.value
    }
    dispatch(registerUserThunkCreator(dataSubmit))
  }

  return (
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