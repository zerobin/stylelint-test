<!--
 * @Date         : 2023-12-06 09:49:56
 * @LastEditors  : 庄鸿斌
 * @LastEditTime : 2023-12-14 14:49:41
 * @Author       : 
 * @Description  : 
-->
<template>
  <!--  #ifdef MP-WEIXIN -->
  <navigation>自定义导航 </navigation>
  <!--  #endif -->
  <view
    class="user"
    :style="{
      marginTop: ($CustomBarHeight || 0) + 'px',
      height: `calc(100vh - var(--window-bottom) - (${$CustomBarHeight || 0}px))`
    }">
    <view class="userMessgae">
      <image
        :src="avatarUrl ? avatarUrl : `https://resource-bigdata.cs.kemai.com.cn/hcc/frontend/person.png`"
        class="avatar"
        mode="cover" />
      <view class="userName">
        {{ nickName }}
      </view>
    </view>
    <view class="userContent">
      <view class="content-item">
        <view class="content-item-icon">
          <image src="https://resource-bigdata.cs.kemai.com.cn/hcc/frontend/edit.png" />
        </view>
        <view class="content-item-text"> 意见反馈 </view>
      </view>
      <view class="content-item">
        <view class="content-item-icon">
          <image class="other_first_left_warp" src="https://resource-bigdata.cs.kemai.com.cn/hcc/frontend/guanyu.png" />
        </view>
        <view class="content-item-text"> 关于我们 </view>
      </view>
      <view class="content-item">
        <view class="content-item-icon">
          <image
            class="other_first_left_warp"
            src="https://resource-bigdata.cs.kemai.com.cn/hcc/frontend/lianxikefu.png" />
        </view>
        <view class="content-item-text"> 联系客服 </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
  import navigation from '@/components/navigation/index.vue'
  import userStore from '@/store/modules/user'
  import { computed } from 'vue'
  // store 数据状态管理
  const store = userStore()
  const avatarUrl = computed(() => {
    return store.userInfo.avatarUrl
  })
  const nickName = computed(() => {
    return store.userInfo.nickName
  })
</script>

<style lang="scss" scoped>
  .user {
    background: #f0f3f5;
    font-family: $font-family;
  }
  .userMessgae {
    background: linear-gradient(180deg, #00a3ff 0%, rgba(0, 163, 255, 0.5) 65.8%, rgba(0, 163, 255, 0) 100%);
    display: flex;
    padding: 20rpx;
    height: 200rpx;
    box-sizing: border-box;
    .avatar {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
    }
    .userName {
      font-size: 28rpx;
      line-height: 60rpx;
      color: #fff;
      margin-left: 40rpx;
    }
  }
  .userContent {
    margin: 24rpx;
    border-radius: 24rpx;
    background: #fff;

    .content-item {
      height: 100rpx;
      box-sizing: border-box;
      padding: 30rpx;
      display: flex;
      border-bottom: 1rpx solid #eee;
    }
    .content-item-icon {
      margin-right: 30rpx;
      width: 40rpx;
      height: 40rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
    .content-item-text {
      flex: 1;
    }
  }
</style>
