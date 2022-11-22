import { json } from 'stream/consumers'
import { api } from '.'

export const dappletsRequest = async (search?: string, sort?: string) => {
  const response = await api.get('dapplets', {
    params: {
      limit: 20,
      start: 0,
      filter: JSON.stringify([
        {
          property: 'title',
          value: search,
        },
      ]),
      sort: JSON.stringify([
        {
          property: 'title',
          direction: sort,
        },
      ]),
    },
  })
  return response.data
}
