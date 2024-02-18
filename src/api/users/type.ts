// 登录接口需要携带的参数
export interface LoginForm {
  username: string
  password: string
}
//全部接口返回的数据所共同的类型
export interface ResponseData {
  code: number
  message: string
}

// 登录接口返回的数据类型
export interface LoginResponseData extends ResponseData {
  data: string
}
// 注册接口返回的数据类型
export interface RegisterResponseData extends ResponseData {
  data: string
}
// 退出登录接口返回的数据类型
export interface LogoutResponseData extends ResponseData {
  data: null
}
