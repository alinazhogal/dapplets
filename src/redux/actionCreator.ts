import { createAsyncThunk } from '@reduxjs/toolkit'
import Fuse from 'fuse.js'
import { api } from '../api'
import { fetchDapplets } from '../api/fetchDapplets'
import { Tag } from '../types/dapplet'

export const getDapplets = createAsyncThunk(
  'dapplets/get',
  async ({ search, sort }: { search?: string; sort?: string }, { rejectWithValue }) => {
    try {
      const response = await fetchDapplets(search, sort)
      if (search) {
        const fuse = new Fuse(response.data, {
          keys: ['title'],
        })
        return fuse.search(search).map((i) => i.item)
      }
      return response.data
    } catch (e) {
      if (typeof e === 'string') {
        rejectWithValue(e)
      } else if (e instanceof Error) {
        rejectWithValue(e.message)
      }
    }
  },
)

export const getTags = createAsyncThunk('dapplets/getTags', async () => {
  try {
    const response = await api('tags')
    return response.data.data as Tag[]
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e)
    } else if (e instanceof Error) {
      console.log(e.message)
    }
  }
})
