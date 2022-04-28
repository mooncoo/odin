import { defineConfig } from 'dumi';
const { resolve } = require('path');

//解决 taro-ui的部分组件展示问题
const specialItem = ['list-item', 'countdown-item', 'action-sheet-item'];
const specialItemMap = {
  'action-sheet-item': 'action-sheet/body/item',
};
export default defineConfig({
  title: 'odin',
  favicon: '/image/logo.png',
  logo: '/image/logo.png',
  outputPath: 'docs-dist',
  mode: 'site',
  dynamicImport: {
    loading: resolve(__dirname, 'loading'),
  },
  extraPostCSSPlugins: [
    //解决非启动状态下h5的font-size问题
    require('postcss-pxtorem')({
      exclude: /packages\/hooks|.dumi|docs/i,
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
    'odin-view-hooks': __dirname + '/packages/odin-view/src/pages/hooks',
    'odin-view-widget': __dirname + '/packages/odin-view/src/pages/widget',
    '@tarojs/runtime': 'taro-runtime-docs',
    '@tarojs/components$': '@tarojs/components/dist-h5/react', //与define的配置 解决非启动状态下 h5展示
  },
  define: {
    'process.env.TARO_ENV': 'h5',
  },
  navs: [
    null,
    { title: 'GitHub', path: 'https://github.com/mooncoo/odin-hooks' },
    // {
    //   title: '更新日志',
    //   path: 'https://github.com/mooncoo/odin-hooks/releases',
    // },
  ],
  links: [{ rel: 'stylesheet', href: `/assets/style.css` }],
  themeConfig: {
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
        libraryName: 'odin-widget',
        camel2DashComponentName: false,
        libraryDirectory: 'src',
      },
      'odin-widget',
    ],
    // [
    //   'import',
    //   {
    //     libraryName: 'odin-ui',
    //     camel2DashComponentName: false,
    //     libraryDirectory: 'src',
    //   },
    //   'odin-ui',
    // ],
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
