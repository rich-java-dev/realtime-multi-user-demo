(this["webpackJsonprealtime-multi-player"]=this["webpackJsonprealtime-multi-player"]||[]).push([[0],{148:function(t,e,n){},149:function(t,e,n){},266:function(t,e,n){"use strict";n.r(e);var o,c=n(0),a=n.n(c),i=n(10),r=n.n(i),s=(n(148),n(149),n(12)),l=n(20),u=n(122),d=n(17),h=n.n(d),j=n(35),p=n(268),f=n(123),b=n(131),O=n(303),m=n(312),v=n(311),x=n(315),g=n(6),w=Object(p.a)({root:{display:"flex",justifyContent:"space-between"},paintBar:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"10px"},cursorSize:{width:"60px"}}),C=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_ADDR||"drawing.richwhite.net",y=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).WEBSOCKET_ENDPOINT||"websockettest",S="",E=JSON.stringify({action:"CLEAR",topic:S}),T=window.innerWidth-15,k=window.innerHeight-200,N="black",R=0,I=2,_=!1,W=!1,M=null,A=(new Set,new Set),L=new Set,D=!1,P=0,F=0,B=function(){q();var t="wss://".concat(C,"/").concat(y);console.log("Attempting to connect to websocket on: ".concat(t)),(M=new WebSocket(t)).onopen=function(){console.log("WebSocket Client Connected")},M.onmessage=function(t){var e=JSON.parse(t.data);e.topic===S&&(void 0!==(null===e||void 0===e?void 0:e.type)?L.add(e):"CLEAR"===(null===e||void 0===e?void 0:e.action)&&(A.clear(),D=!0,console.log("Clear called")))}},H=function(){var t=Object(j.a)(h.a.mark((function t(e,n){var o,c,a,i,r,s,l,u,d,j,p,f=arguments;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=f.length>2&&void 0!==f[2]?f[2]:2,c=f.length>3&&void 0!==f[3]&&f[3],a=e.getBoundingClientRect(),i=Math.floor(n.clientX-a.left),r=Math.floor(n.clientY-a.top),"touchmove"===n.type&&(i=n.touches[0].screenX,r=n.touches[0].screenY),N=c?z():N,s={topic:S,type:"CIRCLE",color:N,radius:o,posX:i,posY:r},M.send(JSON.stringify(s)),W&&P>0&&F>0&&(l=Math.sqrt(Math.pow(i-P,2)+Math.pow(r-F,2)))>4)for((r-F)/(i-P),u=(i-P)/l,d=(r-F)/l,j=1;j<=l/2;j++)p={topic:S,type:"CIRCLE",color:N,radius:o,posX:P+2*j*u,posY:F+2*j*d},M.send(JSON.stringify(p));P=i,F=r;case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),J=function(t){D&&(console.log("Clear Canvas"),K(t),D=!1),Array.from(L).map((function(e){!function(t){var e=t.ctx,n=t.posX,o=t.posY,c=t.radius,a=t.color;e.beginPath(),e.arc(n,o,c,0,2*Math.PI),e.fillStyle=a,e.fill(),e.strokeStyle=a,e.stroke()}(Object(u.a)({ctx:t},e))})),A=new Set([].concat(Object(l.a)(A),Object(l.a)(L))),L=new Set},K=function(t){console.log("Clear Canvas called"),t.fillStyle="white",t.fillRect(0,0,o.width,o.height)},U=function(){M.send(E)},q=function(){var t="https://drawing.richwhite.net/api/canvasState?roomId=".concat(S);fetch(t,{method:"GET"}).then((function(t){return t.json()})).then((function(t){t.map((function(t){return L.add(t)}))}))},z=function(){return(R+=1)>360&&(R-=360),"hsl(".concat(R,", 100%, 50%)")},X=function(t,e){W=!1,P=0,F=0},Y=function(t,e,n){t.width=e,t.height=n,T=e,k=n},V=function(t){var e,n=t.match,a=(t.location,w()),i=Object(c.useRef)();void 0!==(null===n||void 0===n||null===(e=n.params)||void 0===e?void 0:e.roomId)&&(S=n.params.roomId),E=JSON.stringify({action:"CLEAR",topic:S}),Object(f.a)(i),window.addEventListener("resize",Y,!1);var r=function(){var t=Object(j.a)(h.a.mark((function t(e,n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:H(e,n,I,_),W=!0;case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),s=function(){var t=Object(j.a)(h.a.mark((function t(e,n){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:W&&H(e,n,I,_);case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(c.useEffect)(Object(j.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return B(),o=i.current,n=function(){var t=Object(j.a)(h.a.mark((function t(){var c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.innerWidth-15,window.innerHeight-160,c=o.getContext("2d"),J(c),e=requestAnimationFrame(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.next=5,n();case 5:return t.abrupt("return",(function(){cancelAnimationFrame(e)}));case 6:case"end":return t.stop()}}),t)})))),Object(g.jsxs)("div",{children:[Object(g.jsx)(O.a,{onClick:U,children:"Clear Canvas"}),Object(g.jsx)("canvas",{ref:i,width:T,height:k,onMouseDown:function(t){return r(o,t)},onMouseMove:function(t){return s(o,t)},onMouseUp:function(t){return X()},onMouseLeave:function(t){return X()},onTouchStart:function(t){return r(o,t)},onTouchMove:function(t){return s(o,t)},onTouchEnd:function(t){return X()}}),Object(g.jsxs)("div",{className:a.paintBar,children:[Object(g.jsx)(b.a,{onChange:function(t,e){N=t.hex}}),Object(g.jsx)("div",{}),Object(g.jsxs)(m.a,{children:[Object(g.jsx)(v.a,{className:a.cursorSize,label:"cursor size",variant:"outlined",onChange:function(t){var e=t.target.value;try{I=parseInt(e)}catch(n){}}}),Object(g.jsx)(x.a,{value:_,label:"Rainbow Mode",onChange:function(){_=!_}})]})]})]})},G=n(15),Q=n(306),Z=n(307),$=n(308),tt=n(314),et=n(305),nt=Object(et.a)({toolBar:{display:"flex",justifyContent:"space-between"},selectedItem:{color:"blue",backgroundColor:"gray"},modal:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4}}),ot=function(t){var e=nt(),n=Object(s.e)(),o=function(t){return n.push(t)},a=Object(c.useState)(null),i=Object(G.a)(a,2),r=(i[0],i[1]),l=Object(c.useState)(null),u=Object(G.a)(l,2),d=(u[0],u[1]),h=Object(c.useState)(!1),j=Object(G.a)(h,2),p=j[0],f=j[1],b=Object(c.useState)(""),x=Object(G.a)(b,2),w=x[0],C=x[1];return Object(g.jsx)("div",{children:Object(g.jsx)(Q.a,{position:"static",color:"inherit",children:Object(g.jsxs)(Z.a,{className:e.toolBar,children:[Object(g.jsx)($.a,{children:Object(g.jsx)(m.a,{fontWeight:"600",fontSize:24,children:"draw together"})}),Object(g.jsx)(O.a,{color:"inherit",onClick:function(){return o("")},children:"Home"}),Object(g.jsx)(O.a,{color:"inherit",onClick:function(){return f(!0)},children:"Change Room/Topic"}),Object(g.jsx)(tt.a,{open:p,onClose:function(t){t instanceof Function&&t(),r(null),d(null)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(g.jsxs)(m.a,{className:e.modal,children:[Object(g.jsx)($.a,{id:"modal-modal-description",sx:{mt:2},children:"Type a topic to navigate to a new Room/white Board"}),Object(g.jsx)(v.a,{onChange:function(t){return C(t.target.value)}}),Object(g.jsx)(O.a,{color:"inherit",onClick:function(){o("/room/".concat(w)),f(!1)},children:"Ok"})]})}),Object(g.jsx)(O.a,{color:"inherit",onClick:function(t){return d(t.currentTarget)},children:"Save Image"}),Object(g.jsx)(O.a,{color:"inherit",onClick:function(){return o("/about")},children:"About"}),Object(g.jsx)(O.a,{color:"inherit",onClick:function(){return o("/profile")},children:"Profile"}),Object(g.jsx)(O.a,{color:"inherit",onClick:function(){return o("/login")},children:"Login"})]})})})},ct=n(316),at=Object(p.a)({root:{display:"flex",justifyContent:"space-between"},avatar:{width:"20vw",height:"20vw",maxWidth:"200px",maxHeight:"200px"},typography:{width:"70vw"},gap:{width:"5vw"},static_gaps:{width:"50px"}}),it=function(){var t=at();return Object(g.jsxs)("div",{className:t.root,children:[Object(g.jsx)("div",{className:t.gap}),Object(g.jsx)(ct.a,{className:t.avatar,alt:"RW",src:"aboutme.png"}),Object(g.jsx)("div",{className:t.gap}),Object(g.jsxs)($.a,{className:t.typography,align:"justify",children:["Hello! My name is Richard White. I am a software and data engineer based out of NJ. Computer science, education, and art are a few of my passions I wanted to to bring together in this fun project. While this site is still in very early development, I plan to incorporate more interaction, support and new features/variants. If you have any questions or comments you can reach me at: ",Object(g.jsx)("br",{}),Object(g.jsx)("a",{href:"mailto:therichphysicist@gmail.com",children:"therichphysicist@gmail.com"}),Object(g.jsx)("br",{}),"Thanks and enjoy!"]}),Object(g.jsx)("div",{className:t.gap})]})},rt=n(309),st=n(310),lt=Object(p.a)({root:{display:"flex",top:"33%",left:"33%",position:"absolute"}}),ut=function(){var t=lt(),e=Object(s.e)(),n=Object(c.useState)(""),o=Object(G.a)(n,2),a=o[0],i=o[1],r=Object(c.useState)(""),l=Object(G.a)(r,2),u=l[0],d=l[1],p=function(){var t=Object(j.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(a),console.log(u),fetch("https://drawing.richwhite.net/api/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({userName:a,pw:u})}).then((function(t){return t.text()})).then((function(t){var n;alert(t),n="/profile",e.push(n)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(g.jsx)("div",{className:t.root,children:Object(g.jsx)(rt.a,{sx:{minWidth:275},children:Object(g.jsx)(st.a,{children:Object(g.jsxs)(m.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(g.jsx)("div",{children:Object(g.jsx)(v.a,{required:!0,id:"filled-required",label:"User",value:a,onChange:function(t){var e=t.target.value;i(e)}})}),Object(g.jsx)("div",{children:Object(g.jsx)(v.a,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",value:u,onChange:function(t){var e=t.target.value;d(e)}})}),Object(g.jsx)("div",{children:Object(g.jsx)(O.a,{onClick:function(){return p()},children:"Log In"})})]})})})})},dt=Object(p.a)({root:{}}),ht=function(){var t=dt(),e=Object(c.useState)(""),n=Object(G.a)(e,2),o=n[0],a=n[1];return Object(c.useEffect)((function(){fetch("https://drawing.richwhite.net/api/profile").then((function(t){return t.text()})).then((function(t){return a(t)})).catch((function(t){return console.log(t)}))})),Object(g.jsx)("div",{className:t.root,children:o})},jt=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(ot,{}),Object(g.jsx)(s.a,{path:"/about",component:it}),Object(g.jsx)(s.a,{path:"/login",component:ut}),Object(g.jsx)(s.a,{path:"/profile",component:ht}),Object(g.jsx)(s.a,{exact:!0,path:"/",component:V}),Object(g.jsx)(s.a,{path:"/room/:roomId",component:V})]})},pt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,319)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),a(t),i(t)}))},ft=n(49),bt=n(313);r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(ft.a,{children:Object(g.jsx)(bt.a,{children:Object(g.jsx)(jt,{})})})}),document.getElementById("root")),pt()}},[[266,1,2]]]);
//# sourceMappingURL=main.2bfa1181.chunk.js.map