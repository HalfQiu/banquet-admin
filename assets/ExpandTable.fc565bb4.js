import{A as e,_ as o,L as i,F as t,a3 as n,x as a,J as r}from"./vendor.f90788d9.js";import{_ as s}from"./TableImg.6c52b8df.js";import{g as d}from"./BasicForm.12c2408d.js";import{u as p}from"./useTable.cc31026c.js";import{P as c}from"./index.2d7cf9f2.js";import{getBasicColumns as l}from"./tableData.3f3da3f1.js";import{d as m}from"./table.76f29b53.js";/* empty css              *//* empty css              */import"./useForm.182501aa.js";import"./index.27af0dce.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.206cf3e2.js";import"./index.99f4ae53.js";import"./onMountedOrActivated.a9c9ce1d.js";/* empty css              */import"./useSortable.22060609.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.1b0403ed.js";/* empty css              *//* empty css              *//* empty css              */import"./download.ca2729e5.js";import"./base64Conver.bb012c73.js";import"./index.1d6c4e00.js";/* empty css              *//* empty css              */import"./useContentViewHeight.f4cabba7.js";var b=e({components:{BasicTable:s,TableAction:d,PageWrapper:c},setup(){const[e]=p({api:m,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:l(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});b.render=function(e,s,d,p,c,l){const m=o("TableAction"),b=o("BasicTable"),j=o("PageWrapper");return i(),t(j,{title:"可展开表格",content:"不可与scroll共用。TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:n((()=>[a(b,{onRegister:e.registerTable},{expandedRowRender:n((({record:e})=>[a("span",null,"No: "+r(e.no),1)])),action:n((({record:o})=>[a(m,{stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,o)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,o)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])),_:1})};export{b as default};
