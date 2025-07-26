import type { CategoryTopItem } from "@/types/gategory"
import { http } from "@/utils/http"

export const getCategoryTopAPI = () => {
  return http<CategoryTopItem[]>({
    method: 'GET',
    url: '/category/top'
  })
}
