(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{MZF8:function(n,t,e){"use strict";var o=e("ogwx");e.d(t,"a",(function(){return o["b"]}));e("VCU9")},OYlG:function(n,t,e){"use strict";e.r(t);var o=e("0Owb"),i=e("q1tI"),a=e.n(i),r=e("RGYn"),s=e("9og8"),p=e("WmNS"),l=e.n(p),c=e("rlch"),d="import React, { useCallback } from 'react';\nimport { AtRadio, AtMessage } from 'taro-ui';\n\nimport { useEnv } from 'odin-hooks';\nimport Taro from '@tarojs/taro';\n\nconst ENVTYPE = [\n  ['WEAPP', 'WEAPP'],\n  ['WEB', 'WEB'],\n  ['RN', 'RN'],\n  ['SWAN', 'SWAN'],\n  ['ALIPAY', 'ALIPAY'],\n  ['TT ', 'TT'],\n  ['QQ', 'QQ'],\n  ['JD', 'JD'],\n];\nconst radioOptions = (env: string) =>\n  ENVTYPE.map(([label, value]) => ({\n    label,\n    value,\n    desc: `\u73af\u5883: ${label}`,\n  }));\n\nexport default () => {\n  const env = useEnv();\n\n  const handleRadioClick = useCallback(() => {\n    Taro.atMessage({\n      message: '\u5f53\u524d\u73af\u5883\u7c7b\u578b: ' + env,\n      type: 'info',\n    });\n  }, [env]);\n\n  return (\n    <>\n      <AtMessage />\n      <AtRadio options={radioOptions(env)} value={env} onClick={() => handleRadioClick()} />\n    </>\n  );\n};",u='import React, { memo } from \'react\';\nimport { FC } from \'@tarojs/taro\';\nimport { View } from \'@tarojs/components\';\nimport { Button } from \'odin-ui\';\n\nimport \'./index.less\';\n\nconst ButtonPage: FC = () => {\n  return (\n    <View className="container">\n      <View className="doc-body">\n        <View className="doc-body-content-tip">\u6309\u94ae\u7c7b\u578b</View>\n        <View className="button-box">\n          <Button className="button-box-item" type="primary">\n            \u4e3b\u8981\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" type="info">\n            \u4fe1\u606f\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" type="default">\n            \u9ed8\u8ba4\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" type="danger">\n            \u5371\u9669\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" type="warning">\n            \u8b66\u544a\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" type="success">\n            \u6210\u529f\u6309\u94ae\n          </Button>\n        </View>\n\n        <View className="doc-body-content-tip">\u8fb9\u6846\u6309\u94ae</View>\n        <View className="button-box">\n          <Button className="button-box-item" border type="primary">\n            \u4e3b\u8981\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" order type="info">\n            \u4fe1\u606f\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" border type="warning">\n            \u8b66\u544a\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" border type="danger">\n            \u5371\u9669\u6309\u94ae\n          </Button>\n        </View>\n\n        <View className="doc-body-content-tip">\u6309\u94ae\u5f62\u72b6</View>\n        <View className="button-box">\n          <Button className="button-box-item" round="rect" type="primary">\n            \u4e3b\u8981\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" type="info">\n            \u4fe1\u606f\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" round="circle" type="warning">\n            \u8b66\u544a\u6309\u94ae\n          </Button>\n        </View>\n\n        <View className="doc-body-content-tip">\u81ea\u5b9a\u4e49\u80cc\u666f\u989c\u8272</View>\n        <View className="button-box">\n          <Button className="button-box-item" fillColor="#6F16E8">\n            \u5355\u8272\u6309\u94ae\n          </Button>\n          <Button\n            className="button-box-item"\n            fillColor="linear-gradient(90deg, rgba(133,44,255,1) 0%,rgba(97,16,206,1) 100%)"\n          >\n            \u6e10\u53d8\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" border fillColor="#6F16E8">\n            \u5355\u8272\u6309\u94ae\n          </Button>\n        </View>\n\n        <View className="doc-body-content-tip">\u81ea\u5b9a\u4e49\u6587\u5b57\u989c\u8272</View>\n        <View className="button-box">\n          <Button className="button-box-item" color="red">\n            \u7ea2\u8272\u6587\u5b57\n          </Button>\n          <Button className="button-box-item" color="green">\n            \u7eff\u8272\u6587\u5b57\n          </Button>\n          <Button className="button-box-item" color="blue">\n            \u84dd\u8272\u6587\u5b57\n          </Button>\n        </View>\n\n        <View className="doc-body-content-tip">\u81ea\u5b9a\u4e49\u5706\u89d2</View>\n        <View className="button-box">\n          <Button className="button-box-item" type="primary">\n            \u9ed8\u8ba4\n          </Button>\n          <Button className="button-box-item" radius={24} type="info">\n            24px\n          </Button>\n          <Button className="button-box-item" radius={36} type="warning">\n            36px\n          </Button>\n        </View>\n\n        <View className="doc-body-content-tip">\u7981\u7528\u72b6\u6001</View>\n        <View className="button-box">\n          <Button className="button-box-item" disabled border type="primary">\n            \u4e3b\u8981\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" disabled border type="info">\n            \u4fe1\u606f\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" disabled border type="warning">\n            \u8b66\u544a\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" disabled type="danger">\n            \u5371\u9669\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" disabled type="default">\n            \u9ed8\u8ba4\u6309\u94ae\n          </Button>\n        </View>\n\n        <View className="doc-body-content-tip">\u6309\u94ae\u5c3a\u5bf8</View>\n        <View className="button-box">\n          <Button className="button-box-item" full type="primary">\n            \u901a\u680f\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" size="large" type="primary">\n            \u5927\u578b\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" size="normal" type="primary">\n            \u666e\u901a\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" size="small" type="primary">\n            \u5c0f\u578b\u6309\u94ae\n          </Button>\n          <Button className="button-box-item" size="mini" type="primary">\n            \u8ff7\u4f60\u6309\u94ae\n          </Button>\n        </View>\n        <View className="doc-body-content-tip">\u5e26loading</View>\n        <View className="button-box">\n          <Button className="button-box-item" type="primary" loading={true}>\n            loading\n          </Button>\n        </View>\n      </View>\n    </View>\n  );\n};\n\nexport default memo(ButtonPage);',m="\n.button-box {\n  &-item {\n    margin-right: 38px;\n    margin-bottom: 38px;\n    cursor: pointer;\n\n    &:nth-child(3) {\n      margin-right: 0;\n    }\n  }\n}",b="import React, { useCallback } from 'react';\nimport { AtIcon } from 'taro-ui';\nimport { Image, View } from '@tarojs/components';\n\nimport './index.less';\n\nexport interface APIListItem {\n  id: string;\n  title: string;\n  content: string;\n  icon: string;\n}\n\nexport type APIList = APIListItem[];\n\nexport const List: APIList = [\n  {\n    id: 'Basic',\n    title: '\u57fa\u7840Hooks',\n    content: '\u5305\u542b\u4e8b\u4ef6\u3001\u8c03\u8bd5\u7b49',\n    icon: 'basic',\n  },\n  {\n    id: 'Layout',\n    title: '\u5e03\u5c40Hooks',\n    content: '\u5305\u542btab\u3001\u80cc\u666f\u7b49',\n    icon: 'layout',\n  },\n  {\n    id: 'Feedback',\n    title: '\u64cd\u4f5c\u53cd\u9988Hooks',\n    content: '\u5305\u542bToast, Modal\u7b49',\n    icon: 'feedback',\n  },\n  {\n    id: 'Network',\n    title: '\u7f51\u7edcHooks',\n    content: '\u5305\u542b\u8bf7\u6c42\u3001\u4e0b\u8f7d\u7b49',\n    icon: 'network',\n  },\n  {\n    id: 'Media',\n    title: '\u5a92\u4f53Hooks',\n    content: '\u5305\u542b\u56fe\u7247\u3001\u97f3\u9891\u7b49',\n    icon: 'media',\n  },\n  {\n    id: 'Device',\n    title: '\u8bbe\u5907Hooks',\n    content: '\u5305\u542b\u5730\u7406\u4f4d\u7f6e\u3001\u7535\u91cf\u7b49',\n    icon: 'device',\n  },\n  {\n    id: 'Wechat',\n    title: '\u5c0f\u7a0b\u5e8fHooks',\n    content: '\u5305\u542b\u7ba1\u7406\u5668\u3001API\u7b49',\n    icon: 'wechat',\n  },\n  {\n    id: 'Environment',\n    title: '\u73af\u5883Hooks',\n    content: '\u5305\u542b\u73af\u5883\u5224\u65ad\u7b49',\n    icon: 'environment',\n  },\n];\nconst logo = require('../../../../../../public/image/logo.png');\n\nconst Index = () => {\n  return (\n    <View className=\"page page-index\">\n      <View className=\"logo\">\n        <Image className=\"img\" src={logo} />\n      </View>\n      <View className=\"module-list\">\n        {List.map((item, index) => (\n          <View className=\"module-list__item\" key={index} data-id={item.id} data-name={item.title}>\n            <AtIcon prefixClass=\"iconfont\" value={item.icon} className=\"module-list__icon\" />\n            <View className=\"module-list__info\">\n              <View className=\"title\">{item.title}</View>\n              <View className=\"content\">{item.content}</View>\n            </View>\n            <View className=\"module-list__arrow\">\n              <AtIcon value=\"chevron-right\" />\n            </View>\n          </View>\n        ))}\n      </View>\n    </View>\n  );\n};\n\nexport default Index;",f="@import '../../../app.less';\n@import '../../../assets/style/icon.less';\n\n.page-index {\n  box-sizing: border-box;\n  min-height: 100vh;\n  padding-top: 60px;\n  padding-bottom: 100px;\n\n  .logo {\n    margin: 0 auto;\n    margin-top: 60px;\n    font-size: 0;\n    text-align: center;\n\n    .img {\n      width: 270px;\n      height: 270px;\n    }\n  }\n\n  .page-title {\n    margin-top: 24px;\n    color: #333;\n    font-size: 36px;\n    text-align: center;\n  }\n\n  .module-list {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 72px;\n\n    &__item {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      box-sizing: border-box;\n      width: 90%;\n      height: 144px;\n      margin-bottom: 40px;\n      padding: 0 30px;\n      background: #fff;\n      border-radius: 10px;\n      box-shadow: 0 8px 40px 0 rgba(0, 0, 0, 0.04);\n\n      &:last-child {\n        margin-bottom: 0;\n      }\n    }\n\n    &__icon {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 70px;\n      height: 70px;\n      color: #78a4fa;\n      text-align: center;\n      border: 5px solid rgba(120, 164, 250, 0.16);\n      border-radius: 50%;\n\n      .img {\n        width: 30px;\n        height: 30px;\n      }\n    }\n\n    &__info {\n      flex: 1;\n      margin-left: 24px;\n      text-align: left;\n\n      .title {\n        color: #6a6a77;\n        font-weight: bold;\n        font-size: 28px;\n      }\n\n      .content {\n        color: #88889c;\n        font-size: 22px;\n      }\n    }\n\n    &__arrow {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 62px;\n      height: 62px;\n      color: #fff;\n      text-align: center;\n      background: #78a4fa;\n      border-radius: 50%;\n      box-shadow: 4px 10px 30px 0 rgba(120, 164, 250, 0.3);\n    }\n  }\n}\n\n.page-body {\n  padding: 40px;\n}\n\n.component-group {\n  font-size: 32px;\n}\n\n.group-item {\n  margin: 20px 0;\n  padding: 0 30px;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 4px;\n\n  &:first-child {\n    margin-top: 0;\n  }\n}\n\n.group-info {\n  display: flex;\n  align-items: center;\n  padding: 30px 0;\n  transition: opacity 0.3s;\n\n  &-title {\n    opacity: 0.5;\n  }\n}\n\n.group-list {\n  font-size: 28px;\n\n  .list-component {\n    position: relative;\n    align-items: center;\n    padding: 20px 0;\n\n    &::before {\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      height: 1px;\n      color: #d8d8d8;\n      border-top: 1px solid #d8d8d8;\n      content: ' ';\n    }\n\n    &:first-child::before {\n      display: none;\n    }\n\n    &-info {\n      width: 100%;\n    }\n\n    &-arrow {\n      position: absolute;\n      top: 50%;\n      right: 0;\n      display: inline-block;\n      width: 18px;\n      height: 18px;\n      border-color: #888;\n      border-style: solid;\n      border-width: 2px 2px 0 0;\n      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0) translate(-50%);\n    }\n  }\n}",x={"hooks-useenv":{component:Object(c["c"])({loader:function(){var n=Object(s["a"])(l.a.mark((function n(){return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(1),e.e(13),e.e(2)]).then(e.bind(null,"Beln"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:d}},dependencies:{"taro-ui":{version:"3.0.0-alpha.10"},"odin-hooks":{version:"0.0.1"},react:{version:">=16.9"},"@tarojs/taro":{version:">= 3.x"},"@tarojs/components":{version:">=3"},"@tarojs/react":{version:">=3"},"react-dom":{version:">=16.13.0"}},identifier:"hooks-useenv"}},"ui-button":{component:Object(c["c"])({loader:function(){var n=Object(s["a"])(l.a.mark((function n(){return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(1),e.e(3)]).then(e.bind(null,"S/am"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:u},"index.less":{import:"./index.less",content:m}},dependencies:{"odin-ui":{version:"0.0.1"},react:{version:">=16.9"},"@tarojs/components":{version:">= 3.x"},"@tarojs/taro":{version:">= 3.x"}},componentName:"button",identifier:"ui-button"}},"hooks-index":{component:Object(c["c"])({loader:function(){var n=Object(s["a"])(l.a.mark((function n(){return l.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([e.e(1),e.e(13),e.e(2)]).then(e.bind(null,"PFcN"));case 2:return n.abrupt("return",n.sent.default);case 3:case"end":return n.stop()}}),n)})));function t(){return n.apply(this,arguments)}return t}(),loading:()=>null}),previewerProps:{sources:{_:{tsx:b},"index.less":{import:"./index.less",content:f}},dependencies:{"taro-ui":{version:"3.0.0-alpha.10"},react:{version:">=16.13.0"},"@tarojs/components":{version:">=3"},"@tarojs/react":{version:">=3"},"react-dom":{version:">=16.13.0"}},hidden:"1",identifier:"hooks-index"}}},g=e("Zs1V"),h=e("KcUY"),y=e.n(h);t["default"]=n=>a.a.createElement(y.a,Object(o["a"])({},n,{config:r,demos:x,apis:g}))},RGYn:function(n){n.exports=JSON.parse('{"menus":{"en-US":{"/hooks":[{"title":"\u73af\u5883\u5224\u65ad","path":"/hooks/env","meta":{},"children":[{"path":"/hooks/env/use-env","title":"useEnv","meta":{}}]}],"/odin-ui":[{"title":"\u57fa\u7840\u7ec4\u4ef6","path":"/odin-ui/button","meta":{},"children":[{"path":"/odin-ui/button/button","title":"Button","meta":{}}]}],"*":[{"path":"/","title":"Hello odin!","meta":{}}],"/quick":[{"path":"/quick","title":"\u4ecb\u7ecd","meta":{}},{"path":"/quick/faq","title":"FAQ","meta":{}}]},"zh-CN":{"/zh-CN/odin-ui":[{"title":"\u57fa\u7840\u7ec4\u4ef6","path":"/zh-CN/odin-ui/button","meta":{},"children":[{"path":"/zh-CN/odin-ui/button/button","title":"Button","meta":{}}]}],"/zh-CN/hooks":[{"title":"\u73af\u5883\u5224\u65ad","path":"/zh-CN/hooks/env","meta":{},"children":[{"path":"/zh-CN/hooks/env/use-env","title":"useEnv","meta":{}}]}],"*":[{"path":"/zh-CN","title":"Hello odin!","meta":{}}],"/zh-CN/quick":[{"path":"/zh-CN/quick","title":"\u4ecb\u7ecd","meta":{}},{"path":"/zh-CN/quick/faq","title":"FAQ","meta":{}}]}},"locales":[{"name":"en-US","label":"English"},{"name":"zh-CN","label":"\u4e2d\u6587"}],"navs":{"en-US":[{"path":"/quick","title":"\u6307\u5357","order":1},{"title":"Hooks","path":"/hooks","order":2},{"title":"UI","path":"/odin-ui","order":2},{"title":"GitHub","path":"https://github.com/mooncoo/odin"}],"zh-CN":[{"path":"/zh-CN/quick","title":"\u6307\u5357","order":1},{"title":"\u7ec4\u4ef6","path":"/zh-CN/odin-ui","order":1},{"title":"Hooks","path":"/zh-CN/hooks","order":2},{"title":"GitHub","path":"https://github.com/mooncoo/odin"}]},"title":"\u5965\u4e01","logo":"/odin/image/logo.png","mode":"site","repository":{"url":"https://github.com/mooncoo/odin-hooks","branch":"master","platform":"github"},"theme":{"hd":{"rules":[{"maxWidth":375,"mode":"vw","options":[100,750]},{"minWidth":376,"maxWidth":750,"mode":"vw","options":[100,1500]}]}}}')},Zs1V:function(n){n.exports=JSON.parse('{"button":{"default":[{"identifier":"type","description":"\u6309\u94ae\u7c7b\u578b\\n@defalt default","type":"string"},{"identifier":"fill","description":"\u662f\u5426\u586b\u5145\u80cc\u666f","type":"boolean","default":"false"},{"identifier":"full","description":"\u81ea\u52a8\u5145\u6ee1\u7236\u5bb9\u5668","type":"boolean","default":"false"},{"identifier":"size","description":"\u6309\u94ae\u5c3a\u5bf8\u5927\u5c0f","type":"\\"large\\" | \\"normal\\" | \\"small\\" | \\"mini\\""},{"identifier":"round","description":"\u662f\u5426\u5706\u89d2","type":"string","default":"normal"},{"identifier":"color","description":"\u6309\u94ae\u989c\u8272","type":"string"},{"identifier":"fillColor","description":"\u6309\u94ae\u586b\u5145\u989c\u8272","type":"string"},{"identifier":"border","description":"\u662f\u5426\u4f7f\u7528\u8fb9\u6846","type":"boolean"},{"identifier":"borderColor","description":"\u8fb9\u6846\u989c\u8272","type":"string"},{"identifier":"radius","description":"\u6309\u94ae\u81ea\u5b9a\u4e49\u5706\u89d2","type":"number"},{"identifier":"customStyle","description":"\u81ea\u5b9a\u4e49\u6837\u5f0f\u5bf9\u8c61","type":"object"},{"identifier":"disabled","description":"\u8bbe\u7f6e\u6309\u94ae\u4e3a\u7981\u7528\u6001\uff08\u4e0d\u53ef\u70b9\u51fb\uff09","type":"boolean"},{"identifier":"onClick","description":"\u70b9\u51fb\u6309\u94ae\u65f6\u89e6\u53d1","type":"Function"},{"identifier":"loading","description":"\u8bbe\u7f6e\u6309\u94ae\u7684\u8f7d\u5165\u72b6\u6001","type":"boolean"},{"identifier":"formType","description":"\u7528\u4e8e `<form/>` \u7ec4\u4ef6\uff0c\u70b9\u51fb\u5206\u522b\u4f1a\u89e6\u53d1 `<form/>` \u7ec4\u4ef6\u7684 submit/reset \u4e8b\u4ef6\\n@supported weapp, alipay","type":"keyof formType"},{"identifier":"openType","description":"\u5fae\u4fe1\u5f00\u653e\u80fd\u529b\\n@supported weapp, alipay, qq","type":"openType"},{"identifier":"lang","description":"\u6307\u5b9a\u8fd4\u56de\u7528\u6237\u4fe1\u606f\u7684\u8bed\u8a00\uff0czh_CN \u7b80\u4f53\u4e2d\u6587\uff0czh_TW \u7e41\u4f53\u4e2d\u6587\uff0cen \u82f1\u6587\u3002\\n\\n\u751f\u6548\u65f6\u673a: `open-type=\\"getUserInfo\\"`\\n@supported weapp","type":"keyof lang"},{"identifier":"sessionFrom","description":"\u4f1a\u8bdd\u6765\u6e90\\n\\n\u751f\u6548\u65f6\u673a\uff1a`open-type=\\"contact\\"`\\n@supported weapp","type":"string"},{"identifier":"sendMessageTitle","description":"\u4f1a\u8bdd\u5185\u6d88\u606f\u5361\u7247\u6807\u9898\\n\\n\u751f\u6548\u65f6\u673a\uff1a`open-type=\\"contact\\"`\\n@supported weapp","type":"string","default":"\u5f53\u524d\u6807\u9898"},{"identifier":"sendMessagePath","description":"\u4f1a\u8bdd\u5185\u6d88\u606f\u5361\u7247\u70b9\u51fb\u8df3\u8f6c\u5c0f\u7a0b\u5e8f\u8def\u5f84\\n\\n\u751f\u6548\u65f6\u673a\uff1a`open-type=\\"contact\\"`\\n@supported weapp","type":"string","default":"\u5f53\u524d\u6807\u9898"},{"identifier":"sendMessageImg","description":"\u4f1a\u8bdd\u5185\u6d88\u606f\u5361\u7247\u56fe\u7247\\n\\n\u751f\u6548\u65f6\u673a\uff1a`open-type=\\"contact\\"`\\n@supported weapp","type":"string","default":"\u622a\u56fe"},{"identifier":"showMessageCard","description":"\u663e\u793a\u4f1a\u8bdd\u5185\u6d88\u606f\u5361\u7247\\n\\n\u751f\u6548\u65f6\u673a\uff1a`open-type=\\"contact\\"`","type":"boolean","default":"false"},{"identifier":"appParameter","description":"\u6253\u5f00 APP \u65f6\uff0c\u5411 APP \u4f20\u9012\u7684\u53c2\u6570\\n\\n\u751f\u6548\u65f6\u673a\uff1a`open-type=\\"launchApp\\"`\\n@supported weapp, qq","type":"string"},{"identifier":"onContact","description":"\u5ba2\u670d\u6d88\u606f\u56de\u8c03\\n\\n\u751f\u6548\u65f6\u673a\uff1a`open-type=\\"contact\\"`\\n@supported weapp","type":"CommonEventFunction<onContactEventDetail>"},{"identifier":"onGetUserInfo","description":"\u7528\u6237\u70b9\u51fb\u8be5\u6309\u94ae\u65f6\uff0c\u4f1a\u8fd4\u56de\u83b7\u53d6\u5230\u7684\u7528\u6237\u4fe1\u606f\uff0c\u56de\u8c03\u7684detail\u6570\u636e\u4e0e Taro.getUserInfo \u8fd4\u56de\u7684\u4e00\u81f4\\n\\n\u751f\u6548\u65f6\u673a: `open-type=\\"getUserInfo\\"`\\n@supported weapp","type":"CommonEventFunction<onGetUserInfoEventDetail>"},{"identifier":"onGetPhoneNumber","description":"\u83b7\u53d6\u7528\u6237\u624b\u673a\u53f7\u56de\u8c03\\n\\n\u751f\u6548\u65f6\u673a\uff1a`open-type=\\"getphonenumber\\"`\\n@supported weapp","type":"CommonEventFunction<onGetPhoneNumberEventDetail>"},{"identifier":"onOpenSetting","description":"\u5728\u6253\u5f00\u6388\u6743\u8bbe\u7f6e\u9875\u540e\u56de\u8c03\\n\\n\u751f\u6548\u65f6\u673a\uff1a`open-type=\\"openSetting\\"`\\n@supported weapp","type":"CommonEventFunction<onOpenSettingEventDetail>"},{"identifier":"onError","description":"\u5f53\u4f7f\u7528\u5f00\u653e\u80fd\u529b\u65f6\uff0c\u53d1\u751f\u9519\u8bef\u7684\u56de\u8c03\\n\\n\u751f\u6548\u65f6\u673a\uff1a`open-type=\\"launchApp\\"`\\n@supported weapp","type":"CommonEventFunction<any>"},{"identifier":"className","type":"string"},{"identifier":"customizeStyle","type":"string"}]}}')}}]);