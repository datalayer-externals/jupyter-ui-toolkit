"use strict";(self.webpackChunk_jupyter_web_components=self.webpackChunk_jupyter_web_components||[]).push([[3419],{"./src/progress-ring/progress-ring.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Paused:()=>Paused,WithValue:()=>WithValue,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,_b,_c,_d,_e,_f,_g,_h,_j,_utilities_storybook__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utilities/storybook/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Progress Ring",argTypes:{min:{control:"number",min:0},max:{control:"number",min:0},value:{control:"number",min:0},paused:{control:"boolean"},height:{control:"number",min:4}},parameters:{actions:{disabled:!0}}},Template=(args,context)=>{const{globals:{backgrounds,accent},parameters}=context;return(0,_utilities_storybook__WEBPACK_IMPORTED_MODULE_0__.D)(accent,parameters.backgrounds,backgrounds),`<jp-progress-ring\n    ${"number"==typeof args.min?`min="${args.min}"`:""}\n    ${"number"==typeof args.max?`max="${args.max}"`:""}\n    ${"number"==typeof args.value?`value="${args.value}"`:""}\n    ${args.paused?'paused="true"':""}\n    ${"number"==typeof args.height?`style="height: ${args.height}px;"`:""}\n  >\n  </jp-progress-ring>`},Default={render:Template.bind({}),args:{min:null,max:null,value:null,paused:!1,height:null}},WithValue={render:Template.bind({})};WithValue.args=Object.assign(Object.assign({},Default.args),{min:0,max:50,value:30});const Paused={render:Template.bind({})};Paused.args=Object.assign(Object.assign({},WithValue.args),{paused:!0}),Default.parameters=Object.assign(Object.assign({},Default.parameters),{docs:Object.assign(Object.assign({},null===(_a=Default.parameters)||void 0===_a?void 0:_a.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_c=null===(_b=Default.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),WithValue.parameters=Object.assign(Object.assign({},WithValue.parameters),{docs:Object.assign(Object.assign({},null===(_d=WithValue.parameters)||void 0===_d?void 0:_d.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_f=null===(_e=WithValue.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),Paused.parameters=Object.assign(Object.assign({},Paused.parameters),{docs:Object.assign(Object.assign({},null===(_g=Paused.parameters)||void 0===_g?void 0:_g.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_j=null===(_h=Paused.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})});const __namedExportsOrder=["Default","WithValue","Paused"]},"./src/utilities/storybook/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>setTheme,f:()=>getFaIcon});var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js"),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@microsoft/fast-colors/dist/parse-color.js"),_color__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/color.ts"),_design_tokens__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/design-tokens.ts");function getFaIcon(iconName,slotName){const objectName=iconName.split("-").map((part=>part[0].toUpperCase()+part.slice(1))).reduce(((agg,part)=>agg+part),"fa");_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.vI.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[objectName]);const copy=(0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.qv)({prefix:"fas",iconName}).node.item(0).cloneNode(!0);return slotName&&copy.setAttribute("slot",slotName),copy.outerHTML}function setTheme(accent,parameters,backgrounds){var _a,_b,_c;const backgroundColor=null!==(_c=null!==(_a=(backgrounds=null!=backgrounds?backgrounds:{}).value)&&void 0!==_a?_a:null===(_b=parameters.values)||void 0===_b?void 0:_b.filter((v=>v.name===parameters.default))[0].value)&&void 0!==_c?_c:"#252526",parsedColor=(0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__.lu)(backgroundColor),dark=(0,_color__WEBPACK_IMPORTED_MODULE_1__._T)(_color__WEBPACK_IMPORTED_MODULE_1__.wd.create(parsedColor.r,parsedColor.g,parsedColor.b));_design_tokens__WEBPACK_IMPORTED_MODULE_2__.q2.setValueFor(document.body,dark?_color__WEBPACK_IMPORTED_MODULE_1__.he.DarkMode:_color__WEBPACK_IMPORTED_MODULE_1__.he.LightMode);const parsedAccentColor=(0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__.lu)(null!=accent?accent:"#DA1A5F");parsedAccentColor&&_design_tokens__WEBPACK_IMPORTED_MODULE_2__.au.setValueFor(document.body,_color__WEBPACK_IMPORTED_MODULE_1__.vD.from(_color__WEBPACK_IMPORTED_MODULE_1__.wd.create(parsedAccentColor.r,parsedAccentColor.g,parsedAccentColor.b)))}}}]);