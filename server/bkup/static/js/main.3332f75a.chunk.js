(this["webpackJsonprealtime-multi-player"]=this["webpackJsonprealtime-multi-player"]||[]).push([[0],{110:function(n,t,e){},111:function(n,t,e){},227:function(n,t,e){"use strict";e.r(t);var o,c=e(0),i=e.n(c),r=e(22),a=e.n(r),s=(e(110),e(111),e(31)),u=e.n(s),l=e(65),d=e(93),f=e(102),h=e(244),O=e(246),p=e(6),v=function(){return Object(p.jsx)(O.a,{children:"Lets Draw Together! - created by Rich White"})},S=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_ADDR||"letsdrawtogether.net",j=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).WEBSOCKET_ENDPOINT||"websockettest",w=JSON.stringify({action:"CLEAR"}),b=window.innerWidth-15,g=window.innerHeight-150,E="black",C=!1,T=null,_=new Set,m=function(){y();var n="wss://".concat(S,"/").concat(j);console.log("Attempting to connect to websocket on: ".concat(n)),(T=new WebSocket(n)).onopen=function(){console.log("WebSocket Client Connected")},T.onmessage=function(n){var t=JSON.parse(n.data);"CLEAR"===(null===t||void 0===t?void 0:t.action)&&_.clear(),void 0!==(null===t||void 0===t?void 0:t.type)&&_.add(t)}},x=function(n,t){var e=n.getBoundingClientRect(),o=t.clientX-e.left,c=t.clientY-e.top,i={type:"CIRCLE",color:E,radius:2,posX:o,posY:c};T.send(JSON.stringify(i))},R=function(n){n.fillStyle="white",n.fillRect(0,0,o.width,o.height),Array.from(_).map((function(t){!function(n){var t=n.ctx,e=n.posX,o=n.posY,c=n.radius,i=n.color;t.beginPath(),t.arc(e,o,c,0,2*Math.PI),t.fillStyle=i,t.fill(),t.strokeStyle=i,t.stroke()}(Object(d.a)({ctx:n},t))}))},D=function(){T.send(w)},y=function(){var n="https://letsdrawtogether.net/api/canvasState";console.log(n),fetch(n,{method:"GET"}).then((function(n){return n.json()})).then((function(n){console.log(n),_=new Set(n),console.log(_)}))},L=function(n,t){C=!1},k=function(){var n=Object(c.useRef)(),t=function(n,t,e){n.width=t,n.height=e,b=t,g=e};window.addEventListener("resize",t,!1),Object(c.useEffect)(Object(l.a)(u.a.mark((function e(){var c,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(),(o=n.current).addEventListener("mousedown",(function(n){return x(o,n)})),i=function(){var n=Object(l.a)(u.a.mark((function n(){var e,r,a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e=window.innerWidth-15,r=window.innerHeight-150,t(o,e,r),a=o.getContext("2d"),R(a),c=requestAnimationFrame(i);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),e.next=6,i();case 6:return e.abrupt("return",(function(){cancelAnimationFrame(c)}));case 7:case"end":return e.stop()}}),e)}))));return Object(p.jsxs)("div",{children:[Object(p.jsx)(v,{}),Object(p.jsx)("canvas",{ref:n,width:b,height:g,onMouseDown:function(n){return function(n,t){x(n,t),C=!0}(o,n)},onMouseMove:function(n){return function(n,t){C&&x(n,t)}(o,n)},onMouseUp:function(n){return L()},onMouseLeave:function(n){return L()}}),Object(p.jsx)(h.a,{onClick:D,children:"Clear Canvas"}),Object(p.jsx)(f.a,{onChange:function(n,t){E=n.hex}})]})},A=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(k,{})})},W=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,247)).then((function(t){var e=t.getCLS,o=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;e(n),o(n),c(n),i(n),r(n)}))},P=e(64),F=e(245);a.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(P.a,{children:Object(p.jsx)(F.a,{children:Object(p.jsx)(A,{})})})}),document.getElementById("root")),W()}},[[227,1,2]]]);
//# sourceMappingURL=main.3332f75a.chunk.js.map