<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getHomeGoodsGuessLikeAPI } from '@/services/home'
import type { GuessLikeItem } from '@/types/home'
import type { PageParams } from '@/types/global'

const guessLikeItems = ref<GuessLikeItem[]>([])
const pageParams: Required<PageParams> = {
  page: 1,
  pageSize: 10,
}
const finished = ref(false)
const loading = ref(false)
const getHomeGoodsGuessLikeData = async () => {
  // 如果已经没有更多数据了，直接返回
  if (finished.value) {
    return uni.showToast({
      title: '没有更多数据了',
      icon: 'none',
    })
  }
  // 如果正在加载中，直接返回
  if (loading.value) {
    return
  }
  loading.value = true
  // 获取猜你喜欢数据
  // 注意：如果是下拉刷新，pageParams.page 应该重置为 1
  if (pageParams.page === 1) {
    guessLikeItems.value = []
  }
  // 调用 API 获取数据
  const res = await getHomeGoodsGuessLikeAPI(pageParams)
  guessLikeItems.value.push(...res.result.items)
  if (res.result.pages <= pageParams.page) {
    finished.value = true
  } else {
    // 否则，增加页码，准备下一次加载
    pageParams.page += 1
  }
  loading.value = false
  // 如果没有数据，显示提示信息
  if (guessLikeItems.value.length === 0) {
    uni.showToast({
      title: '没有数据',
      icon: 'none',
    })
  }
}

// 重置数据
const resetData = () => {
  guessLikeItems.value = []
  pageParams.page = 1
  finished.value = false
  loading.value = false
}

onMounted(() => {
  getHomeGoodsGuessLikeData()
})

//暴露
defineExpose({
  resetData,
  getMore: getHomeGoodsGuessLikeData,
})
</script>

<template>
  <!-- 猜你喜欢 -->
  <view class="caption">
    <text class="text">猜你喜欢</text>
  </view>
  <view class="guess">
    <navigator
      class="guess-item"
      v-for="item in guessLikeItems"
      :key="item.id"
      :url="`/pages/goods/goods?id=${item.id}`"
    >
      <image class="image" mode="aspectFill" :src="item.picture"></image>
      <view class="name"> {{ item.name }} </view>
      <view class="price">
        <text class="small">¥</text>
        <text>{{ item.price }}</text>
      </view>
    </navigator>
  </view>
  <view class="loading-text">
    {{ finished ? '没有更多数据了' : loading ? '正在加载...' : '' }}
  </view>
</template>

<style lang="scss">
:host {
  display: block;
}
/* 分类标题 */
.caption {
  display: flex;
  justify-content: center;
  line-height: 1;
  padding: 36rpx 0 40rpx;
  font-size: 32rpx;
  color: #262626;
  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 28rpx 0 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

/* 猜你喜欢 */
.guess {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx;
  .guess-item {
    width: 345rpx;
    padding: 24rpx 20rpx 20rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: #fff;
  }
  .image {
    width: 304rpx;
    height: 304rpx;
  }
  .name {
    height: 75rpx;
    margin: 10rpx 0;
    font-size: 26rpx;
    color: #262626;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .price {
    line-height: 1;
    padding-top: 4rpx;
    color: #cf4444;
    font-size: 26rpx;
  }
  .small {
    font-size: 80%;
  }
}
// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>
