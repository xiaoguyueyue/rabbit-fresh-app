<script setup lang="ts">
import { getMemberProfile, updateMemberProfile } from '@/services/profile'
import { useMemberStore } from '@/stores'
import type { Gender, ProfileDetail } from '@/types/member'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const memberStore = useMemberStore()

// 获取用户信息
const profileDetail = ref({} as ProfileDetail)
const memberProfile = async () => {
  const res = await getMemberProfile()
  profileDetail.value = res.result
}

// 更新用户信息
const onSubmit = async () => {
  console.log(profileDetail)
  const res = await updateMemberProfile({
    nickname: profileDetail.value?.nickname,
    gender: profileDetail.value?.gender,
    birthday: profileDetail.value?.birthday,
    profession: profileDetail.value?.profession,
    provinceCode: regionCodes[0],
    cityCode: regionCodes[1],
    districtCode: regionCodes[2],
  })
  memberStore.profile!.nickname = profileDetail.value?.nickname
  uni.navigateBack()
  uni.showToast({
    title: '个人信息更新成功',
    icon: 'success',
  })
}

onLoad(() => {
  // 页面加载时获取用户信息
  memberProfile()
})

const onAvatarChange = () => {
  uni.chooseMedia({
    count: 1,
    mediaType: ['image'],
    success: (res) => {
      const { tempFilePath } = res.tempFiles[0]
      uni.uploadFile({
        url: '/member/profile/avatar',
        name: 'file',
        filePath: tempFilePath,
        success: (success) => {
          if (success.statusCode === 200) {
            const data = JSON.parse(success.data)
            if (data.code === 0) {
              // 更新头像
              profileDetail.value!.avatar = data.result.avatar
              uni.showToast({
                title: '头像更新成功',
                icon: 'success',
              })
              memberStore.profile!.avatar = profileDetail.value?.avatar
            } else {
              uni.showToast({
                title: '头像更新失败',
                icon: 'none',
              })
            }
          } else {
            uni.showToast({
              title: '网络错误，请稍后再试',
              icon: 'none',
            })
          }
        },
      })
    },
  })
}

const onGenderChange: UniHelper.RadioGroupOnChange = (ev) => {
  profileDetail.value.gender = ev.detail.value as Gender
}

const onBirthdayChange: UniHelper.DatePickerOnChange = (ev) => {
  profileDetail.value.birthday = ev.detail.value
}

let regionCodes: [string, string, string] = ['', '', '']
const onLocationChange: UniHelper.RegionPickerOnChange = (ev) => {
  console.log(ev)
  const [province, city, district] = ev.detail.value
  profileDetail.value.fullLocation = `${province} ${city} ${district}`
  regionCodes = ev.detail.code as [string, string, string]
}
</script>

<template>
  <view class="viewport">
    <!-- 导航栏 -->
    <view class="navbar" :style="{ paddingTop: safeAreaInsets?.top + 'px' }">
      <navigator open-type="navigateBack" class="back icon-left" hover-class="none"></navigator>
      <view class="title">个人信息</view>
    </view>
    <!-- 头像 -->
    <view class="avatar">
      <view @tap="onAvatarChange" class="avatar-content">
        <image class="image" :src="profileDetail?.avatar" mode="aspectFill" />
        <text class="text">点击修改头像</text>
      </view>
    </view>
    <!-- 表单 -->
    <view class="form">
      <!-- 表单内容 -->
      <view class="form-content">
        <view class="form-item">
          <text class="label">账号</text>
          <text class="account">{{ profileDetail?.account }}</text>
        </view>
        <view class="form-item">
          <text class="label">昵称</text>
          <input
            class="input"
            type="text"
            placeholder="请填写昵称"
            v-model="profileDetail!.nickname"
          />
        </view>
        <view class="form-item">
          <text class="label">性别</text>
          <radio-group @change="onGenderChange">
            <label class="radio">
              <radio value="男" color="#27ba9b" :checked="profileDetail?.gender === '男'" />
              男
            </label>
            <label class="radio">
              <radio value="女" color="#27ba9b" :checked="profileDetail?.gender === '女'" />
              女
            </label>
          </radio-group>
        </view>
        <view class="form-item">
          <text class="label">生日</text>
          <picker
            class="picker"
            mode="date"
            start="1900-01-01"
            :end="new Date()"
            :value="profileDetail!.birthday"
            @change="onBirthdayChange"
          >
            <view v-if="profileDetail?.birthday">{{ profileDetail?.birthday }}</view>
            <view class="placeholder" v-else>请选择日期</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">城市</text>
          <picker
            @change="onLocationChange"
            class="picker"
            mode="region"
            :value="profileDetail!.fullLocation?.split(' ')"
          >
            <view v-if="profileDetail?.fullLocation">{{ profileDetail?.fullLocation }}</view>
            <view class="placeholder" v-else>请选择城市</view>
          </picker>
        </view>
        <view class="form-item">
          <text class="label">职业</text>
          <input
            class="input"
            type="text"
            placeholder="请填写职业"
            v-model="profileDetail!.profession"
          />
        </view>
      </view>
      <!-- 提交按钮 -->
      <button class="form-button" @tap="onSubmit">保 存</button>
    </view>
  </view>
</template>

<style lang="scss">
page {
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-image: url(https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/order_bg.png);
  background-size: auto 420rpx;
  background-repeat: no-repeat;
}

// 导航栏
.navbar {
  position: relative;

  .title {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
  }

  .back {
    position: absolute;
    height: 40px;
    width: 40px;
    left: 0;
    font-size: 20px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

// 头像
.avatar {
  text-align: center;
  width: 100%;
  height: 260rpx;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 160rpx;
    height: 160rpx;
    border-radius: 50%;
    background-color: #eee;
  }

  .text {
    display: block;
    padding-top: 20rpx;
    line-height: 1;
    font-size: 26rpx;
    color: #fff;
  }
}

// 表单
.form {
  background-color: #f4f4f4;

  &-content {
    margin: 20rpx 20rpx 0;
    padding: 0 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  &-item {
    display: flex;
    height: 96rpx;
    line-height: 46rpx;
    padding: 25rpx 10rpx;
    background-color: #fff;
    font-size: 28rpx;
    border-bottom: 1rpx solid #ddd;

    &:last-child {
      border: none;
    }

    .label {
      width: 180rpx;
      color: #333;
    }

    .account {
      color: #666;
    }

    .input {
      flex: 1;
      display: block;
      height: 46rpx;
    }

    .radio {
      margin-right: 20rpx;
    }

    .picker {
      flex: 1;
    }
    .placeholder {
      color: #808080;
    }
  }

  &-button {
    height: 80rpx;
    text-align: center;
    line-height: 80rpx;
    margin: 30rpx 20rpx;
    color: #fff;
    border-radius: 80rpx;
    font-size: 30rpx;
    background-color: #27ba9b;
  }
}
</style>
