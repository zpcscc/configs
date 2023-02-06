import external from './external.mjs';
import output from './output.mjs';
import plugins from './plugins.mjs';

// rollup配置
const rollupConfig = (props) => {
  const { pakg, outDir = 'dist', ...rest } = props;

  const rollupConfig = {
    input: 'src/index.tsx',
    output: output({ outDir }),
    external: external({ pakg }),
    plugins: plugins(),
    ...rest,
  };

  return rollupConfig;
};

export default rollupConfig;
