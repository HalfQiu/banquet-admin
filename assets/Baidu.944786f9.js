import{A as e,r as t,Y as r,Z as a,u as n,L as i,F as s}from"./vendor.f90788d9.js";import{u as o}from"./useScript.7cf422c5.js";var p=e({name:"BaiduMap",props:{width:{type:String,default:"100%"},height:{type:String,default:"calc(100vh - 78px)"}},setup(){const e=t(null),{toPromise:i}=o({src:"https://api.map.baidu.com/getscript?v=3.0&ak=OaBvYmKX3pjF7YFUFeeBCeGdy9Zp7xB2&services=&t=20210201100830&s=1"});function s(){return t=this,r=null,s=function*(){yield i(),yield a();const t=n(e);if(!t)return;const r=window.BMap,s=new r.Map(t),o=new r.Point(116.404,39.915);s.centerAndZoom(o,15),s.enableScrollWheelZoom(!0)},new Promise(((e,a)=>{var n=e=>{try{o(s.next(e))}catch(t){a(t)}},i=e=>{try{o(s.throw(e))}catch(t){a(t)}},o=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,i);o((s=s.apply(t,r)).next())}));var t,r,s}return r((()=>{s()})),{wrapRef:e}}});p.render=function(e,t,r,a,n,o){return i(),s("div",{ref:"wrapRef",style:{height:e.height,width:e.width}},null,4)};export{p as default};
