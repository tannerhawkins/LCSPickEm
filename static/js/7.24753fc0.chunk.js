(this.webpackJsonpLCSPickEm=this.webpackJsonpLCSPickEm||[]).push([[7],{109:function(e,t,i){"use strict";i.r(t);var a=i(2),r=i.n(a),o=i(41),s=i(22),n=i(21),d=i(89),c=i(4);var l=({data:e})=>{var t,i;const a=e[0]?null===(t=e[0])||void 0===t||null===(i=t.weeks)||void 0===i?void 0:i.map((e=>({Header:e.name,accessor:e.name}))):[],o=r.a.useMemo((()=>[{Header:"Name",accessor:"name"},{Header:"Scores",columns:[...a,{Header:"Total",accessor:"total"}]}]),[e]),{getTableProps:s,getTableBodyProps:n,headerGroups:l,rows:x,prepareRow:p}=Object(d.useTable)({columns:o,data:e});return Object(c.jsxs)("table",{...s(),children:[Object(c.jsx)("thead",{children:l.map((e=>Object(c.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>Object(c.jsx)("th",{...e.getHeaderProps(),children:e.render("Header")})))})))}),Object(c.jsx)("tbody",{...n(),children:x.map(((e,t)=>(p(e),Object(c.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>Object(c.jsx)("td",{...e.getCellProps(),children:e.render("Cell")})))}))))})]})},x=i(24);const p=n.a.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 5%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: ${s.a.COLOR.WHITE};
  margin-top: ${s.a.HEADER_HEIGHT};
`,b=n.a.p`
  font-size: 50px;
  text-align: center;
`,m=n.a.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;

  table {
    border-spacing: 0;
    border-radius: 5px;
    font-size: 20px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    white-space: nowrap;
    background-color: white;

    tr {
      background-color: #ffffff;
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      text-align: center;
      padding: 6px;
      margin: 0;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      font-size: 0.75em;

      :last-child {
        border-right: 0;
      }
      @media (max-width: 1400px) {
        font-size: 8px;
      }
    }

    td {
      border-right: 1px solid #f8f8f8;
      font-size: 20px;
      @media (max-width: 1100px) {
        font-size: 8px;
      }
      @media (max-width: 400px) {
        font-size: 7px;
      }
      @media (max-width: 350px) {
        font-size: 6px;
      }
    }

    thead th {
      color: #ffffff;
      background: ${s.a.COLOR.PURPLE};
      @media (max-width: 800px) {
        display: none;
      }
    }

    thead th:nth-child(odd) {
      color: #ffffff;
      background: ${s.a.COLOR.BLACK};
    }

    tr:nth-child(even) {
      background: #f8f8f8;
    }
  }
`,f=n.a.div`
  width: 100%;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @media (max-width: 800px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 40px;
  }
`;var g=()=>{const[e,t]=Object(a.useState)([]);return Object(a.useEffect)((()=>{x.e.get().then((e=>{const i=e.docs.map((e=>e.data()));x.c(s.a.SEASON).then((e=>{const a=Object.values(e.data()),r=i.map((e=>{var t;const i=null===(t=e.picks[s.a.SEASON])||void 0===t?void 0:t.map((e=>e.gid));return{user:e,weeks:a.sort(((e,t)=>{var i,a;const r=Date.parse(null===(i=e.games[0])||void 0===i?void 0:i.start),o=Date.parse(null===(a=t.games[0])||void 0===a?void 0:a.start);return isNaN(r)&&isNaN(o)?0:isNaN(r)?1:isNaN(o)||r<o?-1:1})).map((t=>({...t,pickedGames:t.games.filter((e=>null===i||void 0===i?void 0:i.includes(e.gid))),score:t.games.map((a=>{if(null===i||void 0===i?void 0:i.includes(a.gid)){var r;const i=null===(r=e.picks[s.a.SEASON])||void 0===r?void 0:r.filter((e=>e.gid==a.gid))[0];return a.result==i.pick?1==t.playoffs?1==a.finals?5:3:1:0}return 0})).reduce(((e,t)=>e+t),0)})))}})).map((e=>{var t;const i={name:e.user.displayName,weeks:e.weeks};return e.weeks.forEach((e=>{i[e.name]=e.score})),i.total=null===i||void 0===i||null===(t=i.weeks)||void 0===t?void 0:t.map((e=>e.score)).reduce(((e,t)=>e+t)),i}));t(r)}))}))}),[]),Object(c.jsxs)(p,{children:[Object(c.jsx)(f,{children:Object(c.jsx)(b,{children:"Standings"})}),Object(c.jsx)(m,{children:Object(c.jsx)(l,{data:e})})]})};var h=({data:e,games:t})=>{const i=null===t||void 0===t?void 0:t.map((e=>({Header:`${e.team1} vs ${e.team2}`,result:e.result,accessor:`picks.${e.gid}`}))),a=r.a.useMemo((()=>[{Header:"Name",accessor:"user.displayName"},...i]),[e]),{getTableProps:o,getTableBodyProps:s,headerGroups:n,rows:l,prepareRow:x}=Object(d.useTable)({columns:a,data:e});return Object(c.jsxs)("table",{...o(),children:[Object(c.jsx)("thead",{children:n.map((e=>Object(c.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>Object(c.jsx)("th",{...e.getHeaderProps(),children:e.render("Header")})))})))}),Object(c.jsx)("tbody",{...s(),children:l.map(((e,t)=>(x(e),Object(c.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>{const t=void 0==e.column.result?"white":e.column.result==e.value?"green":"TBD"==e.column.result?"white":"red";return Object(c.jsx)("td",{...e.getCellProps(),style:{background:t},children:e.render("Cell")})}))}))))})]})};const u=n.a.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 5%;
  align-items: center;
  background-color: ${s.a.COLOR.WHITE};
  display: flex;
  width: 100%;
`,j=n.a.p`
  font-size: 50px;
  text-align: center;
`,w=n.a.div`
  max-width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  table {
    border-spacing: 0;
    border-radius: 5px;
    font-size: 20px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    width: 80%;
    background-color: white;
    margin-top: 40px;

    tr {
      background-color: #ffffff;
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
    }

    th,
    td {
      text-align: center;
      padding: 8px;
      margin: 0;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    td {
      border: 1px solid black;
      font-size: 20px;
      @media (max-width: 800px) {
        font-size: 9px;
      }
    }

    thead th {
      color: #ffffff;
      background: ${s.a.COLOR.PURPLE};
      @media (max-width: 800px) {
        font-size: 8px;
      }
    }

    thead th:nth-child(odd) {
      color: #ffffff;
      background: ${s.a.COLOR.BLACK};
    }

    tr:nth-child(even) {
      background: #f8f8f8;
    }
  }
`,O=n.a.div`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  margin: 50px;
  text-align: center;
  align-items: center;
`,k=n.a.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 40px;
  }
`;var v=()=>{const[e,t]=Object(a.useState)([]);return Object(a.useEffect)((()=>{x.e.get().then((e=>{const i=e.docs.map((e=>e.data()));x.c(s.a.SEASON).then((e=>{const a=Object.values(e.data());a.forEach((e=>{e.games=e.games?e.games.filter((e=>new Date>new Date(e.start))):[],e.picks=i.map((t=>{var i;const a={};return null===(i=t.picks[s.a.SEASON])||void 0===i||i.filter((t=>e.games.map((e=>e.gid)).includes(t.gid))).forEach((e=>{a[`${e.gid}`]=e.pick})),{user:t,...e,picks:a}}))})),t(a)}))}))}),[]),Object(c.jsxs)(u,{children:[Object(c.jsx)(k,{children:Object(c.jsx)(j,{children:"Pick History"})}),Object(c.jsx)(w,{children:e.sort(((e,t)=>{var i,a;const r=Date.parse(null===(i=e.games[0])||void 0===i?void 0:i.start),o=Date.parse(null===(a=t.games[0])||void 0===a?void 0:a.start);return isNaN(r)&&isNaN(o)?0:isNaN(r)?-1:isNaN(o)||r<o?1:-1})).map((e=>{const t=e.games.sort(((e,t)=>{const i=Date.parse(e.start),a=Date.parse(t.start);return isNaN(i)&&isNaN(a)?0:isNaN(i)?-1:isNaN(a)||i<a?1:-1}));return 0==e.games.length?Object(c.jsx)("div",{},e.name):e.games.length<6?Object(c.jsxs)(O,{children:[e.name,Object(c.jsx)(h,{data:e.picks,games:t},`${e.name}1`)]},e.name):e.games.length<11?Object(c.jsxs)(O,{children:[e.name,Object(c.jsx)(h,{data:e.picks,games:t.slice(0,5)},`${e.name}1`),Object(c.jsx)(h,{data:e.picks,games:t.slice(5,e.games.length)},`${e.name}2`)]},e.name):Object(c.jsxs)(O,{children:[e.name,Object(c.jsx)(h,{data:e.picks,games:t.slice(0,5)},`${e.name}1`),Object(c.jsx)(h,{data:e.picks,games:t.slice(5,10)},`${e.name}2`),Object(c.jsx)(h,{data:e.picks,games:t.slice(10,e.games.length)},`${e.name}3`)]},e.name)}))})]})},y=i(87);n.a.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 5%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: ${s.a.COLOR.WHITE};
  margin-top: ${s.a.HEADER_HEIGHT};
`,n.a.p`
  font-size: 50px;
  text-align: center;
`,n.a.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;

  table {
    border-spacing: 0;
    border-radius: 5px;
    font-size: 20px;
    font-weight: normal;
    border: none;
    border-collapse: collapse;
    white-space: nowrap;
    background-color: white;

    tr {
      background-color: #ffffff;
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
      box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      text-align: center;
      padding: 6px;
      margin: 0;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      font-size: 0.75em;

      :last-child {
        border-right: 0;
      }
      @media (max-width: 1400px) {
        font-size: 8px;
      }
    }

    td {
      border-right: 1px solid #f8f8f8;
      font-size: 20px;
      @media (max-width: 1100px) {
        font-size: 8px;
      }
      @media (max-width: 400px) {
        font-size: 7px;
      }
      @media (max-width: 350px) {
        font-size: 6px;
      }
    }

    thead th {
      color: #ffffff;
      background: ${s.a.COLOR.PURPLE};
      @media (max-width: 800px) {
        display: none;
      }
    }

    thead th:nth-child(odd) {
      color: #ffffff;
      background: ${s.a.COLOR.BLACK};
    }

    tr:nth-child(even) {
      background: #f8f8f8;
    }
  }
`,n.a.div`
  width: 100%;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  @media (max-width: 800px) {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 40px;
  }
`;t.default=()=>Object(c.jsxs)(o.a,{description:"Homepage",children:[Object(c.jsx)(y.a,{}),Object(c.jsx)(g,{}),Object(c.jsx)(v,{})]})},82:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/lcs-logo.dbbe227a.png"},83:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/worlds-logo.39cc699c.png"},84:function(e,t,i){"use strict";i.r(t),t.default=i.p+"static/media/worlds-logo-white.21820bdc.png"},85:function(e,t,i){"use strict";i(2);var a=i(24),r=i(18),o=i(40),s=(i(22),i(21)),n=i(31),d=i(25),c=i(11),l=i(4);const x=Object(s.a)(o.a)`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  color: black;
  @media (max-width: 800px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;t.a=({className:e})=>{const t=Object(c.g)(),i=Object(r.b)(),o=Object(r.c)(n.b);return Object(l.jsxs)("div",{className:e,"data-test":"login-logout",children:[!o&&Object(l.jsx)(x,{onClick:()=>t.push("/signin"),children:"SIGN-IN"}),o&&Object(l.jsx)(x,{onClick:()=>{a.a.signOut().then((()=>{i(Object(d.a)())}))},children:"LOGOUT"})]})}},86:function(e,t,i){var a={"./lcs-logo.png":82,"./worlds-logo-white.png":84,"./worlds-logo.png":83};function r(e){var t=o(e);return i(t)}function o(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=o,e.exports=r,r.id=86},87:function(e,t,i){"use strict";i(2);var a=i(21),r=i(22),o=i(85),s=i(11),n=i(18),d=i(31),c=i(4);const l=a.a.header`
  display: flex;
  background-color: ${r.a.COLOR.BLACK};
  justify-content: space-between;
  align-items: center;
  height: ${r.a.HEADER_HEIGHT};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100000;
`,x=a.a.div`
  display: flex;
  align-items: center;
`,p=a.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,b=a.a.div`
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
`,f=a.a.p`
  color: white;

  :hover {
    color: ${r.a.COLOR.GRAY};
    cursor: pointer;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
`,g=a.a.img`
  margin-left: 3%;
  width: 70px;
  @media (max-width: 800px) {
    width: 50px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`,h=a.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
  :hover {
    cursor: pointer;
  }
`,u=Object(a.a)(o.a)``;t.a=()=>{const e=Object(s.g)(),t=Object(n.c)(d.b);return Object(c.jsxs)(l,{id:"header",children:[Object(c.jsxs)(x,{children:[Object(c.jsxs)(h,{onClick:()=>e.push("/index"),children:[Object(c.jsx)(g,{src:i(86)(`./${r.a.TITLE}-logo${"worlds"==r.a.TITLE?"-white":""}.png`).default}),Object(c.jsxs)(m,{children:["LCS"==r.a.TITLE?"LCS":"Worlds"," Pick'Em"]})]}),t&&Object(c.jsxs)(b,{children:[Object(c.jsx)(f,{onClick:()=>e.push("/home"),children:"My Picks"}),Object(c.jsx)(f,{onClick:()=>e.push("/standings"),children:"Standings"})]})]}),Object(c.jsx)(p,{children:Object(c.jsx)(u,{})})]})}}}]);
//# sourceMappingURL=7.24753fc0.chunk.js.map