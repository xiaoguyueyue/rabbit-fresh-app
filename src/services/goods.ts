import type { GoodsResult } from "@/types/goods"
import { http } from "@/utils/http"

export const getGoods = (id: string) => {
  return http<GoodsResult>({
    url: '/goods',
    method: "GET",
    data: {
      id,
    }
  })
}
