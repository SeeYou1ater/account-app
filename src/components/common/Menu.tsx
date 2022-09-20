import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { logoutUser } from "../../redux/appReducer"
import { AppDispatchType, RootStateType } from "../../redux/redux-store"
import './Menu.css'


const Menu = () => {
  let isAuth = useAppSelector( state => state.isAuth )
  let authUserEmail = useAppSelector( state =>  state.authUser?.email )
  const dispatch = useAppDispatch()

  const logout = () => {
    dispatch(logoutUser())
  }

  return (<div>
            <div className="menu"><NavLink to="/*">Menu</NavLink>
              <div className="authorized-user-block-info">
                { isAuth ? <p>{authUserEmail}</p> : 'You are not authorized!' }
                { isAuth ? <button className='logout_button' onClick={logout}>Log out</button> : null } 
              </div> 
            </div> 
          </div> )
}

export default Menu;
