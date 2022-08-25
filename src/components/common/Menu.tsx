import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { RootStateType } from "../../redux/redux-store"
import './Menu.css'


const Menu = () => {
  let isAuth = useSelector((state: RootStateType) => { return state.isAuth })
  let authUserEmail = useSelector((state: RootStateType) => { return state.authUser?.email })
  return (<div>
            <p className="menu"><NavLink to="/*">Menu</NavLink>
              <p className="authorized-user-block-info">{isAuth ? authUserEmail : 'You are not authorized!' }</p>
            </p> 
          </div> )
}

export default Menu;
