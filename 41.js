(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[41],{Apd7:function(e,t,n){"use strict";n.r(t),n.d(t,"taro_form_core",(function(){return o}));var i=n("ZF8R"),o=function(){function e(e){Object(i["g"])(this,e),this.onSubmit=Object(i["c"])(this,"submit",7),this.value={}}return e.prototype.watchSlotParent=function(e){if(this.orginalAppendChild||(this.orginalAppendChild=this.el.appendChild,this.orginalInsertBefore=this.el.insertBefore,this.orginalReplaceChild=this.el.replaceChild,this.orginalRemoveChild=this.el.removeChild),!e)return this.el.appendChild=this.orginalAppendChild,this.el.insertBefore=this.orginalInsertBefore,this.el.replaceChild=this.orginalReplaceChild,void(this.el.removeChild=this.orginalRemoveChild);this.el.appendChild=function(t){return e.appendChild(t)},this.el.insertBefore=function(t,n){return e.insertBefore(t,n)},this.el.replaceChild=function(t,n){return e.replaceChild(t,n)},this.el.removeChild=function(t){return e.removeChild(t)}},e.prototype.onButtonSubmit=function(e){e.stopPropagation(),this.value=this.getFormValue(),this.onSubmit.emit({value:this.value})},e.prototype.onButtonReset=function(e){e.stopPropagation(),this.form.reset()},e.prototype.componentDidLoad=function(){var e=this;this.value=this.getFormValue(),Object.defineProperty(this.el,"value",{get:function(){return e.value},configurable:!0})},e.prototype.componentDidRender=function(){this.setSlotParent(this.form)},e.prototype.getFormValue=function(){for(var e=this.el,t=[],n=e.getElementsByTagName("input"),i=0;i<n.length;i++)t.push(n[i]);var o={},r={};t.forEach((function(e){-1===e.className.indexOf("weui-switch")?"radio"!==e.type?"checkbox"!==e.type?o[e.name]=e.value:e.checked?r[e.name]?o[e.name].push(e.value):(r[e.name]=!0,o[e.name]=[e.value]):r[e.name]||(o[e.name]=[]):e.checked?(r[e.name]=!0,o[e.name]=e.value):r[e.name]||(o[e.name]=""):o[e.name]=e.checked}));for(var a=e.getElementsByTagName("textarea"),l=[],h=0;h<a.length;h++)l.push(a[h]);return l.forEach((function(e){o[e.name]=e.value})),o},e.prototype.setSlotParent=function(e){this.slotParent=e},e.prototype.render=function(){var e=this;return Object(i["e"])("form",{ref:function(t){t&&(e.form=t)}},Object(i["e"])("slot",null))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i["d"])(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{slotParent:["watchSlotParent"]}},enumerable:!1,configurable:!0}),e}()}}]);