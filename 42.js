(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[42],{WQr7:function(t,e,n){"use strict";n.r(e),n.d(e,"taro_input_core",(function(){return u}));var i=n("ZF8R"),o="taro-input-core{display:block}input{display:block;height:1.4rem;text-align:inherit;text-overflow:clip;overflow:hidden;white-space:nowrap}";function s(t,e,n){if("search"===e&&(t="search"),n&&(t="password"),"undefined"===typeof t)return"text";if(!t)throw new Error("unexpected type");return"digit"===t&&(t="number"),t}function a(t){return null!==t&&void 0!==t?t:""}var u=function(){function t(t){var e=this;Object(i["g"])(this,t),this.onInput=Object(i["c"])(this,"input",7),this.onPaste=Object(i["c"])(this,"paste",7),this.onFocus=Object(i["c"])(this,"focus",7),this.onBlur=Object(i["c"])(this,"blur",7),this.onConfirm=Object(i["c"])(this,"confirm",7),this.onChange=Object(i["c"])(this,"change",7),this.onKeyDown=Object(i["c"])(this,"keydown",7),this.isOnComposition=!1,this.isOnPaste=!1,this.onInputExcuted=!1,this.password=!1,this.disabled=!1,this.maxlength=140,this.autoFocus=!1,this.confirmType="done",this.nativeProps={},this.handleInput=function(t){t.stopPropagation();var n=e,i=n.type,o=n.maxlength,a=n.confirmType,u=n.password;if(!e.isOnComposition&&!e.onInputExcuted){var r=t.target.value,h=s(i,a,u);e.onInputExcuted=!0,"number"===h&&r&&o<=r.length&&(r=r.substring(0,o),t.target.value=r),e._value=r,e.onInput.emit({value:r,cursor:r.length})}},this.handlePaste=function(t){e.isOnPaste=!0,e.onPaste.emit({value:t.target.value})},this.handleFocus=function(t){e.onInputExcuted=!1,e.onFocus.emit({value:t.target.value})},this.handleBlur=function(t){e.onBlur.emit({value:t.target.value})},this.handleChange=function(t){t.stopPropagation(),e.onChange.emit({value:t.target.value}),e.isOnPaste&&(e.isOnPaste=!1,e.onInput.emit({value:t.target.value}))},this.handleKeyDown=function(t){var n=t.target.value,i=t.keyCode||t.code;e.onInputExcuted=!1,t.stopPropagation(),e.onKeyDown.emit({value:n,cursor:n.length,keyCode:i}),13===i&&e.onConfirm.emit({value:n})},this.handleComposition=function(t){t.target instanceof HTMLInputElement&&("compositionend"===t.type?(e.isOnComposition=!1,e.onInput.emit({value:t.target.value})):e.isOnComposition=!0)}}return t.prototype.watchHandler=function(t,e){t!==e&&(this._value=t)},t.prototype.watchFocus=function(t,e){var n;!e&&t&&(null===(n=this.inputRef)||void 0===n||n.focus())},t.prototype.componentWillLoad=function(){this._value=this.value},t.prototype.componentDidLoad=function(){var t,e,n,i=this;"file"===this.type?(this.fileListener=function(){i.onInput.emit()},null===(t=this.inputRef)||void 0===t||t.addEventListener("change",this.fileListener)):(null===(e=this.inputRef)||void 0===e||e.addEventListener("compositionstart",this.handleComposition),null===(n=this.inputRef)||void 0===n||n.addEventListener("compositionend",this.handleComposition)),Object.defineProperty(this.el,"value",{get:function(){var t;return null===(t=i.inputRef)||void 0===t?void 0:t.value},set:function(t){i._value=t},configurable:!0})},t.prototype.disconnectedCallback=function(){var t;"file"===this.type&&(null===(t=this.inputRef)||void 0===t||t.removeEventListener("change",this.fileListener))},t.prototype.render=function(){var t=this,e=this,n=e._value,o=e.type,u=e.password,r=e.placeholder,h=e.autoFocus,l=e.disabled,c=e.maxlength,p=e.confirmType,d=e.name,f=e.nativeProps;return Object(i["e"])("input",Object.assign({ref:function(e){t.inputRef=e},class:"weui-input",value:a(n),type:s(o,p,u),placeholder:r,autoFocus:h,disabled:l,maxlength:c,name:d,onInput:this.handleInput,onFocus:this.handleFocus,onBlur:this.handleBlur,onChange:this.handleChange,onKeyDown:this.handleKeyDown,onPaste:this.handlePaste,onCompositionStart:this.handleComposition,onCompositionEnd:this.handleComposition},f))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(i["d"])(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{value:["watchHandler"],autoFocus:["watchFocus"]}},enumerable:!1,configurable:!0}),t}();u.style=o}}]);