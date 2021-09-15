(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[3],{69:function(e,t,i){"use strict";i(2);var n=i(23),s=i(25),a=i(26),c=i(40),o=i(22),d=i(17),r=i.p+"static/media/googleLogo.b3136124.png",l=i(4);const x=Object(d.a)(o.a)`
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  width: 250px;
  color: black;
  display: flex;
  justify-content: space-around;
`,p=d.a.img`
    height: 90%;
`;t.a=()=>{const e=Object(a.b)(),t=Object(s.a)(n.a)[0];return Object(l.jsxs)("div",{children:[!t&&Object(l.jsxs)(x,{onClick:()=>{n.a.signInWithPopup(n.b).then((t=>{const i=t.user;e(Object(c.a)(i))})).catch((e=>e.message?console.log(e.message):console.log("Unexpected Error")))},children:[Object(l.jsx)(p,{src:r}),"SIGN-IN WITH GOOGLE"]}),t&&Object(l.jsx)(x,{onClick:()=>{n.a.signOut().then((()=>{e(Object(c.b)())}))},children:"LOGOUT"})]})}},70:function(e,t,i){},74:function(e,t,i){"use strict";i.r(t);i(2);var n=i(38),s=(i(70),i(18)),a=i(17),c=i.p+"static/media/homepage-splash.82706964.png",o=i(22),d=i(4);const r=a.a.div`
    display: flex;
    flex-flow: column wrap;
    height: 775px;
    background-color: ${s.a.GREEN};
    position: relative;
    display: flex;
`,l=a.a.img`
    position: absolute;
    right: 0;
    height: 100%;
    width: 60%;
    max-width: 600px;
`,x=a.a.h1`
    color: white;
    font-weight: 700;
    font-size: 73px;
    line-height: 86px;
`,p=a.a.h3`
    color: ${s.a.LIGHT_GREEN};
    font-weight: 300;
    font-size: 37px;
    line-height: 43px;
`,h=a.a.div`
    margin-left: 10%;
    margin-top: 8%;
    display: flex;
    flex-flow: column wrap;
    max-width: 35%;
    z-index: 1;
`,j=a.a.div`
    display: flex;
    margin-top: 5%;
    margin-left: 10%;
    z-index: 1;
`,m=Object(a.a)(o.a)`
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    max-width: 200px;
    height: 60px;
`,g=Object(a.a)(o.a)`
    background-color: ${s.a.DARK_GREEN};
    margin-left: 19px;
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    max-width: 200px;
    height: 60px;
`;var b=()=>Object(d.jsxs)(r,{children:[Object(d.jsxs)(h,{children:[Object(d.jsx)(x,{children:"SOME CATCHY TEXT"}),Object(d.jsx)(p,{children:"Some convincing text should go here"})]}),Object(d.jsxs)(j,{children:[Object(d.jsx)(m,{children:"BTN"}),Object(d.jsx)(g,{children:"BTN2"})]}),Object(d.jsx)(l,{src:c})]}),u=i.p+"static/media/homepage-splash-2.df6b84b2.png",f=i.p+"static/media/circle.bc41d2fd.png",O=i.p+"static/media/square.94282324.png";const w=a.a.div`
    position: relative;
`,v=a.a.div`
    height: 55vw;
    width: 100%;
    @media (max-width: 1000px) {
        display: flex;
        flex-flow: column;
        height: auto;
    }
`,y=a.a.div`
    background: url(${u}) no-repeat; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: 100% 100%;
`,z=a.a.div`
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
`,E=a.a.div`
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
`,k=a.a.div`
    @media (max-width: 1000px) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-top: 30px;
    }
`,G=a.a.img`
    position: absolute;
    width: 20%;
    max-width: 350px;
    @media (max-width: 1000px) {
        position: relative;
        width: 40%;
        margin: 0 auto !important;
    }
`,T=a.a.img`
    width: 60%;
    max-width: 400px;
    @media (max-width: 1000px) {
        width: 40%;
        min-width: 0px;
    }
`,A=a.a.p`
    font-size: 40px;
    width: 300px;
    img+&{
        margin-left: 50px;
    }
    @media (max-width: 600px) {
        font-size: 4vw;
        img+&{
            margin-left: 20px;
        }
    }
`,N=a.a.p`
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
`,P=a.a.h1`
    color: ${s.a.DARK_GREEN};
    font-size: 90px;
    padding-left: 12%;
    padding-top: 300px;
    @media (max-width: 1000px) {
        font-size: 50px;
        padding-top: 30vw;
        text-align: center;
        padding-left: 0%;
    }
`;var L=()=>Object(d.jsxs)(w,{children:[Object(d.jsxs)(v,{children:[Object(d.jsxs)(k,{children:[Object(d.jsx)(G,{src:f,style:{margin:"5% 0% 0% 5%"}}),Object(d.jsx)(N,{style:{margin:"5% 0% 0% 28%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Object(d.jsxs)(k,{children:[Object(d.jsx)(G,{src:f,style:{margin:"10% 0% 0% 50%"}}),Object(d.jsx)(N,{style:{margin:"10% 0% 0% 75%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),Object(d.jsxs)(k,{children:[Object(d.jsx)(N,{style:{margin:"30% 0% 0% 5%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),Object(d.jsx)(G,{src:f,style:{margin:"35% 0% 0% 30%"}})]}),Object(d.jsx)(k,{children:Object(d.jsx)(N,{style:{margin:"35% 0% 0% 60%"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]}),Object(d.jsxs)(y,{children:[Object(d.jsx)(P,{children:"HEADING TEXT"}),Object(d.jsxs)(z,{children:[Object(d.jsxs)(E,{children:[Object(d.jsx)(T,{src:O}),Object(d.jsx)(A,{children:"Put some type of text here"})]}),Object(d.jsxs)(E,{children:[Object(d.jsx)(T,{src:O}),Object(d.jsx)(A,{children:"Put some type of text here"})]}),Object(d.jsxs)(E,{children:[Object(d.jsx)(A,{children:"Put some type of text here"}),Object(d.jsx)(T,{src:O})]}),Object(d.jsxs)(E,{children:[Object(d.jsx)(A,{children:"Put some type of text here"}),Object(d.jsx)(T,{src:O})]})]})]})]}),R=i(50);i(69),i(39);const I=a.a.div`
    display: flex;
    background-color: ${s.a.DARK_GREEN};
    justify-content: center;
    align-items: center;
    flex-flow: column;
    height: 80px;
	position: relative;
	width: 100%;
    z-index: 100000;
    overflow: hidden;
`,$=a.a.p`
    font-weight: bold;
    font-size: 20px;
    line-height: 43px;
    color: white;
`,H=a.a.p`
    font-size: 15px;
    color: ${s.a.LIGHT_GREEN};
`;var q=()=>Object(d.jsxs)(I,{id:"footer",children:[Object(d.jsx)($,{children:"Terms of Use  -  Privacy Policy"}),Object(d.jsx)(H,{children:"Copyright \xa9 2021 Ancient Path Adventures"})]});t.default=()=>Object(d.jsxs)(n.a,{description:"Project Description Homepage",children:[Object(d.jsx)(R.a,{}),Object(d.jsx)(b,{}),Object(d.jsx)(L,{}),Object(d.jsx)(q,{})]})}}]);
//# sourceMappingURL=3.730eb8dd.chunk.js.map