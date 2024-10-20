var H=Object.defineProperty;var J=(f,t,o)=>t in f?H(f,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):f[t]=o;var c=(f,t,o)=>J(f,typeof t!="symbol"?t+"":t,o);import{u as K}from"./DivisionsStore-C6cQWFB7.js";import{a as U,V as A,b as W,_ as X}from"./VDataTable-CCJl_ig7.js";import{e as Z,r as V,Y as h,L as ee,C as le,f as x,i as g,w as s,j as d,d as l,O as r,P as m,l as i,D as B,Q as I,V as T,N as se}from"./index-DOiLiAGW.js";import{f as N,g as _,b as D,V as $,e as L}from"./VTextField-DeKW-4cg.js";import"./VOverlay-A_z2X8Te.js";import"./forwardRefs-cf9lWiri.js";import"./transition-PVbPGmxI.js";import"./VImg-CgLEQQ14.js";class P{constructor(){c(this,"name");c(this,"_id")}}class S{constructor(){c(this,"_id");c(this,"name");c(this,"divisionsIds")}}const te={class:"flex gap-6 justify-between w-full"},ae={class:"flex justify-between p-5"},ie={class:"p-5 text-lg flex justify-between items-center font-bold"},oe={class:"p-2"},ne={class:"d-flex gap-1 justify-center"},de={class:"flex justify-between p-5"},ue={class:"p-5 text-lg flex justify-between items-center font-bold"},re={class:"p-2"},fe={class:"d-flex gap-1 justify-center"},ke=Z({__name:"divisions",setup(f){const t=K(),o=V(new P),n=V(new S),y=h(),{divisionsList:b,classesList:z}=ee(t),G=()=>{const u=o.value._id;u?(t.UpdateDivision(u,o.value),k()):t.AddDivision(o.value).then(e=>{console.log(b.value),console.log("res ",e==null?void 0:e.data),y.success("done"),k()})},R=()=>{const u=n.value._id;u?(t.UpdateClass(u,n.value),w()):t.AddClass(n.value).then(()=>{y.success("done"),w()})},F=V(null),M=()=>{se().SetPageMeta({breadCrumb:[],icon:"tabler-discount-2",title:"الصفوف والشعب"}),t.GetAllDivisions(),t.GetAllClasses()},j=[{title:"الاسم",key:"name"},{title:"التفاصيل",value:"actions",align:"center"}];M();const v=V(!1),p=V(!1),O=u=>{o.value={...u},v.value=!0},Q=u=>{n.value={...u},p.value=!0},k=()=>{v.value=!1,o.value=new P},w=()=>{p.value=!1,n.value=new S},Y=()=>{p.value=!1,t.DeleteClass(n.value._id).then(()=>{})},q=()=>{v.value=!1,t.DeleteDivision(o.value._id).then(()=>{})};return(u,e)=>{const C=le("IconBtn");return x(),g(X,{"has-search":!1,ref_key:"DivisionsPage",ref:F,icon:"tabler-user",add:!1},{default:s(()=>[d("div",te,[l(D,{class:"w-full h-fit"},{default:s(()=>[d("div",ae,[l(N,null,{default:s(()=>e[7]||(e[7]=[r("الشعب")])),_:1}),l(_,null,{default:s(()=>[l(m,{onClick:e[0]||(e[0]=a=>v.value=!0),variant:"elevated"},{default:s(()=>e[8]||(e[8]=[r("إضافة شعبة ")])),_:1})]),_:1}),l(U,{modelValue:i(v),"onUpdate:modelValue":e[2]||(e[2]=a=>B(v)?v.value=a:null),scrollable:"",persistent:"",color:"primary",width:400},{default:s(()=>[l(D,null,{default:s(()=>[d("div",ie,[e[9]||(e[9]=d("div",null,"شعبة جديدة",-1)),l(C,{icon:"tabler-x",variant:"plain",class:"flex z-50"})]),d("main",oe,[l($,{label:"اسم الشعبة",modelValue:i(o).name,"onUpdate:modelValue":e[1]||(e[1]=a=>i(o).name=a)},null,8,["modelValue"])]),l(L),l(_,{class:"m-2"},{default:s(()=>[l(m,{onClick:G,variant:"flat"},{default:s(()=>e[10]||(e[10]=[r(" حفظ ")])),_:1}),l(m,{variant:"tonal",onClick:k},{default:s(()=>e[11]||(e[11]=[r(" تراجع ")])),_:1}),i(o)._id?(x(),g(m,{key:0,variant:"tonal",color:"error",onClick:q},{default:s(()=>e[12]||(e[12]=[r(" حذف ")])),_:1})):I("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),l(i(A),{"items-per-page":-1,items:i(b),headers:j},{"item.actions":s(({item:a})=>[d("div",ne,[l(C,{onClick:E=>O(a)},{default:s(()=>[l(T,{icon:"ri-home-smile-line"})]),_:2},1032,["onClick"])])]),_:1},8,["items","headers"])]),_:1}),l(D,{class:"w-full h-fit"},{default:s(()=>[d("div",de,[l(N,null,{default:s(()=>e[13]||(e[13]=[r("الصفوف")])),_:1}),l(_,null,{default:s(()=>[l(m,{onClick:e[3]||(e[3]=a=>p.value=!0),variant:"elevated"},{default:s(()=>e[14]||(e[14]=[r("إضافة صف ")])),_:1})]),_:1}),l(U,{modelValue:i(p),"onUpdate:modelValue":e[6]||(e[6]=a=>B(p)?p.value=a:null),scrollable:"",persistent:"",color:"primary",width:400},{default:s(()=>[l(D,null,{default:s(()=>[d("div",ue,[e[15]||(e[15]=d("div",null,"صف جديد",-1)),l(C,{icon:"tabler-x",variant:"plain",class:"flex z-50"})]),d("main",re,[l($,{label:"اسم الصف",modelValue:i(n).name,"onUpdate:modelValue":e[4]||(e[4]=a=>i(n).name=a)},null,8,["modelValue"]),l(W,{class:"mt-4",label:"الشعب",multiple:"",modelValue:i(n).divisionsIds,"onUpdate:modelValue":e[5]||(e[5]=a=>i(n).divisionsIds=a),"item-title":"name","item-value":"_id",items:i(b)},null,8,["modelValue","items"])]),l(L),l(_,{class:"m-2"},{default:s(()=>[l(m,{onClick:R,variant:"flat"},{default:s(()=>e[16]||(e[16]=[r(" حفظ ")])),_:1}),l(m,{variant:"tonal",onClick:w},{default:s(()=>e[17]||(e[17]=[r(" تراجع ")])),_:1}),i(n)._id?(x(),g(m,{key:0,variant:"tonal",color:"error",onClick:Y},{default:s(()=>e[18]||(e[18]=[r(" حذف ")])),_:1})):I("",!0)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),l(i(A),{"items-per-page":-1,items:i(z),headers:j},{"item.actions":s(({item:a})=>[d("div",fe,[l(C,{onClick:E=>Q(a)},{default:s(()=>[l(T,{icon:"ri-home-smile-line"})]),_:2},1032,["onClick"])])]),_:1},8,["items","headers"])]),_:1})])]),_:1},512)}}});export{ke as default};
