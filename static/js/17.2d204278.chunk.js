(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[17],{49:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n={COLOR:{LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",DARK_BLUE:"#373B53",TEAL:"#B5FFEA",GRAY:"#E5E5E5"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px",EMPTY_MODULE:{title:"",description:"",public:!0,creator:void 0,steps:[]},MOCK_MODULE:{title:"Mock Module",description:"This module is used for testing and development",public:!0,creator:"someteacherIDhere",steps:[{type:"text",data:{}},{type:"video",data:{}},{type:"quiz",data:{}}]}}},51:function(e,t,i){"use strict";var n=i(49);const o=i(48).a.div`
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
`;t.a=o},59:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"d",(function(){return o})),i.d(t,"a",(function(){return c})),i.d(t,"e",(function(){return s})),i.d(t,"f",(function(){return a})),i.d(t,"c",(function(){return r}));const n=e=>({type:"SET_CURRENT_STEP",payload:e}),o=e=>({type:"SET_SELECTED_MODULE",payload:e}),c=e=>({type:"ADD_STEP",payload:e}),s=e=>({type:"SET_STEPS",payload:e}),a=e=>({type:"SET_TITLE",payload:e}),r=e=>({type:"SET_DESCRIPTION",payload:e})},74:function(e,t,i){"use strict";var n=i(48),o=i(49),c=i(2);const s=n.a.div`
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
  background-color: ${o.a.COLOR.LIGHT_GREEN};
  border-radius: 15px;
  display: flex;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  border: 5px solid ${o.a.COLOR.DARK_GREEN};
  cursor: pointer;
  margin: 10px 0px;
`;t.a=e=>Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)(s,{children:[Object(c.jsxs)(a,{children:[Object(c.jsxs)("span",{children:["Question ",e.currentQuestion+1]}),"/",e.questions.length]}),Object(c.jsx)(r,{children:e.questions[e.currentQuestion].questionText})]}),Object(c.jsx)(d,{children:e.questions[e.currentQuestion].answerOptions.map((t=>Object(c.jsx)(p,{onClick:()=>e.inEdit?void 0:e.handleAnswerOptionClick(t.isCorrect),style:{height:100/e.questions[e.currentQuestion].answerOptions.length+"%"},children:t.answerText},e.questions[e.currentQuestion].answerOptions.indexOf(t))))})]})},94:function(e,t,i){"use strict";i.r(t);var n=i(12),o=i(48),c=i(32),s=i(23),a=i(59),r=i(5),d=i(49),p=i(51),l=i(2);const x=o.a.div`
  width: 100%;
  height: 100%;
`,h=o.a.p`
  color: ${d.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  padding-left: 30px;
`,u=o.a.div`
  margin-top: ${d.a.HEADER_HEIGHT};
  margin-left: ${d.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,b=o.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  margin-left: ${d.a.SIDEBAR_WIDTH};
`,j=Object(o.a)(p.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${d.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;var O=()=>{const e=Object(n.b)(),t=Object(n.c)(c.a),i=Object(r.g)(),o=Object(n.c)(c.e);return Object(l.jsxs)(x,{children:[Object(l.jsx)(b,{children:Object(l.jsx)(j,{onClick:()=>i.push("/student/home"),children:"Back to Home"})}),Object(l.jsxs)(h,{children:["This is the ",o.title," Summary Page:"]}),Object(l.jsx)(u,{children:o.description}),'The summary of this page is simple and short that you can read it very quick for the purpose of this assignment called the "Walking Skeleton". Note: You CANNOT back out of a module once you begin!',Object(l.jsx)(b,{children:Object(l.jsx)(j,{onClick:()=>e(Object(a.b)(t+1)),children:"Start Module"})})]})};const g=o.a.div`
  width: 100%;
  height: 100%;
`,E=o.a.p`
  color: ${d.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  padding-left: 30px;
`,f=o.a.div`
  margin-top: ${d.a.HEADER_HEIGHT};
  margin-left: ${d.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,v=o.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  margin-left: ${d.a.SIDEBAR_WIDTH};
`,m=o.a.div``,R=o.a.div``,y=Object(o.a)(p.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${d.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;var w=()=>{const e=Object(n.b)(),t=Object(n.c)(c.b),i=Object(n.c)(c.a);return Object(l.jsxs)(g,{children:[Object(l.jsx)(E,{children:"This is the Module Text Page"}),Object(l.jsx)(f,{dangerouslySetInnerHTML:{__html:t}}),Object(l.jsx)(m,{children:Object(l.jsx)(R,{})}),Object(l.jsx)(v,{children:Object(l.jsx)(y,{onClick:()=>e(Object(a.b)(i+1)),children:"Next Step"})})]})},T=i(0),D=i(74);const _=o.a.div`
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
`,A=o.a.div`
  display: flex;
  font-size: 24px;
  align-items: center;
  flex-direction: column;
  align-self: center;
`,C=(o.a.div`
  width: 100%;
  position: relative;
`,o.a.div`
  margin-bottom: 20px;

  span {
    font-size: 40px;
  }
`,o.a.div`
  font-size: 50px;
  margin-bottom: 12px;
`,o.a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,o.a.button`
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
`,Object(o.a)(p.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  margin-top: 30px;
  min-width: 120px;
  background-color: ${d.a.COLOR.GREEN};
  &:hover {
    cursor: pointer;
  }
`);var S=()=>{const e=Object(n.b)(),t=Object(n.c)(c.a),i=Object(n.c)(c.b).questions,[o,s]=Object(T.useState)(0),[r,d]=Object(T.useState)(!1),[p,x]=Object(T.useState)(0);return Object(l.jsx)(_,{children:r?Object(l.jsxs)(A,{children:["You scored ",p," out of ",i.length,Object(l.jsx)(C,{onClick:()=>e(Object(a.b)(t+1)),children:"Submit Quiz"})]}):Object(l.jsx)(D.a,{currentQuestion:o,questions:i,handleAnswerOptionClick:e=>{e&&x(p+1);const t=o+1;t<i.length?s(t):d(!0)}})})};const I=o.a.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;var H=()=>{Object(n.b)(),Object(n.c)(c.a);return Object(l.jsx)(I,{children:Object(l.jsx)(S,{})})};const L=o.a.iframe`
  width: 90vw;
  height: 90vh;
`,G=o.a.div`
  width: 100%;
  height: 100%;
`,k=(o.a.img`
  padding-left: 30px;
`,o.a.p`
  color: ${d.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  padding-left: 30px;
`),N=(o.a.div`
  margin-top: ${d.a.HEADER_HEIGHT};
  margin-left: ${d.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,o.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  margin-left: ${d.a.SIDEBAR_WIDTH};
`),$=Object(o.a)(p.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${d.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;var z=()=>{const e=Object(n.b)(),t=Object(n.c)(c.a),i=Object(n.c)(c.b);return Object(l.jsxs)(G,{children:[Object(l.jsx)(k,{children:"This is the Module Video Page"}),Object(l.jsx)(L,{frameborder:"0",src:`${i}`,allow:"autoplay;",sandbox:"allow-scripts allow-same-origin",allowFullScreen:!0}),Object(l.jsx)(N,{children:Object(l.jsx)($,{onClick:()=>e(Object(a.b)(t+1)),children:"Next Step"})})]})};const B=o.a.div`
  width: 100%;
  height: 100%;
`;t.default=()=>{var e;const t=Object(r.g)(),i=Object(n.c)(c.e),o=Object(n.c)(c.a),a=-1===o||null===i||void 0===i?void 0:i.steps[o];return Object(l.jsx)(s.a,{title:null===i||void 0===i?void 0:i.title,description:"Module Page",children:Object(l.jsxs)(B,{children:[-1===o&&Object(l.jsx)(O,{}),a&&(()=>{const e=a.type;return"text"===e?Object(l.jsx)(w,{}):"video"===e?Object(l.jsx)(z,{}):"quiz"===e?Object(l.jsx)(H,{}):void t.push("/student/home")})(),o>=(null===i||void 0===i||null===(e=i.steps)||void 0===e?void 0:e.length)&&t.push("/student/home")]})})}}}]);
//# sourceMappingURL=17.2d204278.chunk.js.map