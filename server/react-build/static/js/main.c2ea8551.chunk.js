(this["webpackJsonprealtime-multi-player"]=this["webpackJsonprealtime-multi-player"]||[]).push([[0],{148:function(t,e,n){},149:function(t,e,n){},266:function(t,e,n){"use strict";n.r(e);var o,c=n(0),a=n.n(c),i=n(10),r=n.n(i),s=(n(148),n(149),n(12)),l=n(14),u=n(20),d=n(124),h=n(17),j=n.n(h),p=n(35),f=n(268),b=n(125),O=n(131),v=n(303),m=n(312),x=n(311),g=n(315),w=n(6),C=Object(f.a)({root:{display:"flex",justifyContent:"space-between"},paintBar:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"10px"},cursorSize:{width:"60px"}}),S=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_ADDR||"drawing.richwhite.net",y=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).WEBSOCKET_ENDPOINT||"websockettest",E="",T=JSON.stringify({action:"CLEAR",topic:E}),k=window.innerWidth-15,N=window.innerHeight-200,R="black",I=0,_=!1,W=null,M=(new Set,new Set),A=new Set,L=!1,D=0,P=0,F=function(){U();var t="wss://".concat(S,"/").concat(y);console.log("Attempting to connect to websocket on: ".concat(t)),(W=new WebSocket(t)).onopen=function(){console.log("WebSocket Client Connected")},W.onmessage=function(t){var e=JSON.parse(t.data);e.topic===E&&(void 0!==(null===e||void 0===e?void 0:e.type)?A.add(e):"CLEAR"===(null===e||void 0===e?void 0:e.action)&&(M.clear(),L=!0,console.log("Clear called")))}},B=function(){var t=Object(p.a)(j.a.mark((function t(e,n){var o,c,a,i,r,s,l,u,d,h,p,f=arguments;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=f.length>2&&void 0!==f[2]?f[2]:2,c=f.length>3&&void 0!==f[3]&&f[3],a=e.getBoundingClientRect(),i=Math.floor(n.clientX-a.left),r=Math.floor(n.clientY-a.top),"touchmove"===n.type&&(i=n.touches[0].screenX,r=n.touches[0].screenY),R=c?q():R,s={topic:E,type:"CIRCLE",color:R,radius:o,posX:i,posY:r},W.send(JSON.stringify(s)),_&&D>0&&P>0&&(l=Math.sqrt(Math.pow(i-D,2)+Math.pow(r-P,2)))>4)for((r-P)/(i-D),u=(i-D)/l,d=(r-P)/l,h=1;h<=l/2;h++)p={topic:E,type:"CIRCLE",color:R,radius:o,posX:D+2*h*u,posY:P+2*h*d},W.send(JSON.stringify(p));D=i,P=r;case 12:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),H=function(t){L&&(console.log("Clear Canvas"),J(t),L=!1),Array.from(A).map((function(e){!function(t){var e=t.ctx,n=t.posX,o=t.posY,c=t.radius,a=t.color;e.beginPath(),e.arc(n,o,c,0,2*Math.PI),e.fillStyle=a,e.fill(),e.strokeStyle=a,e.stroke()}(Object(d.a)({ctx:t},e))})),M=new Set([].concat(Object(u.a)(M),Object(u.a)(A))),A=new Set},J=function(t){console.log("Clear Canvas called"),t.fillStyle="white",t.fillRect(0,0,o.width,o.height)},K=function(){W.send(T)},U=function(){var t="https://drawing.richwhite.net/api/canvasState?roomId=".concat(E);fetch(t,{method:"GET"}).then((function(t){return t.json()})).then((function(t){t.map((function(t){return A.add(t)}))}))},q=function(){return(I+=1)>360&&(I-=360),"hsl(".concat(I,", 100%, 50%)")},z=function(t,e){_=!1,D=0,P=0},X=function(t,e,n){t.width=e,t.height=n,k=e,N=n},Y=function(t){var e,n=t.match,a=(t.location,C()),i=Object(c.useRef)(),r=Object(c.useState)(2),s=Object(l.a)(r,2),u=s[0],d=s[1],h=Object(c.useState)(!1),f=Object(l.a)(h,2),S=f[0],y=f[1];void 0!==(null===n||void 0===n||null===(e=n.params)||void 0===e?void 0:e.roomId)&&(E=n.params.roomId),T=JSON.stringify({action:"CLEAR",topic:E}),Object(b.a)(i),window.addEventListener("resize",X,!1);var I=function(){var t=Object(p.a)(j.a.mark((function t(e,n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:B(e,n,u,S),_=!0;case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),W=function(){var t=Object(p.a)(j.a.mark((function t(e,n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_&&B(e,n,u,S);case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();return Object(c.useEffect)(Object(p.a)(j.a.mark((function t(){var e,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return F(),o=i.current,n=function(){var t=Object(p.a)(j.a.mark((function t(){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.innerWidth-15,window.innerHeight-160,c=o.getContext("2d"),H(c),e=requestAnimationFrame(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.next=5,n();case 5:return t.abrupt("return",(function(){cancelAnimationFrame(e)}));case 6:case"end":return t.stop()}}),t)})))),Object(w.jsxs)("div",{children:[Object(w.jsx)(v.a,{onClick:K,children:"Clear Canvas"}),Object(w.jsx)("canvas",{ref:i,width:k,height:N,onMouseDown:function(t){return I(o,t)},onMouseMove:function(t){return W(o,t)},onMouseUp:function(t){return z()},onMouseLeave:function(t){return z()},onTouchStart:function(t){return I(o,t)},onTouchMove:function(t){return W(o,t)},onTouchEnd:function(t){return z()}}),Object(w.jsxs)("div",{className:a.paintBar,children:[Object(w.jsx)(O.a,{onChange:function(t,e){R=t.hex}}),Object(w.jsx)("div",{}),Object(w.jsxs)(m.a,{children:[Object(w.jsx)(x.a,{className:a.cursorSize,value:u,label:"cursor size",variant:"outlined",onChange:function(t){var e=t.target.value;try{d(parseInt(e))}catch(n){}}}),Object(w.jsx)(g.a,{value:S,label:"Rainbow Mode",onChange:function(){y(!S)}})]})]})]})},V=n(306),G=n(307),Q=n(308),Z=n(314),$=n(305),tt=Object($.a)({toolBar:{display:"flex",justifyContent:"space-between"},selectedItem:{color:"blue",backgroundColor:"gray"},modal:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4}}),et=function(t){var e=tt(),n=Object(s.e)(),o=function(t){return n.push(t)},a=Object(c.useState)(null),i=Object(l.a)(a,2),r=(i[0],i[1]),u=Object(c.useState)(null),d=Object(l.a)(u,2),h=(d[0],d[1]),j=Object(c.useState)(!1),p=Object(l.a)(j,2),f=p[0],b=p[1],O=Object(c.useState)(""),g=Object(l.a)(O,2),C=g[0],S=g[1];return Object(w.jsx)("div",{children:Object(w.jsx)(V.a,{position:"static",color:"inherit",children:Object(w.jsxs)(G.a,{className:e.toolBar,children:[Object(w.jsx)(Q.a,{children:Object(w.jsx)(m.a,{fontWeight:"600",fontSize:24,children:"draw together"})}),Object(w.jsx)(v.a,{color:"inherit",onClick:function(){return o("")},children:"Home"}),Object(w.jsx)(v.a,{color:"inherit",onClick:function(){return b(!0)},children:"Change Room/Topic"}),Object(w.jsx)(Z.a,{open:f,onClose:function(t){t instanceof Function&&t(),r(null),h(null)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(w.jsxs)(m.a,{className:e.modal,children:[Object(w.jsx)(Q.a,{id:"modal-modal-description",sx:{mt:2},children:"Type a topic to navigate to a new Room/white Board"}),Object(w.jsx)(x.a,{onChange:function(t){return S(t.target.value)}}),Object(w.jsx)(v.a,{color:"inherit",onClick:function(){o("/room/".concat(C)),b(!1)},children:"Ok"})]})}),Object(w.jsx)(v.a,{color:"inherit",onClick:function(t){return h(t.currentTarget)},children:"Save Image"}),Object(w.jsx)(v.a,{color:"inherit",onClick:function(){return o("/about")},children:"About"}),Object(w.jsx)(v.a,{color:"inherit",onClick:function(){return o("/profile")},children:"Profile"}),Object(w.jsx)(v.a,{color:"inherit",onClick:function(){return o("/login")},children:"Login"})]})})})},nt=n(316),ot=Object(f.a)({root:{display:"flex",justifyContent:"space-between"},avatar:{width:"20vw",height:"20vw",maxWidth:"200px",maxHeight:"200px"},typography:{width:"70vw"},gap:{width:"5vw"},static_gaps:{width:"50px"}}),ct=function(){var t=ot();return Object(w.jsxs)("div",{className:t.root,children:[Object(w.jsx)("div",{className:t.gap}),Object(w.jsx)(nt.a,{className:t.avatar,alt:"RW",src:"aboutme.png"}),Object(w.jsx)("div",{className:t.gap}),Object(w.jsxs)(Q.a,{className:t.typography,align:"justify",children:["Hello! My name is Richard White. I am a software and data engineer based out of NJ. Computer science, education, and art are a few of my passions I wanted to to bring together in this fun project. While this site is still in very early development, I plan to incorporate more interaction, support and new features/variants. If you have any questions or comments you can reach me at: ",Object(w.jsx)("br",{}),Object(w.jsx)("a",{href:"mailto:therichphysicist@gmail.com",children:"therichphysicist@gmail.com"}),Object(w.jsx)("br",{}),"Thanks and enjoy!"]}),Object(w.jsx)("div",{className:t.gap})]})},at=n(309),it=n(310),rt=Object(f.a)({root:{display:"flex",top:"33%",left:"33%",position:"absolute"}}),st=function(){var t=rt(),e=Object(s.e)(),n=Object(c.useState)(""),o=Object(l.a)(n,2),a=o[0],i=o[1],r=Object(c.useState)(""),u=Object(l.a)(r,2),d=u[0],h=u[1],f=function(){var t=Object(p.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(a),console.log(d),fetch("https://drawing.richwhite.net/api/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({userName:a,pw:d})}).then((function(t){return t.text()})).then((function(t){var n;alert(t),n="/profile",e.push(n)}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(w.jsx)("div",{className:t.root,children:Object(w.jsx)(at.a,{sx:{minWidth:275},children:Object(w.jsx)(it.a,{children:Object(w.jsxs)(m.a,{component:"form",sx:{"& .MuiTextField-root":{m:1,width:"25ch"}},noValidate:!0,autoComplete:"off",children:[Object(w.jsx)("div",{children:Object(w.jsx)(x.a,{required:!0,id:"filled-required",label:"User",value:a,onChange:function(t){var e=t.target.value;i(e)}})}),Object(w.jsx)("div",{children:Object(w.jsx)(x.a,{id:"filled-password-input",label:"Password",type:"password",autoComplete:"current-password",value:d,onChange:function(t){var e=t.target.value;h(e)}})}),Object(w.jsx)("div",{children:Object(w.jsx)(v.a,{onClick:function(){return f()},children:"Log In"})})]})})})})},lt=Object(f.a)({root:{}}),ut=function(){var t=lt(),e=Object(c.useState)(""),n=Object(l.a)(e,2),o=n[0],a=n[1];return Object(c.useEffect)((function(){fetch("https://drawing.richwhite.net/api/profile").then((function(t){return t.text()})).then((function(t){return a(t)})).catch((function(t){return console.log(t)}))})),Object(w.jsx)("div",{className:t.root,children:o})},dt=function(){return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(et,{}),Object(w.jsx)(s.a,{path:"/about",component:ct}),Object(w.jsx)(s.a,{path:"/login",component:st}),Object(w.jsx)(s.a,{path:"/profile",component:ut}),Object(w.jsx)(s.a,{exact:!0,path:"/",component:Y}),Object(w.jsx)(s.a,{path:"/room/:roomId",component:Y})]})},ht=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,319)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),a(t),i(t)}))},jt=n(49),pt=n(313);r.a.render(Object(w.jsx)(a.a.StrictMode,{children:Object(w.jsx)(jt.a,{children:Object(w.jsx)(pt.a,{children:Object(w.jsx)(dt,{})})})}),document.getElementById("root")),ht()}},[[266,1,2]]]);
//# sourceMappingURL=main.c2ea8551.chunk.js.map