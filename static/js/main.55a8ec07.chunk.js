(this.webpackJsonpgames=this.webpackJsonpgames||[]).push([[2],{13:function(e,t,a){"use strict";a.d(t,"f",(function(){return n})),a.d(t,"a",(function(){return l})),a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"g",(function(){return u}));var n="SHUFFLE",l="FINDE_EMPTY_AND_CLICKBLES",r="MOVE_UP",c="MOVE_RIGHT",o="MOVE_DOWN",i="MOVE_LEFT",u="WIN"},37:function(e,t,a){e.exports=a(56)},42:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),c=a.n(r),o=(a(42),a(25)),i=a(57),u=a(58),m=a(59),s=a(60),E=a(61),d=a(62),h=a(63),b=a(14),v=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=function(){return r(!a)};return l.a.createElement(i.a,{color:"dark",dark:!0,expand:"md",className:"mb-xs-2 mb-md-4"},l.a.createElement(u.a,{className:"text-white",color:"light",tag:"div"},l.a.createElement(b.b,{onClick:a?c:void 0,className:"text-white navbar-brand",to:"/"},"REACT GAMES")),l.a.createElement(m.a,{onClick:c}),l.a.createElement(s.a,{isOpen:a,navbar:!0},l.a.createElement(E.a,{className:"ml-auto",navbar:!0},l.a.createElement(d.a,null,l.a.createElement(h.a,{tag:"span"},l.a.createElement(b.b,{onClick:a?c:void 0,className:"nav-link",to:"/puzzle-15"},"15 Puzzle"))),l.a.createElement(d.a,null,l.a.createElement(h.a,{tag:"span"},l.a.createElement(b.b,{onClick:a?c:void 0,className:"nav-link",to:"/match-the-picture"},"Match the picture"))),l.a.createElement(d.a,null,l.a.createElement(h.a,{tag:"span"},l.a.createElement(b.b,{onClick:a?c:void 0,className:"nav-link",to:"/snake"},"Snake"))))))},f=a(12),p=a(64),O=function(){return l.a.createElement("div",{style:{minHeight:"70vh"},className:"d-flex justify-content-center align-items-center"},l.a.createElement(p.a,{style:{width:"3rem",height:"3rem"},color:"secondary"}))},k=Object(n.lazy)((function(){return a.e(6).then(a.bind(null,105))})),g=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(5)]).then(a.bind(null,106))})),y=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(1),a.e(8)]).then(a.bind(null,107))})),w=Object(n.lazy)((function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,104))}));var j=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(b.a,null,l.a.createElement(v,null),l.a.createElement(n.Suspense,{fallback:l.a.createElement(O,null)},l.a.createElement(f.c,null,l.a.createElement(f.a,{path:"/",exact:!0},l.a.createElement(k,null)),l.a.createElement(f.a,{path:"/snake"},l.a.createElement(w,null)),l.a.createElement(f.a,{path:"/match-the-picture"},l.a.createElement(g,null)),l.a.createElement(f.a,{path:"/puzzle-15"},l.a.createElement(y,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(54);var N=a(32),_=a(10),z=a(11),C=a(13),M={win:!1,moves:0,sortedArray:[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,""]],array:[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,"",15]],emptyCell:[3,3],clickForMove:{up:null,right:null,down:null,left:null}},S=Object(_.c)({Puzzle15:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case C.f:return Object(z.a)({},e,{array:n,moves:0,win:!1});case C.a:return Object(z.a)({},e,{emptyCell:n.emptyCell,clickForMove:n.clickForMove});case C.e:case C.d:case C.b:case C.c:return Object(z.a)({},e,{array:n,moves:e.moves+1});case C.g:return Object(z.a)({},e,{win:!0});default:return e}}}),F=a(35),P=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.d,x=Object(_.e)(S,{},P(Object(_.a)(F.a)));c.a.render(l.a.createElement(N.a,{store:x},l.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,3,4]]]);
//# sourceMappingURL=main.55a8ec07.chunk.js.map