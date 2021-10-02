(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[9],{48:function(e,t,i){"use strict";i.d(t,"a",(function(){return n}));const n={COLOR:{LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",DARK_BLUE:"#373B53",TEAL:"#B5FFEA"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px"}},52:function(e,t,i){"use strict";var n=i(48);const a=i(47).a.div`
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
`;t.a=a},54:function(e,t,i){"use strict";i.d(t,"a",(function(){return n})),i.d(t,"b",(function(){return a}));const n=e=>({type:"SIGN_IN",payload:e}),a=()=>({type:"SIGN_OUT"})},55:function(e,t,i){"use strict";t.a=i.p+"static/media/white mtn.bb2904a1.png"},56:function(e,t,i){"use strict";i.d(t,"d",(function(){return o})),i.d(t,"b",(function(){return r})),i.d(t,"a",(function(){return c})),i.d(t,"c",(function(){return s}));var n=i(64);i(58);n.a.initializeApp({apiKey:"AIzaSyBikWf9vy86sF9wXyRjkpdrrAJaw7WoQ8M",authDomain:"ancient-path-adventures.firebaseapp.com",projectId:"ancient-path-adventures",storageBucket:"ancient-path-adventures.appspot.com",messagingSenderId:"1051282870332",appId:"1:1051282870332:web:8f7a5922db7d370e86b339",measurementId:"G-NPPQJQTEQN"});const a=n.a.firestore();var c=n.a.auth(),s=new n.a.auth.GoogleAuthProvider;const o=a.collection("userData"),r=a.collection("classData")},92:function(e,t,i){"use strict";i.r(t);i(0);var n=i(23),a=i(48),c=i(47),s=i.p+"static/media/homepage-splash.82706964.png",o=i(52),r=i(5),d=i(11),l=i(14),p=i(2);const x=c.a.div`
  display: flex;
  flex-flow: column wrap;
  height: 775px;
  background-color: ${a.a.COLOR.GREEN};
  position: relative;
  display: flex;
  margin-top: ${a.a.HEADER_HEIGHT};
`,h=c.a.img`
  position: absolute;
  right: 0;
  height: 100%;
  width: 60%;
  max-width: 600px;
`,j=c.a.h1`
  color: white;
  font-weight: 700;
  font-size: 73px;
  line-height: 86px;
`,m=c.a.h3`
  color: ${a.a.COLOR.LIGHT_GREEN};
  font-weight: 300;
  font-size: 37px;
  line-height: 43px;
`,g=c.a.div`
  margin-left: 10%;
  margin-top: 5%;
  display: flex;
  flex-flow: column wrap;
  max-width: 35%;
  z-index: 1;
`,b=c.a.div`
  display: flex;
  margin-top: 5%;
  margin-left: 10%;
  z-index: 1;
`,u=Object(c.a)(o.a)`
  font-size: 30px;
  line-height: 30px;
  font-weight: 700;
  max-width: 200px;
  height: 60px;
  padding: 10px 35px;
`,f=Object(c.a)(o.a)`
  background-color: ${a.a.COLOR.DARK_GREEN};
  margin-left: 19px;
  font-size: 30px;
  line-height: 36px;
  font-weight: 700;
  max-width: 200px;
  height: 60px;
  padding: 10px 35px;
`;var O=()=>{const e=Object(r.g)(),t=Object(d.c)(l.a),i=Object(d.c)(l.d);return Object(p.jsxs)(x,{children:[Object(p.jsxs)(g,{children:[Object(p.jsx)(j,{children:"SOME CATCHY TEXT"}),Object(p.jsx)(m,{children:"Some convincing text should go here"})]}),Object(p.jsxs)(b,{children:[Object(p.jsx)(u,{onClick:()=>i?e.push(`${t}/home`):e.push("/signin"),children:"Dashboard"}),Object(p.jsx)(f,{children:"BTN2"})]}),Object(p.jsx)(h,{src:s})]})},w=i.p+"static/media/homepage-splash-2.df6b84b2.png",v=i.p+"static/media/circle.bc41d2fd.png",E=i.p+"static/media/square.94282324.png";const y=c.a.div`
  position: relative;
`,R=c.a.div`
  height: 55vw;
  width: 100%;
  @media (max-width: 1000px) {
    display: flex;
    flex-flow: column;
    height: auto;
  }
`,A=c.a.div`
  background: url(${w}) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: 100% 100%;
`,G=c.a.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`,z=c.a.div`
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
`,L=c.a.div`
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
  }
`,N=c.a.img`
  position: absolute;
  width: 20%;
  max-width: 350px;
  @media (max-width: 1000px) {
    position: relative;
    width: 40%;
    margin: 0 auto !important;
  }
`,I=c.a.img`
  width: 60%;
  max-width: 400px;
  @media (max-width: 1000px) {
    width: 40%;
    min-width: 0px;
  }
`,T=c.a.p`
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
`,k=c.a.p`
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
`,H=c.a.h1`
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
`;var D=()=>Object(p.jsxs)(y,{children:[Object(p.jsxs)(R,{children:[Object(p.jsxs)(L,{children:[Object(p.jsx)(N,{src:v,style:{margin:"5% 0% 0% 5%"}}),Object(p.jsx)(k,{style:{margin:"5% 0% 0% 28%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Object(p.jsxs)(L,{children:[Object(p.jsx)(N,{src:v,style:{margin:"10% 0% 0% 50%"}}),Object(p.jsx)(k,{style:{margin:"10% 0% 0% 75%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Object(p.jsxs)(L,{children:[Object(p.jsx)(k,{style:{margin:"30% 0% 0% 5%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(p.jsx)(N,{src:v,style:{margin:"35% 0% 0% 30%"}})]}),Object(p.jsx)(L,{children:Object(p.jsx)(k,{style:{margin:"35% 0% 0% 60%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]}),Object(p.jsxs)(A,{children:[Object(p.jsx)(H,{children:"HEADING TEXT"}),Object(p.jsxs)(G,{children:[Object(p.jsxs)(z,{children:[Object(p.jsx)(I,{src:E}),Object(p.jsx)(T,{children:"Put some type of text here"})]}),Object(p.jsxs)(z,{children:[Object(p.jsx)(I,{src:E}),Object(p.jsx)(T,{children:"Put some type of text here"})]}),Object(p.jsxs)(z,{children:[Object(p.jsx)(T,{children:"Put some type of text here"}),Object(p.jsx)(I,{src:E})]}),Object(p.jsxs)(z,{children:[Object(p.jsx)(T,{children:"Put some type of text here"}),Object(p.jsx)(I,{src:E})]})]})]})]}),C=i(55),_=i(56),P=i(54);const $=Object(c.a)(o.a)`
  background-color: ${a.a.COLOR.DARK_GREEN};
  width: 120px;
  height: 40px;
  margin-left: 10px;
`;var B=({className:e})=>{const t=Object(d.b)(),i=Object(d.c)(l.d);return Object(p.jsxs)("div",{className:e,children:[!i&&Object(p.jsx)($,{onClick:()=>window.location.href="/AncientPathAdventures/signin",children:"SIGN-IN"}),i&&Object(p.jsx)($,{onClick:()=>{_.a.signOut().then((()=>{t(Object(P.b)())}))},children:"LOGOUT"})]})};const S=c.a.header`
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
`,K=c.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,q=c.a.div`
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
`,J=c.a.img`
  margin-left: 3%;
  width: 130px;
`,Q=c.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
`,U=Object(c.a)(o.a)`
  margin-right: 10px;
  box-shadow: none;
  padding: 10px 20px;
`,W=Object(c.a)(B)``;var F=()=>Object(p.jsxs)(S,{id:"header",children:[Object(p.jsxs)(Q,{children:[Object(p.jsx)(J,{src:C.a}),Object(p.jsx)(q,{children:"Ancient Path Adventures"})]}),Object(p.jsxs)(K,{children:[Object(p.jsx)(U,{children:"HELP"}),Object(p.jsx)(W,{})]})]});const X=c.a.div`
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
`,M=c.a.p`
  font-weight: bold;
  font-size: 20px;
  line-height: 43px;
  color: white;
  margin: 0 auto;
`,Y=c.a.p`
  font-size: 15px;
  color: ${a.a.COLOR.LIGHT_GREEN};
  margin: 0 auto;
`;var V=()=>Object(p.jsxs)(X,{id:"footer",children:[Object(p.jsx)(M,{children:"Terms of Use - Privacy Policy"}),Object(p.jsx)(Y,{children:"Copyright \xa9 2021 Ancient Path Adventures"})]});t.default=()=>Object(p.jsxs)(n.a,{description:"Homepage",children:[Object(p.jsx)(F,{}),Object(p.jsx)(O,{}),Object(p.jsx)(D,{}),Object(p.jsx)(V,{})]})}}]);
//# sourceMappingURL=9.d6952c03.chunk.js.map