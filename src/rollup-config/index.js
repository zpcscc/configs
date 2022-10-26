import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import eslint from '@rollup/plugin-eslint';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';
import clear from 'rollup-plugin-clear';
import filesize from 'rollup-plugin-filesize';
import visualizer from 'rollup-plugin-visualizer';
import postcss from 'rollup-plugin-postcss';
import progress from 'rollup-plugin-progress';
import path from 'path';
import { terser } from 'rollup-plugin-terser';

const outputDir = 'dist';

// 创建Rollup配置
const createRollupConfig = (props) => {
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
    devDependencies = {}
  } = pakg || {};
  const external = [
    ...Object.keys(peerDependencies),
    ...Object.keys(dependencies),
    ...Object.keys(devDependencies)
  ];

  if (visualize) {
    plugins.push(
      visualizer({
        sourcemap: true,
        filename: `visualizer.html`,
        ...visualizerOptions
      })
    );
  }

  /**
   * @type {import('rollup').RollupOptions}
   */
  const rollupConfig = {
    input: 'src/index.ts',
    output: [
      // 打包为commonJS模块
      {
        dir: path.resolve(__dirname, 'dist'),
        format: 'cjs',
        sourcemap: true
      },
      {
        file: path.resolve(__dirname, `${outputDir}/index.min.js`),
        format: 'cjs',
        sourcemap: true,
        plugins: [terser()]
      },
      // 打包为ES6模块
      {
        file: path.resolve(__dirname, `${outputDir}/index.esm.js`),
        format: 'esm',
        sourcemap: true
      }
    ],
    watch: {
      include: 'src/**',
      exclude: 'src/__tests__/**'
    },
    external,
    plugins: [
      clear({
        targets: ['dist', 'visualizer.html'],
        watch: true,
        ...clearOptions
      }),

      postcss({
        modules: true, // 增加 css-module 功能
        extensions: ['.less', '.css'],
        inject: true, // dev 环境下的 样式是入住到 js 中的，其他环境不会注入
        extract: false, // 无论是 dev 还是其他环境这个配置项都不做 样式的抽离
        ...postcssOptions
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
        ...babelOptions
      }),
      ...plugins
    ],
    ...others
  };

  return rollupConfig;
};

export default createRollupConfig;
