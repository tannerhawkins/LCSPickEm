(this.webpackJsonpLCSPickEm=this.webpackJsonpLCSPickEm||[]).push([[0],{22:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c={IN_CYPRESS_TEST:void 0!==window.Cypress,COLOR:{PURPLE:"#6066FA",LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#FFFFFF",LIGHT_BLUE:"#92d4f4",DARK_BLUE:"#373B53",TEAL:"#B5FFEA",GRAY:"#E5E5E5",PINK:"#eb34c0",LIGHT_PINK:"#e663c6",BLACK:"#000000"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px",EMPTY_MODULE:{title:"",description:"",public:!0,creator:void 0,steps:[]},MOCK_MODULE:{title:"Mock Module",description:"This module is used for testing and development",public:!0,creator:"someteacherIDhere",steps:[{type:"text",data:{}},{type:"video",data:{}},{type:"quiz",data:{}}]}}},24:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var c=n(27);n(22);c.a.initializeApp({apiKey:"AIzaSyCjHLGz8O2l74nClTF96qs2nQVVFNQStIo",authDomain:"lcspickem-26ae4.firebaseapp.com",projectId:"lcspickem-26ae4",storageBucket:"lcspickem-26ae4.appspot.com",messagingSenderId:"980876753088",appId:"1:980876753088:web:787a12fa35989aeaca5525",measurementId:"G-71Q0N4KSYM"});const a=c.a.firestore();var i=c.a.auth();new c.a.auth.GoogleAuthProvider;const o=a.collection("userData"),r=a.collection("gameData")},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return j}));var c=n(51);const a={signedIn:!1,weeks:[]};var i=n(44),o=n.n(i),r=n(50),s=n(45);const d=Object(c.a)({account:function(e=a,t){switch(t.type){case"SIGN_IN":return{...e,...t.payload,signedIn:!0,user:t.payload};case"SIGN_OUT":return{initialState:a};case"SET_PICKS":return{...e,picks:t.payload};case"SET_PASSWORD_LENGTH":return{...e,passwordLength:t.payload};case"CLEAR_STATE":return{initialState:a};case"SET_WEEK":return{...e,week:t.payload};case"SET_WEEKS":return{...e,weeks:t.payload};default:return e}}}),l=()=>({type:"CLEAR_STATE"}),u={key:"root",storage:o.a},p=Object(r.a)(u,((e,t)=>("CLEAR_STATE"===t.type&&(e=void 0),d(e,t)))),b=Object(c.b)(p,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),j=Object(s.a)(b)},31:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"g",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return d})),n.d(t,"e",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"d",(function(){return p}));var c=n(17),a=n(26);const i=Object(c.a)((()=>a.c.getState()),(e=>e.account)),o=Object(c.a)(i,(e=>e.week)),r=Object(c.a)(i,(e=>e.weeks)),s=Object(c.a)(i,(e=>e.picks)),d=Object(c.a)(i,(e=>e.signedIn)),l=(Object(c.a)(i,(e=>e.displayName)),Object(c.a)(i,(e=>e.email)),Object(c.a)(i,(e=>e))),u=Object(c.a)(i,(e=>e.accountType)),p=Object(c.a)(i,(e=>e.uid))},39:function(e,t,n){"use strict";var c=n(22);const a=n(21).a.div`
  background-color: ${c.a.COLOR.WHITE};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: black;
  font-weight: bold;
  &:hover {
    background-color: ${c.a.COLOR.GRAY};
    cursor: pointer;
  }
`;t.a=a},40:function(e,t,n){"use strict";var c=n(2),a=n(35),i=n(11);var o=()=>{const{pathname:e}=Object(i.h)();return Object(c.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null},r=n(5);const s=e=>Object(r.jsxs)(a.b,{children:[Object(r.jsx)(o,{}),Object(r.jsxs)(a.a,{titleTemplate:"%s | LCS Pick'Em",defaultTitle:"LCS Pick'Em",defer:!1,children:[e.title&&Object(r.jsx)("title",{children:e.title}),Object(r.jsx)("meta",{name:"description",content:e.description})]}),Object(r.jsx)("div",{id:"wrapper",children:Object(r.jsx)("div",{id:"main",children:e.children})})]});s.defaultProps={children:null,fullPage:!1,title:null,description:"LCS Pick'Em"};t.a=s},41:function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r}));n(18),n(24);const c=e=>({type:"SIGN_IN",payload:e}),a=e=>({type:"SET_WEEKS",payload:e}),i=e=>({type:"SET_PASSWORD_LENGTH",payload:e}),o=e=>({type:"SET_PICKS",payload:e}),r=e=>({type:"SET_WEEK",payload:e})},56:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),i=n(29),o=n.n(i),r=(n(56),n(25)),s=n(11),d=n(40),l=n(31),u=n(18),p=n(24),b=n(41),j=n(48),O=n(21),E=n.p+"static/media/pepehands.273a0939.png",h=n(39),x=n(22),f=n(5);const S=O.a.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding: 50px;
  align-items: center;
  justify-content: center;
`,m=Object(O.a)(h.a)`
  font-size: 30px;
  line-height: 30px;
  font-weight: 700;
  max-width: 200px;
  height: 60px;
  padding: 10px 35px;
  margin-top: 50px;
  background-color: ${x.a.COLOR.PURPLE};
  :hover {
    background-color: ${x.a.COLOR.WHITE};
  }
`,_=O.a.p`
  text-align: center;
`,T=O.a.img`
  width: 200px;
`;var g=Object(s.i)((function({error:e,resetErrorBoundary:t}){const n=Object(s.g)();return Object(f.jsxs)(S,{role:"alert",children:[Object(f.jsx)(_,{children:"Something went wrong, tell Hawkins to fix his trash site"}),Object(f.jsx)(T,{src:E}),Object(f.jsx)(m,{onClick:()=>{n.push("/index"),window.location.reload()},children:"Home"})]})}));const{PUBLIC_URL:y}=Object({NODE_ENV:"production",PUBLIC_URL:"/LCSPickEm",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),w=Object(c.lazy)((()=>n.e(4).then(n.bind(null,78)))),L=Object(c.lazy)((()=>n.e(5).then(n.bind(null,79)))),I=Object(c.lazy)((()=>n.e(7).then(n.bind(null,82)))),v=Object(c.lazy)((()=>Promise.all([n.e(3),n.e(8)]).then(n.bind(null,81)))),k=Object(c.lazy)((()=>n.e(6).then(n.bind(null,80))));var C=()=>{const e=Object(u.b)(),t=Object(u.c)(l.b),n=Object(u.c)(l.d);return Object(c.useEffect)((()=>{t&&p.c.doc(n).get().then((t=>e(Object(b.e)(t.data()))))}),[]),Object(f.jsx)(r.a,{basename:y,children:Object(f.jsx)(c.Suspense,{fallback:Object(f.jsx)(d.a,{}),children:Object(f.jsxs)(j.ErrorBoundary,{FallbackComponent:g,onReset:()=>{},children:[Object(f.jsxs)(s.d,{children:[Object(f.jsx)(s.b,{exact:!0,path:"/index",component:I}),!t&&Object(f.jsx)(s.b,{path:"/signin",component:w}),!t&&Object(f.jsx)(s.b,{path:"/signup",component:L}),t&&Object(f.jsx)(s.b,{path:"/home",component:k}),t&&Object(f.jsx)(s.b,{path:"/standings",component:v}),t&&Object(f.jsx)(s.a,{to:"/home"}),Object(f.jsx)(s.a,{to:"/index"})]}),Object(f.jsx)(s.b,{exact:!0,path:"/",children:Object(f.jsx)(s.a,{to:"/index"})})]})})})},R=n(26);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=n(49);o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(u.a,{store:R.c,children:Object(f.jsx)(P.a,{loading:null,persistor:R.b,children:Object(f.jsx)(C,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}},[[68,1,2]]]);
//# sourceMappingURL=main.1cdfa09f.chunk.js.map