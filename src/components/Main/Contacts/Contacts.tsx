import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UserType } from "../../../api/api"
import { getContactsThunkCreator } from "../../../redux/appReducer"
import { AppDispatchType, RootStateType } from "../../../redux/redux-store"
import './Contacts.css'
import User from "../../User/User"
import { NavLink } from "react-router-dom"


const Contacts = () => {
  const dispatch: AppDispatchType = useDispatch()
  const contacts = useSelector((state: RootStateType) => state.contacts)

  useEffect( () => {
    dispatch(getContactsThunkCreator())
  }, [])

  if (!contacts) { return <div>Loading...</div> } else if (contacts.length === 0) {return <div>Contact list is empty...</div>} else
   { return (
    <div className='contacts'>
      <div>
        <p className="menu"><NavLink to="/*">Menu</NavLink></p>
        <h2>Contacts</h2>
          <ul>
            {contacts.map( (el: UserType) => <User key={el.id} email={el.email}/>)}
          </ul>
        </div>
    </div>
  ) }
}


export default Contacts