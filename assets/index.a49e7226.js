import{A as e,r,B as a,D as o,_ as i,L as p,F as s,x as n,a9 as t,J as c,K as l}from"./vendor.f90788d9.js";import{P as d}from"./index.2d7cf9f2.js";import{ad as m,f}from"./index.27af0dce.js";import{C as u,a as v}from"./index.5b3e50ef.js";import{u as g}from"./upload.88f99b50.js";import{h as C}from"./header.d801b988.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.a9c9ce1d.js";import"./useWindowSizeFn.206cf3e2.js";import"./useContentViewHeight.f4cabba7.js";/* empty css              *//* empty css              *//* empty css              */import"./index.99f4ae53.js";import"./base64Conver.bb012c73.js";var b=e({components:{PageWrapper:d,CropperImage:u,CollapseContainer:m,CropperAvatar:v},setup(){var e;const a=r(""),o=r(""),i=r(""),p=r(""),s=f(),n=r((null==(e=s.getUserInfo)?void 0:e.avatar)||"");return{img:C,info:a,circleInfo:i,cropperImg:o,circleImg:p,handleCropend:function({imgBase64:e,imgInfo:r}){a.value=r,o.value=e},handleCircleCropend:function({imgBase64:e,imgInfo:r}){i.value=r,p.value=e},avatar:n,uploadApi:g}}});const j=l();a("data-v-1bb3aa52");const I={class:"container p-4"},x={class:"cropper-container mr-10"},h={key:0},A={class:"container p-4"},y={class:"cropper-container mr-10"},_={key:0};o();const w=j(((e,r,a,o,l,d)=>{const m=i("CropperAvatar"),f=i("CollapseContainer"),u=i("CropperImage"),v=i("PageWrapper");return p(),s(v,{title:"图片裁剪示例",content:"需要开启测试接口服务才能进行上传测试！"},{default:j((()=>[n(f,{title:"头像裁剪"},{default:j((()=>[n(m,{uploadApi:e.uploadApi,value:e.avatar},null,8,["uploadApi","value"])])),_:1}),n(f,{title:"矩形裁剪",class:"my-4"},{default:j((()=>[n("div",I,[n("div",x,[n(u,{ref:"refCropper",src:e.img,onCropend:e.handleCropend,style:{width:"40vw"}},null,8,["src","onCropend"])]),e.cropperImg?(p(),s("img",{key:0,src:e.cropperImg,class:"croppered",alt:""},null,8,["src"])):t("v-if",!0)]),e.cropperImg?(p(),s("p",h,"裁剪后图片信息："+c(e.info),1)):t("v-if",!0)])),_:1}),n(f,{title:"圆形裁剪"},{default:j((()=>[n("div",A,[n("div",y,[n(u,{ref:"refCropper",src:e.img,onCropend:e.handleCircleCropend,style:{width:"40vw"},circled:""},null,8,["src","onCropend"])]),e.circleImg?(p(),s("img",{key:0,src:e.circleImg,class:"croppered"},null,8,["src"])):t("v-if",!0)]),e.circleImg?(p(),s("p",_,"裁剪后图片信息："+c(e.circleInfo),1)):t("v-if",!0)])),_:1})])),_:1})}));b.render=w,b.__scopeId="data-v-1bb3aa52";export{b as default};
