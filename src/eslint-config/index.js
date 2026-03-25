// ESLint 9 Flat Config
// 官方文档 https://eslint.org/docs/latest/use/configure/configuration-files
// @ts-check
const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const importXPlugin = require('eslint-plugin-import-x');
const unicornPlugin = require('eslint-plugin-unicorn').default;
const promisePlugin = require('eslint-plugin-promise');
const eslintCommentsPlugin = require('@eslint-community/eslint-plugin-eslint-comments');
const globals = require('globals');

/**
 * 基础 ESLint Flat Config
 * 适用于所有项目（纯 JS/TS，非 React）
 *
 * 使用方式（eslint.config.mjs）：
 *   import baseConfig from '@zpcscc/configs/eslint-config';
 *   export default [...baseConfig];
 *
 * 或带自定义覆盖：
 *   import baseConfig from '@zpcscc/configs/eslint-config';
 *   export default [...baseConfig, { rules: { 'no-console': 'warn' } }];
 */
module.exports = tseslint.config(
  // ===== 基础推荐规则 =====
  js.configs.recommended,

  // ===== TypeScript =====
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      'import-x/resolver': {
        typescript: true,
        node: true,
      },
    },
  },

  // ===== Import-X =====
  importXPlugin.flatConfigs.recommended,
  importXPlugin.flatConfigs.typescript,

  // ===== Unicorn =====
  unicornPlugin.configs['flat/recommended'],

  // ===== Promise =====
  promisePlugin.configs['flat/recommended'],

  // ===== ESLint Comments =====
  // eslintCommentsPlugin.configs.recommended 是旧格式，手动配置 flat config 版本
  {
    plugins: {
      '@eslint-community/eslint-comments': eslintCommentsPlugin,
    },
    rules: {
      '@eslint-community/eslint-comments/disable-enable-pair': 'error',
      '@eslint-community/eslint-comments/no-aggregating-enable': 'error',
      '@eslint-community/eslint-comments/no-duplicate-disable': 'error',
      '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
      '@eslint-community/eslint-comments/no-unused-enable': 'error',
    },
  },

  // ===== 全局变量 + 环境 =====
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.jest,
        // 自定义全局类型
        Any: 'readonly',
        AnyArray: 'readonly',
        AnyObject: 'readonly',
        AnyFunction: 'readonly',
        NodeJS: 'readonly',
      },
    },
  },

  // ===== 自定义 Rules =====
  {
    rules: {
      // --- TypeScript 规则 ---
      // 数组类型。不限制写法
      '@typescript-eslint/array-type': 'off',
      // 强制要求注释描述，关闭
      '@typescript-eslint/ban-ts-comment': 'off',
      // 强制使用一致性类型断言。关闭，两种语法都允许
      '@typescript-eslint/consistent-type-assertions': 'off',
      // 强制 ts 类型使用 type 关键字
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      // import 类型时，需要加 type，使用内联方式
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { fixStyle: 'inline-type-imports' },
      ],
      // 显示函数返回类型。关闭
      '@typescript-eslint/explicit-function-return-type': 'off',
      // 无混淆空表达式。关闭（需要 type-aware linting，由消费者自行配置）
      '@typescript-eslint/no-confusing-void-expression': 'off',
      // 不允许有 any 类型。关闭，特殊情况需要
      '@typescript-eslint/no-explicit-any': 'off',
      // 禁止 require() 导入。关闭，部分场景需要 CJS
      '@typescript-eslint/no-require-imports': 'off',
      // 无浮动的 promise。关闭
      '@typescript-eslint/no-floating-promises': 'off',
      // 不得滥用 promise。关闭
      '@typescript-eslint/no-misused-promises': 'off',
      // 禁止变量重新声明
      '@typescript-eslint/no-redeclare': 'error',
      // 禁止未使用的表达式
      '@typescript-eslint/no-unused-expressions': [
        'error',
        { allowShortCircuit: true, allowTernary: true },
      ],
      // 禁止使用类型断言。关闭
      '@typescript-eslint/non-nullable-type-assertion-style': 'off',
      // 限制命名规则。关闭，命名希望灵活些
      '@typescript-eslint/naming-convention': 'off',
      // 使用 ?? 替换 ||。关闭，部分场景需要手动选择
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      // promise 函数都需要使用 async。关闭
      '@typescript-eslint/promise-function-async': 'off',
      // 限制 + 操作符。关闭
      '@typescript-eslint/restrict-plus-operands': 'off',
      // 限制模板表达式。关闭
      '@typescript-eslint/restrict-template-expressions': 'off',
      // async 函数返回值需要有 await。关闭（需要 type-aware linting）
      '@typescript-eslint/return-await': 'off',
      // 严格的逻辑表达式。关闭
      '@typescript-eslint/strict-boolean-expressions': 'off',
      // 禁止三斜杠指令
      '@typescript-eslint/triple-slash-reference': 'off',

      // --- Import-X 规则 ---
      'import-x/named': 'off',
      'import-x/export': 'off',
      'import-x/extensions': 'off',
      'import-x/no-cycle': 'off',
      'import-x/no-extraneous-dependencies': 'off',
      'import-x/no-named-as-default': 'off',
      'import-x/no-relative-packages': 'off',
      'import-x/no-unresolved': 'off',
      'import-x/prefer-default-export': 'off',
      'import-x/no-duplicates': 'error',

      // --- Unicorn 规则 ---
      'unicorn/consistent-destructuring': 'off',
      'unicorn/consistent-function-scoping': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/new-for-builtins': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/no-new-array': 'off',
      'unicorn/no-null': 'off',
      'unicorn/numeric-separators-style': 'off',
      'unicorn/prefer-module': 'off',
      'unicorn/filename-case': 'off',

      // --- ESLint Comments 规则 ---
      'eslint-comments/disable-enable-pair': 'off',

      // --- Promise 规则 ---
      'promise/always-return': 'off',
      'promise/catch-or-return': 'off',

      // --- 基础规则 ---
      // 箭头函数体是否强制使用大括号。关闭
      'arrow-body-style': 'off',
      // if 语句是否需要加括号。多行加括号，单行不需要
      curly: ['error', 'multi-line'],
      'default-param-last': 'off',
      // 禁止 console。关闭
      'no-console': 'off',
      // 禁止 continue。关闭
      'no-continue': 'off',
      // 禁止速记类型转换
      'no-implicit-coercion': ['error'],
      // async 返回值需要 await。关闭，使用 TS 的同名规则
      'no-return-await': 'off',
      // 禁止未使用的表达式。关闭，使用 TS 版本
      'no-unused-expressions': 'off',
      // 函数名称后需要跟一个空格。关闭
      'space-before-function-paren': 'off',

      // --- 以下规则已整理 ---
      'array-bracket-spacing': ['error', 'never'],
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': ['error', { after: true, before: true }],
      camelcase: 'off',
      'consistent-return': 'off',
      'class-methods-use-this': 'off',
      'default-case-last': ['error'],
      'eol-last': ['error'],
      eqeqeq: 'error',
      'func-names': ['warn', 'never', { generators: 'as-needed' }],
      'func-style': ['error'],
      'keyword-spacing': ['error'],
      'lines-between-class-members': 'off',
      'max-classes-per-file': 'off',
      'max-len': 'off',
      'no-bitwise': ['error'],
      'no-class-assign': ['error'],
      'no-cond-assign': ['error', 'except-parens'],
      'no-const-assign': ['error'],
      'no-constructor-return': ['error'],
      'no-dupe-class-members': ['error'],
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
      'no-spaced-func': 'error',
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
        { args: 'none', vars: 'all' },
      ],
      'no-var': ['error'],
      'no-void': ['error'],
      'object-shorthand': [
        'error',
        'always',
        { avoidQuotes: true, ignoreConstructors: false },
      ],
      'prefer-arrow-callback': [
        'error',
        { allowNamedFunctions: false, allowUnboundThis: true },
      ],
      'prefer-const': ['error'],
      'prefer-destructuring': 'off',
      'prefer-rest-params': ['error'],
      'prefer-template': ['error'],
      quotes: ['error', 'single'],
      'require-atomic-updates': ['error'],
      semi: ['error', 'always'],
      'space-before-blocks': ['error', 'always'],
      'space-in-parens': ['error', 'never'],
      'space-unary-ops': ['error', { nonwords: false, overrides: {} }],
      'symbol-description': ['error'],
      'template-curly-spacing': ['error', 'never'],
    },
  },

  // ===== 忽略文件 =====
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/docs-dist/**',
      '**/.dumi/**',
      '**/*.d.ts',
    ],
  },
);
