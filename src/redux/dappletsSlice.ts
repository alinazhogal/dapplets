import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dapplet, ResponseData, Tag } from '../types/dapplet'
import { getDapplets, getTags } from './actionCreator'

export type DappletsState = {
  dapplets: Dapplet[]
  tags: Tag[]
  isLoading: boolean
  error: string
  total: number
}

const initialState: DappletsState = {
  dapplets: [],
  tags: [],
  isLoading: false,
  error: '',
  total: 0,
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
    [getDapplets.fulfilled.type]: (state, action: PayloadAction<ResponseData>) => {
      state.isLoading = false
      state.error = ''
      state.dapplets.push(...action.payload.data)
      state.total = action.payload.total
    },
    [getDapplets.pending.type]: (state) => {
      state.isLoading = true
      state.error = ''
      state.total = 0
    },
    [getDapplets.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.error = action.payload
      state.dapplets = []
      state.total = 0
    },
    [getTags.fulfilled.type]: (state, action: PayloadAction<Tag[]>) => {
      state.tags = action.payload
    },
  },
})

export const { setDapplets } = dappletsSlice.actions
