(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20128fdd","chunk-2d0a3715"],{"01ca":function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"g",(function(){return i})),n.d(e,"a",(function(){return l})),n.d(e,"e",(function(){return c})),n.d(e,"i",(function(){return u})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return s})),n.d(e,"h",(function(){return p}));var o=n("b775");function r(t){return Object(o["a"])({url:"/iot/model/list",method:"get",params:t})}function a(t){return Object(o["a"])({url:"/iot/model/"+t,method:"get"})}function i(t){return Object(o["a"])({url:"/iot/model/permList/"+t,method:"get"})}function l(t){return Object(o["a"])({url:"/iot/model",method:"post",data:t})}function c(t){return Object(o["a"])({url:"/iot/model/import",method:"post",data:t})}function u(t){return Object(o["a"])({url:"/iot/model",method:"put",data:t})}function d(t){return Object(o["a"])({url:"/iot/model/"+t,method:"delete"})}function s(t){return Object(o["a"])({url:"/iot/model/cache/"+t,method:"get"})}function p(t){return Object(o["a"])({url:"/iot/model/synchron",method:"post",data:t})}},1464:function(t,e,n){"use strict";n("7a34")},"7a34":function(t,e,n){},bbfb:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"padding-left":"20px"}},[n("el-row",{attrs:{gutter:10}},[n("el-col",{attrs:{span:14}},[n("el-row",{staticClass:"mb8",attrs:{gutter:10}},[n("el-col",{attrs:{span:1.5}},[n("el-button",{attrs:{type:"warning",plain:"",icon:"el-icon-refresh",size:"mini"},on:{click:t.getList}},[t._v("刷新")])],1),n("el-tag",{staticStyle:{"margin-left":"15px"},attrs:{type:"danger"}},[t._v("该功能暂不可用,后面版本发布")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{"margin-bottom":"60px","margin-top":"20px"},attrs:{data:t.modelList,border:"",size:"small"}},[n("el-table-column",{attrs:{label:"名称",align:"center",prop:"modelName"}}),n("el-table-column",{attrs:{label:"标识符",align:"center",prop:"identifier"}}),n("el-table-column",{attrs:{label:"物模型类别",align:"center",prop:"type"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("dict-tag",{attrs:{options:t.dict.type.iot_things_type,value:e.row.type}})]}}])}),n("el-table-column",{attrs:{label:"数据类型",align:"center",prop:"datatype"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("dict-tag",{attrs:{options:t.dict.type.iot_data_type,value:e.row.datatype}})]}}])}),n("el-table-column",{attrs:{label:"部件",align:"center",prop:"part"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.part)+" 系统定义的部件 ")]}}])})],1),n("el-divider",[t._v("高级功能")]),n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"自定义页面",prop:"page"}},[n("el-input",{attrs:{placeholder:"请输入自定义页面"},model:{value:t.form.page,callback:function(e){t.$set(t.form,"page",e)},expression:"form.page"}})],1)],1)],1),n("el-col",{attrs:{span:8,offset:2}},[n("div",{staticClass:"phone"},[n("div",{staticClass:"phone-container"})]),n("div",{staticStyle:{"text-align":"center","margin-top":"15px",width:"370px"}},[t._v("界面展示")])])],1)],1)},r=[],a=n("01ca"),i={name:"device-log",dicts:["iot_things_type","iot_data_type","iot_yes_no"],props:{product:{type:Object,default:null}},data:function(){return{loading:!1,modelList:[],title:"",queryParams:{productId:0,type:4},form:{},productInfo:{}}},watch:{product:function(t,e){this.productInfo=t,this.productInfo&&0!=this.productInfo.productId&&(this.queryParams.productId=this.productInfo.productId,this.getList())}},created:function(){},methods:{getList:function(){var t=this;this.loading=!0,Object(a["f"])(this.queryParams).then((function(e){t.modelList=e.rows,t.total=e.total,t.loading=!1}))}}},l=i,c=(n("1464"),n("2877")),u=Object(c["a"])(l,o,r,!1,null,"acd2e2f8",null);e["default"]=u.exports}}]);