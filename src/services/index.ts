import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const instance = axios.create({

})

instance.interceptors.request.use((config :InternalAxiosRequestConfig) => {
  return config
} , (err : AxiosError) => {
  return Promise.reject(err)
})


instance.interceptors.response.use((response : AxiosResponse) => {
  return response
},(err :AxiosError) => {
  return err
})


const request = (config : AxiosRequestConfig) => {
  return instance.request(config)
}
export default request