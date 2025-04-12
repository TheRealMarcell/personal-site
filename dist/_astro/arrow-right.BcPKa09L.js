import{r as c}from"./index.BVOCwoKb.js";var u={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d;function w(){if(d)return l;d=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,r,o){var a=null;if(o!==void 0&&(a=""+o),r.key!==void 0&&(a=""+r.key),"key"in r){o={};for(var i in r)i!=="key"&&(o[i]=r[i])}else o=r;return r=o.ref,{$$typeof:e,type:s,key:a,ref:r!==void 0?r:null,props:o}}return l.Fragment=t,l.jsx=n,l.jsxs=n,l}var p;function f(){return p||(p=1,u.exports=w()),u.exports}var y=f();const P={headingText:"Focused, curious, driven. I strive to find the balance between cleanly-written code, happy users and delivering on-time.",internships:[{title:"Telkomsel",role:"Software Engineer Intern 🚀",description:`Worked within the solution development team as a full-stack developer to deliver software requirements to Telkomsel's internal teams.
      Developed a kanban-style project management app with forum functionality. Revamped the internal Tech Radar to integrate with a Go backend.`,stack:["Next.js","TypeScript","Golang","PostgreSQL"],image:"/src/assets/telkomsel.svg"},{title:"InSite Project Solutions",role:"Software Engineer Intern 💻",description:`Worked as a full-stack engineer to develop a Linux-based monitoring solution to track
      CPU, GPU and Network metrics to optimise usage. Implemented CI/CD pipelines to streamline development.`,stack:["React","Django (Python)","PostgreSQL"],image:"/src/assets/insite.svg"}]};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),R=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase()),m=e=>{const t=R(e);return t.charAt(0).toUpperCase()+t.slice(1)},h=(...e)=>e.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=c.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:r="",children:o,iconNode:a,...i},v)=>c.createElement("svg",{ref:v,...C,width:t,height:t,stroke:e,strokeWidth:s?Number(n)*24/Number(t):n,className:h("lucide",r),...i},[...a.map(([k,x])=>c.createElement(k,x)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=(e,t)=>{const n=c.forwardRef(({className:s,...r},o)=>c.createElement(E,{ref:o,iconNode:t,className:h(`lucide-${g(m(e))}`,`lucide-${e}`,s),...r}));return n.displayName=m(e),n};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],_=j("arrow-right",A);export{_ as A,j as c,y as j,P as s};
