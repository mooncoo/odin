(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[19],{Dbv6:function(e,t,r){"use strict";r.r(t),r.d(t,"taro_pull_to_refresh",(function(){return p}));var n=r("ZF8R"),i=r("pFqT"),o=r.n(i),a=r("kWen"),s=".rmc-pull-to-refresh-content{-webkit-transform-origin:left top 0px;transform-origin:left top 0px}.rmc-pull-to-refresh-content-wrapper{overflow:hidden}.rmc-pull-to-refresh-transition{-webkit-transition:-webkit-transform 0.3s;transition:-webkit-transform 0.3s;transition:transform 0.3s;transition:transform 0.3s, -webkit-transform 0.3s}@-webkit-keyframes rmc-pull-to-refresh-indicator{50%{opacity:0.2}100%{opacity:1}}@keyframes rmc-pull-to-refresh-indicator{50%{opacity:0.2}100%{opacity:1}}.rmc-pull-to-refresh-indicator{text-align:center;height:30px;line-height:10px}.rmc-pull-to-refresh-indicator>div{background-color:grey;width:6px;height:6px;border-radius:100%;margin:3px;-webkit-animation-fill-mode:both;animation-fill-mode:both;display:inline-block;-webkit-animation:rmc-pull-to-refresh-indicator 0.5s 0s infinite linear;animation:rmc-pull-to-refresh-indicator 0.5s 0s infinite linear}.rmc-pull-to-refresh-indicator>div:nth-child(0){-webkit-animation-delay:-0.1s !important;animation-delay:-0.1s !important}.rmc-pull-to-refresh-indicator>div:nth-child(1){-webkit-animation-delay:-0.2s !important;animation-delay:-0.2s !important}.rmc-pull-to-refresh-indicator>div:nth-child(2){-webkit-animation-delay:-0.3s !important;animation-delay:-0.3s !important}.rmc-pull-to-refresh-down .rmc-pull-to-refresh-indicator{margin-top:-25px}";function c(e,t){e.transform=t,e.webkitTransform=t,e.MozTransform=t}var l="undefined"!==typeof navigator&&/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),u={activate:"release",deactivate:"pull",release:"loading",finish:"finish"},f=!1;try{var h=Object.defineProperty({},"passive",{get:function(){f=!0}});window.addEventListener("cancel",(function(){return{}}),h)}catch(m){}var d=!!f&&{passive:!1},p=function(){function e(e){var t=this;Object(n["g"])(this,e),this.onRefresh=Object(n["c"])(this,"refresh",7),this.prefixCls="rmc-pull-to-refresh",this.distanceToRefresh=50,this.damping=100,this.indicator=u,this.currSt="deactivate",this.dragOnEdge=!1,this._ScreenY=0,this._startScreenY=0,this._lastScreenY=0,this._isMounted=!1,this.triggerPullDownRefresh=function(e){!t.dragOnEdge&&t._isMounted&&(e?(t._lastScreenY=t.distanceToRefresh+1,t.currSt="release",t.setContentStyle(t._lastScreenY)):(t.currSt="finish",t.reset()))},this.init=function(){var e=t.scrollContainer;t._to={touchstart:t.onTouchStart.bind(t,e),touchmove:t.onTouchMove.bind(t,e),touchend:t.onTouchEnd.bind(t,e),touchcancel:t.onTouchEnd.bind(t,e)},Object.keys(t._to).forEach((function(r){e.addEventListener(r,t._to[r],d)}))},this.destroy=function(){var e=t.scrollContainer;Object.keys(t._to).forEach((function(r){e.removeEventListener(r,t._to[r])}))},this.onTouchStart=function(e,r){t._ScreenY=t._startScreenY=r.touches[0].screenY,t._lastScreenY=t._lastScreenY||0},this.isEdge=function(e){var r=t.scrollContainer;if(r&&r===document.body){var n=document.scrollingElement?document.scrollingElement:document.body;return n.scrollTop<=0}return e.scrollTop<=0},this.damp=function(e){if(Math.abs(t._lastScreenY)>t.damping)return 0;var r=Math.abs(t._ScreenY-t._startScreenY)/window.screen.height;return e*=.6*(1-r),e},this.onTouchMove=function(e,r){var n=r.touches[0].screenY;if(!(t._startScreenY>n)&&t.isEdge(e)){t.dragOnEdge||(t._ScreenY=t._startScreenY=r.touches[0].screenY,t.dragOnEdge=!0),r.cancelable&&r.preventDefault();var i=Math.round(n-t._ScreenY);t._ScreenY=n,t._lastScreenY+=t.damp(i),t.setContentStyle(t._lastScreenY),Math.abs(t._lastScreenY)<t.distanceToRefresh?"deactivate"!==t.currSt&&(t.currSt="deactivate"):"deactivate"===t.currSt&&(t.currSt="activate"),l&&r.changedTouches[0].clientY<0&&t.onTouchEnd()}},this.onTouchEnd=function(){t.dragOnEdge&&(t.dragOnEdge=!1),"activate"===t.currSt?(t.currSt="release",t.onRefresh.emit(t),t._lastScreenY=t.distanceToRefresh+1,t.setContentStyle(t._lastScreenY)):"release"===t.currSt?(t._lastScreenY=t.distanceToRefresh+1,t.setContentStyle(t._lastScreenY)):t.reset()},this.reset=function(){t._lastScreenY=0,t.setContentStyle(0)},this.setContentStyle=function(e){t.contentRef&&c(t.contentRef.style,e?"translate3d(0px,"+e+"px,0)":"")}}return Object.defineProperty(e.prototype,"scrollContainer",{get:function(){return document.querySelector(".taro-tabbar__panel")||document.body},enumerable:!1,configurable:!0}),e.prototype.statusChange=function(){if("release"===this.currSt){var e=this.el.closest(".taro_page");e&&e.__page&&e.__page.onPullDownRefresh()}},e.prototype.disconnectedCallback=function(){this.destroy()},e.prototype.componentDidLoad=function(){var e=this;this.init(),this._isMounted=!0,o.a.eventCenter.on("__taroStartPullDownRefresh",(function(t){var r=t.successHandler,n=t.errorHandler;try{e.triggerPullDownRefresh(!0),r({errMsg:"startPullDownRefresh: ok"})}catch(e){n({errMsg:"startPullDownRefresh: fail"})}})),o.a.eventCenter.on("__taroStopPullDownRefresh",(function(t){var r=t.successHandler,n=t.errorHandler;try{e.triggerPullDownRefresh(!1),r({errMsg:"stopPullDownRefresh: ok"})}catch(e){n({errMsg:"stopPullDownRefresh: fail"})}}))},e.prototype.render=function(){var e=this,t=function(t){var r=e,i=r.currSt,o=r.dragOnEdge,s=r.prefixCls,c=Object(a["a"])(t,!o&&s+"-transition"),l="activate"===i||"release"===i;return Object(n["e"])("div",{class:s+"-content-wrapper"},Object(n["e"])("div",{class:c,ref:function(t){e.contentRef=t}},l&&Object(n["e"])("div",{class:s+"-indicator"},Object(n["e"])("div",null),Object(n["e"])("div",null),Object(n["e"])("div",null)),Object(n["e"])("slot",null)))};return this.scrollContainer?t(this.prefixCls+"-content "+this.prefixCls+"-down"):Object(n["e"])(n["a"],{class:Object(a["a"])(this.prefixCls,this.prefixCls+"-down")},t(this.prefixCls+"-content"))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(n["d"])(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{currSt:["statusChange"]}},enumerable:!1,configurable:!0}),e}();p.style=s},kWen:function(e,t,r){"use strict";function n(e,t,r){return r={path:t,exports:{},require:function(e,t){return i()}},e(r,r.exports),r.exports}function i(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}r.d(t,"a",(function(){return o}));var o=n((function(e){(function(){var t={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var i=arguments[n];if(i){var o=typeof i;if("string"===o||"number"===o)e.push(i);else if(Array.isArray(i)){if(i.length){var a=r.apply(null,i);a&&e.push(a)}}else if("object"===o)if(i.toString===Object.prototype.toString)for(var s in i)t.call(i,s)&&i[s]&&e.push(s);else e.push(i.toString())}}return e.join(" ")}e.exports?(r["default"]=r,e.exports=r):window.classNames=r})()}))}}]);