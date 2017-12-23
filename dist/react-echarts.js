!function(t,e){for(var n in e)t[n]=e[n]}(exports,function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=3)}([function(t,e){t.exports=require("util-toolkit")},function(t,e){t.exports=require("echarts")},function(t,e){t.exports=require("react")},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(){v.forEach(function(t){t.isDisposed()||t.resize()})}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),c=n(2),p=r(c),f=n(1),l=r(f),h=n(0),d=0,y=!1,v=[],O={width:"100%"},b=function(t){function e(t){o(this,e);var n=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.domId=d++,n.chartIns=null,n.loading=!1,n.resize=t.resize,n.resize&&!y&&(y=!0,window.addEventListener("resize",s.bind(n))),n}return u(e,t),a(e,[{key:"componentWillReceiveProps",value:function(t){return this.updateDataOption(t.dataSource),this.updateGraphOption(t.graphOption),t.loading&&!this.loading?(this.loading=!0,this.chartIns.showLoading()):!t.loading&&this.loading&&this.chartIns.hideLoading(),t}},{key:"renderEchart",value:function(t){if(!t)return!1;this.chartIns=l.default.init(t),this.props.resize&&v.push(this.chartIns),this.updateGraphOption(this.props.graphOption),this.updateDataOption(this.props.dataSource)}},{key:"updateGraphOption",value:function(t){this.chartIns.setOption(t)}},{key:"updateDataOption",value:function(t){this.chartIns.setOption({series:t||this.props.dataSource||[]})}},{key:"shouldComponentUpdate",value:function(t){return JSON.stringify(t.style)!==JSON.stringify(this.props.style)}},{key:"componentWillUnmount",value:function(){var t=this;this.chartIns&&(this.chartIns.dispose(),v.some(function(e,n){if(t.chartIns===e)return v.splice(n),!0})),v.length||(y=!1,window.removeEventListener("resize",s))}},{key:"render",value:function(){var t=this,e=(0,h.extend)({},O,this.props.style);return p.default.createElement("div",{id:"rc-echart-"+this.domId,ref:function(e){return t.renderEchart(e)},style:e})}}]),e}(p.default.Component);e.default=b,t.exports=e.default}]));