(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[58],{gsXQ:function(e,t,o){"use strict";o.r(t),o.d(t,"taro_progress_core",(function(){return s}));var r=o("ZF8R"),s=function(){function e(e){Object(r["g"])(this,e),this.percent=0,this.showInfo=!1,this.borderRadius=0,this.fontSize=16,this.strokeWidth=6,this.activeColor="#09BB07",this.backgroundColor="#EBEBEB",this.active=!1}return e.prototype.render=function(){var e=this,t=e.percent,o=e.showInfo,s=e.borderRadius,i=e.fontSize,n=e.strokeWidth,c=e.activeColor,a=e.backgroundColor,u=e.active,d=t>100?100:t<0?0:t,p={height:n+"px",backgroundColor:a},h=u?"width 1s ease-in-out":"none",b={width:d+"%",transition:h,WebkitTransition:h,backgroundColor:c,borderRadius:s?s+"px":"0px"};return Object(r["e"])(r["a"],{class:"weui-progress"},Object(r["e"])("div",{class:"weui-progress__bar",style:p},Object(r["e"])("div",{class:"weui-progress__inner-bar",style:b})),o&&Object(r["e"])("div",{class:"weui-progress__opr",style:{"font-size":i+"px"}},Object(r["e"])("span",null,d,"%")))},e}()}}]);