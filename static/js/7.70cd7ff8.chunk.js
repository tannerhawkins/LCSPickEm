(this.webpackJsonpLCSPickEm=this.webpackJsonpLCSPickEm||[]).push([[7],{70:function(e,i,t){"use strict";i.a=t.p+"static/media/lcs-logo.dbbe227a.png"},71:function(e,i,t){"use strict";t(2);var a=t(24),n=t(18),s=t(39),c=(t(22),t(21)),x=t(31),o=t(25),d=t(11),p=t(5);const l=Object(c.a)(s.a)`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  color: black;
  @media (max-width: 800px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;i.a=({className:e})=>{const i=Object(d.g)(),t=Object(n.b)(),s=Object(n.c)(x.b);return Object(p.jsxs)("div",{className:e,"data-test":"login-logout",children:[!s&&Object(p.jsx)(l,{onClick:()=>i.push("/signin"),children:"SIGN-IN"}),s&&Object(p.jsx)(l,{onClick:()=>{a.a.signOut().then((()=>{t(Object(o.a)())}))},children:"LOGOUT"})]})}},72:function(e,i,t){"use strict";t(2);var a=t(21),n=t(22),s=(t(39),t(70)),c=t(71),x=t(11),o=t(18),d=t(31),p=t(5);const l=a.a.header`
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
`,b=a.a.div`
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
`,m=a.a.div`
  color: white;
  white-space: nowrap;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    display: none;
  }
`,g=a.a.p`
  color: white;

  :hover {
    color: ${n.a.COLOR.GRAY};
    cursor: pointer;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
`,j=a.a.img`
  margin-left: 3%;
  width: 70px;
  @media (max-width: 800px) {
    width: 50px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`,f=a.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
  :hover {
    cursor: pointer;
  }
`,O=Object(a.a)(c.a)``;i.a=()=>{const e=Object(x.g)(),i=Object(o.c)(d.b);return Object(p.jsxs)(l,{id:"header",children:[Object(p.jsxs)(h,{children:[Object(p.jsxs)(f,{onClick:()=>e.push("/index"),children:[Object(p.jsx)(j,{src:s.a}),Object(p.jsx)(m,{children:"LCS Pick'Em"})]}),i&&Object(p.jsxs)(b,{children:[Object(p.jsx)(g,{onClick:()=>e.push("/home"),children:"My Picks"}),Object(p.jsx)(g,{onClick:()=>e.push("/standings"),children:"Standings"})]})]}),Object(p.jsx)(r,{children:Object(p.jsx)(O,{})})]})}},82:function(e,i,t){"use strict";t.r(i);t(2);var a=t(40),n=t(22),s=t(21),c=t.p+"static/media/homepage-splash.efe78cb4.png",x=t(39),o=t(11),d=t(18),p=t(31),l=t(5);const h=s.a.div`
  display: flex;
  flex-direction: column;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  height: calc(100vh - ${n.a.HEADER_HEIGHT});
  background-color: ${n.a.COLOR.PURPLE};
  position: relative;
  display: flex;
  margin-top: ${n.a.HEADER_HEIGHT};
`,r=s.a.img`
  position: absolute;
  right: 0;
  height: 100%;
  width: 60%;
  max-width: 600px;
`,b=s.a.h1`
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
`,m=s.a.p`
  color: ${n.a.COLOR.WHITE};
  font-weight: 300;
  font-size: 37px;
  line-height: 43px;
  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 33px;
  }
`,g=s.a.div`
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
`,j=s.a.div`
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  margin-top: 6%;
  margin-left: 10%;
  z-index: 1;
`,f=Object(s.a)(x.a)`
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
`;var O=()=>{const e=Object(o.g)(),i=(Object(d.c)(p.a),Object(d.c)(p.b));return Object(l.jsxs)(h,{children:[Object(l.jsxs)(g,{children:[Object(l.jsx)(b,{children:"LCS PICK'EM!"}),Object(l.jsx)(m,{children:"free spica pls he deserves better"})]}),Object(l.jsx)(j,{children:Object(l.jsx)(f,{onClick:()=>i?e.push("/home"):e.push("/signin"),children:"HOME"})}),Object(l.jsx)(r,{src:c})]})},w=t(72);i.default=()=>Object(l.jsxs)(a.a,{description:"Homepage",children:[Object(l.jsx)(w.a,{}),Object(l.jsx)(O,{})]})}}]);
//# sourceMappingURL=7.70cd7ff8.chunk.js.map