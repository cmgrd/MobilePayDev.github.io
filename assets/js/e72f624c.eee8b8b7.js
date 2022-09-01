"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,u=c["".concat(l,".").concat(k)]||c[k]||d[k]||i;return n?a.createElement(u,o(o({ref:t},m),{},{components:n})):a.createElement(u,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6964:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={},o="Migrate from v1 and v2",p={unversionedId:"reporting/migrate-from-v1v2",id:"reporting/migrate-from-v1v2",title:"Migrate from v1 and v2",description:"As the reporting evolves, APIs are periodically reorganized, upgraded and improved. When APIs evolve, the old API is deprecated and eventually removed.",source:"@site/docs/reporting/migrate-from-v1v2.mdx",sourceDirName:"reporting",slug:"/reporting/migrate-from-v1v2",permalink:"/MobilePay-Payments-API/docs/reporting/migrate-from-v1v2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"reportingSidebar",previous:{title:"Retrieve transfers",permalink:"/MobilePay-Payments-API/docs/reporting/transfers"}},l={},s=[{value:"Migration from V1 endpoints",id:"migration-from-v1-endpoints",level:2},{value:"Payment points",id:"payment-points",level:3},{value:"List of breaking changes",id:"list-of-breaking-changes",level:4},{value:"Transfer references",id:"transfer-references",level:3},{value:"List of breaking changes",id:"list-of-breaking-changes-1",level:4},{value:"Transactions",id:"transactions",level:3},{value:"List of breaking changes",id:"list-of-breaking-changes-2",level:4},{value:"Transferred transactions",id:"transferred-transactions",level:3},{value:"Migration from V2 endpoints",id:"migration-from-v2-endpoints",level:2},{value:"Transactions",id:"transactions-1",level:3},{value:"List of breaking changes",id:"list-of-breaking-changes-3",level:4},{value:"Transferred transactions",id:"transferred-transactions-1",level:3},{value:"Transferred transactions by merchant",id:"transferred-transactions-by-merchant",level:3}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"migrate-from-v1-and-v2"},"Migrate from v1 and v2"),(0,r.kt)("p",null,"As the reporting evolves, APIs are periodically reorganized, upgraded and improved. When APIs evolve, the old API is deprecated and eventually removed.\nThis page contains information you need to know when migrating from ",(0,r.kt)("a",{parentName:"p",href:"https://mobilepaydev.github.io/MobilePay-TransactionReporting-API/index#overview"},(0,r.kt)("strong",{parentName:"a"},"Transaction Reporting API (v1 and v2)"))," to newer and more stable ",(0,r.kt)("a",{parentName:"p",href:"/docs/reporting/overview"},(0,r.kt)("strong",{parentName:"a"},"Reporting API v3")),"."),(0,r.kt)("h2",{id:"migration-from-v1-endpoints"},"Migration from V1 endpoints"),(0,r.kt)("h3",{id:"payment-points"},"Payment points"),(0,r.kt)("p",null,"GET ",(0,r.kt)("a",{parentName:"p",href:"https://mobilepaydev.github.io/MobilePay-TransactionReporting-API/index#payment_points_endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"/transaction-reporting/api/merchant/v1/paymentpoints"))),(0,r.kt)("p",null,"This endpoint is replaced by:"),(0,r.kt)("p",null,"GET ",(0,r.kt)("a",{parentName:"p",href:"/docs/reporting/payment-points"},(0,r.kt)("inlineCode",{parentName:"a"},"v3/reporting/paymentpoints"))),(0,r.kt)("h4",{id:"list-of-breaking-changes"},"List of breaking changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Paging was implemented with new ",(0,r.kt)("inlineCode",{parentName:"li"},"pagesize")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"pagenumber")," query parameters"),(0,r.kt)("li",{parentName:"ul"},"Properties that were removed from response body:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"merchantId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"merchantName")))),(0,r.kt)("li",{parentName:"ul"},"Properties that were renamed in response body:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paymentPoints[i].paymentPointId")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"paymentPoints[i].id")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paymentPoints[i].paymentPointName")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"paymentPoints[i].name"))))),(0,r.kt)("h3",{id:"transfer-references"},"Transfer references"),(0,r.kt)("p",null,"GET ",(0,r.kt)("a",{parentName:"p",href:"https://mobilepaydev.github.io/MobilePay-TransactionReporting-API/index#transfer_references_endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"/transaction-reporting/api/merchant/v1/paymentpoints/{paymentpointid}/transfer-references"))),(0,r.kt)("p",null,"This endpoint is replaced by:"),(0,r.kt)("p",null,"GET ",(0,r.kt)("a",{parentName:"p",href:"/docs/reporting/transfers#retrieve-a-list-of-transfers"},(0,r.kt)("inlineCode",{parentName:"a"},"v3/reporting/transfers"))),(0,r.kt)("h4",{id:"list-of-breaking-changes-1"},"List of breaking changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Paging was implemented with new ",(0,r.kt)("inlineCode",{parentName:"li"},"pagesize")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"pagenumber")," query parameters"),(0,r.kt)("li",{parentName:"ul"},"Properties that were renamed in response body:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transferReferences[i].transferReference")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"transfers[i].reference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transferReferences[i].transferReferenceDate")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"transfers[i].date")))),(0,r.kt)("li",{parentName:"ul"},"Request parameters that were changed:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paymentpointid")," - in the old version of the endpoint, this property was a path parameter, it has now been changed to the query parameter. So to get the same result as it was returned from an old endpoint, provide this query parameter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from")," was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"startdate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to")," was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"enddate")))),(0,r.kt)("li",{parentName:"ul"},"Response was changed from a JSON array to a JSON object that contains an array")),(0,r.kt)("h3",{id:"transactions"},"Transactions"),(0,r.kt)("p",null,"GET ",(0,r.kt)("a",{parentName:"p",href:"https://mobilepaydev.github.io/MobilePay-TransactionReporting-API/index#transactions_v1_endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"/transaction-reporting/api/merchant/v1/paymentpoints/{paymentpointid}/transactions"))),(0,r.kt)("p",null,"This endpoint is replaced by:"),(0,r.kt)("p",null,"GET ",(0,r.kt)("a",{parentName:"p",href:"/docs/reporting/transactions"},(0,r.kt)("inlineCode",{parentName:"a"},"v3/reporting/transactions"))),(0,r.kt)("h4",{id:"list-of-breaking-changes-2"},"List of breaking changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Paging was implemented with new ",(0,r.kt)("inlineCode",{parentName:"p"},"pagesize")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pagenumber")," query parameters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Properties that were removed from response body"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"merchantId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"merchantName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paymentPointId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paymentPointName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transferReference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transferReferenceDate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"receiverAccount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transactions[i].paymentTransactionId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transactions[i].senderComment")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transactions[i].externalTransactionId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transactions[i].externalBulkId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nextPageToken")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Properties that were renamed:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transactions[i].transferReferenceDate")," renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"transactions[i].transferDate")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Request parameters that were changed"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paymentpointid")," - in the old version of the endpoint, this property was a path parameter, it has now been changed to the query parameter. So to get same result as it was returned from old endpoint, provide this query parameter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from")," was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"startdate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to")," was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"enddate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageToken")," removed")))),(0,r.kt)("h3",{id:"transferred-transactions"},"Transferred transactions"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mobilepaydev.github.io/MobilePay-TransactionReporting-API/index#transferred_transactions_v1_endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"/transaction-reporting/api/merchant/v1/paymentpoints/{paymentpointid}/transfers/{transferreference}"))),(0,r.kt)("p",null,"This endpoint was deprecated."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You could achieve similar results by using ",(0,r.kt)("inlineCode",{parentName:"p"},"transferid")," in new transfers endpoint, more information ",(0,r.kt)("a",{parentName:"p",href:"/docs/reporting/transactions"},"here"),".")),(0,r.kt)("h2",{id:"migration-from-v2-endpoints"},"Migration from V2 endpoints"),(0,r.kt)("h3",{id:"transactions-1"},"Transactions"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mobilepaydev.github.io/MobilePay-TransactionReporting-API/index#transactions_v2_endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"/transaction-reporting/api/merchant/v2/paymentpoints/{paymentpointid}/transactions"))),(0,r.kt)("p",null,"This endpoint is replaced by:"),(0,r.kt)("p",null,"GET ",(0,r.kt)("a",{parentName:"p",href:"/docs/reporting/transactions#retrieve-a-list-of-transactions"},(0,r.kt)("inlineCode",{parentName:"a"},"v3/reporting/transactions"))),(0,r.kt)("h4",{id:"list-of-breaking-changes-3"},"List of breaking changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Paging was implemented with new ",(0,r.kt)("inlineCode",{parentName:"li"},"pagesize")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"pagenumber")," query parameters"),(0,r.kt)("li",{parentName:"ul"},"Properties that were removed from response body",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"companyRegNo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"merchantName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paymentPointId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paymentPointName")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"receiverAccount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transactions[i].userIndicator")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nextPageToken")))),(0,r.kt)("li",{parentName:"ul"},"Request parameters that were changed:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"paymentpointid")," - in the old version of the endpoint, this property was a path parameter, it has now been changed to the query parameter. So to get same result as it was returned from old endpoint, provide this query parameter."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"from")," was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"startdate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"to")," was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"enddate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction[i].transferReferenceDate")," was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"transactions[i].transferDate")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"transaction[i].merchantPayerReference")," was renamed to ",(0,r.kt)("inlineCode",{parentName:"li"},"transactions[i].agreementExternalId")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pageToken")," was removed")))),(0,r.kt)("h3",{id:"transferred-transactions-1"},"Transferred transactions"),(0,r.kt)("p",null,"GET ",(0,r.kt)("a",{parentName:"p",href:"https://mobilepaydev.github.io/MobilePay-TransactionReporting-API/index#transferred_transactions_v2_endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"/transaction-reporting/api/merchant/v2/paymentpoints/{paymentpointid}/transfers/{transferreference}"))),(0,r.kt)("p",null,"This endpoint was deprecated."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You could achieve similar results by using ",(0,r.kt)("inlineCode",{parentName:"p"},"transferid")," in new transfers endpoint, more information ",(0,r.kt)("a",{parentName:"p",href:"/docs/reporting/transactions"},"here"),".")),(0,r.kt)("h3",{id:"transferred-transactions-by-merchant"},"Transferred transactions by merchant"),(0,r.kt)("p",null,"GET ",(0,r.kt)("a",{parentName:"p",href:"https://mobilepaydev.github.io/MobilePay-TransactionReporting-API/index#transferred_transactions_by_merchant_endpoint"},(0,r.kt)("inlineCode",{parentName:"a"},"/transaction-reporting/api/merchant/v2/paymentpoints/transfers"))),(0,r.kt)("p",null,"This endpoint was deprecated."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You could achieve similar results with the new transfers endpoint, more information ",(0,r.kt)("a",{parentName:"p",href:"/docs/reporting/transactions"},"here"),".")))}d.isMDXComponent=!0}}]);