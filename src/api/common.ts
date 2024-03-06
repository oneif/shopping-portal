//全部接口返回的数据所共同的类型
export interface ResponseData {
  code: number
  message: string
}
// 带分页结果
export interface ResponsePaginationData<T> extends ResponseData {
  current: number
  size: number
  total: number
  pages: number
  data: T[]
}
