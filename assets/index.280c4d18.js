import{A as e,_ as i,L as o,F as t,x as r,a3 as n,aa as a}from"./vendor.517bedfb.js";import{_ as s}from"./TableImg.7d5459f2.js";import{_ as d}from"./BasicForm.dc1a8526.js";import{u as l}from"./useTable.04146873.js";import{_ as c,g as m,c as p,s as u,d as f}from"./Drawer.a7b95ee0.js";import{u as j}from"./index.af0d4e7b.js";/* empty css              *//* empty css              */import"./useForm.d9f38e8c.js";import"./index.a6fa69dd.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.45b2e0d5.js";import"./index.c8e28192.js";import"./onMountedOrActivated.e21098c8.js";/* empty css              */import"./useSortable.02c5aeae.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.f2387e1f.js";/* empty css              *//* empty css              *//* empty css              */import"./download.6d82b677.js";import"./base64Conver.bb012c73.js";import"./index.f9866302.js";import"./directory.31b975a4.js";import"./Tree.vue_vue&type=style&index=0&lang.6368a1a6.js";import"./useContextMenu.63aa4de5.js";/* empty css              */var b=e({name:"FlowList",components:{BasicTable:s,RoleDrawer:c,TableAction:d},setup(){const[e,{openDrawer:i}]=j(),[o,{reload:t}]=l({title:"审批列表",api:m,columns:p,formConfig:{labelWidth:120,schemas:u},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:o,registerDrawer:e,handleCreate:function(){i(!0,{isUpdate:!1})},handleEdit:function(e){i(!0,{record:e,isUpdate:!0})},handleDelete:function(e){return i=this,o=null,r=function*(){yield f({dicId:e.dicId}),t()},new Promise(((e,t)=>{var n=e=>{try{s(r.next(e))}catch(i){t(i)}},a=e=>{try{s(r.throw(e))}catch(i){t(i)}},s=i=>i.done?e(i.value):Promise.resolve(i.value).then(n,a);s((r=r.apply(i,o)).next())}));var i,o,r},handleSuccess:function(){t()}}}});const x=a(" 新增审批 ");b.render=function(e,a,s,d,l,c){const m=i("a-button"),p=i("TableAction"),u=i("BasicTable"),f=i("RoleDrawer");return o(),t("div",null,[r(u,{onRegister:e.registerTable},{toolbar:n((()=>[r(m,{type:"primary",onClick:e.handleCreate},{default:n((()=>[x])),_:1},8,["onClick"])])),action:n((({record:i})=>[r(p,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),r(f,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export{b as default};
