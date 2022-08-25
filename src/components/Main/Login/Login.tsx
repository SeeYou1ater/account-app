import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { Navigate, NavLink } from "react-router-dom"
import { loginThunkCreator } from "../../../redux/appReducer"
import { AppDispatchType, RootStateType } from "../../../redux/redux-store"
import './Login.css'


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch: AppDispatchType = useDispatch()

  const isAuth = useSelector((state: RootStateType) => state.isAuth)

  const submit = (e: any) => {
    e.preventDefault()
    const dataSubmit = { 
      email: e.target.email.value,
      password: e.target.password.value
    }
    dispatch(loginThunkCreator(dataSubmit))
  }
  if (isAuth) { return <div className="already-auth-form">
                          <p className="menu"><NavLink to="/*">Menu</NavLink></p>
                          <div><p>You are already authorized!</p></div>
                        </div>
  } else return (
    <div>
      <p className="menu"><NavLink to="/*">Menu</NavLink></p>
      <form action="" onSubmit={submit} className='login-form form'>
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