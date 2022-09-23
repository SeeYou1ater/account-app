import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store, StoreType } from "../redux/redux-store"

const testStore = store

export const renderWithRedux = (component: React.ReactNode, store: StoreType = testStore) => {
  return {
    ...render(
      <BrowserRouter>
        <Provider store={store}>
          {component}
        </Provider>
      </BrowserRouter>)
  }
}