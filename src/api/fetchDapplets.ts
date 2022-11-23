import { api } from '.'
import { ResponseData } from '../types/dapplet'

export const fetchDapplets = async (search?: string, sort?: string, start?: number) => {
  const response = await api.get('dapplets', {
    params: {
      limit: 20,
      start: start || 0,
      ...(search && {
        filter: JSON.stringify([
          {
            property: 'title',
            value: `${search}`,
          },
        ]),
      }),
      sort: JSON.stringify([
        {
          property: 'title',
          direction: `${sort}`,
        },
      ]),
    },
  })

  return response.data as ResponseData
}
