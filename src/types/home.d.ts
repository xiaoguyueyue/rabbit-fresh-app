import type { GoodsItem } from "./global"

export type BannerItem = {
  id: string
  imgUrl: string
  hrefUrl: string
  type: number
}

export type CategoryItem = {
  id: string
  name: string
  icon: string
}

export type HotCategoryItem = {
  id: string
  alt: string
  pictures: string[]
  target: string
  title: string
  type: string
}

export type GuessLikeItem = GoodsItem
