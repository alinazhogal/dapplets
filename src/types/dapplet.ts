export type Dapplet = {
  id: string
  icon: string
  title: string
  author: string
  address: string
  description: string
  text_1: string
  text_2: string
  text_3: string
  text_4: string
  text_5: string
  text_6: string
  text_7: string
  text_8: string
  text_9: string
  tags: string[]
}

export type Tag = {
  id: string
  name: string
}

export type ResponseData = {
  success: boolean
  data: Dapplet[]
  message?: string
  total: number
}
