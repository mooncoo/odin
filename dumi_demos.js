(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{F4QJ:function(e,t,n){"use strict";function r(){var e=i(n("q1tI"));return r=function(){return e},e}function o(){var e=n("dEAq");return o=function(){return e},e}function i(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=function(e){return e.render()},d=function(e,t){var n=[],i=e.match.params.uuid,u=void 0===e.location.query.wrapper,a=t[i];if(a){var d=c(c({},a.previewerProps),{},{hideActions:(a.previewerProps.hideActions||[]).concat(["EXTERNAL"])});void 0!==e.location.query.capture&&(d.motions=(d.motions||[]).slice(),d.motions.unshift("autoplay"),d.motions.every((function(e){return!e.startsWith("capture")}))&&d.motions.push("capture:[id|=root]")),n=u?[r()["default"].createElement(l,{render:function(){return(0,o().useMotions)(d.motions||[],"undefined"!==typeof window?document.documentElement:null),r()["default"].createElement("div",{},r()["default"].createElement(a.component))}})]:[d,r()["default"].createElement(a.component)]}return n};t["default"]=d},MZF8:function(e,t,n){"use strict";var r=n("ogwx");n.d(t,"a",(function(){return r["b"]}));n("VCU9")},PpiC:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function o(e,t){if(null==e)return{};var n,o,i=r(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,"a",(function(){return o}))},UWfb:function(e,t,n){},ekZX:function(e,t,n){"use strict";n.r(t);var r=n("0Owb"),o=n("PpiC"),i=n("q1tI"),u=n.n(i),c=n("tJVT"),a=n("dEAq"),l=n("Zxc8"),d=n("9/5/"),s=n.n(d),f=(n("UWfb"),"dumi:scroll-into-demo"),m=e=>{var t=Object(i["useRef"])(),n=Object(i["useContext"])(a["context"]),o=n.meta,d=Object(i["useState"])(null),m=Object(c["a"])(d,2),v=m[0],p=m[1],b=Object(i["useState"])(!1),O=Object(c["a"])(b,2),w=O[0],j=O[1],y=!1!==o.mobile&&!w,E=Object(i["useCallback"])((()=>{window.postMessage({type:f,value:JSON.stringify({identifier:e.identifier,demoUrl:e.demoUrl,simulator:e.simulator})},"*"),j(!0)}),[e]);return Object(i["useEffect"])((()=>{var n;if(o.title){var r=document.querySelector(".__dumi-default-mobile-previewer")===t.current,i=s()((()=>{var e,n,o,i,u,c=64,a=document.documentElement.scrollTop,l=(null===(e=t.current)||void 0===e?void 0:e.getBoundingClientRect().top)+a,d=(null===(n=t.current)||void 0===n||null===(o=n.previousElementSibling)||void 0===o?void 0:o.className)===(null===(i=t.current)||void 0===i?void 0:i.className)?c:c+128;r&&a<l||a+d>l&&a+c<l+(null===t||void 0===t||null===(u=t.current)||void 0===u?void 0:u.offsetHeight)?E():j(!1)}),50);return(null===(n=window)||void 0===n?void 0:n.outerWidth)>960&&!1!==o.mobile?(i(),window.addEventListener("scroll",i),p(Object.assign({},e,{iframe:null,children:null,defaultShowCode:!0,hideActions:["EXTERNAL"].concat(e.hideActions)}))):p(e),()=>window.removeEventListener("scroll",i)}}),[e,o]),Object(i["useEffect"])((()=>{var t=t=>{t.data.type===f&&w&&JSON.parse(t.data.value).identifier!==e.identifier&&j(!1)};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)})),u.a.createElement("div",{className:!1!==o.mobile?"__dumi-default-mobile-previewer":null,onClick:()=>{y&&E()},"data-inactive":y||void 0,ref:t},v&&u.a.createElement(l["a"],Object(r["a"])({className:w?"__dumi-default-previewer-target":null},v)))};n("ztHt"),t["default"]=e=>{var t=e.hidden,n=Object(o["a"])(e,["hidden"]);return u.a.createElement(m,Object(r["a"])({className:t?"__dumi_taro-hook-hidden":""},n))}},ztHt:function(e,t,n){}}]);