# @dxsixpc/configs

## Intro

配置库

## License

MIT © [dxsixpc](https://github.com/dxsixpc)

> Shared eslint config for my projects.

## Install

```sh
npm install --save-dev @dxsixpc/configs
```

## Usage

`.eslintrc.js`

```js
module.exports = {
    extends: require.resolve("@dxsixpc/configs/eslint-config")
};
```

`.prettierrc`

```js
'@dxsixpc/configs/prettier-config';
```

`rollup.config.js`

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

`tsconfig.json`

```json
{
  "extends": "@dxsixpc/configs/tsconfig",
  "compilerOptions": {
    "outDir": "dist"
  }
}
```
