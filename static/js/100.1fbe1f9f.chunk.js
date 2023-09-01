"use strict";(self.webpackChunkthis=self.webpackChunkthis||[]).push([[100],{2100:function(e,t,n){n.r(t);var a=n(4165),r=n(5861),s=n(4942),i=n(1413),c=n(885),l=n(2791),o=n(9140),d=n(7689),u=n(9085),x=n(8898),h=n(6725),p=n(6536),m=n(9492),g=n(488),f=n(1289),j=n(7263),v=n(8564),b=n(184);t.default=function(){var e=(0,d.s0)(),t=(0,x.G)().getUserProfile_c,n=(0,l.useState)(t()),Z=(0,c.Z)(n,2),D=Z[0],y=(Z[1],(0,l.useState)(!1)),N=(0,c.Z)(y,2),S=N[0],k=N[1],w=(0,l.useState)([{}]),C=(0,c.Z)(w,2),_=C[0],A=C[1],L=(0,l.useState)(""),R=(0,c.Z)(L,2),E=R[0],G=R[1],I=(0,l.useState)({startingDate:null,endingDate:null,city_id:null}),M=(0,c.Z)(I,2),z=M[0],F=M[1],P=new Date,U="".concat(P.getFullYear(),"-").concat(String(P.getMonth()+1).padStart(2,"0"),"-").concat(String(P.getDate()).padStart(2,"0"));(0,p.Z)("Mean Reports"),(0,l.useEffect)((function(){var t;Object.keys(D).length&&(null===(t=D.role)||void 0===t?void 0:t.toLowerCase().trim())!==h.t.USER?function(){T.apply(this,arguments)}():e("/")}),[]);var O=function(e){F((0,i.Z)((0,i.Z)({},z),{},(0,s.Z)({},e.target.name,e.target.value)))};function T(){return(T=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.prev=1,e.next=4,(0,m.ze)({_pageNo:0,_count:999});case 4:t=e.sent,A(t.data.cities),k(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),u.Am.error(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function W(){return(W=(0,r.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z.startingDate||z.endingDate||(u.Am.info("Please select atleast one date"),0)){e.next=2;break}return e.abrupt("return");case 2:return k(!0),e.prev=3,e.next=6,(0,g.lC)(z);case 6:if(!((t=e.sent).status>=400)){e.next=11;break}return u.Am.error(t.message.message),k(!1),e.abrupt("return");case 11:return console.log({response:t}),e.next=14,(0,f.$6)({data:t.data,center:E});case 14:k(!1),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(3),u.Am.error(e.t0.message),k(!1);case 21:case"end":return e.stop()}}),e,null,[[3,17]])})))).apply(this,arguments)}return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(j.xc,{title:"Mean Reports",isLoading:S,children:[(0,b.jsxs)("div",{className:"row",children:[(0,b.jsxs)("div",{className:"col-6",children:[(0,b.jsx)("h5",{children:"Starting Date"}),(0,b.jsx)("input",{type:"date",name:"startingDate",className:"form-control",value:z.startingDate||"",max:z.endingDate||U,onChange:O,disabled:S})]}),(0,b.jsxs)("div",{className:"col-6",children:[(0,b.jsx)("h5",{children:"Ending Date"}),(0,b.jsx)("input",{type:"date",name:"endingDate",className:"form-control",value:z.endingDate||"",max:U,min:z.startingDate||"",onChange:O,disabled:S})]})]}),(0,b.jsx)("div",{className:"row mt-5",children:(0,b.jsxs)("div",{className:"col-6",children:[(0,b.jsxs)("h5",{children:["Center  ",(0,b.jsx)("i",{style:{fontWeight:"normal"},children:"(optional)"})]}),(0,b.jsxs)("select",{className:"form-control",name:"city_id",onChange:function(e){O(e),G(e.target.options[e.target.selectedIndex].text.toLocaleLowerCase().includes("select center")?"":e.target.options[e.target.selectedIndex].text)},disabled:S,children:[(0,b.jsx)("option",{value:"",children:"Select Center"}),_.map((function(e,t){return(0,b.jsx)("option",{value:e.id,children:e.name},t)}))]})]})}),(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),v.D.map((function(e,t){return(0,b.jsxs)("div",{children:[(0,b.jsx)(o.Z,{className:"border-1",children:(0,b.jsxs)(o.Z.Text,{children:[(0,b.jsxs)("b",{children:[(0,b.jsxs)("span",{style:{fontSize:"1.1rem"},children:[" ",e.heading," "]})," -- Includes ",">"," "]}),"  ",e.reportColumns.join(", ")]})},t),(0,b.jsx)("br",{})]},t)})),(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),(0,b.jsx)("div",{className:"row",children:(0,b.jsx)("div",{className:"col-12",children:(0,b.jsxs)("button",{className:"btn btn-primary float-end",type:"button",onClick:function(){return W.apply(this,arguments)},disabled:S,children:[" ",S?"Generating ...":"Generate Report"]})})})]})})}}}]);
//# sourceMappingURL=100.1fbe1f9f.chunk.js.map