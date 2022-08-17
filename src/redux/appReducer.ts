import { ThunkAction } from "redux-thunk"
import { GetContactsAPI, GetContactsType } from "../api/api"
import { RootStateType } from "./redux-store"

const initialState = {
  contacts: null as null | GetContactsType
}

type InitialStateType = typeof initialState


export type AppReducerActionTypes = AddContactsActionType

export type ThunkType = ThunkAction<Promise<void>, RootStateType, unknown, AppReducerActionTypes> 


export const getContactsThunkCreator = (): ThunkType => {
  return async (dispatch) => {
    let data = await GetContactsAPI.getUsers()
    dispatch(addContacts(data))
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