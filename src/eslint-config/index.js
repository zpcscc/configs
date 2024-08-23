// 官方文档 https://eslint.org/
// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: [
    // eslint 的官方推荐配置
    'eslint:recommended',
    // eslint的标准配置
    'standard',
    // 对eslint注释的提示
    'plugin:eslint-comments/recommended',
    // ts推荐配置，做了一些兼容处理
    'plugin:@typescript-eslint/recommended',
    // eslint-plugin-import---对import的导入进行检查
    'plugin:import/recommended',
    // eslint-import-resolver-typescript---import校验对typescript的支持。是eslint-plugin-import插件的补充
    'plugin:import/typescript',
    // unicorn的推荐配置
    'plugin:unicorn/recommended',
    // 对promise的推荐配置
    'plugin:promise/recommended',
    /**
     * eslint-plugin-prettier的推荐配置，需要放在最后一位，内部启用了eslint-plugin-prettier插件
     * 用于关闭eslint中的所有格式化配置，全部在.prettierrc中进行格式化配置
     */
    'plugin:prettier/recommended'
  ],
  // 如果要在rules中针对某个插件做具体配置，则需要在plugins里先引入对应插件
  plugins: ['@typescript-eslint', 'unicorn', 'promise', 'import'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // 运行的环境
  env: {
    browser: true,
    commonjs: true,
    es2024: true,
    node: true,
    jest: true
  },
  settings: {
    // eslint-import-resolver-typescript
    'import/resolver': {
      typescript: true,
      node: true
    }
  },
  globals: {
    Any: true,
    AnyArray: true,
    AnyObject: true,
    AnyFunction: true,
    NodeJS: true
  },
  rules: {
    // 数组类型。这里不限制写法
    '@typescript-eslint/array-type': 'off',
    // 强制要求注释描述，这里关闭
    '@typescript-eslint/ban-ts-comment': 'off',
    // 强制使用一致性类型断言。<>语法，或者as语法
    '@typescript-eslint/consistent-type-assertions': 'off',
    // 强制ts类型使用type关键字，好处是，type关键字可以让ts类型更加明确，鼠标悬浮可以显示具体类型，且有interface的所有功能；
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    // import 类型时，需要加 type，使用内联方式。 import { type FC } from 'react'
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'inline-type-imports'
      }
    ],
    // 显示函数返回类型。关闭此校验，部分函数没有返回值。无需每个都显示类型
    '@typescript-eslint/explicit-function-return-type': 'off',
    /**
     * 无混淆空表达式。默认所有void都不能直接返回，需要用{}包裹。这里排除掉箭头函数。
     * 可以直接写成 onchange={(value)=> onChange(value) }
     * 而不是 onchange={(value)=>{ onChange(value) }}
     */
    '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
    // ts不允许有any类型。关闭此校验，特殊情况，需要any类型
    '@typescript-eslint/no-explicit-any': 'off',
    // 无浮动的promise，要求处理每个promise的then和catch。
    '@typescript-eslint/no-floating-promises': 'off',
    // 不得滥用promise，这里关闭
    '@typescript-eslint/no-misused-promises': 'off',
    // 禁止变量重新声明
    '@typescript-eslint/no-redeclare': 'error',
    // 禁止未使用的表达式
    '@typescript-eslint/no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true }
    ],
    // 禁止使用类型断言，应使用 ！进行断言，这里关闭。类型断言更语意化，会好些。
    '@typescript-eslint/non-nullable-type-assertion-style': 'off',
    // 限制命名规则。这里关闭。命名希望灵活些
    '@typescript-eslint/naming-convention': 'off',
    // 为了安全使用 ?? 替换 ||。关闭此选项，部分场景，需要手动选择??还是||； ??会把空字符串也认为是true
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    // promise函数都需要使用async。这里关闭。
    '@typescript-eslint/promise-function-async': 'off',
    // 限制 + 操作符，两边必须相同。这里关闭
    '@typescript-eslint/restrict-plus-operands': 'off',
    // 限制模板表达式。关闭此校验，希望模板表达式更加灵活
    '@typescript-eslint/restrict-template-expressions': 'off',
    // 若函数是async，则返回值需要有await
    '@typescript-eslint/return-await': ['error'],
    // 严格的逻辑表达式。关闭此选项，可以使用 !value 的方式来进行判断；
    '@typescript-eslint/strict-boolean-expressions': 'off',
    // 禁止某些支持 ES6 样式导入声明的三重斜杠指令
    '@typescript-eslint/triple-slash-reference': 'off',

    // 函数体周围是否强制使用大括号。这里关闭，不强制。部分小函数，单行可以实现时，无需大括号限制
    'arrow-body-style': 'off',
    // if语句是否需要加括号。设置为多行加括号，单行不需要加括号
    curly: ['error', 'multi-line'],
    'default-param-last': 'off',
    // 禁止整个文件的注释，只允许注释文件块。这里关闭。
    'eslint-comments/disable-enable-pair': 'off',
    // 名称校验，这里关闭
    'import/named': 'off',

    // 禁止console输入。这里关闭
    'no-console': 'off',
    // 禁止使用continue跳出循环。这里关闭
    'no-continue': 'off',
    // 禁止速记类型转换
    'no-implicit-coercion': ['error'],
    // 若函数是async，则返回值需要有await，这里关闭，使用typescript的同名规则；
    'no-return-await': 'off',
    // 禁止未使用的表达式
    'no-unused-expressions': 'off',

    // 函数名称后需要跟一个空格。这里关闭
    'space-before-function-paren': 'off',

    // 在属性上使用析构函数变量。这里关闭
    'unicorn/consistent-destructuring': 'off',
    // 箭头函数移动到外部作用于。这里关闭。在react组件内，经常会使用到箭头函数
    'unicorn/consistent-function-scoping': 'off',
    // 使用更具有描述性的名称。这里关闭
    'unicorn/prevent-abbreviations': 'off',
    // 不允许使用 新的特性。这里关闭
    'unicorn/new-for-builtins': 'off',
    // 禁止将函数直接传给方法。这里关闭。
    'unicorn/no-array-callback-reference': 'off',
    // 不允许使用 array的forEach。这里管理
    'unicorn/no-array-for-each': 'off',
    // 不允许使用 array的reduce方法。这里关闭
    'unicorn/no-array-reduce': 'off',
    // 不允许使用 new Array()声明数组。这里关闭
    'unicorn/no-new-array': 'off',
    // 不使用 null。这里关闭。实际上，与后台交互时，经常需要用到null。也更有语义化。
    'unicorn/no-null': 'off',
    // 强制使用数字分隔符。这里关闭。
    'unicorn/numeric-separators-style': 'off',
    // 使用esm的格式，而不是commonjs。这里关闭。部分模块还是需要使用commonjs保证兼容性
    'unicorn/prefer-module': 'off',

    // 以下配置待整理完善，以上配置已整理，尽量不要动了。
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'always'],
    'arrow-spacing': [
      'error',
      {
        after: true,
        before: true
      }
    ],
    camelcase: 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'default-case-last': ['error'],
    'eol-last': ['error'],
    eqeqeq: 'error',
    'func-names': ['warn', 'never', { generators: 'as-needed' }],
    'func-style': ['error'],
    'import/export': 'off',
    'import/extensions': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-relative-packages': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'keyword-spacing': ['error'],
    'lines-between-class-members': 'off',
    'max-classes-per-file': 'off',
    'max-len': [
      'error',
      {
        code: 180,
        ignoreComments: true,
        ignoreRegExpLiterals: true
      }
    ],
    'no-bitwise': ['error'],
    'no-class-assign': ['error'],
    'no-cond-assign': ['error', 'except-parens'],
    'no-const-assign': ['error'],
    'no-constructor-return': ['error'],
    'no-dupe-class-members': ['error'],
    'no-duplicate-imports': ['error'],
    'no-else-return': ['error'],
    'no-eval': ['error'],
    'no-inner-declarations': 'off',
    'no-labels': ['error'],
    'no-lonely-if': ['error'],
    'no-new': ['error'],
    'no-promise-executor-return': ['error'],
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'no-return-assign': ['error', 'except-parens'],
    'no-shadow': 'off',
    'no-mixed-spaces-and-tabs': ['error'],
    'no-multi-assign': 'off',
    'no-multiple-empty-lines': ['error'],
    'no-nested-ternary': 'off',
    'no-new-symbol': ['error'],
    'no-spaced-func': ['error'],
    'no-trailing-spaces': ['error'],
    'no-use-before-define': 'off',
    'no-useless-computed-key': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-constructor': 'off',
    'no-useless-return': ['error'],
    'no-useless-rename': ['error'],
    'no-undef': ['error'],
    'no-unexpected-multiline': ['error'],
    'no-unreachable-loop': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-unused-vars': [
      'error',
      {
        args: 'none',
        vars: 'all'
      }
    ],
    'no-var': ['error'],
    'no-void': ['error'],
    'object-shorthand': [
      'error',
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: false
      }
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true
      }
    ],
    'prefer-const': ['error'],
    'prefer-destructuring': 'off',
    'prefer-rest-params': ['error'],
    'prefer-template': ['error'],
    'promise/always-return': 'off',
    'promise/catch-or-return': 'off',
    quotes: ['error'],
    'require-atomic-updates': ['error'],
    semi: ['error', 'always'],
    'space-before-blocks': ['error', 'always'],
    'space-in-parens': ['error', 'never'],
    'space-unary-ops': [
      'error',
      {
        nonwords: false,
        overrides: {}
      }
    ],
    'symbol-description': ['error'],
    'template-curly-spacing': ['error', 'never'],
    'unicorn/filename-case': 'off'
  }
};
