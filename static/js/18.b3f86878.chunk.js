(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[18],{245:function(t,e,i){"use strict";i.r(e);var a=i(2),n=i(73),o=i(72),d=i(66),r=i(83),c=i(36),s=i(25),l=i(5);d.a.div`
  border-radius: 3px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`,d.a.p`
  position: absolute;
  align-self: flex-end;
  justify-self: center;
  margin-bottom: 40px;
`,d.a.div`
  position: absolute;
  bottom: 0;
  height: 25px;
  width: 100%;
`;var p=i(16),x=i(38),h=i(21),b=i(86),m=i(91),u=i(85),g=i(11),f=i(19),j=i(68),O=i(67),E=i(87);const w=d.a.div``,v=d.a.div`
  margin-top: ${s.a.HEADER_HEIGHT};
  margin-left: ${s.a.SIDEBAR_WIDTH};
  padding: 0 50px;
  @media (max-width: 500px) {
    margin: 0px 0px;
    padding: 0 5%;
  }
`,y=Object(d.a)(O.a)`
  height: 60px;
  width: 130px;
  margin-left: 40px;
  background-color: ${s.a.COLOR.GREEN};
  @media (max-width: 1024px) {
    height: 45px;
    width: 120px;
    margin: 10px 10px;
  }
  @media (max-width: 500px) {
    height: 25px;
    width: 100px;
    margin-top: 5px;
    margin-left: 0px;
    align-self: flex-end;
  }
`,C=d.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    flex-flow: column;
  }
`,R=d.a.p`
  color: ${s.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  margin-right: 20px;
  @media (max-width: 1000px) {
    margin: 5px 10px;
  }
  @media (max-width: 500px) {
    margin-right: 0;
    margin-top: 20px;
    margin-bottom: 10px;
  }
`,T=d.a.div`
  display: flex;
  align-items: center;
  @media (max-width: 500px) {
    align-items: flex-start;
    flex-flow: column;
  }
`,k=d.a.p`
  font-size: 18px;
  @media (max-width: 1000px) {
    margin: 5px 0;
  }
`,L=d.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
`;e.default=()=>{var t,e,i,d;const s=Object(g.g)(),O=Object(p.b)(),_=Object(p.c)(x.a),S=null!=Object(p.c)(h.b)[0],z=Object(p.c)(h.b),G=_?null===(t=z.filter((t=>t.cid==_.cid))[0])||void 0===t||null===(e=t.modules)||void 0===e?void 0:e.map((t=>Object(l.jsx)(b.a,{module:t,"data-test":"module-card",onClick:()=>I(t,!1)},t))):void 0,D=_?null===(i=z.filter((t=>t.cid==_.cid))[0])||void 0===i||null===(d=i.apaModules)||void 0===d?void 0:d.map((t=>Object(l.jsx)(m.a,{module:t,"data-test":"module-card",onClick:()=>I(t,!0)},t))):void 0,I=(t,e)=>{e?f.a.doc(t).get().then((t=>{O(Object(j.b)(-1)),O(Object(j.d)(t.data())),s.push("/student/module")})):f.d.doc(t).get().then((t=>{O(Object(j.b)(-1)),O(Object(j.d)(t.data())),s.push("/student/module")}))};return Object(a.useEffect)((()=>{}),[_]),Object(l.jsx)(c.a,{title:"Dashboard",description:"Dashboard",children:Object(l.jsxs)(w,{children:[Object(l.jsx)(n.a,{}),Object(l.jsx)(o.a,{}),Object(l.jsx)(r.a,{}),Object(l.jsxs)(v,{children:[Object(l.jsxs)(C,{children:[Object(l.jsxs)(T,{children:[Object(l.jsx)(R,{children:"Dashboard"}),Object(l.jsx)(u.a,{}),Object(l.jsx)(y,{onClick:()=>s.push("/student/add-class"),"data-test":"add-class",children:"Add Class"})]}),Object(l.jsx)(k,{children:_&&Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Enrollment Code:"})," ",_.cid]})})]}),S?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(L,{children:"Assigned Modules"}),Object(l.jsx)(E.a,{moduleCards:null===G||void 0===G?void 0:G.concat(D)})]}):Object(l.jsx)("p",{children:"You have not been assigned to a class, please talk to your teacher"})]})]})})}},67:function(t,e,i){"use strict";var a=i(25);const n=i(66).a.div`
  background-color: ${a.a.COLOR.LIGHT_GREEN};
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
`;e.a=n},68:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"d",(function(){return n})),i.d(e,"e",(function(){return o})),i.d(e,"a",(function(){return d})),i.d(e,"h",(function(){return r})),i.d(e,"f",(function(){return c})),i.d(e,"g",(function(){return s})),i.d(e,"c",(function(){return l}));const a=t=>({type:"SET_CURRENT_STEP",payload:t}),n=t=>({type:"SET_SELECTED_MODULE",payload:t}),o=t=>({type:"SET_SELECTED_STEP",payload:t}),d=t=>({type:"ADD_STEP",payload:t}),r=t=>({type:"UPDATE_STEP",payload:t}),c=t=>({type:"SET_STEPS",payload:t}),s=t=>({type:"SET_TITLE",payload:t}),l=t=>({type:"SET_DESCRIPTION",payload:t})},85:function(t,e,i){"use strict";var a=i(2),n=i(16),o=i(66),d=i(21),r=i(30),c=i(38),s=i(25),l=i(19),p=i(5);const x=o.a.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`,h=o.a.select`
  height: 100%;
  padding: 0.5rem;
  border: 0px;
  outline: 0px;
  font-size: 25px;
  color: ${s.a.COLOR.GREEN};
  background-color: ${s.a.COLOR.GRAY};
`,b=o.a.option`
  color: ${t=>t.defaultValue?"lightgrey":"black"};
`;e.a=t=>{const e=Object(n.b)(),i=Object(n.c)(d.b),o=Object(n.c)(c.a);Object(a.useEffect)((()=>{}));return i[0]?Object(p.jsx)(x,{action:t.action,"data-test":"dropdown",children:Object(p.jsx)(h,{id:"services","data-test":"class",name:"services",onChange:t=>{const i=Array.from(t.target.children).filter((t=>t.selected)).map((t=>t.dataset.cid))[0];l.c.doc(i).get().then((t=>e(Object(r.a)(t.data()))))},defaultValue:null===o||void 0===o?void 0:o.cid,children:i.map((t=>Object(p.jsx)(b,{value:t.cid,"data-cid":t.cid,classItem:t,children:t.className},t.cid)))})}):Object(p.jsx)(p.Fragment,{})}},86:function(t,e,i){"use strict";var a=i(2),n=i(66),o=i(25),d=i(19),r=i(5);const c=n.a.div`
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
`;e.a=t=>{const[e,i]=Object(a.useState)();return Object(a.useEffect)((()=>{e||d.d.doc(t.module).get().then((t=>{i(t.data())}))}),[]),Object(r.jsx)(c,{onClick:t.onClick,children:e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s,{"data-test":"module-title",children:e.title}),Object(r.jsx)(l,{children:e.description})]}):Object(r.jsx)(r.Fragment,{children:"Loading..."})})}},87:function(t,e,i){"use strict";var a=i(66),n=i(5);const o=a.a.div`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  overflow: auto;
  padding: 20px;
  height: 320px;
  @media (max-width: 400px) {
    padding: 0;
  }
`;e.a=({moduleCards:t})=>Object(n.jsx)(o,{children:t})},91:function(t,e,i){"use strict";var a=i(2),n=i(66),o=i(25),d=i(19),r=i(5);const c=n.a.div`
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
`;e.a=t=>{const[e,i]=Object(a.useState)();return Object(a.useEffect)((()=>{e||d.a.doc(t.module).get().then((t=>{i(t.data())}))}),[]),Object(r.jsx)(c,{onClick:t.onClick,children:e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s,{"data-test":"module-title",children:e.title}),Object(r.jsx)(l,{children:e.description})]}):Object(r.jsx)(r.Fragment,{children:"Loading..."})})}}}]);
//# sourceMappingURL=18.b3f86878.chunk.js.map