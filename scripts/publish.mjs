import { copy, outputJSON, readJson, remove } from 'fs-extra/esm';
import { resolve } from 'path';
import shell from 'shelljs';

// 读取package.json文件
const pakg = await readJson(resolve('package.json'));

// 清空部分配置
pakg.scripts = {};
pakg.devDependencies = {};

// 设置publish发布需要导出的文件
pakg.files = [
  'commitlint-config',
  'eslint-config',
  'prettier-config',
  'rollup-config',
  'stylelint-config',
  'tsconfig',
];

// 生成处理后的package.json
await outputJSON('src/package.json', pakg, { spaces: 2 });

await copy('LICENSE', 'src/LICENSE');
await copy('README.md', 'src/README.md');

// 进入到src文件夹中，执行发布命令
await shell.exec('cd src && npm publish');

await remove('src/LICENSE');
await remove('src/README.md');
await remove('src/package.json');
