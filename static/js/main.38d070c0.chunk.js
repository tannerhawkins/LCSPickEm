(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[4],{19:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return o}));var c=n(23),a=n(25);c.a.initializeApp({apiKey:"AIzaSyBikWf9vy86sF9wXyRjkpdrrAJaw7WoQ8M",authDomain:"ancient-path-adventures.firebaseapp.com",projectId:"ancient-path-adventures",storageBucket:"ancient-path-adventures.appspot.com",messagingSenderId:"1051282870332",appId:"1:1051282870332:web:8f7a5922db7d370e86b339",measurementId:"G-NPPQJQTEQN"});const s=c.a.firestore();var o=c.a.auth();new c.a.auth.GoogleAuthProvider;const r=a.a.IN_CYPRESS_TEST?s.collection("testUserData"):s.collection("userData"),i=a.a.IN_CYPRESS_TEST?s.collection("testClassData"):s.collection("classData"),d=a.a.IN_CYPRESS_TEST?s.collection("testModules"):s.collection("modules"),l=(s.collection("modules"),s.collection("classData"),s.collection("userData"),s.collection("apaModules"))},21:function(e,t,n){"use strict";n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"j",(function(){return i})),n.d(t,"a",(function(){return d})),n.d(t,"g",(function(){return l})),n.d(t,"f",(function(){return u})),n.d(t,"d",(function(){return b})),n.d(t,"b",(function(){return p})),n.d(t,"h",(function(){return j})),n.d(t,"i",(function(){return O}));var c=n(13),a=n(22);const s=Object(c.a)((()=>a.c.getState()),(e=>e.account)),o=Object(c.a)(s,(e=>e.signedIn)),r=Object(c.a)(s,(e=>e.displayName)),i=(Object(c.a)(s,(e=>e.email)),Object(c.a)(s,(e=>e))),d=Object(c.a)(s,(e=>e.accountType)),l=Object(c.a)(d,(e=>"teacher"===e)),u=Object(c.a)(d,(e=>"student"===e)),b=Object(c.a)(d,(e=>"admin"===e)),p=Object(c.a)(s,(e=>e.classList)),j=Object(c.a)(s,(e=>e.moduleList)),O=Object(c.a)(s,(e=>e.uid))},22:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return O})),n.d(t,"b",(function(){return E}));var c=n(47);const a={signedIn:!1};const s={currentClass:null};var o=n(43),r=n.n(o),i=n(46),d=n(44);const l={currentStep:-1,inModule:!1,selectedModule:void 0};const u=Object(c.a)({account:function(e=a,t){switch(t.type){case"SIGN_IN":return{...e,...t.payload,signedIn:!0,user:t.payload};case"SIGN_OUT":return{initialState:a};case"UPDATE_CLASS_LIST":return{...e,classList:t.payload};case"SET_PASSWORD_LENGTH":return{...e,passwordLength:t.payload};case"CLEAR_STATE":return{initialState:a};default:return e}},class:function(e=s,t){switch(t.type){case"SET_CURRENT_CLASS":return{...e,currentClass:t.payload};case"ADD_MODULE":return{...e,currentClass:{...e.currentClass,modules:[...e.currentClass.modules,t.payload]}};case"CLEAR_STATE":return{initialState:s};default:return e}},module:function(e=l,t){switch(t.type){case"SET_CURRENT_STEP":return{...e,currentStep:t.payload};case"SET_SELECTED_MODULE":return{...e,selectedModule:t.payload};case"SET_SELECTED_STEP":return{...e,selectedStep:t.payload};case"ADD_STEP":return{...e,selectedModule:{...e.selectedModule,steps:[...e.selectedModule.steps,t.payload]}};case"UPDATE_STEP":return{...e,selectedModule:{...e.selectedModule,steps:e.selectedModule.steps.map((e=>e.id===t.payload.id?t.payload:e))}};case"SET_STEPS":return{...e,selectedModule:{...e.selectedModule,steps:t.payload}};case"SET_TITLE":return{...e,selectedModule:{...e.selectedModule,title:t.payload}};case"SET_DESCRIPTION":return{...e,selectedModule:{...e.selectedModule,description:t.payload}};default:return e}}}),b=()=>({type:"CLEAR_STATE"}),p={key:"root",storage:r.a},j=Object(i.a)(p,((e,t)=>("CLEAR_STATE"===t.type&&(e=void 0),u(e,t)))),O=Object(c.b)(j,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),E=Object(d.a)(O)},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c={IN_CYPRESS_TEST:void 0!==window.Cypress,COLOR:{LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",LIGHT_BLUE:"#92d4f4",DARK_BLUE:"#373B53",TEAL:"#B5FFEA",GRAY:"#E5E5E5",PINK:"#eb34c0",LIGHT_PINK:"#e663c6"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px",EMPTY_MODULE:{title:"",description:"",public:!0,creator:void 0,steps:[]},MOCK_MODULE:{title:"Mock Module",description:"This module is used for testing and development",public:!0,creator:"someteacherIDhere",steps:[{type:"text",data:{}},{type:"video",data:{}},{type:"quiz",data:{}}]}}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(19);const c=e=>({type:"SET_CURRENT_CLASS",payload:e})},36:function(e,t,n){"use strict";var c=n(2),a=n(34),s=n(11);var o=()=>{const{pathname:e}=Object(s.h)();return Object(c.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null},r=n(5);const i=e=>Object(r.jsxs)(a.b,{children:[Object(r.jsx)(o,{}),Object(r.jsxs)(a.a,{titleTemplate:"%s | Ancient Path Adventures",defaultTitle:"Ancient Path Adventures",defer:!1,children:[e.title&&Object(r.jsx)("title",{children:e.title}),Object(r.jsx)("meta",{name:"description",content:e.description})]}),Object(r.jsx)("div",{id:"wrapper",children:Object(r.jsx)("div",{id:"main",children:e.children})})]});i.defaultProps={children:null,fullPage:!1,title:null,description:"Ancient Path Adventures"};t.a=i},37:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));n(16),n(19);const c=e=>({type:"SIGN_IN",payload:e}),a=e=>({type:"SET_PASSWORD_LENGTH",payload:e})},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(13),a=n(22);const s=Object(c.a)((()=>a.c.getState()),(e=>e.class)),o=Object(c.a)(s,(e=>e.currentClass))},52:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),s=n(27),o=n.n(s),r=(n(52),n(29)),i=n(11),d=n(36),l=n(21),u=n(16),b=n(19),p=n(37),j=n(38),O=n(30),E=n(5);const{PUBLIC_URL:S}=Object({NODE_ENV:"production",PUBLIC_URL:"/AncientPathAdventures",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),T=Object(c.lazy)((()=>Promise.all([n.e(0),n.e(25)]).then(n.bind(null,250)))),h=Object(c.lazy)((()=>Promise.all([n.e(0),n.e(26)]).then(n.bind(null,251)))),_=Object(c.lazy)((()=>Promise.all([n.e(0),n.e(23)]).then(n.bind(null,255)))),f=Object(c.lazy)((()=>Promise.all([n.e(0),n.e(1),n.e(29)]).then(n.bind(null,256)))),m=Object(c.lazy)((()=>n.e(34).then(n.bind(null,252)))),y=Object(c.lazy)((()=>n.e(28).then(n.bind(null,253)))),A=Object(c.lazy)((()=>n.e(32).then(n.bind(null,254))));var v=()=>{const e=Object(u.b)(),t=Object(u.c)(l.e),n=Object(u.c)(l.i),a=Object(u.c)(l.g),s=Object(u.c)(l.f),o=Object(u.c)(l.d),v=Object(u.c)(j.a),D=Object(u.c)(l.b);return Object(c.useEffect)((()=>{t&&b.e.doc(n).get().then((t=>e(Object(p.b)(t.data())))),t&&!v?D[0]&&e(Object(O.a)(D[0])):t&&b.c.doc(null===v||void 0===v?void 0:v.cid).get().then((t=>e(Object(O.a)(t.data()))))}),[]),Object(E.jsx)(r.a,{basename:S,children:Object(E.jsxs)(c.Suspense,{fallback:Object(E.jsx)(d.a,{}),children:[Object(E.jsxs)(i.d,{children:[Object(E.jsx)(i.b,{exact:!0,path:"/home",component:_}),!t&&Object(E.jsx)(i.b,{path:"/signin",component:T}),!t&&Object(E.jsx)(i.b,{path:"/signup",component:h}),t&&Object(E.jsx)(i.b,{path:"/profile",component:f}),a&&Object(E.jsx)(i.b,{path:"/teacher",component:m}),s&&Object(E.jsx)(i.b,{path:"/student",component:y}),o&&Object(E.jsx)(i.b,{path:"/admin",component:A}),a&&Object(E.jsx)(i.a,{to:"/teacher"}),s&&Object(E.jsx)(i.a,{to:"/student"}),o&&Object(E.jsx)(i.a,{to:"/admin"}),Object(E.jsx)(i.a,{to:"/home"})]}),Object(E.jsx)(i.b,{exact:!0,path:"/",children:Object(E.jsx)(i.a,{to:"/home"})})]})})},D=n(22);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=n(45);o.a.render(Object(E.jsx)(a.a.StrictMode,{children:Object(E.jsx)(u.a,{store:D.c,children:Object(E.jsx)(I.a,{loading:null,persistor:D.b,children:Object(E.jsx)(v,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}},[[64,5,7]]]);
//# sourceMappingURL=main.38d070c0.chunk.js.map