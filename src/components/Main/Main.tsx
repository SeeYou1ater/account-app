import { Route, Routes } from "react-router-dom"
import Contacts from "./Contacts/Contacts"
import GuestPage from "./GuestPage/GuestPage"
import Login from "./Login/Login"
import RegisterPage from "./RegisterPage/RegisterPage"
import './Main.css'


const Main = () => {
  return (
    <div className="main__container">
      <Routes>
        <Route path="*" element={<GuestPage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div> 
 )
}

export default Main