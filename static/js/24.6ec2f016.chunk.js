(this.webpackJsonpAncientPathAdventures=this.webpackJsonpAncientPathAdventures||[]).push([[24],{238:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n(36),d=n(72),i=n(73),r=n(66),o=n(25),u=n(68),l=n(67),s=n(16),p=n(11),b=n(69),j=n(85),h=n(5);const E=r.a.div`
  margin-top: ${o.a.HEADER_HEIGHT};
  margin-left: ${o.a.SIDEBAR_WIDTH};
  padding: 0 50px;
`,f=r.a.p`
  color: red;
`,O=r.a.p`
  font-size: 36px;
  line-height: 43px;
  font-weight: 500;
`,v=Object(r.a)(l.a)`
  height: 60px;
  width: 130px;
  margin-top: 40px;
  background-color: ${o.a.COLOR.DARK_GREEN};
`;e.default=()=>{const t=Object(s.b)(),e=Object(p.g)(),n=Object(s.c)(b.h),r=Object(s.c)(b.g),o=Object(s.c)(b.e),[l,y]=Object(c.useState)("");return Object(h.jsxs)(a.a,{title:"Edit Video Step",description:"Edit Video Step",children:[Object(h.jsx)(d.a,{}),Object(h.jsx)(i.a,{}),Object(h.jsx)(j.a,{}),Object(h.jsxs)(E,{children:[Object(h.jsx)(O,{children:"Edit Video"}),Object(h.jsx)("input",{id:"url",type:"url","data-test":"video",defaultValue:null===r||void 0===r?void 0:r.data}),Object(h.jsx)(f,{children:l}),Object(h.jsx)(v,{type:"submit",onClick:()=>{const c=document.getElementById("url").value;if(void 0!=c||""!=c){var a=c.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/);if(!a||11!=a[2].length)return void y("Please enter valid Youtube URL");const d=`//www.youtube.com/embed/${a[2]}?rel=0`;t(void 0!==r?Object(u.h)({type:"video",order:r.order,id:r.id,data:d}):Object(u.a)({type:"video",order:n.length,id:o,data:d})),e.push("/teacher/create-module")}else y("Please enter valid Youtube URL")},"data-test":"submit",children:"Submit"})]})]})}},67:function(t,e,n){"use strict";var c=n(25);const a=n(66).a.div`
  background-color: ${c.a.COLOR.LIGHT_GREEN};
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
`;e.a=a},68:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return d})),n.d(e,"a",(function(){return i})),n.d(e,"h",(function(){return r})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return u})),n.d(e,"c",(function(){return l}));const c=t=>({type:"SET_CURRENT_STEP",payload:t}),a=t=>({type:"SET_SELECTED_MODULE",payload:t}),d=t=>({type:"SET_SELECTED_STEP",payload:t}),i=t=>({type:"ADD_STEP",payload:t}),r=t=>({type:"UPDATE_STEP",payload:t}),o=t=>({type:"SET_STEPS",payload:t}),u=t=>({type:"SET_TITLE",payload:t}),l=t=>({type:"SET_DESCRIPTION",payload:t})},69:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return l})),n.d(e,"e",(function(){return s})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return b}));var c=n(13),a=n(22);const d=Object(c.a)((()=>a.c.getState()),(t=>t.module)),i=Object(c.a)(d,(t=>t.inModule)),r=Object(c.a)(d,(t=>t.currentStep)),o=Object(c.a)(d,(t=>t.selectedModule)),u=Object(c.a)(d,(t=>t.selectedStep)),l=Object(c.a)(o,(t=>null===t||void 0===t?void 0:t.steps)),s=Object(c.a)(l,(t=>0===t.length?0:Math.max(...t.map((t=>t.id)))+1)),p=Object(c.a)(r,l,((t,e)=>e[t].data)),b=Object(c.a)(r,l,((t,e)=>(t+1)/(e.length+1)*100))}}]);
//# sourceMappingURL=24.6ec2f016.chunk.js.map