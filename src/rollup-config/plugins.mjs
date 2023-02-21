import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
import html from '@rollup/plugin-html';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import progress from 'rollup-plugin-progress';
import serve from 'rollup-plugin-serve';
import template from './template.mjs';

// 对象化plugins数组
const getPluginObj = (plugins) => {
  return plugins?.reduce((prev, curr) => ({ ...prev, [curr.name]: curr }), {});
};

/**
 * @name 用于打包app的配置，生成静态页面
 */
const appPlugins = [
  // 替换某些字段
  replace({
    preventAssignment: true,
    'process.env.NODE_ENV': JSON.stringify('development'),
  }),
  // 开启本地服务
  serve('dist'),
  // 生成html文件。用于最终打包成一个静态页面
  html({ template }),
];

/**
 * @name 最基础的配置，用于打包组件库，开发自定义工具库等
 */
const defaultPlugins = [
  // 显示打包进度
  progress(),
  // 允许代码加载node_modules里的第三方库
  resolve(),
  // 进行eslint检查
  eslint(),
  // 压缩代码
  terser(),
  // 处理ts文件.使用的tsconfig.json里的配置
  typescript(),
  // 显示打包后的文件大小
  filesize(),
  // 将commonjs转为es6
  commonjs(),
  // 将es6及以上转为es5,需配合commonjs一起使用
  babel({
    babelHelpers: 'bundled',
    // 排除node_modules 下的文件不进行转换
    exclude: 'node_modules/**',
  }),
];

/**
 * @name rollup插件
 */
const plugins = ({ plugins, buildType, disableDefaultPlugin }) => {
  // 用户自定义插件对象
  const customPluginsObj = getPluginObj(plugins);
  // 默认提供的插件
  const defaultPluginObj = getPluginObj(defaultPlugins);
  // 用于打包静态页面的补充插件
  const appPluginObj = buildType === 'app' ? getPluginObj(appPlugins) : {};
  // 按需求生成需要的插件数据并返回

  return (
    Object.entries({ ...defaultPluginObj, ...appPluginObj, ...customPluginsObj })
      .map(([name, plugin]) => {
        // 判断当前插件是否被禁止使用
        const disable = disableDefaultPlugin === true || disableDefaultPlugin?.includes(name);
        // 若有同名插件，优先使用用户自定义插件。再判断是否使用默认插件
        return customPluginsObj[name] || (!disable && plugin);
      })
      // 过滤无效空数组
      .filter(Boolean)
  );
};

export default plugins;
