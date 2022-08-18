import { useDispatch } from "react-redux"
import { registerUserThunkCreator } from "../../../redux/appReducer"
import { AppDispatchType } from "../../../redux/redux-store"


const RegisterPage = () => {
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
    <form action="" onSubmit={submit}>
      <h2>Register</h2>
      <input type="text" name='email' placeholder='email'/>
      <input type='password' name='password' placeholder="password"/>
      <button>Register</button>
    </form>
  )
}

export default RegisterPage