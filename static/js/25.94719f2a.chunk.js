(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[25],{103:function(e,t,i){"use strict";i(2);var a=i(66),n=i(25),r=i(67),s=i(69),c=i(11),o=i(5);const d=a.a.header`
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
  :hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: none;
  }
`,h=a.a.img`
  margin-left: 3%;
  width: 130px;
  :hover {
    cursor: pointer;
  }
`,u=a.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`,x=Object(a.a)(r.a)`
  margin-right: 10px;
  box-shadow: none;
  height: 10px;
  &:hover {
    filter: brightness(100%);
    cursor: pointer;
  }
`;t.a=()=>{const e=Object(c.g)();return Object(o.jsxs)(d,{id:"header",children:[Object(o.jsxs)(u,{children:[Object(o.jsx)(h,{onClick:()=>e.push("/home"),src:s.a}),Object(o.jsx)(p,{onClick:()=>e.push("/home"),children:"Ancient Path Adventures"})]}),Object(o.jsx)(l,{children:Object(o.jsx)(x,{children:"HELP"})})]})}},249:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i(36),r=i(66),s=i(103),c=i(25),o=i(67),d=i(19),l=i(16),p=i(37),h=i(30),u=i(11),x=i(5);const m=r.a.div`
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
`,j=r.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,g=r.a.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 70px;
`,f=r.a.header`
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 20px;
`,w=r.a.form`
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
`,y=r.a.input`
  height: 20px;
  width: 20px;
  margin-right: -15%;
`,v=Object(r.a)(O)`
  width: 45%;
`,k=r.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  margin-bottom: 30px;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`,T=Object(r.a)(o.a)`
  font-size: 25px;
  height: 70px;
  width: 20%;
  min-width: 100px;
  background-color: ${c.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,E=(r.a.div`
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
`),P=r.a.p`
  font-size: 20px;
`;t.default=()=>{const e=Object(u.g)(),[t,i]=Object(a.useState)(),r=Object(l.b)();return Object(x.jsxs)(n.a,{title:"Sign-Up",description:"Sign-Up",children:[Object(x.jsx)(s.a,{}),Object(x.jsxs)(m,{children:[Object(x.jsx)(f,{children:"Sign-up"}),Object(x.jsxs)(w,{id:"signUpForm",children:[Object(x.jsxs)(j,{children:[Object(x.jsx)(v,{type:"text",placeholder:"First Name",name:"first","data-test":"first-name",required:!0}),Object(x.jsx)(v,{type:"text",placeholder:"Last Name",name:"last","data-test":"last-name",required:!0})]}),Object(x.jsx)(O,{type:"email","data-test":"email",placeholder:"Email",name:"email",required:!0}),Object(x.jsx)(O,{type:"password",placeholder:"Password",name:"password","data-test":"password",required:!0}),Object(x.jsx)(O,{type:"password",placeholder:"Confirm Pasword",name:"passwordConfirm","data-test":"confirm-password",required:!0}),Object(x.jsx)(P,{style:{marginTop:"-20px"},children:"I am a:"}),Object(x.jsxs)(g,{children:[Object(x.jsx)(y,{type:"radio",name:"accountType",value:"teacher","data-test":"teacher",required:!0}),Object(x.jsx)(P,{children:"Teacher"}),Object(x.jsx)(y,{type:"radio",name:"accountType",value:"student","data-test":"student",required:!0}),Object(x.jsx)(P,{children:"Student"})]}),Object(x.jsx)(E,{children:t}),Object(x.jsxs)(b,{children:[Object(x.jsx)(T,{"data-test":"submit",onClick:()=>{i();const t=Object.values(document.forms.signUpForm).reduce(((e,t)=>("radio"===t.type?t.checked?e[t.name]=t.value:void 0===e[t.name]&&(e[t.name]=""):e[t.name]=t.value,e)),{});for(var a in t)if(""===t[a])return void i("Please fill out all fields");t.password===t.passwordConfirm?d.b.createUserWithEmailAndPassword(t.email,t.password).then((()=>{d.b.currentUser.updateProfile({displayName:`${t.first} ${t.last}`}).then((()=>{const i="teacher"===t.accountType?{email:d.b.currentUser.email,uid:d.b.currentUser.uid,classList:[],displayName:`${t.first} ${t.last}`,accountType:t.accountType,moduleList:[]}:{email:d.b.currentUser.email,uid:d.b.currentUser.uid,classList:[],displayName:`${t.first} ${t.last}`,accountType:t.accountType};r(Object(p.b)(i)),r(Object(p.a)(t.password.length)),r(Object(h.a)(null)),d.e.doc(d.b.currentUser.uid).set(i),e.push(`/${t.accountType}/home`)}))})).catch((e=>{i(e.message)})):i("Passwords must match")},children:"SIGN-UP"}),Object(x.jsx)(k,{"data-test":"sign-up",onClick:()=>e.push("signin"),children:"Already have an account? Don\u2019t worry! Sign in here"})]})]})]})]})}},67:function(e,t,i){"use strict";var a=i(25);const n=i(66).a.div`
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
`;t.a=n},69:function(e,t,i){"use strict";t.a=i.p+"static/media/white mtn.bb2904a1.png"}}]);
//# sourceMappingURL=25.94719f2a.chunk.js.map