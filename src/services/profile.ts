import type { ProfileDetail, ProfileParams } from '@/types/member'
import { http } from '@/utils/http'

export const getMemberProfile = () => {
  return http<ProfileDetail>({
    url: '/member/profile',
    method: 'GET',
  })
}
export const updateMemberProfile = (data: ProfileParams) => {
  return http<ProfileDetail>({
    url: '/member/profile',
    method: 'PUT',
    data,
  })
}
