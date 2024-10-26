import{p as L,m as I,bf as R,g as U,u as N,a as F,r as $,aL as j,D as C,f as z,i as O,au as W,V as A,e as P,h as u,aY as M,aM as q,n as J,U as K,S as X,j as g,k as Y,A as y,t as r,T as Z,J as G,v as T,z as B,q as V,s as H,$ as h,w as m,W as k,X as w,Z as Q,a9 as _,K as ee}from"./index-D0IgMKEj.js";import{V as te,a as ae}from"./VTextField-CzG6H3Wj.js";const le=L({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...I({origin:"center center",scrollStrategy:"block",transition:{component:R},zIndex:2400})},"VDialog"),oe=U()({name:"VDialog",props:le(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,D){let{emit:S,slots:p}=D;const c=N(e,"modelValue"),{scopeId:x}=F(),l=$();function E(a){var s,o;const n=a.relatedTarget,d=a.target;if(n!==d&&((s=l.value)!=null&&s.contentEl)&&((o=l.value)!=null&&o.globalTop)&&![document,l.value.contentEl].includes(d)&&!l.value.contentEl.contains(d)){const t=q(l.value.contentEl);if(!t.length)return;const f=t[0],v=t[t.length-1];n===f?v.focus():f.focus()}}j&&C(()=>c.value&&e.retainFocus,a=>{a?document.addEventListener("focusin",E):document.removeEventListener("focusin",E)},{immediate:!0});function b(){var a;S("afterEnter"),(a=l.value)!=null&&a.contentEl&&!l.value.contentEl.contains(document.activeElement)&&l.value.contentEl.focus({preventScroll:!0})}function i(){S("afterLeave")}return C(c,async a=>{var n;a||(await W(),(n=l.value.activatorEl)==null||n.focus({preventScroll:!0}))}),z(()=>{const a=A.filterProps(e),n=P({"aria-haspopup":"dialog"},e.activatorProps),d=P({tabindex:-1},e.contentProps);return u(A,P({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},a,{modelValue:c.value,"onUpdate:modelValue":s=>c.value=s,"aria-modal":"true",activatorProps:n,contentProps:d,role:"dialog",onAfterEnter:b,onAfterLeave:i},x),{activator:p.activator,default:function(){for(var s=arguments.length,o=new Array(s),t=0;t<s;t++)o[t]=arguments[t];return u(M,{root:"VDialog"},{default:()=>{var f;return[(f=p.default)==null?void 0:f.call(p,...o)]}})}})}),O({},l)}}),ne={class:"page"},se={class:"page-header flex-col gap-4 pb-4 sm:flex-row"},re={class:"flex gap-3 title items-center lg:justify-end"},ie={class:"font-bold mt-1"},ue={class:"min-w-full flex-wrap sm:min-w-[450px] flex justify-end items-center lg:mt-0"},ce={class:"flex items-center gap-2 w-full"},de={class:"p-5 text-lg flex justify-between items-center font-bold"},fe={class:"p-2"},ve=J({__name:"Page",props:{hasSearch:{type:Boolean,default:!0},dialogWidth:{type:Number,default:992},placeholder:{type:String,default:"Search in page"},qury:{type:String},add:{type:Boolean,default:!0},exportData:{type:Boolean,default:!1},buttonText:{type:String,default:"إضافة"},exportText:{type:String,default:"تصدير"},isLoading:{type:Boolean,default:!1},dialogTitle:{type:String,default:"Dialog Title"},subTitle:{type:String,default:"SubTitle"},hasSubTitle:{type:Boolean,default:!1},icon:{type:String,default:"ri-add-line"},modalActions:{type:Boolean,default:!1},direct:{type:Boolean,default:!1},directUrl:{type:String,default:""}},emits:["ok","close","update:search","resetDto","dialogOpened"],setup(e,{expose:D,emit:S}){const p=Z(),c=e,x=S,l=()=>{n(),x("resetDto")},E=K(),{PageMeta:b}=X(E),i=$(!1),a=()=>i.value=!0,n=()=>i.value=!1,d=()=>x("ok");D({openDialog:a,closeDialog:n});const s=()=>{p.push(c.directUrl)};return(o,t)=>{const f=G("IconBtn");return g(),Y("div",ne,[y(o.$slots,"header",{},()=>[r("div",se,[r("div",re,[r("h2",ie,T(e.hasSubTitle?e.subTitle:B(b).title),1),B(b).icon?(g(),V(H,{key:0,color:"primary",size:"25px",class:"mt-1",icon:B(b).icon},null,8,["icon"])):h("",!0)]),r("div",ue,[y(o.$slots,"delete-btn"),y(o.$slots,"actions",{},()=>[r("div",ce,[e.hasSearch?(g(),V(te,{key:0,class:"w-full sm:w-[300px]",type:"text","prepend-inner-icon":"tabler-search",placeholder:c.placeholder,"onUpdate:modelValue":t[0]||(t[0]=v=>o.$emit("update:search",v))},null,8,["placeholder"])):h("",!0),e.direct?(g(),V(w,{key:1,onClick:s},{default:m(()=>[k(T(e.buttonText),1)]),_:1})):h("",!0),y(o.$slots,"action-button",{},()=>[e.add?(g(),V(w,{key:0,onClick:a,"prepend-icon":"tabler-plus",id:"btn_btn",variant:"flat"},{default:m(()=>[k(T(e.buttonText),1)]),_:1})):h("",!0)])])]),u(oe,{modelValue:B(i),"onUpdate:modelValue":t[2]||(t[2]=v=>ee(i)?i.value=v:null),scrollable:"",persistent:"",color:"primary",width:e.dialogWidth},{default:m(()=>[u(Q,null,{default:m(()=>[r("div",de,[r("div",null,T(e.dialogTitle),1),u(f,{icon:"tabler-x",variant:"plain",class:"flex z-50",onClick:l})]),r("main",fe,[y(o.$slots,"dialog-form")]),u(ae),e.modalActions?(g(),V(_,{key:0},{default:m(()=>[u(w,{variant:"flat",onClick:d},{default:m(()=>t[3]||(t[3]=[k(" حفظ ")])),_:1}),u(w,{variant:"tonal",onClick:t[1]||(t[1]=v=>i.value=!1)},{default:m(()=>t[4]||(t[4]=[k(" تراجع ")])),_:1})]),_:1})):h("",!0)]),_:3})]),_:3},8,["modelValue","width"])])])]),r("main",null,[y(o.$slots,"default")])])}}});export{oe as V,ve as _};
