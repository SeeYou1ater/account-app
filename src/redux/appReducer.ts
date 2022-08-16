import { GetContactsAPI, GetContactsType } from "../api/api"
import { AppDispatchType } from "./redux-store"

const initialState = {
  contacts: null as null | GetContactsType
}


export const getContactsThunkCreator: any = () => {
  return async (dispatch: AppDispatchType) => {
    let data = await GetContactsAPI.getUsers()
    dispatch(addContacts(data))
  }
}

const addContacts = (contactsData: any) => {
  return {
    type: "GET_USERS",
    data: contactsData
  }
} 


export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_USERS": {
      let stateCopy = {...state, contacts: action.data}
      return stateCopy
    }

    default:
      return state
  }
}