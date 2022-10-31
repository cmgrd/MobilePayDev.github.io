"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[8291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(67294),o=n(86010),i=n(53438),a=n(39960),c=n(13919),l=n(95999);const s="cardContainer_fWXF",m="cardTitle_rnsV",u="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s)},n)}function p(e){let{href:t,icon:n,title:i,description:a}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",m),title:i},n," ",i),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",u),title:a},a))}function f(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:null==o?void 0:o.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(y,{item:t});case"category":return r.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function v(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(v,e);const a=(0,i.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(g,{item:e})))))}},25719:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=n(87462),o=(n(67294),n(3905)),i=n(52991);const a={},c="Development Guide",l={unversionedId:"online/development-guide/development-guide",id:"online/development-guide/development-guide",title:"Development Guide",description:"",source:"@site/docs/online/development-guide/development-guide.md",sourceDirName:"online/development-guide",slug:"/online/development-guide/",permalink:"/MobilePay-Payments-API/docs/online/development-guide/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"MobilePay Online",permalink:"/MobilePay-Payments-API/docs/online/"},next:{title:"Getting started",permalink:"/MobilePay-Payments-API/docs/online/development-guide/getting-started"}},s={},m=[],u={toc:m};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development-guide"},"Development Guide"),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);