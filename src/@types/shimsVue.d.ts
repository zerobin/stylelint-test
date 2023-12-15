/*
 * @Date         : 2023-12-06 09:49:56
 * @LastEditors  : 庄鸿斌
 * @LastEditTime : 2023-12-14 14:10:09
 * @Author       :
 * @Description  :
 */
import { DefineComponent } from 'vue'
declare module '*.vue' {
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $StatusBarHeight: number
    $Custom: UniApp.GetMenuButtonBoundingClientRectRes
    $CustomBarHeight: number
    $MenuButtonBottom: number
    $MenuButtonRight: number
    $MenuButtonHeight: number
    $WindowHeight: number
    $ScreenHeight: number
    $SystemInfo: UniApp.GetSystemInfoResult
    $SafeArea: UniApp.SafeArea | undefined
    $BottomSafeHeight: number
    $TopSafeHeight: number
  }
}
