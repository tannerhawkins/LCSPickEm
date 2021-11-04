(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[16],{51:function(A,e,t){"use strict";var c=t(49);const s=t(48).a.div`
  background-color: ${c.a.COLOR.LIGHT_GREEN};
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
`;e.a=s},59:function(A,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"d",(function(){return s})),t.d(e,"a",(function(){return i})),t.d(e,"e",(function(){return g})),t.d(e,"f",(function(){return r})),t.d(e,"c",(function(){return a}));const c=A=>({type:"SET_CURRENT_STEP",payload:A}),s=A=>({type:"SET_SELECTED_MODULE",payload:A}),i=A=>({type:"ADD_STEP",payload:A}),g=A=>({type:"SET_STEPS",payload:A}),r=A=>({type:"SET_TITLE",payload:A}),a=A=>({type:"SET_DESCRIPTION",payload:A})},69:function(A,e,t){"use strict";t.d(e,"a",(function(){return o}));var c=t(12),s=t(48),i=t(62),g=t(49),r=t(50),a=t(2);const o=A=>Object(a.jsx)(C,{selected:A.selected,"data-cid":A.value.cid,className:A.className,children:A.value.className}),d=s.a.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`,n=s.a.select`
  height: 100%;
  padding: 0.5rem;
  border: 0px;
  outline: 0px;
  font-size: 25px;
  color: ${g.a.COLOR.GREEN};
  background-color: ${g.a.COLOR.GRAY};
`,C=s.a.option`
  color: ${A=>A.selected?"lightgrey":"black"};
`;e.b=A=>{const e=Object(c.b)();return Object(a.jsx)(d,{action:A.action,children:Object(a.jsx)(n,{id:"services",name:"services",onChange:A=>{const t=Array.from(A.target.children).filter((A=>A.selected)).map((A=>A.dataset.cid))[0];r.b.doc(t).get().then((A=>e(Object(i.a)(A.data()))))},children:A.children})})}},75:function(A,e,t){"use strict";var c=t(0),s=t(48),i=t(49),g=t(58),r=t(54),a=t(55),o=t(2);const d=s.a.div`
  display: none;
  @media (max-width: 500px) {
    display: block;
  }
`,n=s.a.div`
  height: ${i.a.HEADER_HEIGHT};
  background-color: ${i.a.COLOR.DARK_GREEN};
  display: flex;
  align-items: center;
`,C=s.a.div`
  margin-left: 20px;
`,E=s.a.div`
  font-size: 30px;
  user-select: none;
`,l=s.a.div`
  display: block;
`,B=s.a.div`
  display: flex;
  align-items: center;
  padding: 30px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 2px solid grey;
`,Q=s.a.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`,I=Object(s.a)(g.a)`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`,b=s.a.div`
  position: absolute;
  height: calc(100vh - ${i.a.HEADER_HEIGHT});
  transition: margin-left 0.4s linear;
  width: 100vw;
`;e.a=()=>{const[A,e]=Object(c.useState)(!1);return Object(o.jsxs)(d,{children:[Object(o.jsx)(n,{children:A?Object(o.jsx)(C,{children:Object(o.jsx)(E,{onClick:()=>e(!A),className:"menu-hover",children:"\u2715"})}):Object(o.jsx)(C,{children:Object(o.jsx)(E,{onClick:()=>e(!A),className:"menu-hover",children:"\u2630"})})}),Object(o.jsx)(c.Suspense,{fallback:Object(o.jsx)(o.Fragment,{}),children:Object(o.jsx)(b,{style:{marginLeft:A?"0":"150vw"},children:Object(o.jsxs)(l,{children:[Object(o.jsxs)(B,{children:[Object(o.jsx)(I,{}),"Profile"]}),Object(o.jsxs)(B,{children:[Object(o.jsx)(Q,{src:r.a}),"Add"]}),Object(o.jsxs)(B,{children:[Object(o.jsx)(Q,{src:"data:image/png;base64,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"}),"Messages"]}),Object(o.jsxs)(B,{children:[Object(o.jsx)(Q,{src:"data:image/png;base64,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"}),"Help"]}),Object(o.jsxs)(B,{children:[Object(o.jsx)(Q,{src:"data:image/png;base64,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"}),"Feedback"]}),Object(o.jsxs)(B,{children:[Object(o.jsx)(Q,{src:a.a}),"LogOut"]})]})})})]})}},97:function(A,e,t){"use strict";t.r(e);var c=t(0),s=t(57),i=t(56),g=t(48),r=t(75),a=t(23),o=t(49),d=t(2);g.a.div`
  border-radius: 3px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`,g.a.p`
  position: absolute;
  align-self: flex-end;
  justify-self: center;
  margin-bottom: 40px;
`,g.a.div`
  position: absolute;
  bottom: 0;
  height: 25px;
  width: 100%;
`;var n=t(12),C=t(68),E=t(14),l=t(73),B=t(69),Q=t(5),I=t(50),b=t(59),j=t(51);const h=g.a.div``,p=g.a.div`
  margin-top: ${o.a.HEADER_HEIGHT};
  margin-left: ${o.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,O=Object(g.a)(j.a)`
  height: 60px;
  width: 130px;
  margin-left: 40px;
  background-color: ${o.a.COLOR.GREEN};
`,U=g.a.div`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  overflow: auto;
  height: 300px;
`,x=g.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,K=g.a.p`
  color: ${o.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  margin-right: 20px;
`,w=g.a.div`
  display: flex;
  align-items: center;
`,D=g.a.p`
  font-size: 18px;
`,u=g.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`;e.default=()=>{var A;const e=Object(Q.g)(),t=Object(n.b)(),g=Object(n.c)(C.a),o=Object(n.c)(E.b),j=null!=o[0],F=Object(n.c)(E.b),y=g?null===(A=F.filter((A=>A.cid==g.cid))[0])||void 0===A?void 0:A.modules.map((A=>Object(d.jsx)(l.a,{module:A,onClick:()=>S(A)},A))):void 0,S=A=>{I.c.doc(A).get().then((A=>{t(Object(b.b)(-1)),t(Object(b.d)(A.data())),e.push("/student/module")}))};return Object(c.useEffect)((()=>{}),[g]),Object(d.jsx)(a.a,{title:"Dashboard",description:"Dashboard",children:Object(d.jsxs)(h,{children:[Object(d.jsx)(s.a,{}),Object(d.jsx)(i.a,{}),Object(d.jsx)(r.a,{}),Object(d.jsxs)(p,{children:[Object(d.jsxs)(x,{children:[Object(d.jsxs)(w,{children:[Object(d.jsx)(K,{children:"Dashboard"}),o[0]&&Object(d.jsx)(B.b,{children:o.map((A=>Object(d.jsx)(B.a,{selected:A.cid===g.cid?"selected":"",value:A,classItem:A},A.cid)))}),Object(d.jsx)(O,{onClick:()=>e.push("/student/add-class"),children:"Add Class"})]}),Object(d.jsx)(D,{children:g&&Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Enrollment Code:"})," ",g.cid]})})]}),j?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u,{children:"Assigned Modules"}),Object(d.jsx)(U,{children:y})]}):Object(d.jsx)("p",{children:"You have not been assigned to a class, please talk to your teacher"})]})]})})}}}]);
//# sourceMappingURL=16.5a92c026.chunk.js.map