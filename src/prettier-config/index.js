// 官方文档 https://prettier.io/
module.exports = {
  // 额外的插件
  plugins: [
    // 格式化时对import自动排序
    require.resolve('prettier-plugin-organize-imports'),
    // 格式化时对package.json自动排序
    require.resolve('prettier-plugin-packagejson')
  ],
  // import格式化自动排序时，不删除未使用的import
  organizeImportsSkipDestructiveCodeActions: true,
  // 结尾需要分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 每行最大字符数量
  printWidth: 100,
  // 结尾逗号, 这里关闭，暂时不需要逗号
  trailingComma: 'none',
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
  // 箭头函数，只有一个参数的时候，也需要括号
  arrowParens: 'always',
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 根据显示样式决定 html 要不要折行, 默认css
  htmlWhitespaceSensitivity: 'css',
  // 格式化嵌入的内容
  embeddedLanguageFormatting: 'auto',
  // html, vue, jsx 中每个属性占一行
  singleAttributePerLine: false,
  // 重写部分文件的规则
  overrides: [
    { files: ['.eslintrc', '.prettierrc', '.stylelintrc'], options: { parser: 'json' } },
    { files: 'package*.json', options: { printWidth: 1000 } },
    { files: '*.yml', options: { singleQuote: false } },
    { files: '*.md', options: { proseWrap: 'preserve' } }
  ]
};
