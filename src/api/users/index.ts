// 用户相关的接口
import request from '@/utils/request'
import type {
  LoginForm,
  LoginResponseData,
  RegisterResponseData,
  LogoutResponseData,
  UserDetailResponseData
} from './type'
enum API {
  LOGIN_URL = '/user/login',
  REGISTER_URL = '/user/register',
  LOGOUT_URL = '/admin/acl/index/logout',
  DETAIL_URL = '/user/detail'
}

export const login = (data: LoginForm) => {
  return request.post<any, LoginResponseData>(API.LOGIN_URL, data)
}

export const register = (data: LoginForm) => {
  return request.post<any, RegisterResponseData>(API.REGISTER_URL, data)
}

export const logout = () => {
  return request.post<any, LogoutResponseData>(API.LOGOUT_URL)
}

export const getUserDetail = (username: string) => {
  return request.post<any, UserDetailResponseData>(API.DETAIL_URL, { username })
}
