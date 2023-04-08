# @dxsixpc/configs

[![NPM version](https://img.shields.io/npm/v/@dxsixpc/configs.svg?style=flat)](https://www.npmjs.com/package/@dxsixpc/configs)
[![NPM downloads](http://img.shields.io/npm/dm/@dxsixpc/configs.svg?style=flat)](https://www.npmjs.com/package/@dxsixpc/configs)

# 简介

## 配置库

> 分享一些项目通用配置

## 安装

```sh
npm install --save-dev @dxsixpc/configs
```

## 使用



### commitlint

`package.json`

```json
"scripts": {
  "commit": "git add . && git-cz",
},
"config": {
  "commitizen": {
    "path": "@commitlint/cz-commitlint"
  }
},
```

`commitlint.config.js`

```js
module.exports = {
  extends: ['@dxsixpc/configs/commitlint-config'],
};
```

上述文件设置好后，提交代码时使用下列命令

```shell
npm run commit
```

若要默认使用`git cz`则需全局安装相关依赖

```shell
npm i -g commitizen  inquirer@^8.0.0 @commitlint/cz-commitlint
```



### eslint

`.eslintrc.js`

#### 基础配置

```javascript
module.exports = {
  extends: require.resolve('@dxsixpc/configs/eslint-config'),
};
```

#### react的eslint配置

```javascript
module.exports = {
  extends: require.resolve('@dxsixpc/configs/eslint-config/react'),
};
```

#### vue的eslint配置

```javascript
module.exports = {
  extends: require.resolve('@dxsixpc/configs/eslint-config/vue'),
};
```

#### 补充配置

```javascript
module.exports = {
  // 由于使用了eslint-config-standard-with-typescript插件对ts的支持
  // 部分规则需要tsconfig.json配置,需要在这里引入tsconfig.json文件
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
```

`tsconfig.json`

tsconfig.json 文件中，也需要在 include 中引入.eslintrc.js 文件

```json
{
  "include": [".eslintrc.js"]
}
```



### prettier

`.prettierrc`

```js
'@dxsixpc/configs/prettier-config';
```

`.prettierrc.js`

```js
module.exports = {
  ...require('@dxsixpc/configs/prettier-config'),
};
```



### stylelint

`.stylelintrc`

```json
{
  "extends": "@dxsixpc/configs/stylelint-config"
}
```



### tsconfig

`tsconfig.json`

#### 基础配置

```json
{
  "extends": "@dxsixpc/configs/tsconfig/tsconfig.base.json",
}
```

#### react的tsconfig配置

```json
{
  "extends": "@dxsixpc/configs/tsconfig/tsconfig.react.json",
}
```

#### vue的tsconfig配置

```json
{
  "extends": "@dxsixpc/configs/tsconfig/tsconfig.vue.json",
}
```



### types

`types.d.ts`

```bash
// 基础配置
/// <reference types="@dxsixpc/configs/types" />
// react配置
/// <reference types="@dxsixpc/configs/types/react" />
// vue配置
/// <reference types="@dxsixpc/configs/types/vue" />
```





## License

MIT © [dxsixpc](https://github.com/dxsixpc)
