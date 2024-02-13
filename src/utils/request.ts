import useUserStore from '@/stores/user'
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:9090',
  timeout: 1000 * 60
})

// 请求拦截器
request.interceptors.request.use((config) => {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  const token = useUserStore().token
  if (token) config.headers['Authorization'] = token
  return config
})

// 响应拦截器
request.interceptors.response.use(
  (res) => {
    const code: number = res.data.code
    let msg: string
    if (code === 200) {
      return res.data
    } else {
      switch (code) {
        case 401:
          msg = 'token过期'
          break
        case 403:
          msg = '无权访问'
          break
        case 404:
          msg = '请求地址错误'
          break
        case 500:
          msg = '服务器出现问题'
          break
        case -1:
          msg = res.data?.message || 'error'
          break
        default:
          msg = '出错了，请稍后重试'
      }
      ElMessage({
        type: 'error',
        message: msg
      })
      return Promise.reject(res.data)
    }
  },
  (err) => {
    let msg: string
    const status = err.response.status
    switch (status) {
      case 401:
        msg = err.response?.data?.message || 'token过期'
        break
      case 403:
        msg = err.response?.data?.message || '无权访问'
        break
      case 404:
        msg = err.response?.data?.message || '请求地址错误'
        break
      case 500:
        msg = err.response?.data?.message || '服务器出现问题'
        break
      case -1:
        msg = 'error'
        break
      default:
        msg = '出错了，请稍后重试'
    }
    ElMessage({
      type: 'error',
      message: msg
    })
    return Promise.reject(err)
  }
)

export default request
