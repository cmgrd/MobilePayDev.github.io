"use strict";(self.webpackChunkmobile_pay_merchant_payments_documentation=self.webpackChunkmobile_pay_merchant_payments_documentation||[]).push([[8728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=o,b=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),o=n(67294),r=n(86010),i=n(72389),l=n(67392),s=n(7094),p=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:i,defaultValue:m,values:c,groupId:b,className:y}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,l.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[T,x]=(0,o.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:P}=(0,p.o5)();if(null!=b){const e=k[b];null!=e&&e!==T&&v.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,n=N.indexOf(t),a=v[n].value;a!==T&&(P(t),x(a),null!=b&&w(b,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},y)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>N.push(e),onKeyDown:E,onClick:O},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":T===t})}),n??t)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,i.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},77397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905)),r=n(27133);const i={sidebar_position:2},l="Testing",s={unversionedId:"app-payments/development-guide/test",id:"app-payments/development-guide/test",title:"Testing",description:"This page includes information to make sure your integration works as planned. Testing activities will be done in a sandbox environment and it won't create any real payments.",source:"@site/docs/app-payments/development-guide/test.mdx",sourceDirName:"app-payments/development-guide",slug:"/app-payments/development-guide/test",permalink:"/docs/app-payments/development-guide/test",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Getting started",permalink:"/docs/app-payments/development-guide/getting-started"},next:{title:"Verification",permalink:"/docs/app-payments/development-guide/verification"}},p={},u=[{value:"MobilePay sandbox environment",id:"mobilepay-sandbox-environment",level:2},{value:"Test merchants",id:"test-merchants",level:2},{value:"Test users",id:"test-users",level:2},{value:"Test app",id:"test-app",level:2},{value:"Integration tests",id:"integration-tests",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing"},"Testing"),(0,o.kt)("p",null,"This page includes information to make sure your integration works as planned. Testing activities will be done in a sandbox environment and it won't create any real payments."),(0,o.kt)("h2",{id:"mobilepay-sandbox-environment"},"MobilePay sandbox environment"),(0,o.kt)("p",null,"The sandbox environment is dedicated for integration purposes. It is the same as production with some limitations (not a full list):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No actual payments and reservations are made.")),(0,o.kt)("h2",{id:"test-merchants"},"Test merchants"),(0,o.kt)("p",null,"You will receive details for a test merchant to use in a sandbox environment during your onboarding. It will allow you to login to ",(0,o.kt)("a",{parentName:"p",href:"https://sandprod-portal.mobilepay.dk/"},"Sandbox MobilePay portal")," to ",(0,o.kt)("a",{parentName:"p",href:"/docs/app-payments/authentication"},"generate API keys"),", and/or to ",(0,o.kt)("a",{parentName:"p",href:"/docs/app-payments/payment-points"},"set up Payment Points")," for your testing purposes. It is a valuable experience since you will need to do the same activities when moving to production."),(0,o.kt)("h2",{id:"test-users"},"Test users"),(0,o.kt)("p",null,"You will receive information about test users during your onboarding. You will have a dedicated test user which you will be able to use to login into ",(0,o.kt)("a",{parentName:"p",href:"#test-app"},"MobilePay Test App")),(0,o.kt)("h2",{id:"test-app"},"Test app"),(0,o.kt)("p",null,"In order to complete a payment flow in the sandbox environment, a test version of the MobilePay app is available. This version of the MobilePay app is similar to the live version, but only supports payments in the sandbox environment. You can only use the test users that we provide to you."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Do not use the test phone number in the production environment, as it might be a real user there.")),(0,o.kt)(r.ZP,{mdxType:"TestApp"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"MobilePay Sandbox")," app supports not only it's own schema ",(0,o.kt)("inlineCode",{parentName:"p"},"mobilepay-test://")," but also the production schema ",(0,o.kt)("inlineCode",{parentName:"p"},"mobilepay://"),". This means that some of you may experience issues in iOS when trying to make a real production payment, sandbox app would open.\nTo circumvent this you could try closing MobilePay Sandbox app and opening MobilePay so that it's running in the background while doing the production payment. Read more on how to close an app: ",(0,o.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT201330"},"https://support.apple.com/en-us/HT201330"),".")),(0,o.kt)("h2",{id:"integration-tests"},"Integration tests"),(0,o.kt)("p",null,"We also have a Payments Testing API in sandbox environment, which has only one endpoint for simulating user's swipe in MobilePay app. You can use that to setup integration tests or in any other way where it fits you."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Simulate user swiping and confirming the payment in MobilePay app."',title:'"Simulate',user:!0,swiping:!0,and:!0,confirming:!0,the:!0,payment:!0,in:!0,MobilePay:!0,'app."':!0},"curl https://api.sandbox.mobilepay.dk/v1/integration-test/payments/{PAYMENT_ID}/reserve \\\n  -X POST \\\n  -H 'Authorization: Bearer {API_KEY}' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"paymentSourceId\": {UUID},\n    \"userId\": {UUID}\n  }'\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"paymentSourceId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"userId")," are unique for your test users. You will receive these values during onboarding."))}m.isMDXComponent=!0},27133:(e,t,n)=>{n.d(t,{ZP:()=>s});var a=n(87462),o=(n(67294),n(3905)),r=n(65488),i=n(85162);const l={toc:[{value:"Log on to test app",id:"log-on-to-test-app",level:3}]};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(r.Z,{defaultValue:"android",values:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"android",mdxType:"TabItem"},(0,o.kt)("p",null,"To install, you will have to allow installation from \u201cunknown sources\u201d."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install.appcenter.ms/orgs/mobilepay-apps/apps/mobilepay-dk-android-sandbox/distribution_groups/external"},"MobilePay DK Sandbox app")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://install.appcenter.ms/orgs/mobilepay-apps/apps/mobilepay-fi-android-sandbox/distribution_groups/external"},"MobilePay FI Sandbox app"))),(0,o.kt)(i.Z,{value:"ios",mdxType:"TabItem"},(0,o.kt)("p",null,"iOS MobilePay Sandbox app is available through Apple TestFlight. Therefore Apple TestFlight must be installed to the device.  Using below link on a mobile device will initiate download of and registration to TestFlight. No prior registration or invitation needed.\nPlease open below link on your mobile device:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://testflight.apple.com/join/xarydQZ4"},"MobilePay DK Sandbox app")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://testflight.apple.com/join/hP92EaBR"},"MobilePay FI Sandbox app")))),(0,o.kt)("h3",{id:"log-on-to-test-app"},"Log on to test app"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install and open the MobilePay DK/FI Vendor app"),(0,o.kt)("li",{parentName:"ol"},'Select "Log p\xe5 (Eksisterende bruger)" / "Kirjaudu sovellukseen / "Log on (existing user)"'),(0,o.kt)("li",{parentName:"ol"},"Enter a valid Sandbox phone number (see below section about test users)"),(0,o.kt)("li",{parentName:"ol"},"Enter SSN (Only relevant on fresh install)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Denmark CPR no.: 000000-0000"),(0,o.kt)("li",{parentName:"ul"},"Finland henkil\xf6tunnus: 00000000000"))),(0,o.kt)("li",{parentName:"ol"},"Enter PIN: \u201c1234\u201d"),(0,o.kt)("li",{parentName:"ol"},'Enter activation code: \u201c123456\u201d and press "OK" / "Jatka"')))}s.isMDXComponent=!0}}]);