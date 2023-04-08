// @ts-check
require('@rushstack/eslint-patch/modern-module-resolution');
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: require.resolve('./src/eslint-config'),
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
