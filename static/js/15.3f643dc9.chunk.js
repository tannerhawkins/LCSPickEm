(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[15],{102:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i(23),r=i(48),s=i(70),c=i(49),o=i(51),d=i(50),l=i(12),p=i(53),u=i(62),h=i(5),x=i(2);const m=r.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 50px 0;
`,b=r.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,f=r.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,j=r.a.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 70px;
`,g=r.a.header`
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 20px;
`,y=r.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,O=r.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`,w=r.a.input`
  height: 20px;
  width: 20px;
  margin-right: -15%;
`,v=Object(r.a)(O)`
  width: 45%;
`,E=r.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  margin-bottom: 30px;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`,A=Object(r.a)(o.a)`
  font-size: 25px;
  height: 70px;
  width: 20%;
  min-width: 100px;
  background-color: ${c.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,T=(r.a.div`
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
`;t.default=()=>{const e=Object(h.g)(),[t,i]=Object(a.useState)(),r=Object(l.b)();return Object(x.jsxs)(n.a,{title:"Sign-Up",description:"Sign-Up",children:[Object(x.jsx)(s.a,{}),Object(x.jsxs)(m,{children:[Object(x.jsx)(g,{children:"Sign-up"}),Object(x.jsxs)(y,{id:"signUpForm",children:[Object(x.jsxs)(f,{children:[Object(x.jsx)(v,{type:"text",placeholder:"First Name",name:"first",required:!0}),Object(x.jsx)(v,{type:"text",placeholder:"Last Name",name:"last",required:!0})]}),Object(x.jsx)(O,{type:"email",placeholder:"Email",name:"email",required:!0}),Object(x.jsx)(O,{type:"password",placeholder:"Password",name:"password",required:!0}),Object(x.jsx)(O,{type:"password",placeholder:"Confirm Pasword",name:"passwordConfirm",required:!0}),Object(x.jsx)(R,{style:{marginTop:"-20px"},children:"I am a:"}),Object(x.jsxs)(j,{children:[Object(x.jsx)(w,{type:"radio",name:"accountType",value:"teacher",required:!0}),Object(x.jsx)(R,{children:"Teacher"}),Object(x.jsx)(w,{type:"radio",name:"accountType",value:"student",required:!0}),Object(x.jsx)(R,{children:"Student"})]}),Object(x.jsx)(T,{children:t}),Object(x.jsxs)(b,{children:[Object(x.jsx)(A,{onClick:()=>{i();const e=Object.values(document.forms.signUpForm).reduce(((e,t)=>("radio"===t.type?t.checked?e[t.name]=t.value:void 0===e[t.name]&&(e[t.name]=""):e[t.name]=t.value,e)),{});for(var t in e)if(""===e[t])return void i("Please fill out all fields");e.password===e.passwordConfirm?d.a.createUserWithEmailAndPassword(e.email,e.password).then((()=>{d.a.currentUser.updateProfile({displayName:`${e.first} ${e.last}`}).then((()=>{const t="teacher"===e.accountType?{email:d.a.currentUser.email,uid:d.a.currentUser.uid,classList:[],displayName:`${e.first} ${e.last}`,accountType:e.accountType,moduleList:[]}:{email:d.a.currentUser.email,uid:d.a.currentUser.uid,classList:[],displayName:`${e.first} ${e.last}`,accountType:e.accountType};r(Object(p.a)(t)),r(Object(u.a)(null)),d.d.doc(d.a.currentUser.uid).set(t)}))})).catch((e=>{i(e.message)})):i("Passwords must match")},children:"SIGN-UP"}),Object(x.jsx)(E,{onClick:()=>e.push("signin"),children:"Already have an account? Don\u2019t worry! Sign in here"})]})]})]})]})}},49:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));const a={COLOR:{LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",DARK_BLUE:"#373B53",TEAL:"#B5FFEA",GRAY:"#E5E5E5"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px",EMPTY_MODULE:{title:"",description:"",public:!0,creator:void 0,steps:[]},MOCK_MODULE:{title:"Mock Module",description:"This module is used for testing and development",public:!0,creator:"someteacherIDhere",steps:[{type:"text",data:{}},{type:"video",data:{}},{type:"quiz",data:{}}]}}},50:function(e,t,i){"use strict";i.d(t,"d",(function(){return s})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return r}));var a=i(60);i(65);a.a.initializeApp({apiKey:"AIzaSyBikWf9vy86sF9wXyRjkpdrrAJaw7WoQ8M",authDomain:"ancient-path-adventures.firebaseapp.com",projectId:"ancient-path-adventures",storageBucket:"ancient-path-adventures.appspot.com",messagingSenderId:"1051282870332",appId:"1:1051282870332:web:8f7a5922db7d370e86b339",measurementId:"G-NPPQJQTEQN"});const n=a.a.firestore();var r=a.a.auth();new a.a.auth.GoogleAuthProvider;const s=n.collection("userData"),c=n.collection("classData"),o=n.collection("modules")},51:function(e,t,i){"use strict";var a=i(49);const n=i(48).a.div`
  background-color: ${a.a.COLOR.LIGHT_GREEN};
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
`;t.a=n},52:function(e,t,i){"use strict";t.a=i.p+"static/media/white mtn.bb2904a1.png"},53:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(12),i(50);const a=e=>({type:"SIGN_IN",payload:e})},62:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i(50);const a=e=>({type:"SET_CURRENT_CLASS",payload:e})},70:function(e,t,i){"use strict";i(0);var a=i(48),n=i(49),r=i(51),s=i(52),c=i(5),o=i(2);const d=a.a.header`
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
`,l=a.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,p=a.a.div`
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
`,u=a.a.img`
  margin-left: 3%;
  width: 130px;
`,h=a.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`,x=Object(a.a)(r.a)`
  margin-right: 10px;
  box-shadow: none;
  height: 10px;
`;t.a=()=>{const e=Object(c.g)();return Object(o.jsxs)(d,{id:"header",children:[Object(o.jsxs)(h,{children:[Object(o.jsx)(u,{onClick:()=>e.push("/home"),src:s.a}),Object(o.jsx)(p,{onClick:()=>e.push("/home"),children:"Ancient Path Adventures"})]}),Object(o.jsx)(l,{children:Object(o.jsx)(x,{children:"HELP"})})]})}}}]);
//# sourceMappingURL=15.3f643dc9.chunk.js.map