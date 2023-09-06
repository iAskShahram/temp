"use strict";(self.webpackChunkthis=self.webpackChunkthis||[]).push([[535],{9535:function(e,t,n){n.r(t);var r=n(2982),a=n(1413),i=n(4165),s=n(5861),u=n(885),c=n(2791),o=n(7689),l=n(3855),d=n(3360),p=n(2469),m=n(1134),h=n(9085),f=n(1746),v=n(4899),g=n(6556),x=n(7263),Z=n(6536),_=n(2872),j=n(184),b=function(){(0,Z.Z)("Caregiver Demographics");var e=(0,o.s0)(),t=(0,c.useState)(!0),n=(0,u.Z)(t,2),b=n[0],y=n[1],N=(0,c.useState)(!1),S=(0,u.Z)(N,2),C=S[0],Q=S[1],q=(0,c.useState)([]),w=(0,u.Z)(q,2),D=w[0],k=w[1],P=(0,c.useState)(0),A=(0,u.Z)(P,2),I=A[0],F=A[1],L=(0,v.G)(),G=L.setFormProgress_c,O=L.getPatientId_c,E=L.getFormProgress_c,T=L.getNavigateTo_c,R=L.resetCookieAndLocalStorage,z=E(),M=T(),B=(0,c.useState)([{age:"",education_level:""}]),K=(0,u.Z)(B,2),H=K[0],U=K[1],W=(0,Z.a)("(min-width: 992px)"),Y=(0,m.cI)(),J=Y.register,V=Y.handleSubmit,X=Y.formState.errors,$=O();(0,c.useEffect)((function(){!function(){te.apply(this,arguments)}(),window.scrollTo(0,0)}),[]);var ee=function(){var t=(0,s.Z)((0,i.Z)().mark((function t(n){var r,a,s;return(0,i.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((0,_.E6)(H,I)){t.next=3;break}return h.Am.error("Please fill all the fields of children"),t.abrupt("return");case 3:return Q(!0),r=(0,_.z_)({data:n,children:H,noOfChildren:I,patient_id:$}),t.next=7,(0,f.eM)(r);case 7:200===(a=t.sent).status?(G(z.child),e(M.child)):a.status>=400&&h.Am.error(null===(s=a.message)||void 0===s?void 0:s.message),Q(!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();function te(){return(te=(0,s.Z)((0,i.Z)().mark((function e(){var t;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Q(!0),e.next=3,(0,f.dD)();case 3:200===(t=e.sent).status?(k(t.data),Q(!1)):t.status>=400&&h.Am.error(t.message.message);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,j.jsxs)(x.xc,{title:"Caregiver Demographics",isLoading:C,resetCookieAndLocalStorage:R,children:[b?(0,j.jsxs)(p.Z,{variant:"info",dismissible:!0,onClose:function(){return y(!1)},children:[(0,j.jsx)(p.Z.Heading,{children:"Caregiver Demographics"}),(0,j.jsx)("hr",{}),(0,j.jsx)("p",{className:"mb-0",children:"This is caregiver's data form. Please only fill caregiver's demographics here."})]}):null,(0,j.jsx)("div",{style:C?{pointerEvents:"none",opacity:.5}:{},children:(0,j.jsxs)(l.Z,{onSubmit:V(ee),children:[g.R.map((function(e,t){return(0,j.jsxs)(l.Z.Group,{className:"mb-3",controlId:e.name,children:[(0,j.jsxs)(l.Z.Label,{className:"row d-flex justify-content-between",children:[(0,j.jsx)("div",{className:"".concat(e.urdu_label.length>0?"col-md-6":"col-12"),children:(0,j.jsxs)("b",{children:["".concat(e.label," : "),e.required?(0,j.jsx)("span",{className:"text-danger",children:"*"}):null]})}),e.urdu_label.length>0?(0,j.jsx)("div",{className:"col-md-6 text-end",children:(0,j.jsxs)("b",{children:[e.required?(0,j.jsx)("span",{className:"text-danger",children:"*"}):null," : ".concat(e.urdu_label)]})}):null]}),(0,j.jsx)("div",{className:"px-10",children:"radio"===e.type?(0,j.jsxs)(l.Z.Select,(0,a.Z)((0,a.Z)({id:"".concat(e.name,"-").concat(t)},J(e.name,{required:e.required})),{},{children:[(0,j.jsx)("option",{value:"",children:"Select"},"0"),e.radio_options.map((function(e,t){return(0,j.jsx)("option",{value:e,children:e},t)}))]}),t):(0,j.jsx)(l.Z.Control,(0,a.Z)({type:e.type,min:0},J(e.name,{required:e.required})))}),X[e.name]&&(0,j.jsx)("span",{className:"text-danger",children:"This field is required"})]},t)})),(0,j.jsxs)(l.Z.Group,{className:"mb-3",controlId:"no_of_children",children:[(0,j.jsx)(l.Z.Label,{children:(0,j.jsxs)("b",{children:["No of children : ",(0,j.jsx)("span",{className:"text-danger",children:"*"})]})}),(0,j.jsx)("div",{className:"px-10",children:(0,j.jsx)(l.Z.Control,{type:"number",value:I,onChange:function(e){F(Number(e.target.value)),U((0,r.Z)(Array(Number(e.target.value)).keys()).map((function(e,t){return{age:"",education_level:""}})))},min:0,required:!0})})]}),I>0?H.map((function(e,t){return(0,j.jsxs)("div",{className:"row",children:[(0,j.jsx)("div",{className:"col-4",children:(0,j.jsxs)(l.Z.Group,{className:"mb-3",controlId:"age",children:[(0,j.jsx)(l.Z.Label,{children:(0,j.jsx)("b",{children:"Age of child ".concat(t+1,": ")})}),(0,j.jsx)("div",{className:"".concat(W?"px-10":"px-2"),children:(0,j.jsx)(l.Z.Control,{type:"text",onChange:function(e){var n=(0,r.Z)(H);n[t].age=e.target.value,U(n)}})})]})}),(0,j.jsx)("div",{className:"col-8",children:(0,j.jsxs)(l.Z.Group,{className:"mb-3",controlId:"education_level",children:[(0,j.jsx)(l.Z.Label,{children:(0,j.jsx)("b",{children:"Education level of child ".concat(t+1," : ")})}),(0,j.jsx)("div",{className:"".concat(W?"px-10":"px-2"),children:(0,j.jsx)(l.Z.Control,{type:"text",onChange:function(e){var n=(0,r.Z)(H);n[t].education_level=e.target.value,U(n)}})})]})})]},t)})):null,D.map((function(e,t){var n;return(0,j.jsxs)(l.Z.Group,{className:"mb-3",controlId:e.id,children:[(0,j.jsxs)(l.Z.Label,{className:"row d-flex justify-content-between",children:[(0,j.jsx)("div",{className:"".concat(e.question_urdu_text.length>0?"col-md-6":"col-12"),children:(0,j.jsxs)("b",{children:["".concat(e.question_text," : "),e.is_nullable?null:(0,j.jsx)("span",{className:"text-danger",children:"*"})]})}),e.question_urdu_text.length>0?(0,j.jsx)("div",{className:"col-md-6 text-end",children:(0,j.jsxs)("b",{children:[e.is_nullable?null:(0,j.jsx)("span",{className:"text-danger",children:"*"})," : ".concat(e.question_urdu_text)]})}):null]}),(0,j.jsx)("div",{className:"px-10",children:e.is_text_type?(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(l.Z.Control,(0,a.Z)({type:"text"},J(e.id.toString(),{required:!e.is_nullable})))}):e.is_number_type?(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(l.Z.Control,(0,a.Z)({type:"number",min:0},J(e.id.toString(),{required:!e.is_nullable})))}):e.is_date_type?(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(l.Z.Control,(0,a.Z)({type:"date"},J(e.id.toString(),{required:!e.is_nullable})))}):e.is_radio_type?(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(l.Z.Select,(0,a.Z)((0,a.Z)({id:"".concat(e.id,"-").concat(t)},J(e.id.toString(),{required:!e.is_nullable})),{},{children:[(0,j.jsx)("option",{value:"",children:"Select"},"0"),null===(n=e.radio_options)||void 0===n?void 0:n.split(",").map((function(t,n){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)("option",{value:t,children:t},"default-".concat(e.id,"-").concat(n))})}))]}))}):null}),X[e.id.toString()]?(0,j.jsx)("span",{className:"text-danger",children:"This field is required"}):null]},t)})),(0,j.jsx)(l.Z.Group,{className:"mb-3",children:(0,j.jsx)(d.Z,{className:"mb-3 float-end",variant:"primary",type:"submit",children:"Next"})})]})})]})};t.default=function(){var e=(0,o.s0)(),t=(0,v.G)(),n=(0,t.checkFormProgress_c)((0,t.getFormProgress_c)().caregiver),r=(0,u.Z)(n,2),a=r[0],i=r[1];return(0,c.useEffect)((function(){a&&e(i)}),[]),(0,j.jsx)(j.Fragment,{children:a?null:(0,j.jsx)(b,{})})}},6556:function(e,t,n){n.d(t,{R:function(){return r}});var r=[{label:"Name",urdu_label:"\u0646\u0627\u0645",type:"text",name:"name",required:!1},{label:"Gender",urdu_label:"\u0635\u0646\u0641",type:"radio",name:"gender",required:!0,radio_options:["male","female"]},{label:"Age",urdu_label:"\u0639\u0645\u0631",type:"number",name:"age",required:!0},{label:"Date of Birth",urdu_label:"\u0639\u0645\u0631",type:"date",name:"dob",required:!0}]},7263:function(e,t,n){n.d(t,{Uy:function(){return c},xc:function(){return u}});var r=n(4849),a=n(3360),i=n(7689),s=n(184),u=function(e){var t=e.children,n=e.title,u=e.isLoading,c=e.paddingSmall,o=e.resetCookieAndLocalStorage,l=(0,i.s0)();return(0,s.jsxs)("div",{className:"my-8 card ",children:[(0,s.jsxs)("h1",{className:"card-header",children:[(0,s.jsx)("div",{className:"card-title m-0",children:(0,s.jsx)("h3",{className:"fw-bolder m-0",children:n})}),u?(0,s.jsxs)("div",{className:"card-subtitle card-title m-0",children:[(0,s.jsx)(r.Z,{as:"span",animation:"grow",size:"md",role:"status","aria-hidden":"true"}),(0,s.jsx)("p",{className:"m-0",children:"Loading ..."})]}):null,o&&(0,s.jsx)("div",{className:"card-subtitle card-title m-0",children:(0,s.jsx)(a.Z,{variant:"outline-danger",className:"m-0",onClick:function(){window.confirm("Are you sure you want to clear cache?")&&(o(),l("/"))},children:"Clear Form Cache"})})]}),(0,s.jsx)("div",{className:"card-body ".concat(u?"opacity-50":null),style:u?{pointerEvents:"none"}:{},children:(0,s.jsx)("div",{className:"".concat(c?"p-sm-0 px-md-3 px-lg-10":"p-sm-0 px-md-10 px-lg-20"),children:t})})]})},c=function(e){var t=e.children,n=e.styles;return(0,s.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:n,children:(0,s.jsx)("div",{className:"text-center",children:t})})}},2872:function(e,t,n){n.d(t,{E6:function(){return s},PM:function(){return u},Wb:function(){return l},ZI:function(){return o},z_:function(){return c}});var r=n(1413),a=n(885),i=n(6556),s=function(e,t){if(0===t)return!0;if(!e)return!1;if(!Array.isArray(e)||e.length!==t)return!1;for(var n=!0,r=0;r<e.length;r++){var a=e[r];if(0===a.age.length||0===a.education_level.length){n=!1;break}}return n},u=function(e){return d({data:e.data,children:e.children,noOfChildren:e.noOfChildren,patient_id:null})},c=function(e){return d({data:e.data,children:e.children,noOfChildren:e.noOfChildren,patient_id:e.patient_id})},o=function(e){var t=e.data,n=e.patient_id,r=i.R.map((function(e){return e.name})).reduce((function(e,n){return e[n]=t[n],e}),{});return{dynamicQuestions:{dynamicKeys:Object.keys(t).map((function(e){return Number(e)})),dynamicData:t},preDefinedQuestions:r,patient_id:n}},l=function(e){for(var t=e.patient_id,n=e.data,r=[],i=0,s=Object.entries(n);i<s.length;i++){var u=(0,a.Z)(s[i],2),c=u[0],o=u[1];if(o){var l=null===c||void 0===c?void 0:c.split("-"),d=(0,a.Z)(l,3),p=d[0],m=d[1],h=d[2],f=null===o||void 0===o?void 0:o.split("-"),v=(0,a.Z)(f,3),g=v[0],x=v[1],Z=v[2];r.push({patient_id:parseInt(p),section_id:parseInt(m),section_question_id:parseInt(h),section_option_id:parseInt(g),answer_text:Z,is_answer_in_urdu:Boolean(Number(x))})}}return{patient_id:t,data:r}};function d(e){var t=e.data,n=e.children,a=e.noOfChildren,s=e.patient_id,u=i.R.map((function(e){return e.name})).reduce((function(e,n){return e[n]=t[n],e}),{});u.no_of_children=a,n.forEach((function(e){var t,n;u.children_age=u.children_age?u.children_age+","+e.age.toString():e.age.toString(),u.children_education_level=u.children_education_level?u.children_education_level+","+(null===(t=e.education_level)||void 0===t?void 0:t.replace(","," ").toString()):null===(n=e.education_level)||void 0===n?void 0:n.replace(","," ").toString()}));var c={dynamicQuestions:{dynamicKeys:Object.keys(t).map((function(e){return Number(e)})),dynamicData:t},preDefinedQuestions:u};return s?(0,r.Z)((0,r.Z)({},c),{},{patient_id:s}):c}},1746:function(e,t,n){n.d(t,{eM:function(){return h},GA:function(){return y},S2:function(){return v},en:function(){return Q},AZ:function(){return p},Yg:function(){return Z},dD:function(){return m},vh:function(){return j},QP:function(){return f},fO:function(){return S},r7:function(){return d},Cf:function(){return g}});var r=n(4165),a=n(5861),i=n(3144),s=n(5671),u=n(7976),c=(0,i.Z)((function e(){(0,s.Z)(this,e)}));c.getPatientDemoQuestions=function(){return u.Z.get("/api/question/patient/demo")},c.addPatientDemoQuestions=function(e){return u.Z.post("/api/question/patient/demo",{dynamicQuestions:e.dynamicQuestions,preDefinedQuestions:e.preDefinedQuestions})},c.getCaregiverDemoQuestions=function(){return u.Z.get("/api/question/caregiver/demo")},c.addCaregiverDemoQuestions=function(e){return u.Z.post("/api/question/caregiver/demo",{dynamicQuestions:e.dynamicQuestions,preDefinedQuestions:e.preDefinedQuestions,patient_id:e.patient_id})},c.getChildDemoQuestions=function(){return u.Z.get("/api/question/child/demo")},c.addChildDemoQuestions=function(e){return u.Z.post("/api/question/child/demo",{dynamicQuestions:e.dynamicQuestions,preDefinedQuestions:e.preDefinedQuestions,patient_id:e.patient_id})},c.getPatientScaleQuestions=function(){return u.Z.get("/api/question/patient/scale")},c.addPatientScaleQuestions=function(e){return u.Z.post("/api/question/patient/scale",{patient_id:e.patient_id,data:e.data})},c.getCaregiverScaleQuestions=function(){return u.Z.get("/api/question/caregiver/scale")},c.addCaregiverScaleQuestions=function(e){return u.Z.post("/api/question/caregiver/scale",{patient_id:e.patient_id,data:e.data})},c.getChildScaleQuestions=function(){return u.Z.get("/api/question/child/scale")},c.addChildScaleQuestions=function(e){return u.Z.post("/api/question/child/scale",{patient_id:e.patient_id,data:e.data})};var o=c,l=n(3984),d=function(){return o.getPatientDemoQuestions().then((function(e){var t;return{status:e.status,data:e.data,message:(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Success"}})).catch((function(e){return(0,l.Z)(e)}))},p=function(e){return o.addPatientDemoQuestions(e).then((function(e){var t;return{status:e.status,data:e.data,message:(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Success"}})).catch((function(e){return(0,l.Z)(e)}))},m=function(){return o.getCaregiverDemoQuestions().then((function(e){var t;return{status:e.status,data:e.data,message:(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Success"}})).catch((function(e){return(0,l.Z)(e)}))},h=function(e){return o.addCaregiverDemoQuestions(e).then((function(e){var t;return{status:e.status,data:e.data,message:(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Success"}})).catch((function(e){return(0,l.Z)(e)}))},f=function(){return o.getChildDemoQuestions().then((function(e){var t;return{status:e.status,data:e.data,message:(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Success"}})).catch((function(e){return(0,l.Z)(e)}))},v=function(e){return o.addChildDemoQuestions(e).then((function(e){var t;return{status:e.status,data:e.data,message:(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.message)||"Success"}})).catch((function(e){return(0,l.Z)(e)}))};function g(){return x.apply(this,arguments)}function x(){return(x=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.getPatientScaleQuestions();case 3:return n=e.sent,e.abrupt("return",{status:n.status,data:n.data,message:(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"Success"});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",(0,l.Z)(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Z(e){return _.apply(this,arguments)}function _(){return(_=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.addPatientScaleQuestions(t);case 3:return a=e.sent,e.abrupt("return",{status:a.status,data:a.data,message:(null===a||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||"Success"});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",(0,l.Z)(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function j(){return b.apply(this,arguments)}function b(){return(b=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.getCaregiverScaleQuestions();case 3:return n=e.sent,e.abrupt("return",{status:n.status,data:n.data,message:(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"Success"});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",(0,l.Z)(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function y(e){return N.apply(this,arguments)}function N(){return(N=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.addCaregiverScaleQuestions(t);case 3:return a=e.sent,e.abrupt("return",{status:a.status,data:a.data,message:(null===a||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||"Success"});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",(0,l.Z)(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function S(){return C.apply(this,arguments)}function C(){return(C=(0,a.Z)((0,r.Z)().mark((function e(){var t,n;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.getChildScaleQuestions();case 3:return n=e.sent,e.abrupt("return",{status:n.status,data:n.data,message:(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.message)||"Success"});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",(0,l.Z)(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function Q(e){return q.apply(this,arguments)}function q(){return(q=(0,a.Z)((0,r.Z)().mark((function e(t){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.addChildScaleQuestions(t);case 3:return a=e.sent,e.abrupt("return",{status:a.status,data:a.data,message:(null===a||void 0===a||null===(n=a.data)||void 0===n?void 0:n.message)||"Success"});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",(0,l.Z)(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=535.ae60d6d7.chunk.js.map