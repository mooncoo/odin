import React, { useCallback } from 'react';
import { AtIcon } from 'taro-ui';
import { Image, View } from '@tarojs/components';

import './index.less';

export interface APIListItem {
  id: string;
  title: string;
  content: string;
  icon: string;
}

export type APIList = APIListItem[];

export const List: APIList = [
  {
    id: 'Basic',
    title: '基础Hooks',
    content: '包含事件、调试等',
    icon: 'basic',
  },
  {
    id: 'Layout',
    title: '布局Hooks',
    content: '包含tab、背景等',
    icon: 'layout',
  },
  {
    id: 'Feedback',
    title: '操作反馈Hooks',
    content: '包含Toast, Modal等',
    icon: 'feedback',
  },
  {
    id: 'Network',
    title: '网络Hooks',
    content: '包含请求、下载等',
    icon: 'network',
  },
  {
    id: 'Media',
    title: '媒体Hooks',
    content: '包含图片、音频等',
    icon: 'media',
  },
  {
    id: 'Device',
    title: '设备Hooks',
    content: '包含地理位置、电量等',
    icon: 'device',
  },
  {
    id: 'Wechat',
    title: '小程序Hooks',
    content: '包含管理器、API等',
    icon: 'wechat',
  },
  {
    id: 'Environment',
    title: '环境Hooks',
    content: '包含环境判断等',
    icon: 'environment',
  },
];
const logo = require('../../../../../../public/image/logo.png');

const Index = () => {
  return (
    <View className="page page-index">
      <View className="logo">
        <Image className="img" src={logo} />
      </View>
      <View className="module-list">
        {List.map((item, index) => (
          <View className="module-list__item" key={index} data-id={item.id} data-name={item.title}>
            <AtIcon prefixClass="iconfont" value={item.icon} className="module-list__icon" />
            <View className="module-list__info">
              <View className="title">{item.title}</View>
              <View className="content">{item.content}</View>
            </View>
            <View className="module-list__arrow">
              <AtIcon value="chevron-right" />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Index;
