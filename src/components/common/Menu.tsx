import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { logoutUser } from "../../redux/appReducer"
import { AppDispatchType, RootStateType } from "../../redux/redux-store"
import './Menu.css'


const Menu = () => {
  let isAuth = useSelector((state: RootStateType) => { return state.isAuth })
  let authUserEmail = useSelector((state: RootStateType) => { return state.authUser?.email })
  const dispatch: AppDispatchType = useDispatch()

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
