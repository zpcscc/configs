// 官方文档 https://rollupjs.org/
import external from './external.mjs';
import output from './output.mjs';
import plugins from './plugins.mjs';

// rollup配置
const rollupConfig = (props) => {
  const {
    plugins: pluginsList,
    outDir = 'dist',
    buildType = 'lib',
    pakg = {},
    disableDefaultPlugin = [],
    ...rest
  } = props;

  const rollupConfig = {
    input: 'src/index.tsx',
    output: output({ outDir, buildType }),
    external: external({ pakg }),
    plugins: plugins({ plugins: pluginsList, buildType, disableDefaultPlugin }),
    ...rest,
  };

  return rollupConfig;
};

export default rollupConfig;
