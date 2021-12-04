(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[27],{160:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(36),c=a(72),d=a(73),s=a(66),o=a(25),r=a(67),l=a(11),p=a(19),u=a(87),x=a(16),m=a(38),h=a(21),b=a(23),j=a(85),O=a(5);const f=s.a.div`
  margin-top: ${o.a.HEADER_HEIGHT};
  margin-left: ${o.a.SIDEBAR_WIDTH};
  padding: 0 50px;
  @media (max-width: 500px) {
    margin: 0px 0px;
    padding: 0 5%;
  }
`,g=s.a.p`
  line-height: 36px;
  font-size: 30px;
  font-weight: 600;
`,v=(s.a.p`
  font-size: 20px;
`,s.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`),A=s.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
  margin-top: 60px;
`,w=s.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`,y=Object(s.a)(r.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${o.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    margin-right: 10px;
    font-size: 20px;
    height: 50px;
  }
`,E=Object(s.a)(r.a)`
  font-size: 15px;
  height: 50px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${o.a.COLOR.LIGHT_GREEN};
  &:hover {
    cursor: pointer;
  }
`,R=s.a.p`
  color: red;
`,C=s.a.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;t.default=()=>{const e=Object(l.g)(),[t,a]=Object(i.useState)(),s=Object(x.c)(m.a);Object(x.c)(h.b);return Object(O.jsxs)(n.a,{title:"Add a Student",description:"Add a Student",children:[Object(O.jsx)(c.a,{}),Object(O.jsx)(d.a,{}),Object(O.jsx)(j.a,{}),Object(O.jsxs)(f,{children:[Object(O.jsx)(g,{children:"Add Students to a Class"}),Object(O.jsxs)(A,{id:"studentsForm",children:[Object(O.jsx)(C,{children:"Student's Email"}),Object(O.jsx)(w,{type:"text",name:"email","data-test":"email",required:!0}),Object(O.jsx)(C,{children:"Add to Class"}),Object(O.jsx)(u.a,{}),Object(O.jsx)(R,{"data-test":"error",children:t}),Object(O.jsxs)(v,{children:[Object(O.jsx)(y,{onClick:()=>{a();const e=Object.values(document.forms.studentsForm).reduce(((e,t)=>(e[t.name]=t.value,e)),{});""!==e.email&&e.email.includes("@")?p.e.where("email","==",e.email).get().then((e=>{var t;const i=null===(t=e.docs[0])||void 0===t?void 0:t.data();void 0!==i&&"student"===i.accountType?i.classList.map((e=>e.cid)).includes(s.cid)?a("Student already in class"):(p.c.doc(s.cid).update({students:b.a.firestore.FieldValue.arrayUnion({uid:i.uid,displayName:i.displayName,email:i.email})}),p.e.doc(i.uid).update({classList:b.a.firestore.FieldValue.arrayUnion({cid:s.cid,modules:s.modules,apaModules:s.apaModules,className:s.className})}),a(`Added ${i.displayName} to ${s.className}`),document.getElementById("studentsForm").reset()):a("Student not found")})):a("Please enter a valid email")},"data-test":"submit",children:"ADD TO CLASS"}),Object(O.jsx)(E,{onClick:()=>e.push("teacher/home"),"data-test":"back",children:"BACK TO DASHBOARD"})]})]})]})]})}},67:function(e,t,a){"use strict";var i=a(25);const n=a(66).a.div`
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
`;t.a=n},87:function(e,t,a){"use strict";var i=a(2),n=a(16),c=a(66),d=a(21),s=a(30),o=a(38),r=a(25),l=a(19),p=a(5);const u=c.a.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`,x=c.a.select`
  height: 100%;
  padding: 0.5rem;
  border: 0px;
  outline: 0px;
  font-size: 25px;
  color: ${r.a.COLOR.GREEN};
  background-color: ${r.a.COLOR.GRAY};
`,m=c.a.option`
  color: ${e=>e.defaultValue?"lightgrey":"black"};
`;t.a=e=>{const t=Object(n.b)(),a=Object(n.c)(d.b),c=Object(n.c)(o.a);Object(i.useEffect)((()=>{}));return a[0]?Object(p.jsx)(u,{action:e.action,"data-test":"dropdown",children:Object(p.jsx)(x,{id:"services","data-test":"class",name:"services",onChange:e=>{const a=Array.from(e.target.children).filter((e=>e.selected)).map((e=>e.dataset.cid))[0];l.c.doc(a).get().then((e=>t(Object(s.a)(e.data()))))},defaultValue:null===c||void 0===c?void 0:c.cid,children:a.map((e=>Object(p.jsx)(m,{value:e.cid,"data-cid":e.cid,classItem:e,children:e.className},e.cid)))})}):Object(p.jsx)(p.Fragment,{})}}}]);
//# sourceMappingURL=27.43fcc060.chunk.js.map