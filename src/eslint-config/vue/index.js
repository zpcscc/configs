// 官方文档 https://eslint.org/
/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    require.resolve('../index')
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  }
};
