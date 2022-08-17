import { appReducer } from './appReducer'
import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from 'redux-thunk'

export const store = configureStore({
  reducer: appReducer,
  middleware: [thunkMiddleware]
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

//@ts-ignore
window.storetrek = store.getState()