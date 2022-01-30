(this.webpackJsonpLCSPickEm=this.webpackJsonpLCSPickEm||[]).push([[6],{70:function(e,t,i){"use strict";t.a=i.p+"static/media/lcs-logo.dbbe227a.png"},71:function(e,t,i){"use strict";i(2);var a=i(24),d=i(18),n=i(39),c=(i(22),i(21)),s=i(31),r=i(25),o=i(11),p=i(5);const l=Object(c.a)(n.a)`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  color: black;
  @media (max-width: 800px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;t.a=({className:e})=>{const t=Object(o.g)(),i=Object(d.b)(),n=Object(d.c)(s.b);return Object(p.jsxs)("div",{className:e,"data-test":"login-logout",children:[!n&&Object(p.jsx)(l,{onClick:()=>t.push("/signin"),children:"SIGN-IN"}),n&&Object(p.jsx)(l,{onClick:()=>{a.a.signOut().then((()=>{i(Object(r.a)())}))},children:"LOGOUT"})]})}},72:function(e,t,i){"use strict";i(2);var a=i(21),d=i(22),n=(i(39),i(70)),c=i(71),s=i(11),r=i(18),o=i(31),p=i(5);const l=a.a.header`
  display: flex;
  background-color: ${d.a.COLOR.BLACK};
  justify-content: space-between;
  align-items: center;
  height: ${d.a.HEADER_HEIGHT};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100000;
`,x=a.a.div`
  display: flex;
  align-items: center;
`,m=a.a.div`
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
`,h=a.a.div`
  color: white;
  white-space: nowrap;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    display: none;
  }
`,b=a.a.p`
  color: white;

  :hover {
    color: ${d.a.COLOR.GRAY};
    cursor: pointer;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
`,u=a.a.img`
  margin-left: 3%;
  width: 70px;
  @media (max-width: 800px) {
    width: 50px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`,j=a.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
  :hover {
    cursor: pointer;
  }
`,f=Object(a.a)(c.a)``;t.a=()=>{const e=Object(s.g)(),t=Object(r.c)(o.b);return Object(p.jsxs)(l,{id:"header",children:[Object(p.jsxs)(x,{children:[Object(p.jsxs)(j,{onClick:()=>e.push("/index"),children:[Object(p.jsx)(u,{src:n.a}),Object(p.jsx)(h,{children:"LCS Pick'Em"})]}),t&&Object(p.jsxs)(g,{children:[Object(p.jsx)(b,{onClick:()=>e.push("/home"),children:"My Picks"}),Object(p.jsx)(b,{onClick:()=>e.push("/standings"),children:"Standings"})]})]}),Object(p.jsx)(m,{children:Object(p.jsx)(f,{})})]})}},80:function(e,t,i){"use strict";i.r(t);var a=i(2),d=i(40),n=i(22),c=i(21),s=i(11),r=i(18),o=i(31),p=i(24),l=i(41),x=i(5);const m=c.a.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  min-width: 200px;
  max-width: 50%;
  height: 70px;
  z-index: 6;
`,g=c.a.select`
  height: 100%;
  padding: 0.5rem;
  border: 0px;
  outline: 0px;
  font-size: 25px;
  color: ${n.a.COLOR.BLACK};
  background-color: ${n.a.COLOR.WHITE};
  border: 5px solid black;
  border-radius: 6px;
  z-index: 6;
`,h=c.a.option`
  color: ${e=>e.defaultValue?"lightgrey":"black"};
  z-index: 6;
`;var b=e=>{const t=Object(r.b)(),i=Object(r.c)(o.g),d=Object(r.c)(o.f);Object(a.useEffect)((()=>{p.b.get().then((e=>{t(Object(l.d)(e.docs.map((e=>e.data()))))}))}),[]);return i&&i[0]?Object(x.jsx)(m,{action:e.action,"data-test":"dropdown",style:e.style,children:Object(x.jsx)(g,{id:"services","data-test":"class",name:"services",onChange:e=>{p.b.doc(Array.from(e.target.children).filter((e=>e.selected)).map((e=>e.dataset.name))[0]).get().then((e=>{t(Object(l.c)(e.data()))}))},defaultValue:null===d||void 0===d?void 0:d.name,children:i.map((e=>Object(x.jsx)(h,{value:e.name,"data-name":e.name,children:e.name},e.name)))})}):Object(x.jsx)(x.Fragment,{})},u=i.p+"static/media/100T.51ee80be.png",j=i.p+"static/media/DIG.b072ebb9.png",f=i.p+"static/media/TL.7adad701.png",w=i.p+"static/media/C9.8f8af07d.png",O=i.p+"static/media/EG.f2e7d45d.png",v=i.p+"static/media/TSM.3110ede1.png",k=i.p+"static/media/CLG.1258c635.png",y=i.p+"static/media/GG.a2ae898c.png",z=i.p+"static/media/FLY.3b527a90.png",C=i.p+"static/media/IMT.ad878615.png";const L=e=>{switch(e){case"100T":return u;case"DIG":return j;case"TL":return f;case"C9":return w;case"EG":return O;case"TSM":return v;case"CLG":return k;case"GG":return y;case"FLY":return z;case"IMT":return C;default:return}},E=c.a.div`
  background-color: ${n.a.COLOR.WHITE};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: ${e=>e.started?"initial":"pointer"} !important;
    background-color: ${e=>e.started?e.background:n.a.COLOR.PURPLE} !important;
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
`,T=c.a.img`
  max-height: 100%;
  max-width: 100%;
  z-index: -1;
`;var G=e=>{const t="TBD"==e.result?e.selected?n.a.COLOR.PURPLE:n.a.COLOR.WHITE:e.result==e.team?"green":e.picked!=e.result?"red":n.a.COLOR.WHITE;return Object(x.jsx)(E,{onClick:e.onClick,started:e.started,background:t,"data-team":e.team,"data-gid":e.gid,"data-result":e.result,style:{backgroundColor:t},children:Object(x.jsx)(T,{src:L(e.team)})})},R=i.p+"static/media/lcskings.43faf7a5.png",$=i.p+"static/media/purpleSplash.8a510042.png",D=i.p+"static/media/sadge.b9f214e6.png";const I=c.a.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
  padding: 0 5%;
  align-items: center;
  background-color: ${n.a.COLOR.WHITE};
  display: flex;
  width: 100%;
  margin-top: ${n.a.HEADER_HEIGHT};
`,H=c.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  z-index: 3;
`,S=c.a.p`
  text-align: center;
  font-size: 80px;
  z-index: 5;
`,P=c.a.img`
  height: 400px;
  z-index: 4;
`,A=c.a.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  width: 80vw;
  font-size: 30px;
`,M=c.a.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`,N=c.a.p`
  background-color: white;
  padding: 10px;
  border-radius: 8px;
`,W=c.a.p`
  color: Gray;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
`,B=c.a.p`
  font-size: 50px;
  text-align: center;
`,F=c.a.img`
  position: absolute;
  width: 100%;
  bottom: 0;
  z-index: 1;
  opacity: 0.5;
`,K=c.a.img`
  position: absolute;
  width: 60%;
  right: 0;
  top: 0;
`,U=c.a.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 40px;
  }

  z-index: 2;
`;var Y=()=>{Object(s.g)();const e=Object(r.b)(),t=(Object(r.c)(o.b),Object(r.c)(o.e),Object(r.c)(o.d)),i=Object(r.c)(o.f),d=Object(r.c)(o.c);Object(a.useEffect)((()=>{p.b.get().then((t=>{e(Object(l.d)(t.docs.map((e=>e.data())))),(null===i||void 0===i?void 0:i.name)?e(Object(l.c)(t.docs.map((e=>e.data())).filter((e=>e.name==i.name))[0])):e(Object(l.c)(t.docs[0].data()))}))}),[]);const n=null===i||void 0===i?void 0:i.games,c=e=>new Date(i.games.filter((t=>t.gid==e.gid))[0].start)<new Date,m=a=>{var n;const c=a.target.parentElement.dataset.gid,s=a.target.parentElement.dataset.team;if(!(new Date(null===(n=i.games.filter((e=>e.gid==c))[0])||void 0===n?void 0:n.start)<new Date))if(d.filter((e=>e.gid==c))[0]){const i=d.map((e=>e.gid==c?e.pick==s?e:{...e,pick:s}:e));p.c.doc(t).update({picks:i}),e(Object(l.b)(i))}else{const i=[...d,{gid:c,pick:s}];p.c.doc(t).update({picks:i}),e(Object(l.b)(i))}},g=e=>{const t=null===d||void 0===d?void 0:d.filter((t=>t.gid==e))[0];return void 0!=t?t.pick:void 0};return Object(x.jsxs)(I,{children:[Object(x.jsxs)(U,{children:[Object(x.jsx)(B,{children:"My Picks"}),Object(x.jsx)(b,{})]}),Object(x.jsx)(H,{children:n&&n[0]?n.map((e=>Object(x.jsxs)(A,{children:[Object(x.jsxs)(M,{children:[Object(x.jsx)(G,{team:e.team1,started:c(e),picked:g(e.gid),selected:g(e.gid)==e.team1,gid:e.gid,result:e.result,onClick:m}),"vs",Object(x.jsx)(G,{team:e.team2,started:c(e),picked:g(e.gid),selected:g(e.gid)==e.team2,gid:e.gid,result:e.result,onClick:m})]}),Object(x.jsxs)(N,{children:[e.team1," vs ",e.team2]}),Object(x.jsxs)(W,{children:[new Date(e.start).toLocaleDateString("en-us",{month:"short",day:"numeric"})," ",new Date(e.start).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})]})]},`${e.team1}vs${e.team2}`))):Object(x.jsx)(S,{children:"No Games This Week!"})}),n&&n[0]?Object(x.jsx)(F,{src:R}):Object(x.jsx)(P,{src:D}),Object(x.jsx)(K,{src:$})]})},_=i.p+"static/media/homepage-splash-2.df6b84b2.png";c.a.div`
  position: relative;
`,c.a.div`
  height: 55vw;
  width: 100%;
  @media (max-width: 1000px) {
    display: flex;
    flex-flow: column;
    height: auto;
  }
`,c.a.div`
  background: url(${_}) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: 100% 100%;
`,c.a.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
`,c.a.div`
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
`,c.a.div`
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
  }
`,c.a.img`
  position: absolute;
  width: 20%;
  max-width: 350px;
  @media (max-width: 1000px) {
    position: relative;
    width: 40%;
    margin: 0 auto !important;
  }
`,c.a.img`
  width: 60%;
  max-width: 400px;
  @media (max-width: 1000px) {
    width: 40%;
    min-width: 0px;
  }
`,c.a.p`
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
`,c.a.p`
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
`,c.a.h1`
  color: ${n.a.COLOR.DARK_GREEN};
  font-size: 90px;
  padding-left: 12%;
  padding-top: 300px;
  @media (max-width: 1000px) {
    font-size: 50px;
    padding-top: 30vw;
    text-align: center;
    padding-left: 0%;
  }
`,c.a.img`
  width: 55%;
  max-width: 400px;
  border-radius: 75px;
  margin-bottom: 20px;
  box-shadow: 0px 20px 10px rgba(0, 0, 0, 0.25);
  @media (max-width: 1000px) {
    width: 40%;
    min-width: 0px;
  }
`,c.a.img`
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
`;var J=i(72);t.default=()=>Object(x.jsxs)(d.a,{description:"Homepage",children:[Object(x.jsx)(J.a,{}),Object(x.jsx)(Y,{})]})}}]);
//# sourceMappingURL=6.c232d0b4.chunk.js.map