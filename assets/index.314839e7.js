import{A as e,r as a,u as t,_ as n,L as o,F as s,a3 as r,x as i,aa as l}from"./vendor.f90788d9.js";import{ad as p,b4 as d,i as c}from"./index.27af0dce.js";import{P as u}from"./index.2d7cf9f2.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a9c9ce1d.js";import"./useWindowSizeFn.206cf3e2.js";import"./useContentViewHeight.f4cabba7.js";var f=e({name:"Copy",components:{CollapseContainer:p,PageWrapper:u},setup(){const e=a(""),{createMessage:n}=c(),{clipboardRef:o,copiedRef:s}=d();return{handleCopy:function(){const a=t(e);a?(o.value=a,t(s)&&n.warning("copy success！")):n.warning("请输入要拷贝的内容！")},value:e}}});const m={class:"flex justify-center"},C=l(" Copy ");f.render=function(e,a,t,l,p,d){const c=n("a-input"),u=n("a-button"),f=n("CollapseContainer"),v=n("PageWrapper");return o(),s(v,{title:"文本复制示例"},{default:r((()=>[i(f,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:r((()=>[i("div",m,[i(c,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),i(u,{type:"primary",onClick:e.handleCopy},{default:r((()=>[C])),_:1},8,["onClick"])])])),_:1})])),_:1})};export{f as default};
