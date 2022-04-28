---
title: useEnv
nav:
  title: Hooks
  path: /hooks
  order: 2
group:
  title: 环境判断
  path: /env
---

# useEnv

获取当前环境值

## 何时使用

当需要获取当前环境值做一些判断时

## API

```jsx | pure
() => Taro.ENV_TYPE;
```

## 返回值说明

| 返回值 | 说明       | 类型       |
| ------ | ---------- | ---------- |
| env    | 当前环境值 | `ENV_TYPE` |

## 代码演示

<code src="odin-view-hooks/useEnv" />

## Hook 支持度

| 微信小程序 | H5  | ReactNative |
| :--------: | :-: | :---------: |
|     ✔️     | ✔️  |     ✔️      |
