(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[19],{51:function(e,t,i){"use strict";var d=i(49);const n=i(48).a.div`
  background-color: ${d.a.COLOR.LIGHT_GREEN};
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
`;t.a=n},59:function(e,t,i){"use strict";i.d(t,"b",(function(){return d})),i.d(t,"d",(function(){return n})),i.d(t,"a",(function(){return c})),i.d(t,"e",(function(){return o})),i.d(t,"f",(function(){return a})),i.d(t,"c",(function(){return r}));const d=e=>({type:"SET_CURRENT_STEP",payload:e}),n=e=>({type:"SET_SELECTED_MODULE",payload:e}),c=e=>({type:"ADD_STEP",payload:e}),o=e=>({type:"SET_STEPS",payload:e}),a=e=>({type:"SET_TITLE",payload:e}),r=e=>({type:"SET_DESCRIPTION",payload:e})},87:function(e,t,i){"use strict";i.r(t);i(0);var d=i(23),n=i(57),c=i(56),o=i(48),a=i(49),r=i(50),s=i(73),l=i(12),u=i(14),p=i(68),h=i(62),E=i(60),b=i(51),f=i(5),j=i(59),x=i(2);const O=o.a.div`
  margin-top: ${a.a.HEADER_HEIGHT};
  margin-left: ${a.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,g=o.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`,T=o.a.div`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  overflow: auto;
  height: 300px;
`,y=o.a.div`
  display: flex;
  align-items: space-around;
  justify-content: space-around;
  width: 60%;
`,v=Object(o.a)(b.a)`
  font-size: 15px;
  height: 50px;
  padding: 0 5px;
  width: 220px;
  background-color: ${a.a.COLOR.LIGHT_GREEN};
  &:hover {
    cursor: pointer;
  }
`;t.default=()=>{const e=Object(l.b)(),t=Object(f.g)(),i=Object(l.c)(u.g),o=Object(l.c)(p.a),b=null===i||void 0===i?void 0:i.filter((e=>!(null===o||void 0===o?void 0:o.modules.includes(e.mid)))).map((e=>Object(x.jsx)(s.a,{onClick:()=>m(e.mid),module:e.mid},e.mid))),m=t=>{r.b.doc(o.cid).update({modules:E.a.firestore.FieldValue.arrayUnion(t)}).then(r.b.doc(o.cid).get().then((e=>{e.data().students.forEach((e=>{console.log(e.uid),r.d.doc(e.uid).get().then((i=>{const d=i.data().classList,n=d.filter((e=>e.cid===o.cid))[0],c={...n,modules:[...n.modules,t]},a=(()=>{for(let e=0;e<d.length;e++)if(d[e].cid===n.cid)return e;return-1})();d.splice(a,1,c),r.d.doc(e.uid).update({classList:d})}))}))})).then(r.b.doc(null===o||void 0===o?void 0:o.cid).get().then((t=>e(Object(h.a)(t.data()))))))};return Object(x.jsxs)(d.a,{title:"Add a Module",description:"Add a Module",children:[Object(x.jsx)(n.a,{}),Object(x.jsx)(c.a,{}),Object(x.jsxs)(O,{children:[Object(x.jsx)(g,{children:"Existing Modules"}),Object(x.jsx)(T,{children:b}),Object(x.jsxs)(y,{children:[Object(x.jsx)(v,{onClick:()=>{e(Object(j.d)(a.a.EMPTY_MODULE)),t.push("create-module")},children:"CREATE NEW MODULE"}),Object(x.jsx)(v,{onClick:()=>t.push("home"),children:"BACK TO DASHBOARD"})]})]})]})}}}]);
//# sourceMappingURL=19.28a77b8f.chunk.js.map