import{a1 as B,a2 as m,p as C,a3 as b,a4 as j,g as y,d as z,P as M,r as w,f as T,h as o,i as E,n as K,Q as S,R as Y,j as J,k as W,w as u,Z as $,z as g,a0 as P,a5 as _,t as c,Y as N,a6 as ee,X as te,W as ne}from"./index-LJo3mpdx.js";import{m as ae,c as Ae,V as D}from"./VTextField-CPNM6cuh.js";/* empty css              */const X=B.reduce((e,A)=>(e[A]={type:[Boolean,String,Number],default:!1},e),{}),k=B.reduce((e,A)=>{const t="offset"+m(A);return e[t]={type:[String,Number],default:null},e},{}),U=B.reduce((e,A)=>{const t="order"+m(A);return e[t]={type:[String,Number],default:null},e},{}),H={col:Object.keys(X),offset:Object.keys(k),order:Object.keys(U)};function se(e,A,t){let s=e;if(!(t==null||t===!1)){if(A){const n=A.replace(e,"");s+=`-${n}`}return e==="col"&&(s="v-"+s),e==="col"&&(t===""||t===!0)||(s+=`-${t}`),s.toLowerCase()}}const le=["auto","start","end","center","baseline","stretch"],oe=C({cols:{type:[Boolean,String,Number],default:!1},...X,offset:{type:[String,Number],default:null},...k,order:{type:[String,Number],default:null},...U,alignSelf:{type:String,default:null,validator:e=>le.includes(e)},...b(),...j()},"VCol"),V=y()({name:"VCol",props:oe(),setup(e,A){let{slots:t}=A;const s=z(()=>{const n=[];let l;for(l in H)H[l].forEach(f=>{const a=e[f],r=se(l,f,a);r&&n.push(r)});const i=n.some(f=>f.startsWith("v-col-"));return n.push({"v-col":!i||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),n});return()=>{var n;return M(e.tag,{class:[s.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),Q=["start","end","center"],p=["space-between","space-around","space-evenly"];function v(e,A){return B.reduce((t,s)=>{const n=e+m(s);return t[n]=A(),t},{})}const re=[...Q,"baseline","stretch"],x=e=>re.includes(e),h=v("align",()=>({type:String,default:null,validator:x})),fe=[...Q,...p],L=e=>fe.includes(e),R=v("justify",()=>({type:String,default:null,validator:L})),ge=[...Q,...p,"stretch"],O=e=>ge.includes(e),q=v("alignContent",()=>({type:String,default:null,validator:O})),Z={align:Object.keys(h),justify:Object.keys(R),alignContent:Object.keys(q)},ue={align:"align",justify:"justify",alignContent:"align-content"};function ie(e,A,t){let s=ue[e];if(t!=null){if(A){const n=A.replace(e,"");s+=`-${n}`}return s+=`-${t}`,s.toLowerCase()}}const ce=C({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:x},...h,justify:{type:String,default:null,validator:L},...R,alignContent:{type:String,default:null,validator:O},...q,...b(),...j()},"VRow"),de=y()({name:"VRow",props:ce(),setup(e,A){let{slots:t}=A;const s=z(()=>{const n=[];let l;for(l in Z)Z[l].forEach(i=>{const f=e[i],a=ie(l,i,f);a&&n.push(a)});return n.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),n});return()=>{var n;return M(e.tag,{class:["v-row",s.value,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}}),Be=C({...b(),...ae()},"VForm"),Pe=y()({name:"VForm",props:Be(),emits:{"update:modelValue":e=>!0,submit:e=>!0},setup(e,A){let{slots:t,emit:s}=A;const n=Ae(e),l=w();function i(a){a.preventDefault(),n.reset()}function f(a){const r=a,d=n.validate();r.then=d.then.bind(d),r.catch=d.catch.bind(d),r.finally=d.finally.bind(d),s("submit",r),r.defaultPrevented||d.then(F=>{var G;let{valid:I}=F;I&&((G=l.value)==null||G.submit())}),r.preventDefault()}return T(()=>{var a;return o("form",{ref:l,class:["v-form",e.class],style:e.style,novalidate:!0,onReset:i,onSubmit:f},[(a=t.default)==null?void 0:a.call(t,n)])}),E(n,l)}}),we="/afakLogo.svg",me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACz4AAAFaBAMAAACX3HTLAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURUdwTC0pRC4qRSwoQywoQ4Cl7k8AAAAEdFJOUwB7PbhEZZIrAAAFUklEQVR42u3b0W2DMBSG0agboEwQVjAjeP+Z+tC+QAmChMIfc84IjvLp6trcbgCE6ftHd3cMABm++r7r7qXUX04E4OxRuStlqH84G4CkKuszwFlRLnUdBwZw+qiszwAHmd71vcIpAuw8Kr9VZX0G2HlUHurOHC3ASQsMfQbYeYEx1CM4boCTFhj6DJA+KuszQHyV9RlgGuVSs/hhAFXO5CcCruSAZ3H6DNBklfUZuEyUh/qh/ISAUVmfAf5J0rM4fQaMyp++wNBnoMVRudTm+a0BCwx9Bti4wHi0ctenz4BZWZ8BzMr6DLQ+KquyPgMZo3JvVNZnQJX1GeB5lAe11WfAqKzPACOexekzYIGhzwBLo7IFhj4DFhj6DDC/wJBLfQYsMNBnwKisz4Aqo8/A+ii769NnwKiMPgNjnsXpM6DK6DOwFGULDH0GjMroMzDmrk+fAQsM9BlYHJUtMPQZCOmyBYY+A3nTsjzpMxBUZRsM9Bky/Fz3KRH6DEZl9BmYHZVVGX0GCwz0GZiLsgUG+gwWGOgzMOWxMvoMeVU2KqPPYFRGnwFVRp/BXR/oMxiV0WcwKoM+gyqjz2CBAfoMRmXQZ4zKoM+gyqDPXDPKFhjoMxiVQZ9h9q5PldFnSKly5wUG+gxGZdBneFZlozLoM15ggD6DBQboM0Zl0GfYUGX/ONBngqKsyqDPWGCAPoO7PtBnVBn0GTZE2QID9BmjMugzuOsDfcYCA9Bn1o/KFhigz1hgAPqMuz7QZywwAH3GXR/oMxYYgD7zbpRVGfQZCwxAn3HXB/pMcpWNyqDPxI3Kqgz6jAUGoM+46wP02agM6DNGZUCfVRnQZ3zXB+izURnQZ9z1AfqsygD67Ls+QJ+NygD67K4P0GcsMAB99lgZQJ8tMAB9dtcHoM9GZUCfjcoA+qzKgD57Fgegz0ZlgPb77K4P0OesKltgAPrsuz4AfbbAAMjus7s+gGqBAaDPRmWA9D6rMkBQn33XB5DUZ1UGSOqzZ3EASX1WZYCgPnsWB5DUZ6MyQFCfPYsDSOqzBQZAUJ89iwNI6rMFBkBSn931AQT2WZUBMvvsCAD0GQB9BtBnAPQZQJ8B0GcA9BlAnwHQZwB9BkCfAfQZAH0GQJ8B9BkAfQbQZwD0GQB9BtBnAPQZQJ8B0GcAfQZAnwHQZwB9BkCfAfQZAH0GQJ8B9BkAfQbQZwD0GUCfAdBnAPQZQJ8B0GcAfQZAnwH02REA6DMA+gygzwDoM4A+A6DPAOgzgD4DoM8A+gyAPgPoMwD6DIA+A+gzAPoMoM8A6DMA+gygzwDoM4A+A6DPAPoMgD4DoM8A+gyAPgPoMwD6DIA+A+gzAPoMoM8A6DOAPgOgzwDoM4A+A6DPAPoMgD4D6LMjANBnAPQZQJ8B0GcAfQZAnwHQZwB9BkCfAfQZAH0G0GcA9BkAfQbQZwD0GUCfAdBnAPQZQJ8B0GcAfQZAnwH0GQB9BkCfAfQZAH0G0GcA9BkAfQbQZwD0GUCfAdBnAH0GQJ8B0GcAfQZAnwH0GQB9BtBnRwCgzwDoM4A+A6DPAPoMgD4DoM8A+gyAPgPoMwD6DKDPAOgzAPoMoM8A6DOAPgOgzwDoM4A+A6DPAPoMgD4D6DMA+gyAPgPoMwD6DKDPAOgzAPoMoM8A6DOAPgOgzwD6DIA+A6DPAPoMgD4D6DMA+gygz44AQJ8B0GcAfQZAnwH0GQB9BkCfAfQZAH0G0GcA9BlAnwHQZwD0GUCfAdBnAH0GQJ8B0GcAfQZAnwH0GQB9BtBnAPQZAH0G0GcA9BlAnwHQZwD0GUCfAdBngCZ8A2ywbuR66ljNAAAAAElFTkSuQmCC",Ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABaAAAACtBAMAAAC0KMWCAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUdwTPHx9vDx9vDx9vHy9/Pz+e/w9XrTQnAAAAAGdFJOUwB7ptFPJqEDGaYAAAKASURBVHja7d3NacNAFIVRb1KAUoJUgkB7g0qIW1D/JcSEkEVwyJ/BulfnlKB8DO/NGHI6QYHLyzoM4zT7EuR6uqzr8HzNePvgoxB4GJ+HcZyX7Qafh5DD+H2muJmxoEmZKc7XmWKet5/yzciaKQRN6oK3CZq0w/jXM4WgSV3wBE3Vgido9rjgDX9d8ARN1YInaHaQ8fyAjAXNbu8pBE3VPYWg6R+NBU3qPYWgOeZhLGi+P4zffhUUl7Gg+TxTTCEzhaD5YqbY022boPnPTLFsrfyNLXiCJuEwLp0pBH2s07hpwRP04S8qtsPTQvxFxbTIWND5FxXaFXT+RYXDWNAFjx8yFrQFT9CYKQSNBU/QRz+MzRSCzj+MLXiCNlMg6P284MlY0AWHsZlC0OELnsNY0F7wEPROXvBkLOj8FzwzhaAteAjaCx6CvseCJ2NBmykQtAUPQd/jV0EyFnTBgmemELQFD0E//AXPgkdy0BY8CoJ220ZB0BY88oO24FEQtJmC/KAteBQE7QWP/KC94FEQtJmCgqC94JEftMOYgqAL/kc0grbgkR+0FzwKgvaCR37QFjwKgvaCR0HQFjw6gjZTUBW0T4CgQdAgaBA0ggZBg6BB0CBoBA2CBkGDoEHQCBoEDYIGQYOgETQIGgQNggZBI2gQNAgaBA2CRtAgaBA0CBoEjaBB0CBoEDSCBkGDoEHQIGgEDYIGQYOgQdAIGgQNggZBg6ARNAgaBA2CBkEjaBA0CBoEDYJG0CBoEDQIGgSNoEHQIGgQNAgaQYOgQdAgaAQNggZBg6BB0AgaBA2CBkGDoBE0CBoEDYIGQSNoEDQIGgQNgkbQIGgQNAgaBE2rV8fAx8SI153KAAAAAElFTkSuQmCC",be="data:image/png;base64,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",ye="data:image/png;base64,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",ze={class:"auth-wrapper d-flex align-center justify-center pa-4"},Ne=K({__name:"login",setup(e){const A=w({username:"user",password:"4321"}),t=S(),{Login:s}=Y(),n=z(()=>t.global.name.value==="light"?Ce:me),l=w(!1),i=()=>{s(A.value).then(f=>{f.status==200})};return(f,a)=>(J(),W("div",ze,[o($,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:u(()=>[o(_,{class:"justify-center"},{default:u(()=>a[3]||(a[3]=[c("div",{class:"flex gap-2 items-center"},[c("div",{class:"w-20 h-20"},[c("img",{class:"w-full h-full object-contain",src:we})]),c("h2",{class:"font-weight-medium text-4xl"},"Afak")],-1)])),_:1}),o(N,{class:"pt-2"},{default:u(()=>a[4]||(a[4]=[c("h4",{class:"text-h4 mb-1"},"Welcome! 👋🏻",-1),c("p",{class:"mb-0"},"Please sign-in to your account and start the adventure",-1)])),_:1}),o(N,null,{default:u(()=>[o(Pe,{onSubmit:ee(()=>{},["prevent"])},{default:u(()=>[o(de,null,{default:u(()=>[o(V,{cols:"12"},{default:u(()=>[o(D,{modelValue:g(A).username,"onUpdate:modelValue":a[0]||(a[0]=r=>g(A).username=r),label:"Email",type:"email"},null,8,["modelValue"])]),_:1}),o(V,{cols:"12"},{default:u(()=>[o(D,{modelValue:g(A).password,"onUpdate:modelValue":a[1]||(a[1]=r=>g(A).password=r),label:"Password",placeholder:"············",type:g(l)?"text":"password","append-inner-icon":g(l)?"ri-eye-off-line":"ri-eye-line","onClick:appendInner":a[2]||(a[2]=r=>l.value=!g(l))},null,8,["modelValue","type","append-inner-icon"]),a[6]||(a[6]=c("div",{class:"d-flex align-center justify-space-between flex-wrap my-6"},[c("a",{class:"text-primary",href:"javascript:void(0)"}," Forgot Password? ")],-1)),o(te,{block:"",type:"submit",onClick:i},{default:u(()=>a[5]||(a[5]=[ne(" Login ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(P,{class:"auth-footer-start-tree d-none d-md-block",src:g(ye),width:250},null,8,["src"]),o(P,{src:g(be),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),o(P,{class:"auth-footer-mask d-none d-md-block",src:g(n)},null,8,["src"])]))}});export{Ne as default};
