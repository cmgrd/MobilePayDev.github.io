"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[3811],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(n),d=c,f=p["".concat(s,".").concat(d)]||p[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:c,i[1]=o;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(67294),c=n(86010),a=n(53438),i=n(39960),o=n(13919),s=n(95999);const l="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function p(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",l)},n)}function d(e){let{href:t,icon:n,title:a,description:i}=e;return r.createElement(p,{href:t},r.createElement("h2",{className:(0,c.Z)("text--truncate",m),title:a},n," ",a),i&&r.createElement("p",{className:(0,c.Z)("text--truncate",u),title:i},i))}function f(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,a.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:null==c?void 0:c.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(h,e);const i=(0,a.MN)(t);return r.createElement("section",{className:(0,c.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}},52776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(87462),c=(n(67294),n(3905)),a=n(52991);const i={},o="Basics",s={unversionedId:"online/basics/basics",id:"online/basics/basics",title:"Basics",description:"",source:"@site/docs/online/basics/basics.md",sourceDirName:"online/basics",slug:"/online/basics/",permalink:"/MobilePay-Payments-API/docs/online/basics/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Production",permalink:"/MobilePay-Payments-API/docs/online/development-guide/production"},next:{title:"Merchants",permalink:"/MobilePay-Payments-API/docs/online/basics/merchants"}},l={},m=[],u={toc:m};function p(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"basics"},"Basics"),(0,c.kt)(a.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);