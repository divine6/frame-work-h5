
import axios from './axios'

// 通用方法
const GET = (url, params) => {
  return axios.get(`${url}`, { params: params }).then(res => res.data)
}
const POST = (url, params) => {
  return axios.post(`${url}`, params).then(res => res.data)
}

const PUT = (url, params) => {
  return axios.put(`${url}`, params).then(res => res.data)
}

const DELETE = (url, params) => {
  return axios.delete(`${url}`, { params: params }).then(res => res.data)
}

const PATCH = (url, params) => {
  return axios.patch(`${url}`, params).then(res => res.data)
}

export default { GET, POST, PUT, DELETE, PATCH }
