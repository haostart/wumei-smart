(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-96c5deaa"],{"09cb":function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));a("d3b7");function i(){return new Promise((function(t,e){if("undefined"!==typeof BMap)return t(BMap),!0;window.onBMapCallback=function(){t(BMap)};var a=document.location.protocol;if("https:"==a){var i=document.createElement("meta");i.httpEquiv="Content-Security-Policy",i.content="upgrade-insecure-requests",i.onerror=e,document.head.appendChild(i)}var n=document.createElement("script");n.type="text/javascript",n.src="http://api.map.baidu.com/api?v=2.0&ak=nAtaBg9FYzav6c8P9rF9qzsWZfT8O0PD&s=1&__ec_v__=20190126&callback=onBMapCallback",n.onerror=e,document.head.appendChild(n)}))}},"1e4b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{padding:"10px","background-color":"#f8f8f8"}},[i("el-row",{staticStyle:{margin:"10px 0px 20px 0px"},attrs:{gutter:20}},[i("el-col",{attrs:{xs:24,sm:24,md:24,lg:14,xl:14}},[i("div",{staticStyle:{overflow:"hidden",border:"1px solid #ccc"}},[i("div",{ref:"map",staticStyle:{height:"650px"}})])]),i("el-col",{attrs:{xs:24,sm:24,md:24,lg:10,xl:10}},[i("el-card",{attrs:{shadow:"none"}},[i("h3",{staticStyle:{"font-weight":"bold"}},[i("i",{staticClass:"el-icon-s-data"}),t._v(" 设备统计 ")]),i("el-row",{staticClass:"panel-group",attrs:{gutter:40}},[i("el-col",{staticClass:"card-panel-col",attrs:{span:12}},[i("div",{staticClass:"card-panel"},[i("div",{staticClass:"card-panel-icon-wrapper icon-blue"},[i("svg-icon",{attrs:{"icon-class":"device","class-name":"card-panel-icon"}})],1),i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-text"},[t._v("设备数量")]),i("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.deviceStatistic.deviceCount,duration:3e3}})],1)])]),i("el-col",{staticClass:"card-panel-col",attrs:{span:12}},[i("div",{staticClass:"card-panel"},[i("div",{staticClass:"card-panel-icon-wrapper icon-red"},[i("svg-icon",{attrs:{"icon-class":"monitor-a","class-name":"card-panel-icon"}})],1),i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-text"},[t._v("监测数据")]),i("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.deviceStatistic.monitorCount,duration:3e3}})],1)])]),i("el-col",{staticClass:"card-panel-col",attrs:{span:12}},[i("div",{staticClass:"card-panel"},[i("div",{staticClass:"card-panel-icon-wrapper icon-blue"},[i("svg-icon",{attrs:{"icon-class":"model","class-name":"card-panel-icon"}})],1),i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-text"},[t._v("产品数量")]),i("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.deviceStatistic.productCount,duration:1e3}})],1)])]),i("el-col",{staticClass:"card-panel-col",attrs:{span:12}},[i("div",{staticClass:"card-panel"},[i("div",{staticClass:"card-panel-icon-wrapper icon-red"},[i("svg-icon",{attrs:{"icon-class":"alert","class-name":"card-panel-icon"}})],1),i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-text"},[t._v("告警数量")]),i("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.deviceStatistic.alertCount,duration:1e3}})],1)])]),i("el-col",{staticClass:"card-panel-col",attrs:{span:12}},[i("div",{staticClass:"card-panel"},[i("div",{staticClass:"card-panel-icon-wrapper icon-blue"},[i("svg-icon",{attrs:{"icon-class":"log-a","class-name":"card-panel-icon"}})],1),i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-text"},[t._v("操作记录")]),i("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.deviceStatistic.functionCount,duration:2e3}})],1)])]),i("el-col",{staticClass:"card-panel-col",attrs:{span:12}},[i("div",{staticClass:"card-panel"},[i("div",{staticClass:"card-panel-icon-wrapper icon-red"},[i("svg-icon",{attrs:{"icon-class":"event-a","class-name":"card-panel-icon"}})],1),i("div",{staticClass:"card-panel-description"},[i("div",{staticClass:"card-panel-text"},[t._v("上报事件")]),i("count-to",{staticClass:"card-panel-num",attrs:{"start-val":0,"end-val":t.deviceStatistic.eventCount,duration:2e3}})],1)])])],1)],1),i("el-card",{staticStyle:{"margin-top":"22px",height:"302px"},attrs:{shadow:"none"}},[i("h3",{staticStyle:{"font-weight":"bold","margin-bottom":"10px"}},[i("i",{staticClass:"el-icon-s-order"}),t._v(" 信息栏 ")]),t._l(t.noticeList,(function(e){return i("div",{key:e.noticeId,staticStyle:{cursor:"pointer",display:"table",width:"100%","line-height":"36px"},on:{click:function(a){return t.openDetail(e.noticeId)}}},[i("div",{staticStyle:{display:"table-cell","padding-right":"10px"}},[2==e.noticeType?i("el-tag",{attrs:{size:"mini",effect:"dark",type:"warning"}},[t._v("公告")]):i("el-tag",{attrs:{size:"mini",effect:"dark"}},[t._v("信息")]),t._v(" "+t._s(e.noticeTitle)+" ")],1),i("div",{staticStyle:{display:"table-cell",width:"90px","font-size":"14px"}},[i("i",{staticClass:"el-icon-time"}),t._v(" "+t._s(t.parseTime(e.createTime,"{y}-{m}-{d}"))+" ")])])}))],2)],1)],1),i("el-card",{staticStyle:{margin:"10px 10px 20px 10px"},attrs:{shadow:"none"}},[t.isAdmin?i("el-row",{attrs:{gutter:120}},[i("el-col",{attrs:{xs:24,sm:24,md:24,lg:8,xl:8}},[i("div",{staticStyle:{padding:"20px"}},[i("div",{ref:"pieCpu",staticStyle:{height:"161px"}})])]),i("el-col",{attrs:{xs:24,sm:24,md:24,lg:8,xl:8}},[i("div",{staticStyle:{padding:"20px"}},[i("div",{ref:"pieMemery",staticStyle:{height:"161px"}})])]),i("el-col",{attrs:{xs:24,sm:24,md:24,lg:8,xl:8}},[i("div",{staticStyle:{padding:"20px"}},[i("div",{ref:"pieDisk",staticStyle:{height:"161px"}})])])],1):t._e()],1),i("el-card",{staticStyle:{margin:"10px 10px 60px 10px"},attrs:{shadow:"none"}},[i("el-row",{attrs:{gutter:40}},[i("el-col",{staticStyle:{padding:"40px"},attrs:{xs:24,sm:24,md:10,lg:10,xl:10}},[i("div",{staticStyle:{padding:"30px",margin:"20px 0","font-size":"14px"}},[i("div",{staticStyle:{"font-size":"28px","font-weight":"bold","margin-bottom":"20px"}},[t._v("FastBee物联网平台")]),i("div",{staticStyle:{display:"table","font-size":"14px","margin-bottom":"10px"}},[i("div",{staticStyle:{display:"table-cell","line-height":"22px"}},[i("b",{staticStyle:{color:"#67c23a","margin-right":"10px"}},[t._v("开源版本采用AGPL-3.0许可协议，商用需要获得授权")])])]),i("div",{staticStyle:{display:"table","margin-bottom":"10px"}},[i("div",{staticStyle:{width:"70px","font-weight":"bold",display:"table-cell"}},[t._v("开源版本：")]),i("div",{staticStyle:{display:"table-cell","line-height":"22px"}},[t._v("可用于个人学习和使用，非商业用途")])]),i("div",{staticStyle:{display:"table"}},[i("div",{staticStyle:{width:"70px","font-weight":"bold",display:"table-cell"}},[t._v("商业版本：")]),i("div",{staticStyle:{display:"table-cell","line-height":"22px"}},[t._v(" 商业用途，并提供所有源码，功能优先开源版本发布。 "),i("br"),i("el-link",{attrs:{target:"_blank",href:"https://fastbee.cn/doc/pages/sponsor"}},[t._v("查看详情 >>")])],1)])]),i("div",{staticStyle:{padding:"30px","font-size":"14px"}},[i("div",{staticStyle:{float:"left",width:"230px"}},[i("el-image",{staticStyle:{width:"210px"},attrs:{src:a("2171")}})],1),i("div",{staticStyle:{float:"left"}},[i("div",{staticStyle:{"font-size":"18px","font-weight":"bold",margin:"16px 0"}},[t._v("微信扫一扫，查看小程序端")]),i("div",{staticStyle:{"font-size":"14px","font-weight":"bold",margin:"16px 0",color:"#f56c6c"}},[t._v("右侧是移动端H5版本演示")]),i("div",{staticStyle:{display:"table","margin-bottom":"10px"}},[i("div",{staticStyle:{width:"70px","font-weight":"bold",display:"table-cell"}},[t._v("官方网站")]),i("div",{staticStyle:{display:"table-cell"}},[i("el-link",{attrs:{target:"_blank",href:"https://fastbee.cn/"}},[t._v("www.fastbee.cn")])],1)]),i("div",{staticStyle:{display:"table","margin-bottom":"10px"}},[i("div",{staticStyle:{width:"70px","font-weight":"bold",display:"table-cell"}},[t._v("在线文档")]),i("div",{staticStyle:{display:"table-cell"}},[i("el-link",{attrs:{target:"_blank",href:"https://fastbee.cn/doc"}},[t._v("www.fastbee.cn/doc")])],1)]),i("div",{staticStyle:{display:"table","margin-bottom":"10px"}},[i("div",{staticStyle:{width:"70px","font-weight":"bold",display:"table-cell"}},[t._v("联系作者")]),i("div",{staticStyle:{display:"table-cell"}},[i("span",[t._v("QQ 164770707")])])]),i("div",{staticStyle:{display:"table","margin-bottom":"15px"}},[i("div",{staticStyle:{width:"70px","font-weight":"bold",display:"table-cell"}},[t._v("系统源码")]),i("div",{staticStyle:{display:"table-cell"}},[i("el-link",{attrs:{target:"_blank",href:"https://gitee.com/kerwincui/wumei-smart",type:"danger"}},[t._v("Gitee源码")]),i("el-link",{staticStyle:{"margin-left":"20px"},attrs:{target:"_blank",href:"https://github.com/kerwincui/fastbee"}},[t._v("Github源码")])],1)])])])]),i("el-col",{staticStyle:{padding:"40px"},attrs:{xs:24,sm:24,md:12,lg:12,xl:12}},[i("div",{staticClass:"phone"},[i("iframe",{staticClass:"phone-container",attrs:{src:"https://fastbee.cn/h5",id:"iframe",frameborder:"0",scrolling:"auto",height:"100%",width:"100%"}})])])],1)],1),i("el-dialog",{attrs:{title:t.notice.noticeTitle,visible:t.open,width:"800px","append-to-body":""},on:{"update:visible":function(e){t.open=e}}},[i("div",{staticStyle:{"margin-top":"-20px","margin-bottom":"10px"}},[2==t.notice.noticeType?i("el-tag",{attrs:{size:"mini",effect:"dark",type:"warning"}},[t._v("公告")]):i("el-tag",{attrs:{size:"mini",effect:"dark"}},[t._v("信息")]),i("span",{staticStyle:{"margin-left":"20px"}},[t._v(t._s(t.notice.createTime))])],1),i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"content"},[i("div",{domProps:{innerHTML:t._s(t.notice.noticeContent)}})]),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.closeDetail}},[t._v("关 闭")])],1)]),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"100%","text-align":"center","font-size":"14px",color:"#666","line-height":"32px","margin-top":"150px"}},[a("span",[t._v(" Copyright © 2021-2022 "),a("a",{attrs:{href:"https://fastbee.cn/",target:"_blank"}},[t._v("FastBee")]),t._v(" | "),a("a",{attrs:{href:"https://fastbee.cn/",target:"_blank"}},[t._v("蜂信物联")]),t._v(" | Apache License ")]),a("br"),a("span",[t._v(" 项目文档 "),a("a",{attrs:{href:"https://fastbee.cn/doc/",target:"_blank"}},[t._v("https://fastbee.cn/doc/")])])])}],r=a("ade3"),o=(a("a434"),a("b0c0"),a("d81d"),a("14d9"),a("4de4"),a("d3b7"),a("ac1f"),a("5319"),a("584f")),s=a("8b29"),l=a("ec1b"),c=a.n(l),d=a("09cb"),p=a("cc0b");a("a00a");var u={name:"Index",components:{CountTo:c.a},data:function(){return{loading:!0,open:!1,noticeList:[],notice:{},isAdmin:!1,deviceList:[],deviceStatistic:{},deviceCount:0,version:"3.8.0",server:{jvm:{name:"",version:"",startTime:"",runTime:"",used:"",total:100},sys:{computerName:"",osName:"",computerIp:"",osArch:""},cpu:{cpuNum:1},mem:{total:2}},tableData:[]}},created:function(){this.init(),this.getAllDevice(),this.getNoticeList(),this.getDeviceStatistic()},methods:{init:function(){-1===this.$store.state.user.roles.indexOf("tenant")&&-1===this.$store.state.user.roles.indexOf("general")&&(this.isAdmin=!0,this.getServer())},flushIframe:function(){var t=window.parent.document.getElementById("iframe");t.contentWindow.location.reload(!0)},getDeviceStatistic:function(){var t=this;Object(o["h"])().then((function(e){t.deviceStatistic=e.data}))},getNoticeList:function(){var t=this,e={pageNum:1,pageSize:6};Object(s["d"])(e).then((function(e){t.noticeList=e.rows.splice(0,6)}))},openDetail:function(t){var e=this;this.open=!0,this.loading=!0,Object(s["c"])(t).then((function(t){e.notice=t.data,e.open=!0,e.loading=!1}))},closeDetail:function(){this.title="",this.open=!1},getAllDevice:function(){var t=this;Object(o["j"])(this.queryParams).then((function(e){t.deviceList=e.rows,t.deviceCount=e.total,t.loadMap()}))},loadMap:function(){var t=this;this.$nextTick((function(){Object(d["a"])().then((function(){t.getmap()}))}))},getServer:function(){var t=this;Object(p["a"])().then((function(e){t.server=e.data,t.tableData=[{server:"服务器名",serverContent:t.server.sys.computerName,java:"Java名称",javaContent:t.server.jvm.name},{server:"服务器IP",serverContent:t.server.sys.computerIp,java:"启动时间",javaContent:t.server.jvm.startTime},{server:"操作系统",serverContent:t.server.sys.osName,java:"Java版本",javaContent:t.server.jvm.version},{server:"系统架构",serverContent:t.server.sys.osArch,java:"运行时长",javaContent:t.server.jvm.runTime},{server:"CPU核心",serverContent:t.server.cpu.cpuNum,java:"占用内存",javaContent:t.server.jvm.used},{server:"内存大小",serverContent:t.server.mem.total,java:"JVM总内存",javaContent:t.server.jvm.total}],t.$nextTick((function(){t.drawPieCpu(),t.drawPieMemery(),t.drawPieDisk()}))}))},getmap:function(){var t,e=this,a=this.$echarts.init(this.$refs.map);a.on("click",(function(t){t.data.deviceId&&e.$router.push({path:"/iot/device-edit",query:{t:Date.now(),deviceId:t.data.deviceId}})}));var i=function(t,e){for(var a=[],i=0;i<t.length;i++){var n,o=[t[i].longitude,t[i].latitude];if(o&&t[i].status==e)a.push((n={name:t[i].deviceName,value:o,serialNumber:t[i].serialNumber,status:t[i].status,isShadow:t[i].isShadow,firmwareVersion:t[i].firmwareVersion,networkAddress:t[i].networkAddress,productName:t[i].productName,activeTime:null==t[i].activeTime?"":t[i].activeTime,deviceId:t[i].deviceId},Object(r["a"])(n,"serialNumber",t[i].serialNumber),Object(r["a"])(n,"locationWay",t[i].locationWay),n))}return a};t={title:{text:"设备分布（在线数 "+this.deviceList.filter((function(t){return 3==t.status})).length+"）",subtext:"fastbee open source iot platform",sublink:"https://iot.fastbee.cn",target:"_blank",textStyle:{color:"#333",textBorderColor:"#fff",textBorderWidth:10},top:10,left:"center"},tooltip:{trigger:"item",formatter:function(t){var e='<div style="padding:5px;line-height:28px;">';return e+="设备名称： <span style='color:#409EFF'>"+t.data.name+"</span><br />",e+="设备编号： "+t.data.serialNumber+"<br />",e+="设备状态： ",1==t.data.status?e+="<span style='color:#E6A23C'>未激活</span><br />":2==t.data.status?e+="<span style='color:#F56C6C'>禁用</span><br />":3==t.data.status?e+="<span style='color:#67C23A'>在线</span><br />":4==t.data.status&&(e+="<span style='color:#909399'>离线</span><br />"),1==t.data.isShadow?e+="设备影子： <span style='color:#67C23A'>启用</span><br />":e+="设备影子： <span style='color:#909399'>未启用</span><br />",e+="产品名称： "+t.data.productName+"<br />",e+="固件版本： Version "+t.data.firmwareVersion+"<br />",e+="激活时间： "+t.data.activeTime+"<br />",e+="定位方式： ",1==t.data.locationWay?e+="自动定位<br />":2==t.data.locationWay?e+="设备定位<br />":3==t.data.locationWay?e+="自定义位置<br />":e+="未知<br />",e+="所在地址： "+t.data.networkAddress+"<br />",e+="</div>",e}},bmap:{center:[133,38],zoom:5,roam:!0,mapStyle:{styleJson:[{featureType:"water",elementType:"all",stylers:{color:"#a0cfff"}},{featureType:"land",elementType:"all",stylers:{color:"#fafafa"}},{featureType:"railway",elementType:"all",stylers:{visibility:"off"}},{featureType:"highway",elementType:"all",stylers:{color:"#fdfdfd"}},{featureType:"highway",elementType:"labels",stylers:{visibility:"off"}},{featureType:"arterial",elementType:"geometry",stylers:{color:"#fefefe"}},{featureType:"arterial",elementType:"geometry.fill",stylers:{color:"#fefefe"}},{featureType:"poi",elementType:"all",stylers:{visibility:"off"}},{featureType:"green",elementType:"all",stylers:{visibility:"off"}},{featureType:"subway",elementType:"all",stylers:{visibility:"off"}},{featureType:"manmade",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"local",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"arterial",elementType:"labels",stylers:{visibility:"off"}},{featureType:"boundary",elementType:"all",stylers:{color:"#999999"}},{featureType:"building",elementType:"all",stylers:{color:"#d1d1d1"}},{featureType:"label",elementType:"labels.text.fill",stylers:{color:"#999999"}}]}},series:[{type:"scatter",coordinateSystem:"bmap",data:i(this.deviceList,1),symbolSize:15,itemStyle:{color:"#E6A23C"}},{type:"scatter",coordinateSystem:"bmap",data:i(this.deviceList,2),symbolSize:15,itemStyle:{color:"#F56C6C"}},{type:"scatter",coordinateSystem:"bmap",data:i(this.deviceList,4),symbolSize:15,itemStyle:{color:"#909399"}},{type:"effectScatter",coordinateSystem:"bmap",data:i(this.deviceList,3),symbolSize:15,showEffectOn:"render",rippleEffect:{brushType:"stroke",scale:5},label:{formatter:"{b}",position:"right",show:!1},itemStyle:{color:"#67C23A",shadowBlur:100,shadowColor:"#333"},zlevel:1}]},t&&a.setOption(t)},drawPieCpu:function(){var t,e=this.$echarts.init(this.$refs.pieCpu);t={title:{text:"CPU使用率",left:"left",textStyle:{fontSize:16}},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"right"},color:["#E6A23C","#F56C6C","#DDD"],series:[{name:"CPU使用率 %",type:"pie",radius:"55%",label:{show:!1},labelLine:{normal:{position:"inner",show:!1}},data:[{value:this.server.cpu.used,name:"用户"},{value:this.server.cpu.sys,name:"系统"},{value:this.server.cpu.free,name:"空闲"}]}]},t&&e.setOption(t)},drawPieMemery:function(){var t,e=this.$echarts.init(this.$refs.pieMemery);t={title:{text:"内存使用率",left:"left",textStyle:{fontSize:16}},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"right"},color:["#F56C6C","#DDD"],series:[{name:"内存使用率 G",type:"pie",radius:"55%",label:{show:!1},labelLine:{normal:{position:"inner",show:!1}},data:[{value:this.server.mem.used,name:"已用"},{value:this.server.mem.free,name:"剩余"}]}]},t&&e.setOption(t)},drawPieDisk:function(){var t,e=this.$echarts.init(this.$refs.pieDisk),a=this.server.sysFiles[0].used.replace("GB",""),i=this.server.sysFiles[0].free.replace("GB","");t={title:{text:"系统盘使用率",left:"left",textStyle:{fontSize:16}},tooltip:{trigger:"item"},legend:{orient:"vertical",left:"right"},color:["#F56C6C","#DDD"],series:[{name:"磁盘状态 G",type:"pie",radius:"55%",label:{show:!1},labelLine:{normal:{position:"inner",show:!1}},data:[{value:a,name:"已用"},{value:i,name:"可用"}]}]},t&&e.setOption(t)}}},m=u,f=(a("fe80"),a("2877")),h=Object(f["a"])(m,i,n,!1,null,"28ca2754",null);e["default"]=h.exports},2171:function(t,e,a){t.exports=a.p+"static/img/code.4ae965b2.jpg"},"4b4d":function(t,e,a){},"584f":function(t,e,a){"use strict";a.d(e,"k",(function(){return n})),a.d(e,"n",(function(){return r})),a.d(e,"l",(function(){return o})),a.d(e,"m",(function(){return s})),a.d(e,"j",(function(){return l})),a.d(e,"e",(function(){return c})),a.d(e,"c",(function(){return d})),a.d(e,"f",(function(){return p})),a.d(e,"h",(function(){return u})),a.d(e,"g",(function(){return m})),a.d(e,"a",(function(){return f})),a.d(e,"o",(function(){return h})),a.d(e,"b",(function(){return v})),a.d(e,"d",(function(){return y})),a.d(e,"i",(function(){return b}));var i=a("b775");function n(t){return Object(i["a"])({url:"/iot/device/list",method:"get",params:t})}function r(t){return Object(i["a"])({url:"/iot/device/unAuthlist",method:"get",params:t})}function o(t){return Object(i["a"])({url:"/iot/device/listByGroup",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/iot/device/shortList",method:"get",params:t})}function l(){return Object(i["a"])({url:"/iot/device/all",method:"get"})}function c(t){return Object(i["a"])({url:"/iot/device/"+t,method:"get"})}function d(t){return Object(i["a"])({url:"/iot/device/synchronization/"+t,method:"get"})}function p(t){return Object(i["a"])({url:"/iot/device/getDeviceBySerialNumber/"+t,method:"get"})}function u(){return Object(i["a"])({url:"/iot/device/statistic",method:"get"})}function m(t){return Object(i["a"])({url:"/iot/device/runningStatus",method:"get",params:t})}function f(t){return Object(i["a"])({url:"/iot/device",method:"post",data:t})}function h(t){return Object(i["a"])({url:"/iot/device",method:"put",data:t})}function v(t){return Object(i["a"])({url:"/iot/device/"+t,method:"delete"})}function y(t){return Object(i["a"])({url:"/iot/device/generator",method:"get",params:t})}function b(t){return Object(i["a"])({url:"/iot/device/getMqttConnectData",method:"get",params:t})}},"8b29":function(t,e,a){"use strict";a.d(e,"d",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return o})),a.d(e,"e",(function(){return s})),a.d(e,"b",(function(){return l}));var i=a("b775");function n(t){return Object(i["a"])({url:"/system/notice/list",method:"get",params:t})}function r(t){return Object(i["a"])({url:"/system/notice/"+t,method:"get"})}function o(t){return Object(i["a"])({url:"/system/notice",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/system/notice",method:"put",data:t})}function l(t){return Object(i["a"])({url:"/system/notice/"+t,method:"delete"})}},a00a:function(t,e,a){"use strict";a.r(e),a.d(e,"version",(function(){return p}));var i,n=a("313e");function r(t,e){this._bmap=t,this.dimensions=["lng","lat"],this._mapOffset=[0,0],this._api=e,this._projection=new BMap.MercatorProjection}function o(t,e){return e=e||[0,0],n["util"].map([0,1],(function(a){var i=e[a],n=t[a]/2,r=[],o=[];return r[a]=i-n,o[a]=i+n,r[1-a]=o[1-a]=e[1-a],Math.abs(this.dataToPoint(r)[a]-this.dataToPoint(o)[a])}),this)}function s(){function t(t){this._root=t}return t.prototype=new BMap.Overlay,t.prototype.initialize=function(t){return t.getPanes().labelPane.appendChild(this._root),this._root},t.prototype.draw=function(){},t}r.prototype.type="bmap",r.prototype.dimensions=["lng","lat"],r.prototype.setZoom=function(t){this._zoom=t},r.prototype.setCenter=function(t){this._center=this._projection.lngLatToPoint(new BMap.Point(t[0],t[1]))},r.prototype.setMapOffset=function(t){this._mapOffset=t},r.prototype.getBMap=function(){return this._bmap},r.prototype.dataToPoint=function(t){var e=new BMap.Point(t[0],t[1]),a=this._bmap.pointToOverlayPixel(e),i=this._mapOffset;return[a.x-i[0],a.y-i[1]]},r.prototype.pointToData=function(t){var e=this._mapOffset;return t=this._bmap.overlayPixelToPoint({x:t[0]+e[0],y:t[1]+e[1]}),[t.lng,t.lat]},r.prototype.getViewRect=function(){var t=this._api;return new n["graphic"].BoundingRect(0,0,t.getWidth(),t.getHeight())},r.prototype.getRoamTransform=function(){return n["matrix"].create()},r.prototype.prepareCustoms=function(){var t=this.getViewRect();return{coordSys:{type:"bmap",x:t.x,y:t.y,width:t.width,height:t.height},api:{coord:n["util"].bind(this.dataToPoint,this),size:n["util"].bind(o,this)}}},r.prototype.convertToPixel=function(t,e,a){return this.dataToPoint(a)},r.prototype.convertFromPixel=function(t,e,a){return this.pointToData(a)},r.dimensions=r.prototype.dimensions,r.create=function(t,e){var a,o=e.getDom();return t.eachComponent("bmap",(function(t){var l,c=e.getZr().painter,d=c.getViewportRoot();if("undefined"===typeof BMap)throw new Error("BMap api is not loaded");if(i=i||s(),a)throw new Error("Only one bmap component can exist");if(!t.__bmap){var p=o.querySelector(".ec-extension-bmap");p&&(d.style.left="0px",d.style.top="0px",o.removeChild(p)),p=document.createElement("div"),p.className="ec-extension-bmap",p.style.cssText="position:absolute;width:100%;height:100%",o.appendChild(p);var u=t.get("mapOptions");u&&(u=n["util"].clone(u),delete u.mapType),l=t.__bmap=new BMap.Map(p,u);var m=new i(d);l.addOverlay(m),c.getViewportRootOffset=function(){return{offsetLeft:0,offsetTop:0}}}l=t.__bmap;var f=t.get("center"),h=t.get("zoom");if(f&&h){var v=l.getCenter(),y=l.getZoom(),b=t.centerOrZoomChanged([v.lng,v.lat],y);if(b){var g=new BMap.Point(f[0],f[1]);l.centerAndZoom(g,h)}}a=new r(l,e),a.setMapOffset(t.__mapOffset||[0,0]),a.setZoom(h),a.setCenter(f),t.coordinateSystem=a})),t.eachSeries((function(t){"bmap"===t.get("coordinateSystem")&&(t.coordinateSystem=a)})),a&&[a]};var l=r;function c(t,e){return t&&e&&t[0]===e[0]&&t[1]===e[1]}n["extendComponentModel"]({type:"bmap",getBMap:function(){return this.__bmap},setCenterAndZoom:function(t,e){this.option.center=t,this.option.zoom=e},centerOrZoomChanged:function(t,e){var a=this.option;return!(c(t,a.center)&&e===a.zoom)},defaultOption:{center:[104.114129,37.550339],zoom:5,mapStyle:{},mapStyleV2:{},mapOptions:{},roam:!1}});function d(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}n["extendComponentView"]({type:"bmap",render:function(t,e,a){var i=!0,r=t.getBMap(),o=a.getZr().painter.getViewportRoot(),s=t.coordinateSystem,l=function(e,n){if(!i){var r=o.parentNode.parentNode.parentNode,l=[-parseInt(r.style.left,10)||0,-parseInt(r.style.top,10)||0],c=o.style,d=l[0]+"px",p=l[1]+"px";c.left!==d&&(c.left=d),c.top!==p&&(c.top=p),s.setMapOffset(l),t.__mapOffset=l,a.dispatchAction({type:"bmapRoam",animation:{duration:0}})}};function c(){i||a.dispatchAction({type:"bmapRoam",animation:{duration:0}})}r.removeEventListener("moving",this._oldMoveHandler),r.removeEventListener("moveend",this._oldMoveHandler),r.removeEventListener("zoomend",this._oldZoomEndHandler),r.addEventListener("moving",l),r.addEventListener("moveend",l),r.addEventListener("zoomend",c),this._oldMoveHandler=l,this._oldZoomEndHandler=c;var p=t.get("roam");p&&"scale"!==p?r.enableDragging():r.disableDragging(),p&&"move"!==p?(r.enableScrollWheelZoom(),r.enableDoubleClickZoom(),r.enablePinchToZoom()):(r.disableScrollWheelZoom(),r.disableDoubleClickZoom(),r.disablePinchToZoom());var u=t.__mapStyle,m=t.get("mapStyle")||{},f=JSON.stringify(m);JSON.stringify(u)!==f&&(d(m)||r.setMapStyle(n["util"].clone(m)),t.__mapStyle=JSON.parse(f));var h=t.__mapStyle2,v=t.get("mapStyleV2")||{},y=JSON.stringify(v);JSON.stringify(h)!==y&&(d(v)||r.setMapStyleV2(n["util"].clone(v)),t.__mapStyle2=JSON.parse(y)),i=!1}});n["registerCoordinateSystem"]("bmap",l),n["registerAction"]({type:"bmapRoam",event:"bmapRoam",update:"updateLayout"},(function(t,e){e.eachComponent("bmap",(function(t){var e=t.getBMap(),a=e.getCenter();t.setCenterAndZoom([a.lng,a.lat],e.getZoom())}))}));var p="1.0.0"},cc0b:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var i=a("b775");function n(){return Object(i["a"])({url:"/monitor/server",method:"get"})}},ec1b:function(t,e,a){!function(e,a){t.exports=a()}(0,(function(){return function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,a){var i=a(4)(a(1),a(5),null,null);t.exports=i.exports},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,a,i){return a*(1-Math.pow(2,-10*t/i))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,i.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,i.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,i.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,i.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,i.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals),t+="";var e=t.split("."),a=e[0],i=e.length>1?this.decimal+e[1]:"",n=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;n.test(a);)a=a.replace(n,"$1"+this.separator+"$2");return this.prefix+a+i+this.suffix}},destroyed:function(){(0,i.cancelAnimationFrame)(this.rAF)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=n.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",n.default)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=0,n="webkit moz ms o".split(" "),r=void 0,o=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=o=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=o=window.cancelAnimationFrame;for(var s=void 0,l=0;l<n.length&&(!r||!o);l++)s=n[l],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=o=o||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&o||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),a=Math.max(0,16-(e-i)),n=window.setTimeout((function(){t(e+a)}),a);return i=e+a,n},e.cancelAnimationFrame=o=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=o},function(t,e){t.exports=function(t,e,a,i){var n,r=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(n=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),a&&(s._scopeId=a),i){var l=Object.create(s.computed||null);Object.keys(i).forEach((function(t){var e=i[t];l[t]=function(){return e}})),s.computed=l}return{esModule:n,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])}))},fe80:function(t,e,a){"use strict";a("4b4d")}}]);