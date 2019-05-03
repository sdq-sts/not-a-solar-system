import { Service } from './api'

const baseURL = process.env.NODE_ENV === 'production'
  ? process.env.VUE_APP_PROD_API
  : process.env.VUE_APP_DEV_API
const apiService = new Service({ baseURL, timeout: 5000 })

export { apiService }
