(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[8],{48:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n={COLOR:{LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",DARK_BLUE:"#373B53",TEAL:"#B5FFEA"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px"}},52:function(e,t,i){"use strict";var n=i(48);const a=i(47).a.div`
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
`;t.a=a},54:function(e,t,i){"use strict";i.d(t,"d",(function(){return o})),i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return s})),i.d(t,"c",(function(){return c}));var n=i(62);i(58);n.a.initializeApp({apiKey:"AIzaSyBikWf9vy86sF9wXyRjkpdrrAJaw7WoQ8M",authDomain:"ancient-path-adventures.firebaseapp.com",projectId:"ancient-path-adventures",storageBucket:"ancient-path-adventures.appspot.com",messagingSenderId:"1051282870332",appId:"1:1051282870332:web:8f7a5922db7d370e86b339",measurementId:"G-NPPQJQTEQN"});const a=n.a.firestore();var s=n.a.auth(),c=new n.a.auth.GoogleAuthProvider;const o=a.collection("userData"),r=a.collection("classData")},56:function(e,t,i){"use strict";t.a=i.p+"static/media/white mtn.bb2904a1.png"},57:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a}));const n=e=>({type:"SIGN_IN",payload:e}),a=()=>({type:"SIGN_OUT"})},91:function(e,t,i){"use strict";i.r(t);i(0);var n=i(23),a=i(48),s=i(47),c=i.p+"static/media/homepage-splash.82706964.png",o=i(52),r=i(2);const d=s.a.div`
  display: flex;
  flex-flow: column wrap;
  height: 775px;
  background-color: ${a.a.COLOR.GREEN};
  position: relative;
  display: flex;
  margin-top: ${a.a.HEADER_HEIGHT};
`,l=s.a.img`
  position: absolute;
  right: 0;
  height: 100%;
  width: 60%;
  max-width: 600px;
`,p=s.a.h1`
  color: white;
  font-weight: 700;
  font-size: 73px;
  line-height: 86px;
`,x=s.a.h3`
  color: ${a.a.COLOR.LIGHT_GREEN};
  font-weight: 300;
  font-size: 37px;
  line-height: 43px;
`,h=s.a.div`
  margin-left: 10%;
  margin-top: 5%;
  display: flex;
  flex-flow: column wrap;
  max-width: 35%;
  z-index: 1;
`,m=s.a.div`
  display: flex;
  margin-top: 5%;
  margin-left: 10%;
  z-index: 1;
`,j=Object(s.a)(o.a)`
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  max-width: 200px;
  height: 60px;
  padding: 10px 35px;
`,g=Object(s.a)(o.a)`
  background-color: ${a.a.COLOR.DARK_GREEN};
  margin-left: 19px;
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  max-width: 200px;
  height: 60px;
  padding: 10px 35px;
`;var u=()=>Object(r.jsxs)(d,{children:[Object(r.jsxs)(h,{children:[Object(r.jsx)(p,{children:"SOME CATCHY TEXT"}),Object(r.jsx)(x,{children:"Some convincing text should go here"})]}),Object(r.jsxs)(m,{children:[Object(r.jsx)(j,{children:"BTN"}),Object(r.jsx)(g,{children:"BTN2"})]}),Object(r.jsx)(l,{src:c})]}),b=i.p+"static/media/homepage-splash-2.df6b84b2.png",f=i.p+"static/media/circle.bc41d2fd.png",O=i.p+"static/media/square.94282324.png";const w=s.a.div`
  position: relative;
`,v=s.a.div`
  height: 55vw;
  width: 100%;
  @media (max-width: 1000px) {
    display: flex;
    flex-flow: column;
    height: auto;
  }
`,E=s.a.div`
  background: url(${b}) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: 100% 100%;
`,y=s.a.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`,R=s.a.div`
  display: flex;
  min-width: 500px;
  margin-left: 30px;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1000px) {
    min-width: 0px;
    justify-content: space-around;
    margin: 0 auto;
    width: 90%;
  }
`,A=s.a.div`
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
  }
`,G=s.a.img`
  position: absolute;
  width: 20%;
  max-width: 350px;
  @media (max-width: 1000px) {
    position: relative;
    width: 40%;
    margin: 0 auto !important;
  }
`,z=s.a.img`
  width: 60%;
  max-width: 400px;
  @media (max-width: 1000px) {
    width: 40%;
    min-width: 0px;
  }
`,N=s.a.p`
  font-size: 40px;
  width: 300px;
  img + & {
    margin-left: 50px;
  }
  @media (max-width: 600px) {
    font-size: 4vw;
    img + & {
      margin-left: 20px;
    }
  }
`,L=s.a.p`
  position: absolute;
  font-weight: 300;
  font-size: min(2.3vw, 40px);
  margin: 0 auto;
  margin-left: 40px;
  width: 20%;
  max-width: 300px;
  font-weight: 500;
  @media (max-width: 1000px) {
    position: relative;
    width: 40%;
    font-size: 4vw;
    margin: 0 auto !important;
  }
`,I=s.a.h1`
  color: ${a.a.COLOR.DARK_GREEN};
  font-size: 90px;
  padding-left: 12%;
  padding-top: 300px;
  @media (max-width: 1000px) {
    font-size: 50px;
    padding-top: 30vw;
    text-align: center;
    padding-left: 0%;
  }
`;var T=()=>Object(r.jsxs)(w,{children:[Object(r.jsxs)(v,{children:[Object(r.jsxs)(A,{children:[Object(r.jsx)(G,{src:f,style:{margin:"5% 0% 0% 5%"}}),Object(r.jsx)(L,{style:{margin:"5% 0% 0% 28%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Object(r.jsxs)(A,{children:[Object(r.jsx)(G,{src:f,style:{margin:"10% 0% 0% 50%"}}),Object(r.jsx)(L,{style:{margin:"10% 0% 0% 75%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Object(r.jsxs)(A,{children:[Object(r.jsx)(L,{style:{margin:"30% 0% 0% 5%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(r.jsx)(G,{src:f,style:{margin:"35% 0% 0% 30%"}})]}),Object(r.jsx)(A,{children:Object(r.jsx)(L,{style:{margin:"35% 0% 0% 60%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]}),Object(r.jsxs)(E,{children:[Object(r.jsx)(I,{children:"HEADING TEXT"}),Object(r.jsxs)(y,{children:[Object(r.jsxs)(R,{children:[Object(r.jsx)(z,{src:O}),Object(r.jsx)(N,{children:"Put some type of text here"})]}),Object(r.jsxs)(R,{children:[Object(r.jsx)(z,{src:O}),Object(r.jsx)(N,{children:"Put some type of text here"})]}),Object(r.jsxs)(R,{children:[Object(r.jsx)(N,{children:"Put some type of text here"}),Object(r.jsx)(z,{src:O})]}),Object(r.jsxs)(R,{children:[Object(r.jsx)(N,{children:"Put some type of text here"}),Object(r.jsx)(z,{src:O})]})]})]})]}),H=i(56),k=i(54),D=i(11),_=i(57),C=i(15);const P=Object(s.a)(o.a)`
  background-color: ${a.a.COLOR.DARK_GREEN};
  width: 120px;
  height: 40px;
  margin-left: 10px;
`;var B=({className:e})=>{const t=Object(D.b)(),i=Object(D.c)(C.d);return Object(r.jsxs)("div",{className:e,children:[!i&&Object(r.jsx)(P,{onClick:()=>window.location.href="/AncientPathAdventures/signin",children:"SIGN-IN"}),i&&Object(r.jsx)(P,{onClick:()=>{k.a.signOut().then((()=>{t(Object(_.b)())}))},children:"LOGOUT"})]})};const $=s.a.header`
  display: flex;
  background-color: ${a.a.COLOR.LIGHT_GREEN};
  justify-content: space-between;
  align-items: center;
  height: ${a.a.HEADER_HEIGHT};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100000;
`,S=s.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,K=s.a.div`
  font-family: Playball;
  color: white;
  white-space: nowrap;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    display: none;
  }
`,q=s.a.img`
  margin-left: 3%;
  width: 130px;
`,J=s.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`,Q=Object(s.a)(o.a)`
  margin-right: 10px;
  box-shadow: none;
  padding: 10px 20px;
`,U=Object(s.a)(B)``;var W=()=>Object(r.jsxs)($,{id:"header",children:[Object(r.jsxs)(J,{children:[Object(r.jsx)(q,{src:H.a}),Object(r.jsx)(K,{children:"Ancient Path Adventures"})]}),Object(r.jsxs)(S,{children:[Object(r.jsx)(Q,{children:"HELP"}),Object(r.jsx)(U,{})]})]});const F=s.a.div`
  display: flex;
  background-color: ${a.a.COLOR.DARK_GREEN};
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 80px;
  position: relative;
  width: 100%;
  z-index: 100000;
  overflow: hidden;
`,X=s.a.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 43px;
  color: white;
  margin: 0 auto;
`,M=s.a.p`
  font-size: 15px;
  color: ${a.a.COLOR.LIGHT_GREEN};
  margin: 0 auto;
`;var Y=()=>Object(r.jsxs)(F,{id:"footer",children:[Object(r.jsx)(X,{children:"Terms of Use - Privacy Policy"}),Object(r.jsx)(M,{children:"Copyright \xa9 2021 Ancient Path Adventures"})]});t.default=()=>Object(r.jsxs)(n.a,{description:"Homepage",children:[Object(r.jsx)(W,{}),Object(r.jsx)(u,{}),Object(r.jsx)(T,{}),Object(r.jsx)(Y,{})]})}}]);
//# sourceMappingURL=8.963f2ff4.chunk.js.map