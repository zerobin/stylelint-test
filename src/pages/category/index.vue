<!--
 * @Date         : 2023-12-06 09:49:56
 * @LastEditors  : 庄鸿斌
 * @LastEditTime : 2023-12-11 17:24:59
 * @Author       : 
 * @Description  : 
-->

<template>
  <view class="catogary">
    <view>
      <!-- 字体图标 -->
      <view>
        <i class="iconfont icon-shoucang-xian">字体图标</i>
      </view>
      <view>
        <mdm-button @click="query" hairline plain type="primary">获取接口数据模拟</mdm-button>
      </view>
      <view>
        <mdm-button @click="sharePoster" type="primary">分享相关功能</mdm-button>
      </view>
      <view>
        <mdm-button @click="goDetail" hairline plain type="primary">录音拍照摄像</mdm-button>
      </view>
      <mdm-button @click="goChart" type="primary">图表相关功能</mdm-button>
    </view>
  </view>
</template>

<script lang="ts" setup>
  import { reactive, ref, toRefs } from 'vue'
  import { login } from '@/api/catogary'
  import userStore from '@/store/modules/user'

  let state = reactive({
    name: '姓名',
    age: 19
  })

  //数据仓库
  const store = userStore()

  /**
   * 模拟登录
   */
  const getMes = async () => {
    let params = {
      appId: 'wxa6985587336261f0',
      memberSourceChannel: 3,
      miniOpenId: '',
      openId: 'oF53k5G_61iI8JCKckwqChAtSg3E',
      signKey: '093qE5100QbaJN1BSR300hLeKt3qE51t',
      unionId: 'oB3QV6ksxCUguGPNNAuJkmFwgUdU'
    }
    const res = await login(params)

    uni.setStorageSync('token', res.data.token)
    //pinia 存储code
    store.setToken(res.data.token)
  }
  getMes()

  /**
   * 获取数据
   */
  const query = async () => {
    const res = await ApiCatogary.getList()
  }

  /** 跳转详情页 录音拍照摄像 */
  const goDetail = () => {
    uni.navigateTo({
      url: '/package-other/pages/detail'
    })
  }

  /** 跳转分享相关功能 */
  const sharePoster = () => {
    uni.navigateTo({
      url: '/package-other/pages/share'
    })
  }

  /** 图表相关功能 */
  const goChart = () => {
    uni.navigateTo({
      url: '/package-other/pages/chart'
    })
  }
</script>

<style>
  .catogary {
    text-align: center;
  }
</style>
