import { NavLink } from "react-router-dom"
import Menu from "../../common/Menu"
import './GuestPage.css'





const GuestPage = () => {
  return (
    <div>
      <Menu/>
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