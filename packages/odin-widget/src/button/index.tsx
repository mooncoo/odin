import React from 'react';
import { Button as TaroBtn, ButtonProps as TaroBtnProps } from '@tarojs/components';

interface ButtonProps extends TaroBtnProps {
  xxx?: string;
}
const Button: React.FC<ButtonProps> = ({ xxx, children }) => {
  return <TaroBtn>{children}</TaroBtn>;
};
export default Button;
