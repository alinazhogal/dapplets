import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dapplet, Tag } from '../types/dapplet'
import { getDapplets, getTags } from './actionCreator'

export type DappletsState = {
  dapplets: Dapplet[]
  tags: Tag[]
  isLoading: boolean
  error: string
}

const initialState: DappletsState = {
  dapplets: [],
  tags: [],
  isLoading: false,
  error: '',
}

export const dappletsSlice = createSlice({
  name: 'dapplets',
  initialState,
  reducers: {
    setDapplets: (state, action) => {
      state.dapplets = action.payload
    },
  },
  extraReducers: {
    [getDapplets.fulfilled.type]: (state, action: PayloadAction<Dapplet[]>) => {
      state.isLoading = false
      state.error = ''
      state.dapplets.push(...action.payload)
    },
    [getDapplets.pending.type]: (state) => {
      state.isLoading = true
      state.error = ''
    },
    [getDapplets.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
      state.dapplets = []
    },
    [getTags.fulfilled.type]: (state, action: PayloadAction<Tag[]>) => {
      state.tags = action.payload
    },
  },
})

export const { setDapplets } = dappletsSlice.actions
