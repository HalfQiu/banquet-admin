import{A as e,al as o,r as i,_ as a,L as t,F as n,a3 as r,x as d,a9 as s,aa as l}from"./vendor.f90788d9.js";import{_ as p}from"./BasicForm.12c2408d.js";import{u as c}from"./useForm.182501aa.js";import{ad as m,at as u}from"./index.27af0dce.js";import{P as f}from"./index.2d7cf9f2.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.1b0403ed.js";/* empty css              *//* empty css              *//* empty css              */import"./index.99f4ae53.js";import"./useWindowSizeFn.206cf3e2.js";/* empty css              *//* empty css              */import"./download.ca2729e5.js";import"./base64Conver.bb012c73.js";import"./index.1d6c4e00.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a9c9ce1d.js";import"./useContentViewHeight.f4cabba7.js";var b=e({components:{BasicForm:p,CollapseContainer:m,PageWrapper:f,[o.name]:o,Button:u},setup(){const[e,{appendSchemaByField:o,removeSchemaByFiled:a,validate:t}]=c({schemas:[{field:"field0a",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"字段0",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});const n=i(1);return{register:e,handleSubmit:function(){return e=this,o=null,i=function*(){try{yield t()}catch(e){}},new Promise(((a,t)=>{var n=e=>{try{d(i.next(e))}catch(o){t(o)}},r=e=>{try{d(i.throw(e))}catch(o){t(o)}},d=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,r);d((i=i.apply(e,o)).next())}));var e,o,i},add:function(){o({field:`field${n.value}a`,component:"Input",label:"字段"+n.value,colProps:{span:8},required:!0},""),o({field:`field${n.value}b`,component:"Input",label:"字段"+n.value,colProps:{span:8},required:!0},""),o({field:`${n.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),n.value++},del:function(e){a([`field${e}a`,`field${e}b`,`${e}`]),n.value--}}}});const j=l("+"),x=l("-");b.render=function(e,o,i,l,p,c){const m=a("Button"),u=a("BasicForm"),f=a("CollapseContainer"),b=a("PageWrapper");return t(),n(b,{title:"表单增删示例"},{default:r((()=>[d(f,{title:"表单增删"},{default:r((()=>[d(u,{onRegister:e.register,onSubmit:e.handleSubmit},{add:r((({field:o})=>[0===Number(o)?(t(),n(m,{key:0,onClick:e.add},{default:r((()=>[j])),_:1},8,["onClick"])):s("v-if",!0),o>0?(t(),n(m,{key:1,onClick:i=>e.del(o)},{default:r((()=>[x])),_:2},1032,["onClick"])):s("v-if",!0)])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export{b as default};
