var f=Object.defineProperty;var D=(r,e,t)=>e in r?f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var u=(r,e,t)=>D(r,typeof e!="symbol"?e+"":e,t);import{_ as m}from"./Page.vue_vue_type_style_index_0_lang-CBK_6bQI.js";import{aa as _,ab as y,r as i,n as w,S as b,T as S,j as g,q as A,w as T,t as x,U as B}from"./index-D0IgMKEj.js";import"./VTextField-CzG6H3Wj.js";const E=_("Drivers",()=>{const{POST:r,GET:e,DELETE:t}=y(),o=i([]),c=i();async function a(){const s=await e("/drivers");return o.value=s.data,s}async function d(s){return await r("/drivers",s,{success:"Done",error:!0})}async function l(s){const n=await e(`/drivers/${s}`);return c.value=n.data,n}async function v(s){return await t(`/drivers/${s}`,void 0)}async function p(s,n){return await r(`/drivers/${s}`,n,{success:"Done",error:!0})}return{GetAllDrivers:a,AddDriver:d,GetDriverById:l,DeleteDriver:v,UpdateDriver:p,driversDetails:c,driversList:o}});class G{constructor(){u(this,"_id");u(this,"name")}}const R=w({__name:"drivers",setup(r){const e=E();b(e),i(new G),S(),(()=>{B().SetPageMeta({breadCrumb:[],icon:"tabler-discount-2",title:"Drivers"}),e.GetAllDrivers()})();const o=i(null);return(c,a)=>(g(),A(m,{ref_key:"Pagey",ref:o,icon:"tabler-user","button-text":"إضافة سائق","dialog-title":"سائق جديد"},{default:T(()=>a[0]||(a[0]=[x("div",null,"coming soon",-1)])),_:1},512))}});export{R as default};