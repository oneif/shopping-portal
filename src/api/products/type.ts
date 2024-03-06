import { ResponsePaginationData } from '../common'

export type Products = {
  id: string
  name: string
  img: string
  description: string
  price: number
  unit: string
  typeId: string
  businessId: string
  count: string
  productType: string
  businessName: string
}
export interface ProductsResponseData extends ResponsePaginationData<Products> {
  data: Products[]
}
