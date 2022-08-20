import { ThunkAction } from "redux-thunk"
import { API, GetContactsType } from "../api/api"
import { RootStateType } from "./redux-store"

type AuthUserType = {
  id: string 
  email: string
}

const initialState = {
  contacts: null as GetContactsType | null,
  isAuth: false,
  authUser: null as AuthUserType | null
}

export type DataSubmitType = {
  email: string
  password: string
}

type InitialStateType = typeof initialState


export type AppReducerActionTypes = AddContactsActionType | SetAuthUserType

export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, AppReducerActionTypes> 

export const getContactsThunkCreator = (): ThunkType => {
  return async (dispatch) => {
    let data = await API.getUsers()
    if (data) {
      dispatch(addContacts(data))
    }
  }
}

export const loginThunkCreator = (dataSubmit: DataSubmitType): ThunkType => {
  return async (dispatch) => {
    let data = await API.login(dataSubmit)
    dispatch(setAuthUser(data.user))
  }
}


export const registerUserThunkCreator = (dataSubmit: DataSubmitType): ThunkType => {
  return async () => {
    let data = await API.registerUser(dataSubmit)
    await API.addContact(data.user)
  }
}

type AddContactsActionType = {
  type: string
  data: GetContactsType
}

const addContacts = (contactsData: GetContactsType): AddContactsActionType => {
  return {
    type: "GET_USERS",
    data: contactsData
  }
}

type SetAuthUserType = {
  type: string
  data: AuthUserType
}

const setAuthUser = (userData: AuthUserType): SetAuthUserType => {
  return {
    type: "SET_AUTH_USER",
    data: userData
  }
}

export const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {

    case "GET_USERS": {
      let stateCopy = {...state, contacts: action.data}
      return stateCopy
    }

    case "SET_AUTH_USER": {
      let stateCopy = {...state, 
                        isAuth: true,
                        authUser: action.data}
      return stateCopy
    }

    default:
      return state
  }
}