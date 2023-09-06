"use strict";(self.webpackChunkthis=self.webpackChunkthis||[]).push([[608],{9608:function(t,e,n){n.r(e);var a=n(4165),r=n(5861),c=n(4942),s=n(1413),i=n(885),o=n(2791),u=n(7689),l=n(9085),d=n(8898),p=n(6725),h=n(6536),f=n(9492),m=n(488),g=n(1289),v=n(7263),x=n(184);e.default=function(){var t=(0,u.s0)(),e=(0,d.G)().getUserProfile_c,n=(0,o.useState)(e()),y=(0,i.Z)(n,2),Z=y[0],b=(y[1],(0,o.useState)(!1)),w=(0,i.Z)(b,2),_=w[0],j=w[1],D=(0,o.useState)([{}]),k=(0,i.Z)(D,2),N=k[0],S=k[1],C=(0,o.useState)(""),R=(0,i.Z)(C,2),P=R[0],A=R[1],E=(0,o.useState)({startingDate:null,endingDate:null,city_id:null}),L=(0,i.Z)(E,2),F=L[0],O=L[1],I=new Date,q="".concat(I.getFullYear(),"-").concat(String(I.getMonth()+1).padStart(2,"0"),"-").concat(String(I.getDate()).padStart(2,"0"));(0,h.Z)("Full Reports"),(0,o.useEffect)((function(){var e;Object.keys(Z).length&&(null===(e=Z.role)||void 0===e?void 0:e.toLowerCase().trim())!==p.t.USER?function(){U.apply(this,arguments)}():t("/")}),[]);var T=function(t){O((0,s.Z)((0,s.Z)({},F),{},(0,c.Z)({},t.target.name,t.target.value)))};function U(){return(U=(0,r.Z)((0,a.Z)().mark((function t(){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return j(!0),t.prev=1,t.next=4,(0,f.ze)({_pageNo:0,_count:999});case 4:e=t.sent,S(e.data.cities),j(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),l.Am.error(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}var M=function(){var t=(0,r.Z)((0,a.Z)().mark((function t(){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(F.startingDate||F.endingDate||(l.Am.info("Please select atleast one date"),0)){t.next=2;break}return t.abrupt("return");case 2:return j(!0),t.prev=3,t.next=6,(0,m.aP)(F);case 6:if(!((e=t.sent).status>=400)){t.next=11;break}return l.Am.error(e.message.message),j(!1),t.abrupt("return");case 11:return t.next=13,(0,g.IN)({data:e.data,center:P});case 13:j(!1),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(3),l.Am.error(t.t0.message),j(!1);case 20:case"end":return t.stop()}}),t,null,[[3,16]])})));return function(){return t.apply(this,arguments)}}();return(0,x.jsxs)(v.xc,{title:"Full Reports",isLoading:_,children:[(0,x.jsxs)("div",{className:"row",children:[(0,x.jsxs)("div",{className:"col-6",children:[(0,x.jsx)("h5",{children:"Starting Date"}),(0,x.jsx)("input",{type:"date",name:"startingDate",className:"form-control",value:F.startingDate||"",max:F.endingDate||q,onChange:T})]}),(0,x.jsxs)("div",{className:"col-6",children:[(0,x.jsx)("h5",{children:"Ending Date"}),(0,x.jsx)("input",{type:"date",name:"endingDate",className:"form-control",value:F.endingDate||"",max:q,min:F.startingDate||"",onChange:T})]})]}),(0,x.jsx)("div",{className:"row mt-5",children:(0,x.jsxs)("div",{className:"col-6",children:[(0,x.jsxs)("h5",{children:["Center  ",(0,x.jsx)("i",{style:{fontWeight:"normal"},children:"(optional)"})]}),(0,x.jsxs)("select",{className:"form-control",name:"city_id",onChange:function(t){T(t),A(t.target.options[t.target.selectedIndex].text.toLocaleLowerCase().includes("select center")?"":t.target.options[t.target.selectedIndex].text)},disabled:_,children:[(0,x.jsx)("option",{value:"",children:"Select Center"}),N.map((function(t,e){return(0,x.jsx)("option",{value:t.id,children:t.name},e)}))]})]})}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsx)("div",{className:"row",children:(0,x.jsx)("div",{className:"col-12",children:(0,x.jsx)("button",{className:"btn btn-primary float-end",type:"button",onClick:M,children:"Generate Report"})})})]})}},7263:function(t,e,n){n.d(e,{Uy:function(){return o},xc:function(){return i}});var a=n(4849),r=n(3360),c=n(7689),s=n(184),i=function(t){var e=t.children,n=t.title,i=t.isLoading,o=t.paddingSmall,u=t.resetCookieAndLocalStorage,l=(0,c.s0)();return(0,s.jsxs)("div",{className:"my-8 card ",children:[(0,s.jsxs)("h1",{className:"card-header",children:[(0,s.jsx)("div",{className:"card-title m-0",children:(0,s.jsx)("h3",{className:"fw-bolder m-0",children:n})}),i?(0,s.jsxs)("div",{className:"card-subtitle card-title m-0",children:[(0,s.jsx)(a.Z,{as:"span",animation:"grow",size:"md",role:"status","aria-hidden":"true"}),(0,s.jsx)("p",{className:"m-0",children:"Loading ..."})]}):null,u&&(0,s.jsx)("div",{className:"card-subtitle card-title m-0",children:(0,s.jsx)(r.Z,{variant:"outline-danger",className:"m-0",onClick:function(){window.confirm("Are you sure you want to clear cache?")&&(u(),l("/"))},children:"Clear Form Cache"})})]}),(0,s.jsx)("div",{className:"card-body ".concat(i?"opacity-50":null),style:i?{pointerEvents:"none"}:{},children:(0,s.jsx)("div",{className:"".concat(o?"p-sm-0 px-md-3 px-lg-10":"p-sm-0 px-md-10 px-lg-20"),children:e})})]})},o=function(t){var e=t.children,n=t.styles;return(0,s.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:n,children:(0,s.jsx)("div",{className:"text-center",children:e})})}},6725:function(t,e,n){n.d(e,{t:function(){return a}});var a={ADMIN:"admin",USER:"user",RESEARCH_ASSISTANT:"Principal Investigator",DATA_COLLECTOR:"Data Collector"}},9492:function(t,e,n){n.d(e,{gC:function(){return d},Se:function(){return p},ze:function(){return l}});var a=n(1413),r=n(3144),c=n(5671),s=n(7976),i=(0,r.Z)((function t(){(0,c.Z)(this,t)}));i.listCities=function(t){var e="/api/city/list-cities?_pageNo=".concat(null===t||void 0===t?void 0:t._pageNo,"&_count=").concat(null===t||void 0===t?void 0:t._count);return s.Z.get(e)},i.createCity=function(t){return s.Z.post("api/city",(0,a.Z)({},t))},i.deleteCity=function(t){var e=t.id,n="api/city/".concat(e);return s.Z.delete(n)};var o=i,u=n(3984),l=function(t){return o.listCities(t).then((function(t){return{status:t.status,data:t.data,message:"success"}})).catch((function(t){return(0,u.Z)(t)}))},d=function(t){return o.createCity(t).then((function(t){return{status:t.status,data:t.data,message:"Request Success"}})).catch((function(t){return(0,u.Z)(t)}))},p=function(t){var e=t.id;return o.deleteCity({id:e}).then((function(t){return{status:t.status,data:t.data,message:"Request Success"}})).catch((function(t){return(0,u.Z)(t)}))}},488:function(t,e,n){n.d(e,{Np:function(){return l},aP:function(){return u},lC:function(){return d}});var a=n(3144),r=n(5671),c=n(7976),s=(0,a.Z)((function t(){(0,r.Z)(this,t)}));s.getFullReport=function(t){var e="/api/report/date?startingDate=".concat(t.startingDate,"&endingDate=").concat(t.endingDate,"&city_id=").concat(t.city_id);return c.Z.get(e)},s.getFrequencyReport=function(t){var e="/api/report/frequency?startingDate=".concat(t.startingDate,"&endingDate=").concat(t.endingDate,"&city_id=").concat(t.city_id);return c.Z.get(e)},s.getMeanReport=function(t){var e="/api/report/mean?startingDate=".concat(t.startingDate,"&endingDate=").concat(t.endingDate,"&city_id=").concat(t.city_id);return c.Z.get(e)};var i=s,o=n(3984),u=function(t){return i.getFullReport(t).then((function(t){return{status:t.status,data:t.data,message:"Success"}})).catch((function(t){return(0,o.Z)(t)}))},l=function(t){return i.getFrequencyReport(t).then((function(t){return{status:t.status,data:t.data,message:"Success"}})).catch((function(t){return(0,o.Z)(t)}))},d=function(t){return i.getMeanReport(t).then((function(t){return{status:t.status,data:t.data,message:"Success"}})).catch((function(t){return(0,o.Z)(t)}))}},1289:function(t,e,n){n.d(e,{$6:function(){return f},IN:function(){return l},Yi:function(){return p}});var a=n(4165),r=n(2982),c=n(5861),s=n(885),i=n(4045),o=function(t){var e=t.workbook,n=t.fileName,a=(0,i.cW)(e,{type:"array",bookType:"xlsx"}),r=new Blob([a],{type:"array",bookType:"xlsx"}),c=window.URL.createObjectURL(r),s=document.createElement("a");s.href=c,s.setAttribute("download","".concat(n," - ").concat((new Date).toISOString().split("T")[0],".xlsx")),document.body.appendChild(s),s.click()},u=function(t){var e={};return Object.keys(t).forEach((function(n){for(var a=[],r=t[n],c=Object.keys(r),i=0;i<c.length;i++){var o=[],u=c[i];o.push(u),o.push("");for(var l=r[u],d=0,p=Object.entries(l);d<p.length;d++){var h=(0,s.Z)(p[d],2),f=h[0],m=h[1];o.push(f),o.push(m)}a.push(o)}e[n]=a})),e};function l(t){return d.apply(this,arguments)}function d(){return(d=(0,c.Z)((0,a.Z)().mark((function t(e){var n,c,s,u,l,d,p,h,f,m,g;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.data,c=e.center,s=n.reportData,t.prev=2,u=[],l=[],d=[],p=i.P6.book_new(),s.forEach((function(t){u.push([].concat((0,r.Z)(t.patientDemoData),(0,r.Z)(t.patientSectionData))),l.push([].concat((0,r.Z)(t.caregiverDemoData),(0,r.Z)(t.caregiverSectionData))),d.push([].concat((0,r.Z)(t.childDemoData),(0,r.Z)(t.childSectionData)))})),h=i.P6.aoa_to_sheet(u),f=i.P6.aoa_to_sheet(l),m=i.P6.aoa_to_sheet(d),i.P6.book_append_sheet(p,h,"Patient"),i.P6.book_append_sheet(p,f,"Caregiver"),i.P6.book_append_sheet(p,m,"Child"),g="Full Report ".concat(c&&"- ".concat(c)),o({workbook:p,fileName:g}),t.abrupt("return",!0);case 19:return t.prev=19,t.t0=t.catch(2),t.abrupt("return",new Promise((function(t,e){e(!1)})));case 22:case"end":return t.stop()}}),t,null,[[2,19]])})))).apply(this,arguments)}function p(t){return h.apply(this,arguments)}function h(){return(h=(0,c.Z)((0,a.Z)().mark((function t(e){var n,r,c,s,l,d,p,h,f;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=e.data,r=e.center,t.prev=1,c=i.P6.book_new(),s=u(n),l=Object.keys(s),d=0;d<l.length;d++)p=l[d],h=i.P6.aoa_to_sheet(s[p]),f=[{wch:50},{wch:5}],h["!cols"]=f,i.P6.book_append_sheet(c,h,p);return o({workbook:c,fileName:"Frequency Report ".concat(r&&"- ".concat(r))}),t.abrupt("return",!0);case 10:throw t.prev=10,t.t0=t.catch(1),new Error(t.t0.message);case 13:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}function f(t){return m.apply(this,arguments)}function m(){return(m=(0,c.Z)((0,a.Z)().mark((function t(e){var n,c,s,u,l,d,p;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=e.data,c=e.center,t.prev=1,s=i.P6.book_new(),u=0;u<n.length;u++)l=n[u],d=i.P6.aoa_to_sheet([["Questions","Averages"]].concat((0,r.Z)(l.averages.map((function(t){return[t.question_text,t.avg]}))))),p=[{wch:50},{wch:10}],d["!cols"]=p,i.P6.book_append_sheet(s,d,l.entity);return o({workbook:s,fileName:"Mean Report ".concat(c&&"- ".concat(c))}),t.abrupt("return",!0);case 8:throw t.prev=8,t.t0=t.catch(1),new Error(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=608.5fc8d0d3.chunk.js.map