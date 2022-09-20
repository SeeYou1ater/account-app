import { useState } from "react"
import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../../hooks"
import { loginThunkCreator } from "../../../redux/appReducer"
import Menu from "../../common/Menu"
import './Login.css'

type dataSubmitType = {
  email: string
  password: string
}

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAppDispatch()

  const isAuth = useAppSelector( state => state.isAuth)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const dataSubmit: dataSubmitType = { 
      email,
      password
    }
    dispatch(loginThunkCreator(dataSubmit))
  }
  if (isAuth) { return <div className="already-auth-form">
                          <Menu/> 
                          <div><p>You are already authorized!</p></div>
                        </div>
  } else return (
    <div>
      <p className="menu"><NavLink to="/*">Menu</NavLink></p>
      <form action="" onSubmit={handleSubmit} className='login-form form'>
        <h2 className="form-title">Login</h2>
        <input className='login-form__input-email input-form' type="text" name='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input className='login-form__input-password input-form' type='password' name='password' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className="login-buton form-button">Log in</button>
        <p className="login_no-account">Doesn't have account? <NavLink to="/register">Register</NavLink></p>
      </form>
    </div>
  )
}

export default Login