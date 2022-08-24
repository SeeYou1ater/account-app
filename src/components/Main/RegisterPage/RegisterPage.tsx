import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerUserThunkCreator } from "../../../redux/appReducer"
import { AppDispatchType } from "../../../redux/redux-store"


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
    <form action="" onSubmit={submit}>
      <h2>Register</h2>
      <input type="text" name='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type='password' name='password' placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button>Register</button>
    </form>
  )
}

export default RegisterPage