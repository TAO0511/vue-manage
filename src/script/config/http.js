/*
 * @Author: kenter.zheng 
 * @Date: 2019-08-07 11:19:22 
 * @Last Modified by: kenter.zheng
 * @Last Modified time: 2019-12-03 18:40:40
 */
import axios from 'axios'
import { environment } from '@/models/environment'

const instance = axios.create({
  baseURL: environment.API_URL + '/admin/api/v1',
  timeout: 300000
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // conswwei  {
  // console.log('请求拦截器++++++++', config)
  // 在发送请求之前做些什么
  // return Promise.reject(config)
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // console.log('响应拦截器', response)
  // 对响应数据做点什么
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

const request = (routeJson, params) => {
  console.log('routeJson', routeJson);
  let method = routeJson.method
  let url = routeJson.url
  let config = {
    url: url,
    method: method
  }

  if (method === 'get') {
    config = { ...config, params: params }
  } else {
    config = { ...config, data: params }
  }
  

  return instance.request(config).then(response => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response.data)
    }
  }).catch(error => {
    if (error.response) {
      console.log(error.response)
    } else if (error.request) {
      console.log(error.request)
    } else {
      console.log('Error', error.message)
    }
    Promise.reject(error)
    console.log(error.config)
  })
}

// 
export default {
  request,
  instance
}
