import{A as a,bc as t,bd as e,_ as l,L as o,F as s,a8 as n,ap as i,a3 as r,x as c,aa as d,J as u}from"./vendor.517bedfb.js";import{C as p}from"./index.0a5ee0af.js";import{_ as f}from"./index.a6fa69dd.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */const m=[{title:"访问数",icon:"visit-count|svg",value:2e3,total:12e4,color:"green",action:"月"},{title:"成交额",icon:"total-sales|svg",value:2e4,total:5e5,color:"blue",action:"月"},{title:"下载数",icon:"download-count|svg",value:8e3,total:12e4,color:"orange",action:"周"},{title:"成交数",icon:"transaction|svg",value:5e3,total:5e4,color:"purple",action:"年"}];var x=a({components:{CountTo:p,Tag:t,Card:e,Icon:f},setup:()=>({growCardList:m})});const v={class:"md:flex"},g={class:"py-4 px-4 flex justify-between"},j={class:"p-2 px-4 flex justify-between"};x.render=function(a,t,e,p,f,m){const x=l("Tag"),b=l("CountTo"),w=l("Icon"),C=l("Card");return o(),s("div",v,[(o(!0),s(n,null,i(a.growCardList,((t,e)=>(o(),s(C,{key:t.title,size:"small",loading:a.$attrs.loading,title:t.title,class:["md:w-1/4 w-full !md:mt-0 !mt-4",[e+1<4&&"!md:mr-4"]],canExpan:!1},{extra:r((()=>[c(x,{color:t.color},{default:r((()=>[d(u(t.action),1)])),_:2},1032,["color"])])),default:r((()=>[c("div",g,[c(b,{prefix:"$",startVal:1,endVal:t.value,class:"text-2xl"},null,8,["endVal"]),c(w,{icon:t.icon,size:40},null,8,["icon"])]),c("div",j,[c("span",null,"总"+u(t.title),1),c(b,{prefix:"$",startVal:1,endVal:t.total},null,8,["endVal"])])])),_:2},1032,["loading","title","class"])))),128))])};export{x as default};
