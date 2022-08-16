import { keyboard } from "@testing-library/user-event/dist/keyboard"
import axios from "axios"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { RootStateType } from "../../../redux/redux-store"


const Contacts = () => {
  const contacts = useSelector((state: RootStateType) => state.appReducer.contacts)
  useEffect( () => {
    axios.get('http://localhost:3004/')
  }, [])


  if (contacts === null) { return <div>Список контактов пуст</div> } else 
   { return (
    <div>
      <h2>Contacts</h2>
    </div>
  ) }
}


export default Contacts