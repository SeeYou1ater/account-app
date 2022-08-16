const initialState = {
  contacts: null
}


const getContacts = (contactsData: any) => {
  return {
    type: "GET_USERS",
    data: contactsData
  }
} 


export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state
  }
}