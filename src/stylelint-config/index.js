module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order', 'stylelint-declaration-block-no-ignored-properties'],
  rules: {
    'selector-class-pattern': null,
    'keyframes-name-pattern': null,
    'block-no-empty': null,
    'function-name-case': 'lower',
    'comment-empty-line-before': null,
    'no-invalid-double-slash-comments': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
    'no-duplicate-selectors': null,
  },
};
