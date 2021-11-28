(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[24],{103:function(e,t,i){"use strict";i(2);var n=i(66),a=i(25),o=i(67),r=i(69),s=i(11),c=i(5);const d=n.a.header`
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
`,h=n.a.div`
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
`,p=n.a.img`
  margin-left: 3%;
  width: 130px;
  :hover {
    cursor: pointer;
  }
`,x=n.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`,b=Object(n.a)(o.a)`
  margin-right: 10px;
  box-shadow: none;
  height: 10px;
  &:hover {
    filter: brightness(100%);
    cursor: pointer;
  }
`;t.a=()=>{const e=Object(s.g)();return Object(c.jsxs)(d,{id:"header",children:[Object(c.jsxs)(x,{children:[Object(c.jsx)(p,{onClick:()=>e.push("/home"),src:r.a}),Object(c.jsx)(h,{onClick:()=>e.push("/home"),children:"Ancient Path Adventures"})]}),Object(c.jsx)(l,{children:Object(c.jsx)(b,{children:"HELP"})})]})}},248:function(e,t,i){"use strict";i.r(t);var n=i(2),a=i(36),o=i(66),r=i(103),s=i(25),c=i(67),d=i(16),l=i(19),h=i(37),p=i(30),x=i(11),b=i(5);const u=o.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  height: calc(100vh - ${s.a.HEADER_HEIGHT}) vh;
`,g=o.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,m=o.a.header`
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 3%;
  @media (max-width: 1024px) {
    margin-top: 17%;
    margin-bottom: 15%;
  }
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
  @media (max-width: 1024px) {
    height: 50px;
  }
`,w=Object(o.a)(f)`
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
`,v=o.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
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
  background-color: ${s.a.COLOR.DARK_GREEN};
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
`);t.default=()=>{const e=Object(x.g)(),[t,i]=Object(n.useState)(),o=Object(d.b)();return Object(b.jsxs)(a.a,{title:"Sign-In",description:"Sign-In",children:[Object(b.jsx)(r.a,{}),Object(b.jsxs)(u,{children:[Object(b.jsx)(m,{children:"Sign-In"}),Object(b.jsxs)(j,{id:"signInForm",children:[Object(b.jsx)(w,{type:"email",placeholder:"Email",name:"email","data-test":"email",required:!0}),Object(b.jsx)(f,{type:"password",placeholder:"Password",name:"password","data-test":"password",required:!0}),Object(b.jsx)(O,{children:"Did you forget your password?"}),Object(b.jsx)(E,{children:t}),Object(b.jsxs)(g,{children:[Object(b.jsx)(v,{"data-test":"sign-up",onClick:()=>e.push("/signup"),children:"Don't have an account? Don\u2019t worry! Sign up here"}),Object(b.jsx)(y,{type:"submit","data-test":"submit",onClick:()=>{i();const t=Object.values(document.forms.signInForm).reduce(((e,t)=>(e[t.name]=t.value,e)),{});for(var n in t)if(""===t[n])return void i("Please fill out all fields");t.email.includes("@")?l.b.signInWithEmailAndPassword(t.email,t.password).then((()=>{l.e.doc(l.b.currentUser.uid).get().then((i=>{o(Object(h.b)(i.data())),o(Object(h.a)(t.password.length)),0!==i.data().classList.length?l.c.doc(i.data().classList[0].cid).get().then((e=>o(Object(p.a)(e.data())))):o(Object(p.a)(null)),e.push(`/${i.data().accountType}/home`)}))})).catch((e=>{"auth/user-not-found"===e.code?i("A user with this email address does not exist"):"auth/wrong-password"===e.code?i("The password is invalid."):i(e.message)})):i("Please enter valid email address")},children:"SIGN-IN"})]})]})]})]})}},67:function(e,t,i){"use strict";var n=i(25);const a=i(66).a.div`
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
`;t.a=a},69:function(e,t,i){"use strict";t.a=i.p+"static/media/white mtn.bb2904a1.png"}}]);
//# sourceMappingURL=24.b687bcbe.chunk.js.map