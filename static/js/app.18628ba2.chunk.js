(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return W}));n(197);var r=n(3),c=n(11),o=n(6),l=n(13),a=n.n(l),i=n(5),u=n.n(i),s=n(8),d=n.n(s),j=n(0),h=n.n(j),b=n(14),f=n(15),x=n(1);var g=function(){var e=Object(j.useState)([]),t=u()(e,2),n=t[0],r=t[1];Object(j.useEffect)((function(){o()}),[]);var o=function(){var e,t;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.awrap(fetch("https://archery-score.com/api/archer/"));case 2:return e=n.sent,n.next=5,d.a.awrap(e.json());case 5:t=n.sent,r(t);case 7:case"end":return n.stop()}}),null,null,null,Promise)};return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:function(e){var t=a()(e);return null==t||t.sort((function(e,t){return e.target_number>t.target_number?-1:1})),t}(n).map((function(e,t){return Object(x.jsxs)(c.NavLink,{to:"/score/"+e.id,style:{color:"black",textDecoration:"none"},children:[Object(x.jsxs)(f.default,{style:{fontSize:20},children:[" ",e.full_name," ","\t"]}),Object(x.jsxs)(f.default,{style:{fontSize:20,color:"blue"},children:[" target: ",e.target_number," ","\n\n"]})]})}))}),Object(x.jsx)(c.NavLink,{to:"/admin123",style:{color:"black",textDecoration:"none"},children:Object(x.jsx)(b.default,{title:"Menu"})})]})},O=function(e){e.navigation;return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Let's score"}),Object(x.jsx)(c.Link,{to:"/archers",style:{textDecoration:"none"},children:Object(x.jsx)(b.default,{title:"Score an archer"})}),Object(x.jsx)("p",{children:"\n\n\n"}),Object(x.jsx)("p",{children:"\n\n\n"}),Object(x.jsx)("p",{children:"\n\n\n"}),Object(x.jsx)("p",{children:"\n\n\n"}),Object(x.jsx)(c.Link,{to:"/register",style:{textDecoration:"none"},children:Object(x.jsx)(b.default,{title:"Add an archer"})}),Object(x.jsx)("p",{children:"\n\n\n"}),Object(x.jsx)("p",{children:"\n\n\n"}),Object(x.jsx)("p",{children:"\n\n\n"}),Object(x.jsx)("p",{children:"\n\n\n"}),Object(x.jsx)(c.Link,{to:"/",style:{textDecoration:"none"},children:Object(x.jsx)(b.default,{title:"See the report"})}),Object(x.jsx)("p",{children:"\n\n\n"}),Object(x.jsx)("p",{children:"\n\n\n"}),Object(x.jsx)("p",{children:"\n\n\n"}),Object(x.jsx)("p",{children:"\n\n\n"}),Object(x.jsx)(c.Link,{to:"/archersToUpdate",style:{textDecoration:"none"},children:Object(x.jsx)(b.default,{title:"Update an archer"})})]})},p=n(2),v=n(10);n(64);var m=function(){var e=Object(o.useParams)(),t=Object(j.useState)([]),n=u()(t,2),r=n[0],l=n[1],i=(h.a.useRef([]),Object(j.useState)(Array.from({length:3},(function(){return Array.from({length:6},(function(){return Array.from({length:6},(function(){return null}))}))})))),s=u()(i,2),f=s[0],g=s[1];Object(j.useEffect)((function(){O(),m()}),[]);var O=function(){var t,n;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.a.awrap(fetch("https://archery-score.com/api/archer_unique/"+e.id+"/"));case 2:return t=r.sent,r.next=5,d.a.awrap(t.json());case 5:n=r.sent,l(n);case 7:case"end":return r.stop()}}),null,null,null,Promise)},m=function(){var t,n;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.a.awrap(fetch("https://archery-score.com/api/archer/"+e.id+"/arrows/"));case 2:return t=r.sent,r.next=5,d.a.awrap(t.json());case 5:n=r.sent,g(n);case 7:case"end":return r.stop()}}),null,null,null,Promise)},y=Object(j.useState)(Array.from({length:3},(function(){return Array.from({length:6},(function(){return Array.from({length:6},(function(){return null}))}))}))),w=u()(y,2),S=(w[0],w[1],function(e){for(var t=a()(e),n=0,r=0;r<6;r++)n+=t[r].filter((function(e){return 9==e})).length;return n}),C=function(e){for(var t=a()(e),n=0,r=0;r<3;r++)n+=S(t[r]);return n},k=function(e){for(var t=a()(e),n=0,r=0;r<6;r++)n+=t[r].filter((function(e){return[1,2,3,4,5,6,7,8,9].includes(e)})).length;return n},A=function(e){for(var t=a()(e),n=0,r=0;r<3;r++)n+=k(t[r]);return n},W=function(e){for(var t=a()(e),n=0,r=0;r<6;r++)""!=t[r]&&(n+=t[r]);return n},L=function(e){for(var t=a()(e),n=0,r=0;r<6;r++)n+=W(t[r]);return n},R=function(e){for(var t=a()(e),n=0,r=0;r<3;r++)n+=L(t[r]);return n},_={method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},body:JSON.stringify({score_sheet:f,total:R(f),hits:A(f),golds:C(f)})},E=function(){return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d.a.awrap(fetch("https://archery-score.com/api/archer/"+e.id+"/updatescore/",_).then((function(e){return e.json()})).then((function(e){return console.log(e)})));case 2:t.sent;case 3:case"end":return t.stop()}}),null,null,null,Promise)},D=Object(j.useRef)(new Array);return Object(j.useRef)(),Object(x.jsxs)(p.default,{style:{alignItems:"center"},children:[Object(x.jsxs)("h3",{align:"left",children:[" Score for ",r.full_name]}),f.map((function(e,t){return Object(x.jsxs)(p.default,{style:{textAlign:""},children:[Object(x.jsxs)(p.default,{style:{flexDirection:"row"},children:[Object(x.jsxs)("h4",{children:[" DISTANCE ",t+1," "]}),Object(x.jsx)(v.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#a9e9e9",borderWidth:3,marginLeft:166},value:"S"}),Object(x.jsx)(v.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#a9e9e9",borderWidth:3},value:"H"}),Object(x.jsx)(v.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#a9e9e9",borderWidth:3},value:"G"})]}),e.map((function(e,n){return Object(x.jsxs)(p.default,{style:{flexDirection:"row"},children:[Object(x.jsxs)("p",{style:{height:20,width:20,textAlign:"center"},children:[" E",n+1," "]}),e.map((function(e,r){return Object(x.jsx)(p.default,{style:{flexDirection:"row"},children:Object(x.jsx)(v.default,{id:36*t+6*n+r,style:{height:50,width:40,textAlign:"center",borderColor:"#999999",borderWidth:3},placeholder:e,maxLength:1,onChange:function(e){return function(e,t,n,r){var c=a()(f);c[e][t][n]=+r.target.value,g(c)}(t,n,r,e)},ref:function(e){return D.current.push(e)},onSubmitEditing:function(){return D.current[36*t+6*n+r+1].focus()}})})})),Object(x.jsx)(v.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:W(f[t][n])}),Object(x.jsx)(v.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:f[t][n].filter((function(e){return 0!=e&&""!=e})).length}),Object(x.jsx)(v.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:f[t][n].filter((function(e){return 9==e})).length})]})})),Object(x.jsxs)(p.default,{style:{flexDirection:"row"},children:[Object(x.jsx)(v.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3,marginLeft:260},value:L(f[t])}),Object(x.jsx)(v.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:k(f[t])}),Object(x.jsx)(v.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:S(f[t])})]}),Object(x.jsxs)("p",{children:[" ","\n\n\n\n\n"," "]}),Object(x.jsxs)(p.default,{style:[{flexDirection:"row"}],children:[Object(x.jsx)(b.default,{title:"SAVE",onPress:function(){return E()}}),Object(x.jsx)(c.NavLink,{to:"/archers",style:{color:"black",textDecoration:"none",marginLeft:100},children:Object(x.jsx)(b.default,{title:"SAVE AND BACK",onPress:function(){return E()}})}),Object(x.jsx)(c.NavLink,{to:"/archers",style:{color:"black",textDecoration:"none",marginLeft:100},children:Object(x.jsx)(b.default,{title:"BACK",style:{height:500}})})]}),Object(x.jsxs)(p.default,{children:[Object(x.jsxs)("p",{children:[" ","\n\n\n\n\n"," "]}),Object(x.jsxs)("p",{children:[" ","\n\n\n\n\n"," "]})]})]})})),Object(x.jsxs)(p.default,{style:{flexDirection:"row"},children:[Object(x.jsx)(v.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3,marginLeft:260},value:R(f)}),Object(x.jsx)(v.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:A(f)}),Object(x.jsx)(v.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:C(f)})]})]})};var y=function(){var e=Object(j.useState)([]),t=u()(e,2),n=t[0],r=t[1];Object(j.useEffect)((function(){o()}),[]);var o=function(){var e,t;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.awrap(fetch("https://archery-score.com/api/report/"));case 2:return e=n.sent,n.next=5,d.a.awrap(e.json());case 5:t=n.sent,r(t);case 7:case"end":return n.stop()}}),null,null,null,Promise)},l=n.filter((function(e){if("Lady"==e.gender&&"Short Junior Windsor"==e.round)return e})),i=n.filter((function(e){if("Lady"==e.gender&&"Junior Windsor"==e.round)return e})),s=n.filter((function(e){if("Lady"==e.gender&&"Short Windsor"==e.round)return e})),h=n.filter((function(e){if("Lady"==e.gender&&"Windsor"==e.round&&"Senior"!=e.age_group)return e})),g=n.filter((function(e){if("Lady"==e.gender&&"Windsor"==e.round&&"Senior"==e.age_group)return e})),O=n.filter((function(e){if("Gent"==e.gender&&"Short Junior Windsor"==e.round)return e})),v=n.filter((function(e){if("Gent"==e.gender&&"Junior Windsor"==e.round)return e})),m=n.filter((function(e){if("Gent"==e.gender&&"Short Windsor"==e.round)return e})),y=n.filter((function(e){if("Gent"==e.gender&&"Windsor"==e.round&&"Senior"!=e.age_group)return e})),w=n.filter((function(e){if("Gent"==e.gender&&"Windsor"==e.round&&"Senior"==e.age_group)return e})),S=function(e){var t=a()(e);return null==t||t.sort((function(e,t){return e.totalScore>t.totalScore?-1:1})),t},C=function(e){var t=a()(e);return null==t||t.sort((function(e,t){return e.totalHits>t.totalHits?-1:1})),t},k=function(e){var t=a()(e);return null==t||t.sort((function(e,t){return e.totalGold>t.totalGold?-1:1})),t},A=function(e){var t=a()(e),n=t.filter((function(e){if("Barebow"==e.bow)return e})),r=t.filter((function(e){if("Longbow"==e.bow)return e})),c=t.filter((function(e){if("Recurve"==e.bow)return e})),o=t.filter((function(e){if("Compound"==e.bow)return e}));return[n=S(k(C(n))),r=S(k(C(r))),c=S(k(C(c))),o=S(k(C(o)))]},W=function(e){var t=a()(e);return"undefined"!==typeof t&&0===t.length?Object(x.jsx)("p",{children:" "}):Object(x.jsxs)("div",{children:[Object(x.jsxs)("h3",{children:[" ",t[0].bow," "]}),t.map((function(e,t){return Object(x.jsxs)("h4",{children:[t+1,": ",e.full_name," #Score:",e.totalScore," #Golds:",e.totalGold," #Hits:",e.totalHits]})}))]})};return Object(x.jsxs)(p.default,{style:{alignItems:"center"},children:[Object(x.jsx)("h1",{children:" NUNEATON ARCHERS"}),Object(x.jsx)("h1",{children:" OPEN WINDSOR "}),Object(x.jsx)(f.default,{style:{textAlign:"center",fontSize:80},children:" 2022 "}),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("h2",{children:[" ",0!==l.length?"Short Junior Windsor Round - Ladies":""," "]}),A(l).map((function(e,t){return W(e)})),Object(x.jsxs)("h2",{children:[" ",0!==O.length?"Short Junior Windsor Round - Gentlemen":""," "]}),A(O).map((function(e,t){return W(e)})),Object(x.jsxs)("h2",{children:[" ",0!==i.length?"Junior Windsor Round - Ladies":""," "]}),A(i).map((function(e,t){return W(e)})),Object(x.jsxs)("h2",{children:[" ",0!==v.length?"Junior Windsor Round - Gentlemen":""," "]}),A(v).map((function(e,t){return W(e)})),Object(x.jsxs)("h2",{children:[" ",0!==s.length?"Short Windsor Round - Ladies":""," "]}),A(s).map((function(e,t){return W(e)})),Object(x.jsxs)("h2",{children:[" ",0!==m.length?"Short Windsor Round - Gentlemen":""," "]}),A(m).map((function(e,t){return W(e)})),Object(x.jsxs)("h2",{children:[" ",0!==h.length?"Windsor Round - Ladies Junior":""," "]}),A(h).map((function(e,t){return W(e)})),Object(x.jsxs)("h2",{children:[" ",0!==y.length?"Windsor Round - Gentlemen Junior":""," "]}),A(y).map((function(e,t){return W(e)})),Object(x.jsxs)("h2",{children:[" ",0!==g.length?"Windsor Round - Ladies":""," "]}),A(g).map((function(e,t){return W(e)})),Object(x.jsxs)("h2",{children:[" ",0!==w.length?"Windsor Round - Gentlemen":""," "]}),A(w).map((function(e,t){return W(e)}))]}),Object(x.jsx)(c.NavLink,{to:"/",style:{color:"black",textDecoration:"none"},children:Object(x.jsx)(b.default,{title:"REFRESH"})})]})]})},w=n(60),S=n(29);n(83);var C=function(){var e=Object(j.useState)(""),t=u()(e,2),n=t[0],r=t[1],o=Object(j.useState)(""),l=u()(o,2),a=l[0],i=l[1],s=Object(j.useState)(""),h=u()(s,2),f=h[0],g=h[1],O=Object(j.useState)(""),m=u()(O,2),y=m[0],C=m[1],k=Object(j.useState)(""),A=u()(k,2),W=A[0],L=A[1],R=Object(j.useState)(""),_=u()(R,2),E=_[0],D=_[1],P=Object(j.useState)(""),J=u()(P,2),N=J[0],G=J[1],U=Object(j.useState)(!0),T=u()(U,2),I=T[0],H=T[1],V={method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},body:JSON.stringify({full_name:n,gender:a,age_group:f,bow:y,club_name:W,round:E,isEligibleReward:I,target_number:N})};return Object(x.jsxs)(p.default,{style:{alignItems:"center"},children:[Object(x.jsxs)("h4",{children:["Enter name:",Object(x.jsx)(v.default,{style:{height:40,width:250,textAlign:"center",backgroundColor:"#e9e9e9"},onChange:function(e){return function(e){var t=e.target.value;console.log(t),r(t)}(e)}})]}),Object(x.jsxs)("h4",{children:["Select gender:",Object(x.jsx)(S.Select,{options:[{value:"lady",label:"Lady"},{value:"gent",label:"Gent"}],onChange:function(e){var t=e[0].label;console.log(t),i(t)}})]}),Object(x.jsxs)("h4",{children:["Select age group:",Object(x.jsx)(S.Select,{options:[{value:"u12",label:"U12"},{value:"u14",label:"U14"},{value:"u16",label:"U16"},{value:"u18",label:"U18"},{value:"senior",label:"Senior"}],onChange:function(e){var t=e[0].label;console.log(t),g(t)}})]}),Object(x.jsxs)("h4",{children:["Select bow:",Object(x.jsx)(S.Select,{options:[{value:"longbow",label:"Longbow"},{value:"barebow",label:"Barebow"},{value:"recurve",label:"Recurve"},{value:"compound",label:"Compound"}],onChange:function(e){var t=e[0].label;console.log(t),C(t)}})]}),Object(x.jsxs)("h4",{children:["Enter club:",Object(x.jsx)(v.default,{style:{height:40,width:250,textAlign:"center",backgroundColor:"#e9e9e9"},onChange:function(e){return function(e){var t=e.target.value;console.log(t),L(t)}(e)}})]}),Object(x.jsxs)("h4",{children:["Select round:",Object(x.jsx)(S.Select,{options:[{value:"sjw",label:"Short Junior Windsor"},{value:"jw",label:"Junior Windsor"},{value:"sw",label:"Short Windsor"},{value:"w",label:"Windsor"}],onChange:function(e){var t=e[0].label;console.log(t),D(t)}})]}),Object(x.jsxs)("h4",{children:["Enter target number:",Object(x.jsx)(v.default,{style:{height:40,width:250,textAlign:"center",backgroundColor:"#e9e9e9"},onChange:function(e){return function(e){var t=e.target.value;console.log(t),G(t)}(e)}})]}),Object(x.jsxs)("h4",{children:["Is he eligible for a reward?",Object(x.jsx)(w.default,{value:I,onValueChange:H,style:{alignSelf:"center"}})]}),Object(x.jsxs)("p",{children:[" ","\n\n"]}),Object(x.jsx)(c.NavLink,{to:"/admin123",style:{color:"black",textDecoration:"none"},children:Object(x.jsx)(b.default,{title:"SAVE",onPress:function(){return function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Put the data"),t.next=3,d.a.awrap(fetch("https://archery-score.com/api/add_archer/",V).then((function(e){return e.json()})).then((function(e){return console.log(e)})));case 3:e=t.sent,console.log(e);case 5:case"end":return t.stop()}}),null,null,null,Promise)}()}})})]})};var k=function(){var e=Object(j.useState)([]),t=u()(e,2),n=t[0],r=t[1];Object(j.useEffect)((function(){o()}),[]);var o=function(){var e,t;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d.a.awrap(fetch("https://archery-score.com/api/archer/"));case 2:return e=n.sent,n.next=5,d.a.awrap(e.json());case 5:t=n.sent,r(t);case 7:case"end":return n.stop()}}),null,null,null,Promise)};return Object(x.jsxs)("div",{children:[Object(x.jsx)("div",{children:function(e){var t=a()(e);return null==t||t.sort((function(e,t){return e.target_number>t.target_number?-1:1})),t}(n).map((function(e,t){return Object(x.jsxs)(c.NavLink,{to:"/update/"+e.id,style:{color:"black",textDecoration:"none"},children:[Object(x.jsxs)(f.default,{style:{fontSize:20},children:[" ",e.full_name," ","\t"]}),Object(x.jsxs)(f.default,{style:{fontSize:20,color:"blue"},children:[" target: ",e.target_number," ","\n\n"]})]})}))}),Object(x.jsx)(c.NavLink,{to:"/admin123",style:{color:"black",textDecoration:"none"},children:Object(x.jsx)(b.default,{title:"Menu"})})]})};var A=function(){var e=Object(o.useParams)(),t=Object(j.useState)([]),n=u()(t,2),r=n[0],l=n[1];Object(j.useEffect)((function(){a()}),[]);var a=function(){var t,n;return d.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,d.a.awrap(fetch("https://archery-score.com/api/archer_unique/"+e.id+"/"));case 2:return t=r.sent,r.next=5,d.a.awrap(t.json());case 5:n=r.sent,l(n);case 7:case"end":return r.stop()}}),null,null,null,Promise)},i=Object(j.useState)(""),s=u()(i,2),h=s[0],f=s[1],g=Object(j.useState)(""),O=u()(g,2),m=O[0],y=O[1],C=Object(j.useState)(""),k=u()(C,2),A=k[0],W=k[1],L=Object(j.useState)(""),R=u()(L,2),_=R[0],E=R[1],D=Object(j.useState)(""),P=u()(D,2),J=P[0],N=P[1],G=Object(j.useState)(""),U=u()(G,2),T=U[0],I=U[1],H=Object(j.useState)(""),V=u()(H,2),z=V[0],B=V[1],q=Object(j.useState)(!0),K=u()(q,2),M=K[0],F=K[1],Q={method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},body:JSON.stringify({full_name:h,gender:m,age_group:A,bow:_,club_name:J,round:T,isEligibleReward:M,target_number:z})};return Object(x.jsxs)(p.default,{style:{alignItems:"center"},children:[Object(x.jsxs)("h4",{children:["Enter name:",Object(x.jsx)(v.default,{placeholder:r.full_name,editable:!0,style:{height:40,width:250,textAlign:"center",backgroundColor:"#e9e9e9"},onChange:function(e){return function(e){var t=e.target.value;console.log(t),f(t)}(e)}})]}),Object(x.jsxs)("h4",{children:["Select gender:",Object(x.jsx)(S.Select,{options:[{value:"lady",label:"Lady"},{value:"gent",label:"Gent"}],onChange:function(e){var t=e[0].label;console.log(t),y(t)}})]}),Object(x.jsxs)("h4",{children:["Select age group:",Object(x.jsx)(S.Select,{options:[{value:"u12",label:"U12"},{value:"u14",label:"U14"},{value:"u16",label:"U16"},{value:"u18",label:"U18"},{value:"senior",label:"Senior"}],onChange:function(e){var t=e[0].label;console.log(t),W(t)}})]}),Object(x.jsxs)("h4",{children:["Select bow:",Object(x.jsx)(S.Select,{options:[{value:"longbow",label:"Longbow"},{value:"barebow",label:"Barebow"},{value:"recurve",label:"Recurve"},{value:"compound",label:"Compound"}],onChange:function(e){var t=e[0].label;console.log(t),E(t)}})]}),Object(x.jsxs)("h4",{children:["Enter club:",Object(x.jsx)(v.default,{style:{height:40,width:250,textAlign:"center",backgroundColor:"#e9e9e9"},onChange:function(e){return function(e){var t=e.target.value;console.log(t),N(t)}(e)}})]}),Object(x.jsxs)("h4",{children:["Select round:",Object(x.jsx)(S.Select,{options:[{value:"sjw",label:"Short Junior Windsor"},{value:"jw",label:"Junior Windsor"},{value:"sw",label:"Short Windsor"},{value:"w",label:"Windsor"}],onChange:function(e){var t=e[0].label;console.log(t),I(t)}})]}),Object(x.jsxs)("h4",{children:["Enter target number:",Object(x.jsx)(v.default,{style:{height:40,width:250,textAlign:"center",backgroundColor:"#e9e9e9"},onChange:function(e){return function(e){var t=e.target.value;console.log(t),B(t)}(e)}})]}),Object(x.jsxs)("h4",{children:["Is he eligible for a reward?",Object(x.jsx)(w.default,{value:M,onValueChange:F,style:{alignSelf:"center"}})]}),Object(x.jsxs)("p",{children:[" ","\n\n"]}),Object(x.jsx)(c.NavLink,{to:"/admin123",style:{color:"black",textDecoration:"none"},children:Object(x.jsx)(b.default,{title:"SAVE",onPress:function(){return function(){var e;return d.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Put the data"),t.next=3,d.a.awrap(fetch("https://archery-score.com/api/archer/"+r.id+"/updatedetails/",Q).then((function(e){return e.json()})).then((function(e){return console.log(e)})));case 3:e=t.sent,console.log(e);case 5:case"end":return t.stop()}}),null,null,null,Promise)}()}})})]})};function W(){return Object(x.jsx)(c.HashRouter,{children:Object(x.jsx)("div",{children:Object(x.jsxs)(o.Routes,{children:[Object(x.jsx)(o.Route,{path:"/admin123",element:Object(x.jsx)(O,{})}),Object(x.jsx)(o.Route,{path:"/update/:id",element:Object(x.jsx)(A,{})}),Object(x.jsx)(o.Route,{path:"/archersToUpdate",element:Object(x.jsx)(k,{})}),Object(x.jsx)(o.Route,{path:"/archers",element:Object(x.jsx)(g,{})}),Object(x.jsx)(o.Route,{path:"/score/:id",element:Object(x.jsx)(m,{})}),Object(x.jsx)(o.Route,{path:"/",element:Object(x.jsx)(y,{})}),Object(x.jsx)(o.Route,{path:"/register",element:Object(x.jsx)(C,{})})]})})})}r.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},113:function(e,t,n){e.exports=n(196)}},[[113,1,2]]]);
//# sourceMappingURL=app.18628ba2.chunk.js.map