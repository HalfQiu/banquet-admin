import{D as e,O as t,bc as o,c as s,X as i}from"./index.c1a25957.js";import{A as n,ch as r,j as a,u as g,_ as m,L as p,F as u,x as f,a9 as c,a8 as d}from"./vendor.517bedfb.js";import{c as j,u as l}from"./index.403b71a6.js";import T from"./SessionTimeoutLogin.f2334c42.js";import"./index.60c3f304.js";import"./useWindowSizeFn.45b2e0d5.js";import"./useContentViewHeight.b4f36b25.js";/* empty css              *//* empty css              */import"./useSortable.2c7efa40.js";import"./lock.b6205fa8.js";import"./Login.e39fdd33.js";import"./LoginForm.695a027b.js";/* empty css              *//* empty css              */import"./LoginFormTitle.c1ea2887.js";var x=n({name:"LayoutFeatures",components:{BackTop:r,LayoutLockPage:j((()=>e((()=>import("./index.e9a837a7.js")),["assets/index.e9a837a7.js","assets/vendor.517bedfb.js","assets/vendor.3f9e96ed.css","assets/LockPage.8be0bbda.js","assets/LockPage.df348b48.css","assets/index.c1a25957.js","assets/index.e52d8973.css","assets/lock.b6205fa8.js","assets/header.d801b988.js"]))),SettingDrawer:j((()=>e((()=>import("./index.06581f3f.js").then((function(e){return e.i}))),["assets/index.06581f3f.js","assets/index.4c61959e.css","assets/vendor.517bedfb.js","assets/vendor.3f9e96ed.css","assets/index.8753fb51.js","assets/index.3ffe1ea6.css","assets/index.8ed4889a.css","assets/index.c1a25957.js","assets/index.e52d8973.css","assets/index.403b71a6.js","assets/index.0a8ff148.css","assets/index.9807be7a.css","assets/index.60c3f304.js","assets/index.5fec87a6.css","assets/useWindowSizeFn.45b2e0d5.js","assets/useContentViewHeight.b4f36b25.js","assets/useSortable.2c7efa40.js","assets/lock.b6205fa8.js"]))),SessionTimeoutLogin:T},setup(){const{getUseOpenBackTop:e,getShowSettingButton:n,getSettingButtonPosition:r,getFullContent:m}=t(),p=o(),{prefixCls:u}=s("setting-drawer-fearure"),{getShowHeader:f}=l(),c=a((()=>p.getSessionTimeout));return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:a((()=>{if(!g(n))return!1;const e=g(r);return e===i.AUTO?!g(f)||g(m):e===i.FIXED})),prefixCls:u,getIsSessionTimeout:c}}});x.render=function(e,t,o,s,i,n){const r=m("LayoutLockPage"),a=m("BackTop"),g=m("SettingDrawer"),j=m("SessionTimeoutLogin");return p(),u(d,null,[f(r),e.getUseOpenBackTop?(p(),u(a,{key:0,target:e.getTarget},null,8,["target"])):c("v-if",!0),e.getIsFixedSettingDrawer?(p(),u(g,{key:1,class:e.prefixCls},null,8,["class"])):c("v-if",!0),e.getIsSessionTimeout?(p(),u(j,{key:2})):c("v-if",!0)],64)};export{x as default};
