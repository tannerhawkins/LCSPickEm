(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[4],{69:function(e,t,i){"use strict";i(2);var n=i(23),o=i(25),c=i(26),r=i(40),a=i(22),s=i(17),d=i.p+"static/media/googleLogo.b3136124.png",l=i(4);const x=Object(s.a)(a.a)`
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  width: 250px;
  color: black;
  display: flex;
  justify-content: space-around;
`,p=s.a.img`
    height: 90%;
`;t.a=()=>{const e=Object(c.b)(),t=Object(o.a)(n.a)[0];return Object(l.jsxs)("div",{children:[!t&&Object(l.jsxs)(x,{onClick:()=>{n.a.signInWithPopup(n.b).then((t=>{const i=t.user;e(Object(r.a)(i))})).catch((e=>e.message?console.log(e.message):console.log("Unexpected Error")))},children:[Object(l.jsx)(p,{src:d}),"SIGN-IN WITH GOOGLE"]}),t&&Object(l.jsx)(x,{onClick:()=>{n.a.signOut().then((()=>{e(Object(r.b)())}))},children:"LOGOUT"})]})}},75:function(e,t,i){"use strict";i.r(t);i(2);var n=i(69),o=i(38),c=i(17),r=i(18),a=i(22),s=i(39),d=i(4);const l=c.a.header`
  display: flex;
  background-color: ${r.a.LIGHT_GREEN};
  justify-content: space-between;
  align-items: center;
	height: ${r.a.HEADER_HEIGHT};
	left: 0;
	top: 0;
	width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100000;
`,x=c.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,p=c.a.div`
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
`,h=c.a.img`
  margin-left: 3%;
  width: 130px;
`,b=c.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`,j=Object(c.a)(a.a)`
  margin-right: 10px;
  box-shadow: none;
  height: 10px;
`;var g=()=>Object(d.jsxs)(l,{id:"header",children:[Object(d.jsxs)(b,{children:[Object(d.jsx)(h,{src:s.a}),Object(d.jsx)(p,{children:"Ancient Path Adventures"})]}),Object(d.jsx)(x,{children:Object(d.jsx)(j,{children:"HELP"})})]});const u=c.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 50px;
  height: calc(100vh - ${r.a.HEADER_HEIGHT});
`,O=c.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,f=c.a.header`
  font-weight: bold;
  font-size: 64px;
`,m=c.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
`,w=c.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  font-size: 30px;
  outline: none;
`,y=c.a.p`
  text-align: right;
  font-size: 18px;
  margin-bottom: 30px;
  color: ${r.a.LIGHT_GREEN};

  &:hover {
    cursor: pointer;
    color: ${r.a.DARK_GREEN};
  }
`,v=c.a.p`
  text-align: right;
  font-size: 18px;
  width: 55%;
  margin-bottom: 30px;
  color: red;

  &:hover {
    cursor: pointer;
    color: #ff8585;
  }
`,E=Object(c.a)(a.a)`
  font-size: 25px;
  height: 40px;
  width: 20%;
  min-width: 100px;
  background-color: ${r.a.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,G=c.a.div`
  display: inline-block;
  border-bottom: 1px solid black;
  margin: 0px 10px;
  width: 15%;
`,k=c.a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
`;t.default=()=>Object(d.jsxs)(o.a,{description:"Sign-In",children:[Object(d.jsx)(g,{}),Object(d.jsxs)(u,{children:[Object(d.jsx)(f,{children:"Login"}),Object(d.jsxs)(m,{children:[Object(d.jsx)(w,{type:"text",placeholder:"Username",name:"username",required:!0}),Object(d.jsx)(y,{children:"Did you forget your username?"}),Object(d.jsx)(w,{type:"password",placeholder:"Password",name:"password",required:!0}),Object(d.jsx)(y,{children:"Did you forget your password?"}),Object(d.jsxs)(O,{children:[Object(d.jsx)(E,{type:"submit",children:"SIGN-IN"}),Object(d.jsx)(v,{children:"Don't have an account? Don\u2019t worry! Sign up here"})]})]}),Object(d.jsxs)(k,{children:[Object(d.jsx)(G,{}),Object(d.jsx)("p",{children:"OR"}),Object(d.jsx)(G,{})]}),Object(d.jsx)(n.a,{})]})]})}}]);
//# sourceMappingURL=4.e3b4eb80.chunk.js.map