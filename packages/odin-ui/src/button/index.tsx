import React, { FC } from 'react';
import Taro from '@tarojs/taro';
import classNames from 'classnames';
import { ButtonProps } from '@tarojs/components/types/Button';
import { View, Button, Form } from '@tarojs/components';
import { BaseEventOrig, CommonEvent } from '@tarojs/components/types/common';
import { ButtonProps as CButtonProps } from './type';
import { CompContainer, is, _ } from '../utils';
import AtLoading from '../loading/index';

const ButtonComponent: FC<CButtonProps> = (props) => {
  const CssPrefix = _.cssPrefix();
  const isWEB = Taro.getEnv() === Taro.ENV_TYPE.WEB;
  const isWEAPP = Taro.getEnv() === Taro.ENV_TYPE.WEAPP;

  const {
    type = 'primary',
    size = 'normal',
    radius = 0,
    fill,
    full,
    lang,
    round,
    disabled,
    formType,
    openType,
    color,
    border,
    borderColor,
    fillColor,
    customStyle = '',
    sessionFrom,
    sendMessageTitle,
    sendMessagePath,
    sendMessageImg,
    showMessageCard,
    appParameter,
    loading,
  } = props;

  const onClick = (event: CommonEvent) => {
    if (!props.disabled) {
      is.isFunction(props.onClick) && props.onClick(event);
    }
  };

  const onGetUserInfo = (event: CommonEvent) => {
    is.isFunction(props.onGetUserInfo) && props.onGetUserInfo(event);
  };

  const onContact = (event: BaseEventOrig<ButtonProps.onContactEventDetail>) => {
    is.isFunction(props.onContact) && props.onContact(event);
  };

  const onGetPhoneNumber = (event: CommonEvent) => {
    is.isFunction(props.onGetPhoneNumber) && props.onGetPhoneNumber(event);
  };

  const onError = (event: CommonEvent) => {
    is.isFunction(props.onError) && props.onError(event);
  };

  const onOpenSetting = (event: CommonEvent) => {
    is.isFunction(props.onOpenSetting) && props.onOpenSetting(event);
  };

  const onSumit = (event: CommonEvent) => {
    if (isWEAPP || isWEB) {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      $scope.triggerEvent('submit', event.detail, {
        bubbles: true,
        composed: true,
      });
    }
  };

  const onReset = (event: CommonEvent) => {
    if (isWEAPP || isWEB) {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      $scope.triggerEvent('reset', event.detail, {
        bubbles: true,
        composed: true,
      });
    }
  };

  const rootClassName = [`${CssPrefix}-button`, `${CssPrefix}-button--${type}`];
  const classObject = {
    [`${CssPrefix}-button--${size}`]: size,
    [`${CssPrefix}-button--disabled`]: disabled,
    [`${CssPrefix}-button--full`]: full,
    [`${CssPrefix}-button--${round}`]: round,
    [`${CssPrefix}-button--fill`]: fill,
    [`${CssPrefix}-button--${type}--border`]: border && type,
    // 'slc-button-no-border': (fill || fillColor) && !borderColor,
  };

  const selfColor: any = { color, borderColor, fillColor };
  if (fillColor && border) {
    selfColor.color = fillColor;
    selfColor.borderColor = fillColor;
    selfColor.fillColor = 'none';
  }
  if (fillColor && !border) {
    selfColor.color = '#fff';
    selfColor.border = 'none';
  }
  const borderColorObj = selfColor.borderColor ? { 'border-color': selfColor.borderColor } : {};
  const background = selfColor.fillColor ? { background: selfColor.fillColor } : {};
  const style = _.objectToString(
    Object.assign(customStyle, {
      'border-radius': _.pxTransform(radius),
      color: selfColor.color,
      ...borderColorObj,
      ...background,
    }),
  );
  const loadingColor = type === 'primary' ? '#fff' : '';
  const loadingSize = size === 'small' ? '30' : 0;

  let loadingComponent: JSX.Element | null = null;
  if (loading) {
    loadingComponent = (
      <View className={`${CssPrefix}-button-icon`}>
        <AtLoading color={loadingColor} size={loadingSize} />
      </View>
    );
    rootClassName.push(`${CssPrefix}-button--icon`);
  }

  const webButton = (
    <Button
      className={`${CssPrefix}-button-wxbutton`}
      lang={lang}
      formType={formType}
      loading={loading}
    />
  );

  const button = (
    <Button
      className={`${CssPrefix}-button-wxbutton`}
      formType={formType}
      openType={openType}
      lang={lang}
      loading={loading}
      sessionFrom={sessionFrom}
      sendMessageTitle={sendMessageTitle}
      sendMessagePath={sendMessagePath}
      sendMessageImg={sendMessageImg}
      showMessageCard={showMessageCard}
      appParameter={appParameter}
      onGetUserInfo={onGetUserInfo}
      onGetPhoneNumber={onGetPhoneNumber}
      onOpenSetting={onOpenSetting}
      onError={onError}
      onContact={onContact}
    />
  );

  return (
    <CompContainer
      className={classNames(rootClassName, classObject, props.className)}
      onClick={onClick}
      customizeStyle={props.customizeStyle}
      style={style}
    >
      {isWEB && !disabled && webButton}
      {isWEAPP && !disabled && (
        <Form onSubmit={onSumit} onReset={onReset}>
          {button}
        </Form>
      )}
      {loadingComponent}
      <View className={`${CssPrefix}-button-text`}>{props.children}</View>
    </CompContainer>
  );
};

export default ButtonComponent;
