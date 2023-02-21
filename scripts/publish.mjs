import fs from 'fs-extra';
import { copy, outputJSON, readJson, remove } from 'fs-extra/esm';
import { resolve } from 'path';
import shell from 'shelljs';

// 读取package.json文件
const pakg = await readJson(resolve('package.json'));

// 清空部分配置
pakg.scripts = {};
// 清空dev依赖
pakg.devDependencies = {};
// 设置publish发布需要导出的文件
pakg.files = fs.readdirSync(resolve('src'));

const projectPath = 'src';

// 生成处理后的package.json
await outputJSON(`${projectPath}/package.json`, pakg, { spaces: 2 });

// 复制需要发布的文件
await copy('LICENSE', `${projectPath}/LICENSE`);
await copy('README.md', `${projectPath}/README.md`);

// 进入到src文件夹中，执行发布命令
await shell.exec(`cd ${projectPath} && npm publish`);

// 发布完成后删除对应的文件
await remove(`${projectPath}/LICENSE`);
await remove(`${projectPath}/README.md`);
await remove(`${projectPath}/package.json`);
