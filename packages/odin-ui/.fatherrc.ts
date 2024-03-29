export default {
  entry: ['src/index.ts'],
  lessInBabelMode: true,
  esm: {
    type: 'babel',
    file: 'odin-ui',
    mjs: true,
    minify: true,
  },
  cjs: {
    type: 'babel',
    file: 'odin-ui',
    lazy: true,
    minify: true,
  },
  umd: {
    globals: {
      react: 'React',
      '@tarojs/taro': 'Taro',
      '@tarojs/components': 'Components',
    },
    name: 'odin-ui',
    file: 'odin-ui',
    minFile: true,
    sourcemap: true,
  },
  injectCSS: false, // 不注入css
  extractCSS: false, // 单独提取css
  runtimeHelpers: true,
  disableTypeCheck: true,
};
