(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9],{"+pnj":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("dEAq"),i={"zh-CN":{name:"\u5c5e\u6027\u540d",description:"\u63cf\u8ff0",type:"\u7c7b\u578b",default:"\u9ed8\u8ba4\u503c",required:"(\u5fc5\u9009)"},"en-US":{name:"Name",description:"Description",type:"Type",default:"Default",required:"(required)"}};t["a"]=function(e){var t=e.identifier,n=e["export"],c=Object(l["useApiData"])(t),o=Object(a["useContext"])(l["context"]),u=o.locale,d=/^zh|cn$/i.test(u)?i["zh-CN"]:i["en-US"];return r.a.createElement(r.a.Fragment,null,c&&r.a.createElement("table",{style:{marginTop:24}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,d.name),r.a.createElement("th",null,d.description),r.a.createElement("th",null,d.type),r.a.createElement("th",null,d["default"]))),r.a.createElement("tbody",null,c[n].map((function(e){return r.a.createElement("tr",{key:e.identifier},r.a.createElement("td",null,e.identifier),r.a.createElement("td",null,e.description||"--"),r.a.createElement("td",null,r.a.createElement("code",null,e.type)),r.a.createElement("td",null,r.a.createElement("code",null,e["default"]||e.required&&d.required||"--")))})))))}},MZF8:function(e,t,n){"use strict";var a=n("ogwx");n.d(t,"a",(function(){return a["b"]}));n("VCU9")},UWfb:function(e,t,n){},WpQk:function(e,t,n){},"dMo/":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("hKI/"),i=n.n(l);n("WpQk");function c(e,t){return s(e)||m(e,t)||u(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],i=!0,c=!1;try{for(n=n.call(e);!(i=(a=n.next()).done);i=!0)if(l.push(a.value),t&&l.length===t)break}catch(o){c=!0,r=o}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw r}}return l}}function s(e){if(Array.isArray(e))return e}var f=function(e){var t=e.children,n=Object(a["useRef"])(),l=Object(a["useState"])(!1),o=c(l,2),u=o[0],d=o[1],m=Object(a["useState"])(!1),s=c(m,2),f=s[0],E=s[1];return Object(a["useEffect"])((function(){var e=n.current,t=i()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),r.a.createElement("div",{className:"__dumi-default-table"},r.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":u||void 0,"data-right-folded":f||void 0},r.a.createElement("table",null,t)))};t["a"]=f},ekZX:function(e,t,n){"use strict";n.r(t);var a=n("0Owb");function r(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}function l(e,t){if(null==e)return{};var n,a,l=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=n("q1tI"),c=n.n(i),o=n("tJVT"),u=n("dEAq"),d=n("Zxc8"),m=n("9/5/"),s=n.n(m),f=(n("UWfb"),"dumi:scroll-into-demo"),E=e=>{var t=Object(i["useRef"])(),n=Object(i["useContext"])(u["context"]),r=n.meta,l=Object(i["useState"])(null),m=Object(o["a"])(l,2),E=m[0],v=m[1],h=Object(i["useState"])(!1),p=Object(o["a"])(h,2),b=p[0],y=p[1],w=!1!==r.mobile&&!b,g=Object(i["useCallback"])((()=>{window.postMessage({type:f,value:JSON.stringify({identifier:e.identifier,demoUrl:e.demoUrl,simulator:e.simulator})},"*"),y(!0)}),[e]);return Object(i["useEffect"])((()=>{var n;if(r.title){var a=document.querySelector(".__dumi-default-mobile-previewer")===t.current,l=s()((()=>{var e,n,r,l,i,c=64,o=document.documentElement.scrollTop,u=(null===(e=t.current)||void 0===e?void 0:e.getBoundingClientRect().top)+o,d=(null===(n=t.current)||void 0===n||null===(r=n.previousElementSibling)||void 0===r?void 0:r.className)===(null===(l=t.current)||void 0===l?void 0:l.className)?c:c+128;a&&o<u||o+d>u&&o+c<u+(null===t||void 0===t||null===(i=t.current)||void 0===i?void 0:i.offsetHeight)?g():y(!1)}),50);return(null===(n=window)||void 0===n?void 0:n.outerWidth)>960&&!1!==r.mobile?(l(),window.addEventListener("scroll",l),v(Object.assign({},e,{iframe:null,children:null,defaultShowCode:!0,hideActions:["EXTERNAL"].concat(e.hideActions)}))):v(e),()=>window.removeEventListener("scroll",l)}}),[e,r]),Object(i["useEffect"])((()=>{var t=t=>{t.data.type===f&&b&&JSON.parse(t.data.value).identifier!==e.identifier&&y(!1)};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)})),c.a.createElement("div",{className:!1!==r.mobile?"__dumi-default-mobile-previewer":null,onClick:()=>{w&&g()},"data-inactive":w||void 0,ref:t},E&&c.a.createElement(d["a"],Object(a["a"])({className:b?"__dumi-default-previewer-target":null},E)))};n("ztHt"),t["default"]=e=>{var t=e.hidden,n=l(e,["hidden"]);return c.a.createElement(E,Object(a["a"])({className:t?"__dumi_taro-hook-hidden":""},n))}},yReA:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("dEAq"),i=n("ekZX"),c=n("+pnj"),o=n("H1Ra"),u=n("dMo/"),d=r.a.memo((e=>{var t=e.demos,n=t["ui-button"].component;return r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"useenv"},r.a.createElement(l["AnchorLink"],{to:"#useenv","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"useEnv"),r.a.createElement("p",null,"\u83b7\u53d6\u5f53\u524d\u73af\u5883\u503c"),r.a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},r.a.createElement(l["AnchorLink"],{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),r.a.createElement("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u5f53\u524d\u73af\u5883\u503c\u505a\u4e00\u4e9b\u5224\u65ad\u65f6"),r.a.createElement("h2",{id:"api"},r.a.createElement(l["AnchorLink"],{to:"#api","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(o["a"],{code:"const { Button } from 'odin-ui';",lang:"jsx"}),r.a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},r.a.createElement(l["AnchorLink"],{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),r.a.createElement(i["default"],t["ui-button"].previewerProps,r.a.createElement(n,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"api-1"},r.a.createElement(l["AnchorLink"],{to:"#api-1","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"API"),r.a.createElement(c["a"],{identifier:"button",export:"default"}),r.a.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},r.a.createElement(l["AnchorLink"],{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),r.a.createElement(u["a"],null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),r.a.createElement("th",{align:"center"},"H5"),r.a.createElement("th",{align:"center"},"ReactNative"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{align:"center"},"\u2714\ufe0f"),r.a.createElement("td",{align:"center"},"\u2714\ufe0f"),r.a.createElement("td",{align:"center"},"\u2714\ufe0f")))))))}));t["default"]=e=>{var t=r.a.useContext(l["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&l["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(d,{demos:n})}},ztHt:function(e,t,n){}}]);