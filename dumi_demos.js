(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{F4QJ:function(e,t,n){"use strict";function r(){var e=i(n("q1tI"));return r=function(){return e},e}function o(){var e=n("dEAq");return o=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=function(e){return e.render()},d=function(e,t){var n=[],i=e.match.params.uuid,u=void 0===e.location.query.wrapper,a=t[i];if(a){var d=c(c({},a.previewerProps),{},{hideActions:(a.previewerProps.hideActions||[]).concat(["EXTERNAL"])});void 0!==e.location.query.capture&&(d.motions=(d.motions||[]).slice(),d.motions.unshift("autoplay"),d.motions.every((function(e){return!e.startsWith("capture")}))&&d.motions.push("capture:[id|=root]")),n=u?[r()["default"].createElement(l,{render:function(){return(0,o().useMotions)(d.motions||[],"undefined"!==typeof window?document.documentElement:null),r()["default"].createElement("div",{},r()["default"].createElement(a.component))}})]:[d,r()["default"].createElement(a.component)]}return n};t["default"]=d},MZF8:function(e,t,n){"use strict";var r=n("ogwx");n.d(t,"a",(function(){return r["b"]}));n("VCU9")},UWfb:function(e,t,n){},ekZX:function(e,t,n){"use strict";n.r(t);var r=n("0Owb");function o(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function i(e,t){if(null==e)return{};var n,r,i=o(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=n("q1tI"),c=n.n(u),a=n("tJVT"),l=n("dEAq"),d=n("Zxc8"),s=n("9/5/"),f=n.n(s),m=(n("UWfb"),"dumi:scroll-into-demo"),v=e=>{var t=Object(u["useRef"])(),n=Object(u["useContext"])(l["context"]),o=n.meta,i=Object(u["useState"])(null),s=Object(a["a"])(i,2),v=s[0],p=s[1],b=Object(u["useState"])(!1),O=Object(a["a"])(b,2),w=O[0],j=O[1],y=!1!==o.mobile&&!w,E=Object(u["useCallback"])((()=>{window.postMessage({type:m,value:JSON.stringify({identifier:e.identifier,demoUrl:e.demoUrl,simulator:e.simulator})},"*"),j(!0)}),[e]);return Object(u["useEffect"])((()=>{var n;if(o.title){var r=document.querySelector(".__dumi-default-mobile-previewer")===t.current,i=f()((()=>{var e,n,o,i,u,c=64,a=document.documentElement.scrollTop,l=(null===(e=t.current)||void 0===e?void 0:e.getBoundingClientRect().top)+a,d=(null===(n=t.current)||void 0===n||null===(o=n.previousElementSibling)||void 0===o?void 0:o.className)===(null===(i=t.current)||void 0===i?void 0:i.className)?c:c+128;r&&a<l||a+d>l&&a+c<l+(null===t||void 0===t||null===(u=t.current)||void 0===u?void 0:u.offsetHeight)?E():j(!1)}),50);return(null===(n=window)||void 0===n?void 0:n.outerWidth)>960&&!1!==o.mobile?(i(),window.addEventListener("scroll",i),p(Object.assign({},e,{iframe:null,children:null,defaultShowCode:!0,hideActions:["EXTERNAL"].concat(e.hideActions)}))):p(e),()=>window.removeEventListener("scroll",i)}}),[e,o]),Object(u["useEffect"])((()=>{var t=t=>{t.data.type===m&&w&&JSON.parse(t.data.value).identifier!==e.identifier&&j(!1)};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)})),c.a.createElement("div",{className:!1!==o.mobile?"__dumi-default-mobile-previewer":null,onClick:()=>{y&&E()},"data-inactive":y||void 0,ref:t},v&&c.a.createElement(d["a"],Object(r["a"])({className:w?"__dumi-default-previewer-target":null},v)))};n("ztHt"),t["default"]=e=>{var t=e.hidden,n=i(e,["hidden"]);return c.a.createElement(v,Object(r["a"])({className:t?"__dumi_taro-hook-hidden":""},n))}},ztHt:function(e,t,n){}}]);