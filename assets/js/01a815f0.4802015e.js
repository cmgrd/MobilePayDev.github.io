"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[6634],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),h=r,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52575:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={},i="Checkout",l={unversionedId:"online/features/checkout",id:"online/features/checkout",title:"Checkout",description:"With MobilePay Checkout webshops can offer their customers to complete purchases even faster by linking payment and delivery details. When using Checkout MobilePay will supply you with the billing address and optionally the delivery address of the customer. When initiating a Checkout payment the user will then be prompted to choose address before accepting the payment in the MobilePay app.",source:"@site/docs/online/features/checkout.md",sourceDirName:"online/features",slug:"/online/features/checkout",permalink:"/MobilePay-Payments-API/docs/online/features/checkout",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"onlineSidebar",previous:{title:"Phone number on landing page",permalink:"/MobilePay-Payments-API/docs/online/features/phone-number"},next:{title:"Embedded Flow (IFrame)",permalink:"/MobilePay-Payments-API/docs/online/features/embedded-flow"}},s={},d=[{value:"How to initiate a Checkout payment",id:"how-to-initiate-a-checkout-payment",level:2},{value:"Checkout callback",id:"checkout-callback",level:2}],c={toc:d};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"checkout"},"Checkout"),(0,r.kt)("p",null,"With MobilePay Checkout webshops can offer their customers to complete purchases even faster by linking payment and delivery details. When using Checkout MobilePay will supply you with the billing address and optionally the delivery address of the customer. When initiating a Checkout payment the user will then be prompted to choose address before accepting the payment in the MobilePay app."),(0,r.kt)("p",null,"Please visit our ",(0,r.kt)("a",{parentName:"p",href:"/docs/online/features/checkout-best-practice"},"best practice guide")," for guidelines and recommendations on how to use MobilePay Checkout in a webshop."),(0,r.kt)("h2",{id:"how-to-initiate-a-checkout-payment"},"How to initiate a Checkout payment"),(0,r.kt)("p",null,"Checkout can be used on any MobilePay Online payment and is initiated as any other payment using:\n",(0,r.kt)("inlineCode",{parentName:"p"},"POST /payments")),(0,r.kt)("p",null,"Four parameters are required when initiating a Checkout payment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Request body example"',title:'"Request',body:!0,'example"':!0},'    "isCheckout":true,\n    "addressCallbackUrl":"http://example.com",\n    "deliveryAddressAllowed":true,\n    "deliveryAddressDisallowedReasonCode":4, //Only required if "deliveryAddressAllowed":false.\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"isCheckout: This will define the payment as a Checkout payment when set to true"),(0,r.kt)("li",{parentName:"ul"},"addressCallbackUrl: The url where we will deliver the checkout callback with the address details. The Checkout callback will always be delivered before the card/token callback."),(0,r.kt)("li",{parentName:"ul"},"deliveryAddressAllowed: Will define whether the user is allowed to choose delivery address. If set to false the user can only choose billing address. Can be used for instance if the user has chosen 'Pick up at store' in the webshop."),(0,r.kt)("li",{parentName:"ul"},"deliveryAddressDisallowedReasonCode: if deliveryAddressAllowed is set to false a reason must be given:\n1: Reason not given, 2: Goods don't require physical delivery, 3: 'Pick up at store' already selected in the Webshop, 4:'Parcel Shop' already selected in the Webshop, 5: Shop will select a parcelshop close to your home\"")),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(20722).Z},(0,r.kt)("img",{alt:"checkout sequence diagram",src:n(23194).Z,width:"1587",height:"1123"}))),(0,r.kt)("h2",{id:"checkout-callback"},"Checkout callback"),(0,r.kt)("p",null,"The callback will have a JSON body like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Checkout callback example"',title:'"Checkout',callback:!0,'example"':!0},'    {\n      "PaymentId": "9369ea35-4b5b-428a-bdf8-c29c29a4b264",\n      "AuthorizationAttemptId": "a8c99cbf-3468-4eb9-9c0e-ddd110e8ed33",\n      "Addresses": [{\n        "FirstName": "John",\n        "Surname": "Doe",\n        "Attention": "",\n        "CompanyName": "",\n        "AddressLine1": "Flower Street 23",\n        "AddressLine2": "",\n        "PostalCode": "3434",\n        "City": "Great city",\n        "CountryCode": "DK",\n        "IsCustomerOfficialAddress": true,\n        "IsBillingAddress": true,\n        "IsDeliveryAddress": true,\n        "AddressValidationMethod": "DaWa",\n        "AddressValidationStatus": "NotValidated"\n      }],\n      "EmailAddress": "johndoe@gmail.com",\n      "EmailAddressValidationMethod": "EmailEnteredTwice",\n      "EmailAddressValidationStatus": "Validated",\n      "PhoneNumber": "+4512345678",\n      "PhoneNumberValidationMethod": "SMSChallenge",\n      "PhoneNumberValidationStatus": "Validated"\n    }\n')),(0,r.kt)("p",null,"The address array may contain two items. One for billing address and one for delivery address. If billing and delivery address is the same the array will only contain one item where IsBillingAddress and IsDeliveryAddress is set to true."),(0,r.kt)("p",null,"If deliveryAddressAllowed is set to false on payment initiation the array will only contain one item where IsBillingAddress is set to true and IsDeliveryAddress is set to false."))}u.isMDXComponent=!0},20722:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/checkout-sequence-diagram-397fe1d6caa9030959de2b6d12153bb0.svg"},23194:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/checkout-sequence-diagram-397fe1d6caa9030959de2b6d12153bb0.svg"}}]);