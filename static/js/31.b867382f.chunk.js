(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[31],{232:function(e,t,i){"use strict";i.r(t);var d=i(2),c=i(36),n=i(72),a=i(71),o=i(66),s=i(25),r=i(19),l=i(23),u=i(11),p=i(67),h=i(149),b=i(150),j=i(16),m=i(70),x=i(38),O=i(30),g=i(68),f=i(37),v=i(5);const E=o.a.div`
  margin-top: ${s.a.HEADER_HEIGHT};
  margin-left: ${s.a.SIDEBAR_WIDTH};
  padding: 10px 50px;
`,y=o.a.p`
  line-height: 36px;
  font-size: 30px;
  font-weight: 600;
`,w=o.a.p`
  font-size: 20px;
`,A=o.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,C=o.a.div``,U=o.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,D=o.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
  margin-top: 60px;
`,L=o.a.input`
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
`,k=Object(o.a)(R)``,z=Object(o.a)(p.a)`
  font-size: 15px;
  height: 50px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${s.a.COLOR.LIGHT_GREEN};
  &:hover {
    cursor: pointer;
  }
`,H=o.a.p`
  color: red;
  margin-top: -20px;
`,I=o.a.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;t.default=()=>{const e=Object(u.g)(),t=Object(j.b)(),[i,o]=Object(d.useState)(!1),[s,p]=Object(d.useState)(),S=Object(j.c)(m.f),T=Object(j.c)(m.h),B=Object(j.c)(x.a);Object(d.useEffect)((()=>{}),[T]);return Object(v.jsxs)(c.a,{title:"Create a Module",description:"Create a Module",children:[Object(v.jsx)(n.a,{}),Object(v.jsx)(a.a,{}),Object(v.jsx)(b.a,{style:{display:i?"flex":"none"},onClose:()=>o(!1)}),Object(v.jsxs)(E,{children:[Object(v.jsx)(y,{children:"Create New Module"}),Object(v.jsx)(w,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac purus eget lacus pellentesque consequat. Donec commodo tincidunt lorem, c ursus accumsan eros varius vel."}),Object(v.jsxs)(D,{id:"moduleForm",children:[Object(v.jsx)(I,{children:"Module Title"}),Object(v.jsx)(L,{type:"text",id:"title",name:"title",defaultValue:null===S||void 0===S?void 0:S.title,"data-test":"title",required:!0}),Object(v.jsx)(I,{children:"Module Description"}),Object(v.jsx)(L,{type:"text",id:"description",name:"description","data-test":"description",defaultValue:null===S||void 0===S?void 0:S.description}),Object(v.jsxs)(U,{children:[Object(v.jsx)(I,{children:"Steps - Drag to Change Order"}),Object(v.jsx)(k,{onClick:()=>{t(Object(g.g)(document.getElementById("title").value)),t(Object(g.c)(document.getElementById("description").value)),o(!0)},"data-test":"add-step",children:"Add Step"})]}),Object(v.jsx)(C,{children:Object(v.jsx)(h.a,{steps:T})}),Object(v.jsx)(H,{children:s}),Object(v.jsxs)(A,{children:[Object(v.jsx)(R,{onClick:()=>{p();const i=Object.values(document.forms.moduleForm).filter((e=>e.name)).reduce(((e,t)=>(e[t.name]=t.value,e)),{}),d={...S,title:i.title,description:i.description,creator:r.b.currentUser.uid},c=B.students;""!==i.title?0!==T.length?S.creator?r.d.doc(S.mid).update(d).then((()=>{r.e.doc(r.b.currentUser.uid).get().then((e=>{const t=e.data().moduleList.filter((e=>e.mid!==S.mid));r.e.doc(r.b.currentUser.uid).update({moduleList:[...t,{mid:d.mid,title:i.title,description:i.description}]})})).then((()=>{r.e.doc(r.b.currentUser.uid).get().then((e=>t(Object(f.b)(e.data()))))}))})).then((()=>{r.e.doc(r.b.currentUser.uid).get().then((e=>t(Object(f.b)(e.data())))),e.push("teacher/home")})):r.d.add(d).then((e=>{r.d.doc(e.id).update({mid:e.id}),r.e.doc(r.b.currentUser.uid).update({moduleList:l.a.firestore.FieldValue.arrayUnion({mid:e.id,title:i.title,description:i.description})}).then((()=>{r.c.doc(B.cid).update({modules:l.a.firestore.FieldValue.arrayUnion(e.id)}).then(r.c.doc(null===B||void 0===B?void 0:B.cid).get().then((e=>t(Object(O.a)(e.data()))))).then((()=>{c.forEach((i=>{r.e.doc(i.uid).get().then((t=>{const d=t.data().classList,c=d.filter((e=>e.cid===B.cid))[0],n={...c,modules:[...c.modules,e.id]},a=(()=>{for(let e=0;e<d.length;e++)if(d[e].cid===c.cid)return e;return-1})();d.splice(a,1,n),r.e.doc(i.uid).update({classList:d})})),r.e.doc(r.b.currentUser.uid).get().then((e=>t(Object(f.b)(e.data()))))}))}))}))})).then((()=>{r.e.doc(r.b.currentUser.uid).get().then((e=>t(Object(f.b)(e.data())))),e.push("teacher/home")})):p("Please add at least one step"):p("Please fill out module title")},"data-test":"create",children:"CREATE"}),Object(v.jsx)(z,{onClick:()=>e.push("teacher/home"),children:"BACK TO DASHBOARD"})]})]})]})]})}}}]);
//# sourceMappingURL=31.b867382f.chunk.js.map