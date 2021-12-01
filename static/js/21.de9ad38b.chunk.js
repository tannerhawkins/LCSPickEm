(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[21],{125:function(A,t,e){"use strict";var a=e(66),i=e(76),r=e(25),o=e(5);const n=a.a.div`
  border-radius: 3px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`,c=a.a.img`
  width: 80px;
  height: 80px;
  margin-top: 50px;
`,d=a.a.p``,s=a.a.div`
  align-self: flex-end;
  height: 25px;
  width: 100%;
`;t.a=({children:A,className:t,plusIconColor:e,barColor:a,cardColor:l,onClick:p,dataTest:g})=>{const h=l===r.a.COLOR.GREEN?"white":"black";return Object(o.jsxs)(n,{onClick:p,className:t,style:{backgroundColor:l},"data-test":g,children:[Object(o.jsx)(c,{src:"green"===e?i.a:"data:image/png;base64,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"}),Object(o.jsx)(d,{style:{color:h},children:A}),Object(o.jsx)(s,{style:{backgroundColor:a}})]})}},232:function(A,t,e){"use strict";e.r(t);var a=e(2),i=e(73),r=e(72),o=e(66),n=e(83),c=e(36),d=e(125),s=e(25),l=(e(85),e(11)),p=(e(86),e(87)),g=e(16),h=(e(21),e(68)),b=e(19),x=e(5);const f=o.a.div``,C=o.a.div`
  margin-top: ${s.a.HEADER_HEIGHT};
  margin-left: ${s.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,u=o.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,O=o.a.p`
  color: ${s.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  margin-right: 20px;
`,B=o.a.div`
  display: flex;
  align-items: center;
`,j=(o.a.p`
  font-size: 18px;
`,o.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 950px;
`),E=Object(o.a)(d.a)`
  width: 250px;
  height: 228px;
`,m=o.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`,w=o.a.div`
  background-color: ${s.a.COLOR.PINK};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: "capitalize";
  justify-content: center;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    background: ${s.a.COLOR.LIGHT_PINK};
    transform: scale(1.02);
  }
  width: 200px;
  height: 300px;
  padding: 10px;
  min-width: 200px;
  margin: 0px 10px;
  border-radius: 0.5em;
  transition: transform 0.45s ease, background 0.45s ease;
`,L=o.a.p`
  color: ${s.a.COLOR.LIGHT_GREEN}
  font-size: 80px !important;
  text-transform: 'capitalize' !important;
  color: #2E3C40;
  font-weight: 600;
  line-height: 1;
  padding-bottom: 10px;
  padding-top: 10px;
  margin: 0 0 0.142857143em;
  border-bottom: 2px solid 
  transition: color .45s ease, border .45s ease;
  font-weight: 600;
  line-height: 1;
  padding-bottom: .5em;
  margin: 0 0 0.142857143em;
  border-bottom: 2px solid #2E3C40;
`,I=o.a.p`
  font-size: 15px;
  background-color: white;
  padding: 20px 5px;
  width: 85%;
  height: 100%;
  border-radius: 5px;
  text-transform: "capitalize";
`;t.default=()=>{const A=Object(l.g)(),t=Object(g.b)(),[e,o]=Object(a.useState)([]),d=null===e||void 0===e?void 0:e.map((e=>Object(x.jsxs)(w,{onClick:()=>(e=>{b.a.doc(e).get().then((e=>{t(Object(h.d)(e.data())),A.push("/admin/create-module")}))})(e.mid),children:[Object(x.jsx)(L,{"data-test":"module-title",children:e.title}),Object(x.jsx)(I,{children:e.description})]},e.mid)));return Object(a.useEffect)((()=>{0===e.length&&b.a.get().then((A=>{o(A.docs.map((A=>A.data())))}))})),Object(x.jsx)(c.a,{title:"Dashboard",description:"Dashboard",children:Object(x.jsxs)(f,{children:[Object(x.jsx)(i.a,{}),Object(x.jsx)(r.a,{}),Object(x.jsx)(n.a,{}),Object(x.jsxs)(C,{children:[Object(x.jsx)(u,{children:Object(x.jsx)(B,{children:Object(x.jsx)(O,{children:"Dashboard "})})}),Object(x.jsx)(m,{children:"New"}),Object(x.jsx)(j,{children:Object(x.jsx)(E,{plusIconColor:"green",barColor:s.a.COLOR.GREEN,cardColor:s.a.COLOR.TEAL,onClick:()=>{t(Object(h.d)(s.a.EMPTY_MODULE)),A.push("/admin/create-module")},dataTest:"add-module",children:"Module"})}),Object(x.jsx)(m,{children:"APA Modules"}),Object(x.jsx)(p.a,{moduleCards:d})]})]})})}},68:function(A,t,e){"use strict";e.d(t,"b",(function(){return a})),e.d(t,"d",(function(){return i})),e.d(t,"e",(function(){return r})),e.d(t,"a",(function(){return o})),e.d(t,"h",(function(){return n})),e.d(t,"f",(function(){return c})),e.d(t,"g",(function(){return d})),e.d(t,"c",(function(){return s}));const a=A=>({type:"SET_CURRENT_STEP",payload:A}),i=A=>({type:"SET_SELECTED_MODULE",payload:A}),r=A=>({type:"SET_SELECTED_STEP",payload:A}),o=A=>({type:"ADD_STEP",payload:A}),n=A=>({type:"UPDATE_STEP",payload:A}),c=A=>({type:"SET_STEPS",payload:A}),d=A=>({type:"SET_TITLE",payload:A}),s=A=>({type:"SET_DESCRIPTION",payload:A})},85:function(A,t,e){"use strict";var a=e(2),i=e(16),r=e(66),o=e(21),n=e(30),c=e(38),d=e(25),s=e(19),l=e(5);const p=r.a.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`,g=r.a.select`
  height: 100%;
  padding: 0.5rem;
  border: 0px;
  outline: 0px;
  font-size: 25px;
  color: ${d.a.COLOR.GREEN};
  background-color: ${d.a.COLOR.GRAY};
`,h=r.a.option`
  color: ${A=>A.defaultValue?"lightgrey":"black"};
`;t.a=A=>{const t=Object(i.b)(),e=Object(i.c)(o.b),r=Object(i.c)(c.a);Object(a.useEffect)((()=>{}));return e[0]?Object(l.jsx)(p,{action:A.action,"data-test":"dropdown",children:Object(l.jsx)(g,{id:"services","data-test":"class",name:"services",onChange:A=>{const e=Array.from(A.target.children).filter((A=>A.selected)).map((A=>A.dataset.cid))[0];s.c.doc(e).get().then((A=>t(Object(n.a)(A.data()))))},defaultValue:null===r||void 0===r?void 0:r.cid,children:e.map((A=>Object(l.jsx)(h,{value:A.cid,"data-cid":A.cid,classItem:A,children:A.className},A.cid)))})}):Object(l.jsx)(l.Fragment,{})}},86:function(A,t,e){"use strict";var a=e(2),i=e(66),r=e(25),o=e(19),n=e(5);const c=i.a.div`
  background-color: ${r.a.COLOR.DARK_GREEN};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: "capitalize";
  justify-content: center;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    background: ${r.a.COLOR.LIGHT_GREEN};
    transform: scale(1.02);
  }
  width: 200px;
  height: 300px;
  padding: 10px;
  min-width: 200px;
  margin: 0px 10px;
  border-radius: 0.5em;
  transition: transform 0.45s ease, background 0.45s ease;
`,d=i.a.p`
  color: ${r.a.COLOR.LIGHT_GREEN}
  font-size: 80px !important;
  text-transform: 'capitalize' !important;
  color: #2E3C40;
  font-weight: 600;
  line-height: 1;
  padding-bottom: 10px;
  padding-top: 10px;
  margin: 0 0 0.142857143em;
  border-bottom: 2px solid 
  transition: color .45s ease, border .45s ease;
  font-weight: 600;
  line-height: 1;
  padding-bottom: .5em;
  margin: 0 0 0.142857143em;
  border-bottom: 2px solid #2E3C40;
`,s=i.a.p`
  font-size: 15px;
  background-color: white;
  padding: 20px 5px;
  width: 85%;
  height: 100%;
  border-radius: 5px;
  text-transform: "capitalize";
`;t.a=A=>{const[t,e]=Object(a.useState)();return Object(a.useEffect)((()=>{t||o.d.doc(A.module).get().then((A=>{e(A.data())}))}),[]),Object(n.jsx)(c,{onClick:A.onClick,children:t?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(d,{"data-test":"module-title",children:t.title}),Object(n.jsx)(s,{children:t.description})]}):Object(n.jsx)(n.Fragment,{children:"Loading..."})})}},87:function(A,t,e){"use strict";var a=e(66),i=e(5);const r=a.a.div`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  overflow: auto;
  padding: 20px;
  height: 320px;
  @media (max-width: 400px) {
    padding: 0;
  }
`;t.a=({moduleCards:A})=>Object(i.jsx)(r,{children:A})}}]);
//# sourceMappingURL=21.de9ad38b.chunk.js.map