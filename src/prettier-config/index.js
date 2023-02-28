// 官方文档 https://prettier.io/
module.exports = {
  // 额外的插件
  plugins: [
    // import格式化时自动排序
    require.resolve('prettier-plugin-organize-imports'),
    // package.json格式化时自动排序
    require.resolve('prettier-plugin-packagejson'),
  ],
  // import格式化自动排序时，不删除未使用的import
  organizeImportsSkipDestructiveCodeActions: true,
  // 结尾需要分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 每行最大长度
  printWidth: 100,
  // 结尾需要逗号
  trailingComma: 'all',
  // 每个缩进级别的空格数
  tabWidth: 2,
  // 是否使用制表符缩进
  useTabs: false,
  // 是否换行
  proseWrap: 'never',
  // 换行符，linux和macos中为'lf'，window中为'crlf'
  endOfLine: 'lf',
  // 在jsx中是否使用单引号
  jsxSingleQuote: true,
  // 对象和括号之间是否需要空格
  bracketSpacing: true,
  // 将多行html标签放在最后一行末尾。而不是重开一行。这里关闭，希望重开一行。
  bracketSameLine: false,
  // 箭头函数是否需要括号。
  arrowParens: 'always',
  // 重写部分文件的规则
  overrides: [
    { files: '.eslintrc', options: { parser: 'json' } },
    { files: '.prettierrc', options: { parser: 'json' } },
    { files: 'package*.json', options: { printWidth: 1000 } },
    { files: '*.yml', options: { singleQuote: false } },
    { files: '*.md', options: { proseWrap: 'preserve' } },
  ],
};
