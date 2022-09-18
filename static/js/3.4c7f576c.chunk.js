(this.webpackJsonpLCSPickEm=this.webpackJsonpLCSPickEm||[]).push([[3],{100:function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/FNC.485103c8.png"},101:function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/GG.a2ae898c.png"},102:function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/IMT.ad878615.png"},103:function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/TL.7adad701.png"},104:function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/TSM.3110ede1.png"},105:function(t,e,i){var a={"./lcs-logo.png":82,"./worlds-logo.png":83};function n(t){var e=d(t);return i(e)}function d(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=d,t.exports=n,n.id=105},108:function(t,e,i){"use strict";i.r(e);var a=i(2),n=i(41),d=i(22),r=i(21),s=i(11),o=i(18),c=i(31),l=i(24),p=i(42),x=i(4);const g=r.a.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  min-width: 200px;
  max-width: 50%;
  height: 70px;
  z-index: 6;
`,m=r.a.select`
  height: 100%;
  padding: 0.5rem;
  border: 0px;
  outline: 0px;
  font-size: 25px;
  color: ${d.a.COLOR.BLACK};
  background-color: ${d.a.COLOR.WHITE};
  border: 5px solid black;
  border-radius: 6px;
  z-index: 6;
`,u=r.a.option`
  color: ${t=>t.defaultValue?"lightgrey":"black"};
  z-index: 6;
`;var h=t=>{const e=Object(o.b)(),i=Object(o.c)(c.g),n=Object(o.c)(c.f);Object(a.useEffect)((()=>{l.c(d.a.SEASON).then((t=>{e(Object(p.d)(Object.values(t.data())))}))}),[]),Object(a.useEffect)((()=>{}),[n]);return i&&n?Object(x.jsx)(g,{action:t.action,"data-test":"dropdown",style:t.style,children:Object(x.jsx)(m,{id:"services","data-test":"class",name:"services",onChange:t=>{l.c(d.a.SEASON).then((i=>{const a=Object.values(i.data());e(Object(p.c)(a.filter((e=>Array.from(t.target.children).filter((t=>t.selected)).map((t=>t.dataset.name))[0]==e.name))[0]))}))},defaultValue:null===n||void 0===n?void 0:n.name,children:i.sort(((t,e)=>{var i,a;const n=Date.parse(null===(i=t.games[0])||void 0===i?void 0:i.start),d=Date.parse(null===(a=e.games[0])||void 0===a?void 0:a.start);return isNaN(n)&&isNaN(d)?0:isNaN(n)?1:isNaN(d)||n<d?-1:1})).map((t=>Object(x.jsx)(u,{value:t.name,"data-name":t.name,children:t.name},t.name)))})}):Object(x.jsx)(x.Fragment,{})};const f=t=>{try{return i(93)(`./${t}.png`)}catch(e){return i(105)(`./${d.a.TITLE}-logo.png`)}},b=r.a.div`
  background-color: ${d.a.COLOR.WHITE};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: ${t=>t.started||"TBD"==t.gid?"initial":"pointer"} !important;
    background-color: ${t=>t.started||"TBD"==t.gid?t.background:d.a.COLOR.PURPLE} !important;
  }
  width: 300px;
  max-width: 40vw;
  height: 300px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 0.5em;
  transition: background 0.45s ease;
  @media (max-width: 800px) {
    height: 100px;
    font-size: 10px;
  }
  z-index: 1;
`,j=r.a.img`
  max-height: 100%;
  max-width: 100%;
  z-index: -1;
`;var O=t=>{const e="TBD"==t.result?t.selected?d.a.COLOR.PURPLE:d.a.COLOR.WHITE:t.result==t.team?"green":t.picked!=t.result?"red":d.a.COLOR.WHITE;return Object(x.jsx)(b,{onClick:t.onClick,started:t.started,background:e,gid:t.gid,"data-team":t.team,"data-gid":t.gid,"data-result":t.result,style:{backgroundColor:e},children:Object(x.jsx)(j,{src:f(t.team).default})})},w=i.p+"static/media/lcskings.43faf7a5.png",v=i.p+"static/media/purpleSplash.8a510042.png",k=i.p+"static/media/sadge.b9f214e6.png";const y=r.a.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  padding: 0 5%;
  align-items: center;
  background-color: ${d.a.COLOR.WHITE};
  display: flex;
  width: 100%;
  margin-top: ${d.a.HEADER_HEIGHT};
`,E=r.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  z-index: 3;
`,N=r.a.p`
  text-align: center;
  font-size: 80px;
  z-index: 5;
`,C=r.a.img`
  height: 400px;
  z-index: 4;
`,L=r.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  width: 80vw;
  font-size: 30px;
`,T=r.a.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`,z=r.a.p`
  background-color: white;
  padding: 10px;
  border-radius: 8px;
`,S=r.a.p`
  color: Gray;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
`,D=r.a.p`
  font-size: 50px;
  text-align: center;
`,$=r.a.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 1;
  opacity: 0.5;
`,G=r.a.img`
  position: absolute;
  width: 60%;
  right: 0;
  top: 0;
`,R=r.a.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 40px;
  }

  z-index: 2;
`;var A=()=>{Object(s.g)();const t=Object(o.b)(),e=(Object(o.c)(c.b),Object(o.c)(c.e),Object(o.c)(c.d)),i=Object(o.c)(c.f),n=Object(o.c)(c.c);Object(a.useEffect)((()=>{l.c(d.a.SEASON).then((e=>{const a=Object.values(e.data());if(t(Object(p.d)(a)),null===i||void 0===i?void 0:i.name)t(Object(p.c)(a.filter((t=>t.name==i.name))[0]));else{const e=a.map((t=>{var e;return null===(e=t.games[t.games.length-1])||void 0===e?void 0:e.start})),i=e.reduce((t=>new Date>t?1:0)),n=i==a.length?i:i+1;t(Object(p.c)(a[n]?a[n]:a[0]))}}))}),[]);const r=null===i||void 0===i?void 0:i.games.sort(((t,e)=>{const i=Date.parse(t.start),a=Date.parse(e.start);return isNaN(i)&&isNaN(a)?0:isNaN(i)?1:isNaN(a)||i<a?-1:1}));Object(a.useEffect)((()=>{}),[i]);const g=t=>{const e=i.games.filter((e=>e.gid==t))[0].start;return new Date(e)<new Date},m=i=>{var a;const r=i.target.parentElement.dataset.gid,s=i.target.parentElement.dataset.team;if("TBD"!=r&&!g(r))if(null===(a=n[d.a.SEASON])||void 0===a?void 0:a.filter((t=>t.gid==r))[0]){var o;const i=null===(o=n[d.a.SEASON])||void 0===o?void 0:o.map((t=>t.gid==r?t.pick==s?t:{...t,pick:s}:t)),a=n;a[d.a.SEASON]=i,l.e.doc(e).update({picks:a}),t(Object(p.b)(a))}else{const i=n;i[d.a.SEASON]=n[d.a.SEASON]?[...n[d.a.SEASON],{gid:r,pick:s}]:[{gid:r,pick:s}],l.e.doc(e).update({picks:i}),t(Object(p.b)(i))}},u=t=>{var e;const i=null===(e=n[d.a.SEASON])||void 0===e?void 0:e.filter((e=>e.gid==t))[0];return void 0!=i?i.pick:void 0};return Object(x.jsxs)(y,{children:[Object(x.jsxs)(R,{children:[Object(x.jsx)(D,{children:"My Picks"}),Object(x.jsx)(h,{})]}),Object(x.jsx)(E,{children:r&&r[0]?r.map((t=>Object(x.jsxs)(L,{children:[Object(x.jsxs)(T,{children:[Object(x.jsx)(O,{team:t.team1,started:g(t.gid),picked:u(t.gid),selected:u(t.gid)==t.team1,gid:t.gid,result:t.result,onClick:m}),"vs",Object(x.jsx)(O,{team:t.team2,started:g(t.gid),picked:u(t.gid),selected:u(t.gid)==t.team2,gid:t.gid,result:t.result,onClick:m})]}),Object(x.jsxs)(z,{children:[t.team1," vs ",t.team2]}),"TBD"!=t.start?Object(x.jsxs)(S,{children:[new Date(t.start).toLocaleDateString("en-us",{month:"short",day:"numeric"})," ",new Date(t.start).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]}):""]},`${t.team1}vs${t.team2}on${t.start}`))):Object(x.jsx)(N,{children:"No Games This Week!"})}),r&&r[0]?Object(x.jsx)($,{src:w}):Object(x.jsx)(C,{src:k}),Object(x.jsx)(G,{src:v})]})},I=i.p+"static/media/homepage-splash-2.df6b84b2.png";r.a.div`
  position: relative;
`,r.a.div`
  height: 55vw;
  width: 100%;
  @media (max-width: 1000px) {
    display: flex;
    flex-flow: column;
    height: auto;
  }
`,r.a.div`
  background: url(${I}) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: 100% 100%;
`,r.a.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`,r.a.div`
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
`,r.a.div`
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
  }
`,r.a.img`
  position: absolute;
  width: 20%;
  max-width: 350px;
  @media (max-width: 1000px) {
    position: relative;
    width: 40%;
    margin: 0 auto !important;
  }
`,r.a.img`
  width: 60%;
  max-width: 400px;
  @media (max-width: 1000px) {
    width: 40%;
    min-width: 0px;
  }
`,r.a.p`
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
`,r.a.p`
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
`,r.a.h1`
  color: ${d.a.COLOR.DARK_GREEN};
  font-size: 90px;
  padding-left: 12%;
  padding-top: 300px;
  @media (max-width: 1000px) {
    font-size: 50px;
    padding-top: 30vw;
    text-align: center;
    padding-left: 0%;
  }
`,r.a.img`
  width: 55%;
  max-width: 400px;
  border-radius: 75px;
  margin-bottom: 20px;
  box-shadow: 0px 20px 10px rgba(0, 0, 0, 0.25);
  @media (max-width: 1000px) {
    width: 40%;
    min-width: 0px;
  }
`,r.a.img`
  position: absolute;
  width: 20%;
  max-width: 350px;
  border-radius: 50%;
  box-shadow: 0px 20px 10px rgba(0, 0, 0, 0.25);
  @media (max-width: 1000px) {
    position: relative;
    width: 40%;
    margin: 0 auto !important;
  }
`;var H=i(87);e.default=()=>Object(x.jsxs)(n.a,{description:"Homepage",children:[Object(x.jsx)(H.a,{}),Object(x.jsx)(A,{})]})},82:function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/lcs-logo.dbbe227a.png"},83:function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/worlds-logo.39cc699c.png"},84:function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/worlds-logo-white.21820bdc.png"},85:function(t,e,i){"use strict";i(2);var a=i(24),n=i(18),d=i(40),r=(i(22),i(21)),s=i(31),o=i(25),c=i(11),l=i(4);const p=Object(r.a)(d.a)`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  color: black;
  @media (max-width: 800px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;e.a=({className:t})=>{const e=Object(c.g)(),i=Object(n.b)(),d=Object(n.c)(s.b);return Object(l.jsxs)("div",{className:t,"data-test":"login-logout",children:[!d&&Object(l.jsx)(p,{onClick:()=>e.push("/signin"),children:"SIGN-IN"}),d&&Object(l.jsx)(p,{onClick:()=>{a.a.signOut().then((()=>{i(Object(o.a)())}))},children:"LOGOUT"})]})}},86:function(t,e,i){var a={"./lcs-logo.png":82,"./worlds-logo-white.png":84,"./worlds-logo.png":83};function n(t){var e=d(t);return i(e)}function d(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=d,t.exports=n,n.id=86},87:function(t,e,i){"use strict";i(2);var a=i(21),n=i(22),d=i(85),r=i(11),s=i(18),o=i(31),c=i(4);const l=a.a.header`
  display: flex;
  background-color: ${n.a.COLOR.BLACK};
  justify-content: space-between;
  align-items: center;
  height: ${n.a.HEADER_HEIGHT};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100000;
`,p=a.a.div`
  display: flex;
  align-items: center;
`,x=a.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,g=a.a.div`
  display: flex;
  min-width: 200px;
  padding-left: 30px;
  justify-content: space-around;
  border-left: solid white 2px;
  margin-left: 40px;
  height: 90%;
  @media (max-width: 800px) {
    margin-left: 0;
    padding-left: 10px;
  }
  @media (max-width: 400px) {
    border: none;
  }
`,m=a.a.div`
  color: white;
  white-space: nowrap;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    display: none;
  }
`,u=a.a.p`
  color: white;

  :hover {
    color: ${n.a.COLOR.GRAY};
    cursor: pointer;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
`,h=a.a.img`
  margin-left: 3%;
  width: 70px;
  @media (max-width: 800px) {
    width: 50px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`,f=a.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
  :hover {
    cursor: pointer;
  }
`,b=Object(a.a)(d.a)``;e.a=()=>{const t=Object(r.g)(),e=Object(s.c)(o.b);return Object(c.jsxs)(l,{id:"header",children:[Object(c.jsxs)(p,{children:[Object(c.jsxs)(f,{onClick:()=>t.push("/index"),children:[Object(c.jsx)(h,{src:i(86)(`./${n.a.TITLE}-logo${"worlds"==n.a.TITLE?"-white":""}.png`).default}),Object(c.jsxs)(m,{children:["LCS"==n.a.TITLE?"LCS":"Worlds"," Pick'Em"]})]}),e&&Object(c.jsxs)(g,{children:[Object(c.jsx)(u,{onClick:()=>t.push("/home"),children:"My Picks"}),Object(c.jsx)(u,{onClick:()=>t.push("/standings"),children:"Standings"})]})]}),Object(c.jsx)(x,{children:Object(c.jsx)(b,{})})]})}},93:function(t,e,i){var a={"./100T.png":94,"./C9.png":95,"./CLG.png":96,"./DIG.png":97,"./EG.png":98,"./FLY.png":99,"./FNC.png":100,"./GG.png":101,"./IMT.png":102,"./TL.png":103,"./TSM.png":104,"./lcs-logo.png":82,"./worlds-logo-white.png":84,"./worlds-logo.png":83};function n(t){var e=d(t);return i(e)}function d(t){if(!i.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=d,t.exports=n,n.id=93},94:function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/100T.51ee80be.png"},95:function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/C9.8f8af07d.png"},96:function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/CLG.1258c635.png"},97:function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/DIG.b072ebb9.png"},98:function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/EG.f2e7d45d.png"},99:function(t,e,i){"use strict";i.r(e),e.default=i.p+"static/media/FLY.3b527a90.png"}}]);
//# sourceMappingURL=3.4c7f576c.chunk.js.map