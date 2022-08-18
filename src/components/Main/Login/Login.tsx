

const Login = () => {

  const submit = (e: any) => {
    e.preventDefault()
    console.log(e.target.elements.name)
  }

  return (
    <form action="" onSubmit={submit}>
      <h2>Login</h2>
      <input type="text" name='email' placeholder='email'/>
      <input type='password' name='password' placeholder="password"/>
      <button>Log in</button>
    </form>
  )
}

export default Login