import{A as e,bi as a,aW as t,aV as n,aK as r,r as d,q as s,Z as i,u as l,_ as o,L as u,F as p,a3 as c,x as f,aa as m}from"./vendor.f90788d9.js";import{_ as x}from"./Tree.vue_vue&type=style&index=0&lang.0c2e42f1.js";import{t as y}from"./data.5e96733f.js";import{P as D}from"./index.2d7cf9f2.js";/* empty css              *//* empty css              *//* empty css              */import"./index.27af0dce.js";import"./useContextMenu.e7e72f3b.js";/* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.a9c9ce1d.js";import"./useWindowSizeFn.206cf3e2.js";import"./useContentViewHeight.f4cabba7.js";var v=e({components:{BasicTree:x,PageWrapper:D,Card:a,Row:t,Col:n,Spin:r},setup(){const e=d(null),a=d(null),t=d([]),n=d(!1);const r=d([{title:"parent ",key:"0-0"}]);return{treeData:y,handleCheck:function(e,a){},tree:r,onLoadData:function(a){return new Promise((t=>{a.children?setTimeout((()=>{const n=l(e);if(n){const e=[{title:`Child Node ${a.eventKey}-0`,key:`${a.eventKey}-0`},{title:`Child Node ${a.eventKey}-1`,key:`${a.eventKey}-1`}];n.updateNodeByKey(a.eventKey,{children:e}),n.setExpandedKeys([a.eventKey,...n.getExpandedKeys()])}t()}),1e3):t()}))},asyncTreeRef:e,asyncExpandTreeRef:a,tree2:t,loadTreeData:function(){n.value=!0,setTimeout((()=>{t.value=s(y),n.value=!1,i((()=>{var e;null==(e=l(a))||e.expandAll(!0)}))}),2e3)},treeLoading:n}}});const j=m("加载数据");v.render=function(e,a,t,n,r,d){const s=o("BasicTree"),i=o("Col"),l=o("a-button"),m=o("Spin"),x=o("Card"),y=o("Row"),D=o("PageWrapper");return u(),p(D,{title:"Tree基础示例"},{default:c((()=>[f(y,{gutter:[16,16]},{default:c((()=>[f(i,{span:8},{default:c((()=>[f(s,{title:"基础示例，默认展开第一层",treeData:e.treeData,defaultExpandLevel:"1"},null,8,["treeData"])])),_:1}),f(i,{span:8},{default:c((()=>[f(s,{title:"可勾选，默认全部展开",treeData:e.treeData,checkable:!0,defaultExpandAll:"",onCheck:e.handleCheck},null,8,["treeData","onCheck"])])),_:1}),f(i,{span:8},{default:c((()=>[f(s,{title:"指定默认展开/勾选示例",treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1}),f(i,{span:8},{default:c((()=>[f(s,{title:"懒加载异步树",ref:"asyncTreeRef",treeData:e.tree,"load-data":e.onLoadData},null,8,["treeData","load-data"])])),_:1}),f(i,{span:16},{default:c((()=>[f(x,{title:"异步数据，默认展开"},{extra:c((()=>[f(l,{onClick:e.loadTreeData,loading:e.treeLoading},{default:c((()=>[j])),_:1},8,["onClick","loading"])])),default:c((()=>[f(m,{spinning:e.treeLoading},{default:c((()=>[f(s,{ref:"asyncExpandTreeRef",treeData:e.tree2},null,8,["treeData"])])),_:1},8,["spinning"])])),_:1})])),_:1})])),_:1})])),_:1})};export{v as default};
