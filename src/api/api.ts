import axios from 'axios';
import { DataSubmitType } from '../redux/appReducer';

export type UserType = {
  id: number
  email: string
}

export type UserRegisterType = {
  email: string
  password: string
}

export type GetContactsType = Array<UserType> 

export const instance = axios.create({
  baseURL: 'http://localhost:3004/',
})

export const API = {
  getUsers() {
    return instance
              .get<GetContactsType>(`contacts`)
              .then(response => {
                if (response.statusText === 'OK') { 
                  return response.data 
                }
              })
  },
  registerUser(dataSubmit: DataSubmitType) {
    return instance
              .post(`register`, { email: dataSubmit.email, password: dataSubmit.password })
              .then(response => { 
                if (response.statusText === 'Created') {
                  return response.data 
                }
              })
  },
  addContact(user: any) {
    return instance
              .post('contacts', { email: user.email, id: user.id })
  }
}