// 用户相关的接口
import request from '@/utils/request'
import type { LoginForm, LoginResponseData, RegisterResponseData, LogoutResponseData } from './type'
enum API {
  LOGIN_URL = '/user/login',
  REGISTER_URL = '/user/register',
  LOGOUT_URL = '/admin/acl/index/logout'
}

// 登录接口
export const login = (data: LoginForm) => {
  return request.post<any, LoginResponseData>(API.LOGIN_URL, data)
}
// 注册接口
export const register = (data: LoginForm) => {
  return request.post<any, RegisterResponseData>(API.REGISTER_URL, data)
}
// 退出登录
export const logout = () => {
  return request.post<any, LogoutResponseData>(API.LOGOUT_URL)
}
