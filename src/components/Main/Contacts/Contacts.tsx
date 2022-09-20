import { useEffect, useState } from "react"
import { UserType } from "../../../api/api"
import { addContactActionCreator, findContactActionCreator, getContactsThunkCreator } from "../../../redux/appReducer"
import './Contacts.css'
import User from "../../User/User"
import Menu from "../../common/Menu"
import { useAppDispatch, useAppSelector } from "../../../hooks"


const Contacts = () => {
  const dispatch = useAppDispatch()
  const contacts = useAppSelector( state => state.contacts )
  const isAuth = useAppSelector( state => state.isAuth )
  let [contact, setContact] = useState('')
  let [term, setTerm] = useState('')

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
        <input className="find-contact-input input" placeholder='try enter a name' type="text" value={term} onChange={(e) => { setTerm(e.currentTarget.value) }}/>
        <button onClick={ () => { dispatch(findContactActionCreator(term)) } } className="find-contact-button button">Find</button>
        <ul>
          {contacts.map( (el: UserType) => <User key={el.id} email={el.email} id={el.id}/>)}
        </ul>
        <div className="add-contact-block">
          <input className="add-contact-input input" placeholder='enter a name' type="text" value={contact} onChange={(e) => { setContact(e.currentTarget.value) }}/>
          <button onClick={ () => { dispatch(addContactActionCreator(contact)) } } className="add-contact-button button">Add contact</button>  
        </div>
      </div>
    </div>
  ) }
}


export default Contacts