import axios from 'axios'
import { environment } from '@/models/environment'
export default {
  request (routeJson, params) {
    const instance = axios.create({
      baseURL: environment.API_URL,
      timeout: 100000
    })
    let method = routeJson.method
    let url = routeJson.url
    let config = {
      url: url
    }
    if (method === 'get') {
      config = { ...config, params: params }
    } else {
      config = { ...config, data: params }
    }
    return instance.request(config).then(response => {
      console.log(response.data)
    }).catch(function (error) {
      if (error.response) {
        console.log(error.response)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
      console.log(error.config)
    })
  }
}
