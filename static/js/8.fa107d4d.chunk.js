(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[8],{48:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));const i={COLOR:{LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",DARK_BLUE:"#373B53",TEAL:"#B5FFEA"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px"}},52:function(e,t,a){"use strict";var i=a(48);const n=a(47).a.div`
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
`;t.a=n},54:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));const i=e=>({type:"SIGN_IN",payload:e}),n=()=>({type:"SIGN_OUT"})},55:function(e,t,a){"use strict";t.a=a.p+"static/media/white mtn.bb2904a1.png"},56:function(e,t,a){"use strict";a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return r})),a.d(t,"c",(function(){return c}));var i=a(64);a(58);i.a.initializeApp({apiKey:"AIzaSyBikWf9vy86sF9wXyRjkpdrrAJaw7WoQ8M",authDomain:"ancient-path-adventures.firebaseapp.com",projectId:"ancient-path-adventures",storageBucket:"ancient-path-adventures.appspot.com",messagingSenderId:"1051282870332",appId:"1:1051282870332:web:8f7a5922db7d370e86b339",measurementId:"G-NPPQJQTEQN"});const n=i.a.firestore();var r=i.a.auth(),c=new i.a.auth.GoogleAuthProvider;const s=n.collection("userData"),o=n.collection("classData")},60:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));const i=e=>({type:"SET_CURRENT_CLASS",payload:e})},68:function(e,t,a){"use strict";a(0);var i=a(47),n=a(48),r=a(52),c=a(55),s=a(2);const o=i.a.header`
  display: flex;
  background-color: ${n.a.COLOR.LIGHT_GREEN};
  justify-content: space-between;
  align-items: center;
  height: ${n.a.HEADER_HEIGHT};
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
`;t.a=()=>Object(s.jsxs)(o,{id:"header",children:[Object(s.jsxs)(u,{children:[Object(s.jsx)(p,{src:c.a}),Object(s.jsx)(l,{children:"Ancient Path Adventures"})]}),Object(s.jsx)(d,{children:Object(s.jsx)(h,{children:"HELP"})})]})},93:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a(56);var r=a(11),c=a(54),s=a(52),o=a(47),d=(a.p,a(2));Object(o.a)(s.a)`
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  width: 250px;
  color: black;
  display: flex;
  height: 60px;
  justify-content: space-around;
`,o.a.img`
  height: 60%;
`;var l=a(23),p=a(68),u=a(48),h=(a(58),a(60));const x=o.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 50px 0;
`,b=o.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,m=o.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,f=o.a.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 70px;
`,j=o.a.header`
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 20px;
`,g=o.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,w=o.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`,y=o.a.input`
  height: 20px;
  width: 20px;
  margin-right: -15%;
`,O=Object(o.a)(w)`
  width: 45%;
`,v=o.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  margin-bottom: 30px;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`,E=Object(o.a)(s.a)`
  font-size: 25px;
  height: 70px;
  width: 20%;
  min-width: 100px;
  background-color: ${u.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,A=(o.a.div`
  display: inline-block;
  border-bottom: 1px solid black;
  margin: 0px 10px;
  width: 15%;
`,o.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-bottom: 30px;
`,o.a.p`
  color: red;
  margin-top: -20px;
`),R=o.a.p`
  font-size: 20px;
`;t.default=()=>{const[e,t]=Object(i.useState)(),a=Object(r.b)();return Object(d.jsxs)(l.a,{title:"Sign-Up",description:"Sign-Up",children:[Object(d.jsx)(p.a,{}),Object(d.jsxs)(x,{children:[Object(d.jsx)(j,{children:"Sign-up"}),Object(d.jsxs)(g,{id:"signUpForm",children:[Object(d.jsxs)(m,{children:[Object(d.jsx)(O,{type:"text",placeholder:"First Name",name:"first",required:!0}),Object(d.jsx)(O,{type:"text",placeholder:"Last Name",name:"last",required:!0})]}),Object(d.jsx)(w,{type:"email",placeholder:"Email",name:"email",required:!0}),Object(d.jsx)(w,{type:"password",placeholder:"Password",name:"password",required:!0}),Object(d.jsx)(w,{type:"password",placeholder:"Confirm Pasword",name:"passwordConfirm",required:!0}),Object(d.jsx)(R,{style:{marginTop:"-20px"},children:"I am a:"}),Object(d.jsxs)(f,{children:[Object(d.jsx)(y,{type:"radio",name:"accountType",value:"teacher",required:!0}),Object(d.jsx)(R,{children:"Teacher"}),Object(d.jsx)(y,{type:"radio",name:"accountType",value:"student",required:!0}),Object(d.jsx)(R,{children:"Student"})]}),Object(d.jsx)(A,{children:e}),Object(d.jsxs)(b,{children:[Object(d.jsx)(E,{onClick:()=>{t();const e=Object.values(document.forms.signUpForm).reduce(((e,t)=>("radio"===t.type?t.checked?e[t.name]=t.value:void 0===e[t.name]&&(e[t.name]=""):e[t.name]=t.value,e)),{});for(var i in e)if(""===e[i])return void t("Please fill out all fields");e.password===e.passwordConfirm?n.a.createUserWithEmailAndPassword(e.email,e.password).then((()=>{n.a.currentUser.updateProfile({displayName:`${e.first} ${e.last}`}).then((()=>{const t={email:n.a.currentUser.email,uid:n.a.currentUser.uid,classList:[],displayName:`${e.first} ${e.last}`,accountType:e.accountType};a(Object(c.a)(t)),a(Object(h.a)(null)),n.d.doc(n.a.currentUser.uid).set(t)}))})).catch((e=>{t(e.message)})):t("Passwords must match")},children:"SIGN-UP"}),Object(d.jsx)(v,{onClick:()=>window.location.href="/AncientPathAdventures/signin",children:"Already have an account? Don\u2019t worry! Sign in here"})]})]})]})]})}}}]);
//# sourceMappingURL=8.fa107d4d.chunk.js.map