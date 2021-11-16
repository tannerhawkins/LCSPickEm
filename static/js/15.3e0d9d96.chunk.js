(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[15],{128:function(e,t,i){"use strict";i.r(t);var n=i(2),a=i(36),o=i(76),s=i(89),r=i(25),c=i(77),d=i(18),l=i(20),p=i(37),h=i(86),x=i(11),u=i(5);const b=o.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
  height: calc(100vh - ${r.a.HEADER_HEIGHT});
`,g=o.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,m=o.a.header`
  font-weight: bold;
  font-size: 64px;
`,j=o.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,f=o.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  font-size: 30px;
  outline: none;
`,w=Object(o.a)(f)`
  margin-bottom: 60px;
`,O=o.a.p`
  text-align: right;
  font-size: 18px;
  margin-bottom: 30px;
  color: ${r.a.COLOR.LIGHT_GREEN};

  &:hover {
    cursor: pointer;
    color: ${r.a.COLOR.DARK_GREEN};
  }
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
`,y=Object(o.a)(c.a)`
  font-size: 25px;
  height: 70px;
  width: 20%;
  min-width: 100px;
  background-color: ${r.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,E=(o.a.div`
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
`);t.default=()=>{const e=Object(x.g)(),[t,i]=Object(n.useState)(),o=Object(d.b)();return Object(u.jsxs)(a.a,{title:"Sign-In",description:"Sign-In",children:[Object(u.jsx)(s.a,{}),Object(u.jsxs)(b,{children:[Object(u.jsx)(m,{children:"Sign-In"}),Object(u.jsxs)(j,{id:"signInForm",children:[Object(u.jsx)(w,{type:"email",placeholder:"Email",name:"email","data-test":"email",required:!0}),Object(u.jsx)(f,{type:"password",placeholder:"Password",name:"password","data-test":"password",required:!0}),Object(u.jsx)(O,{children:"Did you forget your password?"}),Object(u.jsx)(E,{children:t}),Object(u.jsxs)(g,{children:[Object(u.jsx)(y,{type:"submit","data-test":"submit",onClick:()=>{i();const t=Object.values(document.forms.signInForm).reduce(((e,t)=>(e[t.name]=t.value,e)),{});for(var n in t)if(""===t[n])return void i("Please fill out all fields");t.email.includes("@")?l.a.signInWithEmailAndPassword(t.email,t.password).then((()=>{l.d.doc(l.a.currentUser.uid).get().then((t=>{o(Object(p.a)(t.data())),0!==t.data().classList.length?l.b.doc(t.data().classList[0].cid).get().then((e=>o(Object(h.a)(e.data())))):o(Object(h.a)(null)),e.push(`/${t.data().accountType}/home`)}))})).catch((e=>{"auth/user-not-found"===e.code?i("A user with this email address does not exist"):"auth/wrong-password"===e.code?i("The password is invalid."):i(e.message)})):i("Please enter valid email address")},children:"SIGN-IN"}),Object(u.jsx)(v,{"data-test":"sign-up",onClick:()=>e.push("/signup"),children:"Don't have an account? Don\u2019t worry! Sign up here"})]})]})]})]})}},77:function(e,t,i){"use strict";var n=i(25);const a=i(76).a.div`
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
`;t.a=a},78:function(e,t,i){"use strict";t.a=i.p+"static/media/white mtn.bb2904a1.png"},86:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));i(20);const n=e=>({type:"SET_CURRENT_CLASS",payload:e})},89:function(e,t,i){"use strict";i(2);var n=i(76),a=i(25),o=i(77),s=i(78),r=i(11),c=i(5);const d=n.a.header`
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
  :hover {
    cursor: pointer;
  }
  @media (max-width: 800px) {
    display: none;
  }
`,h=n.a.img`
  margin-left: 3%;
  width: 130px;
  :hover {
    cursor: pointer;
  }
`,x=n.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`,u=Object(n.a)(o.a)`
  margin-right: 10px;
  box-shadow: none;
  height: 10px;
`;t.a=()=>{const e=Object(r.g)();return Object(c.jsxs)(d,{id:"header",children:[Object(c.jsxs)(x,{children:[Object(c.jsx)(h,{onClick:()=>e.push("/home"),src:s.a}),Object(c.jsx)(p,{onClick:()=>e.push("/home"),children:"Ancient Path Adventures"})]}),Object(c.jsx)(l,{children:Object(c.jsx)(u,{children:"HELP"})})]})}}}]);
//# sourceMappingURL=15.3e0d9d96.chunk.js.map