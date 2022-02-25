(this.webpackJsonpLCSPickEm=this.webpackJsonpLCSPickEm||[]).push([[4],{70:function(i,e,t){"use strict";e.a=t.p+"static/media/lcs-logo.dbbe227a.png"},71:function(i,e,t){"use strict";t(2);var a=t(24),n=t(18),c=t(39),s=(t(22),t(21)),x=t(31),o=t(25),d=t(11),p=t(5);const l=Object(s.a)(c.a)`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  color: black;
  @media (max-width: 800px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;e.a=({className:i})=>{const e=Object(d.g)(),t=Object(n.b)(),c=Object(n.c)(x.b);return Object(p.jsxs)("div",{className:i,"data-test":"login-logout",children:[!c&&Object(p.jsx)(l,{onClick:()=>e.push("/signin"),children:"SIGN-IN"}),c&&Object(p.jsx)(l,{onClick:()=>{a.a.signOut().then((()=>{t(Object(o.a)())}))},children:"LOGOUT"})]})}},72:function(i,e,t){"use strict";t(2);var a=t(21),n=t(22),c=(t(39),t(70)),s=t(71),x=t(11),o=t(18),d=t(31),p=t(5);const l=a.a.header`
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
`,O=Object(a.a)(s.a)``;e.a=()=>{const i=Object(x.g)(),e=Object(o.c)(d.b);return Object(p.jsxs)(l,{id:"header",children:[Object(p.jsxs)(h,{children:[Object(p.jsxs)(f,{onClick:()=>i.push("/index"),children:[Object(p.jsx)(j,{src:c.a}),Object(p.jsx)(m,{children:"LCS Pick'Em"})]}),e&&Object(p.jsxs)(b,{children:[Object(p.jsx)(g,{onClick:()=>i.push("/home"),children:"My Picks"}),Object(p.jsx)(g,{onClick:()=>i.push("/standings"),children:"Standings"})]})]}),Object(p.jsx)(r,{children:Object(p.jsx)(O,{})})]})}},74:function(i,e,t){"use strict";e.a=t.p+"static/media/sadge.b9f214e6.png"},83:function(i,e,t){"use strict";t.r(e);t(2);var a=t(40),n=t(22),c=t(21),s=t.p+"static/media/homepage-splash.efe78cb4.png",x=t(39),o=t(11),d=t(18),p=t(31),l=t(74),h=t(5);const r=c.a.div`
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
`,b=c.a.img`
  position: absolute;
  right: 0;
  height: 100%;
  width: 60%;
  max-width: 600px;
`,m=c.a.img`
  height: 40px;
  padding-left: 10px;
`,g=c.a.h1`
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
`,j=c.a.p`
  color: ${n.a.COLOR.WHITE};
  font-weight: 300;
  font-size: 37px;
  line-height: 43px;
  @media (max-width: 500px) {
    font-size: 20px;
    line-height: 33px;
  }
`,f=c.a.div`
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
`,O=c.a.div`
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  margin-top: 6%;
  margin-left: 10%;
  z-index: 1;
`,w=Object(c.a)(x.a)`
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
`;var u=()=>{const i=Object(o.g)(),e=(Object(d.c)(p.a),Object(d.c)(p.b));return Object(h.jsxs)(r,{children:[Object(h.jsxs)(f,{children:[Object(h.jsx)(g,{children:"LCS PICK'EM!"}),Object(h.jsxs)(j,{children:["rip LS ",Object(h.jsx)(m,{src:l.a})]})]}),Object(h.jsx)(O,{children:Object(h.jsx)(w,{onClick:()=>e?i.push("/home"):i.push("/signin"),children:"HOME"})}),Object(h.jsx)(b,{src:s})]})},k=t(72);e.default=()=>Object(h.jsxs)(a.a,{description:"Homepage",children:[Object(h.jsx)(k.a,{}),Object(h.jsx)(u,{})]})}}]);
//# sourceMappingURL=4.10d9aefb.chunk.js.map