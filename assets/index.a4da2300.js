var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;import{A as o,cf as a,r as p,O as s,V as d,B as m,D as c,_ as l,L as j,F as f,x as b,G as u,H as x,a9 as S,K as v}from"./vendor.517bedfb.js";import P from"./Step1.3da942ea.js";import h from"./Step2.bbdadb30.js";import y from"./Step3.d8bb9e03.js";import{P as N}from"./index.dedb6f7a.js";/* empty css              */import"./BasicForm.d5d93021.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c1a25957.js";import"./index.65d24057.js";/* empty css              *//* empty css              *//* empty css              */import"./index.80a9d931.js";import"./useWindowSizeFn.45b2e0d5.js";/* empty css              *//* empty css              */import"./download.2f487ea9.js";import"./base64Conver.bb012c73.js";import"./index.559cde34.js";import"./useForm.3c867098.js";import"./data.2505cb7f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.e21098c8.js";import"./useContentViewHeight.b4f36b25.js";var O=o({name:"FormStepPage",components:{Step1:P,Step2:h,Step3:y,PageWrapper:N,[a.name]:a,[a.Step.name]:a.Step},setup(){const e=p(0),o=s({initSetp2:!1,initSetp3:!1});return((e,o)=>{for(var a in o||(o={}))n.call(o,a)&&i(e,a,o[a]);if(t)for(var a of t(o))r.call(o,a)&&i(e,a,o[a]);return e})({current:e,handleStep1Next:function(t){e.value++,o.initSetp2=!0},handleStep2Next:function(t){e.value++,o.initSetp3=!0},handleRedo:function(){e.value=0,o.initSetp2=!1,o.initSetp3=!1},handleStepPrev:function(){e.value--}},d(o))}});const g=v();m("data-v-33dfb77c");const w={class:"step-form-form"},F={class:"mt-5"};c();const _=g(((e,t,n,r,i,o)=>{const a=l("a-step"),p=l("a-steps"),s=l("Step1"),d=l("Step2"),m=l("Step3"),c=l("PageWrapper");return j(),f(c,{title:"分步表单",contentBackground:"",content:" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。",contentClass:"p-4"},{default:g((()=>[b("div",w,[b(p,{current:e.current},{default:g((()=>[b(a,{title:"填写转账信息"}),b(a,{title:"确认转账信息"}),b(a,{title:"完成"})])),_:1},8,["current"])]),b("div",F,[u(b(s,{onNext:e.handleStep1Next},null,8,["onNext"]),[[x,0===e.current]]),e.initSetp2?u((j(),f(d,{key:0,onPrev:e.handleStepPrev,onNext:e.handleStep2Next},null,8,["onPrev","onNext"])),[[x,1===e.current]]):S("v-if",!0),e.initSetp3?u((j(),f(m,{key:1,onRedo:e.handleRedo},null,8,["onRedo"])),[[x,2===e.current]]):S("v-if",!0)])])),_:1})}));O.render=_,O.__scopeId="data-v-33dfb77c";export{O as default};
