(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[15],{51:function(e,t,i){"use strict";var n=i(49);const c=i(48).a.div`
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
`;t.a=c},61:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return o})),i.d(t,"d",(function(){return d}));const n=e=>({type:"SET_CURRENT_STEP",payload:e}),c=e=>({type:"SET_SELECTED_MODULE",payload:e}),o=e=>({type:"ADD_STEP",payload:e}),d=e=>({type:"SET_STEPS",payload:e})},91:function(e,t,i){"use strict";i.r(t);i(0);var n=i(23),c=i(63),o=i(62),d=i(48),a=i(49),r=i(50),s=i(74),l=i(12),u=i(14),p=i(68),h=i(56),b=i(59),j=i(51),x=i(5),E=i(61),O=i(2);const f=d.a.div`
  margin-top: ${a.a.HEADER_HEIGHT};
  margin-left: ${a.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,g=d.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`,v=d.a.div`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  overflow: auto;
  height: 300px;
`,T=d.a.div`
  display: flex;
  align-items: space-around;
  justify-content: space-around;
  width: 60%;
`,y=Object(d.a)(j.a)`
  font-size: 15px;
  height: 50px;
  padding: 0 5px;
  width: 220px;
  background-color: ${a.a.COLOR.LIGHT_GREEN};
  &:hover {
    cursor: pointer;
  }
`;t.default=()=>{const e=Object(l.b)(),t=Object(x.g)(),i=Object(l.c)(u.g),d=Object(l.c)(p.a),j=null===i||void 0===i?void 0:i.filter((e=>!(null===d||void 0===d?void 0:d.modules.includes(e.mid)))).map((e=>Object(O.jsx)(s.a,{onClick:()=>m(e.mid),module:e.mid}))),m=t=>{r.b.doc(d.cid).update({modules:b.a.firestore.FieldValue.arrayUnion(t)}).then(r.b.doc(null===d||void 0===d?void 0:d.cid).get().then((t=>e(Object(h.a)(t.data())))))};return Object(O.jsxs)(n.a,{title:"Add a Module",description:"Add a Module",children:[Object(O.jsx)(c.a,{}),Object(O.jsx)(o.a,{}),Object(O.jsxs)(f,{children:[Object(O.jsx)(g,{children:"Existing Modules"}),Object(O.jsx)(v,{children:j}),Object(O.jsxs)(T,{children:[Object(O.jsx)(y,{onClick:()=>{e(Object(E.c)(a.a.EMPTY_MODULE)),t.push("create-module")},children:"CREATE NEW MODULE"}),Object(O.jsx)(y,{onClick:()=>t.push("home"),children:"BACK TO DASHBOARD"})]})]})]})}}}]);
//# sourceMappingURL=15.453d6360.chunk.js.map