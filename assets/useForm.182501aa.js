var e=(e,l,t)=>new Promise(((n,i)=>{var a=e=>{try{u(t.next(e))}catch(l){i(l)}},s=e=>{try{u(t.throw(e))}catch(l){i(l)}},u=e=>e.done?n(e.value):Promise.resolve(e.value).then(a,s);u((t=t.apply(e,l)).next())}));import{r as l,u as t,R as n,Z as i}from"./vendor.f90788d9.js";import{af as a,ax as s,aC as u}from"./index.27af0dce.js";function r(r){const o=l(null),d=l(!1);function c(){return e(this,null,(function*(){const e=t(o);return e||s("The form instance has not been obtained, please make sure that the form has been rendered when performing the form operation!"),yield i(),e}))}return[function(e){t(d)&&a()&&e===t(o)||(o.value=e,d.value=!0,n((()=>r),(()=>{r&&e.setProps(u(r))}),{immediate:!0,deep:!0}))},{scrollToField:(l,t)=>e(this,null,(function*(){(yield c()).scrollToField(l,t)})),setProps:l=>e(this,null,(function*(){(yield c()).setProps(l)})),updateSchema:l=>e(this,null,(function*(){(yield c()).updateSchema(l)})),resetSchema:l=>e(this,null,(function*(){(yield c()).resetSchema(l)})),clearValidate:l=>e(this,null,(function*(){(yield c()).clearValidate(l)})),resetFields:()=>e(this,null,(function*(){c().then((l=>e(this,null,(function*(){yield l.resetFields()}))))})),removeSchemaByFiled:l=>e(this,null,(function*(){var e;null==(e=t(o))||e.removeSchemaByFiled(l)})),getFieldsValue:()=>{var e;return null==(e=t(o))?void 0:e.getFieldsValue()},setFieldsValue:l=>e(this,null,(function*(){(yield c()).setFieldsValue(l)})),appendSchemaByField:(l,t,n)=>e(this,null,(function*(){(yield c()).appendSchemaByField(l,t,n)})),submit:()=>e(this,null,(function*(){return(yield c()).submit()})),validate:l=>e(this,null,(function*(){return(yield c()).validate(l)})),validateFields:l=>e(this,null,(function*(){return(yield c()).validateFields(l)}))}]}export{r as u};
