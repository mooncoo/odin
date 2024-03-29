import { defineConfig } from 'dumi';
const { resolve } = require('path');

//解决 taro-ui的部分组件展示问题
const specialItem = ['list-item', 'countdown-item', 'action-sheet-item'];
const specialItemMap = {
  'action-sheet-item': 'action-sheet/body/item',
};
const isGH = process.env.BUILD_TARGET === 'GH';
// 是否是打包到github上
const baseUrl = isGH ? '/odin' : '';
export default defineConfig({
  title: '奥丁',
  favicon: `${baseUrl}/image/logo.png`,
  logo: `${baseUrl}/image/logo.png`,
  outputPath: 'docs-dist',
  mode: 'site',
  ...(isGH
    ? {
        publicPath: `${baseUrl}/`,
        runtimePublicPath: true,
        base: `${baseUrl}`,
        history: { type: 'hash' },
      }
    : {}),
  dynamicImport: {
    loading: resolve(__dirname, 'loading'),
  },
  lessLoader: {
    lessOptions: {
      paths: [__dirname + '/packages/odin-ui/src/styles/index.less'],
    },
  },
  extraPostCSSPlugins: [
    //解决非启动状态下h5的font-size问题
    require('postcss-pxtorem')({
      exclude: /packages\/odin-hooks|.dumi|docs/i,
      rootValue: 100,
      unitPrecision: 5,
      propList: ['*'],
      selectorBlackList: [],
      replace: true,
      mediaQuery: true,
      minPixelValue: 0,
    }),
  ],
  alias: {
    'odin-app-hooks': __dirname + '/packages/odin-app/src/pages/hooks',
    'odin-app-ui': __dirname + '/packages/odin-app/src/pages/ui',
    '@tarojs/runtime': 'taro-runtime-docs',
    '@tarojs/components$': '@tarojs/components/dist-h5/react', //与define的配置 解决非启动状态下 h5展示
  },
  define: {
    'process.env.TARO_ENV': 'h5',
    baseUrl: baseUrl,
  },
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/mooncoo/odin' },
    // {
    //   title: '更新日志',
    //   path: 'https://github.com/mooncoo/odin/releases',
    // },
  ],
  links: [{ rel: 'stylesheet', href: `${baseUrl}/assets/style.css` }],
  cssModulesTypescriptLoader: {},
  themeConfig: {
    carrier: 'odin-ui', // 设备状态栏左侧的文本内容
    hd: {
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/master/packages/theme-mobile/src/typings/config.d.ts#L7
    },
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'odin-hooks',
        camel2DashComponentName: false,
        libraryDirectory: 'src',
      },
      'odin-hooks',
    ],
    [
      'import',
      {
        libraryName: 'odin-ui',
        camel2DashComponentName: false,
        libraryDirectory: 'src',
      },
      'odin-ui',
    ],
    [
      'import',
      {
        libraryName: 'taro-ui',
        customName: (name) => {
          name = name.replace('at-', '');
          if (specialItemMap[name]) {
            name = specialItemMap[name];
          } else if (specialItem.includes(name)) {
            name = name.replace('-', '/');
          }
          return 'taro-ui/lib/components/' + name;
        },
        customStyleName: (name) => {
          name = name.replace('at-', '');
          if (specialItem.includes(name)) {
            name = name
              .split('-')
              .map((v, i, self) => (i === self.length - 1 ? null : v))
              .filter((v) => v)
              .join('-');
          }
          return 'taro-ui/dist/style/components/' + name + '.scss';
        },
      },
      'taro-ui',
    ],
  ],
  // more config: https://d.umijs.org/config
});
