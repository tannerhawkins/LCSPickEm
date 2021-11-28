(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[29],{241:function(t,e,i){"use strict";i.r(e);var n=i(2),a=i(36),s=i(72),c=i(71),d=i(66),o=i(25),p=i(67),r=i(146),b=i(92),x=i(16),u=i(11),h=i(68),j=i(70),O=i(5);const g=d.a.div`
  margin-top: ${o.a.HEADER_HEIGHT};
  margin-left: ${o.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,l=d.a.div`
  background-color: ${o.a.COLOR.DARK_GREEN};
  width: 80%;
  min-height: 200px;
  height: 600px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
  margin-top: 40px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly;
`,E=Object(d.a)(p.a)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${o.a.COLOR.GREEN};
  border-radius: 40px;
  position: absolute;
  right: 50px;
`,m=Object(d.a)(p.a)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${o.a.COLOR.DARK_GREEN};
`,R=d.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`;e.default=()=>{const t=Object(x.b)(),e=Object(u.g)(),[i,d]=Object(n.useState)([]),[o,p]=Object(n.useState)(!1),f=Object(x.c)(j.e),A=Object(x.c)(j.h);return Object(O.jsxs)(a.a,{title:"Edit Quiz Step",description:"Edit Quiz Step",children:[Object(O.jsx)(s.a,{}),Object(O.jsx)(c.a,{}),Object(O.jsxs)(g,{children:[Object(O.jsx)(R,{children:"Edit Quiz"}),Object(O.jsx)(E,{onClick:()=>p(!0),"data-test":"add-question",children:"Add Question"}),o&&Object(O.jsx)(r.a,{onSubmit:t=>{d(t),p(!1)},questions:i}),i.map((t=>Object(O.jsx)(l,{children:Object(O.jsx)(b.a,{questions:i,currentQuestion:i.indexOf(t),inEdit:!0})},i.indexOf(t)))),0!=i.length&&Object(O.jsx)(m,{onClick:()=>{t(Object(h.a)({type:"quiz",order:A.length,id:f,data:{questions:i}})),e.push("/admin/create-module")},"data-test":"submit",children:"Submit"})]})]})}}}]);
//# sourceMappingURL=29.3cc195d1.chunk.js.map