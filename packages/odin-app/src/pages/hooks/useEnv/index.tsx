import React, { useCallback } from 'react';
import { AtRadio, AtMessage } from 'taro-ui';

import { useEnv } from 'odin-hooks';
import Taro from '@tarojs/taro';

const ENVTYPE = [
  ['WEAPP', 'WEAPP'],
  ['WEB', 'WEB'],
  ['RN', 'RN'],
  ['SWAN', 'SWAN'],
  ['ALIPAY', 'ALIPAY'],
  ['TT ', 'TT'],
  ['QQ', 'QQ'],
  ['JD', 'JD'],
];
const radioOptions = (env: string) =>
  ENVTYPE.map(([label, value]) => ({
    label,
    value,
    desc: `环境: ${label}`,
  }));

export default () => {
  const env = useEnv();

  const handleRadioClick = useCallback(() => {
    Taro.atMessage({
      message: '当前环境类型: ' + env,
      type: 'info',
    });
  }, [env]);

  return (
    <>
      <AtMessage />
      <AtRadio options={radioOptions(env)} value={env} onClick={() => handleRadioClick()} />
    </>
  );
};
