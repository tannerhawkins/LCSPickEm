(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[4],{83:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n={COLOR:{LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",DARK_BLUE:"#373B53"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px"}},84:function(e,t,i){"use strict";var n=i(83);const o=i(82).a.div`
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
`;t.a=o},85:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return o}));const n=e=>({type:"SIGN_IN",payload:e}),o=()=>({type:"SIGN_OUT"})},86:function(e,t,i){"use strict";t.a=i.p+"static/media/white mtn.bb2904a1.png"},87:function(e,t,i){"use strict";i(2);var n=i(82),o=i(83),a=i(84),s=i(86),r=i(8);const c=n.a.header`
  display: flex;
  background-color: ${o.a.COLOR.LIGHT_GREEN};
  justify-content: space-between;
  align-items: center;
	height: ${o.a.HEADER_HEIGHT};
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
`,h=n.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`,x=Object(n.a)(a.a)`
  margin-right: 10px;
  box-shadow: none;
  height: 10px;
`;t.a=()=>Object(r.jsxs)(c,{id:"header",children:[Object(r.jsxs)(h,{children:[Object(r.jsx)(p,{src:s.a}),Object(r.jsx)(l,{children:"Ancient Path Adventures"})]}),Object(r.jsx)(d,{children:Object(r.jsx)(x,{children:"HELP"})})]})},88:function(e,t,i){"use strict";i(2);var n=i(40),o=i(52),a=i(29),s=i(85),r=i(84),c=i(82),d=i.p+"static/media/googleLogo.b3136124.png",l=i(8);const p=Object(c.a)(r.a)`
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  width: 250px;
  color: black;
  display: flex;
  height: 60px;
  justify-content: space-around;
`,h=c.a.img`
    height: 60%;
`;t.a=({className:e})=>{const t=Object(a.b)(),i=Object(o.a)(n.a)[0];return Object(l.jsxs)("div",{className:e,children:[!i&&Object(l.jsxs)(p,{onClick:()=>{n.a.signInWithPopup(n.b).then((e=>{const i=e.user;t(Object(s.a)(i))})).catch((e=>e.message?console.log(e.message):console.log("Unexpected Error")))},children:[Object(l.jsx)(h,{src:d}),"SIGN-IN WITH GOOGLE"]}),i&&Object(l.jsx)(p,{onClick:()=>{n.a.signOut().then((()=>{t(Object(s.b)())}))},children:"LOGOUT"})]})}},93:function(e,t,i){"use strict";i.r(t);var n=i(2),o=i(88),a=i(41),s=i(82),r=i(87),c=i(83),d=i(84),l=i(29),p=i(40),h=i(85),x=i(8);const b=s.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
  height: calc(100vh - ${c.a.HEADER_HEIGHT});
`,u=s.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,j=s.a.header`
  font-weight: bold;
  font-size: 64px;
`,g=s.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,f=s.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  font-size: 30px;
  outline: none;
`,O=Object(s.a)(f)`
  margin-bottom: 60px;
`,m=s.a.p`
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
`,E=Object(s.a)(d.a)`
  font-size: 25px;
  height: 70px;
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
`,v=s.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`,I=s.a.p`
    color: red;
    margin-top: -20px;
`;t.default=()=>{const[e,t]=Object(n.useState)(),i=Object(l.b)();return Object(x.jsxs)(a.a,{title:"Sign-In",description:"Sign-In",children:[Object(x.jsx)(r.a,{}),Object(x.jsxs)(b,{children:[Object(x.jsx)(j,{children:"Sign-In"}),Object(x.jsxs)(g,{id:"signInForm",children:[Object(x.jsx)(O,{type:"email",placeholder:"Email",name:"email",required:!0}),Object(x.jsx)(f,{type:"password",placeholder:"Password",name:"password",required:!0}),Object(x.jsx)(m,{children:"Did you forget your password?"}),Object(x.jsx)(I,{children:e}),Object(x.jsxs)(u,{children:[Object(x.jsx)(E,{type:"submit",onClick:()=>{t();const e=Object.values(document.forms.signInForm).reduce(((e,t)=>(e[t.name]=t.value,e)),{});for(var n in e)if(""===e[n])return void t("Please fill out all fields");e.email.includes("@")?p.a.signInWithEmailAndPassword(e.email,e.password).then((()=>{i(Object(h.a)(p.a.currentUser))})).catch((e=>{"auth/user-not-found"===e.code?t("A user with this email address does not exist"):"auth/wrong-password"===e.code?t("The password is invalid or the user is attempting to use a third party account to sign in. Try using one of the options below."):t(e.message)})):t("Please enter valid email address")},children:"SIGN-IN"}),Object(x.jsx)(w,{onClick:()=>window.location.href="/AncientPathAdventures/signup",children:"Don't have an account? Don\u2019t worry! Sign up here"})]})]}),Object(x.jsxs)(v,{children:[Object(x.jsx)(y,{}),Object(x.jsx)("p",{children:"OR"}),Object(x.jsx)(y,{})]}),Object(x.jsx)(o.a,{})]})]})}}}]);
//# sourceMappingURL=4.afba3997.chunk.js.map