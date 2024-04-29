import axios, { AxiosResponse } from 'axios'

interface ClientOptions {
  apiUrl: string
  withCredentials?: boolean
}

export interface HttpClient {
  get: any
}

export const createClient = ({ apiUrl, withCredentials = false }: ClientOptions): HttpClient => {
  const axiosInstance = axios.create({
    baseURL: 'https://api.allorigins.win/get?url=' + apiUrl,
  })

  const get = async (path: string, { params = {}, headers = {} } = {}) => {
    const url = apiUrl + (path.startsWith('/') ? path : `/${path}`)
    const { data }: AxiosResponse = await axiosInstance.get(url, {
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
