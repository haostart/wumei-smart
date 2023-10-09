(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8bca332a","chunk-63f48a62"],{"30fc":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:"选择产品",visible:e.open,width:"600px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[r("div",{staticStyle:{"margin-top":"-55px"}},[r("el-divider",{staticStyle:{"margin-top":"-30px"}}),r("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[r("el-form-item",{attrs:{label:"产品名称",prop:"productName"}},[r("el-input",{attrs:{placeholder:"请输入产品名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.productName,callback:function(t){e.$set(e.queryParams,"productName",t)},expression:"queryParams.productName"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"singleTable",attrs:{data:e.productList,"highlight-current-row":"",size:"mini"},on:{"row-click":e.rowClick}},[r("el-table-column",{attrs:{label:"选择",width:"50",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("input",{attrs:{type:"radio",name:"product"},domProps:{checked:e.row.isSelect}})]}}])}),r("el-table-column",{attrs:{label:"产品名称",align:"center",prop:"productName"}}),r("el-table-column",{attrs:{label:"分类名称",align:"center",prop:"categoryName"}}),r("el-table-column",{attrs:{label:"租户名称",align:"center",prop:"tenantName"}}),r("el-table-column",{attrs:{label:"联网方式",align:"center",prop:"networkMethod"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.iot_network_method,value:t.row.networkMethod}})]}}])}),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.createTime,"{y}-{m}-{d}")))])]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.confirmSelectProduct}},[e._v("确定")]),r("el-button",{attrs:{type:"info"},on:{click:e.closeDialog}},[e._v("关 闭")])],1)])},i=[],a=(r("a9e3"),r("9b9c")),o={name:"SipProductList",dicts:["iot_vertificate_method","iot_network_method"],props:{productId:{type:Number,default:0}},data:function(){return{loading:!0,total:0,open:!1,productList:[],product:{},queryParams:{pageNum:1,pageSize:10,productName:null,categoryId:null,categoryName:null,tenantId:null,tenantName:null,isSys:null,status:2,deviceType:3,networkMethod:null}}},created:function(){},methods:{getList:function(){var e=this;this.loading=!0,Object(a["f"])(this.queryParams).then((function(t){for(var r=0;r<t.rows.length;r++)t.rows[r].isSelect=!1;e.productList=t.rows,e.total=t.total,0!=e.productId&&e.setRadioSelected(e.productId),e.loading=!1}))},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},rowClick:function(e){null!=e&&(this.setRadioSelected(e.productId),this.product=e)},setRadioSelected:function(e){for(var t=0;t<this.productList.length;t++)this.productList[t].productId==e?this.productList[t].isSelect=!0:this.productList[t].isSelect=!1},confirmSelectProduct:function(){this.$emit("productEvent",this.product),this.open=!1},closeDialog:function(){this.open=!1}}},c=o,l=r("2877"),u=Object(l["a"])(c,n,i,!1,null,null,null);t["default"]=u.exports},"36eb":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{padding:"6px"}},[r("el-card",{staticStyle:{"margin-bottom":"6px"}},[r("el-form",{ref:"queryForm",staticStyle:{"margin-bottom":"-20px"},attrs:{model:e.queryParams,inline:!0,"label-width":"60px"}},[r("el-form-item",{attrs:{label:"设备ID",prop:"deviceSipId"}},[r("el-input",{attrs:{placeholder:"请输入设备编号",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.deviceSipId,callback:function(t){e.$set(e.queryParams,"deviceSipId",t)},expression:"queryParams.deviceSipId"}})],1),r("el-form-item",{attrs:{label:"通道ID",prop:"channelSipId"}},[r("el-input",{attrs:{placeholder:"请输入通道ID",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.channelSipId,callback:function(t){e.$set(e.queryParams,"channelSipId",t)},expression:"queryParams.channelSipId"}})],1),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-select",{attrs:{placeholder:"请选择状态",clearable:"",size:"small"},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.dict.type.sip_gen_status,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1),r("el-form-item",{staticStyle:{float:"right"}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:video:add"],expression:"['iot:video:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini",disabled:e.isGeneralUser},on:{click:e.handleAdd}},[e._v("批量生成")]),r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:video:remove"],expression:"['iot:video:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple||e.isGeneralUser},on:{click:e.handleDelete}},[e._v("批量删除")])],1)],1)],1),r("el-card",{staticStyle:{"margin-bottom":"5px"}},[r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.sipidList,size:""},on:{"selection-change":e.handleSelectionChange,"cell-dblclick":e.celldblclick}},[r("el-table-column",{attrs:{type:"selection",selectable:e.selectable,width:"55",align:"center"}}),r("el-table-column",{attrs:{label:"设备编号",align:"center",prop:"deviceSipId"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-link",{attrs:{underline:!1,type:"primary"},on:{click:function(r){return e.handleViewDevice(t.row.deviceSipId)}}},[e._v(e._s(t.row.deviceSipId))])]}}])}),r("el-table-column",{attrs:{label:"通道ID",align:"center",prop:"channelSipId"}}),r("el-table-column",{attrs:{label:"状态",align:"center",prop:"status",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.sip_gen_status,value:t.row.status,size:"mini"}})]}}])}),r("el-table-column",{attrs:{label:"所属产品",align:"center",prop:"productName"}}),r("el-table-column",{attrs:{label:"设备类型",align:"center",prop:"deviceType"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.video_type,value:t.row.deviceType}})]}}])}),r("el-table-column",{attrs:{label:"通道类型",align:"center",prop:"channelType"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("dict-tag",{attrs:{options:e.dict.type.channel_type,value:t.row.channelType}})]}}])}),r("el-table-column",{attrs:{label:"行政区域",align:"center",prop:"citycode"}}),r("el-table-column",{attrs:{label:"注册时间",align:"center",prop:"registerTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.registerTime,"{y}-{m}-{d} {h}:{m}:{s}")))])]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total > 0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"450px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[r("el-form",{ref:"createForm",attrs:{model:e.createForm,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"行政区划"}},[r("el-cascader",{attrs:{options:e.cityOptions,"change-on-select":""},on:{change:e.changeProvince},model:{value:e.createForm.city,callback:function(t){e.$set(e.createForm,"city",t)},expression:"createForm.city"}})],1),r("el-form-item",{attrs:{label:"设备类型",prop:"deviceType"}},[r("el-select",{attrs:{placeholder:"请选择设备类型"},model:{value:e.createForm.deviceType,callback:function(t){e.$set(e.createForm,"deviceType",t)},expression:"createForm.deviceType"}},e._l(e.dict.type.video_type,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"通道类型",prop:"channelType"}},[r("el-select",{attrs:{placeholder:"请选择设备类型"},model:{value:e.createForm.channelType,callback:function(t){e.$set(e.createForm,"channelType",t)},expression:"createForm.channelType"}},e._l(e.dict.type.channel_type,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"所属产品",prop:"productName"}},[r("el-input",{attrs:{readonly:"",placeholder:"请选择产品"},model:{value:e.createForm.productName,callback:function(t){e.$set(e.createForm,"productName",t)},expression:"createForm.productName"}},[r("el-button",{attrs:{slot:"append"},on:{click:function(t){return e.selectProduct()}},slot:"append"},[e._v("选择")])],1)],1),r("el-form-item",{attrs:{label:"通道数量",prop:"createNum"}},[r("el-input-number",{staticStyle:{width:"330px"},attrs:{"controls-position":"right",placeholder:"请输入生成通道数量",type:"number"},model:{value:e.createForm.createNum,callback:function(t){e.$set(e.createForm,"createNum",t)},expression:"createForm.createNum"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("生 成")]),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),r("product-list",{ref:"productList",on:{productEvent:function(t){return e.getProductData(t)}}})],1)},i=[],a=(r("14d9"),r("d81d"),r("584f")),o=r("5a6f"),c=r("ef6c"),l=r("e2de"),u=r("30fc"),s={name:"Sip",dicts:["sip_gen_status","video_type","channel_type"],components:{productList:u["default"]},props:{product:{type:Object,default:null}},watch:{product:function(e,t){this.productInfo=e,this.productInfo&&0!=this.productInfo.productId&&(this.queryParams.productId=this.productInfo.productId,this.deviceParams.productId=this.productInfo.productId,this.getList())}},data:function(){return{isGeneralUser:!0,loading:!0,ids:[],multiple:!0,total:0,sipidList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,deviceSipId:null,deviceChannelId:null,status:null},createForm:{city:"",deviceType:"",channelType:"",createNum:1,remark:"",area:""},form:{},productInfo:{},cityOptions:c["regionData"],city:"",rules:{protocol:[{required:!0,message:"默认播放协议不能为空",trigger:"blur"}],ip:[{required:!0,message:"服务器ip不能为空",trigger:"blur"}],domain:[{required:!0,message:"服务器域名不能为空",trigger:"blur"}],secret:[{required:!0,message:"流媒体密钥不能为空",trigger:"blur"}],portHttp:[{required:!0,message:"http端口不能为空",trigger:"blur"}],portHttps:[{required:!0,message:"https端口不能为空",trigger:"blur"}],portRtmp:[{required:!0,message:"rtmp端口不能为空",trigger:"blur"}],portRtsp:[{required:!0,message:"rtsp端口不能为空",trigger:"blur"}],rtpPortRange:[{required:!0,message:"rtp端口范围不能为空",trigger:"blur"}],delFlag:[{required:!0,message:"删除标志不能为空",trigger:"blur"}],createBy:[{required:!0,message:"创建者不能为空",trigger:"blur"}],createTime:[{required:!0,message:"创建时间不能为空",trigger:"blur"}]}}},created:function(){-1===this.$store.state.user.roles.indexOf("general")&&(this.isGeneralUser=!1,this.getMediaUpdate()),this.getList()},methods:{handleViewDevice:function(e){this.$router.push({path:"/iot/device",query:{t:Date.now(),sn:e}})},selectProduct:function(){this.open=!1,this.$refs.productList.open=!0,this.$refs.productList.getList()},getProductData:function(e){this.open=!0,this.createForm.productId=e.productId,this.createForm.productName=e.productName,this.createForm.tenantId=e.tenantId,this.createForm.tenantName=e.tenantName},getMediaUpdate:function(){var e=this;Object(o["d"])().then((function(t){e.form=t.data}))},changeProvince:function(e){if(e&&null!=e[0]&&null!=e[1]&&null!=e[2]){var t=c["CodeToText"][e[0]]+"/"+c["CodeToText"][e[1]]+"/"+c["CodeToText"][e[2]];this.createForm.citycode=t}},getDeviceBySerialNumber:function(e){var t=this;this.openDevice=!0,Object(a["f"])(e).then((function(e){t.device=e.data}))},getList:function(){var e=this;Object(l["e"])(this.queryParams).then((function(t){e.sipidList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.createForm={id:null,deviceSipId:null,channelSipId:null,status:0,registertime:null,createBy:null,createTime:null,updateBy:null,updateTime:null,remark:null,createNum:1},this.resetForm("createForm")},handleQuery:function(){this.loading=!0,this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.id})),this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="生成设备通道"},handleUpdate:function(e){var t=this;this.reset();var r=e.id||this.ids;console.log(e),Object(l["d"])(r).then((function(e){t.createForm=e.data,t.open=!0,t.title="修改产品分类"}))},submitForm:function(){var e=this;this.createForm.createNum<1?this.$modal.alertError("通道数量至少一个"):this.createForm.productId&&0!=this.createForm.productId?(this.createForm.deviceSipId=this.createForm.city[2]+"0000"+this.createForm.deviceType+"0",this.createForm.channelSipId=this.createForm.city[2]+"0000"+this.createForm.channelType+"0",""!==this.createForm.deviceType&&""!==this.createForm.channelType&&3===this.createForm.city.length?(console.log(this.createForm),Object(l["a"])(this.createForm.createNum,this.createForm).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()}))):this.$message({type:"error",message:"请选择地区，设备类型，通道类型！！"})):this.$modal.alertError("请选择所属产品")},handleDelete:function(e){var t=this,r=e.id||this.ids;this.$modal.confirm('是否确认删除ID为"'+r+'"的数据项？').then((function(){return Object(l["c"])(r)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},selectable:function(e){return 2!=e.status&&!this.isGeneralUser},celldblclick:function(e,t,r,n){var i=this;this.$copyText(e[t.property]).then((function(e){i.onCopy()}),(function(e){this.onError()}))},onCopy:function(){this.$notify({title:"成功",message:"复制成功！",type:"success",offset:50,duration:2e3})},onError:function(){this.$notify({title:"失败",message:"复制失败！",type:"error",offset:50,duration:2e3})}}},d=s,p=(r("a346"),r("2877")),m=Object(p["a"])(d,n,i,!1,null,null,null);t["default"]=m.exports},"584f":function(e,t,r){"use strict";r.d(t,"k",(function(){return i})),r.d(t,"n",(function(){return a})),r.d(t,"l",(function(){return o})),r.d(t,"m",(function(){return c})),r.d(t,"j",(function(){return l})),r.d(t,"e",(function(){return u})),r.d(t,"c",(function(){return s})),r.d(t,"f",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"g",(function(){return m})),r.d(t,"a",(function(){return f})),r.d(t,"o",(function(){return h})),r.d(t,"b",(function(){return g})),r.d(t,"d",(function(){return y})),r.d(t,"i",(function(){return b}));var n=r("b775");function i(e){return Object(n["a"])({url:"/iot/device/list",method:"get",params:e})}function a(e){return Object(n["a"])({url:"/iot/device/unAuthlist",method:"get",params:e})}function o(e){return Object(n["a"])({url:"/iot/device/listByGroup",method:"get",params:e})}function c(e){return Object(n["a"])({url:"/iot/device/shortList",method:"get",params:e})}function l(){return Object(n["a"])({url:"/iot/device/all",method:"get"})}function u(e){return Object(n["a"])({url:"/iot/device/"+e,method:"get"})}function s(e){return Object(n["a"])({url:"/iot/device/synchronization/"+e,method:"get"})}function d(e){return Object(n["a"])({url:"/iot/device/getDeviceBySerialNumber/"+e,method:"get"})}function p(){return Object(n["a"])({url:"/iot/device/statistic",method:"get"})}function m(e){return Object(n["a"])({url:"/iot/device/runningStatus",method:"get",params:e})}function f(e){return Object(n["a"])({url:"/iot/device",method:"post",data:e})}function h(e){return Object(n["a"])({url:"/iot/device",method:"put",data:e})}function g(e){return Object(n["a"])({url:"/iot/device/"+e,method:"delete"})}function y(){return Object(n["a"])({url:"/iot/device/generator",method:"get"})}function b(e){return Object(n["a"])({url:"/iot/device/getMqttConnectData",method:"get",params:e})}},"5a6f":function(e,t,r){"use strict";r.d(t,"e",(function(){return i})),r.d(t,"d",(function(){return a})),r.d(t,"a",(function(){return o})),r.d(t,"f",(function(){return c})),r.d(t,"c",(function(){return l})),r.d(t,"b",(function(){return u}));var n=r("b775");function i(e){return Object(n["a"])({url:"/sip/mediaserver/list",method:"get",params:e})}function a(){return Object(n["a"])({url:"/sip/mediaserver/",method:"get"})}function o(e){return Object(n["a"])({url:"/sip/mediaserver",method:"post",data:e})}function c(e){return Object(n["a"])({url:"/sip/mediaserver",method:"put",data:e})}function l(e){return Object(n["a"])({url:"/sip/mediaserver/"+e,method:"delete"})}function u(e){return Object(n["a"])({url:"/sip/mediaserver/check",method:"get",params:e})}},"9b9c":function(e,t,r){"use strict";r.d(t,"f",(function(){return i})),r.d(t,"g",(function(){return a})),r.d(t,"e",(function(){return o})),r.d(t,"a",(function(){return c})),r.d(t,"i",(function(){return l})),r.d(t,"d",(function(){return u})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return d})),r.d(t,"h",(function(){return p}));var n=r("b775");function i(e){return Object(n["a"])({url:"/iot/product/list",method:"get",params:e})}function a(){return Object(n["a"])({url:"/iot/product/shortList",method:"get"})}function o(e){return Object(n["a"])({url:"/iot/product/"+e,method:"get"})}function c(e){return Object(n["a"])({url:"/iot/product",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/iot/product",method:"put",data:e})}function u(e){return Object(n["a"])({url:"/iot/product/deviceCount/"+e,method:"get"})}function s(e){return Object(n["a"])({url:"/iot/product/status/",method:"put",data:e})}function d(e){return Object(n["a"])({url:"/iot/product/"+e,method:"delete"})}function p(e){return Object(n["a"])({url:"/iot/product/queryByTemplateId",method:"get",params:e})}},a346:function(e,t,r){"use strict";r("eeab")},e2de:function(e,t,r){"use strict";r.d(t,"e",(function(){return i})),r.d(t,"d",(function(){return a})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return c})),r.d(t,"k",(function(){return l})),r.d(t,"f",(function(){return u})),r.d(t,"b",(function(){return s})),r.d(t,"g",(function(){return d})),r.d(t,"h",(function(){return p})),r.d(t,"i",(function(){return m})),r.d(t,"j",(function(){return f}));var n=r("b775");function i(e){return Object(n["a"])({url:"/sip/channel/list",method:"get",params:e})}function a(e){return Object(n["a"])({url:"/sip/channel/"+e,method:"get"})}function o(e,t){return Object(n["a"])({url:"/sip/channel/"+e,method:"post",data:t})}function c(e){return Object(n["a"])({url:"/sip/channel/"+e,method:"delete"})}function l(e,t){return Object(n["a"])({url:"/sip/player/play/"+e+"/"+t,method:"get"})}function u(e,t,r){return Object(n["a"])({url:"/sip/player/playback/"+e+"/"+t,method:"get",params:r})}function s(e,t){return Object(n["a"])({url:"/sip/player/closeStream/"+e+"/"+t,method:"get"})}function d(e,t,r){return Object(n["a"])({url:"/sip/player/playbackPause/"+e+"/"+t+"/"+r,method:"get"})}function p(e,t,r){return Object(n["a"])({url:"/sip/player/playbackReplay/"+e+"/"+t+"/"+r,method:"get"})}function m(e,t,r,i){return Object(n["a"])({url:"/sip/player/playbackSeek/"+e+"/"+t+"/"+r,method:"get",params:i})}function f(e,t,r,i){return Object(n["a"])({url:"/sip/player/playbackSpeed/"+e+"/"+t+"/"+r,method:"get",params:i})}},eeab:function(e,t,r){}}]);