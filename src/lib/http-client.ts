import axios, { AxiosResponse } from 'axios'

interface ClientOptions {
  baseURL?: string
  withCredentials?: boolean
}

export const createClient = ({
  baseURL = `${import.meta.env.VITE_API_URL}`,
  withCredentials = false,
}: ClientOptions) => {
  const buildUrl = (path: string) => baseURL + (path.startsWith('/') ? path : `/${path}`)

  const get = async (path: string, { params = {}, headers = {} } = {}) => {
    const url = buildUrl(path)

    try {
      const { data }: AxiosResponse = await axios.get(url, {
        params,
        headers,
        withCredentials,
      })
      return data
    } catch (error: unknown) {
      console.error(error)
    }
  }

  const post = async (path: string, body: unknown, { params = {}, headers = {} } = {}) => {
    const url = buildUrl(path)
    try {
      const { data } = await axios.post(url, body, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
        params,
      })
      return data
    } catch (error: unknown) {
      console.error(error)
    }
  }

  const patch = async (path: string, body: unknown, { params = {}, headers = {} } = {}) => {
    const url = buildUrl(path)
    try {
      const { data } = await axios.patch(url, body, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          ...headers,
        },
        params,
      })
      return data
    } catch (error: unknown) {
      console.error(error)
    }
  }

  const remove = async (path: string, { params = {}, headers = {} }) => {
    const url = buildUrl(path)
    try {
      const { data } = await axios.delete(url, {
        headers,
        params,
      })
      return data
    } catch (error: unknown) {
      console.error(error)
    }
  }

  return {
    get,
    post,
    remove,
    patch,
  }
}

export default createClient
