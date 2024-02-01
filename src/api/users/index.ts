// 用户相关的接口
import request from '@/utils/request'
import type { LoginForm, LoginResponseData, UserInfoResponseData, LogoutResponseData } from './type'
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout'
}

// 登录接口
export const login = (data: LoginForm) => {
  return request.post<any, LoginResponseData>(API.LOGIN_URL, data)
}
// 注册接口
export const getInfo = () => {
  return request.get<any, UserInfoResponseData>(API.USERINFO_URL)
}
// 退出登录
export const logout = () => {
  return request.post<any, LogoutResponseData>(API.LOGOUT_URL)
}
