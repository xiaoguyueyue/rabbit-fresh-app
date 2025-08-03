import type { AddressItem, AddressParams } from '@/types/address'
import { http } from '@/utils/http'

export const PostMemberAddressAPI = (data: AddressParams) => {
  return http({
    url: '/member/address',
    method: 'POST',
    data: data,
  })
}

export const GetMemberAddressAPI = () => {
  return http<AddressItem[]>({
    url: `/member/address`,
    method: 'GET',
  })
}

export const GetMemberAddressDetailAPI = (id: string) => {
  return http<AddressItem>({
    url: `/member/address/${id}`,
    method: 'GET',
  })
}

export const PutMemberAddressDetailAPI = (id: string, data: AddressParams) => {
  return http<AddressItem>({
    url: `/member/address/${id}`,
    method: 'PUT',
    data: data,
  })
}

export const DeleteMemberAddressAPI = (id: string) => {
  return http({
    url: `/member/address/${id}`,
    method: 'DELETE',
  })
}
