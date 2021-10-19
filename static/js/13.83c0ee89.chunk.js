(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[13],{49:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n={COLOR:{LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",DARK_BLUE:"#373B53",TEAL:"#B5FFEA",GRAY:"#E5E5E5"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px",EMPTY_MODULE:{title:"",description:"",public:!0,creator:void 0,steps:[]},MOCK_MODULE:{title:"Mock Module",description:"This module is used for testing and development",public:!0,creator:"someteacherIDhere",steps:[{type:"text",data:{}},{type:"video",data:{}},{type:"quiz",data:{}}]}}},51:function(e,t,i){"use strict";var n=i(49);const r=i(48).a.div`
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
`;t.a=r},61:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return r})),i.d(t,"a",(function(){return o})),i.d(t,"d",(function(){return s}));const n=e=>({type:"SET_CURRENT_STEP",payload:e}),r=e=>({type:"SET_SELECTED_MODULE",payload:e}),o=e=>({type:"ADD_STEP",payload:e}),s=e=>({type:"SET_STEPS",payload:e})},93:function(e,t,i){"use strict";i.r(t);var n=i(12),r=i(48),o=i(32),s=i(23),a=i(61),c=i(5),d=i(49),l=i(51),p=i(2);const x=r.a.div`
  width: 100%;
  height: 100%;
`,h=r.a.p`
  color: ${d.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  padding-left: 30px;
`,u=r.a.div`
  margin-top: ${d.a.HEADER_HEIGHT};
  margin-left: ${d.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,b=r.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  margin-left: ${d.a.SIDEBAR_WIDTH};
`,j=Object(r.a)(l.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${d.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;var O=()=>{const e=Object(n.b)(),t=Object(n.c)(o.a),i=Object(c.g)(),r=Object(n.c)(o.c);return Object(p.jsxs)(x,{children:[Object(p.jsx)(b,{children:Object(p.jsx)(j,{onClick:()=>i.push("/student/home"),children:"Back to Home"})}),Object(p.jsxs)(h,{children:["This is the ",r.title," Summary Page:"]}),Object(p.jsx)(u,{children:r.description}),'The summary of this page is simple and short that you can read it very quick for the purpose of this assignment called the "Walking Skeleton". Note: You CANNOT back out of a module once you begin!',Object(p.jsx)(b,{children:Object(p.jsx)(j,{onClick:()=>e(Object(a.b)(t+1)),children:"Start Module"})})]})};const g=r.a.div`
  width: 100%;
  height: 100%;
`,E=r.a.p`
  color: ${d.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  padding-left: 30px;
`,f=r.a.div`
  margin-top: ${d.a.HEADER_HEIGHT};
  margin-left: ${d.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,m=r.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  margin-left: ${d.a.SIDEBAR_WIDTH};
`,v=r.a.div``,T=r.a.div``,w=Object(r.a)(l.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${d.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;var R=()=>{const e=Object(n.b)(),t=Object(n.c)(o.a);return Object(p.jsxs)(g,{children:[Object(p.jsx)(E,{children:"This is the Module Text Page"}),Object(p.jsx)(f,{children:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'}),Object(p.jsx)(v,{children:Object(p.jsx)(T,{})}),Object(p.jsx)(m,{children:Object(p.jsx)(w,{onClick:()=>e(Object(a.b)(t+1)),children:"Next Step"})})]})},y=i(0);const C=r.a.div`
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
`,D=r.a.div`
  display: flex;
  font-size: 24px;
  align-items: center;
  flex-direction: column;
  align-self: center;
`,A=r.a.div`
  width: 100%;
  position: relative;
`,_=r.a.div`
  margin-bottom: 20px;

  span {
    font-size: 40px;
  }
`,H=r.a.div`
  font-size: 50px;
  margin-bottom: 12px;
`,k=r.a.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,S=r.a.button`
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
`,I=Object(r.a)(l.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  margin-top: 30px;
  min-width: 120px;
  background-color: ${d.a.COLOR.GREEN};
  &:hover {
    cursor: pointer;
  }
`;var G=()=>{const e=Object(n.b)(),t=Object(n.c)(o.a),i=[{questionText:"What is the capital of France?",answerOptions:[{answerText:"New York",isCorrect:!1},{answerText:"London",isCorrect:!1},{answerText:"Paris",isCorrect:!0},{answerText:"Dublin",isCorrect:!1}]},{questionText:"Who is CEO of Tesla?",answerOptions:[{answerText:"Jeff Bezos",isCorrect:!1},{answerText:"Elon Musk",isCorrect:!0},{answerText:"Bill Gates",isCorrect:!1},{answerText:"Tony Stark",isCorrect:!1}]},{questionText:"The iPhone was created by which company?",answerOptions:[{answerText:"Apple",isCorrect:!0},{answerText:"Intel",isCorrect:!1},{answerText:"Microsoft",isCorrect:!1}]},{questionText:"How many Harry Potter books are there?",answerOptions:[{answerText:"1",isCorrect:!1},{answerText:"4",isCorrect:!1},{answerText:"6",isCorrect:!1},{answerText:"7",isCorrect:!0}]}],[r,s]=Object(y.useState)(0),[c,d]=Object(y.useState)(!1),[l,x]=Object(y.useState)(0);return Object(p.jsx)(C,{children:c?Object(p.jsxs)(D,{children:["You scored ",l," out of ",i.length,Object(p.jsx)(I,{onClick:()=>e(Object(a.b)(t+1)),children:"Submit Quiz"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(A,{children:[Object(p.jsxs)(_,{children:[Object(p.jsxs)("span",{children:["Question ",r+1]}),"/",i.length]}),Object(p.jsx)(H,{children:i[r].questionText})]}),Object(p.jsx)(k,{children:i[r].answerOptions.map((e=>Object(p.jsx)(S,{onClick:()=>(e=>{e&&x(l+1);const t=r+1;t<i.length?s(t):d(!0)})(e.isCorrect),style:{height:100/i[r].answerOptions.length+"%"},children:e.answerText})))})]})})};const L=r.a.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;var N=()=>{Object(n.b)(),Object(n.c)(o.a);return Object(p.jsx)(L,{children:Object(p.jsx)(G,{})})},$=i.p+"static/media/videoPlayer.bb09ea3a.png";const B=r.a.div`
  width: 100%;
  height: 100%;
`,z=(r.a.img`
  padding-left: 30px;
`,r.a.p`
  color: ${d.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  padding-left: 30px;
`),P=(r.a.div`
  margin-top: ${d.a.HEADER_HEIGHT};
  margin-left: ${d.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,r.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  margin-left: ${d.a.SIDEBAR_WIDTH};
`),q=Object(r.a)(l.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${d.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;var M=()=>{const e=Object(n.b)(),t=Object(n.c)(o.a);return Object(p.jsxs)(B,{children:[Object(p.jsx)(z,{children:"This is the Module Video Page"}),Object(p.jsx)("img",{src:$,alt:"Video Player",width:"80%",height:"600"}),Object(p.jsx)(P,{children:Object(p.jsx)(q,{onClick:()=>e(Object(a.b)(t+1)),children:"Next Step"})})]})};const W=r.a.div`
  width: 100%;
  height: 100%;
`;t.default=()=>{var e;const t=Object(c.g)(),i=Object(n.c)(o.c),r=Object(n.c)(o.a),a=-1===r||null===i||void 0===i?void 0:i.steps[r];return Object(p.jsx)(s.a,{title:null===i||void 0===i?void 0:i.title,description:"Module Page",children:Object(p.jsxs)(W,{children:[-1===r&&Object(p.jsx)(O,{}),a&&(()=>{const e=a.type;return"text"===e?Object(p.jsx)(R,{}):"video"===e?Object(p.jsx)(M,{}):"quiz"===e?Object(p.jsx)(N,{}):void t.push("/student/home")})(),r>=(null===i||void 0===i||null===(e=i.steps)||void 0===e?void 0:e.length)&&t.push("/student/home")]})})}}}]);
//# sourceMappingURL=13.83c0ee89.chunk.js.map