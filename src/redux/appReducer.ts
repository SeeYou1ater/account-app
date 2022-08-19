import { ThunkAction } from "redux-thunk"
import { API, GetContactsType, UserType } from "../api/api"
import { RootStateType } from "./redux-store"

const initialState = {
  contacts: null as null | GetContactsType
}

export type DataSubmitType = {
  email: string
  password: string
}



type InitialStateType = typeof initialState


export type AppReducerActionTypes = AddContactsActionType

export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, AppReducerActionTypes> 

export const getContactsThunkCreator = (): ThunkType => {
  return async (dispatch) => {
    let data = await API.getUsers()
    if (data) {
      dispatch(addContacts(data))
    }
  }
}

export const registerUserThunkCreator = (dataSubmit: DataSubmitType): ThunkType => {
  return async (dispatch) => {
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



export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionTypes): InitialStateType => {
  switch (action.type) {
    case "GET_USERS": {
      let stateCopy = {...state, contacts: action.data}
      return stateCopy
    }

    default:
      return state
  }
}