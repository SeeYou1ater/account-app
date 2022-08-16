import { Route, Routes } from "react-router-dom"
import Contacts from "./Contacts/Contacts"
import GuestPage from "./GuestPage/GuestPage"
import Login from "./Login/Login"


const Main = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<GuestPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </> 
 )
}

export default Main