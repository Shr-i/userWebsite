"use strict";(self.webpackChunkstudent_form_app=self.webpackChunkstudent_form_app||[]).push([[500],{5500:function(e,n,a){a.r(n),a.d(n,{default:function(){return q}});var o=a(2791),r=a(9434),t=a(7402),i=a(4554),d=a(7462),s=a(3366),v=a(8182),l=a(4419),u=a(7630),c=a(1046),f=a(5527),m=a(5878),p=a(1217);function Z(e){return(0,p.Z)("MuiCard",e)}(0,m.Z)("MuiCard",["root"]);var h=a(184),x=["className","raised"],C=(0,u.ZP)(f.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{overflow:"hidden"}})),j=o.forwardRef((function(e,n){var a=(0,c.Z)({props:e,name:"MuiCard"}),o=a.className,r=a.raised,t=void 0!==r&&r,i=(0,s.Z)(a,x),u=(0,d.Z)({},a,{raised:t}),f=function(e){var n=e.classes;return(0,l.Z)({root:["root"]},Z,n)}(u);return(0,h.jsx)(C,(0,d.Z)({className:(0,v.Z)(f.root,o),elevation:t?8:void 0,ref:n,ownerState:u},i))}));function w(e){return(0,p.Z)("MuiCardContent",e)}(0,m.Z)("MuiCardContent",["root"]);var b=["className","component"],M=(0,u.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,n){return n.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),R=o.forwardRef((function(e,n){var a=(0,c.Z)({props:e,name:"MuiCardContent"}),o=a.className,r=a.component,t=void 0===r?"div":r,i=(0,s.Z)(a,b),u=(0,d.Z)({},a,{component:t}),f=function(e){var n=e.classes;return(0,l.Z)({root:["root"]},w,n)}(u);return(0,h.jsx)(M,(0,d.Z)({as:t,className:(0,v.Z)(f.root,o),ownerState:u,ref:n},i))})),g=a(890);var k=function(e){return(0,h.jsx)(i.Z,{sx:{maxWidth:275},children:(0,h.jsx)(j,{variant:"outlined",children:(0,h.jsxs)(R,{children:[(0,h.jsx)(g.Z,{sx:{mb:1.5},color:"text.secondary",noWrap:!0,children:e.id}),(0,h.jsx)(g.Z,{variant:"h6",component:"div",noWrap:!0,children:e.name}),(0,h.jsx)(g.Z,{variant:"h6",component:"div",noWrap:!0,children:e.username}),(0,h.jsx)(g.Z,{variant:"body2",noWrap:!0,children:e.email})]})})})},N=a(5206),q=function(){var e=(0,r.v9)((function(e){return e.isLoading})),n=(0,r.v9)((function(e){return e.data})),a=(0,r.I0)();return(0,o.useEffect)((function(){a((0,t.Re)())}),[a]),(0,h.jsxs)("div",{id:"locationContainer",children:[(0,h.jsx)("div",{id:"headContainers",children:(0,h.jsx)("h1",{children:"Dashboard "})}),(0,h.jsx)("div",{id:"loadContainer",children:e&&(0,h.jsx)(N.Z,{})}),(0,h.jsx)("div",{id:"routeContainers",children:(0,h.jsx)("div",{id:"userDetailCard",children:n&&n.map((function(e){return(0,h.jsxs)("div",{id:"userCard",children:[" ",(0,h.jsx)(k,{id:e.id,name:e.name,username:e.username,email:e.email})]},e.id)}))})})]})}},5527:function(e,n,a){a.d(n,{Z:function(){return x}});var o=a(3366),r=a(7462),t=a(2791),i=a(8182),d=a(4419),s=a(2065),v=a(7630),l=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},u=a(1046),c=a(5878),f=a(1217);function m(e){return(0,f.Z)("MuiPaper",e)}(0,c.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var p=a(184),Z=["className","component","elevation","square","variant"],h=(0,v.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,n){var a=e.ownerState;return[n.root,n[a.variant],!a.square&&n.rounded,"elevation"===a.variant&&n["elevation".concat(a.elevation)]]}})((function(e){var n,a=e.theme,o=e.ownerState;return(0,r.Z)({backgroundColor:(a.vars||a).palette.background.paper,color:(a.vars||a).palette.text.primary,transition:a.transitions.create("box-shadow")},!o.square&&{borderRadius:a.shape.borderRadius},"outlined"===o.variant&&{border:"1px solid ".concat((a.vars||a).palette.divider)},"elevation"===o.variant&&(0,r.Z)({boxShadow:(a.vars||a).shadows[o.elevation]},!a.vars&&"dark"===a.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,s.Fq)("#fff",l(o.elevation)),", ").concat((0,s.Fq)("#fff",l(o.elevation)),")")},a.vars&&{backgroundImage:null==(n=a.vars.overlays)?void 0:n[o.elevation]}))})),x=t.forwardRef((function(e,n){var a=(0,u.Z)({props:e,name:"MuiPaper"}),t=a.className,s=a.component,v=void 0===s?"div":s,l=a.elevation,c=void 0===l?1:l,f=a.square,x=void 0!==f&&f,C=a.variant,j=void 0===C?"elevation":C,w=(0,o.Z)(a,Z),b=(0,r.Z)({},a,{component:v,elevation:c,square:x,variant:j}),M=function(e){var n=e.square,a=e.elevation,o=e.variant,r=e.classes,t={root:["root",o,!n&&"rounded","elevation"===o&&"elevation".concat(a)]};return(0,d.Z)(t,m,r)}(b);return(0,p.jsx)(h,(0,r.Z)({as:v,ownerState:b,className:(0,i.Z)(M.root,t),ref:n},w))}))}}]);
//# sourceMappingURL=500.25145bc5.chunk.js.map