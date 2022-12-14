import { ThunkAction } from "redux-thunk"
import { API, GetContactsType } from "../api/api"
import { RootStateType } from "./redux-store"

const GET_USERS = 'GET_USERS',
      SET_AUTH_USER = "SET_AUTH_USER",
      LOGOUT_USER = 'LOGOUT_USER',
      CHANGE_CONTACT = "CHANGE_CONTACT"

export type AuthUserType = {
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

export type InitialStateType = typeof initialState


export type AppReducerActionTypes = AddContactsActionType | SetAuthUserActionType | LogoutUserActionType | ChangeContactType

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
    if (data) {
      localStorage.setItem('user', JSON.stringify(data.user))
      dispatch(setAuthUser(data.user))
    }
  }
}


export const registerUserThunkCreator = (dataSubmit: DataSubmitType): ThunkType => {
  return async () => {
    let data = await API.registerUser(dataSubmit)
    if (data) {
      alert('Registration was successfull!')
    }
  }
}

export const changeContactActionCreator = (email: string, id: number): ThunkType => {
  return async (dispatch) => {
    let data = await API.changeContact(email, id)
    if (data) {
      dispatch(getContactsThunkCreator())
    }
  }
}

export const deleteContactActionCreator = (id: number): ThunkType => {
  return async (dispatch) => {
    let data = await API.deleteContact(id)
    if (data) {
      dispatch(getContactsThunkCreator())
    }
  }
}

export const addContactActionCreator = (email: string): ThunkType => {
  return async (dispatch) => {
    let data = await API.addContact(email)
    if (data) {
      dispatch(getContactsThunkCreator())
    }
  }
}

export const findContactActionCreator = (term: string): ThunkType => {
  return async (dispatch) => {
    let data = await API.findContact(term)
    if (data) {
      dispatch(addContacts(data))
    }
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

type ChangeContactType = {
  type: typeof CHANGE_CONTACT
  id: number
  newEmail: string
}

type SetAuthUserActionType = {
  type: typeof SET_AUTH_USER
  authUserData: AuthUserType
}

export const setAuthUser = (userData: AuthUserType): SetAuthUserActionType => {
  return {
    type: "SET_AUTH_USER",
    authUserData: userData
  } as const 
}

type LogoutUserActionType = {
  type: typeof LOGOUT_USER
}

export const logoutUser = (): LogoutUserActionType => {
  return {
    type: "LOGOUT_USER",
  } as const 
}

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionTypes): InitialStateType => {
  switch (action.type) {

    case GET_USERS: {
      let stateCopy = { ...state, 
                        contacts: action.contactsData
                      }
      return stateCopy
    }

    case SET_AUTH_USER: {
      let stateCopy = {...state, 
                        isAuth: true,
                        authUser: action.authUserData
                      }
      return stateCopy
    }

    case LOGOUT_USER: {
      let stateCopy = {...state, 
                        isAuth: false,
                        authUser: null
                      }
      return stateCopy
    }
    
    default:
      return state
  }
}