(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[15],{49:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n={COLOR:{LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",DARK_BLUE:"#373B53",TEAL:"#B5FFEA",GRAY:"#E5E5E5"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px",EMPTY_MODULE:{title:"",description:"",public:!0,creator:void 0,steps:[]},MOCK_MODULE:{title:"Mock Module",description:"This module is used for testing and development",public:!0,creator:"someteacherIDhere",steps:[{type:"text",data:{}},{type:"video",data:{}},{type:"quiz",data:{}}]}}},51:function(e,t,i){"use strict";var n=i(49);const c=i(48).a.div`
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
`;t.a=c},56:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return c})),i.d(t,"a",(function(){return o})),i.d(t,"d",(function(){return s}));const n=e=>({type:"SET_CURRENT_STEP",payload:e}),c=e=>({type:"SET_SELECTED_MODULE",payload:e}),o=e=>({type:"ADD_STEP",payload:e}),s=e=>({type:"SET_STEPS",payload:e})},74:function(e,t,i){"use strict";var n=i(48),c=i(49),o=i(2);const s=n.a.div`
  width: 100%;
  position: relative;
`,a=n.a.div`
  margin-bottom: 20px;

  span {
    font-size: 40px;
  }
`,r=n.a.div`
  font-size: 50px;
  margin-bottom: 12px;
`,d=n.a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,p=n.a.button`
  width: 100%;
  font-size: 35px;
  background-color: ${c.a.COLOR.LIGHT_GREEN};
  border-radius: 15px;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid ${c.a.COLOR.DARK_GREEN};
  cursor: pointer;
  margin: 10px 0px;
`;t.a=e=>Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)(s,{children:[Object(o.jsxs)(a,{children:[Object(o.jsxs)("span",{children:["Question ",e.currentQuestion+1]}),"/",e.questions.length]}),Object(o.jsx)(r,{children:e.questions[e.currentQuestion].questionText})]}),Object(o.jsx)(d,{children:e.questions[e.currentQuestion].answerOptions.map((t=>Object(o.jsx)(p,{onClick:()=>e.inEdit?void 0:e.handleAnswerOptionClick(t.isCorrect),style:{height:100/e.questions[e.currentQuestion].answerOptions.length+"%"},children:t.answerText},e.questions[e.currentQuestion].answerOptions.indexOf(t))))})]})},93:function(e,t,i){"use strict";i.r(t);var n=i(12),c=i(48),o=i(32),s=i(23),a=i(56),r=i(5),d=i(49),p=i(51),l=i(2);const x=c.a.div`
  width: 100%;
  height: 100%;
`,h=c.a.p`
  color: ${d.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  padding-left: 30px;
`,u=c.a.div`
  margin-top: ${d.a.HEADER_HEIGHT};
  margin-left: ${d.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,b=c.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  margin-left: ${d.a.SIDEBAR_WIDTH};
`,j=Object(c.a)(p.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${d.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;var O=()=>{const e=Object(n.b)(),t=Object(n.c)(o.a),i=Object(r.g)(),c=Object(n.c)(o.e);return Object(l.jsxs)(x,{children:[Object(l.jsx)(b,{children:Object(l.jsx)(j,{onClick:()=>i.push("/student/home"),children:"Back to Home"})}),Object(l.jsxs)(h,{children:["This is the ",c.title," Summary Page:"]}),Object(l.jsx)(u,{children:c.description}),'The summary of this page is simple and short that you can read it very quick for the purpose of this assignment called the "Walking Skeleton". Note: You CANNOT back out of a module once you begin!',Object(l.jsx)(b,{children:Object(l.jsx)(j,{onClick:()=>e(Object(a.b)(t+1)),children:"Start Module"})})]})};const g=c.a.div`
  width: 100%;
  height: 100%;
`,f=c.a.p`
  color: ${d.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  padding-left: 30px;
`,E=c.a.div`
  margin-top: ${d.a.HEADER_HEIGHT};
  margin-left: ${d.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,v=c.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  margin-left: ${d.a.SIDEBAR_WIDTH};
`,m=c.a.div``,R=c.a.div``,w=Object(c.a)(p.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${d.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;var y=()=>{const e=Object(n.b)(),t=Object(n.c)(o.b),i=Object(n.c)(o.a);return Object(l.jsxs)(g,{children:[Object(l.jsx)(f,{children:"This is the Module Text Page"}),Object(l.jsx)(E,{dangerouslySetInnerHTML:{__html:t}}),Object(l.jsx)(m,{children:Object(l.jsx)(R,{})}),Object(l.jsx)(v,{children:Object(l.jsx)(w,{onClick:()=>e(Object(a.b)(i+1)),children:"Next Step"})})]})},T=i(0),D=i(74);const _=c.a.div`
  background-color: ${d.a.COLOR.DARK_GREEN};
  width: 90%;
  min-height: 200px;
  height: 90vh;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: space-evenly;
`,A=c.a.div`
  display: flex;
  font-size: 24px;
  align-items: center;
  flex-direction: column;
  align-self: center;
`,C=(c.a.div`
  width: 100%;
  position: relative;
`,c.a.div`
  margin-bottom: 20px;

  span {
    font-size: 40px;
  }
`,c.a.div`
  font-size: 50px;
  margin-bottom: 12px;
`,c.a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,c.a.button`
  width: 100%;
  font-size: 35px;
  background-color: ${d.a.COLOR.LIGHT_GREEN};
  border-radius: 15px;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid ${d.a.COLOR.DARK_GREEN};
  cursor: pointer;
  margin: 10px 0px;
`,Object(c.a)(p.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  margin-top: 30px;
  min-width: 120px;
  background-color: ${d.a.COLOR.GREEN};
  &:hover {
    cursor: pointer;
  }
`);var H=()=>{const e=Object(n.b)(),t=Object(n.c)(o.a),i=Object(n.c)(o.b).questions,[c,s]=Object(T.useState)(0),[r,d]=Object(T.useState)(!1),[p,x]=Object(T.useState)(0);return Object(l.jsx)(_,{children:r?Object(l.jsxs)(A,{children:["You scored ",p," out of ",i.length,Object(l.jsx)(C,{onClick:()=>e(Object(a.b)(t+1)),children:"Submit Quiz"})]}):Object(l.jsx)(D.a,{currentQuestion:c,questions:i,handleAnswerOptionClick:e=>{e&&x(p+1);const t=c+1;t<i.length?s(t):d(!0)}})})};const S=c.a.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;var G=()=>{Object(n.b)(),Object(n.c)(o.a);return Object(l.jsx)(S,{children:Object(l.jsx)(H,{})})};const I=c.a.iframe`
  width: 90vw;
  height: 90vh;
`,L=c.a.div`
  width: 100%;
  height: 100%;
`,k=(c.a.img`
  padding-left: 30px;
`,c.a.p`
  color: ${d.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  padding-left: 30px;
`),$=(c.a.div`
  margin-top: ${d.a.HEADER_HEIGHT};
  margin-left: ${d.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,c.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  margin-left: ${d.a.SIDEBAR_WIDTH};
`),N=Object(c.a)(p.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${d.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;var z=()=>{const e=Object(n.b)(),t=Object(n.c)(o.a),i=Object(n.c)(o.b);return Object(l.jsxs)(L,{children:[Object(l.jsx)(k,{children:"This is the Module Video Page"}),Object(l.jsx)(I,{frameborder:"0",src:`${i}`,allow:"autoplay;",sandbox:"allow-scripts allow-same-origin",allowFullScreen:!0}),Object(l.jsx)($,{children:Object(l.jsx)(N,{onClick:()=>e(Object(a.b)(t+1)),children:"Next Step"})})]})};const B=c.a.div`
  width: 100%;
  height: 100%;
`;t.default=()=>{var e;const t=Object(r.g)(),i=Object(n.c)(o.e),c=Object(n.c)(o.a),a=-1===c||null===i||void 0===i?void 0:i.steps[c];return Object(l.jsx)(s.a,{title:null===i||void 0===i?void 0:i.title,description:"Module Page",children:Object(l.jsxs)(B,{children:[-1===c&&Object(l.jsx)(O,{}),a&&(()=>{const e=a.type;return"text"===e?Object(l.jsx)(y,{}):"video"===e?Object(l.jsx)(z,{}):"quiz"===e?Object(l.jsx)(G,{}):void t.push("/student/home")})(),c>=(null===i||void 0===i||null===(e=i.steps)||void 0===e?void 0:e.length)&&t.push("/student/home")]})})}}}]);
//# sourceMappingURL=15.5e23da8e.chunk.js.map