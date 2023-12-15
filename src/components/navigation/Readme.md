###### 小程序端自定义导航栏

在小程序端，我们可以通过修改 `pages.json` 文件对应页面`navigationStyle` 设置为`custom`

示例：

```json
{
  "pages": ["pages/index/index"],
  "window": {
    "navigationBarTitleText": "自定义导航栏",
    "navigationBarBackgroundColor": "#000000",
    "navigationBarTextStyle": "white"
  }
}
```

###### 自定义导航栏和原生胶囊位置设置

位置设置：
属性名 | 类型 | 说明
:--- | :--- | :---
$CustomBarHeight | Number | `导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度`
$MenuButtonHeight | Number | 胶囊高度
$MenuButtonBottom | Number | 胶囊距离底部的距离
$MenuButtonRight | Number | 胶囊距离右侧的距离

示例：

```vue
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

<script setup lang="ts" name="navigation"></script>
<style lang="scss" scoped>
  .navigation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    &-container {
      width: 100%;
      height: 100%;
      position: relative;
    }
  }

  .capsule-box {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
  }
</style>
```

###### 兼容性

`只适用于小程序端:`

在 h5 端实际没有和胶囊按钮同级的导航栏的，另外页面级别的高度设置需要减去自定义导航栏的高度，如果有底部导航栏（uni 原生的需要减去 var(--window-bottom)高度，自定义底部导航栏需要减去自定义的高度）,不然会出现滚动条的情况。

示例：

```vue
<template>
  <!--  #ifdef MP-WEIXIN -->
  <navigation>自定义导航</navigation>
  <!--  #endif -->
  <view
    class="user"
    :style="{
      marginTop: ($CustomBarHeight || 0) + 'px',
      height: `calc(100vh - var(--window-bottom) - (${$CustomBarHeight || 0}px))`
    }">
    自定义页面内容
  </view>
</template>
```

横竖屏切换时，需要调用`utils/systemInfo.ts`重新计算胶囊的位置
