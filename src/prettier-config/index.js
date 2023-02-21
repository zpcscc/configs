// 官方文档 https://prettier.io/
module.exports = {
  plugins: [
    require.resolve('prettier-plugin-organize-imports'),
    require.resolve('prettier-plugin-packagejson')
  ],
  organizeImportsSkipDestructiveCodeActions: true,
  semi: true,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  tabWidth: 2,
  useTabs: false,
  proseWrap: 'never',
  endOfLine: 'auto',
  jsxSingleQuote: true,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: 'always',
  overrides: [
    { files: '.eslintrc', options: { parser: 'json' } },
    { files: '.prettierrc', options: { parser: 'json' } },
    { files: 'package*.json', options: { printWidth: 1000 } },
    { files: '*.yml', options: { singleQuote: false } },
    { files: '*.md', options: { proseWrap: 'preserve' } }
  ]
};
