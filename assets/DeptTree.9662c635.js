import{A as e,r as t,Y as a,_ as r,L as n,F as s,x as o}from"./vendor.f90788d9.js";import{_ as i}from"./Tree.vue_vue&type=style&index=0&lang.0c2e42f1.js";import{a as l}from"./system.b67642d6.js";import"./index.27af0dce.js";import"./useContextMenu.e7e72f3b.js";/* empty css              */var c=e({name:"DeptTree",components:{BasicTree:i},emits:["select"],setup(e,{emit:r}){const n=t([]);function s(){return e=this,t=null,a=function*(){n.value=yield l()},new Promise(((r,n)=>{var s=e=>{try{i(a.next(e))}catch(t){n(t)}},o=e=>{try{i(a.throw(e))}catch(t){n(t)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,o);i((a=a.apply(e,t)).next())}));var e,t,a}return a((()=>{s()})),{treeData:n,handleSelect:function(e,t){r("select",e[0])}}}});const d={class:"bg-white m-4 mr-0 overflow-hidden"};c.render=function(e,t,a,i,l,c){const m=r("BasicTree");return n(),s("div",d,[o(m,{title:"部门列表",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"deptName"},onSelect:e.handleSelect},null,8,["treeData","onSelect"])])};export{c as default};
