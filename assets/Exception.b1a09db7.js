import{A as t,r as e,aZ as s,j as a,u as l,x as n,a_ as i,aN as r}from"./vendor.517bedfb.js";/* empty css              */import{E as u,k as o,l as b,e as T,c,P as p}from"./index.a6fa69dd.js";var d=t({name:"ErrorPage",props:{status:{type:Number,default:u.PAGE_NOT_FOUND},title:{type:String,default:""},subTitle:{type:String,default:""},full:{type:Boolean,default:!1}},setup(t){const d=e(new Map),{query:x}=s(),f=o(),E=b(),{t:m}=T(),{prefixCls:_}=c("app-exception-page"),y=a((()=>{const{status:e}=x,{status:s}=t;return Number(e)||s})),N=a((()=>l(d).get(l(y)))),O=m("sys.exception.backLogin"),A=m("sys.exception.backHome");return l(d).set(u.PAGE_NOT_ACCESS,{title:"403",status:`${u.PAGE_NOT_ACCESS}`,subTitle:m("sys.exception.subTitle403"),btnText:t.full?O:A,handler:()=>t.full?f(p.BASE_LOGIN):f()}),l(d).set(u.PAGE_NOT_FOUND,{title:"404",status:`${u.PAGE_NOT_FOUND}`,subTitle:m("sys.exception.subTitle404"),btnText:t.full?O:A,handler:()=>t.full?f(p.BASE_LOGIN):f()}),l(d).set(u.ERROR,{title:"500",status:`${u.ERROR}`,subTitle:m("sys.exception.subTitle500"),btnText:A,handler:()=>f()}),l(d).set(u.PAGE_NOT_DATA,{title:m("sys.exception.noDataTitle"),subTitle:"",btnText:m("common.redo"),handler:()=>E(),icon:"/banquet-admin/assets/no-data.f7e550cc.svg"}),l(d).set(u.NET_WORK_ERROR,{title:m("sys.exception.networkErrorTitle"),subTitle:m("sys.exception.networkErrorSubTitle"),btnText:m("common.redo"),handler:()=>E(),icon:"/banquet-admin/assets/net-error.61b7e6df.svg"}),()=>{const{title:e,subTitle:s,btnText:a,icon:u,handler:o,status:b}=l(N)||{};return n(i,{class:_,status:b,title:t.title||e,"sub-title":t.subTitle||s},{extra:()=>a&&n(r,{type:"primary",onClick:o},{default:()=>a}),icon:()=>u?n("img",{src:u},null):null})}}});export{d as default};
