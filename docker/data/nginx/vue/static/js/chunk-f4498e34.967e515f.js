(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f4498e34"],{"3eac":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container"},[o("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[o("el-form-item",{attrs:{label:"任务名称",prop:"jobName"}},[o("el-input",{attrs:{placeholder:"请输入任务名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.jobName,callback:function(t){e.$set(e.queryParams,"jobName",t)},expression:"queryParams.jobName"}})],1),o("el-form-item",{attrs:{label:"任务组名",prop:"jobGroup"}},[o("el-select",{attrs:{placeholder:"请选择任务组名",clearable:""},model:{value:e.queryParams.jobGroup,callback:function(t){e.$set(e.queryParams,"jobGroup",t)},expression:"queryParams.jobGroup"}},e._l(e.dict.type.sys_job_group,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),o("el-form-item",{attrs:{label:"任务状态",prop:"status"}},[o("el-select",{attrs:{placeholder:"请选择任务状态",clearable:""},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.dict.type.sys_job_status,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),o("el-form-item",[o("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),o("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),o("el-row",{staticClass:"mb8",attrs:{gutter:10}},[o("el-col",{attrs:{span:1.5}},[o("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:add"],expression:"['monitor:job:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),o("el-col",{attrs:{span:1.5}},[o("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:edit"],expression:"['monitor:job:edit']"}],attrs:{type:"success",plain:"",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),o("el-col",{attrs:{span:1.5}},[o("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:remove"],expression:"['monitor:job:remove']"}],attrs:{type:"danger",plain:"",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1),o("el-col",{attrs:{span:1.5}},[o("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:export"],expression:"['monitor:job:export']"}],attrs:{type:"warning",plain:"",icon:"el-icon-download",size:"mini"},on:{click:e.handleExport}},[e._v("导出")])],1),o("el-col",{attrs:{span:1.5}},[o("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:query"],expression:"['monitor:job:query']"}],attrs:{type:"info",plain:"",icon:"el-icon-s-operation",size:"mini"},on:{click:e.handleJobLog}},[e._v("日志")])],1),o("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.jobList},on:{"selection-change":e.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),o("el-table-column",{attrs:{label:"任务编号",width:"100",align:"center",prop:"jobId"}}),o("el-table-column",{attrs:{label:"任务名称",align:"center",prop:"jobName","show-overflow-tooltip":!0}}),o("el-table-column",{attrs:{label:"任务组名",align:"center",prop:"jobGroup"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("dict-tag",{attrs:{options:e.dict.type.sys_job_group,value:t.row.jobGroup}})]}}])}),o("el-table-column",{attrs:{label:"调用目标字符串",align:"center",prop:"invokeTarget","show-overflow-tooltip":!0}}),o("el-table-column",{attrs:{label:"cron执行表达式",align:"center",prop:"cronExpression","show-overflow-tooltip":!0}}),o("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-switch",{attrs:{"active-value":"0","inactive-value":"1"},on:{change:function(o){return e.handleStatusChange(t.row)}},model:{value:t.row.status,callback:function(o){e.$set(t.row,"status",o)},expression:"scope.row.status"}})]}}])}),o("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:edit"],expression:"['monitor:job:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(o){return e.handleUpdate(t.row)}}},[e._v("修改")]),o("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:remove"],expression:"['monitor:job:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(o){return e.handleDelete(t.row)}}},[e._v("删除")]),o("el-dropdown",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:changeStatus","monitor:job:query"],expression:"['monitor:job:changeStatus', 'monitor:job:query']"}],attrs:{size:"mini"},on:{command:function(o){return e.handleCommand(o,t.row)}}},[o("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-d-arrow-right"}},[e._v("更多")]),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:changeStatus"],expression:"['monitor:job:changeStatus']"}],attrs:{command:"handleRun",icon:"el-icon-caret-right"}},[e._v("执行一次")]),o("el-dropdown-item",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:query"],expression:"['monitor:job:query']"}],attrs:{command:"handleView",icon:"el-icon-view"}},[e._v("任务详细")]),o("el-dropdown-item",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["monitor:job:query"],expression:"['monitor:job:query']"}],attrs:{command:"handleJobLog",icon:"el-icon-s-operation"}},[e._v("调度日志")])],1)],1)]}}])})],1),o("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),o("el-dialog",{attrs:{title:e.title,visible:e.open,width:"800px","append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[o("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"120px"}},[o("el-row",[o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"任务名称",prop:"jobName"}},[o("el-input",{attrs:{placeholder:"请输入任务名称"},model:{value:e.form.jobName,callback:function(t){e.$set(e.form,"jobName",t)},expression:"form.jobName"}})],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"任务分组",prop:"jobGroup"}},[o("el-select",{attrs:{placeholder:"请选择任务分组"},model:{value:e.form.jobGroup,callback:function(t){e.$set(e.form,"jobGroup",t)},expression:"form.jobGroup"}},e._l(e.dict.type.sys_job_group,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{prop:"invokeTarget"}},[o("span",{attrs:{slot:"label"},slot:"label"},[e._v(" 调用方法 "),o("el-tooltip",{attrs:{placement:"top"}},[o("div",{attrs:{slot:"content"},slot:"content"},[e._v(" Bean调用示例：ryTask.ryParams('ry') "),o("br"),e._v("Class类调用示例：com.ruoyi.quartz.task.RyTask.ryParams('ry') "),o("br"),e._v("参数说明：支持字符串，布尔类型，长整型，浮点型，整型 ")]),o("i",{staticClass:"el-icon-question"})])],1),o("el-input",{attrs:{placeholder:"请输入调用目标字符串"},model:{value:e.form.invokeTarget,callback:function(t){e.$set(e.form,"invokeTarget",t)},expression:"form.invokeTarget"}})],1)],1),o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:"cron表达式",prop:"cronExpression"}},[o("el-input",{attrs:{placeholder:"请输入cron执行表达式"},model:{value:e.form.cronExpression,callback:function(t){e.$set(e.form,"cronExpression",t)},expression:"form.cronExpression"}},[o("template",{slot:"append"},[o("el-button",{attrs:{type:"primary"},on:{click:e.handleShowCron}},[e._v(" 生成表达式 "),o("i",{staticClass:"el-icon-time el-icon--right"})])],1)],2)],1)],1),o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:"执行策略",prop:"misfirePolicy"}},[o("el-radio-group",{attrs:{size:"small"},model:{value:e.form.misfirePolicy,callback:function(t){e.$set(e.form,"misfirePolicy",t)},expression:"form.misfirePolicy"}},[o("el-radio-button",{attrs:{label:"1"}},[e._v("立即执行")]),o("el-radio-button",{attrs:{label:"2"}},[e._v("执行一次")]),o("el-radio-button",{attrs:{label:"3"}},[e._v("放弃执行")])],1)],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"是否并发",prop:"concurrent"}},[o("el-radio-group",{attrs:{size:"small"},model:{value:e.form.concurrent,callback:function(t){e.$set(e.form,"concurrent",t)},expression:"form.concurrent"}},[o("el-radio-button",{attrs:{label:"0"}},[e._v("允许")]),o("el-radio-button",{attrs:{label:"1"}},[e._v("禁止")])],1)],1)],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"状态"}},[o("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.dict.type.sys_job_status,(function(t){return o("el-radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])})),1)],1)],1)],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),o("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),o("el-dialog",{staticClass:"scrollbar",attrs:{title:"Cron表达式生成器",visible:e.openCron,"append-to-body":"","destroy-on-close":""},on:{"update:visible":function(t){e.openCron=t}}},[o("crontab",{attrs:{expression:e.expression},on:{hide:function(t){e.openCron=!1},fill:e.crontabFill}})],1),o("el-dialog",{attrs:{title:"任务详细",visible:e.openView,width:"700px","append-to-body":""},on:{"update:visible":function(t){e.openView=t}}},[o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"120px",size:"mini"}},[o("el-row",[o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"任务编号："}},[e._v(e._s(e.form.jobId))]),o("el-form-item",{attrs:{label:"任务名称："}},[e._v(e._s(e.form.jobName))])],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"任务分组："}},[e._v(e._s(e.jobGroupFormat(e.form)))]),o("el-form-item",{attrs:{label:"创建时间："}},[e._v(e._s(e.form.createTime))])],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"cron表达式："}},[e._v(e._s(e.form.cronExpression))])],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"下次执行时间："}},[e._v(e._s(e.parseTime(e.form.nextValidTime)))])],1),o("el-col",{attrs:{span:24}},[o("el-form-item",{attrs:{label:"调用目标方法："}},[e._v(e._s(e.form.invokeTarget))])],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"任务状态："}},[0==e.form.status?o("div",[e._v("正常")]):1==e.form.status?o("div",[e._v("失败")]):e._e()])],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"是否并发："}},[0==e.form.concurrent?o("div",[e._v("允许")]):1==e.form.concurrent?o("div",[e._v("禁止")]):e._e()])],1),o("el-col",{attrs:{span:12}},[o("el-form-item",{attrs:{label:"执行策略："}},[0==e.form.misfirePolicy?o("div",[e._v("默认策略")]):1==e.form.misfirePolicy?o("div",[e._v("立即执行")]):2==e.form.misfirePolicy?o("div",[e._v("执行一次")]):3==e.form.misfirePolicy?o("div",[e._v("放弃执行")]):e._e()])],1)],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.openView=!1}}},[e._v("关 闭")])],1)],1)],1)},a=[],n=o("5530"),i=(o("d81d"),o("14d9"),o("a159")),s=o("bdd0"),l={components:{Crontab:s["a"]},name:"Job",dicts:["sys_job_group","sys_job_status"],data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,jobList:[],title:"",open:!1,openView:!1,openCron:!1,expression:"",queryParams:{pageNum:1,pageSize:10,jobName:void 0,jobGroup:void 0,status:void 0},form:{},rules:{jobName:[{required:!0,message:"任务名称不能为空",trigger:"blur"}],invokeTarget:[{required:!0,message:"调用目标字符串不能为空",trigger:"blur"}],cronExpression:[{required:!0,message:"cron执行表达式不能为空",trigger:"blur"}]}}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.loading=!0,Object(i["e"])(this.queryParams).then((function(t){e.jobList=t.rows,e.total=t.total,e.loading=!1}))},jobGroupFormat:function(e,t){return this.selectDictLabel(this.dict.type.sys_job_group,e.jobGroup)},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={jobId:void 0,jobName:void 0,jobGroup:void 0,invokeTarget:void 0,cronExpression:void 0,misfirePolicy:1,concurrent:1,status:"0"},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.jobId})),this.single=1!=e.length,this.multiple=!e.length},handleCommand:function(e,t){switch(e){case"handleRun":this.handleRun(t);break;case"handleView":this.handleView(t);break;case"handleJobLog":this.handleJobLog(t);break;default:break}},handleStatusChange:function(e){var t=this,o="0"===e.status?"启用":"停用";this.$modal.confirm('确认要"'+o+'""'+e.jobName+'"任务吗？').then((function(){return Object(i["b"])(e.jobId,e.status)})).then((function(){t.$modal.msgSuccess(o+"成功")})).catch((function(){e.status="0"===e.status?"1":"0"}))},handleRun:function(e){var t=this;this.$modal.confirm('确认要立即执行一次"'+e.jobName+'"任务吗？').then((function(){return Object(i["f"])(e.jobId,e.jobGroup)})).then((function(){t.$modal.msgSuccess("执行成功")})).catch((function(){}))},handleView:function(e){var t=this;Object(i["d"])(e.jobId).then((function(e){t.form=e.data,t.openView=!0}))},handleShowCron:function(){this.expression=this.form.cronExpression,this.openCron=!0},crontabFill:function(e){this.form.cronExpression=e},handleJobLog:function(e){var t=e.jobId||0;this.$router.push("/monitor/job-log/index/"+t)},handleAdd:function(){this.reset(),this.open=!0,this.title="添加任务"},handleUpdate:function(e){var t=this;this.reset();var o=e.jobId||this.ids;Object(i["d"])(o).then((function(e){t.form=e.data,t.open=!0,t.title="修改任务"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.jobId?Object(i["g"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):Object(i["a"])(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))},handleDelete:function(e){var t=this,o=e.jobId||this.ids;this.$modal.confirm('是否确认删除定时任务编号为"'+o+'"的数据项？').then((function(){return Object(i["c"])(o)})).then((function(){t.getList(),t.$modal.msgSuccess("删除成功")})).catch((function(){}))},handleExport:function(){this.download("monitor/job/export",Object(n["a"])({},this.queryParams),"job_".concat((new Date).getTime(),".xlsx"))}}},c=l,u=o("2877"),m=Object(u["a"])(c,r,a,!1,null,null,null);t["default"]=m.exports},"466d":function(e,t,o){"use strict";var r=o("c65b"),a=o("d784"),n=o("825a"),i=o("7234"),s=o("50c4"),l=o("577e"),c=o("1d80"),u=o("dc4a"),m=o("8aa5"),d=o("14c3");a("match",(function(e,t,o){return[function(t){var o=c(this),a=i(t)?void 0:u(t,e);return a?r(a,t,o):new RegExp(t)[e](l(o))},function(e){var r=n(this),a=l(e),i=o(t,r,a);if(i.done)return i.value;if(!r.global)return d(r,a);var c=r.unicode;r.lastIndex=0;var u,p=[],b=0;while(null!==(u=d(r,a))){var f=l(u[0]);p[b]=f,""===f&&(r.lastIndex=m(a,s(r.lastIndex),c)),b++}return 0===b?null:p}]}))},a159:function(e,t,o){"use strict";o.d(t,"e",(function(){return a})),o.d(t,"d",(function(){return n})),o.d(t,"a",(function(){return i})),o.d(t,"g",(function(){return s})),o.d(t,"c",(function(){return l})),o.d(t,"b",(function(){return c})),o.d(t,"f",(function(){return u}));var r=o("b775");function a(e){return Object(r["a"])({url:"/monitor/job/list",method:"get",params:e})}function n(e){return Object(r["a"])({url:"/monitor/job/"+e,method:"get"})}function i(e){return Object(r["a"])({url:"/monitor/job",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/monitor/job",method:"put",data:e})}function l(e){return Object(r["a"])({url:"/monitor/job/"+e,method:"delete"})}function c(e,t){var o={jobId:e,status:t};return Object(r["a"])({url:"/monitor/job/changeStatus",method:"put",data:o})}function u(e,t){var o={jobId:e,jobGroup:t};return Object(r["a"])({url:"/monitor/job/run",method:"put",data:o})}}}]);