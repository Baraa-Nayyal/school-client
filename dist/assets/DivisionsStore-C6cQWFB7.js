import{Z as y,_ as A,r as c}from"./index-DOiLiAGW.js";const C=y("Divisions",()=>{const{POST:a,GET:o,DELETE:r}=A(),e=c([]),i=c([]);async function u(s){const n=await a("/divisions",{name:s.name});return(n==null?void 0:n.status)==200&&e.value.push({...n.data}),n}async function l(){const s=await o("/divisions");return e.value=s.data,s}async function v(s){const n=await r(`/divisions/${s}`,void 0);return e.value=e.value.filter(t=>t._id!=s),n}async function d(s,n){return await a(`/divisions/${s}`,n)}async function f(){const s=await o("/classes");return i.value=s.data,s}async function p(s){const n=await r(`/classes/${s}`,void 0);return i.value=i.value.filter(t=>t._id!=s),n}async function D(s,n){return await a(`/classes/${s}`,n)}async function w(s){const n=await a("/classes",s);return n&&i.value.push(n.data),n}return{AddDivision:u,GetAllDivisions:l,divisionsList:e,GetAllClasses:f,AddClass:w,classesList:i,DeleteClass:p,UpdateClass:D,DeleteDivision:v,UpdateDivision:d}});export{C as u};
