(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[20],{118:function(t,e,n){"use strict";var i=n(2),s=n(66),r=n(25),o=n(67),a=n(5);const c=s.a.textarea`
  height: 90%;
  width: 90%;
  font-size: 45px;
`,d=s.a.textarea`
  height: 200px;
  width: 90%;
  font-size: 45px;
`,u=s.a.p`
  color: red;
`,l=s.a.button`
  width: 100%;
  font-size: 35px;
  background-color: ${r.a.COLOR.LIGHT_GREEN};
  border-radius: 15px;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid ${r.a.COLOR.DARK_GREEN};
  margin: 10px 0px;
`,p=s.a.p`
  font-size: 20px;
  margin-left: 5px;
  :hover {
    cursor: pointer;
  }
`,x=s.a.div`
  background-color: ${r.a.COLOR.DARK_GREEN};
  width: 80%;
  height: 600px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly;
`,b=s.a.div`
  width: 100%;
  position: relative;
`,h=s.a.div`
  font-size: 50px;
  margin-bottom: 12px;
`,j=s.a.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,O=Object(s.a)(o.a)`
  width: 120px;
  height: 80px;
  position: absolute;
  bottom: 0;
  border-radius: 10px;
`,f=Object(s.a)(o.a)`
  width: 120px;
  height: 80px;
  position: absolute;
  bottom: 0;
  right: 10px;
  border-radius: 10px;
`;e.a=t=>{const[e,n]=Object(i.useState)((null===t||void 0===t?void 0:t.questions[t.currentQuestion])?t.questions[t.currentQuestion].questionText:""),[s,r]=Object(i.useState)((null===t||void 0===t?void 0:t.questions[t.currentQuestion])?t.questions[t.currentQuestion].answerOptions:[{answerText:"",isCorrect:!0},{answerText:"",isCorrect:!1}]),[o,g]=Object(i.useState)([]),[E,w]=Object(i.useState)("");Object(i.useEffect)((()=>{y(s)}),[s]);const y=t=>{const e=t.map((e=>Object(a.jsx)(m,{style:{height:500/t.length+"px"},answerOption:e},`${e.answerText}${t.indexOf(e)}${e.isCorrect}`)));g(e)},m=({answerOption:t,style:e})=>{const[n,o]=Object(i.useState)(t.isCorrect);return Object(a.jsxs)(l,{style:e,children:[Object(a.jsx)(c,{type:"text",defaultValue:t.answerText,onChange:e=>{delete s[t.key],t.answerText=e.target.value;for(var n=0;n<s.length;n++)void 0===s[n]&&(s[n]=t)},"data-test":"answer"}),Object(a.jsx)("input",{type:"radio",checked:n,onClick:()=>(t=>{const e=s.filter((t=>t.isCorrect));if(!e.includes(t)||1!==e.length){delete s[t.key],t.isCorrect=!t.isCorrect;for(var n=0;n<s.length;n++)void 0===s[n]&&(s[n]=t);r(s),o(t.isCorrect)}})(t),onChange:()=>null,"data-test":"is-correct"}),Object(a.jsx)(p,{onClick:()=>{s.length<3||(s.splice(s.indexOf(t),1),r(s),y(s))},children:"X"})]})};return Object(a.jsxs)(x,{children:[Object(a.jsxs)(b,{children:[Object(a.jsx)(h,{children:Object(a.jsx)(d,{id:"question",type:"text",placeholder:e,"data-test":"question"})}),Object(a.jsx)(u,{children:E}),Object(a.jsx)(O,{onClick:()=>{w("");const e=Array.from(document.getElementById("answerSection").children).map((t=>t.firstChild.value)),n=document.getElementById("question").value;if(""!=n){for(let t of e)if(""==t)return void w("Please fill out all fields.");s.map((t=>t.isCorrect)).includes(!0)||w("There must be at least one correct answer"),t.onSubmit([...t.questions,{questionText:n,answerOptions:s}])}else w("Please fill out all fields.")},"data-test":"submit-question",children:"Submit Question"}),Object(a.jsx)(f,{onClick:()=>s.length<4?r([...s,{answerText:"",isCorrect:!1}]):null,"data-test":"add-answer",children:"Add Answer"})]}),Object(a.jsx)(j,{id:"answerSection",children:o})]})}},237:function(t,e,n){"use strict";n.r(e);var i=n(2),s=n(36),r=n(73),o=n(72),a=n(66),c=n(25),d=n(67),u=n(118),l=n(92),p=n(16),x=n(11),b=n(68),h=n(69),j=n(83),O=n(5);const f=a.a.div`
  margin-top: ${c.a.HEADER_HEIGHT};
  margin-left: ${c.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,g=a.a.div`
  background-color: ${c.a.COLOR.DARK_GREEN};
  width: 80%;
  min-height: 200px;
  height: 600px;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
  margin-top: 40px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly;
`,E=Object(a.a)(d.a)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${c.a.COLOR.GREEN};
  border-radius: 40px;
  position: absolute;
  right: 50px;
`,w=Object(a.a)(d.a)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${c.a.COLOR.DARK_GREEN};
`,y=a.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`;e.default=()=>{const t=Object(p.b)(),e=Object(x.g)(),n=Object(p.c)(h.g),[a,c]=Object(i.useState)((null===n||void 0===n?void 0:n.data)?n.data.questions:[]),[d,m]=Object(i.useState)(!1),v=Object(p.c)(h.e),C=Object(p.c)(h.h);return Object(O.jsxs)(s.a,{title:"Edit Quiz Step",description:"Edit Quiz Step",children:[Object(O.jsx)(r.a,{}),Object(O.jsx)(o.a,{}),Object(O.jsx)(j.a,{}),Object(O.jsxs)(f,{children:[Object(O.jsx)(y,{children:"Edit Quiz"}),Object(O.jsx)(E,{onClick:()=>m(!0),"data-test":"add-question",children:"Add Question"}),d&&Object(O.jsx)(u.a,{onSubmit:t=>{c(t),m(!1)},questions:a}),a.map((t=>Object(O.jsx)(g,{children:Object(O.jsx)(l.a,{questions:a,currentQuestion:a.indexOf(t),inEdit:!0})},a.indexOf(t)))),0!=a.length&&Object(O.jsx)(w,{onClick:()=>{t(void 0!==n?Object(b.h)({type:"quiz",order:n.order,id:n.id,data:{questions:a}}):Object(b.a)({type:"quiz",order:C.length,id:v,data:{questions:a}})),e.push("/teacher/create-module")},"data-test":"submit",children:"Submit"})]})]})}},67:function(t,e,n){"use strict";var i=n(25);const s=n(66).a.div`
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
`;e.a=s},68:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"h",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return d})),n.d(e,"c",(function(){return u}));const i=t=>({type:"SET_CURRENT_STEP",payload:t}),s=t=>({type:"SET_SELECTED_MODULE",payload:t}),r=t=>({type:"SET_SELECTED_STEP",payload:t}),o=t=>({type:"ADD_STEP",payload:t}),a=t=>({type:"UPDATE_STEP",payload:t}),c=t=>({type:"SET_STEPS",payload:t}),d=t=>({type:"SET_TITLE",payload:t}),u=t=>({type:"SET_DESCRIPTION",payload:t})},69:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return a})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return d})),n.d(e,"h",(function(){return u})),n.d(e,"e",(function(){return l})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return x}));var i=n(13),s=n(22);const r=Object(i.a)((()=>s.c.getState()),(t=>t.module)),o=Object(i.a)(r,(t=>t.inModule)),a=Object(i.a)(r,(t=>t.currentStep)),c=Object(i.a)(r,(t=>t.selectedModule)),d=Object(i.a)(r,(t=>t.selectedStep)),u=Object(i.a)(c,(t=>null===t||void 0===t?void 0:t.steps)),l=Object(i.a)(u,(t=>0===t.length?0:Math.max(...t.map((t=>t.id)))+1)),p=Object(i.a)(a,u,((t,e)=>e[t].data)),x=Object(i.a)(a,u,((t,e)=>(t+1)/(e.length+1)*100))},92:function(t,e,n){"use strict";var i=n(66),s=n(25),r=n(5);const o=i.a.div`
  width: 100%;
  position: relative;
`,a=i.a.div`
  margin-bottom: 20px;

  span {
    font-size: 40px;
  }
`,c=i.a.div`
  font-size: 50px;
  margin-bottom: 12px;
`,d=i.a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,u=i.a.button`
  width: 100%;
  font-size: 35px;
  background-color: ${s.a.COLOR.LIGHT_GREEN};
  border-radius: 15px;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid ${s.a.COLOR.DARK_GREEN};
  cursor: pointer;
  margin: 10px 0px;
`;e.a=t=>Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(o,{children:[Object(r.jsxs)(a,{children:[Object(r.jsxs)("span",{children:["Question ",t.currentQuestion+1]}),"/",t.questions.length]}),Object(r.jsx)(c,{"data-test":"question-text",children:t.questions[t.currentQuestion].questionText})]}),Object(r.jsx)(d,{children:t.questions[t.currentQuestion].answerOptions.map((e=>Object(r.jsx)(u,{onClick:()=>t.inEdit?void 0:t.handleAnswerOptionClick(e.isCorrect),style:{height:100/t.questions[t.currentQuestion].answerOptions.length+"%"},"data-test":"answer-text",children:e.answerText},t.questions[t.currentQuestion].answerOptions.indexOf(e))))})]})}}]);
//# sourceMappingURL=20.1757b857.chunk.js.map