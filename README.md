# @dxsixpc/configs

[![NPM version](https://img.shields.io/npm/v/@dxsixpc/configs.svg?style=flat)](https://www.npmjs.com/package/@dxsixpc/configs)
[![NPM downloads](http://img.shields.io/npm/dm/@dxsixpc/configs.svg?style=flat)](https://www.npmjs.com/package/@dxsixpc/configs)

## Intro

配置库

## License

MIT © [dxsixpc](https://github.com/dxsixpc)

> 分享一些通用配置

## 安装

```sh
npm install --save-dev @dxsixpc/configs
```

## 使用

### eslint

`.eslintrc.js`

```js
module.exports = {
    extends: require.resolve("@dxsixpc/configs/eslint-config")
};
```



### prettierrc

`.prettierrc`

```js
'@dxsixpc/configs/prettier-config';
```

prettierrc覆盖导入文件的写法
`.prettierrc.js`

```js
module.exports = {
  ...require("@dxsixpc/configs/prettier-config"),
  semi: false,
};
```



### rollup

`rollup.config.mjs`

```js
import config from '@dxsix/configs/rollup-config/index.js';

export default config({
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true
    },
  ]
});
```



### tsconfig

`tsconfig.json`

```json
{
  "extends": "@dxsixpc/configs/tsconfig",
  "compilerOptions": {
    "outDir": "dist"
  }
}


```
### commitlint

`commitlint.config.js`

```js
module.exports = {
  extends: ['@dxsixpc/configs/commitlint-config'],
};
```
