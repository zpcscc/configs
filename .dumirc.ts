import { defineConfig } from 'dumi';

const name = 'configs';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name,
    socialLinks: {
      github: 'https://github.com/dxsixpc/configs',
    },
  },
  base: `/${name}/`,
  publicPath: `/${name}/`,
});
