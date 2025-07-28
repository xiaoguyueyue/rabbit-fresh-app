<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryMutliAPI, getHomeHotMutliAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotCategoryItem } from '@/types/home.d.ts'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import { useGuessList } from '@/composables'

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

const isLoading = ref(true)

// 页面加载
onLoad(() => {
  isLoading.value = true
  Promise.all([getHomeBannerData(), getHomeCategoryMutliData(), getHomeHotMutliData()])
  isLoading.value = false
})

const { guessRef, onScrolltolower } = useGuessList()

const isTriggered = ref(false)
const onRefresherrefresh = async () => {
  isLoading.value = true
  isTriggered.value = true
  // await getHomeBannerData()
  // await getHomeCategoryMutliData()
  // await getHomeHotMutliData()
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCategoryMutliData(),
    getHomeHotMutliData(),
    guessRef.value?.getMore(),
  ])
  uni.showToast({
    title: '刷新成功',
    icon: 'none',
  })
  isTriggered.value = false
  isLoading.value = false
}
</script>

<template>
  <CustomNavbar />
  <scroll-view
    refresher-enabled
    :refresher-triggered="isTriggered"
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <XtxSwiper :list="bannerItemList" />
      <CategoryPanel :list="categoryItemList" />
      <HotPanel :list="hotItemList" />
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
page {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
}
.scroll-view {
  flex: 1;
}
</style>
