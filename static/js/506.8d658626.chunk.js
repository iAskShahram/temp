"use strict";(self.webpackChunkthis=self.webpackChunkthis||[]).push([[506],{8564:function(e,t,n){n.d(t,{D:function(){return r},t:function(){return a}});var a=[{id:2,heading:"Patient",reportColumns:["Gender","Family System","Marital Status","Family history of mental illness","important life events"],questions:[{id:1,question:"Gender",isInDemographic:!0,isNumeric:!1,options:["male","female"]},{id:2,question:"Family System",isInDemographic:!1,isNumeric:!1,options:["Nuclear","Joint","Extended"]},{id:3,question:"Client's own Marital Status",isInDemographic:!1,isNumberic:!1,options:["male","female"]},{id:4,question:"Family history of mental illness?",isInDemographic:!1,isNumeric:!1,options:["Yes","No"]},{id:5,question:"Important life events in your life",isInDemographic:!1,isNumeric:!1,options:["Natural disaster (flood/earth quack etc)","Traffic accident","Death of loved one","Fire/explosion","Physical assault","Psychological or emotional assault","Sexual assaul"]}]},{id:1,heading:"Caregiver",reportColumns:["Gender","Educational Qualification","Family System","Marital Status"],questions:[{id:1,question:"Gender",isInDemographic:!0,isNumberic:!1,options:["male","female"]},{id:2,question:"Educational Qualification",isInDemographic:!1,isNumeric:!1,options:["Illiterate,Primary to middle","Secondary/ Higher secondary","Graduation (B.A./BSC/M.A./MSC/BS)","Professional graduation (MBBS/LLB/Engineering/MS/M.Phil)","Post-graduation (PhD/Specialization with FCPS/LLM etc)"]},{id:3,question:"Family System",isInDemographic:!1,isNumeric:!1,options:["Nuclear","Joint","Extended"]},{id:4,question:"Caregiver's Marital Status",isInDemographic:!1,isNumeric:!1,options:["Married","Single or never married","Divorced","Widow/widower","Separated"]}]},{id:3,heading:"Child",reportColumns:["Gender","Level of education"],questions:[{id:1,question:"Gender",isInDemographic:!0,isNumeric:!1,options:["male","female"]},{id:2,question:"Level of Education of child",isInDemographic:!1,isNumeric:!0,options:[]}]}],r=[{id:1,heading:"Patient",reportColumns:["Duration of Marriage/separation/widowhood (Years)","Number of earning members in house","Total monthly income","Number of family members","Onset of illness","Duration of diagnosis of illness","Duration of illness","Average number of hospital visits","Duration of marriage/separation"]},{id:2,heading:"Caregiver",reportColumns:["Monthly income","Number of family members","Number of earning members in house","Duration of marriage/separation","Time duration of caregiving"]},{id:2,heading:"Child",reportColumns:["Number of siblings","Birth order","Level of education","Child age at the time of admission in school","Marks in previous class"]}]},7263:function(e,t,n){n.d(t,{Uy:function(){return c},xc:function(){return s}});var a=n(4849),r=n(3360),i=n(7689),o=n(184),s=function(e){var t=e.children,n=e.title,s=e.isLoading,c=e.paddingSmall,u=e.resetCookieAndLocalStorage,d=(0,i.s0)();return(0,o.jsxs)("div",{className:"my-8 card ",children:[(0,o.jsxs)("h1",{className:"card-header",children:[(0,o.jsx)("div",{className:"card-title m-0",children:(0,o.jsx)("h3",{className:"fw-bolder m-0",children:n})}),s?(0,o.jsxs)("div",{className:"card-subtitle card-title m-0",children:[(0,o.jsx)(a.Z,{as:"span",animation:"grow",size:"md",role:"status","aria-hidden":"true"}),(0,o.jsx)("p",{className:"m-0",children:"Loading ..."})]}):null,u&&(0,o.jsx)("div",{className:"card-subtitle card-title m-0",children:(0,o.jsx)(r.Z,{variant:"outline-danger",className:"m-0",onClick:function(){window.confirm("Are you sure you want to clear cache?")&&(u(),d("/"))},children:"Clear Form Cache"})})]}),(0,o.jsx)("div",{className:"card-body ".concat(s?"opacity-50":null),style:s?{pointerEvents:"none"}:{},children:(0,o.jsx)("div",{className:"".concat(c?"p-sm-0 px-md-3 px-lg-10":"p-sm-0 px-md-10 px-lg-20"),children:t})})]})},c=function(e){var t=e.children,n=e.styles;return(0,o.jsx)("div",{className:"d-flex align-items-center justify-content-center",style:n,children:(0,o.jsx)("div",{className:"text-center",children:t})})}},6725:function(e,t,n){n.d(t,{t:function(){return a}});var a={ADMIN:"admin",USER:"user",RESEARCH_ASSISTANT:"Principal Investigator",DATA_COLLECTOR:"Data Collector"}},9492:function(e,t,n){n.d(t,{gC:function(){return l},Se:function(){return f},ze:function(){return d}});var a=n(1413),r=n(3144),i=n(5671),o=n(7976),s=(0,r.Z)((function e(){(0,i.Z)(this,e)}));s.listCities=function(e){var t="/api/city/list-cities?_pageNo=".concat(null===e||void 0===e?void 0:e._pageNo,"&_count=").concat(null===e||void 0===e?void 0:e._count);return o.Z.get(t)},s.createCity=function(e){return o.Z.post("api/city",(0,a.Z)({},e))},s.deleteCity=function(e){var t=e.id,n="api/city/".concat(t);return o.Z.delete(n)};var c=s,u=n(3984),d=function(e){return c.listCities(e).then((function(e){return{status:e.status,data:e.data,message:"success"}})).catch((function(e){return(0,u.Z)(e)}))},l=function(e){return c.createCity(e).then((function(e){return{status:e.status,data:e.data,message:"Request Success"}})).catch((function(e){return(0,u.Z)(e)}))},f=function(e){var t=e.id;return c.deleteCity({id:t}).then((function(e){return{status:e.status,data:e.data,message:"Request Success"}})).catch((function(e){return(0,u.Z)(e)}))}},488:function(e,t,n){n.d(t,{Np:function(){return d},aP:function(){return u},lC:function(){return l}});var a=n(3144),r=n(5671),i=n(7976),o=(0,a.Z)((function e(){(0,r.Z)(this,e)}));o.getFullReport=function(e){var t="/api/report/date?startingDate=".concat(e.startingDate,"&endingDate=").concat(e.endingDate,"&city_id=").concat(e.city_id);return i.Z.get(t)},o.getFrequencyReport=function(e){var t="/api/report/frequency?startingDate=".concat(e.startingDate,"&endingDate=").concat(e.endingDate,"&city_id=").concat(e.city_id);return i.Z.get(t)},o.getMeanReport=function(e){var t="/api/report/mean?startingDate=".concat(e.startingDate,"&endingDate=").concat(e.endingDate,"&city_id=").concat(e.city_id);return i.Z.get(t)};var s=o,c=n(3984),u=function(e){return s.getFullReport(e).then((function(e){return{status:e.status,data:e.data,message:"Success"}})).catch((function(e){return(0,c.Z)(e)}))},d=function(e){return s.getFrequencyReport(e).then((function(e){return{status:e.status,data:e.data,message:"Success"}})).catch((function(e){return(0,c.Z)(e)}))},l=function(e){return s.getMeanReport(e).then((function(e){return{status:e.status,data:e.data,message:"Success"}})).catch((function(e){return(0,c.Z)(e)}))}},1289:function(e,t,n){n.d(t,{$6:function(){return p},IN:function(){return d},Yi:function(){return f}});var a=n(4165),r=n(2982),i=n(5861),o=n(885),s=n(4045),c=function(e){var t=e.workbook,n=e.fileName,a=(0,s.cW)(t,{type:"array",bookType:"xlsx"}),r=new Blob([a],{type:"array",bookType:"xlsx"}),i=window.URL.createObjectURL(r),o=document.createElement("a");o.href=i,o.setAttribute("download","".concat(n," - ").concat((new Date).toISOString().split("T")[0],".xlsx")),document.body.appendChild(o),o.click()},u=function(e){var t={};return Object.keys(e).forEach((function(n){for(var a=[],r=e[n],i=Object.keys(r),s=0;s<i.length;s++){var c=[],u=i[s];c.push(u),c.push("");for(var d=r[u],l=0,f=Object.entries(d);l<f.length;l++){var m=(0,o.Z)(f[l],2),p=m[0],h=m[1];c.push(p),c.push(h)}a.push(c)}t[n]=a})),t};function d(e){return l.apply(this,arguments)}function l(){return(l=(0,i.Z)((0,a.Z)().mark((function e(t){var n,i,o,u,d,l,f,m,p,h,g;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.data,i=t.center,o=n.reportData,e.prev=2,u=[],d=[],l=[],f=s.P6.book_new(),o.forEach((function(e){u.push([].concat((0,r.Z)(e.patientDemoData),(0,r.Z)(e.patientSectionData))),d.push([].concat((0,r.Z)(e.caregiverDemoData),(0,r.Z)(e.caregiverSectionData))),l.push([].concat((0,r.Z)(e.childDemoData),(0,r.Z)(e.childSectionData)))})),m=s.P6.aoa_to_sheet(u),p=s.P6.aoa_to_sheet(d),h=s.P6.aoa_to_sheet(l),s.P6.book_append_sheet(f,m,"Patient"),s.P6.book_append_sheet(f,p,"Caregiver"),s.P6.book_append_sheet(f,h,"Child"),g="Full Report ".concat(i&&"- ".concat(i)),c({workbook:f,fileName:g}),e.abrupt("return",!0);case 19:return e.prev=19,e.t0=e.catch(2),e.abrupt("return",new Promise((function(e,t){t(!1)})));case 22:case"end":return e.stop()}}),e,null,[[2,19]])})))).apply(this,arguments)}function f(e){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)((0,a.Z)().mark((function e(t){var n,r,i,o,d,l,f,m,p;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=t.data,r=t.center,e.prev=1,i=s.P6.book_new(),o=u(n),d=Object.keys(o),l=0;l<d.length;l++)f=d[l],m=s.P6.aoa_to_sheet(o[f]),p=[{wch:50},{wch:5}],m["!cols"]=p,s.P6.book_append_sheet(i,m,f);return c({workbook:i,fileName:"Frequency Report ".concat(r&&"- ".concat(r))}),e.abrupt("return",!0);case 10:throw e.prev=10,e.t0=e.catch(1),new Error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,i.Z)((0,a.Z)().mark((function e(t){var n,i,o,u,d,l,f;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=t.data,i=t.center,e.prev=1,o=s.P6.book_new(),u=0;u<n.length;u++)d=n[u],l=s.P6.aoa_to_sheet([["Questions","Averages"]].concat((0,r.Z)(d.averages.map((function(e){return[e.question_text,e.avg]}))))),f=[{wch:50},{wch:10}],l["!cols"]=f,s.P6.book_append_sheet(o,l,d.entity);return c({workbook:o,fileName:"Mean Report ".concat(i&&"- ".concat(i))}),e.abrupt("return",!0);case 8:throw e.prev=8,e.t0=e.catch(1),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}},9140:function(e,t,n){n.d(t,{Z:function(){return j}});var a=n(1413),r=n(5987),i=n(1694),o=n.n(i),s=n(2791),c=n(162),u=n(6543),d=n(3689),l=n(184),f=["bsPrefix","className","variant","as"],m=s.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.variant,u=e.as,d=void 0===u?"img":u,m=(0,r.Z)(e,f),p=(0,c.vE)(n,"card-img");return(0,l.jsx)(d,(0,a.Z)({ref:t,className:o()(s?"".concat(p,"-").concat(s):p,i)},m))}));m.displayName="CardImg";var p=m,h=n(6040),g=["bsPrefix","className","as"],v=s.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,u=e.as,d=void 0===u?"div":u,f=(0,r.Z)(e,g),m=(0,c.vE)(n,"card-header"),p=(0,s.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,l.jsx)(h.Z.Provider,{value:p,children:(0,l.jsx)(d,(0,a.Z)((0,a.Z)({ref:t},f),{},{className:o()(i,m)}))})}));v.displayName="CardHeader";var y=v,b=["bsPrefix","className","bg","text","border","body","children","as"],N=(0,d.Z)("h5"),Z=(0,d.Z)("h6"),x=(0,u.Z)("card-body"),C=(0,u.Z)("card-title",{Component:N}),w=(0,u.Z)("card-subtitle",{Component:Z}),D=(0,u.Z)("card-link",{Component:"a"}),P=(0,u.Z)("card-text",{Component:"p"}),S=(0,u.Z)("card-footer"),_=(0,u.Z)("card-img-overlay"),k=s.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.bg,u=e.text,d=e.border,f=e.body,m=e.children,p=e.as,h=void 0===p?"div":p,g=(0,r.Z)(e,b),v=(0,c.vE)(n,"card");return(0,l.jsx)(h,(0,a.Z)((0,a.Z)({ref:t},g),{},{className:o()(i,v,s&&"bg-".concat(s),u&&"text-".concat(u),d&&"border-".concat(d)),children:f?(0,l.jsx)(x,{children:m}):m}))}));k.displayName="Card",k.defaultProps={body:!1};var j=Object.assign(k,{Img:p,Title:C,Subtitle:w,Body:x,Link:D,Text:P,Header:y,Footer:S,ImgOverlay:_})},6040:function(e,t,n){var a=n(2791).createContext(null);a.displayName="CardHeaderContext",t.Z=a},6543:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(1413),r=n(5987),i=n(1694),o=n.n(i),s=/-(.)/g;var c=n(2791),u=n(162),d=n(184),l=["className","bsPrefix","as"],f=function(e){return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function m(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.displayName,i=void 0===n?f(e):n,s=t.Component,m=t.defaultProps,p=c.forwardRef((function(t,n){var i=t.className,c=t.bsPrefix,f=t.as,m=void 0===f?s||"div":f,p=(0,r.Z)(t,l),h=(0,u.vE)(c,e);return(0,d.jsx)(m,(0,a.Z)({ref:n,className:o()(i,h)},p))}));return p.defaultProps=m,p.displayName=i,p}},3689:function(e,t,n){var a=n(1413),r=n(2791),i=n(1694),o=n.n(i),s=n(184);t.Z=function(e){return r.forwardRef((function(t,n){return(0,s.jsx)("div",(0,a.Z)((0,a.Z)({},t),{},{ref:n,className:o()(t.className,e)}))}))}}}]);
//# sourceMappingURL=506.8d658626.chunk.js.map