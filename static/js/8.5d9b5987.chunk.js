(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[8],{48:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i={COLOR:{LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",DARK_BLUE:"#373B53",TEAL:"#B5FFEA"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px"}},52:function(e,t,n){"use strict";var i=n(48);const a=n(47).a.div`
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
`;t.a=a},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a}));const i=e=>({type:"SIGN_IN",payload:e}),a=()=>({type:"SIGN_OUT"})},55:function(e,t,n){"use strict";t.a=n.p+"static/media/white mtn.bb2904a1.png"},56:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return r}));var i=n(59);n(60);i.a.initializeApp({apiKey:"AIzaSyBikWf9vy86sF9wXyRjkpdrrAJaw7WoQ8M",authDomain:"ancient-path-adventures.firebaseapp.com",projectId:"ancient-path-adventures",storageBucket:"ancient-path-adventures.appspot.com",messagingSenderId:"1051282870332",appId:"1:1051282870332:web:8f7a5922db7d370e86b339",measurementId:"G-NPPQJQTEQN"});const a=i.a.firestore();var r=i.a.auth();new i.a.auth.GoogleAuthProvider;const s=a.collection("userData"),c=a.collection("classData")},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));const i=e=>({type:"SET_CURRENT_CLASS",payload:e})},68:function(e,t,n){"use strict";n(0);var i=n(47),a=n(48),r=n(52),s=n(55),c=n(2);const o=i.a.header`
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
`;t.a=()=>Object(c.jsxs)(o,{id:"header",children:[Object(c.jsxs)(u,{children:[Object(c.jsx)(p,{src:s.a}),Object(c.jsx)(l,{children:"Ancient Path Adventures"})]}),Object(c.jsx)(d,{children:Object(c.jsx)(h,{children:"HELP"})})]})},89:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(23),r=n(47),s=n(68),c=n(48),o=n(52),d=n(56),l=n(11),p=n(54),u=n(58),h=n(2);const x=r.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 50px 0;
`,m=r.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,b=r.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,f=r.a.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 70px;
`,j=r.a.header`
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 20px;
`,g=r.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,w=r.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`,y=r.a.input`
  height: 20px;
  width: 20px;
  margin-right: -15%;
`,O=Object(r.a)(w)`
  width: 45%;
`,v=r.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  margin-bottom: 30px;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`,E=Object(r.a)(o.a)`
  font-size: 25px;
  height: 70px;
  width: 20%;
  min-width: 100px;
  background-color: ${c.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,A=(r.a.div`
  display: inline-block;
  border-bottom: 1px solid black;
  margin: 0px 10px;
  width: 15%;
`,r.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-bottom: 30px;
`,r.a.p`
  color: red;
  margin-top: -20px;
`),R=r.a.p`
  font-size: 20px;
`;t.default=()=>{const[e,t]=Object(i.useState)(),n=Object(l.b)();return Object(h.jsxs)(a.a,{title:"Sign-Up",description:"Sign-Up",children:[Object(h.jsx)(s.a,{}),Object(h.jsxs)(x,{children:[Object(h.jsx)(j,{children:"Sign-up"}),Object(h.jsxs)(g,{id:"signUpForm",children:[Object(h.jsxs)(b,{children:[Object(h.jsx)(O,{type:"text",placeholder:"First Name",name:"first",required:!0}),Object(h.jsx)(O,{type:"text",placeholder:"Last Name",name:"last",required:!0})]}),Object(h.jsx)(w,{type:"email",placeholder:"Email",name:"email",required:!0}),Object(h.jsx)(w,{type:"password",placeholder:"Password",name:"password",required:!0}),Object(h.jsx)(w,{type:"password",placeholder:"Confirm Pasword",name:"passwordConfirm",required:!0}),Object(h.jsx)(R,{style:{marginTop:"-20px"},children:"I am a:"}),Object(h.jsxs)(f,{children:[Object(h.jsx)(y,{type:"radio",name:"accountType",value:"teacher",required:!0}),Object(h.jsx)(R,{children:"Teacher"}),Object(h.jsx)(y,{type:"radio",name:"accountType",value:"student",required:!0}),Object(h.jsx)(R,{children:"Student"})]}),Object(h.jsx)(A,{children:e}),Object(h.jsxs)(m,{children:[Object(h.jsx)(E,{onClick:()=>{t();const e=Object.values(document.forms.signUpForm).reduce(((e,t)=>("radio"===t.type?t.checked?e[t.name]=t.value:void 0===e[t.name]&&(e[t.name]=""):e[t.name]=t.value,e)),{});for(var i in e)if(""===e[i])return void t("Please fill out all fields");e.password===e.passwordConfirm?d.a.createUserWithEmailAndPassword(e.email,e.password).then((()=>{d.a.currentUser.updateProfile({displayName:`${e.first} ${e.last}`}).then((()=>{const t={email:d.a.currentUser.email,uid:d.a.currentUser.uid,classList:[],displayName:`${e.first} ${e.last}`,accountType:e.accountType};n(Object(p.a)(t)),n(Object(u.a)(null)),d.c.doc(d.a.currentUser.uid).set(t)}))})).catch((e=>{t(e.message)})):t("Passwords must match")},children:"SIGN-UP"}),Object(h.jsx)(v,{onClick:()=>window.location.href="/AncientPathAdventures/signin",children:"Already have an account? Don\u2019t worry! Sign in here"})]})]})]})]})}}}]);
//# sourceMappingURL=8.5d9b5987.chunk.js.map