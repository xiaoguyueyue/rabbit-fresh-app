import type { HotRecommendParams, HotResult } from "@/types/hot"
import { http } from "@/utils/http"

export const getHotRecommendAPI = (url: string, data?: HotRecommendParams) => {
  return http<HotResult>({
    method: 'GET',
    url,
    data,
  })
}
