import axios from 'axios';
import { DataSubmitType } from '../redux/appReducer';

export type UserType = {
  id: number
  email: string
}

export type UserDataType = {
  accessToken: string
  user: UserType
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
              .post<UserDataType>(`register`, { email: dataSubmit.email, password: dataSubmit.password })
              .then(response => { 
                if (response.statusText === 'Created') {
                  return response.data 
                }
              })
  },
  login(dataSubmit: DataSubmitType) {
    return instance
              .post<UserDataType>('login', { email: dataSubmit.email, password: dataSubmit.password })
              .then(response => { 
                if (response.statusText === 'OK') {
                  return response.data 
                }
              })
  },
  changeContact(email: string, id: number) {
    return instance
              .put<UserDataType>(`contacts/${id}`, { email: email }, {headers: { 'Content-Type': 'application/json' } } )
              .then(response => { 
                if (response.statusText === 'OK') {
                  return response.data 
                }
              })
  },
  deleteContact(id: number) {
    return instance
              .delete<UserDataType>(`contacts/${id}` )
              .then(response => { 
                if (response.statusText === 'OK') {
                  return response.data 
                }
              })
  },
  addContact(email: string) {
    return instance
              .post<UserType>('contacts', { email: email })
              .then(response => { 
                if (response.statusText === 'Created') {
                  return response.data 
                }
              })           
  },
}