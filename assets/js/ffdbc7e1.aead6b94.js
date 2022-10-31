"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[5159],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:9},s="Release Notes",i={unversionedId:"app-payments/release-notes",id:"app-payments/release-notes",title:"Release Notes",description:"2022-07-18",source:"@site/docs/app-payments/release-notes.md",sourceDirName:"app-payments",slug:"/app-payments/release-notes",permalink:"/MobilePay-Payments-API/docs/app-payments/release-notes",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docsSidebar",previous:{title:"Webhooks",permalink:"/MobilePay-Payments-API/docs/app-payments/webhooks"},next:{title:"Resources",permalink:"/MobilePay-Payments-API/docs/app-payments/ressources"}},p={},c=[{value:"2022-07-18",id:"2022-07-18",level:3},{value:"2022-04-28",id:"2022-04-28",level:3},{value:"2022-04-19",id:"2022-04-19",level:3},{value:"2022-04-12",id:"2022-04-12",level:3}],l={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"release-notes"},"Release Notes"),(0,o.kt)("h3",{id:"2022-07-18"},"2022-07-18"),(0,o.kt)("p",null,'New webhook event "transfer.succeeded" introduced. Notifications for this event are sent when payment point balance is successfully transferred to merchant account. More information can be found here ',(0,o.kt)("a",{parentName:"p",href:"/docs/app-payments/webhooks#transfers"},"Webhooks API"),"."),(0,o.kt)("h3",{id:"2022-04-28"},"2022-04-28"),(0,o.kt)("p",null,"New ",(0,o.kt)("a",{parentName:"p",href:"/docs/app-payments/payments-refunds/error-codes#refunds"},"Refunds API"),' error code introduced. Code "amount_exceeds_available_funds" is returned when payment point does not have enough available funds to refund the payment.'),(0,o.kt)("h3",{id:"2022-04-19"},"2022-04-19"),(0,o.kt)("p",null,"Failed webhook notifications are now retried with an exponential backoff. After all retries are exchausted the notification is never sent again. This applies to both new and previously created webhooks. More information can be found here ",(0,o.kt)("a",{parentName:"p",href:"/docs/app-payments/webhooks#requirements-and-limitations"},"Webhooks API"),"."),(0,o.kt)("h3",{id:"2022-04-12"},"2022-04-12"),(0,o.kt)("p",null,"Webhooks can now be associated with a specific payment point. This is possible when both creating new ones and updating old ones. More information in ",(0,o.kt)("a",{parentName:"p",href:"/docs/app-payments/webhooks#webhooks-for-specific-payment-points"},"Webhooks API")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mobilepay.dk/product/"},"API reference for Webhooks"),"."))}u.isMDXComponent=!0}}]);