import { NavLink } from "react-router-dom"





const GuestPage = () => {
  return (
    <div>
      <h2>Hello!</h2>
      <br />
      <br />
      <NavLink to='/contacts'>Contacts</NavLink>
      <br />
      <br />
      <NavLink to='/login'>Login</NavLink>
      <br />
      <br />
      <NavLink to='/register'>Register</NavLink>
    </div>
  )
}


export default GuestPage