import axios from 'axios'
import querystring from 'querystring'

let instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  responseType: 'json',
  transformRequest: [
    data => querystring.stringify(data)
  ]
})

instance.interceptors.request.use(async (config) => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return config
}, err => Promise.reject(err))

instance.interceptors.response.use(response => Promise.resolve(response.data), err => {
  if (err & err.response) {}
  return Promise.reject(err)
})

export default instance
