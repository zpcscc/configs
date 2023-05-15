// 官方文档 https://stylelint.io/
module.exports = {
  extends: [
    // 标准配置
    'stylelint-config-standard',
    // 惯用样式排序规则
    'stylelint-config-idiomatic-order',
  ],
  plugins: [
    // 避免属性冲突而忽略某些属性
    'stylelint-declaration-block-no-ignored-properties',
  ],
  rules: {
    // 声明中不允许出现“unknown”属性
    'declaration-property-value-no-unknown': true,
    // 指定类选择器的模式。
    'selector-class-pattern': 0,
    // 指定关键帧名称的模式。
    'keyframes-name-pattern': undefined,
    // 不能为空css样式块
    'block-no-empty': true,
    // 指定css函数名为小写
    'function-name-case': 'lower',
    // 注释前是否需要空行
    'comment-empty-line-before': undefined,
    // 不允许出现用双斜杠注释掉的样式
    'no-invalid-double-slash-comments': undefined,
    // 禁止低权重选择权出现在高权重选择器之后
    'no-descending-specificity': true,
    // 声明前是否需要空行
    'declaration-empty-line-before': undefined,
    // 不允许重复选择器
    'no-duplicate-selectors': true,
    // 关键字大小写
    'value-keyword-case': undefined,
  },
};
