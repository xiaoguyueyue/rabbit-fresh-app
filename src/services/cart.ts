import type { AddCartParams, CartItem } from '@/types/cart'
import { http } from '@/utils/http'

export const postMemberCartAPI = (data: AddCartParams) => {
  return http({
    method: 'POST',
    url: '/member/cart',
    data,
  })
}

export const getMemberCartAPI = () => {
  return http<CartItem[]>({
    method: 'GET',
    url: '/member/cart',
  })
}

export const deletedMemberCartAPI = (data: { ids: string[] }) => {
  return http({
    method: 'DELETE',
    url: '/member/cart',
    data: data,
  })
}

export const putMemberCartBySkuIdAPI = (
  skuId: string,
  data: { selected?: boolean; count: number },
) => {
  return http({
    method: 'PUT',
    url: `/member/cart/${skuId}`,
    data: data,
  })
}
