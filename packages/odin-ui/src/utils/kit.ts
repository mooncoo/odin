import Taro from '@tarojs/taro';

let scrollTop = 0;

const isWeapp = Taro.getEnv() === Taro.ENV_TYPE.WEAPP;

const isWeb = Taro.getEnv() === Taro.ENV_TYPE.WEB;

const handleTouchScroll = (flag: any): void => {
  if (!isWeb) return;
  if (flag) {
    // eslint-disable-next-line prefer-destructuring
    scrollTop = document.documentElement.scrollTop;

    // 使body脱离文档流
    document.body.classList.add('at-frozen');

    // 把脱离文档流的body拉上去！否则页面会回到顶部！
    document.body.style.top = `${-scrollTop}px`;
  } else {
    document.body.style.top = '';
    document.body.classList.remove('at-frozen');

    document.documentElement.scrollTop = scrollTop;
  }
};

/**
 * 合并 style
 * @param {Object|String} style1
 * @param {Object|String} style2
 * @returns {String}
 */
const mergeStyle = (style1: object | string, style2: object | string): object | string => {
  if (style1 && typeof style1 === 'object' && style2 && typeof style2 === 'object') {
    return { ...style1, ...style2 };
  }
  return objectToString(style1) + objectToString(style2);
};

const pxTransform = (size: number): string => {
  if (!size) return '';
  const designWidth = 750;
  const deviceRatio = {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  };
  if (isWeb) {
    return (16 / 750) * size + 'rem';
  }
  return `${size / deviceRatio[designWidth]}rpx`;
};

/**
 *
 * @param style object | string
 * @returns
 */
const objectToString = (style: any): string => {
  if (style && typeof style === 'object') {
    let styleStr = '';
    Object.keys(style).forEach((key) => {
      const lowerCaseKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleStr += `${lowerCaseKey}:${style[key]};`;
    });
    return styleStr;
  } else if (style && typeof style === 'string') {
    return style;
  }
  return '';
};

/**
 *
 *
 */

const isTest = (): boolean => {
  return process.env.NODE_ENV === 'test';
};

/**
 *
 *
 * 随机选取 len 长度的字符
 *
 */
const uuid = (len = 8, radix = 16): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  const value: string[] = [];
  let i = 0;
  const radix2 = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) value[i] = chars[0 | (Math.random() * radix2)];
  } else {
    // rfc4122, version 4 form
    let r;

    // rfc4122 requires these characters
    /* eslint-disable-next-line */
    value[8] = value[13] = value[18] = value[23] = '-';
    value[14] = '4';

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!value[i]) {
        r = 0 | (Math.random() * 16);
        value[i] = chars[i === 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }
  return value.join('');
};

const getDateUTC = (value: any) => {
  return value
    ? new Date(value.replace(/-/g, '/'))
    : new Date(new Date().getTime() + 5 * 60 * 1000);
};

const regex = new RegExp(/[A-Z]/g);
const kebabCase = (str: string) => str.replace(regex, (v) => `-${v.toLowerCase()}`);

/**
 *
 * @param cssProperties  object | string
 * @returns
 */
const transformationString = (cssProperties: any) => {
  const finalResult = Object.keys(cssProperties).reduce((accumulator, key) => {
    const cssKey = kebabCase(key);
    const cssValue = cssProperties[key].replace("'", '');
    return `${accumulator}${cssKey}:${cssValue};`;
  }, '');
  return finalResult;
};

const cssPrefix = () => (Taro as any).Current.app?.cssPrefix || 'odin';

const BUYIMG = 'https://storage.360buyimg.com/hawley-common/odin-image';

export {
  handleTouchScroll,
  mergeStyle,
  pxTransform,
  isTest,
  uuid,
  transformationString,
  objectToString,
  getDateUTC,
  isWeapp,
  isWeb,
  BUYIMG,
  cssPrefix,
};
