import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeContactActionCreator } from '../../redux/appReducer'
import { AppDispatchType } from '../../redux/redux-store'
import './User.css'
import statusChange from '../../assets/icons/change-icon.png'


type PropsType = {
  email: string
  id: number
}

const User: React.FC<PropsType> = (props) => {
  const dispatch: AppDispatchType = useDispatch()

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
      ? <input className='change-input' type="text" autoFocus={true}value={email} onBlur={ () => { deactivateEditMode() } } onChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.currentTarget.value) }}/>
      : <li>{email}<img tabIndex={0} onBlur={ () => { deactivateEditMode() } } className='change-icon-img' src={statusChange} alt="#" onClick={ activateEditMode }></img></li>

  )
}

export default User