import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import html from '@rollup/plugin-html';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import serve from 'rollup-plugin-serve';
import template from './template.mjs';

/**
 * @name rollup插件
 */
const plugins = () => {
  return [
    // 替换某些字段
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    // 开启本地服务
    serve('dist'),
    // 显示打包进度
    progress(),
    // 允许代码加载node_modules里的第三方库
    resolve(),
    // 进行eslint检查
    eslint(),
    // 压缩代码
    terser(),
    // 处理ts文件.使用的tsconfig.json里的配置
    typescript(),
    // 显示打包后的文件大小
    filesize(),
    // 生成html文件。用于最终打包成一个静态页面
    html({ template }),
    // 将commonjs转为es6
    commonjs(),
    // 将es6及以上转为es5,需配合commonjs一起使用
    babel({
      babelHelpers: 'bundled',
      // 排除node_modules 下的文件不进行转换
      exclude: 'node_modules/**',
    }),
  ];
};

export default plugins;
