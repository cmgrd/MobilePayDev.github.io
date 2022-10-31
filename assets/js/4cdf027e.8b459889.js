"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[2243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:4},l="Production payments",o={unversionedId:"subscriptions/development-guide/production",id:"subscriptions/development-guide/production",title:"Production payments",description:"Understanding what happens in the natural course of a subscription helps provide the smoothest experience for both you and your users. Seen as you're using our platform, we are happy to provide you with tips & tricks to handle the payments.",source:"@site/docs/subscriptions/development-guide/production.md",sourceDirName:"subscriptions/development-guide",slug:"/subscriptions/development-guide/production",permalink:"/MobilePay-Payments-API/docs/subscriptions/development-guide/production",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Verification",permalink:"/MobilePay-Payments-API/docs/subscriptions/development-guide/verification"},next:{title:"OAuth access token",permalink:"/MobilePay-Payments-API/docs/subscriptions/authentication/"}},s={},p=[{value:"Payments",id:"payments",level:2},{value:"Subscriptions Payment Flow",id:"subscriptions-payment-flow",level:2},{value:"How are the payments validated",id:"how-are-the-payments-validated",level:3},{value:"How should I send the payments",id:"how-should-i-send-the-payments",level:3},{value:"Failed Payments flow",id:"failed-payments-flow",level:2},{value:"Transaction reporting api",id:"transaction-reporting-api",level:2},{value:"Subscriptions API - Transfers",id:"subscriptions-api---transfers",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"production-payments"},"Production payments"),(0,r.kt)("p",null,"Understanding what happens in the natural course of a subscription helps provide the smoothest experience for both you and your users. Seen as you're using our platform, we are happy to provide you with tips & tricks to handle the payments."),(0,r.kt)("h2",{id:"payments"},"Payments"),(0,r.kt)("p",null,"You can issue a Subscription Payment maximum ",(0,r.kt)("strong",{parentName:"p"},"126")," days before the due date, and at at least 1days before the due date."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Due Date"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Due Date Payments")," cannot be created with the same Due Date."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multiple Recurring payments")," can be created within period ","[126 before Due Date >= Payment Request Date >= 1 before Due Date]"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Next Payment Date")," If there are multiple pending payments, the Next Payment Date is the one closest to Today"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Frequency"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Valid values are 0, 1, 2, 4, 12, 26, 52, 365. For example: If you have a customer where the frequency of an agreement is set to 4, that means 365 / 4 = 91.25 (approximately quarterly)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Limit"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If your services cost more than 15.000 DKK please refer to the guidelines regarding payment limits on this page.")))),(0,r.kt)("h2",{id:"subscriptions-payment-flow"},"Subscriptions Payment Flow"),(0,r.kt)("h3",{id:"how-are-the-payments-validated"},"How are the payments validated"),(0,r.kt)("p",null,"There are validation rules; however the payments are not validated until they have been created in our system. Therefore, even though you get a response with pending payments, they may not be valid.  When you make a payment request, we will validate the request itself, but not the individual payments. So it only validates if you have the required parameters with the correct types. So the response you get for the payment request, does not say if the payment is pending, but if the payment creation is pending. Then the payments are processed in our system, and they will either be requested (valid) or declined (invalid). Moreover, you will receive a callback to inform whether payments are requested or declined. This will be sent to your payment status callback."),(0,r.kt)("h3",{id:"how-should-i-send-the-payments"},"How should I send the payments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can send your payments to us ",(0,r.kt)("strong",{parentName:"li"},"max 126 days")," prior to the due date and ",(0,r.kt)("strong",{parentName:"li"},"min 1 day")," prior to the due date."),(0,r.kt)("li",{parentName:"ul"},"The MobilePay user will be able to see payments in the app ",(0,r.kt)("strong",{parentName:"li"},"1 day before due date"),"."),(0,r.kt)("li",{parentName:"ul"},"If a payment changes status e.g. declined by user, a callback on the specific payment will be made."),(0,r.kt)("li",{parentName:"ul"},"On due date we process the payments starting from ",(0,r.kt)("strong",{parentName:"li"},"02:00"),". If some payments are declined we will then try again approx. every 2. hour up until 23:59."),(0,r.kt)("li",{parentName:"ul"},"If payment errors occur the user will get a notification approx. ",(0,r.kt)("strong",{parentName:"li"},"08:30")," that we can not process payment and that he/she can complete the payment manually (by correcting error and swiping)."),(0,r.kt)("li",{parentName:"ul"},"On 23:59 we will decline the transaction and revert back with a callback.")),(0,r.kt)("h2",{id:"failed-payments-flow"},"Failed Payments flow"),(0,r.kt)("p",null,"The process on failed payments the Due Date is as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"06:00 First hiccup is run at 06:00 on the due date. Once done, a notification about completion is returned. Merchant is informed about successful payments and user about failed payment"),(0,r.kt)("li",{parentName:"ul"},"13:30 Second hiccup is run at 13:30 on the due date. Once done, a notification about completion is returned. Merchant is informed about successful payments and user about failed payment."),(0,r.kt)("li",{parentName:"ul"},"18:00 20:00 22:30 - hiccups keep running throughout the day. Once done, a notification about completion is returned. Merchant is informed about successful payments and user about failed payment.")),(0,r.kt)("h2",{id:"transaction-reporting-api"},"Transaction reporting api"),(0,r.kt)("p",null,"With the Transaction Reporting API, you can quickly find all information associated with each of your payment. When using the Transaction Reporting API, you will be introduced to the terms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paymentPointId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ExternalTransactionID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"payment_transaction_id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Merchant Payer Reference"))),(0,r.kt)("p",null,"In the table below, you can map the field in the Subscriptions API to the field in the Transaction Reporting Api. Furthermore, you can see who provides the different fields, when initiating payments."),(0,r.kt)("p",null,"Please use the table below for correlating transactions between MobilePay Subscriptions and external merchant / integrator system."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field in Transaction Reporting Api"),(0,r.kt)("th",{parentName:"tr",align:null},"Field in Subscriptions Api"),(0,r.kt)("th",{parentName:"tr",align:null},"Who sets it?"),(0,r.kt)("th",{parentName:"tr",align:null},"Viewable in the MobilePay app"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ExternalTransactionID")," string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"external_id")," for recurring payments and one_off_payment. ",(0,r.kt)("inlineCode",{parentName:"td"},"external_id")," for one-off payments will be used in bank statement in fields"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null},"It is provided by merchant / payment integrator when initiating payments and is used for correlating transactions between MobilePay and external merchant or integrator system. ",(0,r.kt)("em",{parentName:"td"},"Recommendation:")," Use the order ID, so it is easy for the customer to see on the receipt itself, what they are paying for. The ",(0,r.kt)("inlineCode",{parentName:"td"},"orderID")," should be unique for each customer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"paymentPointId")," GUID"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SubscriptionsProviderID")),(0,r.kt)("td",{parentName:"tr",align:null},"MobilePay"),(0,r.kt)("td",{parentName:"tr",align:null},"NO"),(0,r.kt)("td",{parentName:"tr",align:null},"is a GUID assigned to payment point. You can call GET /api/merchants/me, which will return a list of all subscription providers, associated with that merchant. Read more here")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Merchant Payer Reference")," string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"external_id")," for agreements"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant"),(0,r.kt)("td",{parentName:"tr",align:null},"YES + the ",(0,r.kt)("inlineCode",{parentName:"td"},"external_id")," is included in the subject field, when/if the customer sends an email from the MobilePay app. ",(0,r.kt)("em",{parentName:"td"},"Recommendation:")," Use Customer ID, so it is easy for the Support Unit at Merchant side to know, who the customer is"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"merchant_reference")," string"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"external_id")," for payments"),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant"),(0,r.kt)("td",{parentName:"tr",align:null},"The identifier assigned by merchant to the specific payment. This is what the merchant should use to book against in their own systems when reconciling."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"payment_transaction_id")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"MobilePay"),(0,r.kt)("td",{parentName:"tr",align:null},"YES"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"subscriptions-api---transfers"},"Subscriptions API - Transfers"),(0,r.kt)("p",null,"It is important to know which transfer type are possible to use as a merchant. There are two:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Instant Transfer"),(0,r.kt)("li",{parentName:"ul"},"Daily Transfer")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"Instant Transfer"),(0,r.kt)("th",{parentName:"tr",align:null},"Daily Transfer"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"WHEN TRANSFER IS DONE")),(0,r.kt)("td",{parentName:"tr",align:null},"MobilePay transfers ",(0,r.kt)("strong",{parentName:"td"},"instantly"),"  after the payment is completed. Transfer might reach Merchant account later then MobilePay executes transfers. It depends on Merchant bank transfer times."),(0,r.kt)("td",{parentName:"tr",align:null},"MobilePay transfers  ",(0,r.kt)("strong",{parentName:"td"},"once per day"),", at night. Payments payed on day X will be transferred on day X+1. Transfer might reach Merchant account later than MobilePay executes transfers. It depends on Merchant bank transfer times.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"REFERENCE NUMBER")),(0,r.kt)("td",{parentName:"tr",align:null},"Field ",(0,r.kt)("strong",{parentName:"td"},"external_id"),"  for recurring payments and one_off_payment.  ",(0,r.kt)("inlineCode",{parentName:"td"},"external_id"),"  for one-off payments is used as Reference number."),(0,r.kt)("td",{parentName:"tr",align:null},"Reference number is generated by MobilePay. External Rules ",(0,r.kt)("a",{parentName:"td",href:"/docs/support/faq#what-is-payment-reference"},"here"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"HOW TO SET IT")),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant can set  ",(0,r.kt)("strong",{parentName:"td"},"Instant transfers"),"  for each Subscription provider in MobilePay portal."),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant can set  ",(0,r.kt)("strong",{parentName:"td"},"Daily transfers"),"  for each Subscription provider in MobilePay portal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"BANK STATEMENT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},(0,r.kt)("inlineCode",{parentName:"strong"},"external_id"))," for recurring payments and one_off_payment.",(0,r.kt)("inlineCode",{parentName:"td"},"external_id")," for one-off payments will be used in bank statement in fields. DK: Text field. FI: Text field and Reference no. field."),(0,r.kt)("td",{parentName:"tr",align:null},"MobilePay generated reference number will be used in bank statement in fields. DK: Text field. FI: Text field and Reference no. field.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Refund")),(0,r.kt)("td",{parentName:"tr",align:null},"Currently it is not possible to refund when the merchant has chosen 'instant transfer' method."),(0,r.kt)("td",{parentName:"tr",align:null},"You can only refund your customers if you have received payments with MobilePay on the day to cover the refund")))))}u.isMDXComponent=!0}}]);