"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++)for(var o in e=arguments[t])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r}).apply(this,arguments)},__read=this&&this.__read||function(r,e){var t="function"==typeof Symbol&&r[Symbol.iterator];if(!t)return r;var n,o,a=t.call(r),i=[];try{for(;(void 0===e||0<e--)&&!(n=a.next()).done;)i.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(t=a.return)&&t.call(a)}finally{if(o)throw o.error}}return i},__values=this&&this.__values||function(r){var e="function"==typeof Symbol&&Symbol.iterator,t=e&&r[e],n=0;if(t)return t.call(r);if(r&&"number"==typeof r.length)return{next:function(){return{value:(r=r&&n>=r.length?void 0:r)&&r[n++],done:!r}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},chunkArray=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.toSnakeCase=exports.toKebabCase=exports.isBrowser=exports.getNumberFromMeasuredUnit=exports.unmarshalFormData=exports.groupBy=exports.mergeArrayByKey=exports.cleanObject=exports.triggerFormError=exports.range=exports.chunkArray=void 0,function(r,e){void 0===r&&(r=[]);var t=[];if(!(e=void 0===e?10:e))return[r];for(var n=0,o=r.length;n<o;n+=e)t.push(r.slice(n,n+e));return t}),range=(exports.chunkArray=chunkArray,function(e,r,t){if(void 0===r&&(r=0),void 0===t&&(t=1),"number"!=typeof(e=void 0===e?0:e)||e<0)return[];var n=new Array(r&&e<r?r:e).fill(0).map(function(r,e){return e*t});return e&&r?n.filter(function(r){return e<=r}):n}),triggerFormError=(exports.range=range,function(t,n){t&&Object.keys(n).forEach(function(r){var e=n[r],e=new CustomEvent("field-error",{detail:{error:e}});null!=(r=t.querySelector("[data-name=".concat(r,"]")))&&r.dispatchEvent(e)})}),cleanObject=(exports.triggerFormError=triggerFormError,function(r){if(!(r=void 0===r?{}:r))return{};for(var e in r)r[e]||delete r[e];return r}),mergeArrayByKey=(exports.cleanObject=cleanObject,function(r,e,t){void 0===r&&(r=[]),void 0===e&&(e=[]),void 0===t&&(t="id");var n=Object.assign([],r);return e.forEach(function(e){var r=n.findIndex(function(r){return r[t]==e[t]});-1!=r?n[r]=Object.assign({},__assign(__assign({},n[r]),e)):n.push(e)}),n}),groupBy=(exports.mergeArrayByKey=mergeArrayByKey,function(r,n){return r.reduce(function(r,e){var t="function"==typeof n?n(e):e[n];return(r[t]=r[t]||[]).push(e),r},{})}),unmarshalFormData=(exports.groupBy=groupBy,function(r){var e,t,a,i={},u=[],s=function(r,e,t,n,o){return void 0===o&&(o=""),r[t[e]||o]||(r[t[e]||o]={}),e+1<t.length?s(r[t[e]||o],e+1,t,n,o):(r[t[e]||o]=n,r)};try{for(var n=__values(r.entries()),o=n.next();!o.done;o=n.next()){var c=__read(o.value,2);!function(e,r){/^[0-9]+$/.test("".concat(null==r?void 0:r.toString()))&&(r=parseInt(null==r?void 0:r.toString(),10));var t,n,o=null==(a=e.match(/(?:\[([\w\d-_]*)\])/g))?void 0:a.map(function(r){return null==(r=/\[(.*?)\]/g.exec(r))?void 0:r[1]});o&&1<o.length?(n=/([\w\d]+)/g.exec(e))&&(i[n[1]]||(i[n[1]]={}),s(i[n[1]],0,o,r,u.filter(function(r){return r==e}).length)):(o=/\[([\w\d-_])*\]/.exec(e))?(t=(o=__read(o,2))[0],o=o[1],n=e.replace(t,""),i[n]?Array.isArray(i[n])?i[n].push(r):o&&!Array.isArray(i[n])&&"object"==typeof i[n]?i[n][o]=r:i[n]=[i[n],r]:!o||/^[0-9]+$/.test(o)?i[n]=[r]:i[n]=((t={})[o]=r,t)):i[e]=r,u.push(e)}(c[0],c[1])}}catch(r){e={error:r}}finally{try{o&&!o.done&&(t=n.return)&&t.call(n)}finally{if(e)throw e.error}}return i}),getNumberFromMeasuredUnit=(exports.unmarshalFormData=unmarshalFormData,function(r){var e=/(^\d*\.?\d*)(\w*)/g.exec(r.replaceAll(" ",""));if(e){var e=__read(e,3),t=e[1],e=e[2];if(!t)return 0;switch(e){case"rem":return 16*parseFloat(t);case"pt":return.75*parseFloat(t);case"in":return 96*parseFloat(t);case"pc":return.0625*parseFloat(t);case"cm":return.0265*parseFloat(t);case"mm":return.2645833*parseFloat(t);default:return parseFloat(t)}}return parseFloat(r)}),isBrowser=(exports.getNumberFromMeasuredUnit=getNumberFromMeasuredUnit,function(){return"undefined"!=typeof window&&void 0!==window.document}),toKebabCase=(exports.isBrowser=isBrowser,function(r){return null==(r=r.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))?void 0:r.map(function(r){return r.toLowerCase()}).join("-")}),toSnakeCase=(exports.toKebabCase=toKebabCase,function(r){return null==(r=r.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g))?void 0:r.map(function(r){return r.toLowerCase()}).join("_")});exports.toSnakeCase=toSnakeCase;