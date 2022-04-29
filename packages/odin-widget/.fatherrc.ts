export default {
  entry: ['src/index.ts'],
  esm: {
    type: 'babel',
    file: 'odin-widget',
    mjs: true,
    minify: true,
  },
  cjs: {
    type: 'babel',
    file: 'odin-widget',
    lazy: true,
    minify: true,
  },
  umd: {
    globals: {
      react: 'React',
      '@tarojs/taro': 'Taro',
      '@tarojs/components': 'Components',
    },
    name: 'odin-widget',
    file: 'odin-widget',
    minFile: true,
    sourcemap: true,
  },
  injectCSS: false, // 不注入css
  extractCSS: false, // 单独提取css
  runtimeHelpers: true,
  disableTypeCheck: true,
};
