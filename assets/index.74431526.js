var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;import{A as o,ce as a,r as p,O as d,V as s,B as c,D as m,_ as f,F as l,x as j,G as u,H as x,a9 as b,K as S,L as v}from"./vendor.f90788d9.js";import P from"./Step1.ccd74d67.js";import h from"./Step2.684d7ab5.js";import y from"./Step3.f1de690d.js";import{P as N}from"./index.2d7cf9f2.js";/* empty css              */import"./BasicForm.12c2408d.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.27af0dce.js";import"./index.1b0403ed.js";/* empty css              *//* empty css              *//* empty css              */import"./index.99f4ae53.js";import"./useWindowSizeFn.206cf3e2.js";/* empty css              *//* empty css              */import"./download.ca2729e5.js";import"./base64Conver.bb012c73.js";import"./index.1d6c4e00.js";import"./useForm.182501aa.js";import"./data.2505cb7f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.a9c9ce1d.js";import"./useContentViewHeight.f4cabba7.js";var O=o({name:"FormStepPage",components:{Step1:P,Step2:h,Step3:y,PageWrapper:N,[a.name]:a,[a.Step.name]:a.Step},setup(){const e=p(0),o=d({initSetp2:!1,initSetp3:!1});return((e,o)=>{for(var a in o||(o={}))n.call(o,a)&&i(e,a,o[a]);if(t)for(var a of t(o))r.call(o,a)&&i(e,a,o[a]);return e})({current:e,handleStep1Next:function(t){e.value++,o.initSetp2=!0},handleStep2Next:function(t){e.value++,o.initSetp3=!0},handleRedo:function(){e.value=0,o.initSetp2=!1,o.initSetp3=!1},handleStepPrev:function(){e.value--}},s(o))}});const g=S("data-v-33dfb77c");c("data-v-33dfb77c");const w={class:"step-form-form"},F={class:"mt-5"};m();const _=g(((e,t,n,r,i,o)=>{const a=f("a-step"),p=f("a-steps"),d=f("Step1"),s=f("Step2"),c=f("Step3"),m=f("PageWrapper");return v(),l(m,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:g((()=>[j("div",w,[j(p,{current:e.current},{default:g((()=>[j(a,{title:"填写转账信息"}),j(a,{title:"确认转账信息"}),j(a,{title:"完成"})])),_:1},8,["current"])]),j("div",F,[u(j(d,{onNext:e.handleStep1Next},null,8,["onNext"]),[[x,0===e.current]]),e.initSetp2?u((v(),l(s,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[x,1===e.current]]):b("v-if",!0),e.initSetp3?u((v(),l(c,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[x,2===e.current]]):b("v-if",!0)])])),_:1})}));O.render=_,O.__scopeId="data-v-33dfb77c";export{O as default};
