(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"F+kV":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),r=n.n(i),o=n("dEAq"),a=(n("ekZX"),r.a.memo((e=>{e.demos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"hello-odin"},r.a.createElement(o["AnchorLink"],{to:"#hello-odin","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"Hello odin!")))})));t["default"]=e=>{var t=r.a.useContext(o["context"]),n=t.demos;return r.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&o["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.a.createElement(a,{demos:n})}},MZF8:function(e,t,n){"use strict";var i=n("ogwx");n.d(t,"a",(function(){return i["b"]}));n("VCU9")},PpiC:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}function r(e,t){if(null==e)return{};var n,r,o=i(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},UWfb:function(e,t,n){},ekZX:function(e,t,n){"use strict";n.r(t);var i=n("0Owb"),r=n("PpiC"),o=n("q1tI"),a=n.n(o),l=n("tJVT"),c=n("dEAq"),d=n("Zxc8"),u=n("9/5/"),s=n.n(u),m=(n("UWfb"),"dumi:scroll-into-demo"),v=e=>{var t=Object(o["useRef"])(),n=Object(o["useContext"])(c["context"]),r=n.meta,u=Object(o["useState"])(null),v=Object(l["a"])(u,2),f=v[0],b=v[1],w=Object(o["useState"])(!1),p=Object(l["a"])(w,2),h=p[0],O=p[1],E=!1!==r.mobile&&!h,j=Object(o["useCallback"])((()=>{window.postMessage({type:m,value:JSON.stringify({identifier:e.identifier,demoUrl:e.demoUrl,simulator:e.simulator})},"*"),O(!0)}),[e]);return Object(o["useEffect"])((()=>{var n;if(r.title){var i=document.querySelector(".__dumi-default-mobile-previewer")===t.current,o=s()((()=>{var e,n,r,o,a,l=64,c=document.documentElement.scrollTop,d=(null===(e=t.current)||void 0===e?void 0:e.getBoundingClientRect().top)+c,u=(null===(n=t.current)||void 0===n||null===(r=n.previousElementSibling)||void 0===r?void 0:r.className)===(null===(o=t.current)||void 0===o?void 0:o.className)?l:l+128;i&&c<d||c+u>d&&c+l<d+(null===t||void 0===t||null===(a=t.current)||void 0===a?void 0:a.offsetHeight)?j():O(!1)}),50);return(null===(n=window)||void 0===n?void 0:n.outerWidth)>960&&!1!==r.mobile?(o(),window.addEventListener("scroll",o),b(Object.assign({},e,{iframe:null,children:null,defaultShowCode:!0,hideActions:["EXTERNAL"].concat(e.hideActions)}))):b(e),()=>window.removeEventListener("scroll",o)}}),[e,r]),Object(o["useEffect"])((()=>{var t=t=>{t.data.type===m&&h&&JSON.parse(t.data.value).identifier!==e.identifier&&O(!1)};return window.addEventListener("message",t),()=>window.removeEventListener("message",t)})),a.a.createElement("div",{className:!1!==r.mobile?"__dumi-default-mobile-previewer":null,onClick:()=>{E&&j()},"data-inactive":E||void 0,ref:t},f&&a.a.createElement(d["a"],Object(i["a"])({className:h?"__dumi-default-previewer-target":null},f)))};n("ztHt"),t["default"]=e=>{var t=e.hidden,n=Object(r["a"])(e,["hidden"]);return a.a.createElement(v,Object(i["a"])({className:t?"__dumi_taro-hook-hidden":""},n))}},ztHt:function(e,t,n){}}]);