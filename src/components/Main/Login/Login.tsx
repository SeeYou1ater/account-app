

const Login = () => {

  const submit = (e: any) => {
    alert(e.target)
  }

  return (
    <form action="">
      <h2>Login</h2>
      <input type="text" name='name' placeholder='email'/>
      <input type='password' name='password' placeholder="password"/>
      <button onSubmit={submit}>Log in</button>
    </form>
  )
}

export default Login