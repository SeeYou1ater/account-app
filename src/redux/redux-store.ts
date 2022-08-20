import { appReducer, AppReducerActionTypes } from './appReducer'
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'

export const store = configureStore({
  reducer: appReducer,
  middleware: [thunkMiddleware]
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch & ThunkDispatch<RootStateType, unknown, AppReducerActionTypes>

//@ts-ignore
window.store = store