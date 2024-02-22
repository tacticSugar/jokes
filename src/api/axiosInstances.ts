import type { AxiosInstance } from 'axios'
import axios from 'axios'
import { BASE_URL } from '../constants/constants'

/** axios инстанс get запроса с bearer токеном */
export const axiosGet: AxiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'GET',
  baseURL: BASE_URL,
})

/** interceptors...*/
