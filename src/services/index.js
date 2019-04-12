import { Service } from './api'

// ${process.env.BASE_URL}api/v1/`
const baseURL = process.env.NODE_ENV === 'production'
  ? `https://nass-api.sadraque.com.br/api/v1/`
  : `https://nass-api.sadraque.com.br/api/v1/`
const apiService = new Service({ baseURL, timeout: 5000 })

export { apiService }
