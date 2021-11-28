(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[32],{237:function(t,e,i){"use strict";i.r(e);var a=i(2),n=i(36),d=i(72),s=i(71),c=i(66),o=i(25),r=i(67),p=i(146),b=i(92),u=i(16),x=i(11),h=i(68),j=i(70),O=i(5);const l=c.a.div`
  margin-top: ${o.a.HEADER_HEIGHT};
  margin-left: ${o.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,g=c.a.div`
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
`,E=Object(c.a)(r.a)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${o.a.COLOR.GREEN};
  border-radius: 40px;
  position: absolute;
  right: 50px;
`,m=Object(c.a)(r.a)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${o.a.COLOR.DARK_GREEN};
`,R=c.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`;e.default=()=>{const t=Object(u.b)(),e=Object(x.g)(),i=Object(u.c)(j.g),[c,o]=Object(a.useState)((null===i||void 0===i?void 0:i.data)?i.data.questions:[]),[r,f]=Object(a.useState)(!1),v=Object(u.c)(j.e),A=Object(u.c)(j.h);return Object(O.jsxs)(n.a,{title:"Edit Quiz Step",description:"Edit Quiz Step",children:[Object(O.jsx)(d.a,{}),Object(O.jsx)(s.a,{}),Object(O.jsxs)(l,{children:[Object(O.jsx)(R,{children:"Edit Quiz"}),Object(O.jsx)(E,{onClick:()=>f(!0),"data-test":"add-question",children:"Add Question"}),r&&Object(O.jsx)(p.a,{onSubmit:t=>{o(t),f(!1)},questions:c}),c.map((t=>Object(O.jsx)(g,{children:Object(O.jsx)(b.a,{questions:c,currentQuestion:c.indexOf(t),inEdit:!0})},c.indexOf(t)))),0!=c.length&&Object(O.jsx)(m,{onClick:()=>{t(void 0!==i?Object(h.h)({type:"quiz",order:i.order,id:i.id,data:{questions:c}}):Object(h.a)({type:"quiz",order:A.length,id:v,data:{questions:c}})),e.push("/teacher/create-module")},"data-test":"submit",children:"Submit"})]})]})}}}]);
//# sourceMappingURL=32.2ba12f5b.chunk.js.map