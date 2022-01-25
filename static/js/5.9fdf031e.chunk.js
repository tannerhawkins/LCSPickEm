(this.webpackJsonpLCSPickEm=this.webpackJsonpLCSPickEm||[]).push([[5],{70:function(e,t,i){"use strict";t.a=i.p+"static/media/lcs-logo.dbbe227a.png"},71:function(e,t,i){"use strict";i(2);var a=i(24),s=i(18),n=i(39),r=(i(22),i(21)),c=i(31),o=i(26),d=i(11),l=i(5);const p=Object(r.a)(n.a)`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  color: black;
  @media (max-width: 800px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;t.a=({className:e})=>{const t=Object(d.g)(),i=Object(s.b)(),n=Object(s.c)(c.b);return Object(l.jsxs)("div",{className:e,"data-test":"login-logout",children:[!n&&Object(l.jsx)(p,{onClick:()=>t.push("/signin"),children:"SIGN-IN"}),n&&Object(l.jsx)(p,{onClick:()=>{a.a.signOut().then((()=>{i(Object(o.a)())}))},children:"LOGOUT"})]})}},73:function(e,t,i){"use strict";i(2);var a=i(21),s=i(22),n=i(70),r=i(71),c=i(11),o=i(5);const d=a.a.header`
  display: flex;
  background-color: ${s.a.COLOR.BLACK};
  justify-content: space-between;
  align-items: center;
  height: ${s.a.HEADER_HEIGHT};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100000;
`,l=(a.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,a.a.div`
  color: white;
  white-space: nowrap;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    display: none;
  }
`),p=a.a.img`
  margin-left: 3%;
  width: 100px;
  height: 70px;
`,h=a.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
  :hover {
    cursor: pointer;
  }
`;Object(a.a)(r.a)``;t.a=()=>{const e=Object(c.g)();return Object(o.jsx)(d,{id:"header",children:Object(o.jsxs)(h,{onClick:()=>e.push("/home"),children:[Object(o.jsx)(p,{src:n.a}),Object(o.jsx)(l,{children:"LCS Pick'Em"})]})})}},79:function(e,t,i){"use strict";i.r(t);var a=i(2),s=i(40),n=i(21),r=i(73),c=i(22),o=i(39),d=i(24),l=i(18),p=i(41),h=i(11),m=i(5);const x=n.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: calc(${c.a.HEADER_HEIGHT} + 40px);
`,b=n.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,u=n.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,j=n.a.header`
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 20px;
`,g=n.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,f=n.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`,O=Object(n.a)(f)`
  width: 100%;
`,w=n.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  margin-bottom: 30px;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`,v=Object(n.a)(o.a)`
  font-size: 25px;
  height: 70px;
  width: 20%;
  min-width: 100px;
  color: white;
  background-color: ${c.a.COLOR.BLACK};
  &:hover {
    cursor: pointer;
  }
`,y=n.a.p`
  color: red;
  margin-top: -20px;
`;t.default=()=>{const e=Object(h.g)(),[t,i]=Object(a.useState)(),n=Object(l.b)();return Object(m.jsxs)(s.a,{title:"Sign-Up",description:"Sign-Up",children:[Object(m.jsx)(r.a,{}),Object(m.jsxs)(x,{children:[Object(m.jsx)(j,{children:"Sign-up"}),Object(m.jsxs)(g,{id:"signUpForm",children:[Object(m.jsx)(u,{children:Object(m.jsx)(O,{type:"text",placeholder:"Username",name:"username","data-test":"username",required:!0})}),Object(m.jsx)(f,{type:"email","data-test":"email",placeholder:"Email",name:"email",required:!0}),Object(m.jsx)(f,{type:"password",placeholder:"Password",name:"password","data-test":"password",required:!0}),Object(m.jsx)(f,{type:"password",placeholder:"Confirm Pasword",name:"passwordConfirm","data-test":"confirm-password",required:!0}),Object(m.jsx)(y,{children:t}),Object(m.jsxs)(b,{children:[Object(m.jsx)(v,{"data-test":"submit",onClick:()=>{i();const t=Object.values(document.forms.signUpForm).reduce(((e,t)=>("radio"===t.type?t.checked?e[t.name]=t.value:void 0===e[t.name]&&(e[t.name]=""):e[t.name]=t.value,e)),{});for(var a in t)if(""===t[a])return void i("Please fill out all fields");t.password===t.passwordConfirm?d.a.createUserWithEmailAndPassword(t.email,t.password).then((()=>{d.a.currentUser.updateProfile({displayName:`${t.username}`}).then((()=>{const i={email:d.a.currentUser.email,uid:d.a.currentUser.uid,displayName:`${t.username}`,picks:[]};n(Object(p.e)(i)),n(Object(p.a)(t.password.length)),d.b.get().then((e=>{n(Object(p.c)(e.docs[0].data()))})).then(d.c.doc(d.a.currentUser.uid).set(i),e.push("/home"))}))})).catch((e=>{i(e.message)})):i("Passwords must match")},children:"SIGN-UP"}),Object(m.jsx)(w,{"data-test":"sign-up",onClick:()=>e.push("signin"),children:"Already have an account? Sign in here"})]})]})]})]})}}}]);
//# sourceMappingURL=5.9fdf031e.chunk.js.map