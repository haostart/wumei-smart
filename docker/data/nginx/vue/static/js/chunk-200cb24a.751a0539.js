(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-200cb24a"],{"584f":function(t,e,i){"use strict";i.d(e,"k",(function(){return r})),i.d(e,"n",(function(){return c})),i.d(e,"l",(function(){return o})),i.d(e,"m",(function(){return u})),i.d(e,"j",(function(){return a})),i.d(e,"e",(function(){return d})),i.d(e,"c",(function(){return l})),i.d(e,"f",(function(){return s})),i.d(e,"h",(function(){return f})),i.d(e,"g",(function(){return v})),i.d(e,"a",(function(){return h})),i.d(e,"o",(function(){return g})),i.d(e,"b",(function(){return p})),i.d(e,"d",(function(){return m})),i.d(e,"i",(function(){return b}));var n=i("b775");function r(t){return Object(n["a"])({url:"/iot/device/list",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/iot/device/unAuthlist",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/iot/device/listByGroup",method:"get",params:t})}function u(t){return Object(n["a"])({url:"/iot/device/shortList",method:"get",params:t})}function a(){return Object(n["a"])({url:"/iot/device/all",method:"get"})}function d(t){return Object(n["a"])({url:"/iot/device/"+t,method:"get"})}function l(t){return Object(n["a"])({url:"/iot/device/synchronization/"+t,method:"get"})}function s(t){return Object(n["a"])({url:"/iot/device/getDeviceBySerialNumber/"+t,method:"get"})}function f(){return Object(n["a"])({url:"/iot/device/statistic",method:"get"})}function v(t){return Object(n["a"])({url:"/iot/device/runningStatus",method:"get",params:t})}function h(t){return Object(n["a"])({url:"/iot/device",method:"post",data:t})}function g(t){return Object(n["a"])({url:"/iot/device",method:"put",data:t})}function p(t){return Object(n["a"])({url:"/iot/device/"+t,method:"delete"})}function m(t){return Object(n["a"])({url:"/iot/device/generator",method:"get",params:t})}function b(t){return Object(n["a"])({url:"/iot/device/getMqttConnectData",method:"get",params:t})}},6647:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{display:"flex","margin-top":"60px"}},[i("div",{staticStyle:{"margin-left":"10px",color:"#32c5e9"}},[i("dv-decoration-9",{staticStyle:{width:"90px",height:"90px","font-weight":"600"},attrs:{dur:10,color:["#32c5e9","#238aa4"]}},[t._v(t._s(t.deviceStatistic.deviceCount))]),i("div",{staticStyle:{"text-align":"center","margin-top":"25px"}},[t._v("设备总数")])],1),i("div",{staticStyle:{margin:"0 30px",color:"#9fe6b8"}},[i("dv-decoration-9",{staticStyle:{width:"90px",height:"90px","font-weight":"600"},attrs:{dur:10,color:["#9fe6b8","#70a181"]}},[t._v(t._s(t.deviceStatistic.deviceOnlineCount))]),i("div",{staticStyle:{"text-align":"center","margin-top":"25px","font-weight":"400"}},[t._v("在线设备")])],1),i("div",{staticStyle:{"margin-right":"30px",color:"#ffdb5c"}},[i("dv-decoration-9",{staticStyle:{width:"90px",height:"90px","font-weight":"600"},attrs:{dur:10,color:["#ffdb5c","#b39a41"]}},[t._v(t._s(t.deviceStatistic.deviceCount-t.deviceStatistic.deviceOnlineCount))]),i("div",{staticStyle:{"text-align":"center","margin-top":"25px","font-weight":"400"}},[t._v("离线设备")])],1),i("div",{staticStyle:{color:"#fb7293"}},[i("dv-decoration-9",{staticStyle:{width:"90px",height:"90px","font-weight":"600"},attrs:{dur:10,color:["#fb7293","#ad4f65"]}},[t._v(t._s(t.deviceStatistic.alertCount))]),i("div",{staticStyle:{"text-align":"center","margin-top":"25px","font-weight":"400"}},[t._v("告警数量")])],1)])},r=[],c=i("584f"),o={data:function(){return{deviceStatistic:{deviceCount:100,productCount:100,eventCount:100,alertCount:100,deviceOnlineCount:100},timer:null}},created:function(){this.getDeviceStatic()},beforeDestroy:function(){this.clearData()},methods:{clearData:function(){this.timer&&(clearInterval(this.timer),this.timer=null)},getDeviceStatic:function(){var t=this;Object(c["h"])().then((function(e){200==e.code&&(t.deviceStatistic=e.data,t.switper())}))},switper:function(){var t=this;if(!this.timer){var e=function(e){t.getDeviceStatic()};this.timer=setInterval(e,6e4)}}}},u=o,a=i("2877"),d=Object(a["a"])(u,n,r,!1,null,null,null);e["default"]=d.exports}}]);