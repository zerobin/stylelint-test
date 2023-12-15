<!--
 * @Date         : 2023-12-12 16:27:05
 * @LastEditors  : 庄鸿斌
 * @LastEditTime : 2023-12-14 11:25:12
 * @Author       : 
 * @Description  : 
-->
<template>
  <view class="navigation" :style="{ height: $CustomBarHeight + 'px' }">
    <view class="navigation-container">
      <!-- 胶囊区域 -->
      <view
        class="capsule-box"
        :style="{
          height: $MenuButtonHeight + 'px',
          minHeight: $MenuButtonHeight + 'px',
          lineHeight: $MenuButtonHeight + 'px',
          bottom: $MenuButtonBottom + 'px',
          left: $MenuButtonRight + 'px'
        }">
        <!-- 导航内容区域 -->
        <slot></slot>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts" name="navigation">
  // import { getCurrentInstance } from 'vue'
  // const { proxy } = getCurrentInstance()
  // const customBarHeight = proxy.$CustomBarHeight
  // const menuButtonHeight = proxy.$MenuButtonHeight
  // const menuButtonBottom = proxy.$MenuButtonBottom
  // const menuButtonRight = proxy.$MenuButtonRight
  // console.log(customBarHeight, menuButtonHeight, '===')
</script>
<style lang="scss" scoped>
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    &-container {
      height: 100%;
      width: 100%;
      position: relative;
    }
  }

  .capsule-box {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
  }
</style>
