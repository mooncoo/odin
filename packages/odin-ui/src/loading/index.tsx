import React, { FC } from 'react';
import { View } from '@tarojs/components';
import LoadingProps from './type';
import { _ } from '../utils';

const Loading: FC<LoadingProps> = (props) => {
  const CssPrefix = _.cssPrefix();
  const { size = 0, color = '' } = props;
  const loadingSize = typeof size === 'string' ? size : String(size);
  const sizeStyle = {
    width: size ? `${_.pxTransform(parseInt(loadingSize))}` : '',
    height: size ? `${_.pxTransform(parseInt(loadingSize))}` : '',
  };
  const colorStyle = {
    border: color ? `1px solid ${color}` : '',
    borderColor: color ? `${color} transparent transparent transparent` : '',
  };
  const ringStyle = Object.assign({}, colorStyle, sizeStyle);
  return (
    <View className={`${CssPrefix}-loading`} style={sizeStyle}>
      <View className={`${CssPrefix}-loading--ring`} style={ringStyle}></View>
      <View className={`${CssPrefix}-loading--ring`} style={ringStyle}></View>
      <View className={`${CssPrefix}-loading--ring`} style={ringStyle}></View>
    </View>
  );
};
export default Loading;
