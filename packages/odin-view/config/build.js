const { TYPE_ENV, TARO_ENV, HOST_ENV } = process.env;
module.exports = {
  env: {
    NODE_ENV: TYPE_ENV === 'start' ? '"development"' : '"production"',
  },
  defineConstants: {
    __DEV__: TYPE_ENV === 'start' ? 'development' : 'production',
    TARO_ENV,
    HOST_ENV,
  },
  mini: {},
  h5: {
    /**
     * 如果h5端编译后体积过大，可以使用webpack-bundle-analyzer插件对打包体积进行分析。
     * 参考代码如下：
     * webpackChain (chain) {
     *   chain.plugin('analyzer')
     *     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
     * }
     */
  },
};
