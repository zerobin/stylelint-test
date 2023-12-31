<!--
 * @Author: Mx
 * @Date: 2022-04-18 10:02:38
 * @Description: 必读文档
-->

## 1.项目整体目录

```ts
├── dist/                   // 打包文件的目录
├── src/
|   ├── @types/             // 声明文件
|   ├── api/                // api接口地址
|   ├── components/         // 公共组件
|   |   ├── km-empty                  //empty
|   |   ├── km-header                 //公共头部
|   |   └── km-iconfont               //iconfont
|   |   └── km-loading                //loadin
|   |   └── u-charts                  //u-charts
|   ├── pages/              // 页面
|   ├── assets/             // 静态文件
|   ├── store/              // vuex
|   |   ├── index.ts
|   |   └── modules
|   |       └── app
|   ├── storePinia/         //pinia
|   |   ├── index.ts
|   |   └── modules
|   |       └── user        //用户信息
|   ├── styles/             // 样式文件
|   ├── utils/              // 工具函数
|   ├── App.vue
|   ├── main.ts
|   ├── manifest.json
|   ├── pages.json          // 页面路径
|   └── uni.scss
├── .eslintignore           // eslint忽略文件
├── .eslintrc.js            // eslint配置文件
├── .gitignore              // git忽略文件
├── .npmrc                  // npm配置文件
├── .prettierrc             // prettier配置文件
├── .stylelintignore        // stylelint忽略文件
├── .stylelintrc            // stylelint配置文件
├── .env.config             // 环境配置
├── .env.switch             // 环境切换
├── index.html
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## 2.构建命令(需要进行环境切换，再进行构建打包)

请选使用环境切换命令，生成 ext.json、manifest.json 文件

- 环境切换
  - npm run switch:dev (开发环境)
  - npm run switch:cs (测试环境)
  - npm run switch:pre (预发布环境)
  - npm run switch:pro (生产环境)
- 开发
  - npm run dev:h5
  - npm run serve
- 打包
  - npm run build:h5
  - npm run build
  -

## 3、git 提交规范

| 类型     | 描述                                                   |
| -------- | ------------------------------------------------------ |
| build    | 编译相关的修改，例如发布版本、对项目构建或者依赖的改动 |
| chore    | 其他修改, 比如改变构建流程、或者增加依赖库、工具等     |
| ci       | 持续集成修改                                           |
| docs     | 文档修改                                               |
| feat     | 新特性、新功能                                         |
| fix      | 修改 bug                                               |
| perf     | 优化相关，比如提升性能、体验                           |
| refactor | 代码重构                                               |
| revert   | 回滚到上一个版本                                       |
| style    | 代码格式修改, 注意不是 css 修改                        |
| test     | 测试用例修改                                           |

//注意 type 与 description 空格
git commit -m 'feat: 添加 husky'
git commit -m 'fix(account): 修复 xxx 的 bug'
git commit -m 'refactor: 重构整个项目'

#### 运行环境

node: >16
npm: 8.5.0

#### 分支

dev: 开发分支
master: 生产分支
mdm: 采用 mind-design-mini 组件的

#### 其他

截止 2023-12-14，uniapp 还不支持 vue 3.3+ ,pinia 只能用 2.0+版本
