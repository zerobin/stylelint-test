/*
 * @Author       : Mx
 * @Date         : 2022-04-28 16:06:44
 * @Description  : 切换环境 重新生成ext.json、manifest.json
 */
const fs = require('fs')
const envObj = require('./env.config')
const manifest = require('./manifest')

const { NODE_ENV } = process.env
const envDetail = envObj[NODE_ENV]

// 根据运行环境，写ext.json、manifest.json
const writeUniappConfig = () => {
  return new Promise((resolve, reject) => {
    try {
      // 写入manifest.json
      fs.writeFileSync('./src/manifest.json', JSON.stringify(manifest, null, 4))
      resolve({ message: '小程序配置文件已生成', success: true })
    } catch (error) {
      reject(error)
    }
  })
}

// 写baseUrl
const writeBaseUrl = () => {
  return new Promise((resolve, reject) => {
    fs.writeFile(
      './src/utils/baseUrl.ts',
      "export const baseUrl = '" +
      envDetail.baseAPIUrl +
      "';\n" +
      "export const urlEnv = '" +
      envDetail.label_en +
      "';",
      'utf8',
      function (error) {
        if (error) {
          console.log(error)
          reject(error)
        }
        resolve({ message: 'baseUrl写入成功' })
      }
    )
  })
}

// 执行
const exceScript = async () => {
  try {
    await Promise.all([
      writeUniappConfig(), // 修改ext.json、manifest.json
      writeBaseUrl(), // baseUrl
    ])
    console.log(
      `-----已切换至${envDetail.label}---------\n`
    )
    Object.keys(envDetail).forEach((key) => {
      console.log(`${key}: ${envDetail[key]}\n`)
    })

  } catch (error) {
    console.error(error)
  }
}

exceScript()