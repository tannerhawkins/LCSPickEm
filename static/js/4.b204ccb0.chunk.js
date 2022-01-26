(this.webpackJsonpLCSPickEm=this.webpackJsonpLCSPickEm||[]).push([[4],{70:function(e,t,i){"use strict";t.a=i.p+"static/media/lcs-logo.dbbe227a.png"},71:function(e,t,i){"use strict";i(2);var a=i(24),n=i(18),s=i(39),c=(i(22),i(21)),o=i(31),r=i(25),d=i(11),l=i(5);const h=Object(c.a)(s.a)`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  color: black;
  @media (max-width: 800px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;t.a=({className:e})=>{const t=Object(d.g)(),i=Object(n.b)(),s=Object(n.c)(o.b);return Object(l.jsxs)("div",{className:e,"data-test":"login-logout",children:[!s&&Object(l.jsx)(h,{onClick:()=>t.push("/signin"),children:"SIGN-IN"}),s&&Object(l.jsx)(h,{onClick:()=>{a.a.signOut().then((()=>{i(Object(r.a)())}))},children:"LOGOUT"})]})}},73:function(e,t,i){"use strict";i(2);var a=i(21),n=i(22),s=i(70),c=i(71),o=i(11),r=i(5);const d=a.a.header`
  display: flex;
  background-color: ${n.a.COLOR.BLACK};
  justify-content: space-between;
  align-items: center;
  height: ${n.a.HEADER_HEIGHT};
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
`),h=a.a.img`
  margin-left: 3%;
  width: 100px;
  height: 70px;
`,p=a.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
  :hover {
    cursor: pointer;
  }
`;Object(a.a)(c.a)``;t.a=()=>{const e=Object(o.g)();return Object(r.jsx)(d,{id:"header",children:Object(r.jsxs)(p,{onClick:()=>e.push("/home"),children:[Object(r.jsx)(h,{src:s.a}),Object(r.jsx)(l,{children:"LCS Pick'Em"})]})})}},78:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i(40),s=i(21),c=i(73),o=i(22),r=i(39),d=i(18),l=i(24),h=i(41),p=i(11),x=i(5);const b=s.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(${o.a.HEADER_HEIGHT} + 40px);
  height: calc(100vh - ${o.a.HEADER_HEIGHT}) vh;
`,m=s.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;
`,g=s.a.header`
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 3%;
  @media (max-width: 1024px) {
    margin-top: 17%;
    margin-bottom: 15%;
  }
`,j=s.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,u=s.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  font-size: 30px;
  outline: none;
  @media (max-width: 1024px) {
    height: 50px;
  }
`,O=Object(s.a)(u)`
  margin-bottom: 60px;
`,f=s.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`,w=Object(s.a)(r.a)`
  font-size: 25px;
  height: 70px;
  width: 20%;
  min-width: 100px;
  color: white;
  background-color: ${o.a.COLOR.BLACK};
  &:hover {
    cursor: pointer;
  }
`,v=s.a.p`
  color: red;
  margin-top: -20px;
`;t.default=()=>{const e=Object(p.g)(),[t,i]=Object(a.useState)(),s=Object(d.b)();return Object(x.jsxs)(n.a,{title:"Sign-In",description:"Sign-In",children:[Object(x.jsx)(c.a,{}),Object(x.jsxs)(b,{children:[Object(x.jsx)(g,{children:"Sign-In"}),Object(x.jsxs)(j,{id:"signInForm",children:[Object(x.jsx)(O,{type:"email",placeholder:"Email",name:"email","data-test":"email",required:!0}),Object(x.jsx)(u,{type:"password",placeholder:"Password",name:"password","data-test":"password",required:!0}),Object(x.jsx)(v,{children:t}),Object(x.jsxs)(m,{children:[Object(x.jsx)(f,{"data-test":"sign-up",onClick:()=>e.push("/signup"),children:"Don't have an account? Sign up here"}),Object(x.jsx)(w,{type:"submit","data-test":"submit",onClick:()=>{i();const t=Object.values(document.forms.signInForm).reduce(((e,t)=>(e[t.name]=t.value,e)),{});for(var a in t)if(""===t[a])return void i("Please fill out all fields");t.email.includes("@")?l.a.signInWithEmailAndPassword(t.email,t.password).then((()=>{l.c.doc(l.a.currentUser.uid).get().then((i=>{s(Object(h.e)(i.data())),s(Object(h.a)(t.password.length)),l.b.get().then((e=>{s(Object(h.c)(e.docs[0].data()))})).then(e.push("/home"))}))})).catch((e=>{"auth/user-not-found"===e.code?i("A user with this email address does not exist"):"auth/wrong-password"===e.code?i("The password is invalid."):i(e.message)})):i("Please enter valid email address")},children:"SIGN-IN"})]})]})]})]})}}}]);
//# sourceMappingURL=4.b204ccb0.chunk.js.map