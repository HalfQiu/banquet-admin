import{az as s}from"./index.27af0dce.js";var o,t;(t=o||(o={})).ACCOUNT_INFO="/account/getAccountInfo",t.SESSION_TIMEOUT="/user/sessionTimeout";const a=()=>s.get({url:o.ACCOUNT_INFO}),e=()=>s.post({url:o.SESSION_TIMEOUT});export{a,e as s};
