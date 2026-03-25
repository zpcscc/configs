# @zpcscc/configs

[![NPM version](https://img.shields.io/npm/v/@zpcscc/configs.svg?style=flat)](https://www.npmjs.com/package/@zpcscc/configs)

[![NPM downloads](http://img.shields.io/npm/dm/@zpcscc/configs.svg?style=flat)](https://www.npmjs.com/package/@zpcscc/configs)

# 简介

通用配置库


## 安装

```sh
npm install --save-dev @zpcscc/configs
```

## 使用

### eslint（ESLint 9 Flat Config）

`eslint.config.mjs`

#### 基础配置

```javascript
import baseConfig from '@zpcscc/configs/eslint-config';

export default [...baseConfig];
```

#### react 的 eslint 配置

```javascript
import reactConfig from '@zpcscc/configs/eslint-config/react';

export default [...reactConfig];
```

#### 自定义覆盖

```javascript
import baseConfig from '@zpcscc/configs/eslint-config';

export default [
  ...baseConfig,
  // 自定义规则覆盖
  {
    rules: {
      'no-console': 'warn',
    },
  },
  // 忽略文件
  {
    ignores: ['dist/**', 'coverage/**'],
  },
];
```



### prettier

`.prettierrc`

```js
'@zpcscc/configs/prettier-config';
```

`.prettierrc.js`

```js
module.exports = {
  ...require('@zpcscc/configs/prettier-config'),
};
```



### tsconfig

`tsconfig.json`

#### 基础配置

```json
{
  "extends": "@zpcscc/configs/tsconfig/tsconfig.json",
}
```

### commitlint

`package.json`

```json
"scripts": {
  "commit": "git add . && git-cz",
},
```

`.czrc`

```json
{
  "path": "@commitlint/cz-commitlint"
}
```

`commitlint.config.js`

```js
module.exports = {
  extends: ['@zpcscc/configs/commitlint-config'],
};
```

上述文件设置好后，提交代码时使用下列命令

```shell
npm run commit
```

若要默认使用`git cz`则需全局安装相关依赖

```shell
npm i -g commitizen  inquirer@8 @commitlint/cz-commitlint
```



### types

`types.d.ts`

```bash
// 基础配置
/// <reference types="@zpcscc/configs/types" />
```


## License

MIT © [zpcscc](https://github.com/zpcscc)
