// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    // 对react的推荐配置
    'plugin:react/recommended',
    // react17及以上，新的jsx转换规则，需要引入react/jsx-runtime以禁止部分规则
    'plugin:react/jsx-runtime',
    // react-hook的推荐配置
    'plugin:react-hooks/recommended',
    require.resolve('../index'),
  ],
  plugins: ['react', 'react-hooks'],
  // 使用typescript解析器
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // 使用额外的语言特性
    ecmaFeatures: {
      // 开启jsx支持
      jsx: true,
      sourceType: 'module',
    },
  },
  settings: {
    // eslint-plugin-react的配置https://github.com/jsx-eslint/eslint-plugin-react#configuration
    react: {
      version: 'detect',
    },
  },
  rules: {
    // 禁止未知属性。这里忽略emotion里的css属性报错。将css属性视为正常属性
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    // props类型检查.关闭此校验，ts有静态类型检查
    'react/prop-types': 'off',
    // react17之后引入新的jsx转换。不再需要显示引入react。这两项规则需要关闭。
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 'off',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
