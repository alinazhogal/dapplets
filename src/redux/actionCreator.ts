import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Dapplet, Tag } from '../components/types/dapplet'

export const getDapplets = createAsyncThunk(
  'dapplets/get',
  async ({ search, sort }: { search?: string; sort?: string }, thunkAPI) => {
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
      return response.data.data as Dapplet[]
    } catch (e) {
      return thunkAPI.rejectWithValue('cant get data')
    }
  },
)

export const getTags = createAsyncThunk('dapplets/getTags', async (_, thunkAPI) => {
  const response = await axios.get('https://dapplets-hiring-api.herokuapp.com/api/v1/tags')
  console.log(response.data)
  return response.data.data as Tag[]
})
