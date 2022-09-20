import { useState } from 'react'
import { changeContactActionCreator, deleteContactActionCreator } from '../../redux/appReducer'
import './User.css'
import contactChange from '../../assets/icons/change-icon.png'
import deleteContact from '../../assets/icons/delete-icon.png'
import { useAppDispatch } from '../../hooks'


type PropsType = {
  email: string
  id: number
}

const User: React.FC<PropsType> = (props) => {
  const dispatch = useAppDispatch()

  let [email, setEmail] = useState(props.email)
  let [editMode, setEditMode] = useState(false)

  const activateEditMode = () => { 
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)

    dispatch(changeContactActionCreator(email, props.id))
  }

  return (
    editMode 
      ? <input className='change-input' type="text" autoFocus={true} value={email} onBlur={ () => { deactivateEditMode() } } onChange={ (e) => { setEmail(e.currentTarget.value) } }/>
      : <li>
          {email}
          <img onBlur={ () => { deactivateEditMode() } } className='change-icon-img icon' src={contactChange} alt="#" onClick={ activateEditMode }></img>
          <img className='delete-icon-img icon' src={deleteContact} alt="#" onClick={() => { dispatch(deleteContactActionCreator(props.id))}}></img>
        </li>

  )
}

export default User