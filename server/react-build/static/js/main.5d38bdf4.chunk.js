(this["webpackJsonprealtime-multi-player"]=this["webpackJsonprealtime-multi-player"]||[]).push([[0],{113:function(n,t,e){},114:function(n,t,e){},230:function(n,t,e){"use strict";e.r(t);var o,c=e(0),i=e.n(c),r=e(25),a=e.n(r),s=(e(113),e(114),e(5)),u=e(34),d=e.n(u),l=e(68),f=e(96),h=e(105),p=e(247),O=e(7),j=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_ADDR||"letsdrawtogether.net",v=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).WEBSOCKET_ENDPOINT||"websockettest",S=JSON.stringify({action:"CLEAR"}),b=window.innerWidth-15,w=window.innerHeight-160,g="black",m=!1,E=null,C=new Set,x=function(n){y(n);var t="wss://".concat(j,"/").concat(v);console.log("Attempting to connect to websocket on: ".concat(t)),(E=new WebSocket(t)).onopen=function(){console.log("WebSocket Client Connected")},E.onmessage=function(n){var t=JSON.parse(n.data);"CLEAR"===(null===t||void 0===t?void 0:t.action)&&C.clear(),void 0!==(null===t||void 0===t?void 0:t.type)&&C.add(t)}},T=function(n,t){var e=n.getBoundingClientRect(),o=t.clientX-e.left,c=t.clientY-e.top,i={type:"CIRCLE",color:g,radius:2,posX:o,posY:c};E.send(JSON.stringify(i))},_=function(n){n.fillStyle="white",n.fillRect(0,0,o.width,o.height),Array.from(C).map((function(t){!function(n){var t=n.ctx,e=n.posX,o=n.posY,c=n.radius,i=n.color;t.beginPath(),t.arc(e,o,c,0,2*Math.PI),t.fillStyle=i,t.fill(),t.strokeStyle=i,t.stroke()}(Object(f.a)({ctx:n},t))}))},R=function(){E.send(S)},y=function(n){var t="https://letsdrawtogether.net/api/canvasState?roomId=".concat(n);console.log(t),fetch(t,{method:"GET"}).then((function(n){return n.json()})).then((function(n){console.log(n),C=new Set(n),console.log(C)}))},D=function(n,t){m=!1},L=function(n){var t=n.match,e=(n.location,t.params.roomId),i=Object(c.useRef)(),r=function(n,t,e){n.width=t,n.height=e,b=t,w=e};window.addEventListener("resize",r,!1);return Object(c.useEffect)(Object(l.a)(d.a.mark((function n(){var t,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return x(e),(o=i.current).addEventListener("mousedown",(function(n){return T(o,n)})),c=function(){var n=Object(l.a)(d.a.mark((function n(){var e,i,a;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=window.innerWidth-15,i=window.innerHeight-160,r(o,e,i),a=o.getContext("2d"),_(a),t=requestAnimationFrame(c);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),n.next=6,c();case 6:return n.abrupt("return",(function(){cancelAnimationFrame(t)}));case 7:case"end":return n.stop()}}),n)})))),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"created by Rich White"}),Object(O.jsx)(p.a,{onClick:R,children:"Clear Canvas"}),Object(O.jsx)("canvas",{ref:i,width:b,height:w,onMouseDown:function(n){return function(n,t){T(n,t),m=!0}(o,n)},onMouseMove:function(n){return function(n,t){m&&T(n,t)}(o,n)},onMouseUp:function(n){return D()},onMouseLeave:function(n){return D()}}),Object(O.jsx)(h.a,{onChange:function(n,t){g=n.hex}})]})},W=e(249),k=function(){return Object(O.jsx)(W.a,{children:"Lets Draw Together! - created by Rich White"})},A=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(s.a,{path:"/",component:k}),Object(O.jsx)(s.a,{exact:!0,path:"/room/:roomId",component:L})]})},P=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,250)).then((function(t){var e=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;e(n),o(n),c(n),i(n),r(n)}))},F=e(67),I=e(248);a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(F.a,{children:Object(O.jsx)(I.a,{children:Object(O.jsx)(A,{})})})}),document.getElementById("root")),P()}},[[230,1,2]]]);
//# sourceMappingURL=main.5d38bdf4.chunk.js.map