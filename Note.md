
## ESLint 9 Flat Config 迁移记录

- eslint: 8.57.0 → 9.27.0
- eslint-config-standard: 移除（ESLint 9 不再需要，核心规则已内置于 eslint 推荐配置）
- eslint-plugin-import → eslint-plugin-import-x: 4.16.2
- eslint-plugin-eslint-comments → @eslint-community/eslint-plugin-eslint-comments: 4.7.1
- @typescript-eslint/*: 8.26.1 → 8.57.2（通过 typescript-eslint 统一包）
- eslint-plugin-unicorn: 56.0.1 → 59.0.1
- eslint-plugin-promise: 6.6.0 → 7.2.1
- eslint-plugin-react: 7.37.4 → 7.37.5
- @eslint/js: 新增 9.39.4
- @eslint/eslintrc: 新增 3.3.5（FlatCompat 用于 react-hooks）
- globals: 新增 17.4.0

### 注意事项

- eslint-plugin-unicorn 59+ 使用 ESM default export，CJS 引用需 `.default`
- @eslint-community/eslint-plugin-eslint-comments 的 recommended config 是旧格式，手动配置了 flat config 版本
- typescript-eslint 8 的 recommended 配置新增了 no-require-imports 规则，已关闭
- 类型感知规则（no-confusing-void-expression, return-await）需要 tsconfig，从基础配置中移除
- eslint-config-file 需要使用纯 CJS，不经过 father 编译，build 脚本中直接 cp 源文件
- eslint-plugin-react-hooks 没有原生 flat config 支持，使用 @eslint/eslintrc 的 FlatCompat 兼容

## tsconfig 调整

- `isolatedModules: false` → `true`（Vite/esbuild/SWC 等现代工具链要求）
- 移除冗余的 `strictNullChecks: true`（`strict: true` 已包含）

## inquirer + commitlint 升级

- inquirer: 9.3.5 → 9.3.8（受 commitlint peerDependencies 限制，无法升级到 10+）
- @commitlint/cz-commitlint: 19.8.0 → 20.5.0
- commitizen: 4.3.1（无变化，已是最新）
