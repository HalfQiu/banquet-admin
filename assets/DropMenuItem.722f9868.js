import{A as e,az as n,j as s,ae as t,_ as a,L as o,F as r,a3 as i,x as c,J as l}from"./vendor.517bedfb.js";import{_ as u,p as m}from"./index.c1a25957.js";var p=e({name:"DropdownMenuItem",components:{MenuItem:n.Item,Icon:u},props:{key:m.string,text:m.string,icon:m.string},setup(e){const n=t();return{itemKey:s((()=>{var s,t;return e.key||(null==(t=null==(s=null==n?void 0:n.vnode)?void 0:s.props)?void 0:t.key)}))}}});const d={class:"flex items-center"};p.render=function(e,n,s,t,u,m){const p=a("Icon"),f=a("MenuItem");return o(),r(f,{key:e.itemKey},{default:i((()=>[c("span",d,[c(p,{icon:e.icon,class:"mr-1"},null,8,["icon"]),c("span",null,l(e.text),1)])])),_:1})};export{p as default};
