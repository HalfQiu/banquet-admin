import{A as e,_ as t,L as o,F as n,x as a,a3 as i,aa as s}from"./vendor.517bedfb.js";import{_ as l}from"./TableImg.a9748a39.js";import"./BasicForm.d5d93021.js";import{u as c}from"./useTable.624b422b.js";import{getBasicColumns as r,getBasicShortColumns as d}from"./tableData.3f3da3f1.js";import{i as m}from"./index.c1a25957.js";import{d as u}from"./table.a7ddb63c.js";/* empty css              *//* empty css              */import"./useForm.3c867098.js";/* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.45b2e0d5.js";import"./index.80a9d931.js";import"./onMountedOrActivated.e21098c8.js";/* empty css              */import"./useSortable.2c7efa40.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.65d24057.js";/* empty css              *//* empty css              *//* empty css              */import"./download.2f487ea9.js";import"./base64Conver.bb012c73.js";import"./index.559cde34.js";var f=e({components:{BasicTable:l},setup(){const{createMessage:e}=m();function t(){}const[o,{setLoading:n,setColumns:a,getColumns:i,getDataSource:s,getRawDataSource:l,reload:f,getPaginationRef:g,setPagination:p,getSelectRows:C,getSelectRowKeys:b,setSelectedRowKeys:j,clearSelectedRowKeys:k}]=c({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:u,columns:r(),rowKey:"id",showTableSetting:!0,onChange:t,rowSelection:{type:"checkbox"},onColumnsChange:e=>{}});return{registerTable:o,changeLoading:function(){n(!0),setTimeout((()=>{n(!1)}),1e3)},changeColumns:function(){a(d())},reloadTable:function(){a(r()),f({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getTableRawData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){p({current:2}),f()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){j(["0","1","2"])},clearSelect:function(){k()},onChange:t}}});const g={class:"p-4"},p={class:"mb-4"},C=s(" 还原 "),b=s(" 开启loading "),j=s(" 更改Columns "),k=s(" 获取Columns "),x=s(" 获取表格数据 "),w=s(" 获取接口原始数据 "),S=s(" 跳转到第2页 "),R={class:"mb-4"},T=s(" 获取选中行 "),_=s(" 获取选中行Key "),y=s(" 设置选中行 "),L=s(" 清空选中行 "),h=s(" 获取分页信息 ");f.render=function(e,s,l,c,r,d){const m=t("a-button"),u=t("BasicTable");return o(),n("div",g,[a("div",p,[a(m,{class:"mr-2",onClick:e.reloadTable},{default:i((()=>[C])),_:1},8,["onClick"]),a(m,{class:"mr-2",onClick:e.changeLoading},{default:i((()=>[b])),_:1},8,["onClick"]),a(m,{class:"mr-2",onClick:e.changeColumns},{default:i((()=>[j])),_:1},8,["onClick"]),a(m,{class:"mr-2",onClick:e.getColumn},{default:i((()=>[k])),_:1},8,["onClick"]),a(m,{class:"mr-2",onClick:e.getTableData},{default:i((()=>[x])),_:1},8,["onClick"]),a(m,{class:"mr-2",onClick:e.getTableRawData},{default:i((()=>[w])),_:1},8,["onClick"]),a(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:i((()=>[S])),_:1},8,["onClick"])]),a("div",R,[a(m,{class:"mr-2",onClick:e.getSelectRowList},{default:i((()=>[T])),_:1},8,["onClick"]),a(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:i((()=>[_])),_:1},8,["onClick"]),a(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:i((()=>[y])),_:1},8,["onClick"]),a(m,{class:"mr-2",onClick:e.clearSelect},{default:i((()=>[L])),_:1},8,["onClick"]),a(m,{class:"mr-2",onClick:e.getPagination},{default:i((()=>[h])),_:1},8,["onClick"])]),a(u,{onRegister:e.registerTable},null,8,["onRegister"])])};export{f as default};
