import{A as e,r as t,c6 as i,Y as n,L as s,F as a,a5 as r,_ as d,x as c,J as o,K as u}from"./vendor.517bedfb.js";import{ab as l}from"./index.c1a25957.js";import{P as p}from"./index.dedb6f7a.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.e21098c8.js";import"./useWindowSizeFn.45b2e0d5.js";import"./useContentViewHeight.b4f36b25.js";var m=e({name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:s}){const a=t(null);return i(a,(()=>{s("clickOutside")})),n((()=>{s("mounted")})),{wrap:a}}});const f={ref:"wrap"};m.render=function(e,t,i,n,d,c){return s(),a("div",f,[r(e.$slots,"default")],512)};var k=e({components:{ClickOutSide:l(m),PageWrapper:p},setup(){const e=t("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const C=u(),b=C(((e,t,i,n,r,u)=>{const l=d("ClickOutSide"),p=d("PageWrapper");return s(),a(p,{title:"点内外部触发事件"},{default:C((()=>[c(l,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:C((()=>[c("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},o(e.text),1)])),_:1},8,["onClickOutside"])])),_:1})}));k.render=b,k.__scopeId="data-v-5da1b189";export{k as default};
