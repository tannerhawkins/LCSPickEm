(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[5],{83:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n={COLOR:{LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",DARK_BLUE:"#373B53"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px"}},84:function(e,t,i){"use strict";var n=i(83);const a=i(82).a.div`
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
`;t.a=a},85:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a}));const n=e=>({type:"SIGN_IN",payload:e}),a=()=>({type:"SIGN_OUT"})},86:function(e,t,i){"use strict";t.a=i.p+"static/media/white mtn.bb2904a1.png"},87:function(e,t,i){"use strict";i(2);var n=i(82),a=i(83),s=i(84),r=i(86),c=i(8);const o=n.a.header`
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
`;t.a=()=>Object(c.jsxs)(o,{id:"header",children:[Object(c.jsxs)(x,{children:[Object(c.jsx)(p,{src:r.a}),Object(c.jsx)(l,{children:"Ancient Path Adventures"})]}),Object(c.jsx)(d,{children:Object(c.jsx)(h,{children:"HELP"})})]})},88:function(e,t,i){"use strict";i(2);var n=i(40),a=i(52),s=i(29),r=i(85),c=i(84),o=i(82),d=i.p+"static/media/googleLogo.b3136124.png",l=i(8);const p=Object(o.a)(c.a)`
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  width: 250px;
  color: black;
  display: flex;
  height: 60px;
  justify-content: space-around;
`,x=o.a.img`
    height: 60%;
`;t.a=({className:e})=>{const t=Object(s.b)(),i=Object(a.a)(n.a)[0];return Object(l.jsxs)("div",{className:e,children:[!i&&Object(l.jsxs)(p,{onClick:()=>{n.a.signInWithPopup(n.b).then((e=>{const i=e.user;t(Object(r.a)(i))})).catch((e=>e.message?console.log(e.message):console.log("Unexpected Error")))},children:[Object(l.jsx)(x,{src:d}),"SIGN-IN WITH GOOGLE"]}),i&&Object(l.jsx)(p,{onClick:()=>{n.a.signOut().then((()=>{t(Object(r.b)())}))},children:"LOGOUT"})]})}},94:function(e,t,i){"use strict";i.r(t);var n=i(2),a=i(88),s=i(41),r=i(82),c=i(87),o=i(83),d=i(84),l=i(40),p=i(29),x=i(85),h=i(8);const b=r.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 50px 0;
`,j=r.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,u=r.a.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`,m=r.a.header`
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 20px;
`,g=r.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,f=r.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`,O=Object(r.a)(f)`
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
  height: 70px;
  width: 20%;
  min-width: 100px;
  background-color: ${o.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,E=r.a.div`
  display: inline-block;
  border-bottom: 1px solid black;
  margin: 0px 10px;
  width: 15%;
`,v=r.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin-bottom: 30px;
`,A=r.a.p`
    color: red;
    margin-top: -20px;
`;t.default=()=>{const[e,t]=Object(n.useState)(),i=Object(p.b)();return Object(h.jsxs)(s.a,{title:"Sign-Up",description:"Sign-Up",children:[Object(h.jsx)(c.a,{}),Object(h.jsxs)(b,{children:[Object(h.jsx)(m,{children:"Sign-up"}),Object(h.jsxs)(g,{id:"signUpForm",children:[Object(h.jsxs)(u,{children:[Object(h.jsx)(O,{type:"text",placeholder:"First Name",name:"first",required:!0}),Object(h.jsx)(O,{type:"text",placeholder:"Last Name",name:"last",required:!0})]}),Object(h.jsx)(f,{type:"email",placeholder:"Email",name:"email",required:!0}),Object(h.jsx)(f,{type:"password",placeholder:"Password",name:"password",required:!0}),Object(h.jsx)(f,{type:"password",placeholder:"Confirm Pasword",name:"passwordConfirm",required:!0}),Object(h.jsx)(A,{children:e}),Object(h.jsxs)(j,{children:[Object(h.jsx)(y,{onClick:()=>{t();const e=Object.values(document.forms.signUpForm).reduce(((e,t)=>(e[t.name]=t.value,e)),{});for(var n in e)if(""===e[n])return void t("Please fill out all fields");e.password===e.passwordConfirm?l.a.createUserWithEmailAndPassword(e.email,e.password).then((()=>{l.a.currentUser.updateProfile({displayName:`${e.first} ${e.last}`}).then(i(Object(x.a)(l.a.currentUser)))})).catch((e=>{t(e.message)})):t("Passwords must match")},children:"SIGN-UP"}),Object(h.jsx)(w,{onClick:()=>window.location.href="/AncientPathAdventures/signin",children:"Already have an account? Don\u2019t worry! Sign in here"})]})]}),Object(h.jsxs)(v,{children:[Object(h.jsx)(E,{}),Object(h.jsx)("p",{children:"OR"}),Object(h.jsx)(E,{})]}),Object(h.jsx)(a.a,{})]})]})}}}]);
//# sourceMappingURL=5.dbdccf40.chunk.js.map