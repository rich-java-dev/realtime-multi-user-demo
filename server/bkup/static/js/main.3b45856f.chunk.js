(this["webpackJsonprealtime-multi-player"]=this["webpackJsonprealtime-multi-player"]||[]).push([[0],{210:function(t,n,e){"use strict";e.r(n);var o,c=e(0),i=e.n(c),r=e(80),a=e.n(r),u=(e(93),e(94),e(4)),s=e(18),l=e.n(s),d=e(51),f=e(88),S=e(87),O=e(5),h=window.innerWidth-10,p=window.innerHeight-60,v=null,E=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_ADDR||"letsdrawtogether.net",j=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_PORT,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).WEBSOCKET_ENDPOINT||"websockettest"),b=JSON.stringify({action:"CLEAR"}),C="black",_=new Set,T=!1,g=function(){x();var t="wss://".concat(E,"/").concat(j);console.log("Attempting to connect to websocket on: ".concat(t)),(v=new WebSocket(t)).onopen=function(){console.log("WebSocket Client Connected")},v.onmessage=function(t){var n=JSON.parse(t.data);"CLEAR"===(null===n||void 0===n?void 0:n.action)&&_.clear(),void 0!==(null===n||void 0===n?void 0:n.type)&&_.add(n)}},R=function(t,n){var e=t.getBoundingClientRect(),o=n.clientX-e.left,c=n.clientY-e.top,i={type:"CIRCLE",color:C,radius:2,posX:o,posY:c};v.send(JSON.stringify(i))},w=function(t){t.fillStyle="white",t.fillRect(0,0,o.width,o.height),Array.from(_).map((function(n){!function(t){var n=t.ctx,e=t.posX,o=t.posY,c=t.radius,i=t.color;n.beginPath(),n.arc(e,o,c,0,2*Math.PI),n.fillStyle=i,n.fill(),n.strokeStyle=i,n.stroke()}(Object(f.a)({ctx:t},n))}))},m=function(){v.send(b)},x=function(){var t="https://letsdrawtogether.net/api/canvasState";console.log(t),fetch(t,{method:"GET"}).then((function(t){return t.json()})).then((function(t){console.log(t),_=new Set(t),console.log(_)}))},D=function(t,n){T=!1},P=function(){var t=Object(c.useRef)();Object(c.useEffect)(Object(d.a)(l.a.mark((function n(){var e,c;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g(),(o=t.current).addEventListener("mousedown",(function(t){return R(o,t)})),c=function(){var t=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=o.getContext("2d"),w(n),e=requestAnimationFrame(c);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n.next=6,c();case 6:return n.abrupt("return",(function(){cancelAnimationFrame(e)}));case 7:case"end":return n.stop()}}),n)}))));return Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"Created By: Rich White - CS5283"}),Object(O.jsx)("button",{onClick:m,children:"Clear Canvas"}),Object(O.jsx)("canvas",{ref:t,width:h,height:p,onMouseDown:function(t){return function(t,n){R(t,n),T=!0}(o,t)},onMouseMove:function(t){return function(t,n){T&&R(t,n)}(o,t)},onMouseUp:function(t){return D()},onMouseLeave:function(t){return D()}}),Object(O.jsx)(S.a,{onChange:function(t,n){C=t.hex}})]})},A=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(u.a,{exact:!0,path:"/",component:P})})},W=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,214)).then((function(n){var e=n.getCLS,o=n.getFID,c=n.getFCP,i=n.getLCP,r=n.getTTFB;e(t),o(t),c(t),i(t),r(t)}))},y=e(50),L=e(213);a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(y.a,{children:Object(O.jsx)(L.a,{children:Object(O.jsx)(A,{})})})}),document.getElementById("root")),W()},93:function(t,n,e){},94:function(t,n,e){}},[[210,1,2]]]);
//# sourceMappingURL=main.3b45856f.chunk.js.map