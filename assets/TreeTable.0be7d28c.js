import{A as e,_ as i,L as o,F as s,x as t,a3 as r,aa as a}from"./vendor.f90788d9.js";import{_ as d}from"./TableImg.6c52b8df.js";import"./BasicForm.12c2408d.js";import{u as n}from"./useTable.cc31026c.js";import{getBasicColumns as p,getTreeTableData as l}from"./tableData.3f3da3f1.js";/* empty css              *//* empty css              */import"./useForm.182501aa.js";import"./index.27af0dce.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.206cf3e2.js";import"./index.99f4ae53.js";import"./onMountedOrActivated.a9c9ce1d.js";/* empty css              */import"./useSortable.22060609.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.1b0403ed.js";/* empty css              *//* empty css              *//* empty css              */import"./download.ca2729e5.js";import"./base64Conver.bb012c73.js";import"./index.1d6c4e00.js";var m=e({components:{BasicTable:d},setup(){const[e,{expandAll:i,collapseAll:o}]=n({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:p(),dataSource:l(),rowKey:"id"});return{register:e,expandAll:i,collapseAll:o}}});const c={class:"p-4"},j=a("展开全部"),x=a("折叠全部");m.render=function(e,a,d,n,p,l){const m=i("a-button"),f=i("BasicTable");return o(),s("div",c,[t(f,{onRegister:e.register},{toolbar:r((()=>[t(m,{type:"primary",onClick:e.expandAll},{default:r((()=>[j])),_:1},8,["onClick"]),t(m,{type:"primary",onClick:e.collapseAll},{default:r((()=>[x])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export{m as default};
