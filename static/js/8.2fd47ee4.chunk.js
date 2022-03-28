(this.webpackJsonpLCSPickEm=this.webpackJsonpLCSPickEm||[]).push([[8],{70:function(e,t,a){"use strict";t.a=a.p+"static/media/lcs-logo.dbbe227a.png"},71:function(e,t,a){"use strict";a(2);var i=a(24),s=a(18),r=a(39),n=(a(22),a(21)),c=a(31),d=a(25),o=a(11),l=a(5);const p=Object(n.a)(r.a)`
  width: 120px;
  height: 40px;
  margin-left: 10px;
  color: black;
  @media (max-width: 800px) {
    width: 60px;
    height: 30px;
    font-size: 10px;
  }
`;t.a=({className:e})=>{const t=Object(o.g)(),a=Object(s.b)(),r=Object(s.c)(c.b);return Object(l.jsxs)("div",{className:e,"data-test":"login-logout",children:[!r&&Object(l.jsx)(p,{onClick:()=>t.push("/signin"),children:"SIGN-IN"}),r&&Object(l.jsx)(p,{onClick:()=>{i.a.signOut().then((()=>{a(Object(d.a)())}))},children:"LOGOUT"})]})}},72:function(e,t,a){"use strict";a(2);var i=a(21),s=a(22),r=(a(39),a(70)),n=a(71),c=a(11),d=a(18),o=a(31),l=a(5);const p=i.a.header`
  display: flex;
  background-color: ${s.a.COLOR.BLACK};
  justify-content: space-between;
  align-items: center;
  height: ${s.a.HEADER_HEIGHT};
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100000;
`,x=i.a.div`
  display: flex;
  align-items: center;
`,b=i.a.div`
  display: flex;
  align-items: center;
  margin-right: 3%;
`,m=i.a.div`
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
`,h=i.a.div`
  color: white;
  white-space: nowrap;
  margin-left: 30px;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  @media (max-width: 800px) {
    display: none;
  }
`,g=i.a.p`
  color: white;

  :hover {
    color: ${s.a.COLOR.GRAY};
    cursor: pointer;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
`,f=i.a.img`
  margin-left: 3%;
  width: 70px;
  @media (max-width: 800px) {
    width: 50px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`,j=i.a.div`
  display: flex;
  align-items: center;
  margin-left: 3%;
  :hover {
    cursor: pointer;
  }
`,u=Object(i.a)(n.a)``;t.a=()=>{const e=Object(c.g)(),t=Object(d.c)(o.b);return Object(l.jsxs)(p,{id:"header",children:[Object(l.jsxs)(x,{children:[Object(l.jsxs)(j,{onClick:()=>e.push("/index"),children:[Object(l.jsx)(f,{src:r.a}),Object(l.jsx)(h,{children:"LCS Pick'Em"})]}),t&&Object(l.jsxs)(m,{children:[Object(l.jsx)(g,{onClick:()=>e.push("/home"),children:"My Picks"}),Object(l.jsx)(g,{onClick:()=>e.push("/standings"),children:"Standings"})]})]}),Object(l.jsx)(b,{children:Object(l.jsx)(u,{})})]})}},82:function(e,t,a){"use strict";a.r(t);var i=a(2),s=a.n(i),r=a(40),n=a(22),c=a(21),d=a(75),o=a(5);var l=({data:e})=>{var t,a;const i=e[0]?null===(t=e[0])||void 0===t||null===(a=t.weeks)||void 0===a?void 0:a.map((e=>({Header:e.name,accessor:e.name}))):[],r=s.a.useMemo((()=>[{Header:"Name",accessor:"name"},{Header:"Scores",columns:[...i,{Header:"Total",accessor:"total"}]}]),[e]),{getTableProps:n,getTableBodyProps:c,headerGroups:l,rows:p,prepareRow:x}=Object(d.useTable)({columns:r,data:e});return Object(o.jsxs)("table",{...n(),children:[Object(o.jsx)("thead",{children:l.map((e=>Object(o.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>Object(o.jsx)("th",{...e.getHeaderProps(),children:e.render("Header")})))})))}),Object(o.jsx)("tbody",{...c(),children:p.map(((e,t)=>(x(e),Object(o.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>Object(o.jsx)("td",{...e.getCellProps(),children:e.render("Cell")})))}))))})]})},p=a(24);const x=c.a.div`
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
  background-color: ${n.a.COLOR.WHITE};
  margin-top: ${n.a.HEADER_HEIGHT};
`,b=c.a.p`
  font-size: 50px;
  text-align: center;
`,m=c.a.div`
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
      background: ${n.a.COLOR.PURPLE};
      @media (max-width: 800px) {
        display: none;
      }
    }

    thead th:nth-child(odd) {
      color: #ffffff;
      background: ${n.a.COLOR.BLACK};
    }

    tr:nth-child(even) {
      background: #f8f8f8;
    }
  }
`,h=c.a.div`
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
`;var g=()=>{const[e,t]=Object(i.useState)([]);return Object(i.useEffect)((()=>{p.c.get().then((e=>{const a=e.docs.map((e=>e.data()));p.b.get().then((e=>{const i=e.docs.map((e=>e.data())),s=a.map((e=>{const t=e.picks.map((e=>e.gid));return{user:e,weeks:i.sort(((e,t)=>{var a,i;const s=Date.parse(null===(a=e.games[0])||void 0===a?void 0:a.start),r=Date.parse(null===(i=t.games[0])||void 0===i?void 0:i.start);return isNaN(s)&&isNaN(r)?0:isNaN(s)?1:isNaN(r)||s<r?-1:1})).map((a=>({...a,pickedGames:a.games.filter((e=>t.includes(e.gid))),score:a.games.map((i=>{if(t.includes(i.gid)){const t=e.picks.filter((e=>e.gid==i.gid))[0];return i.result==t.pick?1==a.playoffs?1==i.finals?5:3:1:0}return 0})).reduce(((e,t)=>e+t),0)})))}})).map((e=>{var t;const a={name:e.user.displayName,weeks:e.weeks};return e.weeks.forEach((e=>{a[e.name]=e.score})),a.total=null===a||void 0===a||null===(t=a.weeks)||void 0===t?void 0:t.map((e=>e.score)).reduce(((e,t)=>e+t)),a}));t(s)}))}))}),[]),Object(o.jsxs)(x,{children:[Object(o.jsx)(h,{children:Object(o.jsx)(b,{children:"Standings"})}),Object(o.jsx)(m,{children:Object(o.jsx)(l,{data:e})})]})};var f=({data:e,games:t})=>{const a=null===t||void 0===t?void 0:t.map((e=>({Header:`${e.team1} vs ${e.team2}`,result:e.result,accessor:`picks.${e.gid}`}))),i=s.a.useMemo((()=>[{Header:"Name",accessor:"user.displayName"},...a]),[e]),{getTableProps:r,getTableBodyProps:n,headerGroups:c,rows:l,prepareRow:p}=Object(d.useTable)({columns:i,data:e});return Object(o.jsxs)("table",{...r(),children:[Object(o.jsx)("thead",{children:c.map((e=>Object(o.jsx)("tr",{...e.getHeaderGroupProps(),children:e.headers.map((e=>Object(o.jsx)("th",{...e.getHeaderProps(),children:e.render("Header")})))})))}),Object(o.jsx)("tbody",{...n(),children:l.map(((e,t)=>(p(e),Object(o.jsx)("tr",{...e.getRowProps(),children:e.cells.map((e=>{const t=void 0==e.column.result?"white":e.column.result==e.value?"green":"TBD"==e.column.result?"white":"red";return Object(o.jsx)("td",{...e.getCellProps(),style:{background:t},children:e.render("Cell")})}))}))))})]})};const j=c.a.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 5%;
  align-items: center;
  background-color: ${n.a.COLOR.WHITE};
  display: flex;
  width: 100%;
`,u=c.a.p`
  font-size: 50px;
  text-align: center;
`,O=c.a.div`
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
      background: ${n.a.COLOR.PURPLE};
      @media (max-width: 800px) {
        font-size: 8px;
      }
    }

    thead th:nth-child(odd) {
      color: #ffffff;
      background: ${n.a.COLOR.BLACK};
    }

    tr:nth-child(even) {
      background: #f8f8f8;
    }
  }
`,w=c.a.div`
  display: flex;
  flex-direction: column;
  font-size: 40px;
  margin: 50px;
  text-align: center;
  align-items: center;
`,k=c.a.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
    margin-bottom: 40px;
  }
`;var v=()=>{const[e,t]=Object(i.useState)([]),[a,s]=Object(i.useState)([]);return Object(i.useEffect)((()=>{p.c.get().then((e=>{const a=e.docs.map((e=>e.data()));p.b.get().then((e=>{const i=e.docs.map((e=>e.data()));i.forEach((e=>{e.games=e.games?e.games.filter((e=>new Date>new Date(e.start))):[],e.picks=a.map((t=>{const a={};return t.picks.filter((t=>e.games.map((e=>e.gid)).includes(t.gid))).forEach((e=>{a[`${e.gid}`]=e.pick})),{user:t,...e,picks:a}}))})),t(i)}))}))}),[]),Object(o.jsxs)(j,{children:[Object(o.jsx)(k,{children:Object(o.jsx)(u,{children:"Pick History"})}),Object(o.jsx)(O,{children:e.sort(((e,t)=>{var a,i;const s=Date.parse(null===(a=e.games[0])||void 0===a?void 0:a.start),r=Date.parse(null===(i=t.games[0])||void 0===i?void 0:i.start);return isNaN(s)&&isNaN(r)?0:isNaN(s)?-1:isNaN(r)||s<r?1:-1})).map((e=>{const t=e.games.sort(((e,t)=>{const a=Date.parse(e.start),i=Date.parse(t.start);return isNaN(a)&&isNaN(i)?0:isNaN(a)?-1:isNaN(i)||a<i?1:-1}));return 0==e.games.length?Object(o.jsx)("div",{},e.name):e.games.length<6?Object(o.jsxs)(w,{children:[e.name,Object(o.jsx)(f,{data:e.picks,games:t},`${e.name}1`)]},e.name):e.games.length<11?Object(o.jsxs)(w,{children:[e.name,Object(o.jsx)(f,{data:e.picks,games:t.slice(0,5)},`${e.name}1`),Object(o.jsx)(f,{data:e.picks,games:t.slice(5,e.games.length)},`${e.name}2`)]},e.name):Object(o.jsxs)(w,{children:[e.name,Object(o.jsx)(f,{data:e.picks,games:t.slice(0,5)},`${e.name}1`),Object(o.jsx)(f,{data:e.picks,games:t.slice(5,10)},`${e.name}2`),Object(o.jsx)(f,{data:e.picks,games:t.slice(10,e.games.length)},`${e.name}3`)]},e.name)}))})]})},y=a(72);t.default=()=>Object(o.jsxs)(r.a,{description:"Homepage",children:[Object(o.jsx)(y.a,{}),Object(o.jsx)(g,{}),Object(o.jsx)(v,{})]})}}]);
//# sourceMappingURL=8.2fd47ee4.chunk.js.map