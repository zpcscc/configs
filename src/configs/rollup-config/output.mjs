/**
 * @name 处理rollup导出文件
 */
const output = ({ outDir, buildType }) => {
  const outputObj = {
    app: [
      {
        file: `${outDir}/bundle.js`,
        format: 'iife',
        sourcemap: true,
      },
    ],
  };

  const defaultOutput = [
    // 打包为commonJS模块
    {
      dir: outDir,
      format: 'cjs',
      sourcemap: true,
    },
    // 打包为ES6模块
    {
      file: `${outDir}/index.esm.js`,
      format: 'esm',
      sourcemap: true,
    },
  ];

  return outputObj[buildType] || defaultOutput;
};

export default output;
