import { ResponseData } from '../common'
// 登录接口参数
export interface LoginForm {
  username: string
  password: string
}
export interface User {
  id: string
  username: string
  nickname: string
  email: string
  userPic: string
  createTime: string
  updateTime: string
}

export interface LoginResponseData extends ResponseData {
  data: string
}

export interface RegisterResponseData extends ResponseData {
  data: string
}

export interface LogoutResponseData extends ResponseData {
  data: null
}
export interface UserDetailResponseData extends ResponseData {
  data: User
}
