(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[19],{104:function(t,e,d){"use strict";d.r(e);d(2);var i=d(36),n=d(82),a=d(81),c=d(76),o=d(25),r=d(20),s=d(92),l=d(18),u=d(21),p=d(87),h=d(86),b=d(23),E=d(77),f=d(11),j=d(85),x=d(93),O=d(5);const g=c.a.div`
  margin-top: ${o.a.HEADER_HEIGHT};
  margin-left: ${o.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,T=c.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`,m=(c.a.div`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  overflow: auto;
  height: 300px;
`,c.a.div`
  display: flex;
  align-items: space-around;
  justify-content: space-around;
  width: 60%;
`),y=Object(c.a)(E.a)`
  font-size: 15px;
  height: 50px;
  padding: 0 5px;
  width: 220px;
  background-color: ${o.a.COLOR.LIGHT_GREEN};
  &:hover {
    cursor: pointer;
  }
`;e.default=()=>{const t=Object(l.b)(),e=Object(f.g)(),d=Object(l.c)(u.g),c=Object(l.c)(p.a),E=null===d||void 0===d?void 0:d.filter((t=>!(null===c||void 0===c?void 0:c.modules.includes(t.mid)))).map((t=>Object(O.jsx)(s.a,{onClick:()=>v(t.mid),module:t.mid},t.mid))),v=e=>{r.b.doc(c.cid).update({modules:b.a.firestore.FieldValue.arrayUnion(e)}).then(r.b.doc(c.cid).get().then((t=>{t.data().students.forEach((t=>{r.d.doc(t.uid).get().then((d=>{const i=d.data().classList,n=i.filter((t=>t.cid===c.cid))[0],a={...n,modules:[...n.modules,e]},o=(()=>{for(let t=0;t<i.length;t++)if(i[t].cid===n.cid)return t;return-1})();i.splice(o,1,a),r.d.doc(t.uid).update({classList:i})}))}))})).then(r.b.doc(null===c||void 0===c?void 0:c.cid).get().then((e=>t(Object(h.a)(e.data()))))))};return Object(O.jsxs)(i.a,{title:"Add a Module",description:"Add a Module",children:[Object(O.jsx)(n.a,{}),Object(O.jsx)(a.a,{}),Object(O.jsxs)(g,{children:[Object(O.jsx)(T,{children:"Existing Modules"}),Object(O.jsx)(x.a,{moduleCards:E}),Object(O.jsxs)(m,{children:[Object(O.jsx)(y,{onClick:()=>{t(Object(j.d)(o.a.EMPTY_MODULE)),e.push("create-module")},"data-test":"create-module",children:"CREATE NEW MODULE"}),Object(O.jsx)(y,{onClick:()=>e.push("home"),"data-test":"back",children:"BACK TO DASHBOARD"})]})]})]})}},77:function(t,e,d){"use strict";var i=d(25);const n=d(76).a.div`
  background-color: ${i.a.COLOR.LIGHT_GREEN};
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
`;e.a=n},85:function(t,e,d){"use strict";d.d(e,"b",(function(){return i})),d.d(e,"d",(function(){return n})),d.d(e,"a",(function(){return a})),d.d(e,"e",(function(){return c})),d.d(e,"f",(function(){return o})),d.d(e,"c",(function(){return r}));const i=t=>({type:"SET_CURRENT_STEP",payload:t}),n=t=>({type:"SET_SELECTED_MODULE",payload:t}),a=t=>({type:"ADD_STEP",payload:t}),c=t=>({type:"SET_STEPS",payload:t}),o=t=>({type:"SET_TITLE",payload:t}),r=t=>({type:"SET_DESCRIPTION",payload:t})}}]);
//# sourceMappingURL=19.b5fda7ae.chunk.js.map