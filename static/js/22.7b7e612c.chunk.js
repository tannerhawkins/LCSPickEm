(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[22],{159:function(t,e,i){"use strict";i.r(e);var a=i(2),d=i(36),o=i(73),n=i(72),r=i(66),c=i(25),s=i(19),l=i(86),p=i(91),u=i(16),h=i(21),x=i(38),m=i(30),g=i(23),b=i(67),f=i(11),j=i(68),O=i(87),E=i(83),v=i(5);const w=r.a.div`
  margin-top: ${c.a.HEADER_HEIGHT};
  margin-left: ${c.a.SIDEBAR_WIDTH};
  padding: 0 50px;
  height: 115vh;
  @media (max-width: 500px) {
    margin: 0px 0px;
    padding: 0 5%;
  }
`,C=r.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
`,T=r.a.div`
  display: flex;
  align-items: space-around;
  justify-content: space-around;
  margin-bottom: 50px;
  width: 60%;
  @media (max-width: 1000px) {
    margin-top: 20px;
    margin-bottom: 0;
    width: auto;
  }
`,y=Object(r.a)(b.a)`
  font-size: 15px;
  height: 50px;
  padding: 0 5px;
  width: 220px;
  margin: 5px;
  background-color: ${c.a.COLOR.LIGHT_GREEN};
  &:hover {
    cursor: pointer;
  }
`;e.default=()=>{const t=Object(u.b)(),e=Object(f.g)(),i=Object(u.c)(h.h),r=Object(u.c)(x.a),[b,L]=Object(a.useState)([]);Object(a.useEffect)((()=>{0==b.length&&s.a.get().then((t=>{L(t.docs.map((t=>t.data())))}))}),[]);const R=null===b||void 0===b?void 0:b.filter((t=>{var e;return!(null===r||void 0===r||null===(e=r.apaModules)||void 0===e?void 0:e.includes(t.mid))})).map((t=>Object(v.jsx)(p.a,{onClick:()=>_(t.mid,!0),module:t.mid},t.mid))),k=null===i||void 0===i?void 0:i.filter((t=>!(null===r||void 0===r?void 0:r.modules.includes(t.mid)))).map((t=>Object(v.jsx)(l.a,{onClick:()=>_(t.mid,!1),module:t.mid},t.mid))),_=(e,i)=>{i?s.c.doc(r.cid).update({apaModules:g.a.firestore.FieldValue.arrayUnion(e)}).then(s.c.doc(r.cid).get().then((t=>{t.data().students.forEach((t=>{s.e.doc(t.uid).get().then((i=>{const a=i.data().classList,d=a.filter((t=>t.cid===r.cid))[0],o={...d,apaModules:[...d.modules,e]},n=(()=>{for(let t=0;t<a.length;t++)if(a[t].cid===d.cid)return t;return-1})();a.splice(n,1,o),s.e.doc(t.uid).update({classList:a})}))}))})).then(s.c.doc(null===r||void 0===r?void 0:r.cid).get().then((e=>t(Object(m.a)(e.data())))))):s.c.doc(r.cid).update({modules:g.a.firestore.FieldValue.arrayUnion(e)}).then(s.c.doc(r.cid).get().then((t=>{t.data().students.forEach((t=>{s.e.doc(t.uid).get().then((i=>{const a=i.data().classList,d=a.filter((t=>t.cid===r.cid))[0],o={...d,modules:[...d.modules,e]},n=(()=>{for(let t=0;t<a.length;t++)if(a[t].cid===d.cid)return t;return-1})();a.splice(n,1,o),s.e.doc(t.uid).update({classList:a})}))}))})).then(s.c.doc(null===r||void 0===r?void 0:r.cid).get().then((e=>t(Object(m.a)(e.data()))))))};return Object(v.jsxs)(d.a,{title:"Add a Module",description:"Add a Module",children:[Object(v.jsx)(o.a,{}),Object(v.jsx)(n.a,{}),Object(v.jsx)(E.a,{}),Object(v.jsxs)(w,{children:[Object(v.jsx)(C,{children:"Existing Modules"}),Object(v.jsx)(O.a,{moduleCards:k}),Object(v.jsx)(C,{children:"APA Modules"}),Object(v.jsx)(O.a,{moduleCards:R}),Object(v.jsxs)(T,{children:[Object(v.jsx)(y,{onClick:()=>{t(Object(j.d)(c.a.EMPTY_MODULE)),e.push("create-module")},"data-test":"create-module",children:"CREATE NEW MODULE"}),Object(v.jsx)(y,{onClick:()=>e.push("home"),"data-test":"back",children:"BACK TO DASHBOARD"})]})]})]})}},67:function(t,e,i){"use strict";var a=i(25);const d=i(66).a.div`
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
`;e.a=d},68:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"d",(function(){return d})),i.d(e,"e",(function(){return o})),i.d(e,"a",(function(){return n})),i.d(e,"h",(function(){return r})),i.d(e,"f",(function(){return c})),i.d(e,"g",(function(){return s})),i.d(e,"c",(function(){return l}));const a=t=>({type:"SET_CURRENT_STEP",payload:t}),d=t=>({type:"SET_SELECTED_MODULE",payload:t}),o=t=>({type:"SET_SELECTED_STEP",payload:t}),n=t=>({type:"ADD_STEP",payload:t}),r=t=>({type:"UPDATE_STEP",payload:t}),c=t=>({type:"SET_STEPS",payload:t}),s=t=>({type:"SET_TITLE",payload:t}),l=t=>({type:"SET_DESCRIPTION",payload:t})},86:function(t,e,i){"use strict";var a=i(2),d=i(66),o=i(25),n=i(19),r=i(5);const c=d.a.div`
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
`,s=d.a.p`
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
`,l=d.a.p`
  font-size: 15px;
  background-color: white;
  padding: 20px 5px;
  width: 85%;
  height: 100%;
  border-radius: 5px;
  text-transform: "capitalize";
`;e.a=t=>{const[e,i]=Object(a.useState)();return Object(a.useEffect)((()=>{e||n.d.doc(t.module).get().then((t=>{i(t.data())}))}),[]),Object(r.jsx)(c,{onClick:t.onClick,children:e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s,{"data-test":"module-title",children:e.title}),Object(r.jsx)(l,{children:e.description})]}):Object(r.jsx)(r.Fragment,{children:"Loading..."})})}},87:function(t,e,i){"use strict";var a=i(66),d=i(5);const o=a.a.div`
  display: flex;
  width: 100%;
  flex-wrap: no-wrap;
  overflow: auto;
  padding: 20px;
  height: 320px;
  @media (max-width: 400px) {
    padding: 0;
  }
`;e.a=({moduleCards:t})=>Object(d.jsx)(o,{children:t})},91:function(t,e,i){"use strict";var a=i(2),d=i(66),o=i(25),n=i(19),r=i(5);const c=d.a.div`
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
`,s=d.a.p`
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
`,l=d.a.p`
  font-size: 15px;
  background-color: white;
  padding: 20px 5px;
  width: 85%;
  height: 100%;
  border-radius: 5px;
  text-transform: "capitalize";
`;e.a=t=>{const[e,i]=Object(a.useState)();return Object(a.useEffect)((()=>{e||n.a.doc(t.module).get().then((t=>{i(t.data())}))}),[]),Object(r.jsx)(c,{onClick:t.onClick,children:e?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s,{"data-test":"module-title",children:e.title}),Object(r.jsx)(l,{children:e.description})]}):Object(r.jsx)(r.Fragment,{children:"Loading..."})})}}}]);
//# sourceMappingURL=22.7b7e612c.chunk.js.map