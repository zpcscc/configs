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

```js
module.exports = {
    extends: require.resolve("@dxsixpc/configs/eslint-config"),
  	// 由于使用了eslint-config-standard-with-typescript插件对ts的支持
  	// 部分规则需要tsconfig.json配置,需要在这里引入tsconfig.json文件
    parserOptions: {
      project: ['./tsconfig.json'],
    },
};
```

`tsconfig.json`

tsconfig.json 文件中，也需要在include中引入.eslintrc.js文件
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
  ...require("@dxsixpc/configs/prettier-config"),
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

```json
{
  "extends": "@dxsixpc/configs/tsconfig",
}
```



### types

`types.d.ts`

```bash
/// <reference types="@dxsixpc/configs/types" />
```



### rollup

`package.json`

```json
"scripts": {
  "build": "rollup -c rollup.config.mjs",
  "watch": "rollup -c rollup.config.mjs -w"
},
```

`rollup.config.mjs`

当前库中，未提供rollup相关依赖，如需使用rollup，需手动安装以下列出的依赖。

```shell
npm i -D rollup @rollup/plugin-babel @rollup/plugin-commonjs @rollup/plugin-eslint @rollup/plugin-html @rollup/plugin-node-resolve @rollup/plugin-replace @rollup/plugin-terser @rollup/plugin-typescript rollup-plugin-filesize rollup-plugin-progress rollup-plugin-serve
```

示例：

```js
import config from '@dxsix/configs/rollup-config/index.mjs';
// 默认使用的插件列表，库中未提供，需手动安装以下依赖；
// import babel from '@rollup/plugin-babel';
// import commonjs from '@rollup/plugin-commonjs';
// import eslint from '@rollup/plugin-eslint';
// import html from '@rollup/plugin-html';
// import resolve from '@rollup/plugin-node-resolve';
// import replace from '@rollup/plugin-replace';
// import terser from '@rollup/plugin-terser';
// import typescript from '@rollup/plugin-typescript';
// import filesize from 'rollup-plugin-filesize';
// import progress from 'rollup-plugin-progress';
// import serve from 'rollup-plugin-serve';

export default rollupConfig({
  // 打包类型：<app｜lib>; 默认为lib;
  // 若为：app。则表示打包一个静态页面应用。可本地实时预览；
  // 若为：lib。则表示打包成一个仓库，只会生成打包产物，不会生成页面，不能预览。只用来打包；
  buildType: 'lib',
  // 是否禁用默认提供的插件。默认为false； 参数 <true/false/['plugins-name']>
  // 若为 true。则禁用所有默认插件。buildType配置也会失效。完全是一个新的rollup，需要从头开始配置；
  // 若是一个数组，则会禁用数组里的插件。例如：["babel","commonjs"]。意思是禁用 babel和commonjs插件
  disableDefaultPlugin: false,
  // 以下配置为 rollup 原生配置。使用方式和官方配置完全一致；
  // 具体参考rollup官网：https://rollupjs.org/
  input: 'src/index.tsx',
});
```



## License

MIT © [dxsixpc](https://github.com/dxsixpc)

