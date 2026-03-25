// ESLint 9 Flat Config - React 扩展
// @ts-check
const tseslint = require('typescript-eslint');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const { FlatCompat } = require('@eslint/eslintrc');
const baseConfig = require('../index');

const compat = new FlatCompat();

/**
 * React ESLint Flat Config
 * 在基础配置上增加 React 相关规则
 *
 * 使用方式（eslint.config.mjs）：
 *   import reactConfig from '@zpcscc/configs/eslint-config/react';
 *   export default [...reactConfig];
 */
module.exports = tseslint.config(
  // 继承基础配置
  ...baseConfig,

  // React 插件（原生 flat config）
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],

  // React Hooks（使用 FlatCompat 兼容旧格式）
  ...compat.config(reactHooksPlugin.configs.recommended),

  // JSX A11y
  jsxA11yPlugin.flatConfigs.recommended,

  // React 特定配置
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      'react/destructuring-assignment': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-props-no-spreading': 'off',
      // props 类型检查，TS 有静态类型检查
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'warn',
      'react/sort-comp': 'off',
      'react/no-access-state-in-setstate': 'off',
      // 忽略 emotion 的 css 属性报错
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      // useEffect 依赖数组提示
      'react-hooks/exhaustive-deps': 'off',
      // 非 button 元素点击事件必须有键盘事件。关闭
      'jsx-a11y/click-events-have-key-events': 'off',
      // 交互式元素应是可聚焦的。关闭
      'jsx-a11y/interactive-supports-focus': 'off',
    },
  },
);
