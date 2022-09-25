import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { appReducer } from "../redux/appReducer"
import thunkMiddleware from 'redux-thunk'
import { configureStore } from "@reduxjs/toolkit"
import { RootStateType, StoreType } from "../redux/redux-store"

type TestStateType = {
  initialState: RootStateType
  store?: StoreType
}

export const renderWithRedux = (
  component: React.ReactNode, 
  { initialState = { isAuth: false, contacts: null, authUser: null }, store = configureStore({
    reducer: appReducer,
    middleware: [thunkMiddleware]
  })
}: TestStateType) => {
  return {
    ...render(
      <BrowserRouter>
        <Provider store={store}>
          {component}
        </Provider>
      </BrowserRouter>)
  }
}