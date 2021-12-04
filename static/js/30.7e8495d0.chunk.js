(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[30],{159:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(36),s=a(72),c=a(73),r=a(66),o=a(25),d=a(67),p=a(11),l=a(16),x=a(19),h=a(23),b=a(30),j=a(37),m=a(85),u=a(5);const g=r.a.div`
  margin-top: ${o.a.HEADER_HEIGHT};
  margin-left: ${o.a.SIDEBAR_WIDTH};
  padding: 0 50px;
  @media (max-width: 500px) {
    margin: 0px 0px;
    padding: 0 5%;
  }
`,O=r.a.p`
  line-height: 36px;
  font-size: 30px;
  font-weight: 600;
`,f=(r.a.p`
  font-size: 20px;
`,r.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`),w=r.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
  margin-top: 60px;
`,C=r.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`,v=Object(r.a)(d.a)`
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
`,E=Object(r.a)(d.a)`
  font-size: 15px;
  height: 50px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${o.a.COLOR.LIGHT_GREEN};
  &:hover {
    cursor: pointer;
  }
`,A=r.a.p`
  color: red;
  margin-top: -20px;
`,R=r.a.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;t.default=()=>{const e=Object(p.g)(),t=Object(l.b)(),[a,r]=Object(i.useState)();return Object(u.jsxs)(n.a,{title:"Create a Class",description:"Create a Class",children:[Object(u.jsx)(s.a,{}),Object(u.jsx)(c.a,{}),Object(u.jsx)(m.a,{}),Object(u.jsxs)(g,{children:[Object(u.jsx)(O,{children:"Create New Class"}),Object(u.jsxs)(w,{id:"classForm",children:[Object(u.jsx)(R,{children:"Class Name"}),Object(u.jsx)(C,{type:"text",name:"name","data-test":"name",required:!0}),Object(u.jsx)(R,{children:"Class Description"}),Object(u.jsx)(C,{type:"text",name:"description","data-test":"description"}),Object(u.jsx)(A,{children:a}),Object(u.jsxs)(f,{children:[Object(u.jsx)(v,{onClick:()=>{r();const a=Object.values(document.forms.classForm).reduce(((e,t)=>(e[t.name]=t.value,e)),{});""!==a.name?x.c.add({className:a.name,description:a.description,students:[],modules:[]}).then((i=>{x.c.doc(i.id).update({cid:i.id}).then((()=>{x.c.doc(i.id).get().then((e=>{t(Object(b.a)(e.data()))}))})),x.e.doc(x.b.currentUser.uid).update({classList:h.a.firestore.FieldValue.arrayUnion({cid:i.id,className:a.name})}).then((()=>{x.e.doc(x.b.currentUser.uid).get().then((e=>{t(Object(j.b)(e.data()))})),e.push("teacher/home")}))})):r("Please fill out class name")},"data-test":"create",children:"CREATE"}),Object(u.jsx)(E,{onClick:()=>e.push("teacher/home"),"data-test":"back",children:"BACK TO DASHBOARD"})]})]})]})]})}},67:function(e,t,a){"use strict";var i=a(25);const n=a(66).a.div`
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
`;t.a=n}}]);
//# sourceMappingURL=30.7e8495d0.chunk.js.map