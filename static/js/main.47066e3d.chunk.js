(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[0],{21:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a={LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff"}},23:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return h}));var a=n(48);const c={signedIn:!1};var i=n(41),s=n.n(i),r=n(47),o=n(42);const l=Object(a.a)({account:function(e=c,t){switch(t.type){case"SIGN_IN":return{...e,signedIn:!0,user:t.payload,displayName:t.payload.displayName,email:t.payload.email};case"SIGN_OUT":return{...e,signedIn:!1,user:null,displayName:null,email:null};default:return e}}}),d={key:"root",storage:s.a},b=Object(r.a)(d,l),j=Object(a.b)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),h=Object(o.a)(j)},26:function(e,t,n){"use strict";var a=n(21);const c=n(17).a.div`
    background-color: ${a.a.LIGHT_GREEN};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 40px;
    padding: 20px;
    color: white;
    font-weight: bold;
    &:hover {
        filter: brightness(110%);
    }
`;t.a=c},38:function(e,t,n){"use strict";var a=n(2),c=n(34),i=(n(49),n(4));var s=n(11);var r=()=>{const{pathname:e}=Object(s.g)();return Object(a.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null};const o=e=>Object(i.jsxs)(c.b,{children:[Object(i.jsx)(r,{}),Object(i.jsxs)(c.a,{titleTemplate:"%s | Ancient Path Adventures",defaultTitle:"Ancient Path Adventures",defer:!1,children:[e.title&&Object(i.jsx)("title",{children:e.title}),Object(i.jsx)("meta",{name:"description",content:e.description})]}),Object(i.jsx)("div",{id:"wrapper",children:Object(i.jsx)("div",{id:"main",children:e.children})})]});o.defaultProps={children:null,fullPage:!1,title:null,description:"Ancient Path Adventures"};t.a=o},49:function(e,t,n){"use strict";n(2);var a=n(29);a.a.initializeApp({apiKey:"AIzaSyBikWf9vy86sF9wXyRjkpdrrAJaw7WoQ8M",authDomain:"ancient-path-adventures.firebaseapp.com",projectId:"ancient-path-adventures",storageBucket:"ancient-path-adventures.appspot.com",messagingSenderId:"1051282870332",appId:"1:1051282870332:web:8f7a5922db7d370e86b339",measurementId:"G-NPPQJQTEQN"});var c=a.a.auth(),i=new a.a.auth.GoogleAuthProvider,s=n(40),r=n(28);var o=n(22),l=n(23);const d=Object(o.a)((()=>l.b.getState()),(e=>e.account));Object(o.a)(d,(e=>e.signedIn)),Object(o.a)(d,(e=>e.displayName)),Object(o.a)(d,(e=>e.email)),Object(o.a)(d,(e=>e.user));var b=n(26),j=n(21),h=n(17),p=n(4);const u=Object(h.a)(b.a)`
  background-color: ${j.a.DARK_GREEN};
  width: 120px;
`;var O=()=>{const e=Object(r.b)(),t=Object(s.a)(c)[0];return Object(p.jsxs)("div",{children:[!t&&Object(p.jsx)(u,{onClick:()=>{c.signInWithPopup(i).then((t=>{const n=t.user;e((e=>({type:"SIGN_IN",payload:e}))(n))})).catch((e=>e.message?console.log(e.message):console.log("Unexpected Error")))},children:"SIGN-IN"}),t&&Object(p.jsx)(u,{onClick:()=>{c.signOut().then((()=>{e({type:"SIGN_OUT"})}))},children:"LOGOUT"})]})},x=n.p+"static/media/white mtn.bb2904a1.png";const g=h.a.header`
  display: flex;
  background-color: ${j.a.LIGHT_GREEN};
  justify-content: space-between;
  align-items: center;
	height: 80px;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
`,m=h.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,v=h.a.div`
  font-family: Playball;
  color: white;
  white-space: nowrap;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
`,f=h.a.img`
  margin-left: 3%;
  width: 130px;
`,w=h.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`,E=Object(h.a)(b.a)`
  margin-right: 10px;
  box-shadow: none;
`;t.a=()=>Object(p.jsxs)(g,{id:"header",children:[Object(p.jsxs)(w,{children:[Object(p.jsx)(f,{src:x}),Object(p.jsx)(v,{children:"Ancient Path Adventures"})]}),Object(p.jsxs)(m,{children:[Object(p.jsx)(E,{children:"HELP"}),Object(p.jsx)(O,{})]})]})},54:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),i=n(25),s=n.n(i),r=(n(54),n(33)),o=n(11),l=n(38),d=n(4);const{PUBLIC_URL:b}=Object({NODE_ENV:"production",PUBLIC_URL:"/AncientPathAdventures",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=Object(a.lazy)((()=>n.e(7).then(n.bind(null,69)))),h=Object(a.lazy)((()=>n.e(3).then(n.bind(null,73)))),p=Object(a.lazy)((()=>n.e(6).then(n.bind(null,70)))),u=Object(a.lazy)((()=>n.e(5).then(n.bind(null,71)))),O=Object(a.lazy)((()=>n.e(4).then(n.bind(null,72))));var x=()=>Object(d.jsx)(r.a,{basename:b,children:Object(d.jsxs)(a.Suspense,{fallback:Object(d.jsx)(l.a,{}),children:[Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{exact:!0,path:"/home",component:h}),Object(d.jsx)(o.b,{path:"/team",component:j}),Object(d.jsx)(o.b,{path:"/journal",component:u}),Object(d.jsx)(o.b,{path:"/deliverables",component:O}),Object(d.jsx)(o.b,{component:p,status:404})]}),Object(d.jsx)(o.b,{exact:!0,path:"/",children:Object(d.jsx)(o.a,{to:"/home"})})]})}),g=n(23),m=n(28);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(46);s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(m.a,{store:g.b,children:Object(d.jsx)(v.a,{loading:null,persistor:g.a,children:Object(d.jsx)(x,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}},[[66,1,2]]]);
//# sourceMappingURL=main.47066e3d.chunk.js.map