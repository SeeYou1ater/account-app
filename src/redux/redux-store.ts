import { appReducer } from './appReducer';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {appReducer}
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatchType = typeof store.dispatch

//@ts-ignore
window.storetrek = store.getState()