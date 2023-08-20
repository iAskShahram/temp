"use strict";(self.webpackChunkthis=self.webpackChunkthis||[]).push([[186],{186:function(e,t,n){n.r(t);var a=n(4165),r=n(5861),s=n(4942),i=n(1413),c=n(885),l=n(2791),o=n(9140),d=n(7689),u=n(9085),x=n(8898),h=n(6725),p=n(6536),m=n(9492),g=n(488),f=n(1289),j=n(7263),v=n(8564),b=n(184);t.default=function(){var e=(0,d.s0)(),t=(0,x.G)().getUserProfile_c,n=(0,l.useState)(t()),Z=(0,l.useState)(!1),y=(0,c.Z)(Z,2),D=y[0],N=y[1],S=(0,l.useState)([{}]),w=(0,c.Z)(S,2),k=w[0],C=w[1],_=(0,l.useState)(""),L=(0,c.Z)(_,2),R=L[0],A=L[1],E=(0,l.useState)({startingDate:null,endingDate:null,city_id:null}),F=(0,c.Z)(E,2),G=F[0],I=F[1],q=new Date,z="".concat(q.getFullYear(),"-").concat(String(q.getMonth()+1).padStart(2,"0"),"-").concat(String(q.getDate()).padStart(2,"0"));(0,p.Z)("Frequency Reports"),(0,l.useEffect)((function(){var t;Object.keys(n).length&&(null===(t=n.role)||void 0===t?void 0:t.toLowerCase().trim())!==h.t.USER?function(){U.apply(this,arguments)}():e("/")}),[]);var P=function(e){I((0,i.Z)((0,i.Z)({},G),{},(0,s.Z)({},e.target.name,e.target.value)))};function U(){return(U=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.prev=1,e.next=4,(0,m.z)({_pageNo:0,_count:999});case 4:t=e.sent,C(t.data.cities),N(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),u.Am.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var Y=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(G.startingDate||G.endingDate||(u.Am.info("Please select atleast one date"),0)){e.next=2;break}return e.abrupt("return");case 2:return N(!0),e.next=5,(0,g.Np)(G);case 5:if(!((t=e.sent).status>=400)){e.next=10;break}return u.Am.error(t.message.message),N(!1),e.abrupt("return");case 10:return e.next=12,(0,f.Yi)({data:t.data,center:R});case 12:N(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,b.jsxs)(j.xc,{title:"Frequency Reports",isLoading:D,children:[(0,b.jsxs)("div",{className:"row",children:[(0,b.jsxs)("div",{className:"col-6",children:[(0,b.jsx)("h5",{children:"Starting Date"}),(0,b.jsx)("input",{type:"date",name:"startingDate",className:"form-control",value:G.startingDate||"",max:G.endingDate||z,onChange:P,disabled:D})]}),(0,b.jsxs)("div",{className:"col-6",children:[(0,b.jsx)("h5",{children:"Ending Date"}),(0,b.jsx)("input",{type:"date",name:"endingDate",className:"form-control",value:G.endingDate||"",max:z,min:G.startingDate||"",onChange:P,disabled:D})]})]}),(0,b.jsx)("div",{className:"row mt-5",children:(0,b.jsxs)("div",{className:"col-6",children:[(0,b.jsxs)("h5",{children:["Center  ",(0,b.jsx)("i",{style:{fontWeight:"normal"},children:"(optional)"})]}),(0,b.jsxs)("select",{className:"form-control",name:"city_id",onChange:function(e){P(e),A(e.target.options[e.target.selectedIndex].text.toLocaleLowerCase().includes("select center")?"":e.target.options[e.target.selectedIndex].text)},disabled:D,children:[(0,b.jsx)("option",{value:"",children:"Select Center"}),k.map((function(e,t){return(0,b.jsx)("option",{value:e.id,children:e.name},t)}))]})]})}),(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),v.t.map((function(e,t){return(0,b.jsxs)("div",{children:[(0,b.jsx)(o.Z,{className:"border-1",children:(0,b.jsxs)(o.Z.Text,{children:[(0,b.jsxs)("b",{children:[(0,b.jsxs)("span",{style:{fontSize:"1.1rem"},children:[" ",e.heading," "]})," -- Includes ",">"," "]}),"  ",e.reportColumns.join(", ")]})}),(0,b.jsx)("br",{})]},t)})),(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),(0,b.jsx)("div",{className:"row",children:(0,b.jsx)("div",{className:"col-12",children:(0,b.jsxs)("button",{className:"btn btn-primary float-end",type:"button",onClick:Y,disabled:D,children:[" ",D?"Generating ...":"Generate Report"]})})})]})}}}]);
//# sourceMappingURL=186.1c3adada.chunk.js.map