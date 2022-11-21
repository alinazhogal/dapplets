import { configureStore } from '@reduxjs/toolkit'
import { dappletsSlice } from './dappletsSlice'

export const store = configureStore({
  reducer: {
    dapplets: dappletsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
