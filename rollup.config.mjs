import rollupConfig from './src/rollup-config/index.mjs';
// 默认插件列表
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
  // 具体参考rollup官网：https://rollupjs.org/1
  // input: 'example/app/index.tsx',
  input: 'example/lib/index.tsx',
});
