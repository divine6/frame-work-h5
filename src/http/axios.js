
import axios from 'axios'
import router from '../router'
import { Toast } from 'vant'

const token = ''

// 创建axios 实例
const options = {
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 10000 // 请求超时
}
const instance = axios.create(options)

instance.defaults.withCredentials = false
instance.defaults.headers.common.token = token
instance.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'// get配置请求头
instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'// post配置请求头

// http request拦截器 添加一个请求拦截器
instance.interceptors.request.use(config => {
  const token = window.localStorage.getItem('token')
  if (token) {
    // 将token放到请求头发送给服务器,将tokenkey放在请求头中
    config.headers.token = token
  }
  return config
}, (error) => {
  Toast.fail('请求超时')
  // Do something with request error
  return Promise.reject(error)
})

// 添加一个响应拦截器
instance.interceptors.response.use(response => {
  if (response.data && response.data.code) {
    if (response.data.message === 'token失效' || response.data.message === '请求头中没有token') {
      // 未登录
      Toast.fail('登录信息已失效，请重新登录')
      router.push({ name: 'login' })
    }
    if (parseInt(response.data.code) === -1) {
      Toast.fail('请求失败')
    }
  }
  return response
}, error => {
  Toast.fail('服务器连接失败')
  return Promise.reject(error)
})

export default instance
