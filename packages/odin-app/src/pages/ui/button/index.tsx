import React, { FC } from 'react';
import { View } from '@tarojs/components';
import { Button } from 'odin-ui';

const ButtonPage: FC = () => {
  return (
    <View className="container">
      <View className="doc-body">
        <View className="doc-body-content-tip">按钮类型</View>
        <View className="button-box">
          <Button className="button-box-item" type="primary">
            主要按钮
          </Button>
          <Button className="button-box-item" type="info">
            信息按钮
          </Button>
          <Button className="button-box-item" type="default">
            默认按钮
          </Button>
          <Button className="button-box-item" type="danger">
            危险按钮
          </Button>
          <Button className="button-box-item" type="warning">
            警告按钮
          </Button>
          <Button className="button-box-item" type="success">
            成功按钮
          </Button>
        </View>

        <View className="doc-body-content-tip">边框按钮</View>
        <View className="button-box">
          <Button className="button-box-item" border type="primary">
            主要按钮
          </Button>
          <Button className="button-box-item" order type="info">
            信息按钮
          </Button>
          <Button className="button-box-item" border type="warning">
            警告按钮
          </Button>
          <Button className="button-box-item" border type="danger">
            危险按钮
          </Button>
        </View>

        <View className="doc-body-content-tip">按钮形状</View>
        <View className="button-box">
          <Button className="button-box-item" round="rect" type="primary">
            主要按钮
          </Button>
          <Button className="button-box-item" type="info">
            信息按钮
          </Button>
          <Button className="button-box-item" round="circle" type="warning">
            警告按钮
          </Button>
        </View>

        <View className="doc-body-content-tip">自定义背景颜色</View>
        <View className="button-box">
          <Button className="button-box-item" fillColor="#6F16E8">
            单色按钮
          </Button>
          <Button
            className="button-box-item"
            fillColor="linear-gradient(90deg, rgba(133,44,255,1) 0%,rgba(97,16,206,1) 100%)"
          >
            渐变按钮
          </Button>
          <Button className="button-box-item" border fillColor="#6F16E8">
            单色按钮
          </Button>
        </View>

        <View className="doc-body-content-tip">自定义文字颜色</View>
        <View className="button-box">
          <Button className="button-box-item" color="red">
            红色文字
          </Button>
          <Button className="button-box-item" color="green">
            绿色文字
          </Button>
          <Button className="button-box-item" color="blue">
            蓝色文字
          </Button>
        </View>

        <View className="doc-body-content-tip">自定义圆角</View>
        <View className="button-box">
          <Button className="button-box-item" type="primary">
            默认
          </Button>
          <Button className="button-box-item" radius={24} type="info">
            24px
          </Button>
          <Button className="button-box-item" radius={36} type="warning">
            36px
          </Button>
        </View>

        <View className="doc-body-content-tip">禁用状态</View>
        <View className="button-box">
          <Button className="button-box-item" disabled border type="primary">
            主要按钮
          </Button>
          <Button className="button-box-item" disabled border type="info">
            信息按钮
          </Button>
          <Button className="button-box-item" disabled border type="warning">
            警告按钮
          </Button>
          <Button className="button-box-item" disabled type="danger">
            危险按钮
          </Button>
          <Button className="button-box-item" disabled type="default">
            默认按钮
          </Button>
        </View>

        <View className="doc-body-content-tip">按钮尺寸</View>
        <View className="button-box">
          <Button className="button-box-item" full type="primary">
            通栏按钮
          </Button>
          <Button className="button-box-item" size="large" type="primary">
            大型按钮
          </Button>
          <Button className="button-box-item" size="normal" type="primary">
            普通按钮
          </Button>
          <Button className="button-box-item" size="small" type="primary">
            小型按钮
          </Button>
          <Button className="button-box-item" size="mini" type="primary">
            迷你按钮
          </Button>
        </View>
        <View className="doc-body-content-tip">带loading</View>
        <View className="button-box">
          <Button className="button-box-item" type="primary" loading={true}>
            loading
          </Button>
        </View>
      </View>
    </View>
  );
};

export default ButtonPage;
