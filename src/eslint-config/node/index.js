// 官方文档 https://eslint.org/

// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    // 对node的提示
    'plugin:n/recommended',
    require.resolve('../index')
  ]
};
