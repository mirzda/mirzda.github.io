webpackJsonp([91],{887:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){function e(){n=null,i.trigger("window:scroll")}$(window).keypress(function(e){i.trigger("window:keypress",e)});var n=null;$(window).scroll(function(){n&&clearTimeout(n),n=setTimeout(e,100)})};var o=t(7),u=function(e){return e&&e.__esModule?e:{default:e}}(o),i=u.default.instance.dispatcher;e.exports=n.default}});