import axios, { AxiosResponse } from 'axios'

interface ClientOptions {
  baseURL: string
  withCredentials?: boolean
}

export const createClient = ({ baseURL, withCredentials = false }: ClientOptions) => {
  const buildUrl = (path: string) => baseURL + (path.startsWith('/') ? path : `/${path}`)

  const get = async (path: string, { params = {}, headers = {} } = {}) => {
    const url = buildUrl(path)

    const { data }: AxiosResponse = await axios.get(url, {
      params,
      headers,
      withCredentials,
    })
    return data
  }

  return {
    get,
  }
}
