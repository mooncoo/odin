// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
const specialItem = ['list-item', 'countdown-item', 'action-sheet-item'];
const specialItemMap = {
  'action-sheet-item': 'action-sheet/body/item',
};
module.exports = {
  presets: [
    [
      'taro',
      {
        framework: 'react',
        ts: true,
      },
    ],
  ],
  plugins: [
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
};
