"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&("get"in a?t.__esModule:!a.writable&&!a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){e[n=void 0===n?r:n]=t[r]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&__createBinding(t,e,r);return __setModuleDefault(t,e),t},__read=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,l=r.call(e),o=[];try{for(;(void 0===t||0<t--)&&!(n=l.next()).done;)o.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=l.return)&&r.call(l)}finally{if(a)throw a.error}}return o},__values=this&&this.__values||function(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return{value:(e=e&&n>=e.length?void 0:e)&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},_this=this,react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),autocomplete_style_1=__importDefault(require("./autocomplete.style")),__1=require(".."),Icon_1=__importDefault(require("../Icon")),Badge_1=__importDefault(require("../Badge")),Highlighter_1=__importDefault(require("../Highlighter")),AutoComplete=react_1.default.memo(function(i){var e=__read((0,react_1.useState)(!1),2),t=e[0],n=e[1],e=__read((0,react_1.useState)(""),2),r=e[0],a=e[1],e=i.label,l=i.onItemClick,o=i.options,u=i.renderDropdownItem,c=i.className,s=i.multiple,_=void 0===s||s,s=i.placeholder,d=__read((0,react_1.useState)(),2),f=d[0],m=d[1],d=__read((0,react_1.useState)(""),2),v=d[0],p=d[1],d=(0,autocomplete_style_1.default)({errorText:v,hasPlaceholder:!!s}),h=(0,react_1.useRef)(null),y=(0,react_1.useRef)(null),g=(0,react_1.useId)(),b=(0,react_1.useMemo)(function(){return Object.keys(f||{})},[f]),E=((0,react_1.useEffect)(function(){p(i.error||"")},[i.error]),(0,react_1.useCallback)(function(t,e){var r;h.current&&(h.current.value=""),t&&null!=o&&o[t]&&m(_?function(e){return __assign(__assign({},e),((e={})[t]=null==o?void 0:o[t],e))}:((r={})[t]=null==o?void 0:o[t],r)),l&&null!=o&&o[t]&&l(t,null==o?void 0:o[t]),n(!1),p("")},[l,o,_])),C=((0,react_1.useEffect)(function(){function e(e){var t;e.target instanceof HTMLElement&&(null==(t=y.current)||!t.contains(e.target))&&(n(!1),h.current&&(h.current.value=""))}return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}},[]),(0,react_1.useMemo)(function(){return b.map(function(e){var t=null==f?void 0:f[e];return react_1.default.createElement(Badge_1.default,{className:i.badgeClass,type:i.type,onRemove:function(e){var t=Object.assign({},f);delete t[e],m(t)}.bind(_this,e),key:e},(null==t?void 0:t.label)||"")})},[f,b,i.type,i.badgeClass])),O=(0,react_1.useMemo)(function(){return Object.keys(o||{}).filter(function(e){var t=null==o?void 0:o[e];return!b.includes(e)&&(null==(t=null==(e=null==t?void 0:t.label)?void 0:e.toLowerCase())?void 0:t.includes(r.toLowerCase()))}).map(function(e){var t=null==o?void 0:o[e];return u&&t?u(t,e):react_1.default.createElement("li",{key:e,onClick:E.bind(_this,e)},null!=t&&t.icon?react_1.default.createElement(Icon_1.default,{name:t.icon}):null,react_1.default.createElement(Highlighter_1.default,{color:i.highlightColor,text:(null==t?void 0:t.label)||"",searchText:r}))})},[E,b,o,u,r,i.highlightColor]),j=((0,react_1.useEffect)(function(){var e,t;if(y.current)return(e=y.current).addEventListener("field-error",t=function(e){return p(null==(e=e.detail)?void 0:e.error)}),function(){e.removeEventListener("field-error",t)}},[]),(0,react_1.useCallback)(function(e){var t,r,n;if(!e)return{};var a={};try{for(var l=__values(e),o=l.next();!o.done;o=l.next()){var u=o.value;u&&null!=(n=i.options)&&n[u]&&(a[u]=i.options[u])}}catch(e){t={error:e}}finally{try{o&&!o.done&&(r=l.return)&&r.call(l)}finally{if(t)throw t.error}}return a},[i.options]));return(0,react_1.useEffect)(function(){m(j(i.values))},[i.values,j]),react_1.default.createElement("div",{ref:y,"data-name":"".concat(i.name).concat(_?"[]":""),className:"".concat((0,__1.css)(d.container)," ").concat(c||""),style:i.style},i.name&&b.length?b.map(function(e){return react_1.default.createElement("input",{readOnly:!0,key:e,value:e,type:"hidden",name:"".concat(i.name).concat(_?"[]":"")})}):null,react_1.default.createElement("label",{className:(0,__1.css)(d.floatInput__label),htmlFor:g},react_1.default.createElement("div",{style:v?{borderColor:"var(--bs-danger)"}:void 0,className:(0,__1.css)(d.inputContainer)},C,react_1.default.createElement("span",{style:b.length?{transform:"translate(0)",padding:0}:void 0},e),react_1.default.createElement("input",{onChange:function(e){a(e.target.value),p(""),i.onChange&&i.onChange(e)},onFocus:function(e){n(!0),i.onFocus&&i.onFocus(e)},ref:h,disabled:i.disabled,className:"".concat((0,__1.css)(d.floatInput__input)," ").concat(c||""),id:g,placeholder:s||e}))),v?react_1.default.createElement("span",{className:"invalid-feedback"},v):null,react_1.default.createElement("ul",{className:(0,__1.css)(d["dropdown-content"],t?d.show:void 0)},O))});AutoComplete.displayName="AutoComplete",exports.default=AutoComplete;