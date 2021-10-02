(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[7],{48:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i={COLOR:{LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",DARK_BLUE:"#373B53",TEAL:"#B5FFEA"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px"}},52:function(e,t,n){"use strict";var i=n(48);const a=n(47).a.div`
  background-color: ${i.a.COLOR.LIGHT_GREEN};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-weight: bold;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`;t.a=a},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));const i=e=>({type:"SIGN_IN",payload:e}),a=()=>({type:"SIGN_OUT"})},55:function(e,t,n){"use strict";t.a=n.p+"static/media/white mtn.bb2904a1.png"},56:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return o}));var i=n(64);n(58);i.a.initializeApp({apiKey:"AIzaSyBikWf9vy86sF9wXyRjkpdrrAJaw7WoQ8M",authDomain:"ancient-path-adventures.firebaseapp.com",projectId:"ancient-path-adventures",storageBucket:"ancient-path-adventures.appspot.com",messagingSenderId:"1051282870332",appId:"1:1051282870332:web:8f7a5922db7d370e86b339",measurementId:"G-NPPQJQTEQN"});const a=i.a.firestore();var r=i.a.auth(),o=new i.a.auth.GoogleAuthProvider;const s=a.collection("userData"),c=a.collection("classData")},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=e=>({type:"SET_CURRENT_CLASS",payload:e})},68:function(e,t,n){"use strict";n(0);var i=n(47),a=n(48),r=n(52),o=n(55),s=n(2);const c=i.a.header`
  display: flex;
  background-color: ${a.a.COLOR.LIGHT_GREEN};
  justify-content: space-between;
  align-items: center;
  height: ${a.a.HEADER_HEIGHT};
  left: 0;
  top: 0;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100000;
`,d=i.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,l=i.a.div`
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
`,p=i.a.img`
  margin-left: 3%;
  width: 130px;
`,u=i.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`,h=Object(i.a)(r.a)`
  margin-right: 10px;
  box-shadow: none;
  height: 10px;
`;t.a=()=>Object(s.jsxs)(c,{id:"header",children:[Object(s.jsxs)(u,{children:[Object(s.jsx)(p,{src:o.a}),Object(s.jsx)(l,{children:"Ancient Path Adventures"})]}),Object(s.jsx)(d,{children:Object(s.jsx)(h,{children:"HELP"})})]})},88:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(23),r=n(47),o=n(68),s=n(48),c=n(52),d=n(11),l=n(56),p=n(54),u=n(60),h=n(2);const x=r.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
  height: calc(100vh - ${s.a.HEADER_HEIGHT});
`,b=r.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,f=r.a.header`
  font-weight: bold;
  font-size: 64px;
`,g=r.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,m=r.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  font-size: 30px;
  outline: none;
`,j=Object(r.a)(m)`
  margin-bottom: 60px;
`,w=r.a.p`
  text-align: right;
  font-size: 18px;
  margin-bottom: 30px;
  color: ${s.a.COLOR.LIGHT_GREEN};

  &:hover {
    cursor: pointer;
    color: ${s.a.COLOR.DARK_GREEN};
  }
`,O=r.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  margin-bottom: 30px;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`,E=Object(r.a)(c.a)`
  font-size: 25px;
  height: 70px;
  width: 20%;
  min-width: 100px;
  background-color: ${s.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,v=(r.a.div`
  display: inline-block;
  border-bottom: 1px solid black;
  margin: 0px 10px;
  width: 15%;
`,r.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`,r.a.p`
  color: red;
  margin-top: -20px;
`);t.default=()=>{const[e,t]=Object(i.useState)(),n=Object(d.b)();return Object(h.jsxs)(a.a,{title:"Sign-In",description:"Sign-In",children:[Object(h.jsx)(o.a,{}),Object(h.jsxs)(x,{children:[Object(h.jsx)(f,{children:"Sign-In"}),Object(h.jsxs)(g,{id:"signInForm",children:[Object(h.jsx)(j,{type:"email",placeholder:"Email",name:"email",required:!0}),Object(h.jsx)(m,{type:"password",placeholder:"Password",name:"password",required:!0}),Object(h.jsx)(w,{children:"Did you forget your password?"}),Object(h.jsx)(v,{children:e}),Object(h.jsxs)(b,{children:[Object(h.jsx)(E,{type:"submit",onClick:()=>{t();const e=Object.values(document.forms.signInForm).reduce(((e,t)=>(e[t.name]=t.value,e)),{});for(var i in e)if(""===e[i])return void t("Please fill out all fields");e.email.includes("@")?l.a.signInWithEmailAndPassword(e.email,e.password).then((()=>{l.d.doc(l.a.currentUser.uid).get().then((e=>{n(Object(p.a)(e.data())),0!==e.data().classList.length?l.b.doc(e.data().classList[0].cid).get().then((e=>n(Object(u.a)(e.data())))):n(Object(u.a)(null))}))})).catch((e=>{"auth/user-not-found"===e.code?t("A user with this email address does not exist"):"auth/wrong-password"===e.code?t("The password is invalid."):t(e.message)})):t("Please enter valid email address")},children:"SIGN-IN"}),Object(h.jsx)(O,{onClick:()=>window.location.href="/AncientPathAdventures/signup",children:"Don't have an account? Don\u2019t worry! Sign up here"})]})]})]})]})}}}]);
//# sourceMappingURL=7.4b26527a.chunk.js.map