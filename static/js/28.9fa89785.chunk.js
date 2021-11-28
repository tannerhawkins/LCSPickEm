(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[28],{238:function(e,t,i){"use strict";i.r(t);var d=i(2),n=i(36),c=i(72),a=i(71),o=i(66),s=i(25),r=i(19),l=i(23),u=i(11),p=i(67),j=i(149),b=i(150),h=i(16),m=i(70),x=i(68),O=i(37),g=i(5);const f=o.a.div`
  margin-top: ${s.a.HEADER_HEIGHT};
  margin-left: ${s.a.SIDEBAR_WIDTH};
  padding: 10px 50px;
`,v=o.a.p`
  line-height: 36px;
  font-size: 30px;
  font-weight: 600;
`,E=o.a.p`
  font-size: 20px;
`,w=o.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,y=o.a.div``,A=o.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,C=o.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
  margin-top: 60px;
`,D=o.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`,R=Object(o.a)(p.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${s.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,k=Object(o.a)(R)``,U=Object(o.a)(p.a)`
  font-size: 15px;
  height: 50px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${s.a.COLOR.LIGHT_GREEN};
  &:hover {
    cursor: pointer;
  }
`,L=o.a.p`
  color: red;
  margin-top: -20px;
`,z=o.a.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;t.default=()=>{const e=Object(u.g)(),t=Object(h.b)(),[i,o]=Object(d.useState)(!1),[s,p]=Object(d.useState)(),H=Object(h.c)(m.f),I=Object(h.c)(m.h);Object(d.useEffect)((()=>{}),[I]);return Object(g.jsxs)(n.a,{title:"Create a Module",description:"Create a Module",children:[Object(g.jsx)(c.a,{}),Object(g.jsx)(a.a,{}),Object(g.jsx)(b.a,{style:{display:i?"flex":"none"},onClose:()=>o(!1)}),Object(g.jsxs)(f,{children:[Object(g.jsx)(v,{children:"Create New Module"}),Object(g.jsx)(E,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac purus eget lacus pellentesque consequat. Donec commodo tincidunt lorem, c ursus accumsan eros varius vel."}),Object(g.jsxs)(C,{id:"moduleForm",children:[Object(g.jsx)(z,{children:"Module Title"}),Object(g.jsx)(D,{type:"text",id:"title",name:"title",defaultValue:null===H||void 0===H?void 0:H.title,"data-test":"title",required:!0}),Object(g.jsx)(z,{children:"Module Description"}),Object(g.jsx)(D,{type:"text",id:"description",name:"description","data-test":"description",defaultValue:null===H||void 0===H?void 0:H.description}),Object(g.jsxs)(A,{children:[Object(g.jsx)(z,{children:"Steps - Drag to Change Order"}),Object(g.jsx)(k,{onClick:()=>{t(Object(x.g)(document.getElementById("title").value)),t(Object(x.c)(document.getElementById("description").value)),o(!0)},"data-test":"add-step",children:"Add Step"})]}),Object(g.jsx)(y,{children:Object(g.jsx)(j.a,{steps:I})}),Object(g.jsx)(L,{children:s}),Object(g.jsxs)(w,{children:[Object(g.jsx)(R,{onClick:()=>{p();const i=Object.values(document.forms.moduleForm).filter((e=>e.name)).reduce(((e,t)=>(e[t.name]=t.value,e)),{}),d={...H,title:i.title,description:i.description,creator:r.b.currentUser.uid};""!==i.title?0!==I.length?H.creator?r.a.doc(H.mid).update(d).then((()=>{r.e.doc(r.b.currentUser.uid).get().then((e=>{const t=e.data().moduleList.filter((e=>e.mid!==H.mid));r.e.doc(r.b.currentUser.uid).update({moduleList:[...t,{mid:d.mid,title:i.title,description:i.description}]})})).then((()=>{r.e.doc(r.b.currentUser.uid).get().then((e=>t(Object(O.b)(e.data()))))}))})).then((()=>{r.e.doc(r.b.currentUser.uid).get().then((e=>t(Object(O.b)(e.data())))),e.push("admin/home")})):r.a.add(d).then((e=>{r.a.doc(e.id).update({mid:e.id}),r.e.doc(r.b.currentUser.uid).update({moduleList:l.a.firestore.FieldValue.arrayUnion({mid:e.id,title:i.title,description:i.description})})})).then((()=>{r.e.doc(r.b.currentUser.uid).get().then((e=>t(Object(O.b)(e.data())))),e.push("admin/home")})):p("Please add at least one step"):p("Please fill out module title")},"data-test":"create",children:"CREATE"}),Object(g.jsx)(U,{onClick:()=>e.push("admin/home"),children:"BACK TO DASHBOARD"})]})]})]})]})}}}]);
//# sourceMappingURL=28.9fa89785.chunk.js.map