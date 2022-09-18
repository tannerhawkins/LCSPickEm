(this.webpackJsonpLCSPickEm=this.webpackJsonpLCSPickEm||[]).push([[4],{126:function(e,t,i){"use strict";i.r(t);var n=i(2),a=i(41),o=i(21),s=i(88),r=i(22),c=i(40),d=i(18),l=i(24),p=i(42),h=i(11),u=i(4);const g=o.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(${r.a.HEADER_HEIGHT} + 40px);
  height: calc(100vh - ${r.a.HEADER_HEIGHT}) vh;
`,x=o.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 5%;
`,m=o.a.header`
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 3%;
  @media (max-width: 1024px) {
    margin-top: 17%;
    margin-bottom: 15%;
  }
`,b=o.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,j=o.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  font-size: 30px;
  outline: none;
  @media (max-width: 1024px) {
    height: 50px;
  }
`,f=Object(o.a)(j)`
  margin-bottom: 60px;
`,w=o.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`,O=Object(o.a)(c.a)`
  font-size: 25px;
  height: 70px;
  width: 20%;
  min-width: 100px;
  color: white;
  background-color: ${r.a.COLOR.BLACK};
  &:hover {
    cursor: pointer;
  }
`,v=o.a.p`
  color: red;
  margin-top: -20px;
`;t.default=()=>{const e=Object(h.g)(),[t,i]=Object(n.useState)(),o=Object(d.b)();return Object(u.jsxs)(a.a,{title:"Sign-In",description:"Sign-In",children:[Object(u.jsx)(s.a,{}),Object(u.jsxs)(g,{children:[Object(u.jsx)(m,{children:"Sign-In"}),Object(u.jsxs)(b,{id:"signInForm",children:[Object(u.jsx)(f,{type:"email",placeholder:"Email",name:"email","data-test":"email",required:!0}),Object(u.jsx)(j,{type:"password",placeholder:"Password",name:"password","data-test":"password",required:!0}),Object(u.jsx)(v,{children:t}),Object(u.jsxs)(x,{children:[Object(u.jsx)(w,{"data-test":"sign-up",onClick:()=>e.push("/signup"),children:"Don't have an account? Sign up here"}),Object(u.jsx)(O,{type:"submit","data-test":"submit",onClick:()=>{i();const t=Object.values(document.forms.signInForm).reduce(((e,t)=>(e[t.name]=t.value,e)),{});for(var n in t)if(""===t[n])return void i("Please fill out all fields");t.email.includes("@")?l.a.signInWithEmailAndPassword(t.email,t.password).then((()=>{l.e.doc(l.a.currentUser.uid).get().then((i=>{o(Object(p.e)(i.data())),o(Object(p.a)(t.password.length)),l.c(r.a.SEASON).then((e=>{const t=Object.values(e.data()),i=t.map((e=>{var t;return null===(t=e.games[e.games.length-1])||void 0===t?void 0:t.start})).reduce((e=>new Date>e?1:0)),n=i==t.length?i:i+1;o(Object(p.c)(t[n]?t[n]:t[0]))})).then(e.push("/home"))}))})).catch((e=>{"auth/user-not-found"===e.code?i("A user with this email address does not exist"):"auth/wrong-password"===e.code?i("The password is invalid."):i(e.message)})):i("Please enter valid email address")},children:"SIGN-IN"})]})]})]})]})}},82:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/lcs-logo.dbbe227a.png"},83:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/worlds-logo.39cc699c.png"},84:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/worlds-logo-white.21820bdc.png"},85:function(e,t,i){"use strict";i(2);var n=i(24),a=i(18),o=i(40),s=(i(22),i(21)),r=i(31),c=i(25),d=i(11),l=i(4);const p=Object(s.a)(o.a)`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  color: black;
  @media (max-width: 800px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;t.a=({className:e})=>{const t=Object(d.g)(),i=Object(a.b)(),o=Object(a.c)(r.b);return Object(l.jsxs)("div",{className:e,"data-test":"login-logout",children:[!o&&Object(l.jsx)(p,{onClick:()=>t.push("/signin"),children:"SIGN-IN"}),o&&Object(l.jsx)(p,{onClick:()=>{n.a.signOut().then((()=>{i(Object(c.a)())}))},children:"LOGOUT"})]})}},86:function(e,t,i){var n={"./lcs-logo.png":82,"./worlds-logo-white.png":84,"./worlds-logo.png":83};function a(e){var t=o(e);return i(t)}function o(e){if(!i.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=86},88:function(e,t,i){"use strict";i(2);var n=i(21),a=i(22),o=i(85),s=i(11),r=i(4);const c=n.a.header`
  display: flex;
  background-color: ${a.a.COLOR.BLACK};
  justify-content: space-between;
  align-items: center;
  height: ${a.a.HEADER_HEIGHT};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100000;
`,d=(n.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,n.a.div`
  color: white;
  white-space: nowrap;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    display: none;
  }
`),l=n.a.img`
  margin-left: 3%;
  width: 100px;
  height: 70px;
`,p=n.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
  :hover {
    cursor: pointer;
  }
`;Object(n.a)(o.a)``;t.a=()=>{const e=Object(s.g)();return Object(r.jsx)(c,{id:"header",children:Object(r.jsxs)(p,{onClick:()=>e.push("/home"),children:[Object(r.jsx)(l,{src:i(86)(`./${a.a.TITLE}-logo${"worlds"==a.a.TITLE?"-white":""}.png`).default}),Object(r.jsxs)(d,{children:["LCS"==a.a.TITLE?"LCS":"Worlds"," Pick'Em"]})]})})}}}]);
//# sourceMappingURL=4.adec011a.chunk.js.map