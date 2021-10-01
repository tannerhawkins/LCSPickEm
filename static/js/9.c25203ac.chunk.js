(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[9],{54:function(A,e,t){"use strict";t.d(e,"d",(function(){return n})),t.d(e,"b",(function(){return o})),t.d(e,"a",(function(){return a})),t.d(e,"c",(function(){return r}));var c=t(62);t(58);c.a.initializeApp({apiKey:"AIzaSyBikWf9vy86sF9wXyRjkpdrrAJaw7WoQ8M",authDomain:"ancient-path-adventures.firebaseapp.com",projectId:"ancient-path-adventures",storageBucket:"ancient-path-adventures.appspot.com",messagingSenderId:"1051282870332",appId:"1:1051282870332:web:8f7a5922db7d370e86b339",measurementId:"G-NPPQJQTEQN"});const s=c.a.firestore();var a=c.a.auth(),r=new c.a.auth.GoogleAuthProvider;const n=s.collection("userData"),o=s.collection("classData")},60:function(A,e,t){"use strict";t.d(e,"a",(function(){return c}));const c=A=>({type:"SET_CURRENT_CLASS",payload:A})},85:function(A,e,t){"use strict";t.r(e);var c=t(0),s=t(74),a=t(73),r=t(47),n=t(75),o=t(23),i=t(65),l=t(48),d=t(2);const g=r.a.div`
  border-radius: 3px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`,C=r.a.img`
  width: 80px;
  height: 80px;
`,B=r.a.p`
  position: absolute;
  align-self: flex-end;
  justify-self: center;
  margin-bottom: 40px;
`,b=r.a.div`
  position: absolute;
  bottom: 0;
  height: 25px;
  width: 100%;
`;var h=({children:A,className:e,plusIconColor:t,barColor:c,cardColor:s})=>{const a=s===l.a.COLOR.GREEN?"white":"black";return Object(d.jsxs)(g,{className:e,style:{backgroundColor:s},children:[Object(d.jsx)(C,{src:"green"===t?i.a:"data:image/png;base64,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"}),Object(d.jsx)(B,{style:{color:a},children:A}),Object(d.jsx)(b,{style:{backgroundColor:c}})]})},p=t(11),O=t(10),j=t(13);const f=Object(O.a)((()=>j.b.getState()),(A=>A.class)),u=Object(O.a)(f,(A=>A.currentClass));var w=t(15),x=t(60),E=t(54);const I=A=>Object(d.jsx)(v,{selected:A.selected,"data-cid":A.value.cid,className:A.className,children:A.value.className}),L=r.a.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`,R=r.a.select`
  height: 100%;
  padding: 0.5rem;
  border: 0px;
  outline: 0px;
  font-size: 25px;
  color: ${l.a.COLOR.GREEN};
`,v=r.a.option`
  color: ${A=>A.selected?"lightgrey":"black"};
`;var Q=A=>{const e=Object(p.b)();return Object(d.jsx)(L,{action:A.action,children:Object(d.jsx)(R,{id:"services",name:"services",onChange:A=>{const t=Array.from(A.target.children).filter((A=>A.selected)).map((A=>A.dataset.cid))[0];E.b.doc(t).get().then((A=>e(Object(x.a)(A.data()))))},children:A.children})})};const D=r.a.div``,m=r.a.div`
  margin-top: ${l.a.HEADER_HEIGHT};
  margin-left: ${l.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,F=r.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,K=r.a.p`
  color: ${l.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
`,P=r.a.div`
  display: flex;
  align-items: center;
`,X=r.a.p`
  font-size: 18px;
`,N=r.a.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 950px;
`,y=Object(r.a)(h)`
  width: 250px;
  height: 228px;
`,M=r.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`;e.default=()=>{const A=Object(p.c)(u),e=Object(p.c)(w.b);return Object(c.useEffect)((()=>{}),[A]),Object(d.jsx)(o.a,{title:"Dashboard",description:"Dashboard",children:Object(d.jsxs)(D,{children:[Object(d.jsx)(s.a,{}),Object(d.jsx)(a.a,{}),Object(d.jsx)(n.a,{}),Object(d.jsxs)(m,{children:[Object(d.jsxs)(F,{children:[Object(d.jsxs)(P,{children:[Object(d.jsx)(K,{children:"Dashboard "}),e[0]&&Object(d.jsx)(Q,{children:e.map((e=>Object(d.jsx)(I,{selected:e.cid===A.cid?"selected":"",value:e,classItem:e})))})]}),Object(d.jsx)(X,{children:A&&Object(d.jsxs)("p",{children:[Object(d.jsx)("b",{children:"Enrollment Code:"})," ",A.enrollmentCode]})})]}),Object(d.jsx)(M,{children:"New"}),Object(d.jsxs)(N,{children:[Object(d.jsx)(y,{plusIconColor:"green",barColor:l.a.COLOR.GREEN,cardColor:l.a.COLOR.TEAL,children:"Module"}),Object(d.jsx)(y,{plusIconColor:"teal",barColor:l.a.COLOR.TEAL,cardColor:l.a.COLOR.GREEN,children:"Students"}),Object(d.jsx)(y,{plusIconColor:"green",barColor:l.a.COLOR.GREEN,cardColor:"white",children:"Class"})]})]})]})})}}}]);
//# sourceMappingURL=9.c25203ac.chunk.js.map