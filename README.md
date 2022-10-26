# @dxsixpc/configs

## Intro

配置库

## License

MIT © [dxsixpc](https://github.com/dxsixpc)

# eslint-config

> Shared eslint config for my projects.

## Install

```sh
npm install --save-dev eslint prettier typescript @dxsixpc/eslint-config
```

## Usage

`.eslintrc`

```json
{
  "extends": "@dxsixpc/eslint-config"
}
```

`.prettierrc.js`

```js
module.exports = require('@dxsixpc/configs/prettier-config');
```

`rollup.config.js`

```js
import config from '@dxsix/rollup-config';

export default config({
  output: [
    {
      name: 'name',
      format: 'umd',
      file: 'dist/name.js',
      sourcemap: true
    }
  ]
});
```

`tsconfig.json`

```json
{
  "extends": "@dxsixpc/configs/tsconfig",
  "compilerOptions": {
    "outDir": "dist"
  }
}
```
