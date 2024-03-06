import request from '@/utils/request'
import type { ProductsResponseData } from './type'
enum API {
  PRODUCTLIST_URL = '/product/list',
  REGISTER_URL = '/user/register',
  LOGOUT_URL = '/admin/acl/index/logout'
}

//
export const productList = (data: { page: string; size: string }) => {
  return request.post<any, ProductsResponseData>(API.PRODUCTLIST_URL, data)
}
