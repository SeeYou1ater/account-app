import axios from 'axios';

export type UserType = {
  id: number
  name: string
  age: number
}

export type GetContactsType = Array<UserType> 

export const instance = axios.create({
  baseURL: 'http://localhost:3004/',
})

export const GetContactsAPI = {
  getUsers() {
    return instance
              .get<GetContactsType>(`contacts`)
              .then(response => { 
                return response.data
              })
  }
}