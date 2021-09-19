(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[5],{80:function(e,t,i){"use strict";i(2);var n=i(15),a=i(22),s=i(33),r=i(36),c=i(4);const o=n.a.header`
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
`,p=n.a.img`
  margin-left: 3%;
  width: 130px;
`,x=n.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`,h=Object(n.a)(s.a)`
  margin-right: 10px;
  box-shadow: none;
  height: 10px;
`;t.a=()=>Object(c.jsxs)(o,{id:"header",children:[Object(c.jsxs)(x,{children:[Object(c.jsx)(p,{src:r.a}),Object(c.jsx)(l,{children:"Ancient Path Adventures"})]}),Object(c.jsx)(d,{children:Object(c.jsx)(h,{children:"HELP"})})]})},81:function(e,t,i){"use strict";i(2);var n=i(34),a=i(49),s=i(26),r=i(48),c=i(33),o=i(15),d=i.p+"static/media/googleLogo.b3136124.png",l=i(4);const p=Object(o.a)(c.a)`
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  width: 250px;
  color: black;
  display: flex;
  justify-content: space-around;
`,x=o.a.img`
    height: 90%;
`;t.a=()=>{const e=Object(s.b)(),t=Object(a.a)(n.a)[0];return Object(l.jsxs)("div",{children:[!t&&Object(l.jsxs)(p,{onClick:()=>{n.a.signInWithPopup(n.b).then((t=>{const i=t.user;e(Object(r.a)(i))})).catch((e=>e.message?console.log(e.message):console.log("Unexpected Error")))},children:[Object(l.jsx)(x,{src:d}),"SIGN-IN WITH GOOGLE"]}),t&&Object(l.jsx)(p,{onClick:()=>{n.a.signOut().then((()=>{e(Object(r.b)())}))},children:"LOGOUT"})]})}},85:function(e,t,i){"use strict";i.r(t);var n=i(2),a=i(81),s=i(47),r=i(15),c=i(80),o=i(22),d=i(33),l=i(34),p=i(26),x=i(48),h=i(4);const j=r.a.div`
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
`,m=r.a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`,u=r.a.header`
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 20px;
`,g=r.a.form`
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
`,f=Object(r.a)(O)`
    width: 45%;
`,w=r.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  margin-bottom: 30px;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`,y=Object(r.a)(d.a)`
  font-size: 25px;
  height: 40px;
  width: 20%;
  min-width: 100px;
  background-color: ${o.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,v=r.a.div`
  display: inline-block;
  border-bottom: 1px solid black;
  margin: 0px 10px;
  width: 15%;
`,k=r.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`,P=r.a.p`
    color: red;
    margin-top: -20px;
`;t.default=()=>{const[e,t]=Object(n.useState)(),i=Object(p.b)();return Object(h.jsxs)(s.a,{description:"Sign-Up",children:[Object(h.jsx)(c.a,{}),Object(h.jsxs)(j,{children:[Object(h.jsx)(u,{children:"Sign-up"}),Object(h.jsxs)(g,{id:"signUpForm",children:[Object(h.jsxs)(m,{children:[Object(h.jsx)(f,{type:"text",placeholder:"First Name",name:"first",required:!0}),Object(h.jsx)(f,{type:"text",placeholder:"Last Name",name:"last",required:!0})]}),Object(h.jsx)(O,{type:"email",placeholder:"Email",name:"email",required:!0}),Object(h.jsx)(O,{type:"password",placeholder:"Password",name:"password",required:!0}),Object(h.jsx)(O,{type:"password",placeholder:"Confirm Pasword",name:"passwordConfirm",required:!0}),Object(h.jsx)(P,{children:e}),Object(h.jsxs)(b,{children:[Object(h.jsx)(y,{onClick:()=>{t();const e=Object.values(document.forms.signUpForm).reduce(((e,t)=>(e[t.name]=t.value,e)),{});for(var n in e)if(""===e[n])return void t("Please fill out all fields");e.password===e.passwordConfirm?l.a.createUserWithEmailAndPassword(e.email,e.password).then((()=>{l.a.currentUser.updateProfile({displayName:`${e.first} ${e.last}`}).then(i(Object(x.a)(l.a.currentUser)))})).catch((e=>{t(e.message)})):t("Passwords must match")},children:"SIGN-UP"}),Object(h.jsx)(w,{onClick:()=>window.location.href="/AncientPathAdventures/signin",children:"Already have an account? Don\u2019t worry! Sign in here"})]})]}),Object(h.jsxs)(k,{children:[Object(h.jsx)(v,{}),Object(h.jsx)("p",{children:"OR"}),Object(h.jsx)(v,{})]}),Object(h.jsx)(a.a,{})]})]})}}}]);
//# sourceMappingURL=5.41fc0d8f.chunk.js.map