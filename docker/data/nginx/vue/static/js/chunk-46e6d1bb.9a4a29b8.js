(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46e6d1bb"],{9467:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"400px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[r("el-form",{ref:"createForm",attrs:{model:e.createForm,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"行政区划"}},[r("el-cascader",{attrs:{options:e.cityOptions,"change-on-select":""},on:{change:e.changeProvince},model:{value:e.createForm.city,callback:function(t){e.$set(e.createForm,"city",t)},expression:"createForm.city"}})],1),r("el-form-item",{attrs:{label:"设备类型",prop:"deviceType"}},[r("el-select",{attrs:{placeholder:"请选择设备类型"},model:{value:e.createForm.deviceType,callback:function(t){e.$set(e.createForm,"deviceType",t)},expression:"createForm.deviceType"}},e._l(e.dict.type.video_type,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"通道类型",prop:"channelType"}},[r("el-select",{attrs:{placeholder:"请选择设备类型"},model:{value:e.createForm.channelType,callback:function(t){e.$set(e.createForm,"channelType",t)},expression:"createForm.channelType"}},e._l(e.dict.type.channel_type,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),r("el-form-item",{attrs:{label:"通道数量",prop:"createNum"}},[r("el-input-number",{staticStyle:{width:"220px"},attrs:{"controls-position":"right",placeholder:"请输入生成通道数量",type:"number"},model:{value:e.createForm.createNum,callback:function(t){e.$set(e.createForm,"createNum",t)},expression:"createForm.createNum"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("生 成")]),r("el-button",{on:{click:e.closeDialog}},[e._v("取 消")])],1)],1)},c=[],n=r("ef6c"),o=r("e2de"),i={name:"SipidDialog",dicts:["video_type","channel_type"],props:{product:{type:Object,default:null}},data:function(){return{loading:!0,title:"生成设备编号和通道",total:0,open:!1,devsipid:"",createForm:{city:"",deviceType:"",channelType:"",createNum:1},cityOptions:n["regionData"],city:"",cityCode:""}},created:function(){},methods:{changeProvince:function(e){if(e&&null!=e[0]&&null!=e[1]&&null!=e[2]){var t=n["CodeToText"][e[0]]+"/"+n["CodeToText"][e[1]]+"/"+n["CodeToText"][e[2]];this.createForm.citycode=t}},submitForm:function(){var e=this;this.createForm.createNum<1?this.$modal.alertError("通道数量至少一个"):(this.createForm.productId=this.product.productId,this.createForm.productName=this.product.productName,this.createForm.tenantId=this.product.tenantId,this.createForm.tenantName=this.product.tenantName,this.createForm.deviceSipId=this.createForm.city[2]+"0000"+this.createForm.deviceType+"0",this.createForm.channelSipId=this.createForm.city[2]+"0000"+this.createForm.channelType+"0",""!==this.createForm.deviceType&&""!==this.createForm.channelType&&3===this.createForm.city.length?Object(o["a"])(this.createForm.createNum,this.createForm).then((function(t){e.$modal.msgSuccess("已生成设备编号和通道"),e.devsipid=t.data,e.confirmSelectProduct()})):this.$message({type:"error",message:"请选择地区，设备类型，通道类型！！"}))},confirmSelectProduct:function(){this.open=!1,this.$emit("addGenEvent",this.devsipid)},closeDialog:function(){this.open=!1}}},l=i,u=r("2877"),s=Object(u["a"])(l,a,c,!1,null,"0575409a",null);t["default"]=s.exports},e2de:function(e,t,r){"use strict";r.d(t,"e",(function(){return c})),r.d(t,"d",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return i})),r.d(t,"k",(function(){return l})),r.d(t,"f",(function(){return u})),r.d(t,"b",(function(){return s})),r.d(t,"g",(function(){return p})),r.d(t,"h",(function(){return d})),r.d(t,"i",(function(){return m})),r.d(t,"j",(function(){return h}));var a=r("b775");function c(e){return Object(a["a"])({url:"/sip/channel/list",method:"get",params:e})}function n(e){return Object(a["a"])({url:"/sip/channel/"+e,method:"get"})}function o(e,t){return Object(a["a"])({url:"/sip/channel/"+e,method:"post",data:t})}function i(e){return Object(a["a"])({url:"/sip/channel/"+e,method:"delete"})}function l(e,t){return Object(a["a"])({url:"/sip/player/play/"+e+"/"+t,method:"get"})}function u(e,t,r){return Object(a["a"])({url:"/sip/player/playback/"+e+"/"+t,method:"get",params:r})}function s(e,t){return Object(a["a"])({url:"/sip/player/closeStream/"+e+"/"+t,method:"get"})}function p(e,t,r){return Object(a["a"])({url:"/sip/player/playbackPause/"+e+"/"+t+"/"+r,method:"get"})}function d(e,t,r){return Object(a["a"])({url:"/sip/player/playbackReplay/"+e+"/"+t+"/"+r,method:"get"})}function m(e,t,r,c){return Object(a["a"])({url:"/sip/player/playbackSeek/"+e+"/"+t+"/"+r,method:"get",params:c})}function h(e,t,r,c){return Object(a["a"])({url:"/sip/player/playbackSpeed/"+e+"/"+t+"/"+r,method:"get",params:c})}}}]);