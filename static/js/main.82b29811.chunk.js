(this["webpackJsonpreact-list-hotkeys-example"]=this["webpackJsonpreact-list-hotkeys-example"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);n(9);var o=n(0),a=n.n(o),c=n(5),r=n.n(c),l=n(7),i=n(6),s=n(4),u=n(3);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var p={keys:{up:"ArrowUp",down:"ArrowDown",select:"Enter"}},v=(n(17),[{text:"Go shopping \ud83d\uded2",done:!1},{text:"Make an awesome library \ud83d\udcda",done:!0},{text:"Go on holiday \ud83c\udf0f",done:!1},{text:"Break the market \ud83d\udcb0",done:!1},{text:"Write some code \u270d",done:!1},{text:"Build a rocket \ud83d\ude80",done:!1}]),m=function(){var e=Object(o.useState)(v),t=Object(s.a)(e,2),n=t[0],c=t[1],r=function(e,t,n){var a=d({},p,n),c=Object(o.useState)(0),r=c[0],l=c[1];return Object(u.a)(a.keys.down,(function(t){var n,o;(e&&l(Math.min((null===e||void 0===e?void 0:e.length)-1,r+1)),null!==(n=a.events)&&void 0!==n&&n.onDown)&&(null===(o=a.events)||void 0===o||o.onDown())})),Object(u.a)(a.keys.up,(function(t){var n,o;e&&(l(Math.max(0,r-1)),null!==(n=a.events)&&void 0!==n&&n.onUp&&(null===(o=a.events)||void 0===o||o.onUp()))})),Object(u.a)(a.keys.select,(function(n){e&&t({item:e[r],index:r})})),[r,l]}(n,(function(e){var t=e.item,o=e.index;console.log("selected item:".concat(t," index:").concat(o)),function(e){var t=Object(i.a)(n),o=Object(l.a)({},t[e]);o.done=!o.done,t[e]=o,c(t)}(o)})),m=Object(s.a)(r,2),h=m[0];m[1];return a.a.createElement("div",null,a.a.createElement("h3",null,"My Todos"),a.a.createElement("ol",null,n.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement("span",{className:t===h?"selected":""},a.a.createElement("input",{type:"checkbox",checked:e.done,readOnly:!0}),e.text))}))))};r.a.render(a.a.createElement(m,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(18)},9:function(e,t,n){}},[[8,1,2]]]);
//# sourceMappingURL=main.82b29811.chunk.js.map