import rollupConfig from './src/configs/rollup-config/index.mjs';

export default rollupConfig({
  input: 'src/index.tsx',
  output: [
    // 打包成浏览器<script>标签可直接引入的文件
    {
      file: 'dist/bundle.js',
      format: 'iife',
      sourcemap: true,
    },
  ],
});

