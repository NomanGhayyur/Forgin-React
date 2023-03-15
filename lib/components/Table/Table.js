"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},__createBinding=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var n=Object.getOwnPropertyDescriptor(t,a);n&&("get"in n?t.__esModule:!n.writable&&!n.configurable)||(n={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,n)}:function(e,t,a,r){e[r=void 0===r?a:r]=t[a]}),__setModuleDefault=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),__importStar=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&__createBinding(t,e,a);return __setModuleDefault(t,e),t},__read=this&&this.__read||function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var r,n,l=a.call(e),c=[];try{for(;(void 0===t||0<t--)&&!(r=l.next()).done;)c.push(r.value)}catch(e){n={error:e}}finally{try{r&&!r.done&&(a=l.return)&&a.call(l)}finally{if(n)throw n.error}}return c},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},_this=this,react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),__importStar(require("react"))),Pagination_1=__importDefault(require("../Pagination/Pagination")),aphrodite_1=require("../../helpers/aphrodite"),Table_styles_1=__importDefault(require("./Table.styles")),__1=require(".."),utility_1=require("../../helpers/utility"),Table=react_1.default.forwardRef(function(l,e){var t=__read((0,react_1.useState)(),2),r=t[0],a=t[1],t=__read((0,react_1.useState)("asc"),2),n=t[0],c=t[1],t=__read((0,react_1.useState)(1),2),o=t[0],u=t[1],t=__read((0,react_1.useState)(null),2),i=t[0],s=t[1],d=(0,Table_styles_1.default)(l),_=(0,react_1.useRef)(null),f=(0,react_1.useRef)(null),m=l.onSortData,p=l.onPageChange,g=l.onRowItemClick,y=l.rowClass,h=l.renderOnRowHover,b=(0,react_1.useMemo)(function(){return"function"==typeof l.data?l.data(o-1):l.data&&l.data instanceof Array&&0<l.data.length?l.data:[]},[l,o]),v=(0,react_1.useMemo)(function(){return l.total||Object.keys(b).length},[l.total,b]),k=(0,react_1.useCallback)(function(e,t){c(t),a(e),null!=m&&m(e,t)},[m]),t=((0,react_1.useEffect)(function(){"number"==typeof l.currentPage&&0<l.currentPage&&u(l.currentPage)},[l.currentPage]),(0,react_1.useCallback)(function(e){e&&"number"==typeof e&&("number"!=typeof l.currentPage&&u(e),p&&p(e))},[p,l.currentPage])),S=(0,react_1.useCallback)(function(e,t){g&&g(e,t+o*(l.pageSize||1))},[o,g,l.pageSize]),C=(0,react_1.useCallback)(function(r,n,e){var t,a="".concat(r.keyIndex).split(",").reduce(function(e,t){var a="".concat(t).split(".");return 0<a.length?(a=a.reduce(function(e,t){return e=e&&e[t]},n),e[t]=a):e[r.keyIndex]="".concat(t||""),e},{});return r.render?(t=1<Object.keys(a).length?a:a[r.keyIndex],e=e+(o-1)*(l.pageSize||1),r.render(t,r.keyIndex,e)):a[r.keyIndex]||"N/A"},[o,l.pageSize]),E=(0,react_1.useCallback)(function(e,t){return"function"==typeof(null==e?void 0:e.sortIndex)?null==e?void 0:e.sortIndex(e,null==e?void 0:e.keyIndex,t):void 0===(null==e?void 0:e.sortIndex)?null==e?void 0:e.keyIndex:null==e?void 0:e.sortIndex},[]),P=(0,react_1.useCallback)(function(e){return r?null==e?void 0:e.sort(function(e,t){return"number"==typeof e[r]&&"number"==typeof t[r]?"asc"==n?e[r]-t[r]:t[r]-e[r]:"string"==typeof e[r]&&"string"==typeof t[r]?"asc"==n?e[r].localeCompare(t[r]):t[r].localeCompare(e[r]):0}):e},[r,n]),w=(0,react_1.useMemo)(function(){return l.columnHeadings.map(function(t,e){var a=E(t,e);return react_1.default.createElement("th",{scope:"col",key:t.keyIndex,onClick:function(){var e;t.sortable&&(e="asc",k(a,e=r===a&&n===e?"desc":"asc"))},style:__assign({cursor:t.sortable?"pointer":"default"},t.style)},t.renderColumn?t.renderColumn(t,e):t.label||t.keyIndex,t.sortable&&(r===a?react_1.default.createElement(__1.Icon,{name:"asc"===n?"caret-up-fill":"caret-down-fill"}):react_1.default.createElement(__1.Icon,{name:"caret-right-fill"})))})},[E,r,n,l.columnHeadings,k]),x=(0,react_1.useMemo)(function(){var e;return l.loading||0==v?react_1.default.createElement("tr",null,react_1.default.createElement("td",{colSpan:null==(e=Object.keys(l.columnHeadings))?void 0:e.length},react_1.default.createElement("div",{className:(0,aphrodite_1.css)(d.loadingContainer)},l.loading?react_1.default.createElement(__1.Spinner,{loader:l.loading}):react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement(__1.Icon,{width:"3rem",height:"3rem",name:"folder-x"}),react_1.default.createElement("p",null,"No Data"))))):null},[l.loading,v,l.columnHeadings,d.loadingContainer]),I=(0,react_1.useMemo)(function(){var e=l.autoSort?P(b):b,t=l.data instanceof Array&&"number"!=typeof l.currentPage?null==(t=(0,utility_1.chunkArray)(e,l.pageSize))?void 0:t[o-1]:e;return null==t?void 0:t.map(function(a,r){return react_1.default.createElement("tr",{key:"".concat(r,"-").concat(o),onMouseEnter:h?s.bind(_this,a):void 0,onClick:S.bind(_this,a,r),style:l.rowStyle,className:"".concat((0,aphrodite_1.css)(d.tableRowClass)," ").concat((null==y?void 0:y(a,r))||"")},l.columnHeadings.map(function(e,t){return react_1.default.createElement("td",{key:"".concat(r,"-").concat(t),style:e.style,className:e.className},C(e,a,r))}))})},[l.autoSort,l.data,l.pageSize,l.currentPage,l.columnHeadings,l.rowStyle,P,b,o,d,h,y,S,C]),O=(0,react_1.useCallback)(function(e){var t,a;h&&i&&f.current&&_.current&&(t=_.current.getBoundingClientRect(),a=e.clientX-t.left+5,e=e.clientY-t.top+5,f.current.style.transform="translate(".concat(a,"px,").concat(e,"px)"))},[i,h]);return(0,react_1.useImperativeHandle)(e,function(){return _.current},[]),react_1.default.createElement(react_1.default.Fragment,null,react_1.default.createElement("table",{ref:_,className:"".concat((0,aphrodite_1.css)(d.container)," ").concat(l.className||""),style:l.style},react_1.default.createElement("thead",null,react_1.default.createElement("tr",{className:"".concat(l.headerRowClass||"")},w)),react_1.default.createElement("tbody",{onMouseMove:O,onMouseLeave:s.bind(_this,null)},x,I,h&&i?react_1.default.createElement("tr",{ref:f,className:"".concat((0,aphrodite_1.css)(d.hoverRow)," ").concat(l.hoverWrapperClassName||"")},react_1.default.createElement("td",{colSpan:null==(e=Object.keys(l.columnHeadings))?void 0:e.length},null==h?void 0:h(i,0))):null)),l.pageSize&&0<v&&v>l.pageSize?react_1.default.createElement(Pagination_1.default,{type:l.type,disabled:l.loading,onItemClick:t,showNumberLength:l.showNumberLength||6,total:v/l.pageSize,currentPage:o}):null)});Table.defaultProps={className:"table table-hover",pageSize:10,autoSort:!0,showNumberLength:6,headerRowClass:""},Table.displayName="Table",exports.default=Table;