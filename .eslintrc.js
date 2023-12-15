/*
 * @Author: Mx
 * @Date: 2022-04-18 15:57:06
 * @Description: eslint配置
 */
module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'plugin:vue/recommended', 'eslint:recommended'],
  plugins: ['vue', '@typescript-eslint'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020
  },
  env: {
    es6: true,
    node: true
  },
  globals: {
    uni: true,
    getApp: true
  },
  rules: {
    'prettier/prettier': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/attributes-order': 0, // 属性换行提示
    'vue/singleline-html-element-content-newline': 'off', // 关闭在只有一个属性的标签里面的文字需要换行的提示
    'vue/multiline-html-element-content-newline': 'off', // 关闭在有多个属性的标签里面的文字需要换行的提示
    'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 'off',
    // 'nonblock-statement-body-position': 1,
    'object-curly-spacing': 'off',
    'vue/no-use-v-if-with-v-for': [
      'error',
      {
        allowUsingIterationVar: true
      }
    ],
    "vue/max-attributes-per-line": 'off', // 一行不支持写多个属性
    "vue/multi-word-component-names": 'off', // 文件命名需要多个单词组合，index文件除外
    "vue/html-closing-bracket-newline": 'off', // html中最后一个标签需要换行
    // 这里不错提示，生产环境打包时直接把console.log去掉
    'no-console': 'off',
    eqeqeq: 2, // 必须使用全等
    'no-empty': 0, // 不允许空作用域
    // 'no-var': 2, // 不允许使用var
    'spaced-comment': ['error', 'always'], // 注释后面加空格
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    indent: 'off'
  }
}
