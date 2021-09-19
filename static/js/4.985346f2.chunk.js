(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[4],{80:function(e,t,i){"use strict";i(2);var n=i(15),a=i(22),o=i(33),s=i(36),r=i(4);const c=n.a.header`
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
`,d=n.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,l=n.a.div`
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
`,h=n.a.img`
  margin-left: 3%;
  width: 130px;
`,p=n.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`,x=Object(n.a)(o.a)`
  margin-right: 10px;
  box-shadow: none;
  height: 10px;
`;t.a=()=>Object(r.jsxs)(c,{id:"header",children:[Object(r.jsxs)(p,{children:[Object(r.jsx)(h,{src:s.a}),Object(r.jsx)(l,{children:"Ancient Path Adventures"})]}),Object(r.jsx)(d,{children:Object(r.jsx)(x,{children:"HELP"})})]})},81:function(e,t,i){"use strict";i(2);var n=i(34),a=i(49),o=i(26),s=i(48),r=i(33),c=i(15),d=i.p+"static/media/googleLogo.b3136124.png",l=i(4);const h=Object(c.a)(r.a)`
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  width: 250px;
  color: black;
  display: flex;
  justify-content: space-around;
`,p=c.a.img`
    height: 90%;
`;t.a=()=>{const e=Object(o.b)(),t=Object(a.a)(n.a)[0];return Object(l.jsxs)("div",{children:[!t&&Object(l.jsxs)(h,{onClick:()=>{n.a.signInWithPopup(n.b).then((t=>{const i=t.user;e(Object(s.a)(i))})).catch((e=>e.message?console.log(e.message):console.log("Unexpected Error")))},children:[Object(l.jsx)(p,{src:d}),"SIGN-IN WITH GOOGLE"]}),t&&Object(l.jsx)(h,{onClick:()=>{n.a.signOut().then((()=>{e(Object(s.b)())}))},children:"LOGOUT"})]})}},84:function(e,t,i){"use strict";i.r(t);var n=i(2),a=i(81),o=i(47),s=i(15),r=i(80),c=i(22),d=i(33),l=i(26),h=i(34),p=i(48),x=i(4);const b=s.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
  height: calc(100vh - ${c.a.HEADER_HEIGHT});
`,j=s.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,u=s.a.header`
  font-weight: bold;
  font-size: 64px;
`,g=s.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,O=s.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  font-size: 30px;
  outline: none;
`,m=Object(s.a)(O)`
  margin-bottom: 60px;
`,f=s.a.p`
  text-align: right;
  font-size: 18px;
  margin-bottom: 30px;
  color: ${c.a.COLOR.LIGHT_GREEN};

  &:hover {
    cursor: pointer;
    color: ${c.a.COLOR.DARK_GREEN};
  }
`,w=s.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  margin-bottom: 30px;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`,v=Object(s.a)(d.a)`
  font-size: 25px;
  height: 40px;
  width: 20%;
  min-width: 100px;
  background-color: ${c.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,y=s.a.div`
  display: inline-block;
  border-bottom: 1px solid black;
  margin: 0px 10px;
  width: 15%;
`,E=s.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`,I=s.a.p`
    color: red;
    margin-top: -20px;
`;t.default=()=>{const[e,t]=Object(n.useState)(),i=Object(l.b)();return Object(x.jsxs)(o.a,{description:"Sign-In",children:[Object(x.jsx)(r.a,{}),Object(x.jsxs)(b,{children:[Object(x.jsx)(u,{children:"Sign-In"}),Object(x.jsxs)(g,{id:"signInForm",children:[Object(x.jsx)(m,{type:"email",placeholder:"Email",name:"email",required:!0}),Object(x.jsx)(O,{type:"password",placeholder:"Password",name:"password",required:!0}),Object(x.jsx)(f,{children:"Did you forget your password?"}),Object(x.jsx)(I,{children:e}),Object(x.jsxs)(j,{children:[Object(x.jsx)(v,{type:"submit",onClick:()=>{t();const e=Object.values(document.forms.signInForm).reduce(((e,t)=>(e[t.name]=t.value,e)),{});for(var n in e)if(""===e[n])return void t("Please fill out all fields");e.email.includes("@")?h.a.signInWithEmailAndPassword(e.email,e.password).then((()=>{i(Object(p.a)(h.a.currentUser))})).catch((e=>{"auth/user-not-found"===e.code?t("A user with this email address does not exist"):"auth/wrong-password"===e.code?t("The password is invalid or the user is attempting to use a third party account to sign in. Try using one of the options below."):t(e.message)})):t("Please enter valid email address")},children:"SIGN-IN"}),Object(x.jsx)(w,{onClick:()=>window.location.href="/AncientPathAdventures/signup",children:"Don't have an account? Don\u2019t worry! Sign up here"})]})]}),Object(x.jsxs)(E,{children:[Object(x.jsx)(y,{}),Object(x.jsx)("p",{children:"OR"}),Object(x.jsx)(y,{})]}),Object(x.jsx)(a.a,{})]})]})}}}]);
//# sourceMappingURL=4.985346f2.chunk.js.map