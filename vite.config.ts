/*
 * @Date         : 2023-12-06 09:49:56
 * @LastEditors  : 庄鸿斌
 * @LastEditTime : 2023-12-11 15:38:38
 * @Author       : 
 * @Description  : 
 */

import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), VueSetupExtend()],
  resolve: {
    // 配置别名
    alias: {
      '@': resolve(__dirname, 'src')// 设置 `@` 指向 `src` 目录
    }
  },
});
