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

const projectPath = 'src/configs';

// 生成处理后的package.json
await outputJSON(`${projectPath}package.json`, pakg, { spaces: 2 });

await copy('LICENSE', `${projectPath}/LICENSE`);
await copy('README.md', `${projectPath}/README.md`);

// 进入到src文件夹中，执行发布命令
await shell.exec(`cd ${projectPath} && npm publish`);

await remove(`${projectPath}/LICENSE`);
await remove(`${projectPath}/README.md`);
await remove(`${projectPath}/package.json`);
