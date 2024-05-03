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
    baseURL: apiUrl,
  })

  const get = async (path: string, { params = {}, headers = {} } = {}) => {
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl + (path.startsWith('/') ? path : `/${path}`))}`
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
