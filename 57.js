(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[57],{"5J85":function(e,r,n){"use strict";n.r(r),n.d(r,"taro_rich_text_core",(function(){return i}));var t=n("ZF8R"),i=function(){function e(e){var r=this;Object(t["g"])(this,e),this.renderNode=function(e){if("type"in e&&"text"===e.type){var n=(e.text||"").replace(/&nbsp;/g,"\xa0");return n}if("name"in e&&e.name){var i=e.name,o=e.attrs,a=e.children,c={},u=[];if(o&&"object"===typeof o){var f=function(e){var r=o[e];if("style"===e&&"string"===typeof r){var n=r.split(";").map((function(e){return e.trim()})).filter((function(e){return e})),t={};return n.forEach((function(e){if(e){var r=/(.+): *(.+)/g.exec(e);if(r){var n=r[1],i=r[2],o=n.replace(/-([a-z])/g,(function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return e[1].toUpperCase()}));t[o]=i}}})),Object.keys(t).length&&(c.style=t),"continue"}c[e]=r};for(var p in o)f(p)}return a&&a.length&&(u=a.map((function(e){return r.renderNode(e)}))),Object(t["e"])(i,c,u)}return null}}return e.prototype.render=function(){var e=this,r=e.nodes,n=e.renderNode;return Array.isArray(r)?Object(t["e"])(t["a"],null,r.map((function(e){return n(e)}))):Object(t["e"])(t["a"],{innerHTML:r})},e}()}}]);