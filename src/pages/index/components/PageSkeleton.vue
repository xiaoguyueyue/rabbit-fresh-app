<template name="skeleton">
  <view class="sk-container">
    <view is="components/XtxSwiper">
      <view class="carousel XtxSwiper--carousel">
        <swiper :autoplay="false" :circular="true" :interval="3000" :current="0">
          <swiper-item
            style="
              position: absolute;
              width: 100%;
              height: 100%;
              transform: translate(0%, 0px) translateZ(0px);
            "
          >
            <navigator class="navigator XtxSwiper--navigator" hover-class="none">
              <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
            </navigator>
          </swiper-item>
        </swiper>
        <view class="indicator XtxSwiper--indicator">
          <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot"></text>
          <text class="dot XtxSwiper--dot"></text>
        </view>
      </view>
    </view>
    <view is="pages/index/components/CategoryPanel">
      <view class="category CategoryPanel--category">
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-570 sk-text"
            >居家</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-801 sk-text"
            >锦鲤</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-631 sk-text"
            >服饰</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-714 sk-text"
            >母婴</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-278 sk-text"
            >个护</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-735 sk-text"
            >严选</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-31 sk-text"
            >数码</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-570 sk-text"
            >运动</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-940 sk-text"
            >杂项</text
          >
        </navigator>
        <navigator class="category-item CategoryPanel--category-item" hover-class="none">
          <image class="icon CategoryPanel--icon sk-image"></image>
          <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-1 sk-text"
            >品牌</text
          >
        </navigator>
      </view>
    </view>
    <view is="pages/index/components/HotPanel">
      <view class="panel HotPanel--panel hot HotPanel--hot">
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-422 sk-text"
              >特惠推荐</text
            >
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-857 sk-text"
              >精选全攻略</text
            >
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-7 sk-text"
              >爆款推荐</text
            >
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-598 sk-text"
              >最受欢迎</text
            >
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-664 sk-text"
              >一站买全</text
            >
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-974 sk-text"
              >精心优选</text
            >
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
        <view class="item HotPanel--item">
          <view class="title HotPanel--title">
            <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-838 sk-text"
              >新鲜好物</text
            >
            <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-819 sk-text"
              >生活加分项</text
            >
          </view>
          <navigator class="cards HotPanel--cards" hover-class="none">
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
            <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          </navigator>
        </view>
      </view>
    </view>
    <view is="components/XtxGuess" class="r r">
      <view class="caption XtxGuess--caption">
        <text
          class="text XtxGuess--text sk-transparent sk-text-0-0000-511 sk-text sk-pseudo sk-pseudo-circle"
          >猜你喜欢</text
        >
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-5714-593 {
  background-image: linear-gradient(
    transparent 3.5714%,
    #eeeeee 0%,
    #eeeeee 96.4286%,
    transparent 0%
  ) !important;
  background-size: 100% 28rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-553 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.2rpx;
  position: relative !important;
}
.sk-text-14-2857-570 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-801 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-631 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-714 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-278 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-735 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-31 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-940 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-1 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.4rpx;
  position: relative !important;
}
.sk-text-14-2857-422 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-857 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-7 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-598 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-664 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-974 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-14-2857-838 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.8rpx;
  position: relative !important;
}
.sk-text-14-2857-819 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 33.6rpx;
  position: relative !important;
}
.sk-text-0-0000-511 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 32rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
