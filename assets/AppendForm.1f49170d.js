import{A as e,al as o,r as i,_ as t,L as a,F as n,a3 as r,x as d,a9 as s,aa as l}from"./vendor.517bedfb.js";import{f as p}from"./BasicForm.d5d93021.js";import{u as m}from"./useForm.3c867098.js";import{aN as c,az as u}from"./index.c1a25957.js";import{P as f}from"./index.dedb6f7a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.65d24057.js";/* empty css              *//* empty css              *//* empty css              */import"./index.80a9d931.js";import"./useWindowSizeFn.45b2e0d5.js";/* empty css              *//* empty css              */import"./download.2f487ea9.js";import"./base64Conver.bb012c73.js";import"./index.559cde34.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.e21098c8.js";import"./useContentViewHeight.b4f36b25.js";var b=e({components:{BasicForm:p,CollapseContainer:c,PageWrapper:f,[o.name]:o,Button:u},setup(){const[e,{appendSchemaByField:o,removeSchemaByFiled:t,validate:a}]=m({schemas:[{field:"field0a",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});const n=i(1);return{register:e,handleSubmit:function(){return e=this,o=null,i=function*(){try{yield a()}catch(e){}},new Promise(((t,a)=>{var n=e=>{try{d(i.next(e))}catch(o){a(o)}},r=e=>{try{d(i.throw(e))}catch(o){a(o)}},d=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,r);d((i=i.apply(e,o)).next())}));var e,o,i},add:function(){o({field:`field${n.value}a`,component:"Input",label:"字段"+n.value,colProps:{span:8},required:!0},""),o({field:`field${n.value}b`,component:"Input",label:"字段"+n.value,colProps:{span:8},required:!0},""),o({field:`${n.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),n.value++},del:function(e){t([`field${e}a`,`field${e}b`,`${e}`]),n.value--}}}});const j=l("+"),x=l("-");b.render=function(e,o,i,l,p,m){const c=t("Button"),u=t("BasicForm"),f=t("CollapseContainer"),b=t("PageWrapper");return a(),n(b,{title:"表单增删示例"},{default:r((()=>[d(f,{title:"表单增删"},{default:r((()=>[d(u,{onRegister:e.register,onSubmit:e.handleSubmit},{add:r((({field:o})=>[0===Number(o)?(a(),n(c,{key:0,onClick:e.add},{default:r((()=>[j])),_:1},8,["onClick"])):s("v-if",!0),o>0?(a(),n(c,{key:1,onClick:i=>e.del(o)},{default:r((()=>[x])),_:2},1032,["onClick"])):s("v-if",!0)])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export{b as default};
