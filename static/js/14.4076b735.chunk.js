(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[14],{128:function(e,t,i){"use strict";var n=i(2),c=i(16),a=i(11),d=i(66),r=i(68),o=i(69),s=i(25),p=i(95),l=i(96),u=i(97),b=i(98),g=i(5);const x=d.a.div`
  background-color: ${s.a.COLOR.GREEN};
  border-radius: 4px;
  width: 70%;
  height: 90px;
  margin: 8px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`,j=d.a.p`
  text-align: center;
  font-size: 30px;
  color: white;
`,h=d.a.img`
  height: 90%;
`;var O=({id:e,type:t,handleDrag:i,handleDrop:n,onClick:c})=>{const a=()=>{switch(t){case"text":return Object(g.jsx)(h,{src:p.a});case"quiz":return Object(g.jsx)(h,{src:l.a});case"ebook":return Object(g.jsx)(h,{src:b.a});case"video":return Object(g.jsx)(h,{src:u.a});default:return Object(g.jsx)(g.Fragment,{})}};return Object(g.jsxs)(x,{draggable:!0,id:e,onDragOver:e=>e.preventDefault(),onDragStart:i,onDrop:n,onClick:c,children:[Object(g.jsx)(a,{}),Object(g.jsx)(j,{children:t.toUpperCase()})]})};const E=d.a.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0px;
`;t.a=e=>{const t=Object(c.b)(),i=Object(a.g)(),[d,s]=Object(n.useState)(),p=Object(c.c)(o.h),l=e=>{s(e.currentTarget.id)},u=e=>{const i=p.find((e=>e.id===parseInt(d))),n=p.find((t=>t.id===parseInt(e.currentTarget.id))),c=i.order,a=n.order,o=p.map((t=>(t.id===parseInt(d)&&(t.order=a),t.id===parseInt(e.currentTarget.id)&&(t.order=c),t)));t(Object(r.f)(o))};return Object(g.jsx)(E,{"data-test":"step-container",children:p.sort(((e,t)=>e.order-t.order)).map((e=>Object(g.jsx)(O,{id:parseInt(e.id),boxColor:e.color,type:e.type,handleDrag:l,handleDrop:u,onClick:()=>{return n=e,t(Object(r.e)(n)),void i.push(`/teacher/create-module/edit-${n.type}`);var n},"data-test":"box"},parseInt(e.id))))})}},129:function(e,t,i){"use strict";i(2);var n=i(16),c=i(66),a=i(25),d=i(67),r=i(5);const o=c.a.div`
  background-color: white;
  border-radius: 4px;
  width: 40%;
  margin: 8px 0px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  padding: 30px;
`,s=c.a.p`
  top: 10px;
  right: 20px;
  position: absolute;
  :hover {
    cursor: pointer;
  }
`,p=c.a.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  position: fixed;
  z-index: 10000;
  align-items: center;
  justify-content: center;
  top: 0;
  background: rgba(0, 0, 0, 0.6);
`,l=c.a.div`
  width: 100%;
`;var u=e=>Object(r.jsx)(p,{style:e.style,children:Object(r.jsxs)(o,{className:e.className,children:[Object(r.jsx)(s,{onClick:e.onClose,children:"X"}),Object(r.jsx)(l,{children:e.children})]})}),b=i(69),g=i(11),x=i(95),j=i(96),h=i(97),O=i(98),E=i(21),I=i(68);const C=Object(c.a)(u)``,m=c.a.p`
  text-align: center;
  font-size: 30px;
`,f=c.a.img`
  height: 90%;
`,A=c.a.p`
  @media (max-width: 500px) {
    display: none;
  }
`,k=c.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,B=Object(c.a)(d.a)`
  background-color: ${a.a.COLOR.GREEN};
  border-radius: 4px;
  width: 50%;
  height: 90px;
  margin: 8px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  padding-right: 10%;
  font-size: 50px;
  @media (max-width: 500px) {
    padding: 0 30px;
  }
`;t.a=({className:e,onClose:t,style:i})=>{const c=Object(g.g)(),a=Object(n.b)(),d=(Object(n.c)(b.h),Object(n.c)(E.a)),o=e=>{a(Object(I.e)(void 0)),c.push(`/${d}/create-module/edit-${e}`)};return Object(r.jsxs)(C,{style:i,className:e,onClose:t,children:[Object(r.jsx)(m,{children:"Select Step to Add"}),Object(r.jsxs)(k,{children:[Object(r.jsxs)(B,{onClick:()=>o("text"),"data-test":"add-text",children:[Object(r.jsx)(f,{src:x.a}),Object(r.jsx)(A,{children:"Text"})]}),Object(r.jsxs)(B,{onClick:()=>o("video"),"data-test":"add-video",children:[Object(r.jsx)(f,{src:h.a}),Object(r.jsx)(A,{children:"Video"})]}),Object(r.jsxs)(B,{onClick:()=>o("quiz"),"data-test":"add-quiz",children:[Object(r.jsx)(f,{src:j.a}),Object(r.jsx)(A,{children:"Quiz"})]}),"admin"===d&&Object(r.jsxs)(B,{onClick:()=>o("ebook"),"data-test":"add-ebook",children:[Object(r.jsx)(f,{src:O.a}),"Ebook"]})]})]})}},236:function(e,t,i){"use strict";i.r(t);var n=i(2),c=i(36),a=i(72),d=i(73),r=i(66),o=i(25),s=i(19),p=i(23),l=i(11),u=i(67),b=i(128),g=i(129),x=i(16),j=i(69),h=i(38),O=i(30),E=i(68),I=i(37),C=i(85),m=i(5);const f=r.a.div`
  margin-top: ${o.a.HEADER_HEIGHT};
  margin-left: ${o.a.SIDEBAR_WIDTH};
  padding: 10px 50px;
  height: 110vh;
  @media (max-width: 500px) {
    margin: 0px 0px;
    padding: 0 5%;
  }
`,A=r.a.p`
  line-height: 36px;
  font-size: 30px;
  font-weight: 600;
`,k=(r.a.p`
  font-size: 20px;
`,r.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`),B=r.a.div``,y=r.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,S=r.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
  margin-top: 60px;
`,Q=r.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`,v=Object(r.a)(u.a)`
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
`,R=Object(r.a)(v)`
@media (max-width: 500px) {
  height: 50px;
}`,D=Object(r.a)(u.a)`
  font-size: 15px;
  height: 50px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${o.a.COLOR.LIGHT_GREEN};
  &:hover {
    cursor: pointer;
  }
`,T=r.a.p`
  color: red;
  margin-top: -20px;
`,q=r.a.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;t.default=()=>{const e=Object(l.g)(),t=Object(x.b)(),[i,r]=Object(n.useState)(!1),[o,u]=Object(n.useState)(),w=Object(x.c)(j.f),L=Object(x.c)(j.h),J=Object(x.c)(h.a);Object(n.useEffect)((()=>{}),[L]);return Object(m.jsxs)(c.a,{title:"Create a Module",description:"Create a Module",children:[Object(m.jsx)(a.a,{}),Object(m.jsx)(d.a,{}),Object(m.jsx)(C.a,{}),Object(m.jsx)(g.a,{style:{display:i?"flex":"none"},onClose:()=>r(!1)}),Object(m.jsxs)(f,{children:[Object(m.jsx)(A,{children:"Create New Module"}),Object(m.jsxs)(S,{id:"moduleForm",children:[Object(m.jsx)(q,{children:"Module Title"}),Object(m.jsx)(Q,{type:"text",id:"title",name:"title",defaultValue:null===w||void 0===w?void 0:w.title,"data-test":"title",required:!0}),Object(m.jsx)(q,{children:"Module Description"}),Object(m.jsx)(Q,{type:"text",id:"description",name:"description","data-test":"description",defaultValue:null===w||void 0===w?void 0:w.description}),Object(m.jsxs)(y,{children:[Object(m.jsx)(q,{children:"Steps - Drag to Change Order"}),Object(m.jsx)(R,{onClick:()=>{t(Object(E.g)(document.getElementById("title").value)),t(Object(E.c)(document.getElementById("description").value)),r(!0)},"data-test":"add-step",children:"Add Step"})]}),Object(m.jsx)(B,{children:Object(m.jsx)(b.a,{steps:L})}),Object(m.jsx)(T,{children:o}),Object(m.jsxs)(k,{children:[Object(m.jsx)(v,{onClick:()=>{u();const i=Object.values(document.forms.moduleForm).filter((e=>e.name)).reduce(((e,t)=>(e[t.name]=t.value,e)),{}),n={...w,title:i.title,description:i.description,creator:s.b.currentUser.uid},c=J.students;""!==i.title?0!==L.length?w.creator?s.d.doc(w.mid).update(n).then((()=>{s.e.doc(s.b.currentUser.uid).get().then((e=>{const t=e.data().moduleList.filter((e=>e.mid!==w.mid));s.e.doc(s.b.currentUser.uid).update({moduleList:[...t,{mid:n.mid,title:i.title,description:i.description}]})})).then((()=>{s.e.doc(s.b.currentUser.uid).get().then((e=>t(Object(I.b)(e.data()))))}))})).then((()=>{s.e.doc(s.b.currentUser.uid).get().then((e=>t(Object(I.b)(e.data())))),e.push("teacher/home")})):s.d.add(n).then((e=>{s.d.doc(e.id).update({mid:e.id}),s.e.doc(s.b.currentUser.uid).update({moduleList:p.a.firestore.FieldValue.arrayUnion({mid:e.id,title:i.title,description:i.description})}).then((()=>{s.c.doc(J.cid).update({modules:p.a.firestore.FieldValue.arrayUnion(e.id)}).then(s.c.doc(null===J||void 0===J?void 0:J.cid).get().then((e=>t(Object(O.a)(e.data()))))).then((()=>{c.forEach((i=>{s.e.doc(i.uid).get().then((t=>{const n=t.data().classList,c=n.filter((e=>e.cid===J.cid))[0],a={...c,modules:[...c.modules,e.id]},d=(()=>{for(let e=0;e<n.length;e++)if(n[e].cid===c.cid)return e;return-1})();n.splice(d,1,a),s.e.doc(i.uid).update({classList:n})})),s.e.doc(s.b.currentUser.uid).get().then((e=>t(Object(I.b)(e.data()))))}))}))}))})).then((()=>{s.e.doc(s.b.currentUser.uid).get().then((e=>t(Object(I.b)(e.data())))),e.push("teacher/home")})):u("Please add at least one step"):u("Please fill out module title")},"data-test":"create",children:"CREATE"}),Object(m.jsx)(D,{onClick:()=>e.push("teacher/home"),children:"BACK TO DASHBOARD"})]})]})]})]})}},67:function(e,t,i){"use strict";var n=i(25);const c=i(66).a.div`
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
`;t.a=c},68:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"d",(function(){return c})),i.d(t,"e",(function(){return a})),i.d(t,"a",(function(){return d})),i.d(t,"h",(function(){return r})),i.d(t,"f",(function(){return o})),i.d(t,"g",(function(){return s})),i.d(t,"c",(function(){return p}));const n=e=>({type:"SET_CURRENT_STEP",payload:e}),c=e=>({type:"SET_SELECTED_MODULE",payload:e}),a=e=>({type:"SET_SELECTED_STEP",payload:e}),d=e=>({type:"ADD_STEP",payload:e}),r=e=>({type:"UPDATE_STEP",payload:e}),o=e=>({type:"SET_STEPS",payload:e}),s=e=>({type:"SET_TITLE",payload:e}),p=e=>({type:"SET_DESCRIPTION",payload:e})},69:function(e,t,i){"use strict";i.d(t,"d",(function(){return d})),i.d(t,"a",(function(){return r})),i.d(t,"f",(function(){return o})),i.d(t,"g",(function(){return s})),i.d(t,"h",(function(){return p})),i.d(t,"e",(function(){return l})),i.d(t,"b",(function(){return u})),i.d(t,"c",(function(){return b}));var n=i(13),c=i(22);const a=Object(n.a)((()=>c.c.getState()),(e=>e.module)),d=Object(n.a)(a,(e=>e.inModule)),r=Object(n.a)(a,(e=>e.currentStep)),o=Object(n.a)(a,(e=>e.selectedModule)),s=Object(n.a)(a,(e=>e.selectedStep)),p=Object(n.a)(o,(e=>null===e||void 0===e?void 0:e.steps)),l=Object(n.a)(p,(e=>0===e.length?0:Math.max(...e.map((e=>e.id)))+1)),u=Object(n.a)(r,p,((e,t)=>t[e].data)),b=Object(n.a)(r,p,((e,t)=>(e+1)/(t.length+1)*100))},95:function(e,t,i){"use strict";t.a=i.p+"static/media/text icon.b8202f2f.png"},96:function(e,t,i){"use strict";t.a=i.p+"static/media/quiz icon.08cab1b6.png"},97:function(e,t,i){"use strict";t.a="data:image/png;base64,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"},98:function(e,t,i){"use strict";t.a=i.p+"static/media/ebook icon.7e0b328b.png"}}]);
//# sourceMappingURL=14.4076b735.chunk.js.map