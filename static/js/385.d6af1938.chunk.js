"use strict";(self.webpackChunkthis=self.webpackChunkthis||[]).push([[385],{7510:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var i=n(3360),r=n(1087),a=n(6536),o=n(7263),s=n(1413),d=n(4165),u=n(5861),c=n(885),l=n(2791),m=n(3513),p=n(5181),f=(n(3568),n(8185)),v=n(7689),h=n(9085),g=n(5142),x=n(4434),_=n(184),y=function(){var e=[{name:"Patient ID",selector:function(e){return e.id},cellExport:function(e){return e.id},cell:function(e){return e.id||""},wrap:!0,center:!0},{name:"Name",selector:function(e){return e.name},cellExport:function(e){return e.name},cell:function(e){return e.name||""},wrap:!0,center:!0},{name:"CNIC",selector:function(e){var t,n,i;return null===(t=e.demographic[0])||void 0===t||null===(n=t.demo_section_answer)||void 0===n||null===(i=n[0])||void 0===i?void 0:i.answer_text},cellExport:function(e){var t,n,i;return null===(t=e.demographic[0])||void 0===t||null===(n=t.demo_section_answer)||void 0===n||null===(i=n[0])||void 0===i?void 0:i.answer_text},cell:function(e){var t,n,i;return(null===(t=e.demographic[0])||void 0===t||null===(n=t.demo_section_answer)||void 0===n||null===(i=n[0])||void 0===i?void 0:i.answer_text)||""},wrap:!0,center:!0},{name:"DoB",selector:function(e){var t;return null===(t=e.demographic[0])||void 0===t?void 0:t.dob},cellExport:function(e){var t;return null===(t=e.demographic[0])||void 0===t?void 0:t.dob},cell:function(e){var t,n;return(null===(t=e.demographic[0])||void 0===t||null===(n=t.dob)||void 0===n?void 0:n.split("T")[0])||""},wrap:!0,center:!0},{name:"Created By",selector:function(e){var t;return null===(t=e.created_by)||void 0===t?void 0:t.name},cellExport:function(e){var t;return null===(t=e.created_by)||void 0===t?void 0:t.name},cell:function(e){var t;return(null===(t=e.created_by)||void 0===t?void 0:t.name)||""},wrap:!0,center:!0},{name:"Created At",selector:function(e){return e.created_at},cellExport:function(e){return e.created_at},cell:function(e){var t,n,i;return((null===(t=e.created_at)||void 0===t?void 0:t.split("T")[0])||"")+" "+((null===(n=e.created_at)||void 0===n||null===(i=n.split("T")[1])||void 0===i?void 0:i.split(".")[0])||"")},wrap:!0,center:!0},{name:"Action",sortable:!1,cell:function(e){return(0,_.jsx)("div",{className:"btn-group",children:(0,_.jsx)("button",{onClick:function(){return(t=e.id)?k("/edit-form-demo-patient",{state:{id:t}}):h.Am.error("No ID Found");var t},className:"btn btn-primary btn-sm",type:"button",name:"options",id:"option1",children:(0,_.jsx)(f.HlX,{})})})}}],t=(0,l.useState)(!1),n=(0,c.Z)(t,2),i=n[0],r=n[1],a=(0,l.useState)([]),o=(0,c.Z)(a,2),y=o[0],Z=o[1],j=(0,l.useState)(1),Q=(0,c.Z)(j,2),b=Q[0],D=Q[1],N=(0,l.useState)(10),w=(0,c.Z)(N,2),C=w[0],F=w[1],P=(0,l.useState)(0),E=(0,c.Z)(P,2),S=E[0],L=E[1],k=(0,v.s0)(),T={columns:e,data:y};(0,l.useEffect)((function(){H()}),[b,C]);var H=function(){var e=(0,u.Z)((0,d.Z)().mark((function e(){var t,n,i;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,e.next=4,(0,g.sT)({_pageNo:b,_count:C});case 4:i=e.sent,Z((null===(t=i.data)||void 0===t?void 0:t.patients)||[]),L((null===(n=i.data)||void 0===n?void 0:n.total)||0),r(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r(!1);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h3",{children:" Latest Filled Forms "}),(0,_.jsx)("div",{className:"card-body border-top p-9",children:(0,_.jsx)(p.Z,(0,s.Z)((0,s.Z)({},T),{},{children:(0,_.jsx)(m.ZP,{columns:e,data:y,noHeader:!0,highlightOnHover:!0,defaultSortField:"id",defaultSortAsc:!0,exportHeaders:!0,progressComponent:(0,_.jsx)(x.Z,{text:" Loading Forms ...",vh100:!1}),progressPending:i,title:"Latest Filled Forms",responsive:!0,pagination:!0,paginationServer:!0,paginationDefaultPage:b,paginationPerPage:C,paginationTotalRows:S,onChangePage:function(e){return D(Number(e))},onChangeRowsPerPage:function(e){return F(Number(e))}})}))})]})},Z=n(8898);var j=function(){var e=(0,(0,Z.G)().getUserProfile_c)();return(0,a.Z)("Index"),(0,_.jsxs)(o.xc,{title:"Home Page",children:[(0,_.jsx)(o.Uy,{children:(0,_.jsx)(r.rU,{to:"/form",children:(0,_.jsx)(i.Z,{variant:"primary",children:"Continue to Form"})})}),(0,_.jsx)(o.Uy,{styles:{marginTop:"32px"},children:(0,_.jsx)("div",{children:"admin"===(null===e||void 0===e?void 0:e.role)&&(0,_.jsx)(y,{})})})]})}},7263:function(e,t,n){n.d(t,{Uy:function(){return o},xc:function(){return a}});var i=n(4849),r=n(184),a=function(e){var t=e.children,n=e.title,a=e.isLoading,o=e.paddingSmall;return(0,r.jsxs)("div",{className:"my-8 card ",children:[(0,r.jsxs)("h1",{className:"card-header",children:[(0,r.jsx)("div",{className:"card-title m-0",children:(0,r.jsx)("h3",{className:"fw-bolder m-0",children:n})}),a?(0,r.jsxs)("div",{className:"card-subtitle card-title m-0",children:[(0,r.jsx)(i.Z,{as:"span",animation:"grow",size:"md",role:"status","aria-hidden":"true"}),(0,r.jsx)("p",{className:"m-0",children:"Loading ..."})]}):null]}),(0,r.jsx)("div",{className:"card-body ".concat(a?"opacity-50":null),children:(0,r.jsx)("div",{className:"".concat(o?"p-sm-0 px-md-3 px-lg-10":"p-sm-0 px-md-10 px-lg-20"),children:t})})]})},o=function(e){var t=e.children,n=e.styles;return(0,r.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:n,children:(0,r.jsx)("div",{className:"text-center",children:t})})}},5142:function(e,t,n){n.d(t,{s4:function(){return m},xi:function(){return f},sT:function(){return u},vZ:function(){return c},Wl:function(){return p},LO:function(){return v},YS:function(){return l}});var i=n(3144),r=n(5671),a=n(7976),o=(0,i.Z)((function e(){(0,r.Z)(this,e)}));o.getLatestFilledForms=function(e){var t=e._pageNo,n=e._count,i="/api/form/list-latest-filled-forms?_pageNo=".concat(t,"&_count=").concat(n);return a.Z.get(i)},o.getPatientEditForm=function(e){var t=e.id,n="/api/form/get-demo-edit-form?id=".concat(t,"&type=patient");return a.Z.get(n)},o.updatePatientDemo=function(e){var t=e.dynamicQuestions,n=e.preDefinedQuestions,i=e.demo_id,r=e.patient_id;return a.Z.post("/api/form/update-edit-demo",{dynamicQuestions:t,preDefinedQuestions:n,demo_id:i,patient_id:r,type:"patient"})},o.getCaregiverEditForm=function(e){var t=e.id,n="/api/form/get-demo-edit-form?id=".concat(t,"&type=caregiver");return a.Z.get(n)},o.updateCaregiverDemo=function(e){var t=e.dynamicQuestions,n=e.preDefinedQuestions,i=e.demo_id,r=e.patient_id;return a.Z.post("/api/form/update-edit-demo",{dynamicQuestions:t,preDefinedQuestions:n,demo_id:i,patient_id:r,type:"caregiver"})},o.getChildEditForm=function(e){var t=e.id,n="/api/form/get-demo-edit-form?id=".concat(t,"&type=child");return a.Z.get(n)},o.updateChildDemo=function(e){var t=e.dynamicQuestions,n=e.preDefinedQuestions,i=e.demo_id,r=e.patient_id;return a.Z.post("/api/form/update-edit-demo",{dynamicQuestions:t,preDefinedQuestions:n,demo_id:i,patient_id:r,type:"child"})};var s=o,d=n(3984),u=function(e){return s.getLatestFilledForms(e).then((function(e){return{status:e.status,data:e.data,message:"success"}})).catch((function(e){return(0,d.Z)(e)}))},c=function(e){return s.getPatientEditForm(e).then((function(e){return{status:e.status,data:e.data,message:"success"}})).catch((function(e){return(0,d.Z)(e)}))},l=function(e){var t=e.dynamicQuestions,n=e.preDefinedQuestions,i=e.demo_id,r=e.patient_id;return s.updatePatientDemo({dynamicQuestions:t,preDefinedQuestions:n,demo_id:i,patient_id:r}).then((function(e){return{status:e.status,data:e.data,message:"success"}})).catch((function(e){return(0,d.Z)(e)}))},m=function(e){return s.getCaregiverEditForm(e).then((function(e){return{status:e.status,data:e.data,message:"success"}})).catch((function(e){return(0,d.Z)(e)}))},p=function(e){var t=e.dynamicQuestions,n=e.preDefinedQuestions,i=e.demo_id,r=e.patient_id;return s.updateCaregiverDemo({dynamicQuestions:t,preDefinedQuestions:n,demo_id:i,patient_id:r}).then((function(e){return{status:e.status,data:e.data,message:"success"}})).catch((function(e){return(0,d.Z)(e)}))},f=function(e){return s.getChildEditForm(e).then((function(e){return{status:e.status,data:e.data,message:"success"}})).catch((function(e){return(0,d.Z)(e)}))},v=function(e){var t=e.dynamicQuestions,n=e.preDefinedQuestions,i=e.demo_id,r=e.patient_id;return s.updateChildDemo({dynamicQuestions:t,preDefinedQuestions:n,demo_id:i,patient_id:r}).then((function(e){return{status:e.status,data:e.data,message:"success"}})).catch((function(e){return(0,d.Z)(e)}))}}}]);
//# sourceMappingURL=385.d6af1938.chunk.js.map