"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[4004],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),f=i,h=u["".concat(s,".").concat(f)]||u[f]||p[f]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12901:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={},o="Invalidation of a payment",l={unversionedId:"online/features/invalidation",id:"online/features/invalidation",title:"Invalidation of a payment",description:"In some cases the user goes back to the merchant webshop and adds something to the shopping basket after the payment has been initiated. The user could end up with several requests with different amounts and there would be a possibility, that the user accepts the wrong one in MobilePay. In this case payment invalidation endpoint can be useful. When the invalidation is completed, it means that the user cannot create a request for the payment or accept the payment. Active requests will also expired immediately.",source:"@site/docs/online/features/invalidation.md",sourceDirName:"online/features",slug:"/online/features/invalidation",permalink:"/MobilePay-Payments-API/docs/online/features/invalidation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"onlineSidebar",previous:{title:"Features",permalink:"/MobilePay-Payments-API/docs/category/features"},next:{title:"Phone number on landing page",permalink:"/MobilePay-Payments-API/docs/online/features/phone-number"}},s={},c=[{value:"Invalidation before callback",id:"invalidation-before-callback",level:2},{value:"Invalidation after callback",id:"invalidation-after-callback",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"invalidation-of-a-payment"},"Invalidation of a payment"),(0,i.kt)("p",null,"In some cases the user goes back to the merchant webshop and adds something to the shopping basket after the payment has been initiated. The user could end up with several requests with different amounts and there would be a possibility, that the user accepts the wrong one in MobilePay. In this case payment invalidation endpoint can be useful. When the invalidation is completed, it means that the user cannot create a request for the payment or accept the payment. Active requests will also expired immediately."),(0,i.kt)("h2",{id:"invalidation-before-callback"},"Invalidation before callback"),(0,i.kt)("p",null,"If the invalidation request is received by MobilePay before the callback to the PSP is made, no callback will be performed and the invalidation will complete."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(77889).Z},(0,i.kt)("img",{alt:"Payment invalidation before callback",src:a(70173).Z,width:"1587",height:"1123"}))),(0,i.kt)("h2",{id:"invalidation-after-callback"},"Invalidation after callback"),(0,i.kt)("p",null,"If the invalidation request is received by MobilePay after the callback to the PSP is performed, the PSP must also PATCH the authorizationAttempt with succeeded=false and the ReasonCode 1010 - RejectedForInvalidatePayment."),(0,i.kt)("p",null,"In this case the invalidation request will be processed in the MobilePay backend according to these rules:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If a successful authorization already exists on the payment, the invalidation endpoint will return the error code 2100."),(0,i.kt)("li",{parentName:"ol"},"If a callback has been sent but the authorization attempt has not yet been patched or 3DS is ongoing, the invalidation endpoint will return the error code 2101. The authorization attempt must be patched with reasoncode 1010 before invalidation."),(0,i.kt)("li",{parentName:"ol"},"A failed authorization will result in a successful invalidation.")),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(92368).Z},(0,i.kt)("img",{alt:"Payment invalidation after callback",src:a(39528).Z,width:"1587",height:"1123"}))))}p.isMDXComponent=!0},92368:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/invalidation-after-callback-c19ac84abe9d22f22493824442a620fe.svg"},77889:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/invalidation-before-callback-deefb1c6ad48ff07f7a976c2ca50cdf0.svg"},39528:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/invalidation-after-callback-c19ac84abe9d22f22493824442a620fe.svg"},70173:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/invalidation-before-callback-deefb1c6ad48ff07f7a976c2ca50cdf0.svg"}}]);