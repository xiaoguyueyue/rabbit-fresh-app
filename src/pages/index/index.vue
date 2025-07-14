<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryMutliAPI, getHomeHotMutliAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotCategoryItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanek from './components/HotPanek.vue'

const bannerItemList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerItemList.value = res.result
}

const categoryItemList = ref<CategoryItem[]>([])
const getHomeCategoryMutliData = async () => {
  const res = await getHomeCategoryMutliAPI()
  categoryItemList.value = res.result
}

const hotItemList = ref<HotCategoryItem[]>([])
const getHomeHotMutliData = async () => {
  const res = await getHomeHotMutliAPI()
  hotItemList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryMutliData()
  getHomeHotMutliData()
})
</script>

<template>
  <CustomNavbar />
  <XtxSwiper :list="bannerItemList" />
  <CategoryPanel :list="categoryItemList" />
  <HotPanek :list="hotItemList" />
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
}
</style>
