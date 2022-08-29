import { ChangeEvent, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { UserType } from "../../../api/api"
import { getContactsThunkCreator } from "../../../redux/appReducer"
import { AppDispatchType, RootStateType } from "../../../redux/redux-store"
import './Contacts.css'
import User from "../../User/User"
import Menu from "../../common/Menu"


const Contacts = () => {
  const dispatch: AppDispatchType = useDispatch()
  const contacts = useSelector((state: RootStateType) => state.contacts)
  const isAuth = useSelector((state: RootStateType) => state.isAuth)
  let [contact, setContact] = useState('')

  useEffect( () => {
    dispatch(getContactsThunkCreator())
  }, [])

  if (!contacts) { return <div>Loading...</div> } else if (contacts.length === 0) {return <div>Contact list is empty...</div>} else
   { if (!isAuth) { return <div className='contacts'>
      <div>
        <Menu/>
        <h2>Contacts</h2>
        <p>You are not authorized!</p>
      </div>
    </div> } else return (
    <div className='contacts'>
      <div>
        <Menu/>
        <h2>Contacts</h2>
        <ul>
          {contacts.map( (el: UserType) => <User key={el.id} email={el.email} id={el.id}/>)}
        </ul>
        <div className="add-contact-block">
          <input className="add-contact-input" type="text" value={contact} onChange={(e: ChangeEvent<HTMLInputElement>) => { setContact(e.currentTarget.value) }}/>
          <button onClick={} className="add-contact-button">Add contact</button>  
        </div>
      </div>
    </div>
  ) }
}


export default Contacts