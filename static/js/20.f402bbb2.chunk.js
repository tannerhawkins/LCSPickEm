(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[20],{245:function(t,e,a){"use strict";a.r(e);var i=a(2),n=a(72),o=a(71),r=a(66),c=a(101),d=a(36),s=a(25),l=a(5);r.a.div`
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
`;var p=a(16),b=a(38),x=a(21),u=a(85),h=a(89),j=a(84),g=a(11),f=a(19),m=a(68),O=a(67),E=a(86);const v=r.a.div``,y=r.a.div`
  margin-top: ${s.a.HEADER_HEIGHT};
  margin-left: ${s.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,C=Object(r.a)(O.a)`
  height: 60px;
  width: 130px;
  margin-left: 40px;
  background-color: ${s.a.COLOR.GREEN};
`,w=r.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,R=r.a.p`
  color: ${s.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  margin-right: 20px;
`,T=r.a.div`
  display: flex;
  align-items: center;
`,k=r.a.p`
  font-size: 18px;
`,L=r.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`;e.default=()=>{var t,e;const a=Object(g.g)(),r=Object(p.b)(),s=Object(p.c)(b.a),O=null!=Object(p.c)(x.b)[0],_=Object(p.c)(x.b),S=s?null===(t=_.filter((t=>t.cid==s.cid))[0])||void 0===t?void 0:t.modules.map((t=>Object(l.jsx)(u.a,{module:t,"data-test":"module-card",onClick:()=>z(t,!1)},t))):void 0,G=s?null===(e=_.filter((t=>t.cid==s.cid))[0])||void 0===e?void 0:e.apaModules.map((t=>Object(l.jsx)(h.a,{module:t,"data-test":"module-card",onClick:()=>z(t,!0)},t))):void 0,z=(t,e)=>{e?f.a.doc(t).get().then((t=>{r(Object(m.b)(-1)),r(Object(m.d)(t.data())),a.push("/student/module")})):f.d.doc(t).get().then((t=>{r(Object(m.b)(-1)),r(Object(m.d)(t.data())),a.push("/student/module")}))};return Object(i.useEffect)((()=>{}),[s]),Object(l.jsx)(d.a,{title:"Dashboard",description:"Dashboard",children:Object(l.jsxs)(v,{children:[Object(l.jsx)(n.a,{}),Object(l.jsx)(o.a,{}),Object(l.jsx)(c.a,{}),Object(l.jsxs)(y,{children:[Object(l.jsxs)(w,{children:[Object(l.jsxs)(T,{children:[Object(l.jsx)(R,{children:"Dashboard"}),Object(l.jsx)(j.a,{}),Object(l.jsx)(C,{onClick:()=>a.push("/student/add-class"),"data-test":"add-class",children:"Add Class"})]}),Object(l.jsx)(k,{children:s&&Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Enrollment Code:"})," ",s.cid]})})]}),O?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(L,{children:"Assigned Modules"}),Object(l.jsx)(E.a,{moduleCards:null===S||void 0===S?void 0:S.concat(G)})]}):Object(l.jsx)("p",{children:"You have not been assigned to a class, please talk to your teacher"})]})]})})}},67:function(t,e,a){"use strict";var i=a(25);const n=a(66).a.div`
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
`;e.a=n},68:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"d",(function(){return n})),a.d(e,"e",(function(){return o})),a.d(e,"a",(function(){return r})),a.d(e,"h",(function(){return c})),a.d(e,"f",(function(){return d})),a.d(e,"g",(function(){return s})),a.d(e,"c",(function(){return l}));const i=t=>({type:"SET_CURRENT_STEP",payload:t}),n=t=>({type:"SET_SELECTED_MODULE",payload:t}),o=t=>({type:"SET_SELECTED_STEP",payload:t}),r=t=>({type:"ADD_STEP",payload:t}),c=t=>({type:"UPDATE_STEP",payload:t}),d=t=>({type:"SET_STEPS",payload:t}),s=t=>({type:"SET_TITLE",payload:t}),l=t=>({type:"SET_DESCRIPTION",payload:t})},84:function(t,e,a){"use strict";var i=a(2),n=a(16),o=a(66),r=a(21),c=a(30),d=a(38),s=a(25),l=a(19),p=a(5);const b=o.a.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`,x=o.a.select`
  height: 100%;
  padding: 0.5rem;
  border: 0px;
  outline: 0px;
  font-size: 25px;
  color: ${s.a.COLOR.GREEN};
  background-color: ${s.a.COLOR.GRAY};
`,u=o.a.option`
  color: ${t=>t.defaultValue?"lightgrey":"black"};
`;e.a=t=>{const e=Object(n.b)(),a=Object(n.c)(r.b),o=Object(n.c)(d.a);Object(i.useEffect)((()=>{}));return a[0]?Object(p.jsx)(b,{action:t.action,"data-test":"dropdown",children:Object(p.jsx)(x,{id:"services","data-test":"class",name:"services",onChange:t=>{const a=Array.from(t.target.children).filter((t=>t.selected)).map((t=>t.dataset.cid))[0];l.c.doc(a).get().then((t=>e(Object(c.a)(t.data()))))},defaultValue:null===o||void 0===o?void 0:o.cid,children:a.map((t=>Object(p.jsx)(u,{value:t.cid,"data-cid":t.cid,classItem:t,children:t.className},t.cid)))})}):Object(p.jsx)(p.Fragment,{})}},85:function(t,e,a){"use strict";var i=a(2),n=a(66),o=a(25),r=a(19),c=a(5);const d=n.a.div`
  background-color: ${o.a.COLOR.DARK_GREEN};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: "capitalize";
  justify-content: center;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    background: ${o.a.COLOR.LIGHT_GREEN};
    transform: scale(1.02);
  }
  width: 200px;
  height: 300px;
  padding: 10px;
  min-width: 200px;
  margin: 0px 10px;
  border-radius: 0.5em;
  transition: transform 0.45s ease, background 0.45s ease;
`,s=n.a.p`
  color: ${o.a.COLOR.LIGHT_GREEN}
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
`,l=n.a.p`
  font-size: 15px;
  background-color: white;
  padding: 20px 5px;
  width: 85%;
  height: 100%;
  border-radius: 5px;
  text-transform: "capitalize";
`;e.a=t=>{const[e,a]=Object(i.useState)();return Object(i.useEffect)((()=>{e||r.d.doc(t.module).get().then((t=>{a(t.data())}))}),[]),Object(c.jsx)(d,{onClick:t.onClick,children:e?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(s,{"data-test":"module-title",children:e.title}),Object(c.jsx)(l,{children:e.description})]}):Object(c.jsx)(c.Fragment,{children:"Loading..."})})}},86:function(t,e,a){"use strict";var i=a(66),n=a(5);const o=i.a.div`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  overflow: auto;
  padding: 20px;
  height: 400px;
`;e.a=({moduleCards:t})=>Object(n.jsx)(o,{children:t})},89:function(t,e,a){"use strict";var i=a(2),n=a(66),o=a(25),r=a(19),c=a(5);const d=n.a.div`
  background-color: ${o.a.COLOR.PINK};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: "capitalize";
  justify-content: center;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
    background: ${o.a.COLOR.LIGHT_PINK};
    transform: scale(1.02);
  }
  width: 200px;
  height: 300px;
  padding: 10px;
  min-width: 200px;
  margin: 0px 10px;
  border-radius: 0.5em;
  transition: transform 0.45s ease, background 0.45s ease;
`,s=n.a.p`
  color: ${o.a.COLOR.LIGHT_GREEN}
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
`,l=n.a.p`
  font-size: 15px;
  background-color: white;
  padding: 20px 5px;
  width: 85%;
  height: 100%;
  border-radius: 5px;
  text-transform: "capitalize";
`;e.a=t=>{const[e,a]=Object(i.useState)();return Object(i.useEffect)((()=>{e||r.a.doc(t.module).get().then((t=>{a(t.data())}))}),[]),Object(c.jsx)(d,{onClick:t.onClick,children:e?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(s,{"data-test":"module-title",children:e.title}),Object(c.jsx)(l,{children:e.description})]}):Object(c.jsx)(c.Fragment,{children:"Loading..."})})}}}]);
//# sourceMappingURL=20.f402bbb2.chunk.js.map