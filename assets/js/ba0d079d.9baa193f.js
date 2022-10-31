"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[6663],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:2},r="Authentication",l={unversionedId:"pos/authentication",id:"pos/authentication",title:"Authentication",description:"The PoS V10 API uses access tokens to authenticate calls from integrator clients. In order for an integrator client to use the PoS V10 API, it must first obtain an access token using the Integrator Authentication API. The access tokens used in the PoS V10 solution identifies both an integrator client and the integrator and may optionally identify the merchant on which the client is calling on behalf of.",source:"@site/docs/pos/authentication.md",sourceDirName:"pos",slug:"/pos/authentication",permalink:"/MobilePay-Payments-API/docs/pos/authentication",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Production",permalink:"/MobilePay-Payments-API/docs/pos/development-guide/production"},next:{title:"Detecting MobilePay",permalink:"/MobilePay-Payments-API/docs/pos/detecting-mobilepay"}},s={},c=[{value:"Credentials Flow",id:"credentials-flow",level:2},{value:"Obtaining an access token",id:"obtaining-an-access-token",level:2},{value:"Expected status codes",id:"expected-status-codes",level:3},{value:"cURL example",id:"curl-example",level:3}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"The PoS V10 API uses access tokens to authenticate calls from integrator clients. In order for an integrator client to use the PoS V10 API, it must first obtain an access token using the Integrator Authentication API. The access tokens used in the PoS V10 solution identifies both an integrator client and the integrator and may optionally identify the merchant on which the client is calling on behalf of."),(0,i.kt)("h2",{id:"credentials-flow"},"Credentials Flow"),(0,i.kt)("p",null,"The Integrator Authentication solution is based on the OpenID/OAuth 2.0 specification. By following the OpenID Connect protocol, MobilePay makes it easy for integrators to integrate with MobilePay. Currently, the flow supported is the Client Credentials grant type. In the Credentials Flow (defined in OAuth 2.0 RFC 6749, section 4.4), integrators pass along their ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret")," (received in Step 5 above) to authenticate themselves and obtain an access token. The Credentials Flow is illustrated in the diagram below."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:n(3425).Z},(0,i.kt)("img",{alt:"PoS sekvens diagram",src:n(6274).Z,width:"2066",height:"984"}))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The client app authenticates with the Authorization Server using its ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret")," using the token endpoint.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The Authorization Server validates the ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The Authorization Server responds with an ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The Client application can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," to call the PoS V10 API.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The PoS V10 API responds."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Oauth2 client secrets should not be stored in a way, where they can be accessed by someone from outside the integrator organisation.")),(0,i.kt)("h2",{id:"obtaining-an-access-token"},"Obtaining an access token"),(0,i.kt)("p",null,"This document only describes the token endpoint used to request an access token. A complete specification of the endpoints, responses and response codes for the Integrator Authentication API can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://sandbox-developer.mobilepay.dk/product"},"APIs section"),"."),(0,i.kt)("p",null,"The token endpoint (",(0,i.kt)("inlineCode",{parentName:"p"},"POST /connect/token"),") is used when requesting an access token for an onboarded integrator client. The following\nheaders must be set:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Headers"',title:'"Headers"'},"Content-Type: x-www-urlencoded\nx-ibm-client-id: client_id\nAuthorization: Basic (client_id:client_secret).toBase64EncodedString().\n")),(0,i.kt)("p",null,"The OAuth ",(0,i.kt)("inlineCode",{parentName:"p"},"client_id"),"and ",(0,i.kt)("inlineCode",{parentName:"p"},"client_secret")," will be sent to the integrator in a closed zip file from ",(0,i.kt)("a",{parentName:"p",href:"mailto:developer@mobilepay.dk"},"developer@mobilepay.dk")," to integrators e-mail (step 4 in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/pos/development-guide/getting-started#step-4---receive-security-credentials"},"Client onboarding guide"),")."),(0,i.kt)("p",null,"In addition, the ",(0,i.kt)("inlineCode",{parentName:"p"},"grant_type")," parameter must be set and a ",(0,i.kt)("inlineCode",{parentName:"p"},"merchant_vat")," parameter may optionally be set as described below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"grant_type")),(0,i.kt)("td",{parentName:"tr",align:null},"client_credentials"),(0,i.kt)("td",{parentName:"tr",align:null},"The Client Credentials grant type is used by clients to obtain an ",(0,i.kt)("inlineCode",{parentName:"td"},"access_token")," outside of the context of a user.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"merchant_vat")),(0,i.kt)("td",{parentName:"tr",align:null},"DK12345678 or FI12345678"),(0,i.kt)("td",{parentName:"tr",align:null},"VAT number of the merchant the integrator client is calling on behalf of. The VAT number consists of country prefix (either FI or DK) and 8 digits.")))),(0,i.kt)("p",null,"If the ",(0,i.kt)("inlineCode",{parentName:"p"},"merchant_vat")," parameter is supplied, the VAT number will be added as a claim on the access token, and it will only be possible to use the access token to perform calls on behalf of the given merchant. If it is not supplied, the access token will not be restricted to a fixed merchant. Instead, clients will have to include a header on all calls to the PoS V10 API that includes the VAT number of the merchant the client is acting on behalf of, for the given call."),(0,i.kt)("p",null,"Example of response body from SandBox environment:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Response body"',title:'"Response','body"':!0},'{\n    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",\n    "expires_in": 3700,\n    "token_type": "Bearer",\n    "scope": "integrator_scope"\n}\n')),(0,i.kt)("h3",{id:"expected-status-codes"},"Expected status codes"),(0,i.kt)("p",null,"You might encounter the following status codes :"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"200 - OK"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"401 - Unauthorized")," if the client is not authorized/authenticated through the API Gateway")),(0,i.kt)("h3",{id:"curl-example"},"cURL example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example"',title:'"Example"'},"curl --location --request POST 'https://api.sandbox.mobilepay.dk/integrator-authentication/connect/token' \\\n--header 'x-ibm-client-id: {YOUR_GENERATED_CLIENT-ID}' \\\n--header 'Content-Type: application/x-www-form-urlencoded' \\\n--header 'Authorization: Basic ({YOUR_CLIENT_ID}:{YOUR_CLIENT_SECRET}).toBase64EncodedString()' \\\n--data-urlencode 'grant_type=client_credentials' \\\n--data-urlencode 'merchant_vat=DK12345678'\n")),(0,i.kt)("p",null," ",(0,i.kt)("strong",{parentName:"p"},"Environments:"),"\nThe following URLs are the environment routes for the Integrator Authentication API"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SandBox: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://api.sandbox.mobilepay.dk/integrator-authentication")),(0,i.kt)("li",{parentName:"ul"},"Production: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://api.mobilepay.dk/integrator-authentication"))))}d.isMDXComponent=!0},3425:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/pos-sekvensdiagram-34bd58772d5e7b31fba1b35700ef5919.png"},6274:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pos-sekvensdiagram-34bd58772d5e7b31fba1b35700ef5919.png"}}]);