(()=>{"use strict";var e={7163:(e,n,t)=>{t.r(n),t.d(n,{default:()=>W});var r=t(4521),l=t(6240),o=t(1180),a=t(2982),u=t(885),i=t(4687),s=t.n(i),c=t(937),d=t(6015),f=t(4490),h=t(1687);const g=function(){var e=(0,c.useState)([]),n=(0,u.default)(e,2),t=n[0],r=n[1];(0,c.useEffect)((function(){o()}),[]);var o=function(){var e,n;return s().async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().awrap(fetch("https://archery.ajraou.com/api/archer/"));case 2:return e=t.sent,t.next=5,s().awrap(e.json());case 5:n=t.sent,r(n);case 7:case"end":return t.stop()}}),null,null,null,Promise)};return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:function(e){var n=(0,a.default)(e);return null==n||n.sort((function(e,n){return e.full_name.localeCompare(n.full_name)})),null==n||n.sort((function(e,n){return e.target_number<n.target_number?-1:1})),n}(t).map((function(e,n){return(0,h.jsx)("div",{children:(0,h.jsxs)(l.NavLink,{to:"/score/"+e.id,style:{color:"black",textDecoration:"none"},children:[(0,h.jsxs)(f.default,{style:{fontSize:20},children:[" ",e.full_name," ","\t"]}),(0,h.jsxs)(f.default,{style:{fontSize:20,color:"blue"},children:[" target: ",e.target_number," ","\n\n"]})]})})}))}),(0,h.jsx)(l.NavLink,{to:"/admin123",style:{color:"black",textDecoration:"none"},children:(0,h.jsx)(d.default,{title:"Menu"})})]})};const x=function(e){e.navigation;return(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Let's score"}),(0,h.jsx)(l.Link,{to:"/archers",style:{textDecoration:"none"},children:(0,h.jsx)(d.default,{title:"Score an archer"})}),(0,h.jsx)("p",{children:"\n\n\n"}),(0,h.jsx)("p",{children:"\n\n\n"}),(0,h.jsx)("p",{children:"\n\n\n"}),(0,h.jsx)("p",{children:"\n\n\n"}),(0,h.jsx)(l.Link,{to:"/register",style:{textDecoration:"none"},children:(0,h.jsx)(d.default,{title:"Add an archer"})}),(0,h.jsx)("p",{children:"\n\n\n"}),(0,h.jsx)("p",{children:"\n\n\n"}),(0,h.jsx)("p",{children:"\n\n\n"}),(0,h.jsx)("p",{children:"\n\n\n"}),(0,h.jsx)(l.Link,{to:"/",style:{textDecoration:"none"},children:(0,h.jsx)(d.default,{title:"See the report"})}),(0,h.jsx)("p",{children:"\n\n\n"}),(0,h.jsx)("p",{children:"\n\n\n"}),(0,h.jsx)("p",{children:"\n\n\n"}),(0,h.jsx)("p",{children:"\n\n\n"}),(0,h.jsx)(l.Link,{to:"/archersToUpdate",style:{textDecoration:"none"},children:(0,h.jsx)(d.default,{title:"Update an archer"})})]})};var j=t(9736),p=t(4977);t(3294);const v=function(){var e=(0,o.useParams)(),n=(0,c.useState)([]),t=(0,u.default)(n,2),r=t[0],i=t[1],f=(c.useRef([]),(0,c.useState)(Array.from({length:3},(function(){return Array.from({length:6},(function(){return Array.from({length:6},(function(){return null}))}))})))),g=(0,u.default)(f,2),x=g[0],v=g[1];(0,c.useEffect)((function(){b(),y()}),[]);var b=function(){var n,t;return s().async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s().awrap(fetch("https://archery.ajraou.com/api/archer_unique/"+e.id+"/"));case 2:return n=r.sent,r.next=5,s().awrap(n.json());case 5:t=r.sent,i(t);case 7:case"end":return r.stop()}}),null,null,null,Promise)},y=function(){var n,t;return s().async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s().awrap(fetch("https://archery.ajraou.com/api/archer/"+e.id+"/arrows/"));case 2:return n=r.sent,r.next=5,s().awrap(n.json());case 5:t=r.sent,v(t);case 7:case"end":return r.stop()}}),null,null,null,Promise)},m=(0,c.useState)(Array.from({length:3},(function(){return Array.from({length:6},(function(){return Array.from({length:6},(function(){return null}))}))}))),w=(0,u.default)(m,2),S=(w[0],w[1],function(e){for(var n=(0,a.default)(e),t=0,r=0;r<6;r++)t+=n[r].filter((function(e){return 9==e})).length;return t}),C=function(e){for(var n=(0,a.default)(e),t=0,r=0;r<3;r++)t+=S(n[r]);return t},W=function(e){for(var n=(0,a.default)(e),t=0,r=0;r<6;r++)t+=n[r].filter((function(e){return[1,2,3,4,5,6,7,8,9].includes(e)})).length;return t},k=function(e){for(var n=(0,a.default)(e),t=0,r=0;r<3;r++)t+=W(n[r]);return t},A=function(e){for(var n=(0,a.default)(e),t=0,r=0;r<6;r++)""!=n[r]&&(t+=n[r]);return t},_=function(e){for(var n=(0,a.default)(e),t=0,r=0;r<6;r++)t+=A(n[r]);return t},L=function(e){for(var n=(0,a.default)(e),t=0,r=0;r<3;r++)t+=_(n[r]);return t},R={method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},body:JSON.stringify({score_sheet:x,total:L(x),hits:k(x),golds:C(x)})},E=function(){return s().async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s().awrap(fetch("https://archery.ajraou.com/api/archer/"+e.id+"/updatescore/",R).then((function(e){return e.json()})).then((function(e){return console.log(e)})));case 2:n.sent;case 3:case"end":return n.stop()}}),null,null,null,Promise)},O=(0,c.useRef)(new Array);return(0,c.useRef)(),(0,h.jsxs)(j.default,{style:{alignItems:"center"},children:[(0,h.jsxs)("h3",{align:"left",children:[" Score for ",r.full_name]}),x.map((function(e,n){return(0,h.jsxs)(j.default,{style:{textAlign:""},children:[(0,h.jsxs)(j.default,{style:{flexDirection:"row"},children:[(0,h.jsxs)("h4",{children:[" DISTANCE ",n+1," "]}),(0,h.jsx)(p.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#a9e9e9",borderWidth:3,marginLeft:166},value:"S"}),(0,h.jsx)(p.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#a9e9e9",borderWidth:3},value:"H"}),(0,h.jsx)(p.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#a9e9e9",borderWidth:3},value:"G"})]}),e.map((function(e,t){return(0,h.jsxs)(j.default,{style:{flexDirection:"row"},children:[(0,h.jsxs)("p",{style:{height:20,width:20,textAlign:"center"},children:[" E",t+1," "]}),e.map((function(e,r){return(0,h.jsx)(j.default,{style:{flexDirection:"row"},children:(0,h.jsx)(p.default,{id:36*n+6*t+r,style:{height:50,width:40,textAlign:"center",borderColor:"#999999",borderWidth:3},placeholder:e,maxLength:1,keyboardType:"numeric",onChange:function(e){return function(e,n,t,r){var l=(0,a.default)(x);l[e][n][t]=+r.target.value,v(l)}(n,t,r,e)},ref:function(e){return O.current.push(e)},onSubmitEditing:function(){return O.current[36*n+6*t+r+1].focus()}})})})),(0,h.jsx)(p.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:A(x[n][t])}),(0,h.jsx)(p.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:x[n][t].filter((function(e){return 0!=e&&""!=e})).length}),(0,h.jsx)(p.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:x[n][t].filter((function(e){return 9==e})).length})]})})),(0,h.jsxs)(j.default,{style:{flexDirection:"row"},children:[(0,h.jsx)(p.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3,marginLeft:260},value:_(x[n])}),(0,h.jsx)(p.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:W(x[n])}),(0,h.jsx)(p.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:S(x[n])})]}),(0,h.jsxs)("p",{children:[" ","\n\n\n\n\n"," "]}),(0,h.jsxs)(j.default,{style:[{flexDirection:"row"}],children:[(0,h.jsx)(d.default,{title:"SAVE",onPress:function(){return E()}}),(0,h.jsx)(l.NavLink,{to:"/archers",style:{color:"black",textDecoration:"none",marginLeft:100},children:(0,h.jsx)(d.default,{title:"SAVE AND BACK",onPress:function(){return E()}})}),(0,h.jsx)(l.NavLink,{to:"/archers",style:{color:"black",textDecoration:"none",marginLeft:100},children:(0,h.jsx)(d.default,{title:"BACK",style:{height:500}})})]}),(0,h.jsxs)(j.default,{children:[(0,h.jsxs)("p",{children:[" ","\n\n\n\n\n"," "]}),(0,h.jsxs)("p",{children:[" ","\n\n\n\n\n"," "]})]})]})})),(0,h.jsxs)(j.default,{style:{flexDirection:"row"},children:[(0,h.jsx)(p.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3,marginLeft:260},value:L(x)}),(0,h.jsx)(p.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:k(x)}),(0,h.jsx)(p.default,{style:{height:50,width:40,textAlign:"center",backgroundColor:"#e9e9e9",borderWidth:3},value:C(x)})]})]})};const b=function(){var e=(0,c.useState)([]),n=(0,u.default)(e,2),t=n[0],r=n[1];(0,c.useEffect)((function(){l()}),[]);var l=function(){var e,n;return s().async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().awrap(fetch("https://archery.ajraou.com/api/report/"));case 2:return e=t.sent,t.next=5,s().awrap(e.json());case 5:n=t.sent,r(n);case 7:case"end":return t.stop()}}),null,null,null,Promise)},o=t.filter((function(e){if("Lady"==e.gender&&"Short Junior Windsor"==e.round)return e})),i=t.filter((function(e){if("Lady"==e.gender&&"Junior Windsor"==e.round)return e})),g=t.filter((function(e){if("Lady"==e.gender&&"Short Windsor"==e.round)return e})),x=t.filter((function(e){if("Lady"==e.gender&&"Windsor"==e.round&&"u18"==e.age_group)return e})),p=t.filter((function(e){if("Lady"==e.gender&&"Windsor"==e.round&&"u21"==e.age_group)return e})),v=t.filter((function(e){if("Lady"==e.gender&&"Windsor"==e.round&&"Senior"==e.age_group)return e})),b=t.filter((function(e){if("Gent"==e.gender&&"Short Junior Windsor"==e.round)return e})),y=t.filter((function(e){if("Gent"==e.gender&&"Junior Windsor"==e.round)return e})),m=t.filter((function(e){if("Gent"==e.gender&&"Short Windsor"==e.round)return e})),w=t.filter((function(e){if("Gent"==e.gender&&"Windsor"==e.round&&"u18"==e.age_group)return e})),S=t.filter((function(e){if("Gent"==e.gender&&"Windsor"==e.round&&"u21"==e.age_group)return e})),C=t.filter((function(e){if("Gent"==e.gender&&"Windsor"==e.round&&"Senior"==e.age_group)return e})),W=function(e){var n=(0,a.default)(e);return null==n||n.sort((function(e,n){return e.totalScore>n.totalScore?-1:1})),n},k=function(e){var n=(0,a.default)(e);return null==n||n.sort((function(e,n){return e.totalHits>n.totalHits?-1:1})),n},A=function(e){var n=(0,a.default)(e);return null==n||n.sort((function(e,n){return e.totalGold>n.totalGold?-1:1})),n},_=function(e){var n=(0,a.default)(e),t=n.filter((function(e){if("Barebow"==e.bow)return e})),r=n.filter((function(e){if("Longbow"==e.bow)return e})),l=n.filter((function(e){if("Recurve"==e.bow)return e})),o=n.filter((function(e){if("Compound"==e.bow)return e}));return[t=W(A(k(t))),r=W(A(k(r))),l=W(A(k(l))),o=W(A(k(o)))]},L=function(e){var n=(0,a.default)(e);return"undefined"!==typeof n&&0===n.length?(0,h.jsx)("p",{children:" "}):(0,h.jsxs)("div",{children:[(0,h.jsxs)("h3",{children:[" ",n[0].bow," "]}),n.map((function(e,n){return(0,h.jsxs)(f.default,{style:{fontWeight:"bold",color:0==e.isEligibleReward?"red":"black"},children:[n+1,": ",e.full_name," #Club: ",e.club_name," #Score:",e.totalScore," #Golds:",e.totalGold," #Hits:",e.totalHits," ",0==e.isEligibleReward?"###   NOT ELIGIBLE   ###":""," ","\n\n"]})}))]})};return(0,h.jsxs)(j.default,{style:{alignItems:"center"},children:[(0,h.jsx)("h1",{children:" NUNEATON ARCHERS"}),(0,h.jsx)("h1",{children:" OPEN WINDSOR "}),(0,h.jsx)(f.default,{style:{textAlign:"center",fontSize:80},children:" 2023 "}),(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{children:[(0,h.jsxs)("h2",{children:[" ",0!==o.length?"Short Junior Windsor Round - Ladies":""," "]}),_(o).map((function(e,n){return L(e)})),(0,h.jsxs)("h2",{children:[" ",0!==b.length?"Short Junior Windsor Round - Gentlemen":""," "]}),_(b).map((function(e,n){return L(e)})),(0,h.jsxs)("h2",{children:[" ",0!==i.length?"Junior Windsor Round - Ladies":""," "]}),_(i).map((function(e,n){return L(e)})),(0,h.jsxs)("h2",{children:[" ",0!==y.length?"Junior Windsor Round - Gentlemen":""," "]}),_(y).map((function(e,n){return L(e)})),(0,h.jsxs)("h2",{children:[" ",0!==g.length?"Short Windsor Round - Ladies":""," "]}),_(g).map((function(e,n){return L(e)})),(0,h.jsxs)("h2",{children:[" ",0!==m.length?"Short Windsor Round - Gentlemen":""," "]}),_(m).map((function(e,n){return L(e)})),(0,h.jsxs)("h2",{children:[" ",0!==x.length?"Windsor Round - Ladies Junior":""," "]}),_(x).map((function(e,n){return L(e)})),(0,h.jsxs)("h2",{children:[" ",0!==w.length?"Windsor Round - Gentlemen Junior":""," "]}),_(w).map((function(e,n){return L(e)})),(0,h.jsxs)("h2",{children:[" ",0!==p.length?"Windsor Round - Ladies U21":""," "]}),_(p).map((function(e,n){return L(e)})),(0,h.jsxs)("h2",{children:[" ",0!==S.length?"Windsor Round - Gentlemen U21":""," "]}),_(S).map((function(e,n){return L(e)})),(0,h.jsxs)("h2",{children:[" ",0!==v.length?"Windsor Round - Ladies":""," "]}),_(v).map((function(e,n){return L(e)})),(0,h.jsxs)("h2",{children:[" ",0!==C.length?"Windsor Round - Gentlemen":""," "]}),_(C).map((function(e,n){return L(e)}))]}),(0,h.jsx)(d.default,{title:"REFRESH",onPress:function(){return l()}})]})]})};var y=t(6370),m=t(5425);t(1970);const w=function(){var e=(0,c.useState)(""),n=(0,u.default)(e,2),t=n[0],r=n[1],o=(0,c.useState)(""),a=(0,u.default)(o,2),i=a[0],f=a[1],g=(0,c.useState)(""),x=(0,u.default)(g,2),v=x[0],b=x[1],w=(0,c.useState)(""),S=(0,u.default)(w,2),C=S[0],W=S[1],k=(0,c.useState)(""),A=(0,u.default)(k,2),_=A[0],L=A[1],R=(0,c.useState)(""),E=(0,u.default)(R,2),O=E[0],P=E[1],D=(0,c.useState)(""),G=(0,u.default)(D,2),N=G[0],J=G[1],U=(0,c.useState)(!0),T=(0,u.default)(U,2),I=T[0],H=T[1],B={method:"POST",headers:{"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},body:JSON.stringify({full_name:t,gender:i,age_group:v,bow:C,club_name:_,round:O,isEligibleReward:I,target_number:N})};return(0,h.jsxs)(j.default,{style:{alignItems:"center"},children:[(0,h.jsxs)("h4",{children:["Enter name:",(0,h.jsx)(p.default,{style:{height:40,width:250,textAlign:"center",backgroundColor:"#e9e9e9"},onChange:function(e){return function(e){var n=e.target.value;console.log(n),r(n)}(e)}})]}),(0,h.jsxs)("h4",{children:["Select gender:",(0,h.jsx)(m.Select,{options:[{value:"lady",label:"Lady"},{value:"gent",label:"Gent"}],onChange:function(e){var n=e[0].label;console.log(n),f(n)}})]}),(0,h.jsxs)("h4",{children:["Select age group:",(0,h.jsx)(m.Select,{options:[{value:"u12",label:"U12"},{value:"u14",label:"U14"},{value:"u16",label:"U16"},{value:"u18",label:"U18"},{value:"u21",label:"U21"},{value:"senior",label:"Senior"}],onChange:function(e){var n=e[0].label;console.log(n),b(n)}})]}),(0,h.jsxs)("h4",{children:["Select bow:",(0,h.jsx)(m.Select,{options:[{value:"longbow",label:"Longbow"},{value:"barebow",label:"Barebow"},{value:"recurve",label:"Recurve"},{value:"compound",label:"Compound"}],onChange:function(e){var n=e[0].label;console.log(n),W(n)}})]}),(0,h.jsxs)("h4",{children:["Enter club:",(0,h.jsx)(p.default,{style:{height:40,width:250,textAlign:"center",backgroundColor:"#e9e9e9"},onChange:function(e){return function(e){var n=e.target.value;console.log(n),L(n)}(e)}})]}),(0,h.jsxs)("h4",{children:["Select round:",(0,h.jsx)(m.Select,{options:[{value:"sjw",label:"Short Junior Windsor"},{value:"jw",label:"Junior Windsor"},{value:"sw",label:"Short Windsor"},{value:"w",label:"Windsor"}],onChange:function(e){var n=e[0].label;console.log(n),P(n)}})]}),(0,h.jsxs)("h4",{children:["Enter target number:",(0,h.jsx)(p.default,{style:{height:40,width:250,textAlign:"center",backgroundColor:"#e9e9e9"},onChange:function(e){return function(e){var n=e.target.value;console.log(n),J(n)}(e)}})]}),(0,h.jsxs)("h4",{children:["Is he eligible for a reward?",(0,h.jsx)(y.default,{value:I,onValueChange:H,style:{alignSelf:"center"}})]}),(0,h.jsxs)("p",{children:[" ","\n\n"]}),(0,h.jsx)(l.NavLink,{to:"/admin123",style:{color:"black",textDecoration:"none"},children:(0,h.jsx)(d.default,{title:"SAVE",onPress:function(){return function(){var e;return s().async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Put the data"),n.next=3,s().awrap(fetch("https://archery.ajraou.com/api/add_archer/",B).then((function(e){return e.json()})).then((function(e){return console.log(e)})));case 3:e=n.sent,console.log(e);case 5:case"end":return n.stop()}}),null,null,null,Promise)}()}})})]})};const S=function(){var e=(0,c.useState)([]),n=(0,u.default)(e,2),t=n[0],r=n[1];(0,c.useEffect)((function(){o()}),[]);var o=function(){var e,n;return s().async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s().awrap(fetch("https://archery.ajraou.com/api/archer/"));case 2:return e=t.sent,t.next=5,s().awrap(e.json());case 5:n=t.sent,r(n);case 7:case"end":return t.stop()}}),null,null,null,Promise)};return(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:function(e){var n=(0,a.default)(e);return null==n||n.sort((function(e,n){return e.target_number>n.target_number?-1:1})),n}(t).map((function(e,n){return(0,h.jsxs)(l.NavLink,{to:"/update/"+e.id,style:{color:"black",textDecoration:"none"},children:[(0,h.jsxs)(f.default,{style:{fontSize:20},children:[" ",e.full_name," ","\t"]}),(0,h.jsxs)(f.default,{style:{fontSize:20,color:"blue"},children:[" target: ",e.target_number," ","\n\n"]})]})}))}),(0,h.jsx)(l.NavLink,{to:"/admin123",style:{color:"black",textDecoration:"none"},children:(0,h.jsx)(d.default,{title:"Menu"})})]})};const C=function(){var e=(0,o.useParams)(),n=(0,c.useState)([]),t=(0,u.default)(n,2),r=t[0],a=t[1];(0,c.useEffect)((function(){i()}),[]);var i=function(){var n,t;return s().async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,s().awrap(fetch("https://archery.ajraou.com/api/archer_unique/"+e.id+"/"));case 2:return n=r.sent,r.next=5,s().awrap(n.json());case 5:t=r.sent,a(t);case 7:case"end":return r.stop()}}),null,null,null,Promise)},f=(0,c.useState)(""),g=(0,u.default)(f,2),x=g[0],v=g[1],b=(0,c.useState)(""),w=(0,u.default)(b,2),S=w[0],C=w[1],W=(0,c.useState)(""),k=(0,u.default)(W,2),A=k[0],_=k[1],L=(0,c.useState)(""),R=(0,u.default)(L,2),E=R[0],O=R[1],P=(0,c.useState)(""),D=(0,u.default)(P,2),G=D[0],N=D[1],J=(0,c.useState)(""),U=(0,u.default)(J,2),T=U[0],I=U[1],H=(0,c.useState)(""),B=(0,u.default)(H,2),M=B[0],V=B[1],z=(0,c.useState)(!0),q=(0,u.default)(z,2),F=q[0],K=q[1],Q={method:"PUT",headers:{"Content-Type":"application/json; charset=utf-8",Accept:"application/json"},body:JSON.stringify({full_name:x,gender:S,age_group:A,bow:E,club_name:G,round:T,isEligibleReward:F,target_number:M})};return(0,h.jsxs)(j.default,{style:{alignItems:"center"},children:[(0,h.jsxs)("h4",{children:["Enter name:",(0,h.jsx)(p.default,{placeholder:r.full_name,editable:!0,style:{height:40,width:250,textAlign:"center",backgroundColor:"#e9e9e9"},onChange:function(e){return function(e){var n=e.target.value;console.log(n),v(n)}(e)}})]}),(0,h.jsxs)("h4",{children:["Select gender:",(0,h.jsx)(m.Select,{options:[{value:"lady",label:"Lady"},{value:"gent",label:"Gent"}],onChange:function(e){var n=e[0].label;console.log(n),C(n)}})]}),(0,h.jsxs)("h4",{children:["Select age group:",(0,h.jsx)(m.Select,{options:[{value:"u12",label:"U12"},{value:"u14",label:"U14"},{value:"u16",label:"U16"},{value:"u18",label:"U18"},{value:"senior",label:"Senior"}],onChange:function(e){var n=e[0].label;console.log(n),_(n)}})]}),(0,h.jsxs)("h4",{children:["Select bow:",(0,h.jsx)(m.Select,{options:[{value:"longbow",label:"Longbow"},{value:"barebow",label:"Barebow"},{value:"recurve",label:"Recurve"},{value:"compound",label:"Compound"}],onChange:function(e){var n=e[0].label;console.log(n),O(n)}})]}),(0,h.jsxs)("h4",{children:["Enter club:",(0,h.jsx)(p.default,{style:{height:40,width:250,textAlign:"center",backgroundColor:"#e9e9e9"},onChange:function(e){return function(e){var n=e.target.value;console.log(n),N(n)}(e)}})]}),(0,h.jsxs)("h4",{children:["Select round:",(0,h.jsx)(m.Select,{options:[{value:"sjw",label:"Short Junior Windsor"},{value:"jw",label:"Junior Windsor"},{value:"sw",label:"Short Windsor"},{value:"w",label:"Windsor"}],onChange:function(e){var n=e[0].label;console.log(n),I(n)}})]}),(0,h.jsxs)("h4",{children:["Enter target number:",(0,h.jsx)(p.default,{style:{height:40,width:250,textAlign:"center",backgroundColor:"#e9e9e9"},onChange:function(e){return function(e){var n=e.target.value;console.log(n),V(n)}(e)}})]}),(0,h.jsxs)("h4",{children:["Is he eligible for a reward?",(0,h.jsx)(y.default,{value:F,onValueChange:K,style:{alignSelf:"center"}})]}),(0,h.jsxs)("p",{children:[" ","\n\n"]}),(0,h.jsx)(l.NavLink,{to:"/admin123",style:{color:"black",textDecoration:"none"},children:(0,h.jsx)(d.default,{title:"SAVE",onPress:function(){return function(){var e;return s().async((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("Put the data"),n.next=3,s().awrap(fetch("https://archery.ajraou.com/api/archer/"+r.id+"/updatedetails/",Q).then((function(e){return e.json()})).then((function(e){return console.log(e)})));case 3:e=n.sent,console.log(e);case 5:case"end":return n.stop()}}),null,null,null,Promise)}()}})})]})};function W(){return(0,h.jsx)(l.HashRouter,{children:(0,h.jsx)("div",{children:(0,h.jsxs)(o.Routes,{children:[(0,h.jsx)(o.Route,{path:"/admin123",element:(0,h.jsx)(x,{})}),(0,h.jsx)(o.Route,{path:"/update/:id",element:(0,h.jsx)(C,{})}),(0,h.jsx)(o.Route,{path:"/archersToUpdate",element:(0,h.jsx)(S,{})}),(0,h.jsx)(o.Route,{path:"/archers",element:(0,h.jsx)(g,{})}),(0,h.jsx)(o.Route,{path:"/score/:id",element:(0,h.jsx)(v,{})}),(0,h.jsx)(o.Route,{path:"/",element:(0,h.jsx)(b,{})}),(0,h.jsx)(o.Route,{path:"/register",element:(0,h.jsx)(w,{})})]})})})}r.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"}})}},n={};function t(r){var l=n[r];if(void 0!==l)return l.exports;var o=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}t.m=e,(()=>{var e=[];t.O=(n,r,l,o)=>{if(!r){var a=1/0;for(c=0;c<e.length;c++){for(var[r,l,o]=e[c],u=!0,i=0;i<r.length;i++)(!1&o||a>=o)&&Object.keys(t.O).every((e=>t.O[e](r[i])))?r.splice(i--,1):(u=!1,o<a&&(a=o));if(u){e.splice(c--,1);var s=l();void 0!==s&&(n=s)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[r,l,o]}})(),t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},(()=>{var e,n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;t.t=function(r,l){if(1&l&&(r=this(r)),8&l)return r;if("object"===typeof r&&r){if(4&l&&r.__esModule)return r;if(16&l&&"function"===typeof r.then)return r}var o=Object.create(null);t.r(o);var a={};e=e||[null,n({}),n([]),n(n)];for(var u=2&l&&r;"object"==typeof u&&!~e.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,t.d(o,a),o}})(),t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={179:0};t.O.j=n=>0===e[n];var n=(n,r)=>{var l,o,[a,u,i]=r,s=0;if(a.some((n=>0!==e[n]))){for(l in u)t.o(u,l)&&(t.m[l]=u[l]);if(i)var c=i(t)}for(n&&n(r);s<a.length;s++)o=a[s],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))})();var r=t.O(void 0,[345],(()=>t(6565)));r=t.O(r)})();
//# sourceMappingURL=main.c7efdf86.js.map