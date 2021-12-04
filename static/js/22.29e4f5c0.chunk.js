(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[22],{119:function(t,e,n){"use strict";var a=n(2),i=n(151),c=n(152),d=n.n(c),o=n(67),r=n(66),u=n(25),s=n(5);const l=Object(r.a)(o.a)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${u.a.COLOR.DARK_GREEN};
`,b=r.a.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 400px;
`;e.a=t=>{const[e,n]=Object(a.useState)(""),c=n=>{n.preventDefault(),t.onSubmit({body:e})};return Object(s.jsxs)("form",{onSubmit:c,"data-test":"editor",children:[Object(s.jsx)(i.CKEditor,{editor:d.a,onChange:(t,e)=>{const a=e.getData();n(a)},onReady:t=>{t.editing.view.change((e=>{e.setStyle("height","60vh",t.editing.view.document.getRoot())}))},config:{toolbar:{items:["heading","|","bold","italic","link","numberedList","bulletedList","|","indent","outdent","|","blockQuote","insertTable","mediaEmbed","|","undo","redo"],shouldNotGroupWhenFull:!0}},data:t.data}),Object(s.jsxs)(b,{children:[Object(s.jsx)(l,{type:"submit",onClick:c,"data-test":"submit",children:"Submit"}),Object(s.jsx)(l,{type:"submit",onClick:t.onCancel,children:"Cancel"})]})]})}},237:function(t,e,n){"use strict";n.r(e);n(2);var a=n(36),i=n(72),c=n(73),d=n(66),o=n(25),r=n(119),u=n(16),s=n(68),l=n(11),b=n(69),p=n(85),h=n(5);const j=d.a.div`
  margin-top: ${o.a.HEADER_HEIGHT};
  margin-left: ${o.a.SIDEBAR_WIDTH};
  padding: 0 50px;
  @media (max-width: 500px) {
    margin: 0px 0px;
    padding: 0 5%;
  }
`,x=d.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`,O=Object(d.a)(r.a)`
  height: 500px;
`;e.default=()=>{const t=Object(u.b)(),e=Object(u.c)(b.g),n=Object(l.g)(),d=Object(u.c)(b.h),o=Object(u.c)(b.e);return Object(h.jsxs)(a.a,{title:"Edit Text Step",description:"Edit Text Step",children:[Object(h.jsx)(i.a,{}),Object(h.jsx)(c.a,{}),Object(h.jsx)(p.a,{}),Object(h.jsxs)(j,{children:[Object(h.jsx)(x,{children:"Edit Text"}),Object(h.jsx)(O,{onSubmit:a=>{t(void 0!==e?Object(s.h)({type:"text",order:e.order,id:e.id,data:a.body}):Object(s.a)({type:"text",order:d.length,id:o,data:a.body})),n.push("/teacher/create-module")},onCancel:()=>n.push("/teacher/create-module"),data:null===e||void 0===e?void 0:e.data})]})]})}},67:function(t,e,n){"use strict";var a=n(25);const i=n(66).a.div`
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
`;e.a=i},68:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"h",(function(){return o})),n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return u})),n.d(e,"c",(function(){return s}));const a=t=>({type:"SET_CURRENT_STEP",payload:t}),i=t=>({type:"SET_SELECTED_MODULE",payload:t}),c=t=>({type:"SET_SELECTED_STEP",payload:t}),d=t=>({type:"ADD_STEP",payload:t}),o=t=>({type:"UPDATE_STEP",payload:t}),r=t=>({type:"SET_STEPS",payload:t}),u=t=>({type:"SET_TITLE",payload:t}),s=t=>({type:"SET_DESCRIPTION",payload:t})},69:function(t,e,n){"use strict";n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return o})),n.d(e,"f",(function(){return r})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return s})),n.d(e,"e",(function(){return l})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return p}));var a=n(13),i=n(22);const c=Object(a.a)((()=>i.c.getState()),(t=>t.module)),d=Object(a.a)(c,(t=>t.inModule)),o=Object(a.a)(c,(t=>t.currentStep)),r=Object(a.a)(c,(t=>t.selectedModule)),u=Object(a.a)(c,(t=>t.selectedStep)),s=Object(a.a)(r,(t=>null===t||void 0===t?void 0:t.steps)),l=Object(a.a)(s,(t=>0===t.length?0:Math.max(...t.map((t=>t.id)))+1)),b=Object(a.a)(o,s,((t,e)=>e[t].data)),p=Object(a.a)(o,s,((t,e)=>(t+1)/(e.length+1)*100))}}]);
//# sourceMappingURL=22.29e4f5c0.chunk.js.map