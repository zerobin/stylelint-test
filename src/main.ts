/*
 * @Date         : 2023-12-06 09:49:56
 * @LastEditors  : 庄鸿斌
 * @LastEditTime : 2023-12-12 16:10:09
 * @Author       : 
 * @Description  : 
 */

import { createSSRApp } from "vue";
import App from "./App.vue";
import systemInfo from '@/utils/systemInfo'
//引入pinia 
import store from "@/store"

export function createApp() {
  const app = createSSRApp(App);
  systemInfo(app)
  app.use(store)
  return {
    app,
  };
}
