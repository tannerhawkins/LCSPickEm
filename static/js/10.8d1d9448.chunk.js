(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[10],{49:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n={COLOR:{LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",DARK_BLUE:"#373B53",TEAL:"#B5FFEA",GRAY:"#E5E5E5"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px",EMPTY_MODULE:{title:"",description:"",public:!0,creator:void 0,steps:[]},MOCK_MODULE:{title:"Mock Module",description:"This module is used for testing and development",public:!0,creator:"someteacherIDhere",steps:[{type:"text",data:{}},{type:"video",data:{}},{type:"quiz",data:{}}]}}},50:function(e,t,i){"use strict";i.d(t,"d",(function(){return r})),i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return o}));var n=i(59);i(67);n.a.initializeApp({apiKey:"AIzaSyBikWf9vy86sF9wXyRjkpdrrAJaw7WoQ8M",authDomain:"ancient-path-adventures.firebaseapp.com",projectId:"ancient-path-adventures",storageBucket:"ancient-path-adventures.appspot.com",messagingSenderId:"1051282870332",appId:"1:1051282870332:web:8f7a5922db7d370e86b339",measurementId:"G-NPPQJQTEQN"});const a=n.a.firestore();var o=n.a.auth();new n.a.auth.GoogleAuthProvider;const r=a.collection("userData"),s=a.collection("classData"),c=a.collection("modules")},51:function(e,t,i){"use strict";var n=i(49);const a=i(48).a.div`
  background-color: ${n.a.COLOR.LIGHT_GREEN};
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
`;t.a=a},52:function(e,t,i){"use strict";t.a=i.p+"static/media/white mtn.bb2904a1.png"},54:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i(12),i(50);const n=e=>({type:"SIGN_IN",payload:e})},56:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i(50);const n=e=>({type:"SET_CURRENT_CLASS",payload:e})},72:function(e,t,i){"use strict";i(0);var n=i(48),a=i(49),o=i(51),r=i(52),s=i(5),c=i(2);const d=n.a.header`
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
`,l=n.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,p=n.a.div`
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
`,u=n.a.img`
  margin-left: 3%;
  width: 130px;
`,h=n.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
  :hover {
    cursor: pointer;
  }
`,x=Object(n.a)(o.a)`
  margin-right: 10px;
  box-shadow: none;
  height: 10px;
`;t.a=()=>{const e=Object(s.g)();return Object(c.jsxs)(d,{id:"header",children:[Object(c.jsxs)(h,{onClick:()=>e.push("/home"),children:[Object(c.jsx)(u,{src:r.a}),Object(c.jsx)(p,{children:"Ancient Path Adventures"})]}),Object(c.jsx)(l,{children:Object(c.jsx)(x,{children:"HELP"})})]})}},98:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(23),o=i(48),r=i(72),s=i(49),c=i(51),d=i(12),l=i(50),p=i(54),u=i(56),h=i(5),x=i(2);const b=o.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
  height: calc(100vh - ${s.a.HEADER_HEIGHT});
`,f=o.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,g=o.a.header`
  font-weight: bold;
  font-size: 64px;
`,m=o.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,j=o.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  font-size: 30px;
  outline: none;
`,E=Object(o.a)(j)`
  margin-bottom: 60px;
`,O=o.a.p`
  text-align: right;
  font-size: 18px;
  margin-bottom: 30px;
  color: ${s.a.COLOR.LIGHT_GREEN};

  &:hover {
    cursor: pointer;
    color: ${s.a.COLOR.DARK_GREEN};
  }
`,w=o.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  margin-bottom: 30px;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`,v=Object(o.a)(c.a)`
  font-size: 25px;
  height: 70px;
  width: 20%;
  min-width: 100px;
  background-color: ${s.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,y=(o.a.div`
  display: inline-block;
  border-bottom: 1px solid black;
  margin: 0px 10px;
  width: 15%;
`,o.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`,o.a.p`
  color: red;
  margin-top: -20px;
`);t.default=()=>{const e=Object(h.g)(),[t,i]=Object(n.useState)(),o=Object(d.b)();return Object(x.jsxs)(a.a,{title:"Sign-In",description:"Sign-In",children:[Object(x.jsx)(r.a,{}),Object(x.jsxs)(b,{children:[Object(x.jsx)(g,{children:"Sign-In"}),Object(x.jsxs)(m,{id:"signInForm",children:[Object(x.jsx)(E,{type:"email",placeholder:"Email",name:"email",required:!0}),Object(x.jsx)(j,{type:"password",placeholder:"Password",name:"password",required:!0}),Object(x.jsx)(O,{children:"Did you forget your password?"}),Object(x.jsx)(y,{children:t}),Object(x.jsxs)(f,{children:[Object(x.jsx)(v,{type:"submit",onClick:()=>{i();const e=Object.values(document.forms.signInForm).reduce(((e,t)=>(e[t.name]=t.value,e)),{});for(var t in e)if(""===e[t])return void i("Please fill out all fields");e.email.includes("@")?l.a.signInWithEmailAndPassword(e.email,e.password).then((()=>{l.d.doc(l.a.currentUser.uid).get().then((e=>{o(Object(p.a)(e.data())),0!==e.data().classList.length?l.b.doc(e.data().classList[0].cid).get().then((e=>o(Object(u.a)(e.data())))):o(Object(u.a)(null))}))})).catch((e=>{"auth/user-not-found"===e.code?i("A user with this email address does not exist"):"auth/wrong-password"===e.code?i("The password is invalid."):i(e.message)})):i("Please enter valid email address")},children:"SIGN-IN"}),Object(x.jsx)(w,{onClick:()=>e.push("/signup"),children:"Don't have an account? Don\u2019t worry! Sign up here"})]})]})]})]})}}}]);
//# sourceMappingURL=10.8d1d9448.chunk.js.map