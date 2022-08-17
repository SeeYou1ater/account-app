import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ThunkDispatch } from "redux-thunk"
import { UserType } from "../../../api/api"
import { AppReducerActionTypes, getContactsThunkCreator } from "../../../redux/appReducer"
import { RootStateType } from "../../../redux/redux-store"
import User from "../../User/User"


const Contacts = () => {
  const dispatch: ThunkDispatch<RootStateType, unknown, AppReducerActionTypes> = useDispatch()
  const contacts = useSelector((state: RootStateType) => state.contacts)

  useEffect( () => {
    dispatch(getContactsThunkCreator())
  }, [])

  if (contacts === null) { return <div>Loading...</div> } else 
   { return (
    <div>
      <h2>Contacts</h2>
      {contacts.map( (el: UserType) => <User key={el.id} name={el.name} age={el.age}/>)}
    </div>
  ) }
}


export default Contacts