"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.StyleSheetServer=exports.css=exports.StyleSheet=void 0;var no_important_1=require("aphrodite/no-important"),_a=(Object.defineProperty(exports,"StyleSheetServer",{enumerable:!0,get:function(){return no_important_1.StyleSheetServer}}),no_important_1.StyleSheet.extend([{selectorHandler:function(e,r,n){e=e.split(",").map(function(e,t){return"&"===e[0]?(t=0===t?e.slice(1):e,n("".concat(r," ").concat(t).replace(/ +(?= )/g,""))):null}).filter(function(e){return e});return 0===e.length?null:e.flat(1/0).join(" ")}}])),StyleSheet=_a.StyleSheet,css=_a.css;exports.StyleSheet=StyleSheet,exports.css=css;