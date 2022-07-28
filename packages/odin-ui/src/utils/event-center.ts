import Event from 'eventemitter3';
import Taro from '@tarojs/taro';

const initEvent = () => {
  if ((Taro as any).Current.app.eventCenter) return;
  // 声明事件总线
  (Taro as any).Current.app.eventCenter = new Event();
};
export default initEvent;
