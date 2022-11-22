import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://dapplets-hiring-api.herokuapp.com/api/v1/',
})
