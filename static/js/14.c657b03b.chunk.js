(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[14],{209:function(t,e,a){"use strict";a.r(e);var n=a(2),i=a(70),c=a(69),r=a(64),o=a(101),s=a(36),d=a(25),l=a(5);r.a.div`
  border-radius: 3px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`,r.a.p`
  position: absolute;
  align-self: flex-end;
  justify-self: center;
  margin-bottom: 40px;
`,r.a.div`
  position: absolute;
  bottom: 0;
  height: 25px;
  width: 100%;
`;var p=a(18),b=a(76),u=a(22),x=a(82),h=a(81),j=a(11),f=a(20),g=a(74),O=a(65),m=a(83);const E=r.a.div``,v=r.a.div`
  margin-top: ${d.a.HEADER_HEIGHT};
  margin-left: ${d.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,y=Object(r.a)(O.a)`
  height: 60px;
  width: 130px;
  margin-left: 40px;
  background-color: ${d.a.COLOR.GREEN};
`,C=r.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,R=r.a.p`
  color: ${d.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  margin-right: 20px;
`,w=r.a.div`
  display: flex;
  align-items: center;
`,T=r.a.p`
  font-size: 18px;
`,S=r.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`;e.default=()=>{var t;const e=Object(j.g)(),a=Object(p.b)(),r=Object(p.c)(b.a),d=null!=Object(p.c)(u.b)[0],O=Object(p.c)(u.b),L=r?null===(t=O.filter((t=>t.cid==r.cid))[0])||void 0===t?void 0:t.modules.map((t=>Object(l.jsx)(x.a,{module:t,"data-test":"module-card",onClick:()=>_(t)},t))):void 0,_=t=>{f.c.doc(t).get().then((t=>{a(Object(g.b)(-1)),a(Object(g.d)(t.data())),e.push("/student/module")}))};return Object(n.useEffect)((()=>{}),[r]),Object(l.jsx)(s.a,{title:"Dashboard",description:"Dashboard",children:Object(l.jsxs)(E,{children:[Object(l.jsx)(i.a,{}),Object(l.jsx)(c.a,{}),Object(l.jsx)(o.a,{}),Object(l.jsxs)(v,{children:[Object(l.jsxs)(C,{children:[Object(l.jsxs)(w,{children:[Object(l.jsx)(R,{children:"Dashboard"}),Object(l.jsx)(h.a,{}),Object(l.jsx)(y,{onClick:()=>e.push("/student/add-class"),"data-test":"add-class",children:"Add Class"})]}),Object(l.jsx)(T,{children:r&&Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Enrollment Code:"})," ",r.cid]})})]}),d?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(S,{children:"Assigned Modules"}),Object(l.jsx)(m.a,{moduleCards:L})]}):Object(l.jsx)("p",{children:"You have not been assigned to a class, please talk to your teacher"})]})]})})}},65:function(t,e,a){"use strict";var n=a(25);const i=a(64).a.div`
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
`;e.a=i},74:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"d",(function(){return i})),a.d(e,"a",(function(){return c})),a.d(e,"e",(function(){return r})),a.d(e,"f",(function(){return o})),a.d(e,"c",(function(){return s}));const n=t=>({type:"SET_CURRENT_STEP",payload:t}),i=t=>({type:"SET_SELECTED_MODULE",payload:t}),c=t=>({type:"ADD_STEP",payload:t}),r=t=>({type:"SET_STEPS",payload:t}),o=t=>({type:"SET_TITLE",payload:t}),s=t=>({type:"SET_DESCRIPTION",payload:t})},75:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));a(20);const n=t=>({type:"SET_CURRENT_CLASS",payload:t})},76:function(t,e,a){"use strict";a.d(e,"a",(function(){return r}));var n=a(17),i=a(21);const c=Object(n.a)((()=>i.c.getState()),(t=>t.class)),r=Object(n.a)(c,(t=>t.currentClass))},81:function(t,e,a){"use strict";var n=a(2),i=a(18),c=a(64),r=a(22),o=a(75),s=a(76),d=a(25),l=a(20),p=a(5);const b=c.a.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`,u=c.a.select`
  height: 100%;
  padding: 0.5rem;
  border: 0px;
  outline: 0px;
  font-size: 25px;
  color: ${d.a.COLOR.GREEN};
  background-color: ${d.a.COLOR.GRAY};
`,x=c.a.option`
  color: ${t=>t.defaultValue?"lightgrey":"black"};
`;e.a=t=>{const e=Object(i.b)(),a=Object(i.c)(r.b),c=Object(i.c)(s.a);Object(n.useEffect)((()=>{}));return a[0]?Object(p.jsx)(b,{action:t.action,"data-test":"dropdown",children:Object(p.jsx)(u,{id:"services","data-test":"class",name:"services",onChange:t=>{const a=Array.from(t.target.children).filter((t=>t.selected)).map((t=>t.dataset.cid))[0];l.b.doc(a).get().then((t=>e(Object(o.a)(t.data()))))},defaultValue:null===c||void 0===c?void 0:c.cid,children:a.map((t=>Object(p.jsx)(x,{value:t.cid,"data-cid":t.cid,classItem:t,children:t.className},t.cid)))})}):Object(p.jsx)(p.Fragment,{})}},82:function(t,e,a){"use strict";var n=a(2),i=a(64),c=a(25),r=a(20),o=a(5);const s=i.a.div`
  background-color: ${c.a.COLOR.DARK_GREEN};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: "capitalize";
  justify-content: center;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    background: ${c.a.COLOR.LIGHT_GREEN};
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
  color: ${c.a.COLOR.LIGHT_GREEN}
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
`,l=i.a.p`
  font-size: 15px;
  background-color: white;
  padding: 20px 5px;
  width: 85%;
  height: 100%;
  border-radius: 5px;
  text-transform: "capitalize";
`;e.a=t=>{const[e,a]=Object(n.useState)();return Object(n.useEffect)((()=>{e||r.c.doc(t.module).get().then((t=>{a(t.data())}))}),[]),Object(o.jsx)(s,{onClick:t.onClick,children:e?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(d,{"data-test":"module-title",children:e.title}),Object(o.jsx)(l,{children:e.description})]}):Object(o.jsx)(o.Fragment,{children:"Loading..."})})}},83:function(t,e,a){"use strict";var n=a(64),i=a(5);const c=n.a.div`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  overflow: auto;
  padding: 20px;
  height: 400px;
`;e.a=({moduleCards:t})=>Object(i.jsx)(c,{children:t})}}]);
//# sourceMappingURL=14.c657b03b.chunk.js.map