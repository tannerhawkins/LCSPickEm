(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[29],{256:function(e,r,a){"use strict";a.r(r);var t=a(2),s=a(72),i=a(73),n=a(66),c=a(85),d=a(36),o=a(25),l=a(16),p=a(21),h=a(19),b=a.p+"static/media/gear icon.9fac98a9.png",m=a(67),j=a(11),u=a(37),x=a(5);const w=n.a.div``,g=n.a.img`
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
  @media (max-width: 500px) {
    margin: 0px 0px;
    padding: 0 5%;
  }
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
`;r.default=()=>{const e=Object(l.c)(p.j),r=Object(j.g)(),a=Object(l.b)(),[n,m]=Object(t.useState)(),[A,D]=Object(t.useState)(!1);return Object(x.jsx)(d.a,{title:"Dashboard",description:"Dashboard",children:Object(x.jsxs)(w,{children:[Object(x.jsx)(s.a,{}),Object(x.jsx)(i.a,{}),Object(x.jsx)(c.a,{}),Object(x.jsxs)(P,{children:[Object(x.jsx)(v,{children:Object(x.jsx)(R,{children:Object(x.jsx)(N,{children:"Profile"})})}),Object(x.jsx)(y,{children:Object(x.jsxs)("form",{id:"profileForm",children:[Object(x.jsx)(g,{src:b,onClick:()=>{D(!A),m("")}}),Object(x.jsx)(C,{children:"Display Name"}),A?Object(x.jsx)(f,{name:"name",defaultValue:e.displayName}):Object(x.jsx)(k,{children:e.displayName}),Object(x.jsx)(C,{children:"Email"}),A?Object(x.jsx)(f,{type:"email",name:"email",defaultValue:e.email}):Object(x.jsx)(k,{children:e.email}),A?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{children:"Current Password"}),Object(x.jsx)(f,{name:"currPassword",type:"password"}),Object(x.jsx)(C,{children:"New Password"}),Object(x.jsx)(f,{name:"newPassword",type:"password"}),Object(x.jsx)(C,{children:"Confirm New Password"}),Object(x.jsx)(f,{name:"newPasswordConfirm",type:"password"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(C,{children:"Password"}),Object(x.jsx)(k,{children:"*".repeat(e.passwordLength)})]}),Object(x.jsx)(O,{children:n}),A&&Object(x.jsx)(E,{style:{backgroundColor:`${o.a.COLOR.LIGHT_GREEN}`},onClick:()=>{m("");const r=Object.values(document.forms.profileForm).reduce(((e,r)=>(e[r.name]=r.value,e)),{});if(r.name!==e.displayName){if(""===r.currPassword)return void m("Enter password to change display name");h.b.signInWithEmailAndPassword(e.email,r.currPassword).then((()=>{h.b.currentUser.updateProfile({displayName:r.name}).then((()=>{})).catch((e=>{m(e.message),error=!0}))})).then(h.e.doc(h.b.currentUser.uid).update({displayName:r.name}).then(h.e.doc(h.b.currentUser.uid).get().then((e=>{a(Object(u.b)(e.data()))})))).catch((e=>{m(e.message)}))}if(r.email!==e.email){if(""===r.currPassword)return void m("Enter password to change email");h.b.signInWithEmailAndPassword(e.email,r.currPassword).then((()=>{h.b.currentUser.updateEmail(r.email).then((()=>{h.e.doc(h.b.currentUser.uid).update({email:r.email}).then((()=>h.e.doc(h.b.currentUser.uid).get().then((e=>a(Object(u.b)(e.data()))))))})).catch((e=>{m(e.message),error=!0}))})).catch((e=>{m(e.message)}))}if(""!==r.currPassword&&""!==r.newPassword){if(r.newPasswordConfirm!==r.newPassword)return void m("New password must match");h.b.signInWithEmailAndPassword(e.email,r.currPassword).then((()=>{r.currPassword!==r.newPassword?h.b.currentUser.updatePassword(r.newPassword).then((()=>{a(Object(u.a)(r.newPassword.length))})).catch((e=>{m(e.message)})):m("New password must be different than old password")})).catch((e=>{m(e.message)}))}D(!1)},children:"Submit"})]})}),Object(x.jsx)(E,{"data-test":"home",onClick:()=>r.push("/student/home"),children:"Back to Home"})]})]})})}},67:function(e,r,a){"use strict";var t=a(25);const s=a(66).a.div`
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
`;r.a=s}}]);
//# sourceMappingURL=29.46a7c8d5.chunk.js.map