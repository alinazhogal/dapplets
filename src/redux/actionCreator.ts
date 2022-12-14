import { createAsyncThunk } from '@reduxjs/toolkit'
import Fuse from 'fuse.js'
import { api } from '../api'
import { fetchDapplets } from '../api/fetchDapplets'
import { Tag } from '../types/dapplet'

export const getDapplets = createAsyncThunk(
  'dapplets/get',
  async (
    { search, sort, start }: { search?: string; sort?: string; start?: number },
    { rejectWithValue },
  ) => {
    try {
      const response = await fetchDapplets(search, sort, start)
      if (search) {
        const fuse = new Fuse(response.data, {
          keys: ['title'],
        })
        return { data: fuse.search(search).map((i) => i.item), total: response.total }
      }
      return response
    } catch (e) {
      if (typeof e === 'string') {
        return rejectWithValue(e)
      } else if (e instanceof Error) {
        return rejectWithValue(e.message)
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
