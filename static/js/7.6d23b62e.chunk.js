(this.webpackJsonpLCSPickEm=this.webpackJsonpLCSPickEm||[]).push([[7],{70:function(e,i,t){"use strict";i.a=t.p+"static/media/lcs-logo.dbbe227a.png"},71:function(e,i,t){"use strict";t(2);var a=t(24),n=t(18),c=t(39),s=(t(22),t(21)),d=t(31),p=t(26),x=t(11),o=t(5);const l=Object(s.a)(c.a)`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  color: black;
  @media (max-width: 800px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;i.a=({className:e})=>{const i=Object(x.g)(),t=Object(n.b)(),c=Object(n.c)(d.b);return Object(o.jsxs)("div",{className:e,"data-test":"login-logout",children:[!c&&Object(o.jsx)(l,{onClick:()=>i.push("/signin"),children:"SIGN-IN"}),c&&Object(o.jsx)(l,{onClick:()=>{a.a.signOut().then((()=>{t(Object(p.a)())}))},children:"LOGOUT"})]})}},72:function(e,i,t){"use strict";t(2);var a=t(21),n=t(22),c=(t(39),t(70)),s=t(71),d=t(11),p=t(18),x=t(31),o=t(5);const l=a.a.header`
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
`,h=a.a.div`
  display: flex;
  align-items: center;
`,r=a.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,j=a.a.div`
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
`,g=a.a.div`
  color: white;
  white-space: nowrap;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    display: none;
  }
`,b=a.a.p`
  color: white;

  :hover {
    color: ${n.a.COLOR.GRAY};
    cursor: pointer;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
`,m=a.a.img`
  margin-left: 3%;
  width: 70px;
  @media (max-width: 800px) {
    width: 50px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`,O=a.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
  :hover {
    cursor: pointer;
  }
`,f=Object(a.a)(s.a)``;i.a=()=>{const e=Object(d.g)(),i=Object(p.c)(x.b);return Object(o.jsxs)(l,{id:"header",children:[Object(o.jsxs)(h,{children:[Object(o.jsxs)(O,{onClick:()=>e.push("/index"),children:[Object(o.jsx)(m,{src:c.a}),Object(o.jsx)(g,{children:"LCS Pick'Em"})]}),i&&Object(o.jsxs)(j,{children:[Object(o.jsx)(b,{onClick:()=>e.push("/home"),children:"My Picks"}),Object(o.jsx)(b,{onClick:()=>e.push("/standings"),children:"Standings"})]})]}),Object(o.jsx)(r,{children:Object(o.jsx)(f,{})})]})}},82:function(e,i,t){"use strict";t.r(i);t(2);var a=t(40),n=t(22),c=t(21),s=t.p+"static/media/homepage-splash.efe78cb4.png",d=t(39),p=t(11),x=t(18),o=t(31),l=t(5);const h=c.a.div`
  display: flex;
  flex-flow: column wrap;
  height: calc(100vh - ${n.a.HEADER_HEIGHT});
  background-color: ${n.a.COLOR.PURPLE};
  position: relative;
  display: flex;
  margin-top: ${n.a.HEADER_HEIGHT};
`,r=c.a.img`
  position: absolute;
  right: 0;
  height: 100%;
  width: 60%;
  max-width: 600px;
`,j=c.a.h1`
  color: white;
  font-weight: 700;
  font-size: 100px;
  line-height: 86px;
  margin-top: 50px;
  @media (max-width: 800px) {
    font-size: 60px;
  }
`,g=c.a.p`
  color: ${n.a.COLOR.WHITE};
  font-weight: 300;
  font-size: 37px;
  line-height: 43px;
`,b=c.a.div`
  margin-left: 10%;
  margin-top: 5%;
  display: flex;
  flex-flow: column wrap;
  max-width: 35%;
  z-index: 1;
`,m=c.a.div`
  display: flex;
  margin-top: 6%;
  margin-left: 10%;
  z-index: 1;
`,O=Object(c.a)(d.a)`
  font-size: 30px;
  line-height: 30px;
  font-weight: 700;
  max-width: 200px;
  height: 60px;
  padding: 10px 35px;
`;var f=()=>{const e=Object(p.g)(),i=(Object(x.c)(o.a),Object(x.c)(o.b));return Object(l.jsxs)(h,{children:[Object(l.jsxs)(b,{children:[Object(l.jsx)(j,{children:"LCS PICK'EM!"}),Object(l.jsx)(g,{children:"free spica pls he deserves better"})]}),Object(l.jsx)(m,{children:Object(l.jsx)(O,{onClick:()=>i?e.push("/home"):e.push("/signin"),children:"HOME"})}),Object(l.jsx)(r,{src:s})]})},w=t(72);i.default=()=>Object(l.jsxs)(a.a,{description:"Homepage",children:[Object(l.jsx)(w.a,{}),Object(l.jsx)(f,{})]})}}]);
//# sourceMappingURL=7.6d23b62e.chunk.js.map