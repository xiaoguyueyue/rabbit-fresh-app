import type { PageParams, PageResult } from '@/types/global'
import type { BannerItem, CategoryItem, GuessLikeItem, HotCategoryItem } from '@/types/home'
import { http } from '@/utils/http'

/**
 * 首页-广告区域-小程序
 * @param distributionSite 广告区域展示位置
 * 1 为首页（默认值）
 * 2 为商品分类页
 * @returns
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

export const getHomeCategoryMutliAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}

export const getHomeHotMutliAPI = () => {
  return http<HotCategoryItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}

export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessLikeItem>>({
    method: 'GET',
    url: `/home/goods/guessLike`,
    data,
  })
}
