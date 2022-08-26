import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeContact } from '../../redux/appReducer'
import { AppDispatchType } from '../../redux/redux-store'
import './User.css'


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

  const deactivateEditMode = (e: ChangeEvent<HTMLInputElement>) => {
    setEditMode(false)
    dispatch(changeContact(props.id, e.currentTarget.value))
  }

  return (
    editMode 
      ? <input type="text" value={email} onBlur={ (e) => { deactivateEditMode(e) } } onChange={(e: ChangeEvent<HTMLInputElement>) => { setEmail(e.currentTarget.value) }}/>
      : <li>{email}<button onClick={ activateEditMode }>Change</button></li>

  )
}

export default User