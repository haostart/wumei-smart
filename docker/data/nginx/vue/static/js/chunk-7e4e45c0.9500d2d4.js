(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e4e45c0"],{2682:function(t,e,r){},3021:function(t,e,r){"use strict";r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"b",(function(){return c}));var i=r("b775");function a(t,e){return Object(i["a"])({url:"/sip/sipconfig/"+t+"/"+e,method:"get"})}function n(t){return Object(i["a"])({url:"/sip/sipconfig",method:"post",data:t})}function o(t){return Object(i["a"])({url:"/sip/sipconfig",method:"put",data:t})}function c(t){return Object(i["a"])({url:"/sip/sipconfig/product/"+t,method:"delete"})}},"4efc":function(t,e,r){t.exports=r.p+"static/img/gateway.5a51e30f.png"},"52bb":function(t,e,r){t.exports=r.p+"static/img/product.66c3c4d5.png"},"98bc":function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{padding:"6px"}},[i("el-card",{staticStyle:{"margin-bottom":"5px"}},[i("el-form",{ref:"queryForm",staticStyle:{"margin-bottom":"-20px"},attrs:{model:t.queryParams,inline:!0,"label-width":"68px"}},[i("el-form-item",{attrs:{label:"产品名称",prop:"productName"}},[i("el-input",{attrs:{placeholder:"请输入产品名称",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.productName,callback:function(e){t.$set(t.queryParams,"productName",e)},expression:"queryParams.productName"}})],1),i("el-form-item",{attrs:{label:"分类名称",prop:"categoryName"}},[i("el-input",{attrs:{placeholder:"请输入产品分类名称",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.categoryName,callback:function(e){t.$set(t.queryParams,"categoryName",e)},expression:"queryParams.categoryName"}})],1),i("el-form-item",{attrs:{label:"状态",prop:"status"}},[i("el-select",{attrs:{placeholder:"请选择状态",clearable:"",size:"small"},model:{value:t.queryParams.status,callback:function(e){t.$set(t.queryParams,"status",e)},expression:"queryParams.status"}},t._l(t.dict.type.iot_product_status,(function(t){return i("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.handleQuery}},[t._v("搜索")]),i("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:t.resetQuery}},[t._v("重置")])],1),i("el-form-item",{staticStyle:{float:"right"}},[i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:product:add"],expression:"['iot:product:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:function(e){return t.handleEditProduct(0)}}},[t._v("新增")])],1)],1)],1),i("el-card",{staticStyle:{"padding-bottom":"100px"}},[i("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{gutter:30}},t._l(t.productList,(function(e,a){return i("el-col",{key:a,staticStyle:{"margin-bottom":"30px","text-align":"center"},attrs:{xs:24,sm:12,md:12,lg:8,xl:6}},[i("el-card",{staticClass:"card-item",attrs:{"body-style":{padding:"20px"},shadow:"always"}},[i("el-row",{attrs:{type:"flex",gutter:10,justify:"space-between"}},[i("el-col",{staticStyle:{"text-align":"left"},attrs:{span:20}},[i("el-link",{staticStyle:{"font-weight":"bold","font-size":"16px","line-height":"32px","white-space":"nowrap"},attrs:{type:"",underline:!1},on:{click:function(r){return t.handleEditProduct(e)}}},[i("svg-icon",{attrs:{"icon-class":"product"}}),t._v(" "+t._s(e.productName)+" "),1==e.isSys?i("el-tag",{staticStyle:{"margin-left":"5px","font-weight":"200"},attrs:{type:"info",size:"mini"}},[t._v("系统")]):t._e()],1)],1),i("el-col",{attrs:{span:4}},[2==e.status?i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"取消发布",placement:"top-start"}},[i("el-button",{staticStyle:{padding:"5px"},attrs:{type:"success",size:"mini"},on:{click:function(r){return t.changeProductStatus(e.productId,1,e.deviceType)}}},[t._v("已发布")])],1):t._e(),1==e.status?i("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"现在发布",placement:"top-start"}},[i("el-button",{staticStyle:{padding:"5px"},attrs:{type:"info",size:"mini"},on:{click:function(r){return t.changeProductStatus(e.productId,2,e.deviceType)}}},[t._v("未发布")])],1):t._e()],1)],1),i("el-row",{attrs:{gutter:10}},[i("el-col",{attrs:{span:14}},[i("el-descriptions",{staticStyle:{"margin-top":"10px","white-space":"nowrap"},attrs:{column:1,size:"small"}},[i("el-descriptions-item",{attrs:{label:"所属分类"}},[i("el-link",{attrs:{type:"primary",underline:!1}},[t._v(t._s(e.categoryName))])],1),i("el-descriptions-item",{attrs:{label:"产品类型"}},[i("dict-tag",{attrs:{options:t.dict.type.iot_device_type,value:e.deviceType}})],1),i("el-descriptions-item",{attrs:{label:"联网方式"}},[i("dict-tag",{attrs:{options:t.dict.type.iot_network_method,value:e.networkMethod}})],1),i("el-descriptions-item",{attrs:{label:"设备授权"}},[1==e.isAuthorize?i("el-tag",{attrs:{type:"success",size:"mini"}},[t._v("已启用")]):i("el-tag",{attrs:{type:"info",size:"mini"}},[t._v("未启用")])],1)],1)],1),i("el-col",{attrs:{span:10}},[i("div",{staticStyle:{"margin-top":"10px"}},[null!=e.imgUrl&&""!=e.imgUrl?i("el-image",{staticStyle:{width:"100%",height:"100px","border-radius":"10px"},attrs:{lazy:"","preview-src-list":[t.baseUrl+e.imgUrl],src:t.baseUrl+e.imgUrl,fit:"cover"}}):2==e.deviceType?i("el-image",{staticStyle:{width:"100%",height:"100px","border-radius":"10px"},attrs:{"preview-src-list":[r("4efc")],src:r("4efc"),fit:"cover"}}):3==e.deviceType?i("el-image",{staticStyle:{width:"100%",height:"100px","border-radius":"10px"},attrs:{"preview-src-list":[r("c59e")],src:r("c59e"),fit:"cover"}}):i("el-image",{staticStyle:{width:"100%",height:"100px","border-radius":"10px"},attrs:{"preview-src-list":[r("52bb")],src:r("52bb"),fit:"cover"}})],1)])],1),i("el-button-group",{staticStyle:{"margin-top":"15px",height:"28px"}},[i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:product:query"],expression:"['iot:product:query']"}],attrs:{size:"mini",type:"primary",icon:"el-icon-view"},on:{click:function(r){return t.handleEditProduct(e)}}},[t._v("详情")]),1==e.status?i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:product:remove"],expression:"['iot:product:remove']"}],attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(r){return t.handleDelete(e)}}},[t._v("删除")]):t._e(),2==e.status?i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:product:edit"],expression:"['iot:product:edit']"}],attrs:{size:"mini",type:"success",icon:"el-icon-s-check",disabled:1!=e.isAuthorize},on:{click:function(r){return t.handleDeviceAuthorize(e)}}},[t._v("设备授权")]):t._e(),i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:device:query"],expression:"['iot:device:query']"}],attrs:{size:"mini",type:"warning",icon:"el-icon-search"},on:{click:function(r){return t.handleViewDevice(e.productId)}}},[t._v("查看设备")])],1)],1)],1)})),1),0==t.total?i("el-empty",{attrs:{description:"暂无数据，请添加产品"}}):t._e(),i("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize,pageSizes:[12,24,36,60]},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}}),i("el-dialog",{attrs:{title:t.title,visible:t.open,width:"500px","append-to-body":""},on:{"update:visible":function(e){t.open=e}}},[i("el-link",{staticStyle:{"padding-left":"10px"},attrs:{type:"danger",underline:!1}},[t._v("该功能暂未实现，参考教程和项目的SDK示例")]),i("el-form",{attrs:{"label-width":"80px"}},[i("el-form-item",{attrs:{label:"设备类型"}},[i("el-radio-group",{model:{value:t.form.datatype,callback:function(e){t.$set(t.form,"datatype",e)},expression:"form.datatype"}},t._l(t.dict.type.iot_device_chip,(function(e){return i("el-radio",{key:e.value,staticStyle:{"margin-top":"15px",width:"160px"},attrs:{label:e.value}},[t._v(t._s(e.label))])})),1)],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary",disabled:""},on:{click:t.downloadSdk}},[t._v("下 载")]),i("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1)],1)],1)},a=[],n=r("c7eb"),o=r("1da1"),c=(r("a9e3"),r("d3b7"),r("14d9"),r("9b9c")),s=r("3021"),u=r("e350"),l={name:"Product",dicts:["iot_yes_no","iot_product_status","iot_device_type","iot_network_method","iot_vertificate_method","iot_device_chip"],data:function(){return{loading:!0,total:0,productList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:12,productName:null,categoryId:null,categoryName:null,tenantId:null,tenantName:null,isSys:null,status:null,deviceType:null,networkMethod:null},form:{},baseUrl:"/prod-api"}},created:function(){this.getList()},activated:function(){var t=this.$route.query.t;null!=t&&t!=this.uniqueId&&(this.uniqueId=t,this.queryParams.pageNum=Number(this.$route.query.pageNum),this.getList())},methods:{getList:function(){var t=this;this.loading=!0,Object(c["f"])(this.queryParams).then((function(e){t.productList=e.rows,t.total=e.total,t.loading=!1}))},getDeviceCountByProductId:function(t){return new Promise((function(e,r){Object(c["d"])(t).then((function(t){e(t)})).catch((function(t){r(t)}))}))},changeProductStatus:function(t,e,r){var i=this;return Object(o["a"])(Object(n["a"])().mark((function a(){var o,s,l,d;return Object(n["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(o="确定取消发布？",2!=e){a.next=9;break}if(s=Object(u["a"])(["iot:product:add"]),s){a.next=6;break}return i.$modal.alertError("没有操作权限"),a.abrupt("return");case 6:o="产品发布后，可以创建对应的设备",a.next=18;break;case 9:if(1!=e){a.next=18;break}if(l=Object(u["a"])(["iot:product:edit"]),l){a.next=14;break}return i.$modal.alertError("没有操作权限"),a.abrupt("return");case 14:return a.next=16,i.getDeviceCountByProductId(t);case 16:d=a.sent,d.data>0&&(o="重要提示：产品下已有 "+d.data+" 个设备，取消发布可以修改产品信息和模型，重新发布后对应设备状态将会被重置！");case 18:i.$confirm(o,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a={};a.productId=t,a.status=e,a.deviceType=r,Object(c["b"])(a).then((function(t){i.getList(),i.$modal.alertSuccess(t.msg)})).catch((function(){}))})).catch((function(){}));case 19:case"end":return a.stop()}}),a)})))()},handleViewDevice:function(t){this.$router.push({path:"/iot/device",query:{t:Date.now(),productId:t}})},cancel:function(){this.open=!1,this.reset()},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleGeneratorSDK:function(t){this.title="生成SDK",this.open=!0},downloadSdk:function(){this.$download.zip("/iot/tool/genSdk?deviceChip=1","fastbee-sdk")},handleDelete:function(t){var e=this,r=t.productId||this.ids,i="";this.$modal.confirm('是否确认删除产品编号为"'+r+'"的数据项？').then((function(){return Object(s["b"])(r).then((function(t){})),Object(c["c"])(r).then((function(t){i=t.msg}))})).then((function(){e.getList(),e.$modal.msgSuccess(i)})).catch((function(){}))},handleEditProduct:function(t){var e=0;0!=t&&(e=t.productId||this.ids),this.$router.push({path:"/iot/product-edit",query:{productId:e,pageNum:this.queryParams.pageNum}})},handleDeviceAuthorize:function(t){var e=t.productId;this.$router.push({path:"/iot/product-edit",query:{productId:e,tabPanelName:"productAuthorize",pageNum:this.queryParams.pageNum}})}}},d=l,p=(r("b16a"),r("2877")),m=Object(p["a"])(d,i,a,!1,null,"75a3baea",null);e["default"]=m.exports},"9b9c":function(t,e,r){"use strict";r.d(e,"f",(function(){return a})),r.d(e,"g",(function(){return n})),r.d(e,"e",(function(){return o})),r.d(e,"a",(function(){return c})),r.d(e,"i",(function(){return s})),r.d(e,"d",(function(){return u})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return d})),r.d(e,"h",(function(){return p}));var i=r("b775");function a(t){return Object(i["a"])({url:"/iot/product/list",method:"get",params:t})}function n(){return Object(i["a"])({url:"/iot/product/shortList",method:"get"})}function o(t){return Object(i["a"])({url:"/iot/product/"+t,method:"get"})}function c(t){return Object(i["a"])({url:"/iot/product",method:"post",data:t})}function s(t){return Object(i["a"])({url:"/iot/product",method:"put",data:t})}function u(t){return Object(i["a"])({url:"/iot/product/deviceCount/"+t,method:"get"})}function l(t){return Object(i["a"])({url:"/iot/product/status/",method:"put",data:t})}function d(t){return Object(i["a"])({url:"/iot/product/"+t,method:"delete"})}function p(t){return Object(i["a"])({url:"/iot/product/queryByTemplateId",method:"get",params:t})}},b16a:function(t,e,r){"use strict";r("2682")},c59e:function(t,e,r){t.exports=r.p+"static/img/video.fb1e1b71.png"},e350:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7"),r("caad"),r("2532");var i=r("4360");function a(t){if(t&&t instanceof Array&&t.length>0){var e=i["a"].getters&&i["a"].getters.permissions,r=t,a="*:*:*",n=e.some((function(t){return a===t||r.includes(t)}));return!!n}return console.error("need roles! Like checkPermi=\"['system:user:add','system:user:edit']\""),!1}}}]);