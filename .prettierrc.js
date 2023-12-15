/*
 * @Author: Mx
 * @Date: 2022-03-04 15:51:19
 * @Description: prettier配置
 */
module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  jsxSingleQuote: false,
  printWidth: 120, // 换行字符串阈值
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: false, // 使用分号, 默认true
  singleQuote: true, // 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
  tabWidth: 2, // tab缩进大小,默认为2
  trailingComma: 'none', // 行尾逗号,默认none,可选 none|es5|all
  useTabs: false, // 使用tab缩进，默认false
  vueIndentScriptAndStyle: true
}
