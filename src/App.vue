<!--
 * @Date         : 2023-05-19 15:41:25
 * @LastEditors  : 庄鸿斌
 * @LastEditTime : 2023-12-11 17:39:04
 * @Author       : 
 * @Description  : 
-->
<script setup lang="ts">
  import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
  onLaunch(() => {
    console.log('App Launch')
  })
  onShow(() => {
    console.log('App Show')
  })
  onHide(() => {
    console.log('App Hide')
  })
</script>
<style lang="scss">
  @import '@km/mdm-ui/app.scss';
  @import './static/iconfont/iconfont.css';
  @import './style/index.scss';
  // 改成专卖行业色调, 参考ui色调标准： https://www.figma.com/file/GUReDhYKuHqf0DwAsD8kAc/ERP---%E7%A7%BB%E5%8A%A8---%E6%96%B0-(2)?node-id=15302%3A160944&mode=dev
  page {
    // 默认一个颜色值
    --main-color: #29cc60;
    /* stylelint-disable-next-line custom-property-pattern */
    --main-color-Brand-3: #a5f2b7;
    /* stylelint-disable-next-line custom-property-pattern */
    --main-color-Brand-1: #ebffed;

    font-family: $font-family;
  }
</style>
