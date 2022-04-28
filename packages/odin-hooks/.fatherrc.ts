export default {
  entry: ['src/index.ts'],
  esm: {
    type: 'babel',
    file: 'odin-hooks',
    mjs: true,
    minify: true,
  },
  cjs: {
    type: 'babel',
    file: 'odin-hooks',
    lazy: true,
    minify: true,
  },
  umd: {
    globals: {
      react: 'React',
      '@tarojs/taro': 'Taro',
    },
    name: 'odin-hooks',
    file: 'odin-hooks',
    minFile: true,
    sourcemap: true,
  },
  injectCSS: false, // 不注入css
  extractCSS: false, // 单独提取css
  runtimeHelpers: true,
  disableTypeCheck: true,
};
