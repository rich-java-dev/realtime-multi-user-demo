(this["webpackJsonprealtime-multi-player"]=this["webpackJsonprealtime-multi-player"]||[]).push([[0],{32:function(t,e,n){},33:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var o,c=n(0),i=n.n(c),r=n(8),a=n.n(r),u=(n(32),n(33),n(1)),s=n(10),l=n.n(s),d=n(17),f=n(27),S=n(18),O=n(2),p=window.innerWidth-10,h=window.innerHeight-30,v=null,E=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_ADDR||"letsdrawtogether.net",j=(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).SERVER_PORT,Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).WEBSOCKET_ENDPOINT||"websockettest"),b=JSON.stringify({action:"CLEAR"}),_="red",C=new Set,T=!1,g=function(){x();var t="wss://".concat(E,"/").concat(j);console.log("Attempting to connect to websocket on: ".concat(t)),(v=new WebSocket(t)).onopen=function(){console.log("WebSocket Client Connected")},v.onmessage=function(t){var e=JSON.parse(t.data);"CLEAR"===(null===e||void 0===e?void 0:e.action)&&C.clear(),void 0!==(null===e||void 0===e?void 0:e.type)&&C.add(e)}},R=function(t,e){var n=t.getBoundingClientRect(),o=e.clientX-n.left,c=e.clientY-n.top,i={type:"CIRCLE",color:_,radius:2,posX:o,posY:c};v.send(JSON.stringify(i))},w=function(t){t.fillStyle="white",t.fillRect(0,0,o.width,o.height),Array.from(C).map((function(e){!function(t){var e=t.ctx,n=t.posX,o=t.posY,c=t.radius,i=t.color;e.beginPath(),e.arc(n,o,c,0,2*Math.PI),e.fillStyle=i,e.fill(),e.strokeStyle=i,e.stroke()}(Object(f.a)({ctx:t},e))}))},m=function(){v.send(b)},x=function(){var t="https://letsdrawtogether.net/api/canvasState";console.log(t),fetch(t,{method:"GET"}).then((function(t){return t.json()})).then((function(t){console.log(t),C=new Set(t),console.log(C)}))},D=function(t,e){T=!1},P=function(){var t=Object(c.useRef)();return Object(c.useEffect)(Object(d.a)(l.a.mark((function e(){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(),(o=t.current).addEventListener("mousedown",(function(t){return R(o,t)})),c=function(){var t=Object(d.a)(l.a.mark((function t(){var e;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=o.getContext("2d"),w(e),n=requestAnimationFrame(c);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),e.next=6,c();case 6:return e.abrupt("return",(function(){cancelAnimationFrame(n)}));case 7:case"end":return e.stop()}}),e)})))),Object(O.jsxs)("div",{children:[Object(O.jsx)("div",{children:"Created By: Rich White - CS5283"}),Object(O.jsx)("button",{onClick:m,children:"Clear Canvas"}),Object(O.jsx)("canvas",{ref:t,width:p,height:h,onMouseDown:function(t){return function(t,e){R(t,e),T=!0}(o,t)},onMouseMove:function(t){return function(t,e){T&&R(t,e)}(o,t)},onMouseUp:function(t){return D()},onMouseLeave:function(t){return D()}}),Object(O.jsx)(S.SaturationSpectrum,{value:_,height:50}),Object(O.jsx)(S.SaturationSpectrum,{defaultValue:_})]})},A=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(u.a,{exact:!0,path:"/",component:P})})},W=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),o(t),c(t),i(t),r(t)}))},y=n(16),L=n(65);a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(y.a,{children:Object(O.jsx)(L.a,{children:Object(O.jsx)(A,{})})})}),document.getElementById("root")),W()}},[[63,1,2]]]);
//# sourceMappingURL=main.d9cbcc70.chunk.js.map