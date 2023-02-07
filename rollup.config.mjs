import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
// import progress from 'rollup-plugin-progress';
import rollupConfig from './src/configs/rollup-config/index.mjs';

export default rollupConfig({
  // 打包类型：app｜lib;默认为lib
  buildType: 'app',
  input: 'src/app/index.tsx',
  output: [
    // 打包成浏览器<script>标签可直接引入的文件
    {
      file: 'dist/bundle.js',
      format: 'iife',
      sourcemap: true,
    },
  ],
  // 禁止默认提供的一些插件,参数为默认插件函数名称的数组
  // disableDefaultPlugin: ['progress'],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      // 排除node_modules 下的文件不进行转换
      exclude: 'node_modules/**',
    }),
    replace({
      preventAssignment: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
});
