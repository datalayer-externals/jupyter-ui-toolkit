"use strict";(self.webpackChunk_jupyter_web_components=self.webpackChunk_jupyter_web_components||[]).push([[6463],{"../../node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs")},"./src/text-field/text-field.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithAutofocus:()=>WithAutofocus,WithDisabled:()=>WithDisabled,WithEndIcon:()=>WithEndIcon,WithMaxLength:()=>WithMaxLength,WithPlaceholder:()=>WithPlaceholder,WithReadonly:()=>WithReadonly,WithSize:()=>WithSize,WithStartIcon:()=>WithStartIcon,WithType:()=>WithType,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _a,_b,_c,_d,_e,_f,_g,_h,_j,_k,_l,_m,_o,_p,_q,_r,_s,_t,_u,_v,_w,_x,_y,_z,_0,_1,_2,_3,_4,_5,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@storybook/addon-actions/dist/index.mjs"),_utilities_storybook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utilities/storybook/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Text Field",argTypes:{label:{control:"text"},placeholder:{control:"text"},value:{control:"text"},maxLength:{control:"number"},size:{control:"number"},type:{control:{type:"select",options:["Email","Password","Tel","Text","Url"]}},isReadOnly:{control:"boolean"},isDisabled:{control:"boolean"},isAutoFocused:{control:"boolean"},startIcon:{control:"boolean"},endIcon:{control:"boolean"},appearance:{control:"radio",options:["outline","filled"]},onChange:{action:"changed",table:{disable:!0}}}},Template=(args,context)=>{const{globals:{backgrounds,accent},parameters}=context;(0,_utilities_storybook__WEBPACK_IMPORTED_MODULE_1__.D)(accent,parameters.backgrounds,backgrounds);const container=document.createElement("div");container.insertAdjacentHTML("afterbegin",`<jp-text-field \n      ${args.placeholder?`placeholder="${args.placeholder}"`:""}\n      ${args.maxLength?`maxlength="${args.maxLength}"`:""}\n      ${args.size?`size="${args.size}"`:""}\n      ${args.type?`type="${args.type.toLowerCase()}"`:""}\n      ${args.readonly?"readonly":""}\n      ${args.disabled?"disabled":""}\n      ${args.autofocus?"autofocus":""}\n      appearance="${args.appearance}"\n    >\n      ${args.startIcon?(0,_utilities_storybook__WEBPACK_IMPORTED_MODULE_1__.f)("search","start"):""}\n      ${args.label}\n      ${args.endIcon?(0,_utilities_storybook__WEBPACK_IMPORTED_MODULE_1__.f)("euro-sign","end"):""}\n    </jp-text-field>`);const textField=container.firstChild;return args.value&&(textField.value=args.value),args.onChange&&textField.addEventListener("change",args.onChange),textField},Default={render:Template.bind({})};Default.args={label:"Text Field Label",placeholder:"",value:"",maxLength:"",size:"",type:"Text",isReadOnly:!1,isDisabled:!1,isAutoFocused:!1,startIcon:!1,endIcon:!1,appearance:"outline",onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("text-field-onchange")};const WithPlaceholder={render:Template.bind({})};WithPlaceholder.args=Object.assign(Object.assign({},Default.args),{placeholder:"Placeholder Text"});const WithAutofocus={render:Template.bind({})};WithAutofocus.args=Object.assign(Object.assign({},Default.args),{autofocus:!0});const WithDisabled={render:Template.bind({})};WithDisabled.args=Object.assign(Object.assign({},Default.args),{disabled:!0});const WithSize={render:Template.bind({})};WithSize.args=Object.assign(Object.assign({},Default.args),{placeholder:"This text field is 50 characters in width",size:50});const WithType={render:Template.bind({})};WithType.args=Object.assign(Object.assign({},Default.args),{placeholder:"This text field has type password",type:"Password"});const WithMaxLength={render:Template.bind({})};WithMaxLength.args=Object.assign(Object.assign({},Default.args),{placeholder:"This text field can only contain a maximum of 10 characters",maxLength:10});const WithReadonly={render:Template.bind({})};WithReadonly.args=Object.assign(Object.assign({},Default.args),{readonly:!0});const WithStartIcon={render:Template.bind({})};WithStartIcon.args=Object.assign(Object.assign({},Default.args),{startIcon:!0});const WithEndIcon={render:Template.bind({})};WithEndIcon.args=Object.assign(Object.assign({},Default.args),{endIcon:!0}),Default.parameters=Object.assign(Object.assign({},Default.parameters),{docs:Object.assign(Object.assign({},null===(_a=Default.parameters)||void 0===_a?void 0:_a.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_c=null===(_b=Default.parameters)||void 0===_b?void 0:_b.docs)||void 0===_c?void 0:_c.source)})}),WithPlaceholder.parameters=Object.assign(Object.assign({},WithPlaceholder.parameters),{docs:Object.assign(Object.assign({},null===(_d=WithPlaceholder.parameters)||void 0===_d?void 0:_d.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_f=null===(_e=WithPlaceholder.parameters)||void 0===_e?void 0:_e.docs)||void 0===_f?void 0:_f.source)})}),WithAutofocus.parameters=Object.assign(Object.assign({},WithAutofocus.parameters),{docs:Object.assign(Object.assign({},null===(_g=WithAutofocus.parameters)||void 0===_g?void 0:_g.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_j=null===(_h=WithAutofocus.parameters)||void 0===_h?void 0:_h.docs)||void 0===_j?void 0:_j.source)})}),WithDisabled.parameters=Object.assign(Object.assign({},WithDisabled.parameters),{docs:Object.assign(Object.assign({},null===(_k=WithDisabled.parameters)||void 0===_k?void 0:_k.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_m=null===(_l=WithDisabled.parameters)||void 0===_l?void 0:_l.docs)||void 0===_m?void 0:_m.source)})}),WithSize.parameters=Object.assign(Object.assign({},WithSize.parameters),{docs:Object.assign(Object.assign({},null===(_o=WithSize.parameters)||void 0===_o?void 0:_o.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_q=null===(_p=WithSize.parameters)||void 0===_p?void 0:_p.docs)||void 0===_q?void 0:_q.source)})}),WithType.parameters=Object.assign(Object.assign({},WithType.parameters),{docs:Object.assign(Object.assign({},null===(_r=WithType.parameters)||void 0===_r?void 0:_r.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_t=null===(_s=WithType.parameters)||void 0===_s?void 0:_s.docs)||void 0===_t?void 0:_t.source)})}),WithMaxLength.parameters=Object.assign(Object.assign({},WithMaxLength.parameters),{docs:Object.assign(Object.assign({},null===(_u=WithMaxLength.parameters)||void 0===_u?void 0:_u.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_w=null===(_v=WithMaxLength.parameters)||void 0===_v?void 0:_v.docs)||void 0===_w?void 0:_w.source)})}),WithReadonly.parameters=Object.assign(Object.assign({},WithReadonly.parameters),{docs:Object.assign(Object.assign({},null===(_x=WithReadonly.parameters)||void 0===_x?void 0:_x.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_z=null===(_y=WithReadonly.parameters)||void 0===_y?void 0:_y.docs)||void 0===_z?void 0:_z.source)})}),WithStartIcon.parameters=Object.assign(Object.assign({},WithStartIcon.parameters),{docs:Object.assign(Object.assign({},null===(_0=WithStartIcon.parameters)||void 0===_0?void 0:_0.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_2=null===(_1=WithStartIcon.parameters)||void 0===_1?void 0:_1.docs)||void 0===_2?void 0:_2.source)})}),WithEndIcon.parameters=Object.assign(Object.assign({},WithEndIcon.parameters),{docs:Object.assign(Object.assign({},null===(_3=WithEndIcon.parameters)||void 0===_3?void 0:_3.docs),{source:Object.assign({originalSource:"{\n  render: Template.bind({})\n}"},null===(_5=null===(_4=WithEndIcon.parameters)||void 0===_4?void 0:_4.docs)||void 0===_5?void 0:_5.source)})});const __namedExportsOrder=["Default","WithPlaceholder","WithAutofocus","WithDisabled","WithSize","WithType","WithMaxLength","WithReadonly","WithStartIcon","WithEndIcon"]},"./src/utilities/storybook/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>setTheme,f:()=>getFaIcon});var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js"),_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@microsoft/fast-colors/dist/parse-color.js"),_color__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/color.ts"),_design_tokens__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/design-tokens.ts");function getFaIcon(iconName,slotName){const objectName=iconName.split("-").map((part=>part[0].toUpperCase()+part.slice(1))).reduce(((agg,part)=>agg+part),"fa");_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.vI.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__[objectName]);const copy=(0,_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__.qv)({prefix:"fas",iconName}).node.item(0).cloneNode(!0);return slotName&&copy.setAttribute("slot",slotName),copy.outerHTML}function setTheme(accent,parameters,backgrounds){var _a,_b,_c;const backgroundColor=null!==(_c=null!==(_a=(backgrounds=null!=backgrounds?backgrounds:{}).value)&&void 0!==_a?_a:null===(_b=parameters.values)||void 0===_b?void 0:_b.filter((v=>v.name===parameters.default))[0].value)&&void 0!==_c?_c:"#252526",parsedColor=(0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__.lu)(backgroundColor),dark=(0,_color__WEBPACK_IMPORTED_MODULE_1__._T)(_color__WEBPACK_IMPORTED_MODULE_1__.wd.create(parsedColor.r,parsedColor.g,parsedColor.b));_design_tokens__WEBPACK_IMPORTED_MODULE_2__.q2.setValueFor(document.body,dark?_color__WEBPACK_IMPORTED_MODULE_1__.he.DarkMode:_color__WEBPACK_IMPORTED_MODULE_1__.he.LightMode);const parsedAccentColor=(0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__.lu)(null!=accent?accent:"#DA1A5F");parsedAccentColor&&_design_tokens__WEBPACK_IMPORTED_MODULE_2__.au.setValueFor(document.body,_color__WEBPACK_IMPORTED_MODULE_1__.vD.from(_color__WEBPACK_IMPORTED_MODULE_1__.wd.create(parsedAccentColor.r,parsedAccentColor.g,parsedAccentColor.b)))}}}]);