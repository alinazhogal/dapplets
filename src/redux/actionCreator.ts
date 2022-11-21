import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Dapplet, Tag } from '../types/dapplet'

export const getDapplets = createAsyncThunk(
  'dapplets/get',
  async ({ search, sort }: { search?: string; sort?: string }, { rejectWithValue }) => {
    let response
    try {
      if (!search) {
        response = await axios.get(
          `https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?limit=20&start=0&sort=[{"property":"title","direction":"${sort}"}]`,
        )
      } else {
        response = await axios.get(
          `https://dapplets-hiring-api.herokuapp.com/api/v1/dapplets?limit=20&start=0&filter=[{"property":"title","value":"${search}"}]&sort=[{"property":"title","direction":"${sort}"}]`,
        )
      }
      console.log(response.data)
      return response.data.data as Dapplet[]
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
    const response = await axios.get('https://dapplets-hiring-api.herokuapp.com/api/v1/tags')
    return response.data.data as Tag[]
  } catch (e) {
    if (typeof e === 'string') {
      console.log(e)
    } else if (e instanceof Error) {
      console.log(e.message)
    }
  }
})
