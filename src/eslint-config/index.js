// 官方文档 https://eslint.org/

// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  // 使用typescript解析器
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // 使用额外的语言特性
    ecmaFeatures: {
      // 开启jsx支持
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // 运行的环境
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    es2020: true,
    es2021: true,
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    // ts推荐配置，做了一些兼容处理
    'plugin:@typescript-eslint/recommended',
    // eslint-plugin-import---对import的导入进行检查
    'plugin:import/recommended',
    // eslint-import-resolver-typescript---import校验对typescript的支持。是eslint-plugin-import插件的补充
    'plugin:import/typescript',
    // 对jsx的支持与推荐配置
    'plugin:jsx-a11y/recommended',
    // 对promise的推荐配置
    'plugin:promise/recommended',
    // 对react的推荐配置
    'plugin:react/recommended',
    // react17及以上，新的jsx转换规则，需要引入react/jsx-runtime以禁止部分规则
    'plugin:react/jsx-runtime',
    // react-hook的推荐配置
    'plugin:react-hooks/recommended',
    // sonarjs的推荐配置
    'plugin:sonarjs/recommended',
    // ts的标准支持
    'standard-with-typescript',
    // eslint-plugin-prettier的推荐配置，需要放在最后一位，内部启用了eslint-plugin-prettier插件
    // 用于关闭eslint中的所有格式化配置，全部在.prettierrc中进行格式化配置
    'plugin:prettier/recommended',
  ],
  // 如果要在rules中针对某个插件做具体配置，则需要在plugins里先引入对应插件
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'sonarjs',
    'unicorn',
    'promise',
    'import',
  ],
  // eslint-plugin-react的配置https://github.com/jsx-eslint/eslint-plugin-react#configuration
  settings: {
    react: {
      version: 'detect',
    },
    // eslint-import-resolver-typescript
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  rules: {
    // ts不允许有any类型。关闭此校验，特殊情况，需要any类型
    '@typescript-eslint/no-explicit-any': 'off',
    // 显示函数返回类型。关闭此校验，部分函数没有返回值。无需每个都显示类型
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 严格的逻辑表达式。关闭此选项，可以使用 !value 的方式来进行判断；
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // 为了安全使用 ?? 替换 ||。关闭此选项，部分场景，需要手动选择??还是||； ??会把空字符串也认为是true
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    // 无混淆空表达式。默认所有void都不能直接返回，需要用{}包裹。这里排除掉箭头函数。
    // 可以直接写成 onchange={(value)=> onChange(value) }
    // 而不是 onchange={(value)=>{ onChange(value) }}
    '@typescript-eslint/no-confusing-void-expression': ['warn', { ignoreArrowShorthand: true }],
    // import 类型时，需要加 type
    '@typescript-eslint/consistent-type-imports': 'warn',
    // 禁止变量重新声明
    '@typescript-eslint/no-redeclare': 'warn',
    // 禁止未使用的表达式
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      2,
      { allowShortCircuit: true, allowTernary: true },
    ],

    // 强制填写了默认值的参数在最后。关闭此选项，部分函数参数值，无法任意调整位置。
    'default-param-last': 'off',
    // props类型检查.关闭此校验，ts有静态类型检查
    'react/prop-types': 'off',
    // react17之后引入新的jsx转换。不再需要显示引入react。这两项规则需要关闭。
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',

    // 以下配置待整理完善，以上配置已整理，尽量不要动了。
    camelcase: 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'default-case-last': 'error',
    eqeqeq: [2, 'always', { null: 'ignore' }],
    'func-names': [1, 'never', { generators: 'as-needed' }],
    'func-style': 'error',
    'import/export': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-relative-packages': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'no-bitwise': 'error',
    'no-cond-assign': [2, 'except-parens'],
    'no-constructor-return': 'error',
    'no-console': 'off',
    'no-continue': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-implicit-coercion': 'error',
    'no-inner-declarations': 'off',
    'no-labels': 'error',
    'no-lonely-if': 'error',
    'no-new': 'error',
    'no-promise-executor-return': 'error',
    'no-param-reassign': [2, { props: false }],
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-return-assign': [2, 'except-parens'],
    'no-return-await': 'error',
    'no-shadow': 'off',
    'no-multi-assign': 'off',
    'no-nested-ternary': 'off',
    'no-unreachable-loop': 'error',
    'no-unneeded-ternary': 'error',
    'no-use-before-define': 'off',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'prefer-destructuring': 'off',
    'prefer-template': 'error',
    'promise/always-return': 'off',
    'promise/catch-or-return': 'off',
    quotes: 'error',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/self-closing-comp': 'warn',
    'react/sort-comp': 'off',
    'require-atomic-updates': 'error',
    'sonarjs/cognitive-complexity': 'off',
    'sonarjs/no-nested-template-literals': 'off',
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-small-switch': 'off',
    'sonarjs/prefer-immediate-return': 'off',
    'symbol-description': 'error',
    'require-await': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'unicorn/filename-case': 'off',
  },
};
