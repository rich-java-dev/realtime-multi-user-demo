(this["webpackJsonprealtime-multi-player"]=this["webpackJsonprealtime-multi-player"]||[]).push([[0],{113:function(t,n,e){},114:function(t,n,e){},230:function(t,n,e){"use strict";e.r(n);var o,c=e(0),i=e.n(c),r=e(25),a=e.n(r),s=(e(113),e(114),e(5)),u=e(34),d=e.n(u),l=e(68),f=e(96),h=e(105),p=e(247),O=e(7),j=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_ADDR||"letsdrawtogether.net",v=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).WEBSOCKET_ENDPOINT||"websockettest",S=JSON.stringify({action:"CLEAR"}),b=window.innerWidth-15,w=window.innerHeight-160,g="black",E=!1,m=null,C=new Set,x=function(t){y(t);var n="wss://".concat(j,"/").concat(v);console.log("Attempting to connect to websocket on: ".concat(n)),(m=new WebSocket(n)).onopen=function(){console.log("WebSocket Client Connected")},m.onmessage=function(t){var n=JSON.parse(t.data);"CLEAR"===(null===n||void 0===n?void 0:n.action)&&C.clear(),void 0!==(null===n||void 0===n?void 0:n.type)&&C.add(n)}},T=function(t,n){var e=t.getBoundingClientRect(),o=n.clientX-e.left,c=n.clientY-e.top,i={type:"CIRCLE",color:g,radius:2,posX:o,posY:c};m.send(JSON.stringify(i))},_=function(t){t.fillStyle="white",t.fillRect(0,0,o.width,o.height),Array.from(C).map((function(n){!function(t){var n=t.ctx,e=t.posX,o=t.posY,c=t.radius,i=t.color;n.beginPath(),n.arc(e,o,c,0,2*Math.PI),n.fillStyle=i,n.fill(),n.strokeStyle=i,n.stroke()}(Object(f.a)({ctx:t},n))}))},R=function(){m.send(S)},y=function(t){var n="https://letsdrawtogether.net/api/canvasState?roomId=".concat(t);console.log(n),fetch(n,{method:"GET"}).then((function(t){return t.json()})).then((function(t){console.log(t),C=new Set(t),console.log(C)}))},D=function(t,n){E=!1},L=function(t){var n=t.match,e=(t.location,n.params.roomId),i=Object(c.useRef)(),r=function(t,n,e){t.width=n,t.height=e,b=n,w=e};window.addEventListener("resize",r,!1);return Object(c.useEffect)(Object(l.a)(d.a.mark((function t(){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(e),(o=i.current).addEventListener("mousedown",(function(t){return T(o,t)})),c=function(){var t=Object(l.a)(d.a.mark((function t(){var e,i,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=window.innerWidth-15,i=window.innerHeight-160,r(o,e,i),a=o.getContext("2d"),_(a),n=requestAnimationFrame(c);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.next=6,c();case 6:return t.abrupt("return",(function(){cancelAnimationFrame(n)}));case 7:case"end":return t.stop()}}),t)})))),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"created by Rich White"}),Object(O.jsx)(p.a,{onClick:R,children:"Clear Canvas"}),Object(O.jsx)("canvas",{ref:i,width:b,height:w,onMouseDown:function(t){return function(t,n){T(t,n),E=!0}(o,t)},onMouseMove:function(t){return function(t,n){E&&T(t,n)}(o,t)},onMouseUp:function(t){return D()},onMouseLeave:function(t){return D()}}),Object(O.jsx)(h.a,{onChange:function(t,n){g=t.hex}})]})},W=e(249),k=function(){return Object(O.jsx)(W.a,{children:"Lets Draw Together! - created by Rich White"})},A=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(s.a,{exact:!0,path:"/",component:k}),Object(O.jsx)(s.a,{exact:!0,path:"/",component:L})]})},P=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,250)).then((function(n){var e=n.getCLS,o=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;e(t),o(t),c(t),i(t),r(t)}))},F=e(67),N=e(248);a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(F.a,{children:Object(O.jsx)(N.a,{children:Object(O.jsx)(A,{})})})}),document.getElementById("root")),P()}},[[230,1,2]]]);
//# sourceMappingURL=main.5a5e1b38.chunk.js.map