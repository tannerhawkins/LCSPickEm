(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[22],{218:function(e,a,r){"use strict";r.r(a);var t=r(2),s=r(70),i=r(69),n=r(64),c=r(101),d=r(36),o=r(25),l=r(18),p=r(22),h=r(20),j=r.p+"static/media/gear icon.9fac98a9.png",m=r(65),u=r(11),b=r(35),x=r(5);const w=n.a.div``,g=n.a.img`
  width: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`,O=n.a.p`
  color: red;
`,f=n.a.input`
  font-size: 18px;
  width: 50%;
  margin: 10px;
  background-color: white;
  padding: 10px;
  border-radius: 0.5em;
`,P=n.a.div`
  margin-top: ${o.a.HEADER_HEIGHT};
  margin-left: ${o.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,E=Object(n.a)(m.a)`
  font-size: 18px;
  padding: 5px;
  margin: 30px;
  width: 150px;
  background-color: ${o.a.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`,v=n.a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,y=n.a.div`
  background-color: ${o.a.COLOR.DARK_GREEN};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 10px;
  margin: 0px 10px;
  border-radius: 0.5em;
`,N=n.a.p`
  color: ${o.a.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  margin-right: 20px;
`,R=n.a.div`
  display: flex;
  align-items: center;
`,C=n.a.p`
  font-size: 20px;
  line-height: 43px;
  font-weight: 500;
`,k=n.a.p`
  font-size: 18px;
  width: 50%;
  margin: 10px;
  background-color: white;
  padding: 10px;
  border-radius: 0.5em;
`;a.default=()=>{const e=Object(l.c)(p.i),a=Object(u.g)(),r=Object(l.b)(),[n,m]=Object(t.useState)(),[A,D]=Object(t.useState)(!1);return Object(x.jsx)(d.a,{title:"Dashboard",description:"Dashboard",children:Object(x.jsxs)(w,{children:[Object(x.jsx)(s.a,{}),Object(x.jsx)(i.a,{}),Object(x.jsx)(c.a,{}),Object(x.jsxs)(P,{children:[Object(x.jsx)(v,{children:Object(x.jsx)(R,{children:Object(x.jsx)(N,{children:"Profile"})})}),Object(x.jsx)(y,{children:Object(x.jsxs)("form",{id:"profileForm",children:[Object(x.jsx)(g,{src:j,onClick:()=>{D(!A),m("")}}),Object(x.jsx)(C,{children:"Display Name"}),A?Object(x.jsx)(f,{name:"name",defaultValue:e.displayName}):Object(x.jsx)(k,{children:e.displayName}),Object(x.jsx)(C,{children:"Email"}),A?Object(x.jsx)(f,{type:"email",name:"email",deafultValue:e.email}):Object(x.jsx)(k,{children:e.email}),A?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{children:"Current Password"}),Object(x.jsx)(f,{name:"currPassword",type:"password"}),Object(x.jsx)(C,{children:"New Password"}),Object(x.jsx)(f,{name:"newPassword",type:"password"}),Object(x.jsx)(C,{children:"Confirm New Password"}),Object(x.jsx)(f,{name:"newPasswordConfirm",type:"password"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{children:"Password"}),Object(x.jsx)(k,{children:"*".repeat(e.passwordLength)})]}),Object(x.jsx)(O,{children:n}),A&&Object(x.jsx)(E,{style:{backgroundColor:`${o.a.COLOR.LIGHT_GREEN}`},onClick:()=>{m("");const a=Object.values(document.forms.profileForm).reduce(((e,a)=>(e[a.name]=a.value,e)),{});if(a.name!==e.displayName){if(""===a.currPassword)return void m("Enter password to change display name");h.a.signInWithEmailAndPassword(e.email,a.currPassword).then((()=>{h.a.currentUser.updateProfile({displayName:a.name}).then((()=>{})).catch((e=>{m(e.message),error=!0}))})).then(h.d.doc(h.a.currentUser.uid).update({displayName:a.name}).then(h.d.doc(h.a.currentUser.uid).get().then((e=>{r(Object(b.b)(e.data()))})))).catch((e=>{m(e.message)}))}if(a.email!==e.email){if(""===a.currPassword)return void m("Enter password to change email");h.a.signInWithEmailAndPassword(e.email,a.currPassword).then((()=>{h.a.currentUser.updateEmail(a.email).then((()=>{h.d.doc(h.a.currentUser.uid).update({email:a.email}).then((()=>h.d.doc(h.a.currentUser.uid).get().then((e=>r(Object(b.b)(e.data()))))))})).catch((e=>{m(e.message),error=!0}))})).catch((e=>{m(e.message)}))}if(""!==a.currPassword&&""!==a.newPassword){if(a.newPasswordConfirm!==a.newPassword)return void m("New password must match");h.a.signInWithEmailAndPassword(e.email,a.currPassword).then((()=>{a.currPassword!==a.newPassword?h.a.currentUser.updatePassword(a.newPassword).then((()=>{r(Object(b.a)(a.newPassword.length))})).catch((e=>{m(e.message)})):m("New password must be different than old password")})).catch((e=>{m(e.message)}))}D(!1)},children:"Submit"})]})}),Object(x.jsx)(E,{"data-test":"home",onClick:()=>a.push("/student/home"),children:"Back to Home"})]})]})})}},65:function(e,a,r){"use strict";var t=r(25);const s=r(64).a.div`
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
`;a.a=s}}]);
//# sourceMappingURL=22.9dd9f56b.chunk.js.map