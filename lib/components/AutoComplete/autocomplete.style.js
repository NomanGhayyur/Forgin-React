"use strict";var __importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},react_1=(Object.defineProperty(exports,"__esModule",{value:!0}),require("react")),__1=require(".."),Dropdown_style_1=__importDefault(require("../Dropdown/Dropdown.style")),input_style_1=__importDefault(require("../Input/input.style"));exports.default=function(e){var t=e.errorText,t=void 0===t?"":t,e=e.hasPlaceholder,e=void 0!==e&&e,r=(0,Dropdown_style_1.default)(),t=(0,input_style_1.default)({errorText:t,hasPlaceholder:e}),e=(0,react_1.useMemo)(function(){return __1.StyleSheet.create({container:{position:"relative",display:"inline-block"},inputContainer:{display:"flex",flexDirection:"row",alignItems:"center",border:"1px solid grey",flexWrap:"wrap",width:"100%",marginTop:20,"& > input":{marginTop:0,border:"none",width:"auto"}}})},[]);return Object.assign(e,t,r)};