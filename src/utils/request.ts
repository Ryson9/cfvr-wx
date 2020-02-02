import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import store from '@/store'

const service: AxiosInstance = axios.create({
  baseURL: process.env.baseURL || '',
})

service.interceptors.request.use(
  (reqConfig: AxiosRequestConfig) => {
    console.log(reqConfig, '---------service.interceptors.request---------')
    const tmp = true
    if (tmp) {
      reqConfig.headers['X-token'] = 'this is eg'
    }
    return reqConfig
  },
)

service.interceptors.response.use(
  (res: AxiosResponse) => {
    console.log(res, '---------service.interceptors.response---------')
    return res
  },
)

export default service
