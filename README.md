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

### eslint

`.eslintrc.js`

#### 基础配置

```javascript
module.exports = {
  extends: [require.resolve('@zpcscc/configs/eslint-config')],
};
```

#### react的eslint配置

```javascript
module.exports = {
  extends: [require.resolve('@zpcscc/configs/eslint-config/react')],
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
