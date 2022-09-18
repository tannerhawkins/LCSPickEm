(this.webpackJsonpLCSPickEm=this.webpackJsonpLCSPickEm||[]).push([[6],{110:function(e,i,t){"use strict";t.r(i);t(2);var n=t(41),a=t(22),c=t(21),o=t.p+"static/media/homepage-splash.efe78cb4.png",s=t(40),d=t(11),l=t(18),x=t(31),p=t.p+"static/media/hopium.2dcfc988.png",r=t(4);const h=c.a.div`
  display: flex;
  flex-direction: column;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  height: calc(100vh - ${a.a.HEADER_HEIGHT});
  background-color: ${a.a.COLOR.PURPLE};
  position: relative;
  display: flex;
  margin-top: ${a.a.HEADER_HEIGHT};
`,g=c.a.img`
  position: absolute;
  right: 0;
  height: 100%;
  width: 60%;
  max-width: 600px;
`,b=c.a.img`
  height: 90px;
  padding-left: 10px;
`,m=c.a.h1`
  color: white;
  font-weight: 700;
  font-size: 100px;
  line-height: 86px;
  margin-top: 50px;
  @media (max-width: 800px) {
    font-size: 60px;
    line-height: 56px;
    margin-top: 20px;
  }
  @media (max-width: 500px) {
    font-size: 40px;
    line-height: 56px;
  }
`,f=c.a.p`
  color: ${a.a.COLOR.WHITE};
  font-weight: 300;
  font-size: 37px;
  line-height: 43px;
  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 33px;
  }
`,j=c.a.div`
  margin-left: 10%;
  margin-top: 5%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  max-width: 35%;
  z-index: 1;
`,w=c.a.div`
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  margin-top: 6%;
  margin-left: 10%;
  z-index: 1;
`,O=Object(c.a)(s.a)`
  font-size: 30px;
  line-height: 30px;
  font-weight: 700;
  max-width: 200px;
  height: 60px;
  padding: 10px 35px;
  @media (max-width: 600px) {
    height: 20px;
    font-size: 20px;
    line-height: 20px;
    font-weight: 700;
  }
`;var u=()=>{const e=Object(d.g)(),i=(Object(l.c)(x.a),Object(l.c)(x.b));return Object(r.jsxs)(h,{children:[Object(r.jsxs)(j,{children:[Object(r.jsxs)(m,{children:[a.a.TITLE.charAt(0).toUpperCase()+a.a.TITLE.slice(1)," PICK'EM!"]}),Object(r.jsx)(f,{children:Object(r.jsx)(b,{src:p})})]}),Object(r.jsx)(w,{children:Object(r.jsx)(O,{onClick:()=>i?e.push("/home"):e.push("/signin"),children:"HOME"})}),Object(r.jsx)(g,{src:o})]})},k=t(87);i.default=()=>Object(r.jsxs)(n.a,{description:"Homepage",children:[Object(r.jsx)(k.a,{}),Object(r.jsx)(u,{})]})},82:function(e,i,t){"use strict";t.r(i),i.default=t.p+"static/media/lcs-logo.dbbe227a.png"},83:function(e,i,t){"use strict";t.r(i),i.default=t.p+"static/media/worlds-logo.39cc699c.png"},84:function(e,i,t){"use strict";t.r(i),i.default=t.p+"static/media/worlds-logo-white.21820bdc.png"},85:function(e,i,t){"use strict";t(2);var n=t(24),a=t(18),c=t(40),o=(t(22),t(21)),s=t(31),d=t(25),l=t(11),x=t(4);const p=Object(o.a)(c.a)`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  color: black;
  @media (max-width: 800px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;i.a=({className:e})=>{const i=Object(l.g)(),t=Object(a.b)(),c=Object(a.c)(s.b);return Object(x.jsxs)("div",{className:e,"data-test":"login-logout",children:[!c&&Object(x.jsx)(p,{onClick:()=>i.push("/signin"),children:"SIGN-IN"}),c&&Object(x.jsx)(p,{onClick:()=>{n.a.signOut().then((()=>{t(Object(d.a)())}))},children:"LOGOUT"})]})}},86:function(e,i,t){var n={"./lcs-logo.png":82,"./worlds-logo-white.png":84,"./worlds-logo.png":83};function a(e){var i=c(e);return t(i)}function c(e){if(!t.o(n,e)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=c,e.exports=a,a.id=86},87:function(e,i,t){"use strict";t(2);var n=t(21),a=t(22),c=t(85),o=t(11),s=t(18),d=t(31),l=t(4);const x=n.a.header`
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
`,p=n.a.div`
  display: flex;
  align-items: center;
`,r=n.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,h=n.a.div`
  display: flex;
  min-width: 200px;
  padding-left: 30px;
  justify-content: space-around;
  border-left: solid white 2px;
  margin-left: 40px;
  height: 90%;
  @media (max-width: 800px) {
    margin-left: 0;
    padding-left: 10px;
  }
  @media (max-width: 400px) {
    border: none;
  }
`,g=n.a.div`
  color: white;
  white-space: nowrap;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    display: none;
  }
`,b=n.a.p`
  color: white;

  :hover {
    color: ${a.a.COLOR.GRAY};
    cursor: pointer;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
`,m=n.a.img`
  margin-left: 3%;
  width: 70px;
  @media (max-width: 800px) {
    width: 50px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`,f=n.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
  :hover {
    cursor: pointer;
  }
`,j=Object(n.a)(c.a)``;i.a=()=>{const e=Object(o.g)(),i=Object(s.c)(d.b);return Object(l.jsxs)(x,{id:"header",children:[Object(l.jsxs)(p,{children:[Object(l.jsxs)(f,{onClick:()=>e.push("/index"),children:[Object(l.jsx)(m,{src:t(86)(`./${a.a.TITLE}-logo${"worlds"==a.a.TITLE?"-white":""}.png`).default}),Object(l.jsxs)(g,{children:["LCS"==a.a.TITLE?"LCS":"Worlds"," Pick'Em"]})]}),i&&Object(l.jsxs)(h,{children:[Object(l.jsx)(b,{onClick:()=>e.push("/home"),children:"My Picks"}),Object(l.jsx)(b,{onClick:()=>e.push("/standings"),children:"Standings"})]})]}),Object(l.jsx)(r,{children:Object(l.jsx)(j,{})})]})}}}]);
//# sourceMappingURL=6.27f51b47.chunk.js.map