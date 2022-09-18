(this.webpackJsonpLCSPickEm=this.webpackJsonpLCSPickEm||[]).push([[5],{107:function(e,t,i){"use strict";i.r(t);var a=i(2),n=i(41),s=i(21),r=i(88),o=i(22),c=i(40),d=i(24),l=i(18),p=i(42),h=i(11),u=i(4);const m=s.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: calc(${o.a.HEADER_HEIGHT} + 40px);
`,x=s.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,g=s.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,b=s.a.header`
  font-weight: bold;
  font-size: 64px;
  margin-bottom: 20px;
`,j=s.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,f=s.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`,w=Object(s.a)(f)`
  width: 100%;
`,O=s.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  margin-bottom: 30px;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`,v=Object(s.a)(c.a)`
  font-size: 25px;
  height: 70px;
  width: 20%;
  min-width: 100px;
  color: white;
  background-color: ${o.a.COLOR.BLACK};
  &:hover {
    cursor: pointer;
  }
`,y=s.a.p`
  color: red;
  margin-top: -20px;
`;t.default=()=>{const e=Object(h.g)(),[t,i]=Object(a.useState)(),s=Object(l.b)();return Object(u.jsxs)(n.a,{title:"Sign-Up",description:"Sign-Up",children:[Object(u.jsx)(r.a,{}),Object(u.jsxs)(m,{children:[Object(u.jsx)(b,{children:"Sign-up"}),Object(u.jsxs)(j,{id:"signUpForm",children:[Object(u.jsx)(g,{children:Object(u.jsx)(w,{type:"text",placeholder:"Username",name:"username","data-test":"username",required:!0})}),Object(u.jsx)(f,{type:"email","data-test":"email",placeholder:"Email",name:"email",required:!0}),Object(u.jsx)(f,{type:"password",placeholder:"Password",name:"password","data-test":"password",required:!0}),Object(u.jsx)(f,{type:"password",placeholder:"Confirm Pasword",name:"passwordConfirm","data-test":"confirm-password",required:!0}),Object(u.jsx)(y,{children:t}),Object(u.jsxs)(x,{children:[Object(u.jsx)(v,{"data-test":"submit",onClick:()=>{i();const t=Object.values(document.forms.signUpForm).reduce(((e,t)=>("radio"===t.type?t.checked?e[t.name]=t.value:void 0===e[t.name]&&(e[t.name]=""):e[t.name]=t.value,e)),{});for(var a in t)if(""===t[a])return void i("Please fill out all fields");t.password===t.passwordConfirm?d.a.createUserWithEmailAndPassword(t.email,t.password).then((()=>{d.a.currentUser.updateProfile({displayName:`${t.username}`}).then((()=>{const i={email:d.a.currentUser.email,uid:d.a.currentUser.uid,displayName:`${t.username}`,picks:{}};s(Object(p.e)(i)),s(Object(p.a)(t.password.length)),d.c(o.a.SEASON).then((e=>{const t=Object.values(e.data()),i=t.map((e=>{var t;return null===(t=e.games[e.games.length-1])||void 0===t?void 0:t.start})).reduce((e=>new Date>e?1:0)),a=i==t.length?i:i+1;s(Object(p.c)(t[a]?t[a]:t[0]))})).then(d.e.doc(d.a.currentUser.uid).set(i),e.push("/home"))}))})).catch((e=>{i(e.message)})):i("Passwords must match")},children:"SIGN-UP"}),Object(u.jsx)(O,{"data-test":"sign-up",onClick:()=>e.push("signin"),children:"Already have an account? Sign in here"})]})]})]})]})}},82:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/lcs-logo.dbbe227a.png"},83:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/worlds-logo.39cc699c.png"},84:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/worlds-logo-white.21820bdc.png"},85:function(e,t,i){"use strict";i(2);var a=i(24),n=i(18),s=i(40),r=(i(22),i(21)),o=i(31),c=i(25),d=i(11),l=i(4);const p=Object(r.a)(s.a)`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  color: black;
  @media (max-width: 800px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;t.a=({className:e})=>{const t=Object(d.g)(),i=Object(n.b)(),s=Object(n.c)(o.b);return Object(l.jsxs)("div",{className:e,"data-test":"login-logout",children:[!s&&Object(l.jsx)(p,{onClick:()=>t.push("/signin"),children:"SIGN-IN"}),s&&Object(l.jsx)(p,{onClick:()=>{a.a.signOut().then((()=>{i(Object(c.a)())}))},children:"LOGOUT"})]})}},86:function(e,t,i){var a={"./lcs-logo.png":82,"./worlds-logo-white.png":84,"./worlds-logo.png":83};function n(e){var t=s(e);return i(t)}function s(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id=86},88:function(e,t,i){"use strict";i(2);var a=i(21),n=i(22),s=i(85),r=i(11),o=i(4);const c=a.a.header`
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
`,d=(a.a.div`
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
`),l=a.a.img`
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
`;Object(a.a)(s.a)``;t.a=()=>{const e=Object(r.g)();return Object(o.jsx)(c,{id:"header",children:Object(o.jsxs)(p,{onClick:()=>e.push("/home"),children:[Object(o.jsx)(l,{src:i(86)(`./${n.a.TITLE}-logo${"worlds"==n.a.TITLE?"-white":""}.png`).default}),Object(o.jsxs)(d,{children:["LCS"==n.a.TITLE?"LCS":"Worlds"," Pick'Em"]})]})})}}}]);
//# sourceMappingURL=5.6ede352d.chunk.js.map