---
nav:
  title: 指南
  order: 1
title: 介绍
---

## 什么是 odin-hooks?

`odin-hooks` - 一款对标`Taro API`开发的`Hooks Library`. 覆盖几乎所有`Taro API`以及方法.

## 特性

- 全面匹配`Taro API`.
- 结合`ahooks`扩展常用`hook`.
- 完整的类型定义文件
- 更易用的方式

## 快速上手

### 环境准备

需要准备[node](https://nodejs.org/en/)

```bash
$ node -v
# 确保node版本为12+
$ v12.22.1
```

### 脚手架初始化`Taro`

`odin-hooks`是以`React`模板编写的. 所以仅适用于`React`.

```bash
$ npx @tarojs/cli init odin-hooks-app
# 选择react模板 - (可直接选择模板中的taro-hooks模板或可以在后续自行安装)
$ cd odin-hooks-app
$ npm i odin-hooks --save
$ npm run dev:weapp --watch
```

### 构建及部署

参考[taro build](https://taro-docs.jd.com/taro/docs/config)

<code hidden="1" src="odin-app-hooks/index"/>
