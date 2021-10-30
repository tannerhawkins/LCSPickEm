(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[7],{49:function(A,e,i){"use strict";i.d(e,"a",(function(){return t}));const t={COLOR:{LIGHT_GREEN:"#A2E1D0",DARK_GREEN:"#6BAE9B",GREEN:"#7DCBB5",WHITE:"#e9e9ff",DARK_BLUE:"#373B53",TEAL:"#B5FFEA",GRAY:"#E5E5E5"},HEADER_HEIGHT:"80px",SIDEBAR_WIDTH:"80px",EMPTY_MODULE:{title:"",description:"",public:!0,creator:void 0,steps:[]},MOCK_MODULE:{title:"Mock Module",description:"This module is used for testing and development",public:!0,creator:"someteacherIDhere",steps:[{type:"text",data:{}},{type:"video",data:{}},{type:"quiz",data:{}}]}}},50:function(A,e,i){"use strict";i.d(e,"d",(function(){return o})),i.d(e,"b",(function(){return s})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return c}));var t=i(61);i(66);t.a.initializeApp({apiKey:"AIzaSyBikWf9vy86sF9wXyRjkpdrrAJaw7WoQ8M",authDomain:"ancient-path-adventures.firebaseapp.com",projectId:"ancient-path-adventures",storageBucket:"ancient-path-adventures.appspot.com",messagingSenderId:"1051282870332",appId:"1:1051282870332:web:8f7a5922db7d370e86b339",measurementId:"G-NPPQJQTEQN"});const a=t.a.firestore();var c=t.a.auth();new t.a.auth.GoogleAuthProvider;const o=a.collection("userData"),s=a.collection("classData"),n=a.collection("modules")},51:function(A,e,i){"use strict";var t=i(49);const a=i(48).a.div`
  background-color: ${t.a.COLOR.LIGHT_GREEN};
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
`;e.a=a},52:function(A,e,i){"use strict";e.a=i.p+"static/media/white mtn.bb2904a1.png"},53:function(A,e,i){"use strict";i.d(e,"a",(function(){return t}));i(12),i(50);const t=A=>({type:"SIGN_IN",payload:A})},54:function(A,e,i){"use strict";e.a="data:image/png;base64,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"},55:function(A,e,i){"use strict";e.a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIMAAAB8CAYAAABKWQOqAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAUjSURBVHgB7d1fUhpZFIDxQyM+u4PpHQwgWuWbrCBmBSE7yKxAsoIxKwizgmQHmierFCRLIDvIPCsw5xC4owH501y6m77f78UutVJl/LyXvt19Kckabm9v40ql8kYPz0ulUnU8HsdSIFEUxfV6/YcE7mDZF+/v7+2Xf6mH57PPaQiCYloYQ7/fj4fD4Wd5FgGKby6Gu7u76mg0+qKHsSAoL2KwEHT+vNap4EgQnGh2YFODhaCHhBAoF4NODYQQuEkMvV6vVbTTRWxuNjJcCoIXdbvdC0YFmEgXld4IoCIdFaoCyK/XDLEA8mvRKdHppE4vAx1VBlIA+rP8K1h+oWqFTqPR+CgojEiAKWKAQwxwiAEOMcAhBjjEAIcY4BADHGKAQwxwiAEOMcAhBjjEAIcY4BADHGKAQwxwiCFn7AHoXq+XyRNu29wQC88sBHsA2p5w63a71XK5/L5Wq/2UlDAy5MTzEKafuhgOh9f6+dSejCeGHFgQwkzVgrAN1iQFxJCx6bZJ10sefq5WKpVUgiCGDD3bNile8a1xGkEQQ0ZsW8UNt03aeRDEkAEdEVqlUinJtkk7DYIYUmYh6IjwWZKbBGFTjHhGDCnSqaG9ZQgzk535fAdBDCnSF4pf9YOvRaQjC0IXp96JJ8SQotPT0++6qlizvS3ED3vN0fEVBDGkTJeXB/oX3fQYhOnoFPRBtkQMGdhFEPpv/W2vSWQLxJCRHQVxuU0QxJChvAVBDBmbBaGH38WTpEEQQw5YEHqW4T0IPcvYaE2DGHLCbmKZBvFV/GltEgQx5IgF0Wg03urhP+KPBdFf5yaZvbrtzS7QHBwcxFJwulLZ0WH+Tz30tdxcnd411Vx2G91exXB4ePhO/6PagiQsiL7+QTXPzs4Gi76BaSIsSy+BE0N4Xg2CGMK0MAhiCNfcTTLEELYXN8kQAyY3ydiUQQywpesrO93kWUt8OD4+/mQHxBC2li5/u6Vvpokw2ZL0ixAMI0N4fo5Go6bdnPv7FxgZwvJqCGavRgb9Qb7paVBbwuD7zeoHj4+Pr16kMnsVw8nJyY1+uJGCs1vW9HQvFn9WhmCYJnJmGoLPPZ3WCsEQQ45kGYLhbCInut1uRz94e25S2aN8TT19XPvZTkaGHNhVCJvuFMfIkCG7SXU4HH7Rw3PxRKeZjp5x/ZVky0BiyMg0BNu9xdseCxaCXmd4LwkxTWTAtvrbQQhX24RgGBlSNtvzUQ9j8URDaGsIH2VLjAwpWrL5Z2K+QjDEkKKnp6eLvIZgiCFFupx+Zb9A8cB3CIYYUma/QA9BtHyHYIghA1sGMXdTii/EkJEEQdi9CLVdhWCIIUPTINZZG1h6U4ovxJAxDaKzIgi78ljbdQiGGHLAgrApQOZ3j93oEvS2iCEn7C/fpgL5P4hUQzDEkCPPgrhJOwTDtYmcmb42aEoGGBngEAMcYoBDDHCIAQ4xwCEGOMQAhxjgEAMcYoBDDHCIAQ4xwCEGOMQAhxjgEAMcYoCT+B7I8Xh83uv1pAiiKPqUZNubotnmhthzC0IKwN5HUuafWQhO5PMd2rHf7DXDjQAq0iFy58/wYT9E5XLZHvEOfr6ExmCvom3bOEHwJusMdmoljA7Bm8Rgo4O+dngrCJpbgbQ39vC1Exn204vlaE87kWFPzV2bsCB0ymiyGBWehReqbMrQF5UWRJsowlFa9Q22Ff5oNLJtbu3NMWwX9CMpGA0/rtfrPyRwK2P43cPDwx/icUf0PNAQvgnkPxotDwPPMLdRAAAAAElFTkSuQmCC"},57:function(A,e,i){"use strict";i(0);var t=i(48),a=i(49),c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADMCAYAAAA/IkzyAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAALWSURBVHgB7dxbbtswEEBRttvIYuMs1utwI1RCWzeKZIkvcc4BCAP+nME1/CCcEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMCW+/1+m07iJeYW0Lz0x3xuiV3MLaUfKZh50e9PT3+8vb3dEqvM7bdQwawsfSGaFeb2R5hgNpa+EM0Tc/tXiGB2Ln0hmpm5/W/4YF5c+iJ8NOb2taGDObj0RdhozG3dsMGcXPoiXDTm9r0hg8m09EWYaMxt23DBZF76YvhozG2foYIptPTFsNGY234/01geqZz3Ea+DFI5lUnIn1Y34lmxa/i2VM8wrZoVYbp+z+kgDGfVDv2g2iOWYkb9WFs0KsRw3+g+XonkilnMiXI0RzUws50W5fBk+GrHkEel6f9hoxJJPmGAmEaMRS16hgplEikYs+YULZhIhGrGUETKYycjRiKWcsMFMRoxGLGWFDmYyUjRiKS98MJMRohFLHYKZXTkasdQjmL9cMRqx1CWYJ1eKRiz1CeYLV4hGLG0IZkXP0YilHcF8o8doxNKWYDb0FI1Y2hPMDj1EI5Y+CGanltGIpR+CeUGLaMTSF8G8qGY0YumPYA6oEc38KJbOCOagCtGUJJaDBHPCRaMRywmCOeli0YjlJMFkcJFoxJKBYDLpPBqxZCKYjDqNRiwZCSazzqIRS2aCKaCTaMRSgGAKaRyNWAoRTEGNohFLQYIprHI0YilMMBVUikYsFQimksLRiKUSwVRUKBqxVCSYyjJHI5bKBNNApmjE0oBgGjkZjVgaEUxDB6MRS0OCaezFaMTSmGA6sDMasXRAMJ3YiEYsnRBMR1aiEQusmaL5PI/5lPybJRjDHI1YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAMH4Be8IX+Xn/okAAAAAASUVORK5CYII=",o=i(54),s=i(2);const n=t.a.img`
  height: 50%;
  border-radius: 50%;
`;var E=()=>Object(s.jsx)(n,{src:"data:image/png;base64,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"}),g=i(55),r=i(12),d=i(14),C=i(59);const B=t.a.div`
  height: 100%;
  display: flex;
  align-items: center;
`,l=t.a.img`
  height: 40%;
`,I=Object(t.a)(C.a)`
  height: 50%;
`,h=t.a.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 10px;

  @media (max-width: 800px) {
    display: none;
  }
`,Q=t.a.p`
  font-size: 18px;
  line-height: 18px;
  margin: 0;
  font-weight: 500;
`,u=t.a.p`
  font-size: 15px;
  font-weight: 400;
  margin: 0;
  text-transform: capitalize;
`;var x=({className:A})=>{const e=Object(r.c)(d.c),i=Object(r.c)(d.a);return Object(s.jsxs)(B,{className:A,children:[Object(s.jsx)(I,{}),Object(s.jsx)(l,{src:c}),Object(s.jsxs)(h,{children:[Object(s.jsx)(Q,{children:e}),Object(s.jsx)(u,{children:i})]})]})},p=(i(53),i(11));const R=t.a.header`
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  height: ${a.a.HEADER_HEIGHT};
  left: ${a.a.SIDEBAR_WIDTH};
  position: absolute;
  top: 0;
  width: calc(100% - ${a.a.SIDEBAR_WIDTH});
  @media (max-width: 500px) {
    display: none;
  }
`,m=t.a.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-right: 3%;
  width: 50%;
  height: 100%;
  max-width: 600px;
`,j=t.a.div`
  width: 50%;
  height: 100%;
`,b=t.a.div`
  display: flex;
  align-items: center;
  height: 100%;
`,O=t.a.img`
  height: 45%;
`,J=t.a.img`
  height: 40%;
`,Y=t.a.img`
  height: 35%;
  padding-left: 10%;
  :hover {
    cursor: pointer;
  }
`,U=Object(t.a)(x)``;e.a=()=>{const A=Object(r.b)();return Object(s.jsxs)(R,{id:"header",children:[Object(s.jsx)(j,{}),Object(s.jsxs)(m,{children:[Object(s.jsx)(U,{}),Object(s.jsxs)(b,{children:[Object(s.jsx)(O,{src:o.a}),Object(s.jsx)(J,{src:c})]}),Object(s.jsx)(E,{}),Object(s.jsx)(Y,{onClick:()=>A(Object(p.a)()),src:g.a})]})]})}},58:function(A,e,i){"use strict";i(0);var t=i(48),a=i(49),c=i(52),o=i(5),s=i(2);const n=t.a.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: ${a.a.SIDEBAR_WIDTH};
  position: fixed;
  left: 0;
  top: 0;
  background-color: ${a.a.COLOR.DARK_BLUE};
  @media (max-width: 500px) {
    display: none;
  }
`,E=t.a.div`
  background-color: ${a.a.COLOR.GREEN};
  height: ${a.a.SIDEBAR_WIDTH};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`,g=t.a.img`
  width: 60px;
`,r=t.a.img`
  width: 40px;
  margin: 50px auto 0px;
  :hover {
    cursor: pointer;
  }
`;e.a=()=>{const A=Object(o.g)();return Object(s.jsxs)(n,{children:[Object(s.jsx)(E,{children:Object(s.jsx)(g,{onClick:()=>A.push("/home"),src:c.a})}),Object(s.jsx)(r,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAA94SURBVHgB7Z39lRvFEsWv33n/4xcBQwTgCBhHgDNAjsBLBBYR2EQgOQKvI9AQATiCGSLARFCvi26xsry7aLdvf079zumziw9gqWdu10dXVwOGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRiGYRhGSzyBkR0RGcKvw8kfn/7+KYwji/7zkydPPsHIigkkAU4AT92P7+Bf+m/dOP7zU3wuhMewhPHp5PePbvxuAuJjAonkRAwqhBE3wijB4sbvYfwKE000JpBH4EQxuh8/wIthRN1M8IL54MQywXgQJpALCFbiBbwoRnhXqUXUmkxuXMMLxqzLv2ACuYMT1+k1buKH3lChXDuhvINxKyaQM07cpw36FMVtLPCW5WcnlgXGP5hAAkEYai1GrJvJjb1ZFc+qBRLcqB/duEK5zFOtLG5s1y6UVQokCENF8QrrcaMey4IVC2V1AnHi2MC7UgOMh7BghUJZjUBCjPEGPiNlPJ7FjSsnlA9YAd0LJNQ97WDBN5s9VpD1+g86xolD44zfYOJIwcaN39wcb9ExXVoQ99DUjVJ3aoSRg8WN5z1ak+4siFmNIgxuzD1ak24siMUa1TC58bIXa9KFQEKG6j3q39NY8Pl5juOZjrt4ejKGk58D6mZx4ycnkms0TvMCCWb9NeriWDW7wJeaT+5l+QNEQpz1NW5K7mssqNQs1xYN06xAwm64ulQvUB4VhK6WKoZrthguJYhGR01l+TovL1strW9SICHeOKCsq6EPfA8viF9RIW6evodPx44oO1cLOs1yVYeukm5oxqQEf7rxJrx4TaGf2Y1d+A4lmOWmWYWRAjfBY6EHfHDjlXi3rmn0O7ixkTKLjD47K/VJQXiouTlIg9biUsRblYPk50cYPCS/OA7SsTDOkTJCMZEwkLziOMiKhHGOeKHMkg8TSQySTxzqG7+C8TeSN0YxkTwG8dmqHGhWyk4VnuHmZBCf9crBCONywsNJna2aZcXu1KWIzxzOkhbLbl2KeHHMkhazGg9AfGr4jaRlFtsnuZ/wIGZJh65U5vM+EvGxSUrLPostXHfjJue9pGMWW6GikfQW/j2ML3ETs5V07MRWJhriLX3KxWwL4wY3IS8kHbWVwneDzq2kY0QFFK/mlbSVudqe5hdURPi+I/x9IgM+Pwh1yoKbQ1XH+z4W931+R0WEBWgLPvq9n62+AljSlThUEYyLd0c0VboTToA7h/9XDedg/kbSbegesGYkXdxRXBziNzo1NZo667OTCpIPkk4kV1gj4rMhKSgqDvHW4iD52UlhoUg6kaxvE1HSpAqLiUO8K7WT8uykoFAkjUjW5WpJGteqWLbK/d1XUu6k3m3MUtA1ET8fbNbhakmaOqsi4hBvNQ5SLzspZE2EnwL+U9aw0St8N6TIzquUPRv/EGYpJ5K9cOnb1RL+huAsBXbIpdzZ+MeinzV7WljS1NaN6BXyZBUxuVLmbDyL7EkM4bvUv6FHhP9ilXjYLYvjSA/z1l9FtnCtxxtkRnzM0ZJbdRdFDicJ9zzJLD0Vnwp3BZlzT47kOcSVk1kyu6fCj0eyZC6zFCvqxIBXjDjmbvVJ/vy1oA21nyMj4gNsViZKixm/Sd3zN/kFOuJvlR3AYV9AHFv0eSPuKJn3j9yzm9yPt+BwvOM+KcktCHH1XZC5AXJwQ2b0zbOcJfTi3WOdU4abrOX/3yAhSS0I2XpsC5wNyLUxtcDfJ7KHvy5Af8/10mZNeASX6GdwGKTlfRHhlWFkX8UlbUr3ny7xck/CQXxgq//OTtJm0EpsIh6EQ5u768ItZ8/ev0rSZK30JX8tj8jCiZ/Pq0Sfq8QCNAqPEa0hvJqr7CuEpLEe2uQg2u+WdB0PR2RGeFYk+75YNMJb6UpYj4Nwoff9FX61bImFiGVF1DK3s3EovBW4xENjuoZKslSk8C3diMwIbzEa0QrC65lUwnowSyKSd4wXrkiyn6sRnhVpI1gXn3lhUGT/QXiuYbaXTXiiLjXnB4kniZuVYh+ElTLcIjPii/gGxKMbWKxc/yXo37UgHnUvv0Z+rhGPiuMHkEkhEMaH1M2kD8gPq8p1i4yEzbeX4FCi39Y7+GceC/2zpxDIiHiuC108zxC3Wo93yEyoc5oQT/ZS+PCs94hnBBmqQMRnEhh+4B5lGBDPFuVguCojysDwGJ4KOZvFtiCsFThrxe4JjNWz1GdXGJZrQAGCBWR4DdQ4hC0Qxgs2oQDCOUA0lWy2HFyVCZEUCtSVPeKhuog0gYQU24h49ijDgHiylY0j7Wf4H8rAcLNGZrqXaUEYyv1U0L1isKA8C+L5CgUgulk0K8IUCGPXe0I5GKtOiczbOX8hngHlYCQavgWJ/4IHQ7WMyXks6ppsEEfL1q8WGC7i6Abl4qTaBPIRhQjB9QJDWVAOjUPeIo66XKwQFA2I41Nt14s1SqkMFIWwUMW6qgMrUGfFIAzFmjg4MJ7FgrJMiIdiRVgCYQRFEwwG0S+GW8X/QFkWxEOxpCyBDIjHLEgkocxiQBwTysOIRauyIAPiKb1q9QDjDEoNC9WEeKqKQaI/jAXocYjvQTYinuyVyOeQynW6siALjEcT6sgY1mOpaKFaEEdVFmRAHAuMGHZov1T/nAVxDCAQLRBSvrmGEo0mcfO/B8e1KnLQ6x4WRMKoSmZYEEoTYhgPJoiD1VZoi7qoYtFkCGRAPGZBHoCE66fBE8dUmfVQGO/EgEiYtVgxmEAuJATkKo4BHBbwGj4wqSLtn/wCnQsxgVyA+C7sesvrAB4lrpVohlpiEONfcOLQCtf34M73tkLXismASBgulgkkIcGl0jTuCC7bzM3tmqSWGMS4hdDpUa3GAC57E8dl1BKDGGc4cVyBH28oKo4ag/IURMe2DIEsMKiIv1k3xaUw2xWJQ6lCIAaRII4UneFbizmKdFY5p5YYZICRUhybBrNVVSR/GAJZEM/qM2GJxKEuxotGe41VUcJUiwVZtUBCQM4Wx+LG84Y3AQfEE90jLDoGIT2AASsl7HOwA/IFbYtDYRzCqyZIXxDHgPXCvltPDzw966B8ZEAcCwiwBBLdxwgrJMQdA3ioOJ4XunyIzYA4FhBgCST6mGbBlvtFCK4V8xbcbsQRKghiocxDLRZEGbEuNChnJScW9GM5lAHxLCDAEkg1fYxaIFiPF+CwoC9xKIxGhAsI1BKkKwPWwwie9dh0eJ5jRDz1tJEKR0CjL4LHStDjssIhxa57cfRdkHjq2ltzH2iWeLoP1N13HITDjA5x3+s7iYc2N8xiRYZJY/nlNcOKtbbok6puCmAKZEI8awjUGVfV1dbDignjGucqBcLIZJkFuYy36JcR8UwgUZuLpcH+iL5hCIRxXXJ1hGfPCK5pV/nRBMK6xB4cE1sl4jMrsS/A0nGbHkYjvIm5J8Q+UciwIhv0y4B46snv8xkRD3V+2AJhmP6e3SyG+9ClQIRzO5ZyDSJUgTjTNoFTl9Wtm0VgQZ8w3KtP7NOTKZo2TIhnI7XthHIYYHxBeNaMDOaE2nFfdiMcmKXgRsUQ3xlWt/t0iK/LYtTSsE/aGZUinDIlhe510F2skGJjBJKj9L8nsnqEGJw3U/KvX1o4mBXpHOFVNtfvXh0RnpuljDC6RHgLabLK5iStR4Op24NDl2cejL9hPdsJrUFcHZQRRleQ348BLSI8/9Jikc4QXuYq6buRuvWodhMfEY+uNlfOdWu6zFu8JYwNJt+FioVmcfOwAW/TdI+WIa4UGvQ3vbsunA2xdrI1tyD+yPEsHJIfO85xPwhr1VdxWMDePvoMB3DYIjE5BKJHQ1kbOFdiAXuzhGe3AYcsx46TCySkfJmxw076LGTsmvDMduCxRQZyXcH2C3hl2gPM1WqRLXiuVbamFVkEEqwI8368q9aD1TUhPmvFrM7eIhPZLvF0ItmDexrurbS6QbQihH9BUNaWR7lvuf0JPNSnPVg8Ui/h2ehGHvMZXSEjWQUSNrgm8BiQ5j5xg4MG5QN47N07lLXlUYl70vUie2bdvm6+bWFURXgmzEaA7Dj2IrILJPR0Yn/R1+JvijUqQNJcaf22435gXyK8QsZTqs5syQpKTYR3vvyUYp3sS7hYR5gB+5F97S9Qz4hP5zI3A488RyGKCcSZS035mkg6IaE4tqtyrc6RNK6W1CgS6dTFkjRulVL8HFBJF+sIO6t1RC3JFkZSxCdHUliOBf7dMIR7/PKcLYwk6NxKOtZwV8zluAl5Lel4L7bjTkN815q9pMOKUW8jvMipmMVqt6IR7onA23gP43bEr0yzpEOP7VqG65GID8ZZ/c5uYxaz9Pcj6Vco5Y09iMsRv3C9lbTMYhb+MsTflZ1ypTo+kBHGvYhPoMySFn3WA4zLkbSZrVN29nC+RPJYjSPfwXg4km4D6pxZLDb5BzcXemIztQU/YvMeg+QTiTLLit0u8Vb7IPkwcTCQvCJRDrIioUh+YSgmDiaSXyTKQToWipQRhmLiSIHkyW7dxqwPVTpIDYsPvl9JGWHos/seRjokzz7JfQ94Jw1aFfHW4o2UWWCUWRrMVj1Bg4hPy2op9IByLPANKKrtth6ErHfOb8DtLPJQFjeet3iuo0mBKHLTyrKGqk8t15/cuHbjYzgMlp2wcKggdKXWeanBJdQ5ednMBZtnNCuQI+IrP7eoi+NNv5MbH+GbnVFFE8QwuvEtvCXV32uLkfQ0YPZOJEyaF4gi/uyA9scaUDdLGJ9Ofur4657/5mv4F1/HcDJqRr/TCyeOX9E4XQhECSuqulwjjJJM8C7Vgg6o4cgtBX0gbmj3iy2MUug1eU0G43fRjQU5pZIs15qY3PipVHIiJd1YkFOCNfkG3po0mT1pBJ3bo9XoThxKlxbklGBNNNO1gcFkQkexxl10L5AjTii6P/AW5nbFopbiqocM1SV06WLdhrbND26X9lpaYDyUxY2Nm8NnaxGHshoLco74VpnMK4l75XgJ6y+t7obHsFqBHDGh3MkCL4x3axTGkdUL5EgQip5TGLFuJvgSkdW4UfdhAjnjJOs1Yj1WRS3E3o1rE8bnmEDuIVgVzX712Cf2WFC5ha9Atv2iWzCBXEAorVeRqFhG1Fc1eymnZfkfTBT/jgnkEYg/NqqC0XMXI+pmgrcU5j49AhNIJMG66JmMEV4wOgaUYcHNORT9aa5TJCaQBJyI5igWHafnOWJYcBM/HH/qn5kYEmACKUAQ0Ff4XCzHQ1FHlvPfnQD+gGEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYd/J/oruAikD7gRIAAAAASUVORK5CYII="}),Object(s.jsx)(r,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARbSURBVHgB7d3hbdxGEIDRYeACnApy7iDpQK7A7sBXQjqQ04FdgeUKkg6kVGB1EKYDpQJmCVGA4ThjA1wul9J7wIB/hcN9x10edYwAAAAAAAAAAAAAAADgSIbYyTRNz8vhtMzzgP+6W+Z2GIa72EHTQEoUF+XwqszruA8DvtdY5qbMxxLLTTTSJJASxrkcLkMU1DGWeVtC+Rgb2zSQEsapHD6UuQiobyzzsoQyxkZ+iI0sy6lPIQ62cyrzqbzXXsdGNglkWVJdh80325vfY7+X99yb2ED1JdZy5rgOaO9ce19SNZBlzzHHcQpob74U/EvNPUntJZYrVexpXm59iIqqBbLsO84B+7qouR+ptsQqf9R8xerngP2NZZn1IiqocgYpccxhiINenJaLRavVWmJtcokNVngVFdQK5CKgL1W+PKyyBymnsymgPz+uvQt49Rlk2X9Aj06xUo0llttJ6NVPsdKz6MNV3N/rDw8uYv33aqs/vHsJ5KbFvf0cR1m6z/vjc+xss9vd4TEQCCQEAgmBQEIgkBAIJAQCCYFAQiCQEAgkBAIJgUBCIJAQCCQEAgmBNDT/uN60nl+QaUggkBAIJAQCCYFAQiCQEAgkBAIJgUBCIJAQCCQEAgmBQEIgkBAIJAQCCYFAQiCQEAgkBAIJgUBCIJAQCCQEAgmBQEIgkBAIJAQCCYFAQiCQEAgkBAIJgUDiWdDSTZlzrPNn0IxAGhqGYSyHMTgMSyxICAQSAoGEQCAhEEgIBBICgYRAICEQSAgEEgKBhEAgIRBICAQSAoGEQBqapuk8rfcmaEYgkBAIJAQCCYFAQiCQEAgkBAIJgUBCIJAQCCQEAgmBQEIgkBAIJAQCCc8HaeuvMlexzt9BMwJpaBiG+elQnhB1IJZYkBAIJAQCCYFAQiCQEAgkBAIJgUBCIJAQCCQEAgmBQEIgkBAIJAQCicP8P8g0TadyuAyeilN04BCBLHFcRycvGocxxkrdL7HEwQr/xEpdByIOVhpjpW4DEQcr3Q7DcBcrdRmIOKjgJiroLhBxUMn7qKCrQMRBJVdleTVGBd0EIg4q+i0q6SWQU4iDOt7VOnvMhlipfPJfxP2bG/Y2ljheREXuxeKxGMu8jMpqBHIK2NdY5mXNpdUDZxCO7iY2imMmEI5q/pb81xLGZnHMPP6Ao5nDeFfmfY1bSb5FIPRuXOa2zB/LM1aaeSyBvC0vXLUvh+DBY9iDiIPNHD0QcbCpIwciDjZ31EDEQRNHDEQcNHO0QMRBU0cKRBw0d5RAxMEujhCIONhN74GIg131HIg42F2vgYiDLvQYiDjoRm+BiIOu9BSIOOhOL4GIgy71EIg46NbegYiDru0ZiDjo3l6BiIND2CMQcXAYrQMRB4fSMhBxcDitAhEHT9M0TecpdxnwVH0jEHHwtCWBiAP+JxBxwOwrgYgDHnwRiDjgc58FIg740hKIOOBrShzPAwAAAAAAAAAAAAAAAKAD/wIlh/TqCk3dfwAAAABJRU5ErkJggg=="}),Object(s.jsx)(r,{src:"data:image/png;base64,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"})]})}},59:function(A,e,i){"use strict";i(0);var t=i(48),a=i.p+"static/media/default profile icon.591db299.png",c=i(2);const o=t.a.img`
  height: 50%;
  border-radius: 50%;
`;e.a=({className:A})=>Object(c.jsx)(o,{className:A,src:a})},64:function(A,e,i){"use strict";i.d(e,"a",(function(){return t}));i(50);const t=A=>({type:"SET_CURRENT_CLASS",payload:A})},68:function(A,e,i){"use strict";i.d(e,"a",(function(){return o}));var t=i(6),a=i(11);const c=Object(t.a)((()=>a.c.getState()),(A=>A.class)),o=Object(t.a)(c,(A=>A.currentClass))},69:function(A,e,i){"use strict";i.d(e,"a",(function(){return E}));var t=i(12),a=i(48),c=i(64),o=i(49),s=i(50),n=i(2);const E=A=>Object(n.jsx)(d,{selected:A.selected,"data-cid":A.value.cid,className:A.className,children:A.value.className}),g=a.a.form`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
`,r=a.a.select`
  height: 100%;
  padding: 0.5rem;
  border: 0px;
  outline: 0px;
  font-size: 25px;
  color: ${o.a.COLOR.GREEN};
  background-color: ${o.a.COLOR.GRAY};
`,d=a.a.option`
  color: ${A=>A.selected?"lightgrey":"black"};
`;e.b=A=>{const e=Object(t.b)();return Object(n.jsx)(g,{action:A.action,children:Object(n.jsx)(r,{id:"services",name:"services",onChange:A=>{const i=Array.from(A.target.children).filter((A=>A.selected)).map((A=>A.dataset.cid))[0];s.b.doc(i).get().then((A=>e(Object(c.a)(A.data()))))},children:A.children})})}},86:function(A,e,i){"use strict";i.r(e);var t=i(0),a=i(23),c=i(58),o=i(57),s=i(48),n=i(49),E=i(51),g=i(5),r=i(50),d=i(69),C=i(12),B=i(68),l=i(14),I=i(61),h=i(2);const Q=s.a.div`
  margin-top: ${n.a.HEADER_HEIGHT};
  margin-left: ${n.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,u=s.a.p`
  line-height: 36px;
  font-size: 30px;
  font-weight: 600;
`,x=s.a.p`
  font-size: 20px;
`,p=s.a.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`,R=s.a.form`
  display: flex;
  flex-direction: column;
  outline: none;
  width: 90%;
  max-width: 600px;
  margin-top: 60px;
`,m=s.a.input`
  border: none;
  border-bottom: 1px solid black;
  height: 60px;
  margin-bottom: 70px;
  font-size: 30px;
  outline: none;
`,j=Object(s.a)(E.a)`
  font-size: 25px;
  height: 70px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${n.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,b=Object(s.a)(E.a)`
  font-size: 15px;
  height: 50px;
  padding: 0 5px;
  min-width: 120px;
  background-color: ${n.a.COLOR.LIGHT_GREEN};
  &:hover {
    cursor: pointer;
  }
`,O=s.a.p`
  color: red;
`,J=s.a.p`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;e.default=()=>{const A=Object(g.g)(),[e,i]=Object(t.useState)(),s=Object(C.c)(B.a),n=Object(C.c)(l.b);return Object(h.jsxs)(a.a,{title:"Add a Student",description:"Add a Student",children:[Object(h.jsx)(c.a,{}),Object(h.jsx)(o.a,{}),Object(h.jsxs)(Q,{children:[Object(h.jsx)(u,{children:"Add Students to a Class"}),Object(h.jsx)(x,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac purus eget lacus pellentesque consequat. Donec commodo tincidunt lorem, c ursus accumsan eros varius vel."}),Object(h.jsxs)(R,{id:"studentsForm",children:[Object(h.jsx)(J,{children:"Student's Email"}),Object(h.jsx)(m,{type:"text",name:"email",required:!0}),Object(h.jsx)(J,{children:"Add to Class"}),Object(h.jsx)(d.b,{children:n.map((A=>Object(h.jsx)(d.a,{selected:A.cid===(null===s||void 0===s?void 0:s.cid)?"selected":"",value:A,classItem:A})))}),Object(h.jsx)(O,{children:e}),Object(h.jsxs)(p,{children:[Object(h.jsx)(j,{onClick:()=>{i();const A=Object.values(document.forms.studentsForm).reduce(((A,e)=>(A[e.name]=e.value,A)),{});""!==A.email&&A.email.includes("@")?r.d.where("email","==",A.email).get().then((A=>{var e;const t=null===(e=A.docs[0])||void 0===e?void 0:e.data();void 0!==t&&"student"===t.accountType?t.classList.map((A=>A.cid)).includes(s.cid)?i("Student already in class"):(r.b.doc(s.cid).update({students:I.a.firestore.FieldValue.arrayUnion({uid:t.uid,displayName:t.displayName,email:t.email})}),r.d.doc(t.uid).update({classList:I.a.firestore.FieldValue.arrayUnion({cid:s.cid,modules:s.modules,className:s.className})}),i(`Added ${t.displayName} to ${s.className}`),document.getElementById("studentsForm").reset()):i("Student not found")})):i("Please enter a valid email")},children:"ADD TO CLASS"}),Object(h.jsx)(b,{onClick:()=>A.push("teacher/home"),children:"BACK TO DASHBOARD"})]})]})]})]})}}}]);
//# sourceMappingURL=7.14ca2cbc.chunk.js.map