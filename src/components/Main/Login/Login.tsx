import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { loginThunkCreator } from "../../../redux/appReducer"
import { AppDispatchType } from "../../../redux/redux-store"


const Login = () => {
  const dispatch: AppDispatchType = useDispatch()

  const submit = (e: any) => {
    e.preventDefault()
    const dataSubmit = { 
      email: e.target.email.value,
      password: e.target.password.value
    }
    dispatch(loginThunkCreator(dataSubmit))
  }

  return (
    <form action="" onSubmit={submit}>
      <h2>Login</h2>
      <input type="text" name='email' placeholder='email'/>
      <input type='password' name='password' placeholder="password"/>
      <button>Log in</button>
      <p>Doesn't have account? <NavLink to="/register">Register</NavLink></p>
    </form>
  )
}

export default Login