(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18563c98"],{"0bc2":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"a",(function(){return s}));var n=a("b775");function i(t){return Object(n["a"])({url:"/iot/runtime/service/invoke",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/iot/runtime/funcLog",method:"get",params:t})}},"466d":function(t,e,a){"use strict";var n=a("c65b"),i=a("d784"),s=a("825a"),r=a("7234"),o=a("50c4"),u=a("577e"),l=a("1d80"),c=a("dc4a"),d=a("8aa5"),f=a("14c3");i("match",(function(t,e,a){return[function(e){var a=l(this),i=r(e)?void 0:c(e,t);return i?n(i,e,a):new RegExp(e)[t](u(a))},function(t){var n=s(this),i=u(t),r=a(e,n,i);if(r.done)return r.value;if(!n.global)return f(n,i);var l=n.unicode;n.lastIndex=0;var c,p=[],m=0;while(null!==(c=f(n,i))){var h=u(c[0]);p[m]=h,""===h&&(n.lastIndex=d(i,o(n.lastIndex),l)),m++}return 0===m?null:p}]}))},"584f":function(t,e,a){"use strict";a.d(e,"k",(function(){return i})),a.d(e,"n",(function(){return s})),a.d(e,"l",(function(){return r})),a.d(e,"m",(function(){return o})),a.d(e,"j",(function(){return u})),a.d(e,"e",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"f",(function(){return d})),a.d(e,"h",(function(){return f})),a.d(e,"g",(function(){return p})),a.d(e,"a",(function(){return m})),a.d(e,"o",(function(){return h})),a.d(e,"b",(function(){return v})),a.d(e,"d",(function(){return g})),a.d(e,"i",(function(){return b}));var n=a("b775");function i(t){return Object(n["a"])({url:"/iot/device/list",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/iot/device/unAuthlist",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/iot/device/listByGroup",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/iot/device/shortList",method:"get",params:t})}function u(){return Object(n["a"])({url:"/iot/device/all",method:"get"})}function l(t){return Object(n["a"])({url:"/iot/device/"+t,method:"get"})}function c(t){return Object(n["a"])({url:"/iot/device/synchronization/"+t,method:"get"})}function d(t){return Object(n["a"])({url:"/iot/device/getDeviceBySerialNumber/"+t,method:"get"})}function f(){return Object(n["a"])({url:"/iot/device/statistic",method:"get"})}function p(t){return Object(n["a"])({url:"/iot/device/runningStatus",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/iot/device",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/iot/device",method:"put",data:t})}function v(t){return Object(n["a"])({url:"/iot/device/"+t,method:"delete"})}function g(t){return Object(n["a"])({url:"/iot/device/generator",method:"get",params:t})}function b(t){return Object(n["a"])({url:"/iot/device/getMqttConnectData",method:"get",params:t})}},"5daf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"running-status H100"},[a("div",[a("el-tabs",{staticStyle:{flex:"1",height:"800px","margin-bottom":"5px"},attrs:{type:"border-card"},on:{"tab-click":t.handleClick},model:{value:t.thingsType,callback:function(e){t.thingsType=e},expression:"thingsType"}},[a("el-tab-pane",{attrs:{label:"属性上报",name:"prop"}},[a("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"H100",staticStyle:{position:"relative"}},[a("el-row",{staticClass:"row-list",attrs:{gutter:20}},t._l(t.runningData,(function(e,n){return a("el-col",{key:n,staticStyle:{"margin-bottom":"10px"},attrs:{xs:24,sm:12,md:12,lg:8,xl:6}},[a("el-card",{staticStyle:{padding:"0px",height:"90px"}},[a("div",{staticClass:"head"},[a("div",{staticClass:"title"},[t._v(t._s(e.name)+"("+t._s(e.id)+")")]),a("div",{staticClass:"name"},[a("span",{staticStyle:{color:"#0f73ee"}},[t._v(t._s(e.value))]),e.datatype.unit?a("span",[t._v(t._s(e.datatype.unit||e.datatype.unitName))]):t._e()])]),a("div",[t._v("时间："+t._s(e.ts))])])],1)})),1)],1)],1),a("el-tab-pane",{attrs:{label:"服务下发",name:"function"}},[a("el-main",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"H100",staticStyle:{position:"relative"}},[a("el-row",{staticClass:"row-list",attrs:{gutter:20}},[t._l(t.functionData,(function(e,n){return a("el-col",{key:n,staticStyle:{"margin-bottom":"10px"},attrs:{":xs":17,sm:12,md:12,lg:8,xl:6}},[a("el-card",{staticClass:"elcard",staticStyle:{height:"90px"},attrs:{shadow:"hover"}},[a("div",{staticClass:"head"},[a("div",{staticClass:"title"},[t._v(" "+t._s(e.name)+" ")]),a("div",{staticClass:"name"},[a("span",{staticStyle:{color:"#0f73ee"}},[t._v(t._s(e.value))]),e.datatype.unit?a("span",[t._v(t._s(e.datatype.unit))]):t._e(),a("el-button",{staticStyle:{float:"right","margin-right":"-5px",padding:"3px 5px"},attrs:{type:"primary",plain:"",icon:"el-icon-s-promotion",size:"mini"},on:{click:function(a){return a.stopPropagation(),t.editFunc(e)}}},[t._v("发送")])],1)]),a("div",[a("span",[t._v("时间："+t._s(e.ts))])])])],1)})),a("el-col",{staticClass:"phone-main",attrs:{":xs":7,sm:12,md:12,lg:8,xl:6}},[a("div",{staticClass:"phone"},[a("div",{staticClass:"phone-container"},[a("div",{staticClass:"phone-title"},[t._v("设 备 指 令")]),a("div",{ref:"logContent",staticClass:"log-content"},[a("el-scrollbar",{ref:"scrollContent",staticStyle:{height:"100%"}},t._l(t.logList,(function(e,n){return a("ul",{key:n},[a("li",[a("a",{staticStyle:{float:"left","text-align":"left"},attrs:{href:"#"}},[a("div",{staticClass:"time"},[t._v(t._s(e.createTime))]),a("div",{staticClass:"spa"},[a("span",{staticClass:"lable-s1"},[t._v("服务下发:")]),t._v(" "+t._s(e.modelName)+" ")])]),a("a",{staticStyle:{float:"right","text-align":"right"},attrs:{href:"#"}},[a("div",{staticClass:"time"},[t._v(t._s(e.replyTime))]),a("div",{class:{fail:201==e.resultCode,wait:203==e.resultCode}},[a("span",{staticClass:"lable-s1"},[t._v("设备应答:")]),t._v(" "+t._s(e.showValue)+" ")])])])])})),0)],1)])])])],2),a("el-empty",{directives:[{name:"show",rawName:"v-show",value:0==t.runningData.length,expression:"runningData.length == 0"}],attrs:{description:"暂无数据"}})],1)],1),a("el-tab-pane",{attrs:{disabled:"",name:"slave"}},[a("span",{staticStyle:{"margin-left":"50px"},attrs:{slot:"label"},slot:"label"},[a("span",{ref:"statusTitle",staticStyle:{color:"#409eff","margin-right":"30px"}},[t._v(t._s(t.title))]),a("el-select",{attrs:{placeholder:"请选择设备从机",size:"mini"},on:{change:t.selectSlave},model:{value:t.params.slaveId,callback:function(e){t.$set(t.params,"slaveId",e)},expression:"params.slaveId"}},t._l(t.slaveList,(function(t){return a("el-option",{key:t.slaveId,attrs:{label:t.deviceName+"   ("+t.slaveId+")",value:t.slaveId}})})),1)],1)])],1)],1),a("el-dialog",{attrs:{title:"服务调用",visible:t.dialogValue,width:"30%"},on:{"update:visible":function(e){t.dialogValue=e}}},[a("el-form",{staticStyle:{height:"100%",padding:"0 20px"},attrs:{size:"mini"},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}},[a("el-form-item",{attrs:{label:t.from.name,"label-width":"180px"}},["integer"==t.from.datatype.type||"decimal"==t.from.datatype.type||"string"==t.from.datatype.type?a("el-input",{staticStyle:{width:"50%"},attrs:{type:"number"},on:{input:function(e){return t.justicNumber()}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}}):t._e(),"enum"==t.from.datatype.type?a("el-select",{on:{change:function(e){return t.changeSelect()}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},t._l(t.from.datatype.enumList,(function(t){return a("el-option",{key:t.value,attrs:{label:t.text,value:t.value}})})),1):t._e(),"bool"===t.from.datatype.type?a("el-switch",{attrs:{"active-value":"1","inactive-value":"0","inline-prompt":""},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}}):t._e(),"integer"!=t.from.datatype.type&&"decimal"!=t.from.datatype.type||!t.from.datatype.type.unit||"un"==t.from.datatype.type.unit||"/"==t.from.datatype.type.unit?t._e():a("span",[t._v("（"+t._s(t.from.unit)+"）")]),"integer"==t.from.datatype.type||"decimal"==t.from.datatype.type?a("div",{staticClass:"range"},[t._v(" (数据范围:"+t._s("null"==t.from.datatype.max?"bool"==t.from.datatype.type?0:"":t.from.datatype.min)+" ~ "+t._s("null"==t.from.datatype.max?"bool"==t.from.datatype.type?1:"":t.from.datatype.max)+") ")]):t._e()],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogValue=!1}}},[t._v("取消")]),a("el-button",{attrs:{type:"primary",loading:t.btnLoading,disabled:!t.canSend},on:{click:t.sendService}},[t._v("确认")])],1)],1)],1)},i=[],s=a("2909"),r=(a("14d9"),a("d3b7"),a("159b"),a("4de4"),a("b0c0"),a("0bc2")),o=(a("ed08"),a("a824"),a("584f")),u=(a("ba95"),"integer"),l="decimal",c="bool",d="enum",f={name:"realTime-status",props:{device:{type:Object,default:null}},data:function(){return{messageList:[],simulateForm:{},deviceInfo:{},dialogValue:!1,gridData:[],groupId:1,treeData:[],runningData:[],functionData:[],loading:!1,debounceGetRuntime:"",runtimeName:"",serialNumber:"",params:{serialNumber:void 0,type:1},slaveList:[],queryParams:{},thingsType:"prop",opationList:[],funVal:{},canSend:!1,functionName:{},btnLoading:!1,logList:[],showValue:"",from:{datatype:{type:""}},title:"在线模式"}},created:function(){},watch:{device:function(t){var e=this;t&&t.serialNumber&&(this.params.serialNumber=t.serialNumber,this.serialNumber=t.serialNumber,this.params.productId=t.productId,this.params.slaveId=t.slaveId,this.params.deviceId=t.deviceId,this.deviceInfo=t,this.updateDeviceStatus(this.deviceInfo),this.slaveList=t.subDeviceList,this.getSlaveList(this.deviceInfo),this.$busEvent.$on("updateData",(function(t){t.data&&t.data[0].remark&&(e.getDeviceFuncLog(),t.data[0].ts=t.data[0].remark),e.updateData(t)})),this.$busEvent.$on("logData",(function(t){var a;(a=e.messageList).push.apply(a,Object(s["a"])(t.data))})))}},methods:{qosChange:function(t){},payloadTypeChange:function(t){},getTime:function(){var t=new Date,e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate(),i=t.getHours(),s=t.getMinutes(),r=t.getSeconds();return a=a<10?"0"+a:a,n=n<10?"0"+n:n,i=i<10?"0"+i:i,e+"-"+a+"-"+n+" "+i+":"+s+":"+r},getRuntimeStatus:function(){var t=this;Object(o["g"])(this.params).then((function(e){t.runningData=e.data.thingsModels,t.runningData.forEach((function(t){"enum"==t.datatype.type?t.datatype.enumList.forEach((function(e){e.value==t.value&&(t.value=e.text)})):"bool"==t.datatype.type&&(t.value=0==t.value?t.falseText:t.trueText)})),t.functionData=t.runningData.filter((function(t){return 0==t.isReadonly}))}))},getSlaveList:function(){this.getRuntimeStatus(),this.getDeviceFuncLog()},selectSlave:function(){this.params.serialNumber=this.serialNumber+"_"+this.params.slaveId,this.getRuntimeStatus()},handleClick:function(){"prop"===this.thingsType?this.params.type=1:"function"===this.thingsType&&(this.params.type=2,this.functionData=this.runningData.filter((function(t){return 0==t.isReadonly})))},updateParam:function(t){},editFunc:function(t){this.dialogValue=!0,this.canSend=!0,this.funVal={},this.getValueName(t),this.from=t},updateDeviceStatus:function(t){3==t.status?this.title="在线模式":1==t.isShadow?this.title="影子模式":this.title="离线模式",this.$emit("statusEvent",this.deviceInfo.status)},getValueName:function(t){this.funVal[t.id]=t.value},sendService:function(){var t=this;console.log("下发指令",this.showValue);try{this.funVal[this.from.id]=this.showValue;var e={serialNumber:this.serialNumber,productId:this.params.productId,remoteCommand:this.funVal,identifier:this.from.id,slaveId:this.params.slaveId,modelName:this.from.name,isShadow:3!=this.device.status,type:this.from.type};Object(r["b"])(e).then((function(e){200==e.code&&t.$message({type:"success",message:"服务调用成功!"})}))}finally{this.dialogValue=!1}},getShowValue:function(t){var e=this;switch(this.from.datatype.type){case d:var a=this.from.datatype.enumList;a.forEach((function(a){a.value===t&&(e.showValue=a.text)}));break;case u:case l:this.showValue=t;case c:this.showValue=1==t?this.from.datatype.trueText:this.from.datatype.falseText;break}},changeSelect:function(){this.$forceUpdate()},justicNumber:function(){if(this.canSend=!0,this.from.datatype.max<this.funVal[this.from.identity]||this.from.datatype.min>this.funVal[this.from.identity])return this.canSend=!1,!0;this.$forceUpdate()},getDeviceFuncLog:function(){var t=this,e={serialNumber:this.params.serialNumber+"_"+this.params.slaveId};Object(r["a"])(e).then((function(e){t.logList=e.rows}))},updateData:function(t){var e=this;t.data&&t.data.forEach((function(t){e.runningData.some((function(a,n){if(t.slaveId===a.slaveId&&t.id==a.id){var i=e.runningData[n];return i.ts=t.ts,i.value=t.value,"enum"==a.datatype.type?a.datatype.enumList.forEach((function(t){t.value==i.value&&(i.value=t.text)})):"bool"==a.datatype.type&&(i.value=0==i.value?a.datatype.falseText:a.datatype.trueText),e.$set(e.runningData,n,i),!0}}))}))}}},p=f,m=(a("df7b"),a("2877")),h=Object(m["a"])(p,n,i,!1,null,"229ed0c8",null);e["default"]=h.exports},a824:function(t,e,a){"use strict";a.d(e,"e",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return r})),a.d(e,"f",(function(){return o})),a.d(e,"b",(function(){return u})),a.d(e,"d",(function(){return l}));var n=a("b775");function i(t){return Object(n["a"])({url:"/iot/salve/list",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/iot/salve/"+t,method:"get"})}function r(t){return Object(n["a"])({url:"/iot/salve",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/iot/salve",method:"put",data:t})}function u(t){return Object(n["a"])({url:"/iot/salve/"+t,method:"delete"})}function l(t){return Object(n["a"])({url:"/iot/salve/listByPId",method:"get",params:t})}},ba95:function(t,e,a){"use strict";a.d(e,"a",(function(){return i}));var n=a("b775");function i(t){return Object(n["a"])({url:"/iot/simulate/list",method:"get",params:t})}},df78:function(t,e,a){},df7b:function(t,e,a){"use strict";a("df78")},ed08:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"e",(function(){return i})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return r})),a.d(e,"f",(function(){return o})),a.d(e,"d",(function(){return u}));a("53ca"),a("ac1f"),a("5319"),a("14d9"),a("a15b"),a("d81d"),a("b64b"),a("d3b7"),a("159b"),a("fb6a"),a("d9e2"),a("a630"),a("3ca3"),a("6062"),a("ddb0"),a("25f0"),a("466d"),a("4d63"),a("c607"),a("2c3e"),a("00b4"),a("c38a");function n(t,e,a){var n,i,s,r,o,u=function u(){var l=+new Date-r;l<e&&l>0?n=setTimeout(u,e-l):(n=null,a||(o=t.apply(s,i),n||(s=i=null)))};return function(){for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];s=this,r=+new Date;var d=a&&!n;return n||(n=setTimeout(u,e)),d&&(o=t.apply(s,l),s=l=null),o}}function i(t,e){for(var a=Object.create(null),n=t.split(","),i=0;i<n.length;i++)a[n[i]]=!0;return e?function(t){return a[t.toLowerCase()]}:function(t){return a[t]}}var s="export default ",r={html:{indent_size:"2",indent_char:" ",max_preserve_newlines:"-1",preserve_newlines:!1,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"separate",brace_style:"end-expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!1,end_with_newline:!0,wrap_line_length:"110",indent_inner_html:!0,comma_first:!1,e4x:!0,indent_empty_lines:!0},js:{indent_size:"2",indent_char:" ",max_preserve_newlines:"-1",preserve_newlines:!1,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"normal",brace_style:"end-expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!0,end_with_newline:!0,wrap_line_length:"110",indent_inner_html:!0,comma_first:!1,e4x:!0,indent_empty_lines:!0}};function o(t){return t.replace(/( |^)[a-z]/g,(function(t){return t.toUpperCase()}))}function u(t){return/^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(t)}}}]);