var r;import{A as e,r as o,R as i,Z as t,q as a,_ as s,L as n,F as l,a8 as d,ap as c,G as m,H as p,x as f,a3 as u,aa as j,J as b}from"./vendor.517bedfb.js";import x from"./DetailModal.96c1ebbf.js";import{_ as g}from"./TableImg.a9748a39.js";import{_ as y}from"./BasicForm.d5d93021.js";import{u as v}from"./useTable.624b422b.js";import{b as E}from"./index.80a9d931.js";import{aG as L,e as h,aL as w,i as A}from"./index.c1a25957.js";import{getColumns as C}from"./data.6753dc82.js";import"./index.7bce5036.js";/* empty css              */import"./useDescription.87aa320b.js";/* empty css              *//* empty css              */import"./useForm.3c867098.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.45b2e0d5.js";import"./onMountedOrActivated.e21098c8.js";/* empty css              */import"./useSortable.2c7efa40.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.65d24057.js";/* empty css              *//* empty css              *//* empty css              */import"./download.2f487ea9.js";import"./base64Conver.bb012c73.js";import"./index.559cde34.js";(r||(r={})).Error="/error";var D=e({name:"ErrorHandler",components:{DetailModal:x,BasicTable:g,TableAction:y},setup(){const e=o(),s=o([]),{t:n}=h(),l=w(),[d,{setTableData:c}]=v({title:n("sys.errorLog.tableTitle"),columns:C(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[m,{openModal:p}]=E();i((()=>l.getErrorLogInfoList),(r=>{t((()=>{c(a(r))}))}),{immediate:!0});const{createMessage:f}=A();return f.info(n("sys.errorLog.enableMessage")),{register:d,registerModal:m,handleDetail:function(r){e.value=r,p(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){s.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:function(){return e=this,o=null,i=function*(){yield L.get({url:r.Error})},new Promise(((r,t)=>{var a=r=>{try{n(i.next(r))}catch(e){t(e)}},s=r=>{try{n(i.throw(r))}catch(e){t(e)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,s);n((i=i.apply(e,o)).next())}));var e,o,i},imgList:s,rowInfo:e,t:n}}});const M={class:"p-4"};D.render=function(r,e,o,i,t,a){const x=s("DetailModal"),g=s("a-button"),y=s("TableAction"),v=s("BasicTable");return n(),l("div",M,[(n(!0),l(d,null,c(r.imgList,(r=>m((n(),l("img",{key:r,src:r},null,8,["src"])),[[p,!1]]))),128)),f(x,{info:r.rowInfo,onRegister:r.registerModal},null,8,["info","onRegister"]),f(v,{onRegister:r.register,class:"error-handle-table"},{toolbar:u((()=>[f(g,{onClick:r.fireVueError,type:"primary"},{default:u((()=>[j(b(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),f(g,{onClick:r.fireResourceError,type:"primary"},{default:u((()=>[j(b(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),f(g,{onClick:r.fireAjaxError,type:"primary"},{default:u((()=>[j(b(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:u((({record:e})=>[f(y,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export{D as default};
