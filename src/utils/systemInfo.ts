/*
 * @Date         : 2023-12-12 15:50:42
 * @LastEditors  : 庄鸿斌
 * @LastEditTime : 2023-12-14 14:17:08
 * @Author       :
 * @Description  :
 */
import { App } from 'vue'
export default function systemInfo(app: App) {
  //设置全局$global_systemInfo、CustomBar
  uni.getSystemInfo({
    success: function (e: UniApp.GetSystemInfoResult) {
      // 状态栏
      app.config.globalProperties.$StatusBarHeight = e.statusBarHeight!
      app.config.globalProperties.$CustomBarHeight = 0
      // #ifdef MP-WEIXIN
      // 胶囊按钮信息
      const capsuleInfo = uni.getMenuButtonBoundingClientRect()
      app.config.globalProperties.$Custom = capsuleInfo
      // 自定义导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
      app.config.globalProperties.$CustomBarHeight =
        (capsuleInfo.top - e.statusBarHeight!) * 2 + capsuleInfo.height + e.statusBarHeight!
      // 胶囊距离底部间距
      app.config.globalProperties.$MenuButtonBottom = capsuleInfo.top - e.statusBarHeight!
      // 胶囊距离右侧间距
      app.config.globalProperties.$MenuButtonRight = e.screenWidth - capsuleInfo.right
      // 胶囊高度
      app.config.globalProperties.$MenuButtonHeight = capsuleInfo.height
      // #endif

      // 窗口高度
      app.config.globalProperties.$WindowHeight = Math.max(e.windowHeight, e.windowWidth)
      // 可视区高度
      const screenHeight = Math.max(e.screenHeight, e.screenWidth)
      app.config.globalProperties.$ScreenHeight = screenHeight
      // 系统信息
      app.config.globalProperties.$SystemInfo = e

      // 安全区域 注意这里单位是px
      app.config.globalProperties.$SafeArea = e.safeArea
      const safeAreaHeight = Math.max(e.safeArea!.height, e.safeArea!.width)
      // 底部安全区域高度 - 适配横竖屏
      let bottomSafeHeight = 0
      if (e.safeArea && safeAreaHeight && screenHeight) {
        bottomSafeHeight = screenHeight - safeAreaHeight - e.statusBarHeight!
        if (bottomSafeHeight < 0) {
          bottomSafeHeight = 0
        }
      }
      app.config.globalProperties.$BottomSafeHeight = bottomSafeHeight
      // 顶部安全区域高度
      app.config.globalProperties.$TopSafeHeight = e.safeArea!.top
    }
  })
}
