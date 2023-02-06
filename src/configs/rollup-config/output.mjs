/**
 * @name 处理rollup导出文件
 */
const output = ({ outDir }) => {
  return [
    // 打包为commonJS模块
    // {
    //   dir: outDir,
    //   format: 'cjs',
    //   sourcemap: true,
    // },
    // 打包为ES6模块
    // {
    //   file: `${outDir}/index.esm.js`,
    //   format: 'esm',
    //   sourcemap: true,
    // },
    // 打包浏览器<script>标签可直接引入的文件
    {
      file: `${outDir}/bundle.js`,
      format: 'iife',
      sourcemap: true,
    },
  ];
};

export default output;
