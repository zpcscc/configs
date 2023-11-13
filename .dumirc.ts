import { defineConfig } from 'dumi';

const name = 'configs';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name,
    socialLinks: {
      github: `https://github.com/zpcscc/${name}`,
    },
    logo: 'https://zpcscc.top/img/logo.png',
  },
  favicons: ['https://zpcscc.top/img/favicon.ico'],
  base: `/${name}/`,
  publicPath: `/${name}/`,
});
