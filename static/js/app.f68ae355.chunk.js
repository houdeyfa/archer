(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));n(197);var r=n(3),o=n(12),c=n(5),l=n(7),i=n.n(l),u=n(9),s=n.n(u),a=n(0),d=n(16),h=n(1);var j=function(){var e=Object(a.useState)([]),t=i()(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){c()}),[]);var c=function(){var e,t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(fetch("https://archery-score.com/api/archer/"));case 2:return e=n.sent,n.next=5,s.a.awrap(e.json());case 5:t=n.sent,r(t);case 7:case"end":return n.stop()}}),null,null,null,Promise)};return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:n.map((function(e,t){return Object(h.jsx)(o.NavLink,{to:"/score/"+e.id,style:{color:"black",textDecoration:"none"},children:Object(h.jsxs)("h2",{children:[" ",e.full_name," "]})})}))}),Object(h.jsx)(o.NavLink,{to:"/",style:{color:"black",textDecoration:"none"},children:Object(h.jsx)(d.default,{title:"Menu"})})]})},f=function(e){e.navigation;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Let's score"}),Object(h.jsx)(o.Link,{to:"/archers",style:{textDecoration:"none"},children:Object(h.jsx)(d.default,{title:"Score an archer"})}),Object(h.jsx)("p",{children:"\n\n\n"}),Object(h.jsx)("p",{children:"\n\n\n"}),Object(h.jsx)("p",{children:"\n\n\n"}),Object(h.jsx)("p",{children:"\n\n\n"}),Object(h.jsx)(o.Link,{to:"/register",style:{textDecoration:"none"},children:Object(h.jsx)(d.default,{title:"Add an archer"})}),Object(h.jsx)("p",{children:"\n\n\n"}),Object(h.jsx)("p",{children:"\n\n\n"}),Object(h.jsx)("p",{children:"\n\n\n"}),Object(h.jsx)("p",{children:"\n\n\n"}),Object(h.jsx)(o.Link,{to:"/report",style:{textDecoration:"none"},children:Object(h.jsx)(d.default,{title:"See the report"})})]})},b=n(15),x=n.n(b),g=n(2),O=n(11);n(76);var p=function(){var e=Object(c.useParams)(),t=Object(a.useState)([]),n=i()(t,2),r=n[0],l=n[1],u=Object(a.useState)(Array.from({length:3},(function(){return Array.from({length:6},(function(){return Array.from({length:6},(function(){return null}))}))}))),j=i()(u,2),f=j[0],b=j[1];Object(a.useEffect)((function(){p(),v()}),[]);var p=function(){var t,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.awrap(fetch("https://archery-score.com/api/archer_unique/"+e.id+"/"));case 2:return t=r.sent,r.next=5,s.a.awrap(t.json());case 5:n=r.sent,l(n);case 7:case"end":return r.stop()}}),null,null,null,Promise)},v=function(){var t,n;return s.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s.a.awrap(fetch("https://archery-score.com/api/archer/"+e.id+"/arrows/"));case 2:return t=r.sent,r.next=5,s.a.awrap(t.json());case 5:n=r.sent,b(n);case 7:case"end":return r.stop()}}),null,null,null,Promise)},y=Object(a.useState)(Array.from({length:3},(function(){return Array.from({length:6},(function(){return Array.from({length:6},(function(){return null}))}))}))),m=i()(y,2),w=(m[0],m[1],function(e){for(var t=x()(e),n=0,r=0;r<6;r++)n+=t[r].filter((function(e){return 9==e})).length;return console.log(n),n}),S=function(e){for(var t=x()(e),n=0,r=0;r<3;r++)n+=w(t[r]);return console.log(n),n},W=function(e){for(var t=x()(e),n=0,r=0;r<6;r++)n+=t[r].filter((function(e){return[1,2,3,4,5,6,7,8,9].includes(e)})).length;return n},A=function(e){for(var t=x()(e),n=0,r=0;r<3;r++)n+=W(t[r]);return n},k=function(e){return R(x()(e)).reduce((function(e,t){return e+t}))},C=function(e){for(var t=x()(e),n=0,r=0;r<6;r++)n+=k(t[r]);return n},L=function(e){for(var t=x()(e),n=0,r=0;r<3;r++)n+=C(t[r]);return n},R=function e(t){var n=x()(t);return n.splice(n.indexOf(""),1,0),n.includes("")?e(n):n},D={method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},body:JSON.stringify({score_sheet:f,total:L(f),hits:A(f),golds:S(f)})},G=function(){var t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(f),console.log("Put the data"),n.next=4,s.a.awrap(fetch("https://archery-score.com/api/archer/"+e.id+"/updatescore/",D).then((function(e){return e.json()})).then((function(e){return console.log(e)})));case 4:t=n.sent,console.log(t);case 6:case"end":return n.stop()}}),null,null,null,Promise)};return Object(h.jsxs)(g.default,{style:{alignItems:"center"},children:[Object(h.jsxs)("h3",{align:"left",children:[" Score for ",r.full_name]}),f.map((function(e,t){return Object(h.jsxs)(g.default,{style:{textAlign:""},children:[Object(h.jsxs)(g.default,{style:{flexDirection:"row"},children:[Object(h.jsxs)("h4",{children:[" DISTANCE ",t+1," "]}),Object(h.jsx)(O.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#a9e9e9",borderWidth:3,marginLeft:166},value:"S"}),Object(h.jsx)(O.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#a9e9e9",borderWidth:3},value:"H"}),Object(h.jsx)(O.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#a9e9e9",borderWidth:3},value:"G"})]}),e.map((function(e,n){return Object(h.jsxs)(g.default,{style:{flexDirection:"row"},children:[Object(h.jsxs)("p",{style:{height:20,width:20,textAlign:"center"},children:[" E",n+1," "]}),e.map((function(e,r){return Object(h.jsx)(g.default,{style:{flexDirection:"row"},children:Object(h.jsx)(O.default,{id:r,style:{height:50,width:40,textAlign:"center",borderColor:"#999999",borderWidth:3},placeholder:e,maxLength:1,onChange:function(e){return function(e,t,n,r){var o=x()(f);o[e][t][n]=+r.target.value,b(o)}(t,n,r,e)}})})})),Object(h.jsx)(O.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:k(f[t][n])}),Object(h.jsx)(O.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:f[t][n].filter((function(e){return 0!=e&&""!=e})).length}),Object(h.jsx)(O.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:f[t][n].filter((function(e){return 9==e})).length})]})})),Object(h.jsxs)(g.default,{style:{flexDirection:"row"},children:[Object(h.jsx)(O.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3,marginLeft:260},value:C(f[t])}),Object(h.jsx)(O.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:W(f[t])}),Object(h.jsx)(O.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:w(f[t])})]}),Object(h.jsxs)("p",{children:[" ","\n\n\n\n\n"," "]}),Object(h.jsxs)(g.default,{style:[{flexDirection:"row"}],children:[Object(h.jsx)(d.default,{title:"SAVE",onPress:function(){return G()}}),Object(h.jsx)(o.NavLink,{to:"/archers",style:{color:"black",textDecoration:"none",marginLeft:100},children:Object(h.jsx)(d.default,{title:"SAVE AND BACK",onPress:function(){return G()}})}),Object(h.jsx)(o.NavLink,{to:"/archers",style:{color:"black",textDecoration:"none",marginLeft:100},children:Object(h.jsx)(d.default,{title:"BACK",style:{height:500}})})]}),Object(h.jsxs)(g.default,{children:[Object(h.jsxs)("p",{children:[" ","\n\n\n\n\n"," "]}),Object(h.jsxs)("p",{children:[" ","\n\n\n\n\n"," "]})]})]})})),Object(h.jsxs)(g.default,{style:{flexDirection:"row"},children:[Object(h.jsx)(O.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3,marginLeft:260},value:L(f)}),Object(h.jsx)(O.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:A(f)}),Object(h.jsx)(O.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:S(f)})]})]})};var v=function(){var e=Object(a.useState)([]),t=i()(e,2),n=t[0],r=t[1];Object(a.useEffect)((function(){c()}),[]);var c=function(){var e,t;return s.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.a.awrap(fetch("https://archery-score.com/api/report/"));case 2:return e=n.sent,n.next=5,s.a.awrap(e.json());case 5:t=n.sent,r(t);case 7:case"end":return n.stop()}}),null,null,null,Promise)},l=n.filter((function(e){if("Lady"==e.gender&&"Short Junior Windsor"==e.round)return e})),u=n.filter((function(e){if("Lady"==e.gender&&"Junior Windsor"==e.round)return e})),j=n.filter((function(e){if("Lady"==e.gender&&"Short Windsor"==e.round)return e})),f=n.filter((function(e){if("Lady"==e.gender&&"Windsor"==e.round&&"Senior"!=e.age_group)return e})),b=n.filter((function(e){if("Lady"==e.gender&&"Windsor"==e.round&&"Senior"==e.age_group)return e})),g=n.filter((function(e){if("Gent"==e.gender&&"Short Junior Windsor"==e.round)return e})),O=n.filter((function(e){if("Gent"==e.gender&&"Junior Windsor"==e.round)return e})),p=n.filter((function(e){if("Gent"==e.gender&&"Short Windsor"==e.round)return e})),v=n.filter((function(e){if("Gent"==e.gender&&"Windsor"==e.round&&"Senior"!=e.age_group)return e})),y=n.filter((function(e){if("Gent"==e.gender&&"Windsor"==e.round&&"Senior"==e.age_group)return e})),m=function(e){var t=x()(e);return null==t||t.sort((function(e,t){return e.totalScore>t.totalScore?-1:1})),t},w=function(e){var t=x()(e);return null==t||t.sort((function(e,t){return e.totalHits>t.totalHits?-1:1})),t},S=function(e){var t=x()(e);return null==t||t.sort((function(e,t){return e.totalGold>t.totalGold?-1:1})),t},W=function(e){var t=x()(e),n=t.filter((function(e){if("Barebow"==e.bow)return e})),r=t.filter((function(e){if("Longbow"==e.bow)return e})),o=t.filter((function(e){if("Recurve"==e.bow)return e})),c=t.filter((function(e){if("Compound"==e.bow)return e}));return[n=m(S(w(n))),r=m(S(w(r))),o=m(S(w(o))),c=m(S(w(c)))]},A=function(e){var t=x()(e);return"undefined"!==typeof t&&0===t.length?Object(h.jsx)("p",{children:" "}):Object(h.jsxs)("div",{children:[Object(h.jsxs)("h3",{children:[" ",t[0].bow," "]}),t.map((function(e,t){return Object(h.jsxs)("h4",{children:[" ",e.full_name," #Score:",e.totalScore," #Golds:",e.totalGold," #Hits:",e.totalHits]})}))]})};return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:[" ",0!==l.length?"Short Junior Windsor Round - Ladies":""," "]}),W(l).map((function(e,t){return A(e)})),Object(h.jsxs)("h2",{children:[" ",0!==g.length?"Short Junior Windsor Round - Gentlemen":""," "]}),W(g).map((function(e,t){return A(e)})),Object(h.jsxs)("h2",{children:[" ",0!==u.length?"Junior Windsor Round - Ladies":""," "]}),W(u).map((function(e,t){return A(e)})),Object(h.jsxs)("h2",{children:[" ",0!==O.length?"Junior Windsor Round - Gentlemen":""," "]}),W(O).map((function(e,t){return A(e)})),Object(h.jsxs)("h2",{children:[" ",0!==j.length?"Short Windsor Round - Ladies":""," "]}),W(j).map((function(e,t){return A(e)})),Object(h.jsxs)("h2",{children:[" ",0!==p.length?"Short Windsor Round - Gentlemen":""," "]}),W(p).map((function(e,t){return A(e)})),Object(h.jsxs)("h2",{children:[" ",0!==f.length?"Windsor Round - Ladies Junior":""," "]}),W(f).map((function(e,t){return A(e)})),Object(h.jsxs)("h2",{children:[" ",0!==v.length?"Windsor Round - Gentlemen Junior":""," "]}),W(v).map((function(e,t){return A(e)})),Object(h.jsxs)("h2",{children:[" ",0!==b.length?"Windsor Round - Ladies":""," "]}),W(b).map((function(e,t){return A(e)})),Object(h.jsxs)("h2",{children:[" ",0!==y.length?"Windsor Round - Gentlemen":""," "]}),W(y).map((function(e,t){return A(e)}))]}),Object(h.jsx)(o.NavLink,{to:"/",style:{color:"black",textDecoration:"none"},children:Object(h.jsx)(d.default,{title:"Menu"})})]})},y=n(103),m=n(53);n(195);var w=function(){var e=Object(a.useState)(""),t=i()(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),l=i()(c,2),u=l[0],j=l[1],f=Object(a.useState)(""),b=i()(f,2),x=b[0],p=b[1],v=Object(a.useState)(""),w=i()(v,2),S=w[0],W=w[1],A=Object(a.useState)(""),k=i()(A,2),C=k[0],L=k[1],R=Object(a.useState)(""),D=i()(R,2),G=D[0],J=D[1],P=Object(a.useState)(!0),_=i()(P,2),E=_[0],N=_[1],H={method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},body:JSON.stringify({full_name:n,gender:u,age_group:x,bow:S,club_name:C,round:G,isEligibleReward:E})};return Object(h.jsxs)(g.default,{style:{alignItems:"center"},children:[Object(h.jsxs)("h4",{children:["Enter name:",Object(h.jsx)(O.default,{style:{height:40,width:250,textAlign:"center",backgroundColor:"#e9e9e9"},onChange:function(e){return function(e){var t=e.target.value;console.log(t),r(t)}(e)}})]}),Object(h.jsxs)("h4",{children:["Select gender:",Object(h.jsx)(m.Select,{options:[{value:"lady",label:"Lady"},{value:"gent",label:"Gent"}],onChange:function(e){var t=e[0].label;console.log(t),j(t)}})]}),Object(h.jsxs)("h4",{children:["Select age group:",Object(h.jsx)(m.Select,{options:[{value:"u12",label:"U12"},{value:"u14",label:"U14"},{value:"u16",label:"U16"},{value:"u18",label:"U18"},{value:"senior",label:"Senior"}],onChange:function(e){var t=e[0].label;console.log(t),p(t)}})]}),Object(h.jsxs)("h4",{children:["Select bow:",Object(h.jsx)(m.Select,{options:[{value:"longbow",label:"Longbow"},{value:"barebow",label:"Barebow"},{value:"recurve",label:"Recurve"},{value:"compound",label:"Compound"}],onChange:function(e){var t=e[0].label;console.log(t),W(t)}})]}),Object(h.jsxs)("h4",{children:["Enter club:",Object(h.jsx)(O.default,{style:{height:40,width:250,textAlign:"center",backgroundColor:"#e9e9e9"},onChange:function(e){return function(e){var t=e.target.value;console.log(t),L(t)}(e)}})]}),Object(h.jsxs)("h4",{children:["Select round:",Object(h.jsx)(m.Select,{options:[{value:"sjw",label:"Short Junior Windsor"},{value:"jw",label:"Junior Windsor"},{value:"sw",label:"Short Windsor"},{value:"w",label:"Windsor"}],onChange:function(e){var t=e[0].label;console.log(t),J(t)}})]}),Object(h.jsxs)("h4",{children:["Is he eligible for a reward?",Object(h.jsx)(y.default,{value:E,onValueChange:N,style:{alignSelf:"center"}})]}),Object(h.jsxs)("p",{children:[" ","\n\n"]}),Object(h.jsx)(o.NavLink,{to:"/",style:{color:"black",textDecoration:"none"},children:Object(h.jsx)(d.default,{title:"SAVE",onPress:function(){return function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("Put the data"),t.next=3,s.a.awrap(fetch("https://archery-score.com/api/add_archer/",H).then((function(e){return e.json()})).then((function(e){return console.log(e)})));case 3:e=t.sent,console.log(e);case 5:case"end":return t.stop()}}),null,null,null,Promise)}()}})})]})};function S(){return Object(h.jsx)(o.HashRouter,{children:Object(h.jsx)("div",{children:Object(h.jsxs)(c.Routes,{children:[Object(h.jsx)(c.Route,{path:"/",element:Object(h.jsx)(f,{})}),Object(h.jsx)(c.Route,{path:"/archers",element:Object(h.jsx)(j,{})}),Object(h.jsx)(c.Route,{path:"/score/:id",element:Object(h.jsx)(p,{})}),Object(h.jsx)(c.Route,{path:"/report",element:Object(h.jsx)(v,{})}),Object(h.jsx)(c.Route,{path:"/register",element:Object(h.jsx)(w,{})})]})})})}r.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})},112:function(e,t,n){e.exports=n(196)}},[[112,1,2]]]);
//# sourceMappingURL=app.f68ae355.chunk.js.map