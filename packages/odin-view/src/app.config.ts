export default {
  pages: [
    // hooks
    'pages/hooks/index/index',
    'pages/hooks/useEnv/index',

    //widget
    'pages/widget/index/index',
    'pages/widget/button/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    backgroundColor: '#f8f8f8',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Taro hooks',
    navigationBarTextStyle: 'black',
  },
  style: 'v2',
  tabBar: {
    color: '#6a6a77',
    selectedColor: '#78a4fa',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/hooks/index/index',
        text: '首页',
        iconPath: './assets/icon/index.png',
        selectedIconPath: './assets/icon/index-select.png',
      },
      {
        pagePath: 'pages/widget/index/index',
        text: '组件',
        iconPath: './assets/icon/tabbar.png',
        selectedIconPath: './assets/icon/tabbar-select.png',
      },
      {
        pagePath: 'pages/about/index',
        text: '关于',
        iconPath: './assets/icon/about.png',
        selectedIconPath: './assets/icon/about-select.png',
      },
    ],
  },
  permission: {
    'scope.userLocation': {
      desc: '您的位置信息将用于小程序位置接口展示',
    },
  },
  requiredBackgroundModes: ['location', 'audio'],
};
