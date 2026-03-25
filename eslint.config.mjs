// 项目自身的 ESLint 配置
import baseConfig from './src/eslint-config/index.js';

export default [
  ...baseConfig,
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/docs-dist/**',
      '**/.dumi/**',
      '**/*.d.ts',
      '**/commitlint-config/**',
    ],
  },
];
