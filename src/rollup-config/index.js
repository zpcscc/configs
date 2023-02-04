const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const eslint = require('@rollup/plugin-eslint');
const resolve = require('@rollup/plugin-node-resolve');
const json = require('@rollup/plugin-json');
const typescript = require('rollup-plugin-typescript2');
const filesize = require('rollup-plugin-filesize');
const postcss = require('rollup-plugin-postcss');
const progress = require('rollup-plugin-progress');
const path = require('path');
const visualizer = require('rollup-plugin-visualizer');
const clear = require('rollup-plugin-clear');

const outputDir = 'dist';

// 创建Rollup配置
module.exports = (props) => {
  const {
    visualize = false,
    plugins = [],
    commonjsOptions = {},
    filesizeOptions = {},
    typescriptOptions = {},
    nodeResolveOptions = {},
    eslintOptions = {},
    jsonOptions = {},
    babelOptions = {},
    progressOptions = {},
    postcssOptions = {},
    visualizerOptions = {},
    clearOptions = {},
    pakg,
    ...others
  } = props;
  const {
    peerDependencies = {},
    dependencies = {},
    devDependencies = {},
  } = pakg || {};
  const external = [
    ...Object.keys(peerDependencies),
    ...Object.keys(dependencies),
    ...Object.keys(devDependencies),
  ];

  if (visualize) {
    plugins.push(
      visualizer({
        sourcemap: true,
        filename: `visualizer.html`,
        ...visualizerOptions,
      })
    );
  }

  /**
   * @type {const('rollup').RollupOptions}
   */
  const rollupConfig = {
    input: 'src/index.ts',
    output: [
      // 打包为commonJS模块
      {
        dir: path.resolve(__dirname, outputDir),
        format: 'cjs',
        sourcemap: true,
      },
      // 打包为ES6模块
      {
        file: path.resolve(__dirname, `${outputDir}/index.esm.js`),
        format: 'esm',
        sourcemap: true,
      },
    ],
    watch: {
      include: 'src/**',
      exclude: 'src/__tests__/**',
    },
    external,
    plugins: [
      clear({
        targets: ['dist', 'visualizer.html'],
        watch: true,
        ...clearOptions,
      }),
      postcss({
        modules: true, // 增加 css-module 功能
        extensions: ['.less', '.css'],
        inject: true, // dev 环境下的 样式是入住到 js 中的，其他环境不会注入
        extract: false, // 无论是 dev 还是其他环境这个配置项都不做 样式的抽离
        ...postcssOptions,
      }),
      progress(progressOptions),
      json(jsonOptions),
      resolve(nodeResolveOptions),
      eslint(eslintOptions),
      commonjs(commonjsOptions),
      typescript(typescriptOptions),
      filesize(filesizeOptions),
      // 将es6及以上转为es5
      babel({
        babelHelpers: 'bundled',
        // 排除node_modules 下的文件
        exclude: 'node_modules/**',
        ...babelOptions,
      }),
      ...plugins,
    ],
    ...others,
  };

  return rollupConfig;
};
