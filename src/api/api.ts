import axios from 'axios';
import { DataSubmitType } from '../redux/appReducer';

export type UserType = {
  id: number
  email: string
  age: number
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
                return response.data
              })
  },
  registerUser(dataSubmit: DataSubmitType) {
    return instance
              .post(`register`, { email: dataSubmit.email, password: dataSubmit.password })
              .then(response => { 
                return response.data
              })
  }
}