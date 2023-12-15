<!--
 * @Date         : 2023-12-06 09:49:56
 * @LastEditors  : 庄鸿斌
 * @LastEditTime : 2023-12-14 14:40:16
 * @Author       : 
 * @Description  : 
-->
<template>
  <div class="index">
    <image
      class="index-gif"
      mode="scaleToFill"
      src="https://static-oss.platform.kemai.com.cn/youshu/vshop/assets/loadingProduct.gif"></image>
  </div>
</template>

<script setup lang="ts">
  import userStore from '@/store/modules/user'

  // 数据仓库
  const store = userStore()

  const login = () => {
    // #ifdef MP-WEIXIN
    return new Promise((resolve, reject) => {
      uni.login({
        success: res => {
          // pinia 存储code
          store.setCode(res.code)
          // 跳转至首页
          setTimeout(() => {
            uni.switchTab({
              url: '/pages/home/home'
            })
          }, 1000)
        },
        fail: () => {
          uni.showToast({
            title: '获取微信code值异常',
            icon: 'none'
          })
          reject()
        }
      })
    })
    // #endif

    // #ifdef H5 || APP-PLUS
    setTimeout(() => {
      uni.switchTab({
        url: '/pages/home/home'
      })
    }, 1000)
    // #endif
  }
  // 静默登录

  login()
</script>
<style scoped lang="scss">
  .index {
    text-align: center;
    .index-gif {
      width: 120rpx;
      height: 120rpx;
      margin: 0 auto;
      margin-top: 30vh;
      display: block;
      opacity: 0.4;
    }
  }
</style>
