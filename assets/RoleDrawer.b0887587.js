var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,n=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,l=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&n(e,a,t[a]);if(r)for(var a of r(t))s.call(t,a)&&n(e,a,t[a]);return e},i=(e,t,a)=>new Promise(((r,o)=>{var s=e=>{try{l(a.next(e))}catch(t){o(t)}},n=e=>{try{l(a.throw(e))}catch(t){o(t)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,n);l((a=a.apply(e,t)).next())}));import{ag as d,bq as c,A as u,r as p,j as m,u as f,_ as b,L as g,F as h,a3 as v,x as y,a1 as w}from"./vendor.517bedfb.js";import{f as j}from"./BasicForm.d5d93021.js";import{u as x}from"./useForm.3c867098.js";/* empty css              */import{s as I,e as D,u as O,f as P}from"./system.7fd39e9e.js";import{i as F}from"./index.c1a25957.js";import{B as S,a as B}from"./index.8753fb51.js";import{_}from"./Tree.vue_vue&type=style&index=0&lang.9c059fb8.js";const k=[{title:"角色名称",dataIndex:"roleName",width:200},{title:"角色值",dataIndex:"value",width:180},{title:"排序",dataIndex:"orderNo",width:50},{title:"状态",dataIndex:"status",width:120,customRender:({record:e})=>(Reflect.has(e,"pendingStatus")||(e.pendingStatus=!1),d(c,{checked:"0"===e.status,checkedChildren:"已启用",unCheckedChildren:"已禁用",loading:e.pendingStatus,onChange(t){e.pendingStatus=!0;const a=t?"0":"1",{createMessage:r}=F();I(e.id,a).then((()=>{e.status=a,r.success("已成功修改角色状态")})).catch((()=>{r.error("修改角色状态失败")})).finally((()=>{e.pendingStatus=!1}))}}))},{title:"创建时间",dataIndex:"createTime",width:180},{title:"备注",dataIndex:"remark"}],R=[{field:"roleName",label:"角色名称",component:"Input",colProps:{span:8}},{field:"status",label:"状态",component:"Select",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]},colProps:{span:8}}],T=[{field:"roleName",label:"角色名称",required:!0,component:"Input"},{field:"value",label:"角色值",required:!0,component:"Input"},{field:"status",label:"状态",component:"RadioButtonGroup",defaultValue:"0",componentProps:{options:[{label:"启用",value:"0"},{label:"停用",value:"1"}]}},{label:"备注",field:"remark",component:"InputTextArea"},{label:" ",field:"menu",slot:"menu",component:"Input"}];var N=u({name:"RoleDrawer",components:{BasicDrawer:S,BasicForm:j,BasicTree:_},emits:["success","register"],setup(e,{emit:r}){const o=p(!0),s=p([]);let n="";const[d,{resetFields:c,setFieldsValue:u,validate:b}]=x({labelWidth:90,schemas:T,showActionButtonGroup:!1}),[g,{setDrawerProps:h,closeDrawer:v}]=B((e=>i(this,null,(function*(){c(),h({confirmLoading:!1}),0===f(s).length&&(s.value=yield D()),o.value=!!(null==e?void 0:e.isUpdate),f(o)&&(u(l({},e.record)),n=e.record.roleId)}))));return{registerDrawer:g,registerForm:d,getTitle:m((()=>f(o)?"编辑角色":"新增角色")),handleSubmit:function(){return i(this,null,(function*(){try{const i=yield b();h({confirmLoading:!0}),o.value?yield O((e=l({},i),s={roleId:n},t(e,a(s)))):yield P(i),v(),r("success")}finally{h({confirmLoading:!1})}var e,s}))},treeData:s}}});N.render=function(e,t,a,r,o,s){const n=b("BasicTree"),l=b("BasicForm"),i=b("BasicDrawer");return g(),h(i,w(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"500px",onOk:e.handleSubmit}),{default:v((()=>[y(l,{onRegister:e.registerForm},{menu:v((({model:t,field:a})=>[y(n,{value:t[a],"onUpdate:value":e=>t[a]=e,treeData:e.treeData,replaceFields:{title:"menuName",key:"id"},checkable:"",toolbar:"",title:"菜单分配"},null,8,["value","onUpdate:value","treeData"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:N});export{C as R,N as _,k as c,R as s};
