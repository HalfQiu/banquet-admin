import{A as e,_ as o,L as s,F as a,a3 as t,x as r,aa as l}from"./vendor.f90788d9.js";import{B as i,a as d}from"./index.99f4ae53.js";import"./index.27af0dce.js";import"./useWindowSizeFn.206cf3e2.js";var n=e({components:{BasicModal:i},setup(){const[e,{closeModal:o,setModalProps:s}]=d();return{register:e,closeModal:o,setModalProps:()=>{s({title:"Modal New Title"})}}}});const c=l(" 从内部关闭弹窗 "),p=l(" 从内部修改title ");n.render=function(e,l,i,d,n,f){const u=o("a-button"),M=o("BasicModal");return s(),a(M,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"],okButtonProps:{disabled:!0}},{default:t((()=>[r(u,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:t((()=>[c])),_:1},8,["onClick"]),r(u,{type:"primary",onClick:e.setModalProps},{default:t((()=>[p])),_:1},8,["onClick"])])),_:1},8,["onRegister"])};export{n as default};
