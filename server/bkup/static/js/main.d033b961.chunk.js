(this["webpackJsonprealtime-multi-player"]=this["webpackJsonprealtime-multi-player"]||[]).push([[0],{113:function(t,n,e){},114:function(t,n,e){},230:function(t,n,e){"use strict";e.r(n);var o,c=e(0),i=e.n(c),r=e(25),a=e.n(r),s=(e(113),e(114),e(5)),u=e(34),d=e.n(u),l=e(68),f=e(96),h=e(105),p=e(247),O=e(7),v=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_ADDR||"letsdrawtogether.net",j=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).WEBSOCKET_ENDPOINT||"websockettest",S=JSON.stringify({action:"CLEAR",topic:C}),b=window.innerWidth-15,w=window.innerHeight-160,E="black",m=!1,g=null,C="",x=new Set,R=function(){D();var t="wss://".concat(v,"/").concat(j);console.log("Attempting to connect to websocket on: ".concat(t)),(g=new WebSocket(t)).onopen=function(){console.log("WebSocket Client Connected")},g.onmessage=function(t){var n=JSON.parse(t.data);n.topic===C&&("CLEAR"===(null===n||void 0===n?void 0:n.action)&&x.clear(),void 0!==(null===n||void 0===n?void 0:n.type)&&x.add(n))}},T=function(t,n){var e=t.getBoundingClientRect(),o=n.clientX-e.left,c=n.clientY-e.top,i={topic:C,type:"CIRCLE",color:E,radius:2,posX:o,posY:c};g.send(JSON.stringify(i))},_=function(t){t.fillStyle="white",t.fillRect(0,0,o.width,o.height),Array.from(x).map((function(n){!function(t){var n=t.ctx,e=t.posX,o=t.posY,c=t.radius,i=t.color;n.beginPath(),n.arc(e,o,c,0,2*Math.PI),n.fillStyle=i,n.fill(),n.strokeStyle=i,n.stroke()}(Object(f.a)({ctx:t},n))}))},y=function(){g.send(S)},D=function(){var t="https://letsdrawtogether.net/api/canvasState?roomId=".concat(C);fetch(t,{method:"GET"}).then((function(t){return t.json()})).then((function(t){x=new Set(t)}))},L=function(t,n){m=!1},A=function(t){var n=t.match,e=(t.location,Object(c.useRef)());C=n.params.roomId,S=JSON.stringify({action:"CLEAR",topic:C});var i=function(t,n,e){t.width=n,t.height=e,b=n,w=e};window.addEventListener("resize",i,!1);return Object(c.useEffect)(Object(l.a)(d.a.mark((function t(){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return R(),(o=e.current).addEventListener("mousedown",(function(t){return T(o,t)})),c=function(){var t=Object(l.a)(d.a.mark((function t(){var e,r,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=window.innerWidth-15,r=window.innerHeight-160,i(o,e,r),a=o.getContext("2d"),_(a),n=requestAnimationFrame(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.next=6,c();case 6:return t.abrupt("return",(function(){cancelAnimationFrame(n)}));case 7:case"end":return t.stop()}}),t)})))),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"created by Rich White"}),Object(O.jsx)(p.a,{onClick:y,children:"Clear Canvas"}),Object(O.jsx)("canvas",{ref:e,width:b,height:w,onMouseDown:function(t){return function(t,n){T(t,n),m=!0}(o,t)},onMouseMove:function(t){return function(t,n){m&&T(t,n)}(o,t)},onMouseUp:function(t){return L()},onMouseLeave:function(t){return L()}}),Object(O.jsx)(h.a,{onChange:function(t,n){E=t.hex}})]})},W=e(249),k=function(){return Object(O.jsx)(W.a,{children:"Lets Draw Together! - created by Rich White"})},N=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(s.a,{exact:!0,path:"/",component:k}),Object(O.jsx)(s.a,{exact:!0,path:"/room/:roomId",component:A})]})},P=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,250)).then((function(n){var e=n.getCLS,o=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;e(t),o(t),c(t),i(t),r(t)}))},F=e(67),I=e(248);a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(F.a,{children:Object(O.jsx)(I.a,{children:Object(O.jsx)(N,{})})})}),document.getElementById("root")),P()}},[[230,1,2]]]);
//# sourceMappingURL=main.d033b961.chunk.js.map