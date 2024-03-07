import { ResponseData } from '../common'
// 登录接口参数
export interface LoginForm {
  username: string
  password: string
}
export interface User {
  id: number
  username: string
  nickname: string
  email: string
  userPic: string
  createTime: string
  updateTime: string
  shopCarProductCount: number
  waitConfirmCount: number
  waitSendCount: number
  waitPayCount: number
  waitRateCount: number
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
