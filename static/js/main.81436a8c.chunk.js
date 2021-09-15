(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[0],{18:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));const a={LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",HEADER_HEIGHT:"80px"}},22:function(e,t,n){"use strict";var a=n(18);const i=n(17).a.div`
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
        cursor: pointer;
    }
`;t.a=i},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var a=n(29);a.a.initializeApp({apiKey:"AIzaSyBikWf9vy86sF9wXyRjkpdrrAJaw7WoQ8M",authDomain:"ancient-path-adventures.firebaseapp.com",projectId:"ancient-path-adventures",storageBucket:"ancient-path-adventures.appspot.com",messagingSenderId:"1051282870332",appId:"1:1051282870332:web:8f7a5922db7d370e86b339",measurementId:"G-NPPQJQTEQN"});var i=a.a.auth(),c=new a.a.auth.GoogleAuthProvider},38:function(e,t,n){"use strict";var a=n(2),i=n(34),c=(n(50),n(4));var r=n(11);var s=()=>{const{pathname:e}=Object(r.g)();return Object(a.useEffect)((()=>{window.scrollTo(0,0)}),[e]),null};const o=e=>Object(c.jsxs)(i.b,{children:[Object(c.jsx)(s,{}),Object(c.jsxs)(i.a,{titleTemplate:"%s | Ancient Path Adventures",defaultTitle:"Ancient Path Adventures",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsx)("div",{id:"wrapper",children:Object(c.jsx)("div",{id:"main",children:e.children})})]});o.defaultProps={children:null,fullPage:!1,title:null,description:"Ancient Path Adventures"};t.a=o},39:function(e,t,n){"use strict";t.a=n.p+"static/media/white mtn.bb2904a1.png"},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));const a=e=>({type:"SIGN_IN",payload:e}),i=()=>({type:"SIGN_OUT"})},50:function(e,t,n){"use strict";n(2);var a=n(17),i=n(18),c=n(22),r=n(39),s=n(23),o=n(25),d=n(26),l=n(40),b=n(4);const h=Object(a.a)(c.a)`
  background-color: ${i.a.DARK_GREEN};
  width: 120px;
`;var j=()=>{const e=Object(d.b)(),t=Object(o.a)(s.a)[0];return Object(b.jsxs)("div",{children:[!t&&Object(b.jsx)(h,{onClick:()=>window.location.href="/AncientPathAdventures/SignIn",children:"SIGN-IN"}),t&&Object(b.jsx)(h,{onClick:()=>{s.a.signOut().then((()=>{e(Object(l.b)())}))},children:"LOGOUT"})]})};const u=a.a.header`
  display: flex;
  background-color: ${i.a.LIGHT_GREEN};
  justify-content: space-between;
  align-items: center;
	height: ${i.a.HEADER_HEIGHT};
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100000;
`,p=a.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,O=a.a.div`
  font-family: Playball;
  color: white;
  white-space: nowrap;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    display: none;
}
`,x=a.a.img`
  margin-left: 3%;
  width: 130px;
`,f=a.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`,m=Object(a.a)(c.a)`
  margin-right: 10px;
  box-shadow: none;
`;Object(a.a)(c.a)`
  background-color: ${i.a.DARK_GREEN};
  width: 120px;
`;t.a=()=>Object(b.jsxs)(u,{id:"header",children:[Object(b.jsxs)(f,{children:[Object(b.jsx)(x,{src:r.a}),Object(b.jsx)(O,{children:"Ancient Path Adventures"})]}),Object(b.jsxs)(p,{children:[Object(b.jsx)(m,{children:"HELP"}),Object(b.jsx)(j,{})]})]})},55:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n.n(a),c=n(27),r=n.n(c),s=(n(55),n(33)),o=n(11),d=n(38),l=n(25),b=n(23),h=n(4);const{PUBLIC_URL:j}=Object({NODE_ENV:"production",PUBLIC_URL:"/AncientPathAdventures",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),u=Object(a.lazy)((()=>n.e(4).then(n.bind(null,75)))),p=Object(a.lazy)((()=>n.e(3).then(n.bind(null,74)))),O=Object(a.lazy)((()=>n.e(6).then(n.bind(null,72)))),x=Object(a.lazy)((()=>n.e(5).then(n.bind(null,73))));var f=()=>{const e=Object(l.a)(b.a)[0];return Object(h.jsx)(s.a,{basename:j,children:Object(h.jsxs)(a.Suspense,{fallback:Object(h.jsx)(d.a,{}),children:[Object(h.jsxs)(o.d,{children:[Object(h.jsx)(o.b,{exact:!0,path:"/home",component:p}),Object(h.jsx)(o.b,{path:"/SignIn",component:u}),e&&Object(h.jsx)(o.b,{path:"/journal",component:O}),e&&Object(h.jsx)(o.b,{path:"/deliverables",component:x}),Object(h.jsx)(o.a,{to:"/home"})]}),Object(h.jsx)(o.b,{exact:!0,path:"/",children:Object(h.jsx)(o.a,{to:"/home"})})]})})},m=n(49);const g={signedIn:!1};var v=n(45),E=n.n(v),w=n(48),_=n(46);const y=Object(m.a)({account:function(e=g,t){switch(t.type){case"SIGN_IN":return{...e,signedIn:!0,user:t.payload,displayName:t.payload.displayName,email:t.payload.email};case"SIGN_OUT":return{...e,signedIn:!1,user:null,displayName:null,email:null};default:return e}}}),A={key:"root",storage:E.a},I=Object(w.a)(A,y),N=Object(m.b)(I,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),S=Object(_.a)(N);var T=n(26);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=n(47);r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(T.a,{store:N,children:Object(h.jsx)(G.a,{loading:null,persistor:S,children:Object(h.jsx)(f,{})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}},[[67,1,2]]]);
//# sourceMappingURL=main.81436a8c.chunk.js.map