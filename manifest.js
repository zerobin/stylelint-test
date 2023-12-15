/*
 * @Author       : Mx
 * @Date         : 2022-04-28 16:32:31
 * @Description  : 
 */
const envObj = require('./env.config')
const { NODE_ENV } = process.env
const envDetail = envObj[NODE_ENV]

module.exports = {
  name: 'uniapp-template-frontend',
  appid: envDetail.AppId,
  description: '',
  versionName: "1.4.1",
  versionCode: "100",
  transformPx: false,
  'app-plus': {
    usingComponents: true,
    nvueStyleCompiler: 'uni-app',
    compilerVersion: 3,
    splashscreen: {
      alwaysShowBeforeRender: true,
      waiting: true,
      autoclose: true,
      delay: 0
    }
  },
  'mp-weixin': {
    /* 微信小程序特有相关 */
    appid: envDetail.AppId,
    setting: {
      urlCheck: false,
    },
    optimization: {
      subPackages: true
    },
    usingComponents: true,
    permission: {
      'scope.userLocation': {
        desc: '根据您的定位获取附近门店',
      },
    },
    uniStatistics: {
      enable: true
    }
  },
  vueVersion: 3
}
