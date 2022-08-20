import { ThunkAction } from "redux-thunk"
import { API, GetContactsType } from "../api/api"
import { RootStateType } from "./redux-store"

const GET_USERS = 'GET_USERS',
      SET_AUTH_USER = "SET_AUTH_USER"

type AuthUserType = {
  id: number
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


export type AppReducerActionTypes = AddContactsActionType | SetAuthUserActionType

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
  type: typeof GET_USERS
  contactsData: GetContactsType
}

const addContacts = (contactsData: GetContactsType): AddContactsActionType => {
  return {
    type: "GET_USERS",
    contactsData: contactsData
  } as const 
}

type SetAuthUserActionType = {
  type: typeof SET_AUTH_USER
  authUserData: AuthUserType
}

const setAuthUser = (userData: AuthUserType): SetAuthUserActionType => {
  return {
    type: "SET_AUTH_USER",
    authUserData: userData
  } as const 
}

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionTypes): InitialStateType => {
  switch (action.type) {

    case GET_USERS: {
      let stateCopy = {...state, contacts: action.contactsData}
      return stateCopy
    }

    case SET_AUTH_USER: {
      let stateCopy = {...state, 
                        isAuth: true,
                        authUser: action.authUserData}
      return stateCopy
    }

    default:
      return state
  }
}