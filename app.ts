//  https://taro-docs.jd.com/taro/docs/external-libraries

import { defineCustomElements, applyPolyfills } from '@tarojs/components/loader';
import { window } from '@tarojs/runtime';

import '@tarojs/components/dist/taro-components/taro-components.css';
import '@tarojs/taro-h5/src/api/location/style.css';
//处理站点打包模式下ui样式
import './packages/odin-ui/src/styles/index.less'
import './polyfill';

applyPolyfills().then(() => {
  defineCustomElements(window);
});
