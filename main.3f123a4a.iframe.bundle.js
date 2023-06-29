(self.webpackChunk_jupyter_web_components=self.webpackChunk_jupyter_web_components||[]).push([[179],{"./src/color.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C3:()=>foregroundOnErrorAlgorithm,Sn:()=>black,U0:()=>errorFillAlgorithm,_T:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_0__._,gN:()=>baseErrorColor,he:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_2__.h,ix:()=>white,lf:()=>errorForegroundAlgorithm,rw:()=>errorBase,vD:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.v,vG:()=>ContrastTarget,wd:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_3__.w});var _microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@microsoft/fast-colors/dist/parse-color.js"),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/color/swatch.js"),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/color/utilities/is-dark.js"),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/color/palette.js"),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/color/utilities/base-layer-luminance.js");const white=_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_3__.w.create(1,1,1),black=_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_3__.w.create(0,0,0),baseErrorColor=(0,_microsoft_fast_colors__WEBPACK_IMPORTED_MODULE_4__.in)("#D32F2F");var ContrastTarget;function errorFillAlgorithm(palette,neutralPalette,reference,hoverDelta,activeDelta,focusDelta,neutralFillRestDelta,neutralFillHoverDelta,neutralFillActiveDelta){const error=palette.source,direction=neutralPalette.closestIndexOf(reference)>=Math.max(neutralFillRestDelta,neutralFillHoverDelta,neutralFillActiveDelta)?-1:1,hoverIndex=palette.closestIndexOf(error),restIndex=hoverIndex+-1*direction*hoverDelta,activeIndex=restIndex+direction*activeDelta,focusIndex=restIndex+direction*focusDelta;return{rest:palette.get(restIndex),hover:palette.get(hoverIndex),active:palette.get(activeIndex),focus:palette.get(focusIndex)}}function errorForegroundAlgorithm(palette,reference,contrastTarget,restDelta,hoverDelta,activeDelta,focusDelta){const error=palette.source,errorIndex=palette.closestIndexOf(error),direction=(0,_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_0__._)(reference)?-1:1,startIndex=errorIndex+(1===direction?Math.min(restDelta,hoverDelta):Math.max(direction*restDelta,direction*hoverDelta)),accessibleSwatch=palette.colorContrast(reference,contrastTarget,startIndex,direction),accessibleIndex1=palette.closestIndexOf(accessibleSwatch),accessibleIndex2=accessibleIndex1+direction*Math.abs(restDelta-hoverDelta);let restIndex,hoverIndex;return(1===direction?restDelta<hoverDelta:direction*restDelta>direction*hoverDelta)?(restIndex=accessibleIndex1,hoverIndex=accessibleIndex2):(restIndex=accessibleIndex2,hoverIndex=accessibleIndex1),{rest:palette.get(restIndex),hover:palette.get(hoverIndex),active:palette.get(restIndex+direction*activeDelta),focus:palette.get(restIndex+direction*focusDelta)}}function foregroundOnErrorAlgorithm(reference,contrastTarget){return reference.contrast(white)>=contrastTarget?white:black}!function(ContrastTarget){ContrastTarget[ContrastTarget.normal=4.5]="normal",ContrastTarget[ContrastTarget.large=7]="large"}(ContrastTarget||(ContrastTarget={}));const errorBase=_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_3__.w.create(baseErrorColor.r,baseErrorColor.g,baseErrorColor.b)},"./src/design-tokens.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$9:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.$9,$B:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.$B,$u:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.$u,A$:()=>foregroundOnErrorHover,A1:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.A1,AI:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.AI,A_:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.vg,Al:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Al,At:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.At,Av:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Av,B2:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.B2,Bx:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Bx,CH:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.CH,CM:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.CM,CX:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.CX,Cl:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Cl,D$:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.D$,D8:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.D8,D9:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.D9,DF:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.DF,DV:()=>errorForegroundActive,Dg:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Dg,EB:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.EB,EL:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.EL,G8:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.G8,GB:()=>errorFillActive,GU:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.GU,Gy:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Gy,H:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.H,I7:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.I7,IM:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.IM,IU:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.IU,IW:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.IW,IZ:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.IZ,If:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.If,Iu:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Iu,J7:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.J7,L4:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.L4,L8:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.L8,LQ:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.LQ,MY:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.MY,Mw:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Mw,N7:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.N7,NF:()=>foregroundOnErrorFocusLarge,Nz:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Nz,O8:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_2__.O,OC:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.OC,P0:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.P0,Pp:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Pp,Pw:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Pw,Q5:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Q5,QP:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.QP,Qi:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Qi,Qp:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Qp,RJ:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.RJ,RU:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.RU,Rk:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Rk,SV:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.SV,Sl:()=>errorFillRecipe,Tm:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Tm,UC:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.UC,UE:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.UE,UW:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.UW,Ue:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Ue,V0:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.V0,VF:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.VF,VN:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.VN,VQ:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.VQ,Ve:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Ve,Vt:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Vt,Vu:()=>errorPalette,Wo:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Wo,Xi:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Xi,YE:()=>errorForegroundFocus,YL:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.YL,Z:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Z,Zb:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Zb,_5:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__._5,_B:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__._B,_S:()=>errorForegroundRecipe,a2:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.a2,a6:()=>errorFillRest,ab:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.ab,ak:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.ak,aq:()=>foregroundOnErrorFocus,au:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.au,ax:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.ax,b3:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.b3,bg:()=>foregroundOnErrorActive,c1:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.c1,cS:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.cS,cZ:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.cZ,dt:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.dt,ef:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.ef,ek:()=>errorFillHover,fd:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.fd,ff:()=>errorForegroundRest,fq:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.fq,fr:()=>foregroundOnErrorLargeRecipe,go:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.go,gs:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.gs,hD:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.hD,hP:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.hP,hR:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.hR,hV:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.hV,hY:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.hY,hZ:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.hZ,iJ:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.iJ,iL:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.iL,iX:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.iX,ip:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.ip,jI:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.jI,jW:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.jW,jn:()=>foregroundOnErrorActiveLarge,jq:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.jq,jx:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.jx,kb:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.kb,kp:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.kp,lJ:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.lJ,lu:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.pg,mH:()=>errorFillFocus,mW:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.mW,n5:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.n5,nB:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.nB,nd:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.nd,nf:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.nf,o7:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.o7,pg:()=>errorForegroundHover,q2:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.q2,qD:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.qD,q_:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.q_,rF:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.rF,rj:()=>foregroundOnErrorRest,rn:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.rn,s0:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.s0,s5:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.s5,sG:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.sG,sN:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.sN,sc:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.sc,sm:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.sm,sp:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.sp,tZ:()=>foregroundOnErrorRecipe,v$:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.v$,vg:()=>foregroundOnErrorHoverLarge,vr:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.vr,vx:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.vx,w4:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.w4,wF:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.wF,wt:()=>foregroundOnErrorRestLarge,y9:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.y9,yD:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.yD,yG:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.yG,yv:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.yv,z:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.z,z4:()=>_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.z4});var _microsoft_fast_components__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/color/palette.js"),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/design-tokens.js"),_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/design-token/design-token.js"),_color__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/color.ts"),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/styles/direction.js");const{create}=_microsoft_fast_foundation__WEBPACK_IMPORTED_MODULE_3__.DesignToken,errorPalette=create({name:"error-palette",cssCustomPropertyName:null}).withDefault(_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_4__.v.from(_color__WEBPACK_IMPORTED_MODULE_0__.rw)),errorFillRecipe=create({name:"error-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(element,reference)=>(0,_color__WEBPACK_IMPORTED_MODULE_0__.U0)(errorPalette.getValueFor(element),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.yv.getValueFor(element),reference||_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.If.getValueFor(element),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.B2.getValueFor(element),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.Wo.getValueFor(element),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.v$.getValueFor(element),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.MY.getValueFor(element),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.jW.getValueFor(element),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.hD.getValueFor(element))}),errorFillRest=create("error-fill-rest").withDefault((element=>errorFillRecipe.getValueFor(element).evaluate(element).rest)),errorFillHover=create("error-fill-hover").withDefault((element=>errorFillRecipe.getValueFor(element).evaluate(element).hover)),errorFillActive=create("error-fill-active").withDefault((element=>errorFillRecipe.getValueFor(element).evaluate(element).active)),errorFillFocus=create("error-fill-focus").withDefault((element=>errorFillRecipe.getValueFor(element).evaluate(element).focus)),foregroundOnErrorByContrast=contrast=>(element,reference)=>(0,_color__WEBPACK_IMPORTED_MODULE_0__.C3)(reference||errorFillRest.getValueFor(element),contrast),foregroundOnErrorRecipe=create({name:"foreground-on-error-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(element,reference)=>foregroundOnErrorByContrast(_color__WEBPACK_IMPORTED_MODULE_0__.vG.normal)(element,reference)}),foregroundOnErrorRest=create("foreground-on-error-rest").withDefault((element=>foregroundOnErrorRecipe.getValueFor(element).evaluate(element,errorFillRest.getValueFor(element)))),foregroundOnErrorHover=create("foreground-on-error-hover").withDefault((element=>foregroundOnErrorRecipe.getValueFor(element).evaluate(element,errorFillHover.getValueFor(element)))),foregroundOnErrorActive=create("foreground-on-error-active").withDefault((element=>foregroundOnErrorRecipe.getValueFor(element).evaluate(element,errorFillActive.getValueFor(element)))),foregroundOnErrorFocus=create("foreground-on-error-focus").withDefault((element=>foregroundOnErrorRecipe.getValueFor(element).evaluate(element,errorFillFocus.getValueFor(element)))),foregroundOnErrorLargeRecipe=create({name:"foreground-on-error-large-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(element,reference)=>foregroundOnErrorByContrast(_color__WEBPACK_IMPORTED_MODULE_0__.vG.large)(element,reference)}),foregroundOnErrorRestLarge=create("foreground-on-error-rest-large").withDefault((element=>foregroundOnErrorLargeRecipe.getValueFor(element).evaluate(element,errorFillRest.getValueFor(element)))),foregroundOnErrorHoverLarge=create("foreground-on-error-hover-large").withDefault((element=>foregroundOnErrorLargeRecipe.getValueFor(element).evaluate(element,errorFillHover.getValueFor(element)))),foregroundOnErrorActiveLarge=create("foreground-on-error-active-large").withDefault((element=>foregroundOnErrorLargeRecipe.getValueFor(element).evaluate(element,errorFillActive.getValueFor(element)))),foregroundOnErrorFocusLarge=create("foreground-on-error-focus-large").withDefault((element=>foregroundOnErrorLargeRecipe.getValueFor(element).evaluate(element,errorFillFocus.getValueFor(element)))),errorForegroundRecipe=create({name:"error-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(element,reference)=>{return(contrast=_color__WEBPACK_IMPORTED_MODULE_0__.vG.normal,(element,reference)=>(0,_color__WEBPACK_IMPORTED_MODULE_0__.lf)(errorPalette.getValueFor(element),reference||_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.If.getValueFor(element),contrast,_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.kp.getValueFor(element),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.L8.getValueFor(element),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.kb.getValueFor(element),_microsoft_fast_components__WEBPACK_IMPORTED_MODULE_1__.nd.getValueFor(element)))(element,reference);var contrast}}),errorForegroundRest=create("error-foreground-rest").withDefault((element=>errorForegroundRecipe.getValueFor(element).evaluate(element).rest)),errorForegroundHover=create("error-foreground-hover").withDefault((element=>errorForegroundRecipe.getValueFor(element).evaluate(element).hover)),errorForegroundActive=create("error-foreground-active").withDefault((element=>errorForegroundRecipe.getValueFor(element).evaluate(element).active)),errorForegroundFocus=create("error-foreground-focus").withDefault((element=>errorForegroundRecipe.getValueFor(element).evaluate(element).focus))},"./.storybook/preview.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>_storybook_preview});var index_rollup_namespaceObject={};__webpack_require__.r(index_rollup_namespaceObject),__webpack_require__.d(index_rollup_namespaceObject,{Accordion:()=>accordion.U,AccordionItem:()=>accordion_item.Q,AnchoredRegion:()=>anchored_region.$,Avatar:()=>avatar.qE,Badge:()=>badge.C,Breadcrumb:()=>breadcrumb.a,BreadcrumbItem:()=>breadcrumb_item.g,Button:()=>Button,Card:()=>esm_card.Zb,Checkbox:()=>checkbox_checkbox.X,Combobox:()=>Combobox,ContrastTarget:()=>color.vG,DataGrid:()=>data_grid._$,DataGridCell:()=>data_grid_cell.a,DataGridRow:()=>data_grid_row.m,DateField:()=>DateField,DirectionalStyleSheetBehavior:()=>design_tokens.O8,Divider:()=>divider.i,JupyterDesignSystem:()=>JupyterDesignSystem,Menu:()=>menu.v,MenuItem:()=>menu_item.sN,NumberField:()=>esm_number_field.Ki,Option:()=>listbox_option.wt,PaletteRGB:()=>color.vD,Progress:()=>base_progress.B,Radio:()=>radio_radio.Y,RadioGroup:()=>radio_group.E,Search:()=>esm_search.ol,Select:()=>Select,SliderLabel:()=>slider_label.PQ,StandardLuminance:()=>color.he,SwatchRGB:()=>color.wd,Tab:()=>tab.O,TabPanel:()=>tab_panel.x,Tabs:()=>tabs.m,TextArea:()=>esm_text_area.Kx,TextField:()=>esm_text_field.nv,Toolbar:()=>toolbar.o8,Tooltip:()=>tooltip.u,accentColor:()=>design_tokens.z,accentFillActive:()=>design_tokens.UE,accentFillActiveDelta:()=>design_tokens.Wo,accentFillFocus:()=>design_tokens.D8,accentFillFocusDelta:()=>design_tokens.v$,accentFillHover:()=>design_tokens.OC,accentFillHoverDelta:()=>design_tokens.B2,accentFillRecipe:()=>design_tokens.CM,accentFillRest:()=>design_tokens.Av,accentFillRestDelta:()=>design_tokens.N7,accentForegroundActive:()=>design_tokens.VN,accentForegroundActiveDelta:()=>design_tokens.kb,accentForegroundFocus:()=>design_tokens.cZ,accentForegroundFocusDelta:()=>design_tokens.nd,accentForegroundHover:()=>design_tokens.D9,accentForegroundHoverDelta:()=>design_tokens.L8,accentForegroundRecipe:()=>design_tokens.Rk,accentForegroundRest:()=>design_tokens.go,accentForegroundRestDelta:()=>design_tokens.kp,accentPalette:()=>design_tokens.au,accordionItemStyles:()=>accordionItemStyles,accordionStyles:()=>accordion_styles.T,addJupyterLabThemeChangeListener:()=>addJupyterLabThemeChangeListener,allComponents:()=>allComponents,anchoredRegionStyles:()=>anchored_region_styles.Y,avatarStyles:()=>avatarStyles,badgeStyles:()=>badgeStyles,baseErrorColor:()=>color.gN,baseHeightMultiplier:()=>design_tokens.nf,baseHorizontalSpacingMultiplier:()=>design_tokens.LQ,baseLayerLuminance:()=>design_tokens.q2,black:()=>color.Sn,bodyFont:()=>design_tokens.SV,breadcrumbItemStyles:()=>breadcrumbItemStyles,breadcrumbStyles:()=>breadcrumb_styles.S,cardStyles:()=>card_styles.F,checkboxStyles:()=>checkboxStyles,comboboxStyles:()=>comboboxStyles,controlCornerRadius:()=>design_tokens.UW,dataGridCellStyles:()=>dataGridCellStyles,dataGridRowStyles:()=>data_grid_row_styles.r,dataGridStyles:()=>data_grid_styles.l,dateFieldStyles:()=>dateFieldStyles,dateFieldTemplate:()=>dateFieldTemplate,density:()=>design_tokens.hV,designUnit:()=>design_tokens._5,direction:()=>design_tokens.o7,disabledOpacity:()=>design_tokens.VF,dividerStyles:()=>divider_styles.T,errorBase:()=>color.rw,errorFillActive:()=>design_tokens.GB,errorFillAlgorithm:()=>color.U0,errorFillFocus:()=>design_tokens.mH,errorFillHover:()=>design_tokens.ek,errorFillRecipe:()=>design_tokens.Sl,errorFillRest:()=>design_tokens.a6,errorForegroundActive:()=>design_tokens.DV,errorForegroundAlgorithm:()=>color.lf,errorForegroundFocus:()=>design_tokens.YE,errorForegroundHover:()=>design_tokens.pg,errorForegroundRecipe:()=>design_tokens._S,errorForegroundRest:()=>design_tokens.ff,errorPalette:()=>design_tokens.Vu,fillColor:()=>design_tokens.If,focusStrokeInner:()=>design_tokens.a2,focusStrokeInnerRecipe:()=>design_tokens.J7,focusStrokeOuter:()=>design_tokens.yG,focusStrokeOuterRecipe:()=>design_tokens.Al,focusStrokeWidth:()=>design_tokens.vx,foregroundOnAccentActive:()=>design_tokens.Pp,foregroundOnAccentActiveLarge:()=>design_tokens.hR,foregroundOnAccentFocus:()=>design_tokens.$u,foregroundOnAccentFocusLarge:()=>design_tokens.iJ,foregroundOnAccentHover:()=>design_tokens.lJ,foregroundOnAccentHoverLarge:()=>design_tokens.Ue,foregroundOnAccentLargeRecipe:()=>design_tokens.jI,foregroundOnAccentRecipe:()=>design_tokens.A1,foregroundOnAccentRest:()=>design_tokens.w4,foregroundOnAccentRestLarge:()=>design_tokens.iX,foregroundOnErrorActive:()=>design_tokens.bg,foregroundOnErrorActiveLarge:()=>design_tokens.jn,foregroundOnErrorAlgorithm:()=>color.C3,foregroundOnErrorFocus:()=>design_tokens.aq,foregroundOnErrorFocusLarge:()=>design_tokens.NF,foregroundOnErrorHover:()=>design_tokens.A$,foregroundOnErrorHoverLarge:()=>design_tokens.vg,foregroundOnErrorLargeRecipe:()=>design_tokens.fr,foregroundOnErrorRecipe:()=>design_tokens.tZ,foregroundOnErrorRest:()=>design_tokens.rj,foregroundOnErrorRestLarge:()=>design_tokens.wt,horizontalSliderLabelStyles:()=>slider_label_styles.b2,imgTemplate:()=>avatar.IY,isDark:()=>color._T,jpAccordion:()=>jpAccordion,jpAccordionItem:()=>jpAccordionItem,jpAnchoredRegion:()=>jpAnchoredRegion,jpAvatar:()=>jpAvatar,jpBadge:()=>jpBadge,jpBreadcrumb:()=>jpBreadcrumb,jpBreadcrumbItem:()=>jpBreadcrumbItem,jpButton:()=>jpButton,jpCard:()=>jpCard,jpCheckbox:()=>jpCheckbox,jpCombobox:()=>jpCombobox,jpDataGrid:()=>jpDataGrid,jpDataGridCell:()=>jpDataGridCell,jpDataGridRow:()=>jpDataGridRow,jpDateField:()=>jpDateField,jpDivider:()=>jpDivider,jpMenu:()=>jpMenu,jpMenuItem:()=>jpMenuItem,jpNumberField:()=>jpNumberField,jpOption:()=>jpOption,jpProgress:()=>jpProgress,jpProgressRing:()=>jpProgressRing,jpRadio:()=>jpRadio,jpRadioGroup:()=>jpRadioGroup,jpSearch:()=>jpSearch,jpSelect:()=>jpSelect,jpSlider:()=>jpSlider,jpSliderLabel:()=>jpSliderLabel,jpSwitch:()=>jpSwitch,jpTab:()=>jpTab,jpTabPanel:()=>jpTabPanel,jpTabs:()=>jpTabs,jpTextArea:()=>jpTextArea,jpTextField:()=>jpTextField,jpToolbar:()=>jpToolbar,jpTooltip:()=>jpTooltip,jpTreeItem:()=>jpTreeItem,jpTreeView:()=>jpTreeView,menuItemStyles:()=>menuItemStyles,menuStyles:()=>menu_styles.J,neutralColor:()=>design_tokens.z4,neutralFillActive:()=>design_tokens.Gy,neutralFillActiveDelta:()=>design_tokens.hD,neutralFillFocus:()=>design_tokens.CH,neutralFillFocusDelta:()=>design_tokens.VQ,neutralFillHover:()=>design_tokens.Xi,neutralFillHoverDelta:()=>design_tokens.jW,neutralFillInputActive:()=>design_tokens.Iu,neutralFillInputActiveDelta:()=>design_tokens.q_,neutralFillInputFocus:()=>design_tokens.rF,neutralFillInputFocusDelta:()=>design_tokens.Zb,neutralFillInputHover:()=>design_tokens.Tm,neutralFillInputHoverDelta:()=>design_tokens.EL,neutralFillInputRecipe:()=>design_tokens.sm,neutralFillInputRest:()=>design_tokens._B,neutralFillInputRestDelta:()=>design_tokens.ef,neutralFillLayerRecipe:()=>design_tokens.ab,neutralFillLayerRest:()=>design_tokens.RJ,neutralFillLayerRestDelta:()=>design_tokens.YL,neutralFillRecipe:()=>design_tokens.At,neutralFillRest:()=>design_tokens.wF,neutralFillRestDelta:()=>design_tokens.MY,neutralFillStealthActive:()=>design_tokens.sG,neutralFillStealthActiveDelta:()=>design_tokens.gs,neutralFillStealthFocus:()=>design_tokens.s0,neutralFillStealthFocusDelta:()=>design_tokens.IU,neutralFillStealthHover:()=>design_tokens.Qp,neutralFillStealthHoverDelta:()=>design_tokens.fq,neutralFillStealthRecipe:()=>design_tokens.DF,neutralFillStealthRest:()=>design_tokens.jq,neutralFillStealthRestDelta:()=>design_tokens.qD,neutralFillStrongActive:()=>design_tokens.hP,neutralFillStrongActiveDelta:()=>design_tokens.Vt,neutralFillStrongFocus:()=>design_tokens.Nz,neutralFillStrongFocusDelta:()=>design_tokens.UC,neutralFillStrongHover:()=>design_tokens.Dg,neutralFillStrongHoverDelta:()=>design_tokens.sc,neutralFillStrongRecipe:()=>design_tokens.Qi,neutralFillStrongRest:()=>design_tokens.P0,neutralFillStrongRestDelta:()=>design_tokens.Cl,neutralForegroundHint:()=>design_tokens.Q5,neutralForegroundHintRecipe:()=>design_tokens.ax,neutralForegroundRecipe:()=>design_tokens.GU,neutralForegroundRest:()=>design_tokens.hY,neutralLayer1:()=>design_tokens.y9,neutralLayer1Recipe:()=>design_tokens.AI,neutralLayer2:()=>design_tokens.jx,neutralLayer2Recipe:()=>design_tokens.vr,neutralLayer3:()=>design_tokens.hZ,neutralLayer3Recipe:()=>design_tokens.IZ,neutralLayer4:()=>design_tokens.sp,neutralLayer4Recipe:()=>design_tokens.Ve,neutralLayerCardContainer:()=>design_tokens.$B,neutralLayerCardContainerRecipe:()=>design_tokens.nB,neutralLayerFloating:()=>design_tokens.s5,neutralLayerFloatingRecipe:()=>design_tokens.L4,neutralPalette:()=>design_tokens.yv,neutralStrokeActive:()=>design_tokens.c1,neutralStrokeActiveDelta:()=>design_tokens.IM,neutralStrokeDividerRecipe:()=>design_tokens.$9,neutralStrokeDividerRest:()=>design_tokens.dt,neutralStrokeDividerRestDelta:()=>design_tokens.EB,neutralStrokeFocus:()=>design_tokens.V0,neutralStrokeFocusDelta:()=>design_tokens.Bx,neutralStrokeHover:()=>design_tokens.QP,neutralStrokeHoverDelta:()=>design_tokens.rn,neutralStrokeRecipe:()=>design_tokens.lu,neutralStrokeRest:()=>design_tokens.ak,neutralStrokeRestDelta:()=>design_tokens.fd,numberFieldStyles:()=>numberFieldStyles,optionStyles:()=>optionStyles,progressStyles:()=>progress_styles.Q,provideJupyterDesignSystem:()=>provideJupyterDesignSystem,radioGroupStyles:()=>radio_group_styles.p,radioStyles:()=>radioStyles,searchStyles:()=>searchStyles,selectStyles:()=>selectStyles,sliderLabelStyles:()=>slider_label_styles.Ok,strokeWidth:()=>design_tokens.H,tabPanelStyles:()=>tab_panel_styles.T,tabStyles:()=>tabStyles,tabsStyles:()=>tabsStyles,textAreaStyles:()=>textAreaStyles,textFieldStyles:()=>textFieldStyles,toolbarStyles:()=>toolbarStyles,tooltipStyles:()=>tooltip_styles.n,typeRampBaseFontSize:()=>design_tokens.cS,typeRampBaseLineHeight:()=>design_tokens.RU,typeRampMinus1FontSize:()=>design_tokens.sN,typeRampMinus1LineHeight:()=>design_tokens.A_,typeRampMinus2FontSize:()=>design_tokens.G8,typeRampMinus2LineHeight:()=>design_tokens.Mw,typeRampPlus1FontSize:()=>design_tokens.Pw,typeRampPlus1LineHeight:()=>design_tokens.b3,typeRampPlus2FontSize:()=>design_tokens.mW,typeRampPlus2LineHeight:()=>design_tokens.I7,typeRampPlus3FontSize:()=>design_tokens.ip,typeRampPlus3LineHeight:()=>design_tokens.D$,typeRampPlus4FontSize:()=>design_tokens.IW,typeRampPlus4LineHeight:()=>design_tokens.iL,typeRampPlus5FontSize:()=>design_tokens.CX,typeRampPlus5LineHeight:()=>design_tokens.n5,typeRampPlus6FontSize:()=>design_tokens.Z,typeRampPlus6LineHeight:()=>design_tokens.yD,verticalSliderLabelStyles:()=>slider_label_styles.KI,white:()=>color.ix});var accordion=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/accordion/accordion.js"),accordion_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/accordion/accordion.template.js"),accordion_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/accordion/accordion.styles.js"),accordion_item=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/accordion-item/accordion-item.js"),accordion_item_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/accordion-item/accordion-item.template.js"),css=__webpack_require__("../../node_modules/@microsoft/fast-element/dist/esm/styles/css.js"),display=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/display.js"),style_focus=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/focus.js"),match_media_stylesheet_behavior=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/utilities/match-media-stylesheet-behavior.js"),system_colors=__webpack_require__("../../node_modules/@microsoft/fast-web-utilities/dist/system-colors.js"),design_tokens=__webpack_require__("./src/design-tokens.ts");const heightNumber=css.j`(${design_tokens.nf} + ${design_tokens.hV}) * ${design_tokens._5}`,accordionItemStyles=(context,definition)=>css.i`
    ${(0,display.j)("flex")} :host {
      box-sizing: border-box;
      font-family: ${design_tokens.SV};
      flex-direction: column;
      font-size: ${design_tokens.sN};
      line-height: ${design_tokens.A_};
      border-bottom: calc(${design_tokens.H} * 1px) solid
        ${design_tokens.dt};
    }

    .region {
      display: none;
      padding: calc((6 + (${design_tokens._5} * 2 * ${design_tokens.hV})) * 1px);
    }

    div.heading {
      display: grid;
      position: relative;
      grid-template-columns: calc(${heightNumber} * 1px) auto 1fr auto;
      color: ${design_tokens.hY};
    }

    .button {
      appearance: none;
      border: none;
      background: none;
      grid-column: 3;
      outline: none;
      padding: 0 calc((6 + (${design_tokens._5} * 2 * ${design_tokens.hV})) * 1px);
      text-align: left;
      height: calc(${heightNumber} * 1px);
      color: currentcolor;
      cursor: pointer;
      font-family: inherit;
    }

    .button:hover {
      color: currentcolor;
    }

    .button:active {
      color: currentcolor;
    }

    .button::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: pointer;
    }

    /* prettier-ignore */
    .button:${style_focus.b}::before {
      outline: none;
      border: calc(${design_tokens.vx} * 1px) solid ${design_tokens.D8};
      border-radius: calc(${design_tokens.UW} * 1px);
    }

    :host([expanded]) .region {
      display: block;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 1;
      grid-row: 1;
      pointer-events: none;
      position: relative;
    }

    slot[name='expanded-icon'],
    slot[name='collapsed-icon'] {
      fill: currentcolor;
    }

    slot[name='collapsed-icon'] {
      display: flex;
    }

    :host([expanded]) slot[name='collapsed-icon'] {
      display: none;
    }

    slot[name='expanded-icon'] {
      display: none;
    }

    :host([expanded]) slot[name='expanded-icon'] {
      display: flex;
    }

    .start {
      display: flex;
      align-items: center;
      padding-inline-start: calc(${design_tokens._5} * 1px);
      justify-content: center;
      grid-column: 2;
      position: relative;
    }

    .end {
      display: flex;
      align-items: center;
      justify-content: center;
      grid-column: 4;
      position: relative;
    }
  `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        /* prettier-ignore */
        .button:${style_focus.b}::before {
          border-color: ${system_colors.H.Highlight};
        }
        :host slot[name='collapsed-icon'],
        :host([expanded]) slot[name='expanded-icon'] {
          fill: ${system_colors.H.ButtonText};
        }
      `)),jpAccordionItem=accordion_item.Q.compose({baseName:"accordion-item",template:accordion_item_template.c,styles:accordionItemStyles,collapsedIcon:'\n      <svg\n        width="20"\n        height="20"\n        viewBox="0 0 16 16"\n        xmlns="http://www.w3.org/2000/svg"\n        class="expand-collapse-glyph"\n      >\n        <path\n          fill-rule="evenodd"\n          clip-rule="evenodd"\n          d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"\n        />\n      </svg>\n    ',expandedIcon:'\n      <svg\n        width="20"\n        height="20"\n        viewBox="0 0 16 16"\n        xmlns="http://www.w3.org/2000/svg"\n        class="expand-collapse-glyph"\n      >\n        <path\n          fill-rule="evenodd"\n          clip-rule="evenodd"\n          transform="rotate(90,8,8)"\n          d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"\n        />\n      </svg>\n    '}),jpAccordion=accordion.U.compose({baseName:"accordion",template:accordion_template.N,styles:accordion_styles.T});var anchored_region=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/anchored-region/anchored-region.js"),anchored_region_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/anchored-region/anchored-region.template.js"),anchored_region_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/anchored-region/anchored-region.styles.js");const jpAnchoredRegion=anchored_region.$.compose({baseName:"anchored-region",template:anchored_region_template.O,styles:anchored_region_styles.Y});var avatar=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/avatar/index.js"),avatar_avatar=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/avatar/avatar.js"),avatar_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/avatar/avatar.template.js"),badge=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/badge/badge.js");const avatarStyles=(context,definition)=>css.i`
    ${(0,display.j)("flex")} :host {
      position: relative;
      height: var(--avatar-size, var(--avatar-size-default));
      width: var(--avatar-size, var(--avatar-size-default));
      --avatar-size-default: calc(
        (
            (${design_tokens.nf} + ${design_tokens.hV}) * ${design_tokens._5} +
              ((${design_tokens._5} * 8) - 40)
          ) * 1px
      );
      --avatar-text-size: ${design_tokens.cS};
      --avatar-text-ratio: ${design_tokens._5};
    }

    .link {
      text-decoration: none;
      color: ${design_tokens.hY};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      min-width: 100%;
    }

    .square {
      border-radius: calc(${design_tokens.UW} * 1px);
      min-width: 100%;
      overflow: hidden;
    }

    .circle {
      border-radius: 100%;
      min-width: 100%;
      overflow: hidden;
    }

    .backplate {
      position: relative;
      display: flex;
      background-color: ${design_tokens.Av};
    }

    .media,
    ::slotted(img) {
      max-width: 100%;
      position: absolute;
      display: block;
    }

    .content {
      font-size: calc(
        (
            var(--avatar-text-size) +
              var(--avatar-size, var(--avatar-size-default))
          ) / var(--avatar-text-ratio)
      );
      color: ${design_tokens.w4};
      line-height: var(--avatar-size, var(--avatar-size-default));
      display: block;
      min-height: var(--avatar-size, var(--avatar-size-default));
    }

    ::slotted(${context.tagFor(badge.C)}) {
      position: absolute;
      display: block;
    }
  `.withBehaviors(new design_tokens.O8(((context,definition)=>css.i`
  ::slotted(${context.tagFor(badge.C)}) {
    right: 0;
  }
`)(context),((context,definition)=>css.i`
  ::slotted(${context.tagFor(badge.C)}) {
    left: 0;
  }
`)(context))),jpAvatar=avatar.qE.compose({baseName:"avatar",baseClass:avatar_avatar.q,template:avatar_template.m,styles:avatarStyles,media:avatar.IY,shadowOptions:{delegatesFocus:!0}});var badge_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/badge/badge.template.js");const elevation="box-shadow: 0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1)))), 0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))));";var esm_design_tokens=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/design-tokens.js"),disabled=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/utilities/style/disabled.js");const BaseFieldStyles=css.i`
  ${(0,display.j)("inline-block")} :host {
    font-family: ${esm_design_tokens.SV};
    outline: none;
    user-select: none;
  }

  .root {
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: row;
    color: ${esm_design_tokens.hY};
    background: ${esm_design_tokens._B};
    border-radius: calc(${esm_design_tokens.UW} * 1px);
    border: calc(${esm_design_tokens.H} * 1px) solid ${esm_design_tokens.P0};
    height: calc(${heightNumber} * 1px);
  }

  .control {
    -webkit-appearance: none;
    font: inherit;
    background: transparent;
    border: 0;
    color: inherit;
    height: calc(100% - 4px);
    width: 100%;
    margin-top: auto;
    margin-bottom: auto;
    border: none;
    padding: 0 calc(${esm_design_tokens._5} * 2px + 1px);
    font-size: ${esm_design_tokens.cS};
    line-height: ${esm_design_tokens.RU};
  }

  .control:hover,
  .control:${style_focus.b},
  .control:disabled,
  .control:active {
    outline: none;
  }

  .label {
    display: block;
    color: ${esm_design_tokens.hY};
    cursor: pointer;
    font-size: ${esm_design_tokens.cS};
    line-height: ${esm_design_tokens.RU};
    margin-bottom: 4px;
  }

  .label__hidden {
    display: none;
    visibility: hidden;
  }

  .start,
  .end {
    margin: auto;
    fill: currentcolor;
  }

  ::slotted(svg) {
    /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
    width: 16px;
    height: 16px;
  }

  .start {
    margin-inline-start: 11px;
  }

  .end {
    margin-inline-end: 11px;
  }

  :host(:hover:not([disabled])) .root {
    background: ${esm_design_tokens.Tm};
    border-color: ${esm_design_tokens.Dg};
  }

  :host(:active:not([disabled])) .root {
    background: ${esm_design_tokens.Tm};
    border-color: ${esm_design_tokens.hP};
  }

  :host(:focus-within:not([disabled])) .root {
    border-color: ${esm_design_tokens.D8};
    box-shadow: 0 0 0 calc((${esm_design_tokens.vx} - ${esm_design_tokens.H}) * 1px)
      ${esm_design_tokens.D8};
  }

  :host([appearance='filled']) .root {
    background: ${esm_design_tokens.wF};
  }

  :host([appearance='filled']:hover:not([disabled])) .root {
    background: ${esm_design_tokens.Xi};
  }

  :host([disabled]) .label,
  :host([readonly]) .label,
  :host([readonly]) .control,
  :host([disabled]) .control {
    cursor: ${disabled.H};
  }

  :host([disabled]) {
    opacity: ${esm_design_tokens.VF};
  }

  :host([disabled]) .control {
    border-color: ${esm_design_tokens.ak};
  }
`.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
      .root,
      :host([appearance='filled']) .root {
        forced-color-adjust: none;
        background: ${system_colors.H.Field};
        border-color: ${system_colors.H.FieldText};
      }
      :host(:hover:not([disabled])) .root,
      :host([appearance='filled']:hover:not([disabled])) .root,
      :host([appearance='filled']:hover) .root {
        background: ${system_colors.H.Field};
        border-color: ${system_colors.H.Highlight};
      }
      .start,
      .end {
        fill: currentcolor;
      }
      :host([disabled]) {
        opacity: 1;
      }
      :host([disabled]) .root,
      :host([appearance='filled']:hover[disabled]) .root {
        border-color: ${system_colors.H.GrayText};
        background: ${system_colors.H.Field};
      }
      :host(:focus-within:enabled) .root {
        border-color: ${system_colors.H.Highlight};
        box-shadow: 0 0 0 calc((${esm_design_tokens.vx} - ${esm_design_tokens.H}) * 1px)
          ${system_colors.H.Highlight};
      }
      input::placeholder {
        color: ${system_colors.H.GrayText};
      }
    `)),badgeStyles=(context,definition)=>css.i`
    ${(0,display.j)("inline-block")} :host {
      box-sizing: border-box;
      font-family: ${design_tokens.SV};
      font-size: ${design_tokens.sN};
      line-height: ${design_tokens.A_};
    }

    .control {
      border-radius: calc(${design_tokens.UW} * 1px);
      padding: calc(((${design_tokens._5} * 0.5) - ${design_tokens.H}) * 1px)
        calc((${design_tokens._5} - ${design_tokens.H}) * 1px);
      color: ${design_tokens.hY};
      font-weight: 600;
      border: calc(${design_tokens.H} * 1px) solid transparent;
      background-color: ${design_tokens.wF};
    }

    .control[style] {
      font-weight: 400;
    }

    :host([circular]) .control {
      border-radius: 100px;
      padding: 0 calc(${design_tokens._5} * 1px);
      /* Need to work with Brian on width and height here */
      height: calc((${heightNumber} - (${design_tokens._5} * 3)) * 1px);
      min-width: calc((${heightNumber} - (${design_tokens._5} * 3)) * 1px);
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
    }
  `,jpBadge=badge.C.compose({baseName:"badge",template:badge_template.Z,styles:badgeStyles});var breadcrumb=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/breadcrumb/breadcrumb.js"),breadcrumb_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/breadcrumb/breadcrumb.template.js"),breadcrumb_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/breadcrumb/breadcrumb.styles.js");const jpBreadcrumb=breadcrumb.a.compose({baseName:"breadcrumb",template:breadcrumb_template.D,styles:breadcrumb_styles.S});var breadcrumb_item=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/breadcrumb-item/breadcrumb-item.js"),breadcrumb_item_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/breadcrumb-item/breadcrumb-item.template.js");const breadcrumbItemStyles=(context,definition)=>css.i`
    ${(0,display.j)("inline-flex")} :host {
        background: transparent;
        box-sizing: border-box;
        font-family: ${design_tokens.SV};
        font-size: ${design_tokens.cS};
        fill: currentColor;
        line-height: ${design_tokens.RU};
        min-width: calc(${heightNumber} * 1px);
        outline: none;
        color: ${design_tokens.hY}
    }

    .listitem {
        display: flex;
        align-items: center;
        width: max-content;
    }

    .separator {
        margin: 0 6px;
        display: flex;
    }

    .control {
        align-items: center;
        box-sizing: border-box;
        color: ${design_tokens.go};
        cursor: pointer;
        display: flex;
        fill: inherit;
        outline: none;
        text-decoration: none;
        white-space: nowrap;
    }

    .control:hover {
        color: ${design_tokens.D9};
    }

    .control:active {
        color: ${design_tokens.VN};
    }

    .control .content {
        position: relative;
    }

    .control .content::before {
        content: "";
        display: block;
        height: calc(${design_tokens.H} * 1px);
        left: 0;
        position: absolute;
        right: 0;
        top: calc(1em + 4px);
        width: 100%;
    }

    .control:hover .content::before {
        background: ${design_tokens.D9};
    }

    .control:active .content::before {
        background: ${design_tokens.VN};
    }

    .control:${style_focus.b} .content::before {
        background: ${design_tokens.cZ};
        height: calc(${design_tokens.vx} * 1px);
    }

    .control:not([href]) {
        color: ${design_tokens.hY};
        cursor: default;
    }

    .control:not([href]) .content::before {
        background: none;
    }

    .start,
    .end {
        display: flex;
    }

    ::slotted(svg) {
        /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
        width: 16px;
        height: 16px;
    }

    .start {
        margin-inline-end: 6px;
    }

    .end {
        margin-inline-start: 6px;
    }
`.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        .control:hover .content::before,
                .control:${style_focus.b} .content::before {
          background: ${system_colors.H.LinkText};
        }
        .start,
        .end {
          fill: ${system_colors.H.ButtonText};
        }
      `)),jpBreadcrumbItem=breadcrumb_item.g.compose({baseName:"breadcrumb-item",template:breadcrumb_item_template.Y,styles:breadcrumbItemStyles,separator:"/",shadowOptions:{delegatesFocus:!0}});var tslib_es6=__webpack_require__("../../node_modules/tslib/tslib.es6.mjs"),attributes=__webpack_require__("../../node_modules/@microsoft/fast-element/dist/esm/components/attributes.js"),button_button=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/button/button.js"),button_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/button/button.template.js"),property_stylesheet_behavior=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/utilities/property-stylesheet-behavior.js");function appearanceBehavior(value,styles){return new property_stylesheet_behavior.w("appearance",value,styles)}const BaseButtonStyles=css.i`
  ${(0,display.j)("inline-flex")} :host {
    font-family: ${design_tokens.SV};
    outline: none;
    font-size: ${design_tokens.cS};
    line-height: ${design_tokens.RU};
    height: calc(${heightNumber} * 1px);
    min-width: calc(${heightNumber} * 1px);
    background-color: ${design_tokens.wF};
    color: ${design_tokens.hY};
    border-radius: calc(${design_tokens.UW} * 1px);
    fill: currentcolor;
    cursor: pointer;
    margin: calc((${design_tokens.vx} + 2) * 1px);
  }

  .control {
    background: transparent;
    height: inherit;
    flex-grow: 1;
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 0 calc((10 + (${design_tokens._5} * 2 * ${design_tokens.hV})) * 1px);
    white-space: nowrap;
    outline: none;
    text-decoration: none;
    border: calc(${design_tokens.H} * 1px) solid transparent;
    color: inherit;
    border-radius: inherit;
    fill: inherit;
    cursor: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  :host(:hover) {
    background-color: ${design_tokens.Xi};
  }

  :host(:active) {
    background-color: ${design_tokens.Gy};
  }

  :host([minimal]) {
    --density: -4;
  }

  :host([minimal]) .control {
    padding: 1px;
  }

  /* prettier-ignore */
  .control:${style_focus.b} {
    outline: calc(${design_tokens.vx} * 1px) solid ${design_tokens.Nz};
    outline-offset: 2px;
    -moz-outline-radius: 0px;
  }

  .control::-moz-focus-inner {
    border: 0;
  }

  .start,
  .end {
    display: flex;
  }

  .control.icon-only {
    padding: 0;
    line-height: 0;
  }

  ::slotted(svg) {
    ${""} width: 16px;
    height: 16px;
    pointer-events: none;
  }

  .start {
    margin-inline-end: 11px;
  }

  .end {
    margin-inline-start: 11px;
  }
`.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
      :host .control {
        background-color: ${system_colors.H.ButtonFace};
        border-color: ${system_colors.H.ButtonText};
        color: ${system_colors.H.ButtonText};
        fill: currentColor;
      }

      :host(:hover) .control {
        forced-color-adjust: none;
        background-color: ${system_colors.H.Highlight};
        color: ${system_colors.H.HighlightText};
      }

      /* prettier-ignore */
      .control:${style_focus.b} {
        forced-color-adjust: none;
        background-color: ${system_colors.H.Highlight};
        outline-color: ${system_colors.H.ButtonText};
        color: ${system_colors.H.HighlightText};
      }

      .control:hover,
      :host([appearance='outline']) .control:hover {
        border-color: ${system_colors.H.ButtonText};
      }

      :host([href]) .control {
        border-color: ${system_colors.H.LinkText};
        color: ${system_colors.H.LinkText};
      }

      :host([href]) .control:hover,
      :host([href]) .control:${style_focus.b} {
        forced-color-adjust: none;
        background: ${system_colors.H.ButtonFace};
        outline-color: ${system_colors.H.LinkText};
        color: ${system_colors.H.LinkText};
        fill: currentColor;
      }
    `)),AccentButtonStyles=css.i`
  :host([appearance='accent']) {
    background: ${design_tokens.Av};
    color: ${design_tokens.w4};
  }

  :host([appearance='accent']:hover) {
    background: ${design_tokens.OC};
    color: ${design_tokens.lJ};
  }

  :host([appearance='accent']:active) .control:active {
    background: ${design_tokens.UE};
    color: ${design_tokens.Pp};
  }

  :host([appearance="accent"]) .control:${style_focus.b} {
    outline-color: ${design_tokens.D8};
  }
`.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
      :host([appearance='accent']) .control {
        forced-color-adjust: none;
        background: ${system_colors.H.Highlight};
        color: ${system_colors.H.HighlightText};
      }

      :host([appearance='accent']) .control:hover,
      :host([appearance='accent']:active) .control:active {
        background: ${system_colors.H.HighlightText};
        border-color: ${system_colors.H.Highlight};
        color: ${system_colors.H.Highlight};
      }

      :host([appearance="accent"]) .control:${style_focus.b} {
        outline-color: ${system_colors.H.Highlight};
      }

      :host([appearance='accent'][href]) .control {
        background: ${system_colors.H.LinkText};
        color: ${system_colors.H.HighlightText};
      }

      :host([appearance='accent'][href]) .control:hover {
        background: ${system_colors.H.ButtonFace};
        border-color: ${system_colors.H.LinkText};
        box-shadow: none;
        color: ${system_colors.H.LinkText};
        fill: currentColor;
      }

      :host([appearance="accent"][href]) .control:${style_focus.b} {
        outline-color: ${system_colors.H.HighlightText};
      }
    `)),ErrorButtonStyles=css.i`
  :host([appearance='error']) {
    background: ${design_tokens.a6};
    color: ${design_tokens.w4};
  }

  :host([appearance='error']:hover) {
    background: ${design_tokens.ek};
    color: ${design_tokens.lJ};
  }

  :host([appearance='error']:active) .control:active {
    background: ${design_tokens.GB};
    color: ${design_tokens.Pp};
  }

  :host([appearance="error"]) .control:${style_focus.b} {
    outline-color: ${design_tokens.mH};
  }
`.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
      :host([appearance='error']) .control {
        forced-color-adjust: none;
        background: ${system_colors.H.Highlight};
        color: ${system_colors.H.HighlightText};
      }

      :host([appearance='error']) .control:hover,
      :host([appearance='error']:active) .control:active {
        background: ${system_colors.H.HighlightText};
        border-color: ${system_colors.H.Highlight};
        color: ${system_colors.H.Highlight};
      }

      :host([appearance="error"]) .control:${style_focus.b} {
        outline-color: ${system_colors.H.Highlight};
      }

      :host([appearance='error'][href]) .control {
        background: ${system_colors.H.LinkText};
        color: ${system_colors.H.HighlightText};
      }

      :host([appearance='error'][href]) .control:hover {
        background: ${system_colors.H.ButtonFace};
        border-color: ${system_colors.H.LinkText};
        box-shadow: none;
        color: ${system_colors.H.LinkText};
        fill: currentColor;
      }

      :host([appearance="error"][href]) .control:${style_focus.b} {
        outline-color: ${system_colors.H.HighlightText};
      }
    `)),LightweightButtonStyles=css.i`
  :host([appearance='lightweight']) {
    background: transparent;
    color: ${design_tokens.go};
  }

  :host([appearance='lightweight']) .control {
    padding: 0;
    height: initial;
    border: none;
    box-shadow: none;
    border-radius: 0;
  }

  :host([appearance='lightweight']:hover) {
    background: transparent;
    color: ${design_tokens.D9};
  }

  :host([appearance='lightweight']:active) {
    background: transparent;
    color: ${design_tokens.VN};
  }

  :host([appearance='lightweight']) .content {
    position: relative;
  }

  :host([appearance='lightweight']) .content::before {
    content: '';
    display: block;
    height: calc(${design_tokens.H} * 1px);
    position: absolute;
    top: calc(1em + 4px);
    width: 100%;
  }

  :host([appearance='lightweight']:hover) .content::before {
    background: ${design_tokens.D9};
  }

  :host([appearance='lightweight']:active) .content::before {
    background: ${design_tokens.VN};
  }

  :host([appearance="lightweight"]) .control:${style_focus.b} {
    outline-color: transparent;
  }

  :host([appearance="lightweight"]) .control:${style_focus.b} .content::before {
    background: ${design_tokens.hY};
    height: calc(${design_tokens.vx} * 1px);
  }
`.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
      :host([appearance="lightweight"]) .control:hover,
      :host([appearance="lightweight"]) .control:${style_focus.b} {
        forced-color-adjust: none;
        background: ${system_colors.H.ButtonFace};
        color: ${system_colors.H.Highlight};
      }
      :host([appearance="lightweight"]) .control:hover .content::before,
      :host([appearance="lightweight"]) .control:${style_focus.b} .content::before {
        background: ${system_colors.H.Highlight};
      }

      :host([appearance="lightweight"][href]) .control:hover,
      :host([appearance="lightweight"][href]) .control:${style_focus.b} {
        background: ${system_colors.H.ButtonFace};
        box-shadow: none;
        color: ${system_colors.H.LinkText};
      }

      :host([appearance="lightweight"][href]) .control:hover .content::before,
      :host([appearance="lightweight"][href]) .control:${style_focus.b} .content::before {
        background: ${system_colors.H.LinkText};
      }
    `)),OutlineButtonStyles=css.i`
  :host([appearance='outline']) {
    background: transparent;
    border-color: ${design_tokens.Av};
  }

  :host([appearance='outline']:hover) {
    border-color: ${design_tokens.OC};
  }

  :host([appearance='outline']:active) {
    border-color: ${design_tokens.UE};
  }

  :host([appearance='outline']) .control {
    border-color: inherit;
  }

  :host([appearance="outline"]) .control:${style_focus.b} {
    outline-color: ${design_tokens.D8};
  }
`.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
      :host([appearance='outline']) .control {
        border-color: ${system_colors.H.ButtonText};
      }
      :host([appearance="outline"]) .control:${style_focus.b} {
        forced-color-adjust: none;
        background-color: ${system_colors.H.Highlight};
        outline-color: ${system_colors.H.ButtonText};
        color: ${system_colors.H.HighlightText};
        fill: currentColor;
      }
      :host([appearance='outline'][href]) .control {
        background: ${system_colors.H.ButtonFace};
        border-color: ${system_colors.H.LinkText};
        color: ${system_colors.H.LinkText};
        fill: currentColor;
      }
      :host([appearance="outline"][href]) .control:hover,
      :host([appearance="outline"][href]) .control:${style_focus.b} {
        forced-color-adjust: none;
        outline-color: ${system_colors.H.LinkText};
      }
    `)),StealthButtonStyles=css.i`
  :host([appearance='stealth']) {
    background: transparent;
  }

  :host([appearance='stealth']:hover) {
    background: ${design_tokens.Qp};
  }

  :host([appearance='stealth']:active) {
    background: ${design_tokens.sG};
  }

  :host([appearance='stealth']) .control:${style_focus.b} {
    outline-color: ${design_tokens.D8};
  }
`.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
      :host([appearance='stealth']),
      :host([appearance='stealth']) .control {
        forced-color-adjust: none;
        background: ${system_colors.H.ButtonFace};
        border-color: transparent;
        color: ${system_colors.H.ButtonText};
        fill: currentColor;
      }

      :host([appearance='stealth']:hover) .control {
        background: ${system_colors.H.Highlight};
        border-color: ${system_colors.H.Highlight};
        color: ${system_colors.H.HighlightText};
        fill: currentColor;
      }

      :host([appearance="stealth"]:${style_focus.b}) .control {
        outline-color: ${system_colors.H.Highlight};
        color: ${system_colors.H.HighlightText};
        fill: currentColor;
      }

      :host([appearance='stealth'][href]) .control {
        color: ${system_colors.H.LinkText};
      }

      :host([appearance="stealth"][href]:hover) .control,
      :host([appearance="stealth"][href]:${style_focus.b}) .control {
        background: ${system_colors.H.LinkText};
        border-color: ${system_colors.H.LinkText};
        color: ${system_colors.H.HighlightText};
        fill: currentColor;
      }

      :host([appearance="stealth"][href]:${style_focus.b}) .control {
        forced-color-adjust: none;
        box-shadow: 0 0 0 1px ${system_colors.H.LinkText};
      }
    `));class Button extends button_button.z{connectedCallback(){super.connectedCallback(),this.appearance||(this.appearance="neutral")}defaultSlottedContentChanged(oldValue,newValue){const slottedElements=this.defaultSlottedContent.filter((x=>x.nodeType===Node.ELEMENT_NODE));1===slottedElements.length&&(slottedElements[0]instanceof SVGElement||slottedElements[0].classList.contains("fa")||slottedElements[0].classList.contains("fas"))?this.control.classList.add("icon-only"):this.control.classList.remove("icon-only")}}(0,tslib_es6.gn)([attributes.Lj],Button.prototype,"appearance",void 0),(0,tslib_es6.gn)([(0,attributes.Lj)({attribute:"minimal",mode:"boolean"})],Button.prototype,"minimal",void 0);const jpButton=Button.compose({baseName:"button",baseClass:button_button.z,template:button_template.u,styles:(context,definition)=>css.i`
    :host([disabled]),
    :host([disabled]:hover),
    :host([disabled]:active) {
      opacity: ${design_tokens.VF};
      background-color: ${design_tokens.wF};
      cursor: ${disabled.H};
    }

    ${BaseButtonStyles}
  `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        :host([disabled]),
        :host([disabled]) .control,
        :host([disabled]:hover),
        :host([disabled]:active) {
          forced-color-adjust: none;
          background-color: ${system_colors.H.ButtonFace};
          outline-color: ${system_colors.H.GrayText};
          color: ${system_colors.H.GrayText};
          cursor: ${disabled.H};
          opacity: 1;
        }
      `),appearanceBehavior("accent",css.i`
        :host([appearance='accent'][disabled]),
        :host([appearance='accent'][disabled]:hover),
        :host([appearance='accent'][disabled]:active) {
          background: ${design_tokens.Av};
        }

        ${AccentButtonStyles}
      `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
            :host([appearance='accent'][disabled]) .control,
            :host([appearance='accent'][disabled]) .control:hover {
              background: ${system_colors.H.ButtonFace};
              border-color: ${system_colors.H.GrayText};
              color: ${system_colors.H.GrayText};
            }
          `))),appearanceBehavior("error",css.i`
        :host([appearance='error'][disabled]),
        :host([appearance='error'][disabled]:hover),
        :host([appearance='error'][disabled]:active) {
          background: ${design_tokens.a6};
        }

        ${ErrorButtonStyles}
      `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
            :host([appearance='error'][disabled]) .control,
            :host([appearance='error'][disabled]) .control:hover {
              background: ${system_colors.H.ButtonFace};
              border-color: ${system_colors.H.GrayText};
              color: ${system_colors.H.GrayText};
            }
          `))),appearanceBehavior("lightweight",css.i`
        :host([appearance='lightweight'][disabled]:hover),
        :host([appearance='lightweight'][disabled]:active) {
          background-color: transparent;
          color: ${design_tokens.go};
        }

        :host([appearance='lightweight'][disabled]) .content::before,
        :host([appearance='lightweight'][disabled]:hover) .content::before,
        :host([appearance='lightweight'][disabled]:active) .content::before {
          background: transparent;
        }

        ${LightweightButtonStyles}
      `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
            :host([appearance='lightweight'].disabled) .control {
              forced-color-adjust: none;
              color: ${system_colors.H.GrayText};
            }

            :host([appearance='lightweight'].disabled)
              .control:hover
              .content::before {
              background: none;
            }
          `))),appearanceBehavior("outline",css.i`
        :host([appearance='outline'][disabled]),
        :host([appearance='outline'][disabled]:hover),
        :host([appearance='outline'][disabled]:active) {
          background: transparent;
          border-color: ${design_tokens.Av};
        }

        ${OutlineButtonStyles}
      `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
            :host([appearance='outline'][disabled]) .control {
              border-color: ${system_colors.H.GrayText};
            }
          `))),appearanceBehavior("stealth",css.i`
        :host([appearance='stealth'][disabled]),
        :host([appearance='stealth'][disabled]:hover),
        :host([appearance='stealth'][disabled]:active) {
          background: ${design_tokens.jq};
        }

        ${StealthButtonStyles}
      `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
            :host([appearance='stealth'][disabled]) {
              background: ${system_colors.H.ButtonFace};
            }

            :host([appearance='stealth'][disabled]) .control {
              background: ${system_colors.H.ButtonFace};
              border-color: transparent;
              color: ${system_colors.H.GrayText};
            }
          `)))),shadowOptions:{delegatesFocus:!0}});var card=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/card/card.js"),card_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/card/card.template.js"),esm_card=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/card/index.js"),card_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/card/card.styles.js");const jpCard=esm_card.Zb.compose({baseName:"card",baseClass:card.Z,template:card_template.O,styles:card_styles.F});var checkbox_checkbox=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/checkbox/checkbox.js"),checkbox_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/checkbox/checkbox.template.js");const checkboxStyles=(context,definition)=>css.i`
    ${(0,display.j)("inline-flex")} :host {
      align-items: center;
      outline: none;
      margin: calc(${design_tokens._5} * 1px) 0;
      /* Chromium likes to select label text or the default slot when the checkbox is
            clicked. Maybe there is a better solution here? */
      user-select: none;
    }

    .control {
      position: relative;
      width: calc((${heightNumber} / 2 + ${design_tokens._5}) * 1px);
      height: calc((${heightNumber} / 2 + ${design_tokens._5}) * 1px);
      box-sizing: border-box;
      border-radius: calc(${design_tokens.UW} * 1px);
      border: calc(${design_tokens.H} * 1px) solid ${design_tokens.ak};
      background: ${design_tokens._B};
      outline: none;
      cursor: pointer;
    }

    .label {
      font-family: ${design_tokens.SV};
      color: ${design_tokens.hY};
      /* Need to discuss with Brian how HorizontalSpacingNumber can work.
            https://github.com/microsoft/fast/issues/2766 */
      padding-inline-start: calc(${design_tokens._5} * 2px + 2px);
      margin-inline-end: calc(${design_tokens._5} * 2px + 2px);
      cursor: pointer;
      font-size: ${design_tokens.cS};
      line-height: ${design_tokens.RU};
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .checked-indicator {
      width: 100%;
      height: 100%;
      display: block;
      fill: ${design_tokens.w4};
      opacity: 0;
      pointer-events: none;
    }

    .indeterminate-indicator {
      border-radius: calc(${design_tokens.UW} * 1px);
      background: ${design_tokens.w4};
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      height: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
    }

    :host(:not([disabled])) .control:hover {
      background: ${design_tokens.Tm};
      border-color: ${design_tokens.QP};
    }

    :host(:not([disabled])) .control:active {
      background: ${design_tokens.Iu};
      border-color: ${design_tokens.c1};
    }

    :host(:${style_focus.b}) .control {
      outline: calc(${design_tokens.vx} * 1px) solid ${design_tokens.D8};
      outline-offset: 2px;
    }

    :host([aria-checked='true']) .control {
      background: ${design_tokens.Av};
      border: calc(${design_tokens.H} * 1px) solid ${design_tokens.Av};
    }

    :host([aria-checked='true']:not([disabled])) .control:hover {
      background: ${design_tokens.OC};
      border: calc(${design_tokens.H} * 1px) solid ${design_tokens.OC};
    }

    :host([aria-checked='true']:not([disabled]))
      .control:hover
      .checked-indicator {
      fill: ${design_tokens.lJ};
    }

    :host([aria-checked='true']:not([disabled]))
      .control:hover
      .indeterminate-indicator {
      background: ${design_tokens.lJ};
    }

    :host([aria-checked='true']:not([disabled])) .control:active {
      background: ${design_tokens.UE};
      border: calc(${design_tokens.H} * 1px) solid ${design_tokens.UE};
    }

    :host([aria-checked='true']:not([disabled]))
      .control:active
      .checked-indicator {
      fill: ${design_tokens.Pp};
    }

    :host([aria-checked='true']:not([disabled]))
      .control:active
      .indeterminate-indicator {
      background: ${design_tokens.Pp};
    }

    :host([aria-checked="true"]:${style_focus.b}:not([disabled])) .control {
      outline: calc(${design_tokens.vx} * 1px) solid ${design_tokens.D8};
      outline-offset: 2px;
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
      cursor: ${disabled.H};
    }

    :host([aria-checked='true']:not(.indeterminate)) .checked-indicator,
    :host(.indeterminate) .indeterminate-indicator {
      opacity: 1;
    }

    :host([disabled]) {
      opacity: ${design_tokens.VF};
    }
  `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        .control {
          forced-color-adjust: none;
          border-color: ${system_colors.H.FieldText};
          background: ${system_colors.H.Field};
        }
        .checked-indicator {
          fill: ${system_colors.H.FieldText};
        }
        .indeterminate-indicator {
          background: ${system_colors.H.FieldText};
        }
        :host(:not([disabled])) .control:hover,
        .control:active {
          border-color: ${system_colors.H.Highlight};
          background: ${system_colors.H.Field};
        }
        :host(:${style_focus.b}) .control {
          outline: calc(${design_tokens.vx} * 1px) solid
            ${system_colors.H.FieldText};
          outline-offset: 2px;
        }
        :host([aria-checked="true"]:${style_focus.b}:not([disabled])) .control {
          outline: calc(${design_tokens.vx} * 1px) solid
            ${system_colors.H.FieldText};
          outline-offset: 2px;
        }
        :host([aria-checked='true']) .control {
          background: ${system_colors.H.Highlight};
          border-color: ${system_colors.H.Highlight};
        }
        :host([aria-checked='true']:not([disabled])) .control:hover,
        .control:active {
          border-color: ${system_colors.H.Highlight};
          background: ${system_colors.H.HighlightText};
        }
        :host([aria-checked='true']) .checked-indicator {
          fill: ${system_colors.H.HighlightText};
        }
        :host([aria-checked='true']:not([disabled]))
          .control:hover
          .checked-indicator {
          fill: ${system_colors.H.Highlight};
        }
        :host([aria-checked='true']) .indeterminate-indicator {
          background: ${system_colors.H.HighlightText};
        }
        :host([aria-checked='true']) .control:hover .indeterminate-indicator {
          background: ${system_colors.H.Highlight};
        }
        :host([disabled]) {
          opacity: 1;
        }
        :host([disabled]) .control {
          forced-color-adjust: none;
          border-color: ${system_colors.H.GrayText};
          background: ${system_colors.H.Field};
        }
        :host([disabled]) .indeterminate-indicator,
        :host([aria-checked='true'][disabled])
          .control:hover
          .indeterminate-indicator {
          forced-color-adjust: none;
          background: ${system_colors.H.GrayText};
        }
        :host([disabled]) .checked-indicator,
        :host([aria-checked='true'][disabled])
          .control:hover
          .checked-indicator {
          forced-color-adjust: none;
          fill: ${system_colors.H.GrayText};
        }
      `)),jpCheckbox=checkbox_checkbox.X.compose({baseName:"checkbox",template:checkbox_template.X,styles:checkboxStyles,checkedIndicator:'\n    <svg\n      part="checked-indicator"\n      class="checked-indicator"\n      viewBox="0 0 20 20"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        fill-rule="evenodd"\n        clip-rule="evenodd"\n        d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"\n      />\n    </svg>\n    ',indeterminateIndicator:'\n        <div part="indeterminate-indicator" class="indeterminate-indicator"></div>\n    '});var combobox=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.js"),combobox_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/combobox/combobox.template.js");const selectStyles=(context,definition)=>css.i`
    ${(0,display.j)("inline-flex")} :host {
      --elevation: 14;
      background: ${esm_design_tokens._B};
      border-radius: calc(${esm_design_tokens.UW} * 1px);
      border: calc(${esm_design_tokens.H} * 1px) solid ${esm_design_tokens.P0};
      box-sizing: border-box;
      color: ${esm_design_tokens.hY};
      font-family: ${esm_design_tokens.SV};
      height: calc(${heightNumber} * 1px);
      position: relative;
      user-select: none;
      min-width: 250px;
      outline: none;
      vertical-align: top;
    }

    .listbox {
      ${elevation}
      background: ${esm_design_tokens.s5};
      border: calc(${esm_design_tokens.H} * 1px) solid ${esm_design_tokens.ak};
      border-radius: calc(${esm_design_tokens.UW} * 1px);
      box-sizing: border-box;
      display: inline-flex;
      flex-direction: column;
      left: 0;
      max-height: calc(var(--max-height) - (${heightNumber} * 1px));
      padding: calc(${esm_design_tokens._5} * 1px) 0;
      overflow-y: auto;
      position: absolute;
      width: 100%;
      z-index: 1;
    }

    .listbox[hidden] {
      display: none;
    }

    .control {
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      font-size: ${esm_design_tokens.cS};
      font-family: inherit;
      line-height: ${esm_design_tokens.RU};
      min-height: 100%;
      padding: 0 calc(${esm_design_tokens._5} * 2.25px);
      width: 100%;
    }

    :host([minimal]) {
      --density: -4;
      min-width: unset;
    }

    :host(:not([disabled]):hover) {
      background: ${esm_design_tokens.Tm};
      border-color: ${esm_design_tokens.Dg};
    }

    :host(:${style_focus.b}) {
      border-color: ${esm_design_tokens.D8};
      box-shadow: 0 0 0 calc((${esm_design_tokens.vx} - ${esm_design_tokens.H}) * 1px)
        ${esm_design_tokens.D8};
    }

    :host([disabled]) {
      cursor: ${disabled.H};
      opacity: ${esm_design_tokens.VF};
    }

    :host([disabled]) .control {
      cursor: ${disabled.H};
      user-select: none;
    }

    :host([disabled]:hover) {
      background: ${esm_design_tokens.jq};
      color: ${esm_design_tokens.hY};
      fill: currentcolor;
    }

    :host(:not([disabled])) .control:active {
      background: ${esm_design_tokens.Iu};
      border-color: ${esm_design_tokens.UE};
      border-radius: calc(${esm_design_tokens.UW} * 1px);
    }

    :host([open][position='above']) .listbox {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    :host([open][position='below']) .listbox {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }

    :host([open][position='above']) .listbox {
      border-bottom: 0;
      bottom: calc(${heightNumber} * 1px);
    }

    :host([open][position='below']) .listbox {
      border-top: 0;
      top: calc(${heightNumber} * 1px);
    }

    .selected-value {
      flex: 1 1 auto;
      font-family: inherit;
      text-align: start;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .indicator {
      flex: 0 0 auto;
      margin-inline-start: 1em;
    }

    slot[name='listbox'] {
      display: none;
      width: 100%;
    }

    :host([open]) slot[name='listbox'] {
      display: flex;
      position: absolute;
      ${elevation}
    }

    .end {
      margin-inline-start: auto;
    }

    .start,
    .end,
    .indicator,
    .select-indicator,
    ::slotted(svg) {
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      fill: currentcolor;
      height: 1em;
      min-height: calc(${esm_design_tokens._5} * 4px);
      min-width: calc(${esm_design_tokens._5} * 4px);
      width: 1em;
    }

    ::slotted([role='option']),
    ::slotted(option) {
      flex: 0 0 auto;
    }
  `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        :host(:not([disabled]):hover),
        :host(:not([disabled]):active) {
          border-color: ${system_colors.H.Highlight};
        }

        :host(:not([disabled]):${style_focus.b}) {
          background-color: ${system_colors.H.ButtonFace};
          box-shadow: 0 0 0 calc(${esm_design_tokens.vx} * 1px)
            ${system_colors.H.Highlight};
          color: ${system_colors.H.ButtonText};
          fill: currentcolor;
          forced-color-adjust: none;
        }

        :host(:not([disabled]):${style_focus.b}) .listbox {
          background: ${system_colors.H.ButtonFace};
        }

        :host([disabled]) {
          border-color: ${system_colors.H.GrayText};
          background-color: ${system_colors.H.ButtonFace};
          color: ${system_colors.H.GrayText};
          fill: currentcolor;
          opacity: 1;
          forced-color-adjust: none;
        }

        :host([disabled]:hover) {
          background: ${system_colors.H.ButtonFace};
        }

        :host([disabled]) .control {
          color: ${system_colors.H.GrayText};
          border-color: ${system_colors.H.GrayText};
        }

        :host([disabled]) .control .select-indicator {
          fill: ${system_colors.H.GrayText};
        }

        :host(:${style_focus.b}) ::slotted([aria-selected="true"][role="option"]),
            :host(:${style_focus.b}) ::slotted(option[aria-selected="true"]),
            :host(:${style_focus.b}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
          background: ${system_colors.H.Highlight};
          border-color: ${system_colors.H.ButtonText};
          box-shadow: 0 0 0 calc((${esm_design_tokens.vx} - ${esm_design_tokens.H}) * 1px)
            ${system_colors.H.HighlightText};
          color: ${system_colors.H.HighlightText};
          fill: currentcolor;
        }

        .start,
        .end,
        .indicator,
        .select-indicator,
        ::slotted(svg) {
          color: ${system_colors.H.ButtonText};
          fill: currentcolor;
        }
      `)),comboboxStyles=(context,definition)=>css.i`
  ${selectStyles(context,definition)}

  :host(:empty) .listbox {
    display: none;
  }

  :host([disabled]) *,
  :host([disabled]) {
    cursor: ${disabled.H};
    user-select: none;
  }

  :host(:focus-within:not([disabled])) {
    border-color: ${design_tokens.D8};
    box-shadow: 0 0 0 calc((${design_tokens.vx} - ${design_tokens.H}) * 1px)
      ${design_tokens.D8};
  }

  .selected-value {
    -webkit-appearance: none;
    background: transparent;
    border: none;
    color: inherit;
    font-size: ${design_tokens.cS};
    line-height: ${design_tokens.RU};
    height: calc(100% - (${design_tokens.H} * 1px));
    margin: auto 0;
    width: 100%;
  }

  .selected-value:hover,
  .selected-value:${style_focus.b},
  .selected-value:disabled,
  .selected-value:active {
    outline: none;
  }
`;class Combobox extends combobox.h{}(0,tslib_es6.gn)([(0,attributes.Lj)({attribute:"minimal",mode:"boolean"})],Combobox.prototype,"minimal",void 0);const jpCombobox=Combobox.compose({baseName:"combobox",baseClass:combobox.h,template:combobox_template.M,styles:comboboxStyles,shadowOptions:{delegatesFocus:!0},indicator:'\n    <svg\n      class="select-indicator"\n      part="select-indicator"\n      viewBox="0 0 12 7"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"\n      />\n    </svg>\n    '});var data_grid_cell=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/data-grid/data-grid-cell.js"),data_grid_cell_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/data-grid/data-grid-cell.template.js"),data_grid_row=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/data-grid/data-grid-row.js"),data_grid_row_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/data-grid/data-grid-row.template.js"),data_grid=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/data-grid/data-grid.js"),data_grid_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/data-grid/data-grid.template.js"),data_grid_row_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/data-grid/data-grid-row.styles.js"),data_grid_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/data-grid/data-grid.styles.js");const dataGridCellStyles=(context,definition)=>css.i`
    :host {
      padding: calc(${design_tokens._5} * 1px) calc(${design_tokens._5} * 3px);
      color: ${design_tokens.hY};
      box-sizing: border-box;
      font-family: ${design_tokens.SV};
      font-size: ${design_tokens.cS};
      line-height: ${design_tokens.RU};
      border: transparent calc(${design_tokens.H} * 1px) solid;
      font-weight: 400;
      overflow: hidden;
      white-space: nowrap;
      border-radius: calc(${design_tokens.UW} * 1px);
    }

    :host(.column-header) {
      font-weight: 600;
    }

    :host(:${style_focus.b}) {
      outline: calc(${design_tokens.vx} * 1px) solid ${design_tokens.D8};
    }
  `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        :host {
          forced-color-adjust: none;
          border-color: transparent;
          background: ${system_colors.H.Field};
          color: ${system_colors.H.FieldText};
        }

        :host(:${style_focus.b}) {
          border-color: ${system_colors.H.FieldText};
          box-shadow: 0 0 0 2px inset ${system_colors.H.Field};
        }
      `)),jpDataGridCell=data_grid_cell.a.compose({baseName:"data-grid-cell",template:data_grid_cell_template.c,styles:dataGridCellStyles}),jpDataGridRow=data_grid_row.m.compose({baseName:"data-grid-row",template:data_grid_row_template.f,styles:data_grid_row_styles.r}),jpDataGrid=data_grid._$.compose({baseName:"data-grid",template:data_grid_template.c,styles:data_grid_styles.l});var dom=__webpack_require__("../../node_modules/@microsoft/fast-element/dist/esm/dom.js"),observable=__webpack_require__("../../node_modules/@microsoft/fast-element/dist/esm/observation/observable.js"),key_codes=__webpack_require__("../../node_modules/@microsoft/fast-web-utilities/dist/key-codes.js"),apply_mixins=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/utilities/apply-mixins.js"),start_end=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/patterns/start-end.js"),text_field=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.js"),foundation_element=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/foundation-element/foundation-element.js"),form_associated=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/form-associated/form-associated.js");class _DateField extends foundation_element.I{}class FormAssociatedDateField extends((0,form_associated.Um)(_DateField)){constructor(){super(...arguments),this.proxy=document.createElement("input")}}const nullableDateConverter={toView(value){if(null==value)return null;const date=new Date(value);return"Invalid Date"===date.toString()?null:`${date.getFullYear().toString().padStart(4,"0")}-${(date.getMonth()+1).toString().padStart(2,"0")}-${date.getDate().toString().padStart(2,"0")}`},fromView(value){if(null==value)return null;const date=new Date(value);return"Invalid Date"===date.toString()?null:date}};class DateField extends FormAssociatedDateField{constructor(){super(...arguments),this.step=1,this.isUserInput=!1}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxChanged(previous,next){var _a;this.max=next<(null!==(_a=this.min)&&void 0!==_a?_a:next)?this.min:next,this.value=this.getValidValue(this.value)}minChanged(previous,next){var _a;this.min=next>(null!==(_a=this.max)&&void 0!==_a?_a:next)?this.max:next,this.value=this.getValidValue(this.value)}get valueAsNumber(){return new Date(super.value).valueOf()}set valueAsNumber(next){this.value=new Date(next).toString()}get valueAsDate(){return new Date(super.value)}set valueAsDate(next){this.value=next.toString()}valueChanged(previous,next){this.value=this.getValidValue(next),next===this.value&&(this.control&&!this.isUserInput&&(this.control.value=this.value),super.valueChanged(previous,this.value),void 0===previous||this.isUserInput||this.$emit("change"),this.isUserInput=!1)}getValidValue(value){var _a,_b;let validValue=new Date(value);return"Invalid Date"===validValue.toString()?validValue="":(validValue=validValue>(null!==(_a=this.max)&&void 0!==_a?_a:validValue)?this.max:validValue,validValue=validValue<(null!==(_b=this.min)&&void 0!==_b?_b:validValue)?this.min:validValue,validValue=`${validValue.getFullYear().toString().padStart(4,"0")}-${(validValue.getMonth()+1).toString().padStart(2,"0")}-${validValue.getDate().toString().padStart(2,"0")}`),validValue}stepUp(){const step=864e5*this.step,value=new Date(this.value);this.value=new Date("Invalid Date"!==value.toString()?value.valueOf()+step:0).toString()}stepDown(){const step=864e5*this.step,value=new Date(this.value);this.value=new Date("Invalid Date"!==value.toString()?Math.max(value.valueOf()-step,0):0).toString()}connectedCallback(){super.connectedCallback(),this.validate(),this.control.value=this.value,this.autofocus&&dom.SO.queueUpdate((()=>{this.focus()})),this.appearance||(this.appearance="outline")}handleTextInput(){this.isUserInput=!0,this.value=this.control.value}handleChange(){this.$emit("change")}handleKeyDown(e){switch(e.key){case key_codes.SB:return this.stepUp(),!1;case key_codes.iF:return this.stepDown(),!1}return!0}handleBlur(){this.control.value=this.value}}(0,tslib_es6.gn)([attributes.Lj],DateField.prototype,"appearance",void 0),(0,tslib_es6.gn)([(0,attributes.Lj)({attribute:"readonly",mode:"boolean"})],DateField.prototype,"readOnly",void 0),(0,tslib_es6.gn)([(0,attributes.Lj)({mode:"boolean"})],DateField.prototype,"autofocus",void 0),(0,tslib_es6.gn)([attributes.Lj],DateField.prototype,"list",void 0),(0,tslib_es6.gn)([(0,attributes.Lj)({converter:attributes.Id})],DateField.prototype,"step",void 0),(0,tslib_es6.gn)([(0,attributes.Lj)({converter:nullableDateConverter})],DateField.prototype,"max",void 0),(0,tslib_es6.gn)([(0,attributes.Lj)({converter:nullableDateConverter})],DateField.prototype,"min",void 0),(0,tslib_es6.gn)([observable.LO],DateField.prototype,"defaultSlottedNodes",void 0),(0,apply_mixins.e)(DateField,start_end.hW,text_field.yd);const dateFieldStyles=(context,definition)=>css.i`
    ${BaseFieldStyles}
  `;var template=__webpack_require__("../../node_modules/@microsoft/fast-element/dist/esm/templating/template.js"),slotted=__webpack_require__("../../node_modules/@microsoft/fast-element/dist/esm/templating/slotted.js"),ref=__webpack_require__("../../node_modules/@microsoft/fast-element/dist/esm/templating/ref.js"),whitespace_filter=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/utilities/whitespace-filter.js");const dateFieldTemplate=(context,definition)=>template.d`
  <template class="${x=>x.readOnly?"readonly":""}">
    <label
      part="label"
      for="control"
      class="${x=>x.defaultSlottedNodes&&x.defaultSlottedNodes.length?"label":"label label__hidden"}"
    >
      <slot
        ${(0,slotted.Q)({property:"defaultSlottedNodes",filter:whitespace_filter.E})}
      ></slot>
    </label>
    <div class="root" part="root">
      ${(0,start_end.m9)(context,definition)}
      <input
        class="control"
        part="control"
        id="control"
        @input="${x=>x.handleTextInput()}"
        @change="${x=>x.handleChange()}"
        ?autofocus="${x=>x.autofocus}"
        ?disabled="${x=>x.disabled}"
        list="${x=>x.list}"
        ?readonly="${x=>x.readOnly}"
        ?required="${x=>x.required}"
        :value="${x=>x.value}"
        type="date"
        aria-atomic="${x=>x.ariaAtomic}"
        aria-busy="${x=>x.ariaBusy}"
        aria-controls="${x=>x.ariaControls}"
        aria-current="${x=>x.ariaCurrent}"
        aria-describedby="${x=>x.ariaDescribedby}"
        aria-details="${x=>x.ariaDetails}"
        aria-disabled="${x=>x.ariaDisabled}"
        aria-errormessage="${x=>x.ariaErrormessage}"
        aria-flowto="${x=>x.ariaFlowto}"
        aria-haspopup="${x=>x.ariaHaspopup}"
        aria-hidden="${x=>x.ariaHidden}"
        aria-invalid="${x=>x.ariaInvalid}"
        aria-keyshortcuts="${x=>x.ariaKeyshortcuts}"
        aria-label="${x=>x.ariaLabel}"
        aria-labelledby="${x=>x.ariaLabelledby}"
        aria-live="${x=>x.ariaLive}"
        aria-owns="${x=>x.ariaOwns}"
        aria-relevant="${x=>x.ariaRelevant}"
        aria-roledescription="${x=>x.ariaRoledescription}"
        ${(0,ref.i)("control")}
      />
      ${(0,start_end.LC)(context,definition)}
    </div>
  </template>
`,jpDateField=DateField.compose({baseName:"date-field",styles:dateFieldStyles,template:dateFieldTemplate,shadowOptions:{delegatesFocus:!0}});var divider=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/divider/divider.js"),divider_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/divider/divider.template.js"),divider_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/divider/divider.styles.js");const jpDivider=divider.i.compose({baseName:"divider",template:divider_template.q,styles:divider_styles.T});var menu=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/menu/menu.js"),menu_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/menu/menu.template.js"),menu_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/menu/menu.styles.js");const jpMenu=menu.v.compose({baseName:"menu",template:menu_template.K,styles:menu_styles.J});var menu_item=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/menu-item/menu-item.js"),menu_item_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/menu-item/menu-item.template.js");const menuItemStyles=(context,definition)=>css.i`
    ${(0,display.j)("grid")} :host {
      contain: layout;
      overflow: visible;
      font-family: ${design_tokens.SV};
      outline: none;
      box-sizing: border-box;
      height: calc(${heightNumber} * 1px);
      grid-template-columns: minmax(42px, auto) 1fr minmax(42px, auto);
      grid-template-rows: auto;
      justify-items: center;
      align-items: center;
      padding: 0;
      margin: 0 calc(${design_tokens._5} * 1px);
      white-space: nowrap;
      color: ${design_tokens.hY};
      fill: currentcolor;
      cursor: pointer;
      font-size: ${design_tokens.cS};
      line-height: ${design_tokens.RU};
      border-radius: calc(${design_tokens.UW} * 1px);
      border: calc(${design_tokens.vx} * 1px) solid transparent;
    }

    :host(:hover) {
      position: relative;
      z-index: 1;
    }

    :host(.indent-0) {
      grid-template-columns: auto 1fr minmax(42px, auto);
    }
    :host(.indent-0) .content {
      grid-column: 1;
      grid-row: 1;
      margin-inline-start: 10px;
    }
    :host(.indent-0) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }
    :host(.indent-2) {
      grid-template-columns:
        minmax(42px, auto) minmax(42px, auto) 1fr minmax(42px, auto)
        minmax(42px, auto);
    }
    :host(.indent-2) .content {
      grid-column: 3;
      grid-row: 1;
      margin-inline-start: 10px;
    }
    :host(.indent-2) .expand-collapse-glyph-container {
      grid-column: 5;
      grid-row: 1;
    }
    :host(.indent-2) .start {
      grid-column: 2;
    }
    :host(.indent-2) .end {
      grid-column: 4;
    }

    :host(:${style_focus.b}) {
      border-color: ${design_tokens.yG};
      background: ${design_tokens.hZ};
      color: ${design_tokens.hY};
    }

    :host(:hover) {
      background: ${design_tokens.hZ};
      color: ${design_tokens.hY};
    }

    :host([aria-checked='true']),
    :host(:active),
    :host(.expanded) {
      background: ${design_tokens.jx};
      color: ${design_tokens.hY};
    }

    :host([disabled]) {
      cursor: ${disabled.H};
      opacity: ${design_tokens.VF};
    }

    :host([disabled]:hover) {
      color: ${design_tokens.hY};
      fill: currentcolor;
      background: ${design_tokens.jq};
    }

    :host([disabled]:hover) .start,
    :host([disabled]:hover) .end,
    :host([disabled]:hover)::slotted(svg) {
      fill: ${design_tokens.hY};
    }

    .expand-collapse-glyph {
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      width: 16px;
      height: 16px;
      fill: currentcolor;
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end {
      display: flex;
      justify-content: center;
    }

    ::slotted(svg) {
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      width: 16px;
      height: 16px;
    }

    :host(:hover) .start,
    :host(:hover) .end,
    :host(:hover)::slotted(svg),
    :host(:active) .start,
    :host(:active) .end,
    :host(:active)::slotted(svg) {
      fill: ${design_tokens.hY};
    }

    :host(.indent-0[aria-haspopup='menu']) {
      display: grid;
      grid-template-columns: minmax(42px, auto) auto 1fr minmax(42px, auto) minmax(
          42px,
          auto
        );
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-1[aria-haspopup='menu']),
    :host(.indent-1[role='menuitemcheckbox']),
    :host(.indent-1[role='menuitemradio']) {
      display: grid;
      grid-template-columns: minmax(42px, auto) auto 1fr minmax(42px, auto) minmax(
          42px,
          auto
        );
      align-items: center;
      min-height: 32px;
    }

    :host(.indent-2:not([aria-haspopup='menu'])) .end {
      grid-column: 5;
    }

    :host .input-container,
    :host .expand-collapse-glyph-container {
      display: none;
    }

    :host([aria-haspopup='menu']) .expand-collapse-glyph-container,
    :host([role='menuitemcheckbox']) .input-container,
    :host([role='menuitemradio']) .input-container {
      display: grid;
      margin-inline-end: 10px;
    }

    :host([aria-haspopup='menu']) .content,
    :host([role='menuitemcheckbox']) .content,
    :host([role='menuitemradio']) .content {
      grid-column-start: 3;
    }

    :host([aria-haspopup='menu'].indent-0) .content {
      grid-column-start: 1;
    }

    :host([aria-haspopup='menu']) .end,
    :host([role='menuitemcheckbox']) .end,
    :host([role='menuitemradio']) .end {
      grid-column-start: 4;
    }

    :host .expand-collapse,
    :host .checkbox,
    :host .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 20px;
      height: 20px;
      box-sizing: border-box;
      outline: none;
      margin-inline-start: 10px;
    }

    :host .checkbox,
    :host .radio {
      border: calc(${design_tokens.H} * 1px) solid ${design_tokens.hY};
    }

    :host([aria-checked='true']) .checkbox,
    :host([aria-checked='true']) .radio {
      background: ${design_tokens.Av};
      border-color: ${design_tokens.Av};
    }

    :host .checkbox {
      border-radius: calc(${design_tokens.UW} * 1px);
    }

    :host .radio {
      border-radius: 999px;
    }

    :host .checkbox-indicator,
    :host .radio-indicator,
    :host .expand-collapse-indicator,
    ::slotted([slot='checkbox-indicator']),
    ::slotted([slot='radio-indicator']),
    ::slotted([slot='expand-collapse-indicator']) {
      display: none;
    }

    ::slotted([slot='end']:not(svg)) {
      margin-inline-end: 10px;
      color: ${design_tokens.Q5};
    }

    :host([aria-checked='true']) .checkbox-indicator,
    :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']) {
      width: 100%;
      height: 100%;
      display: block;
      fill: ${design_tokens.w4};
      pointer-events: none;
    }

    :host([aria-checked='true']) .radio-indicator {
      position: absolute;
      top: 4px;
      left: 4px;
      right: 4px;
      bottom: 4px;
      border-radius: 999px;
      display: block;
      background: ${design_tokens.w4};
      pointer-events: none;
    }

    :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
      display: block;
      pointer-events: none;
    }
  `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        :host {
          border-color: transparent;
          color: ${system_colors.H.ButtonText};
          forced-color-adjust: none;
        }

        :host(:hover) {
          background: ${system_colors.H.Highlight};
          color: ${system_colors.H.HighlightText};
        }

        :host(:hover) .start,
        :host(:hover) .end,
        :host(:hover)::slotted(svg),
        :host(:active) .start,
        :host(:active) .end,
        :host(:active)::slotted(svg) {
          fill: ${system_colors.H.HighlightText};
        }

        :host(.expanded) {
          background: ${system_colors.H.Highlight};
          border-color: ${system_colors.H.Highlight};
          color: ${system_colors.H.HighlightText};
        }

        :host(:${style_focus.b}) {
          background: ${system_colors.H.Highlight};
          border-color: ${system_colors.H.ButtonText};
          box-shadow: 0 0 0 calc(${design_tokens.vx} * 1px) inset
            ${system_colors.H.HighlightText};
          color: ${system_colors.H.HighlightText};
          fill: currentcolor;
        }

        :host([disabled]),
        :host([disabled]:hover),
        :host([disabled]:hover) .start,
        :host([disabled]:hover) .end,
        :host([disabled]:hover)::slotted(svg) {
          background: ${system_colors.H.Canvas};
          color: ${system_colors.H.GrayText};
          fill: currentcolor;
          opacity: 1;
        }

        :host .expanded-toggle,
        :host .checkbox,
        :host .radio {
          border-color: ${system_colors.H.ButtonText};
          background: ${system_colors.H.HighlightText};
        }

        :host([checked='true']) .checkbox,
        :host([checked='true']) .radio {
          background: ${system_colors.H.HighlightText};
          border-color: ${system_colors.H.HighlightText};
        }

        :host(:hover) .expanded-toggle,
            :host(:hover) .checkbox,
            :host(:hover) .radio,
            :host(:${style_focus.b}) .expanded-toggle,
            :host(:${style_focus.b}) .checkbox,
            :host(:${style_focus.b}) .radio,
            :host([checked="true"]:hover) .checkbox,
            :host([checked="true"]:hover) .radio,
            :host([checked="true"]:${style_focus.b}) .checkbox,
            :host([checked="true"]:${style_focus.b}) .radio {
          border-color: ${system_colors.H.HighlightText};
        }

        :host([aria-checked='true']) {
          background: ${system_colors.H.Highlight};
          color: ${system_colors.H.HighlightText};
        }

        :host([aria-checked='true']) .checkbox-indicator,
        :host([aria-checked='true']) ::slotted([slot='checkbox-indicator']),
        :host([aria-checked='true']) ::slotted([slot='radio-indicator']) {
          fill: ${system_colors.H.Highlight};
        }

        :host([aria-checked='true']) .radio-indicator {
          background: ${system_colors.H.Highlight};
        }

        ::slotted([slot='end']:not(svg)) {
          color: ${system_colors.H.ButtonText};
        }

        :host(:hover) ::slotted([slot="end"]:not(svg)),
            :host(:${style_focus.b}) ::slotted([slot="end"]:not(svg)) {
          color: ${system_colors.H.HighlightText};
        }
      `),new design_tokens.O8(css.i`
        .expand-collapse-glyph {
          transform: rotate(0deg);
        }
      `,css.i`
        .expand-collapse-glyph {
          transform: rotate(180deg);
        }
      `)),jpMenuItem=menu_item.sN.compose({baseName:"menu-item",template:menu_item_template.Z,styles:menuItemStyles,checkboxIndicator:'\n      <svg\n        part="checkbox-indicator"\n        class="checkbox-indicator"\n        viewBox="0 0 20 20"\n        xmlns="http://www.w3.org/2000/svg"\n      >\n        <path\n          fill-rule="evenodd"\n          clip-rule="evenodd"\n          d="M8.143 12.6697L15.235 4.5L16.8 5.90363L8.23812 15.7667L3.80005 11.2556L5.27591 9.7555L8.143 12.6697Z"\n        />\n      </svg>\n    ',expandCollapseGlyph:'\n      <svg\n        viewBox="0 0 16 16"\n        xmlns="http://www.w3.org/2000/svg"\n        class="expand-collapse-glyph"\n        part="expand-collapse-glyph"\n      >\n        <path\n          d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"\n        />\n      </svg>\n    ',radioIndicator:'\n      <span part="radio-indicator" class="radio-indicator"></span>\n    '});var number_field=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/number-field/number-field.js"),number_field_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/number-field/number-field.template.js"),esm_number_field=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/number-field/index.js");const numberFieldStyles=(context,definition)=>css.i`
    ${BaseFieldStyles}

    .controls {
      opacity: 0;
    }

    .step-up-glyph,
    .step-down-glyph {
      display: block;
      padding: 4px 10px;
      cursor: pointer;
    }

    .step-up-glyph:before,
    .step-down-glyph:before {
      content: '';
      display: block;
      border: solid transparent 6px;
    }

    .step-up-glyph:before {
      border-bottom-color: ${design_tokens.hY};
    }

    .step-down-glyph:before {
      border-top-color: ${design_tokens.hY};
    }

    :host(:hover:not([disabled])) .controls,
    :host(:focus-within:not([disabled])) .controls {
      opacity: 1;
    }
  `,jpNumberField=esm_number_field.Ki.compose({baseName:"number-field",baseClass:number_field.K,styles:numberFieldStyles,template:number_field_template.M,shadowOptions:{delegatesFocus:!0},stepDownGlyph:'\n        <span class="step-down-glyph" part="step-down-glyph"></span>\n    ',stepUpGlyph:'\n        <span class="step-up-glyph" part="step-up-glyph"></span>\n    '});var listbox_option=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.js"),listbox_option_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/listbox-option/listbox-option.template.js");const optionStyles=(context,definition)=>css.i`
    ${(0,display.j)("inline-flex")} :host {
      align-items: center;
      font-family: ${esm_design_tokens.SV};
      border-radius: calc(${esm_design_tokens.UW} * 1px);
      border: calc(${esm_design_tokens.vx} * 1px) solid transparent;
      box-sizing: border-box;
      color: ${esm_design_tokens.hY};
      cursor: pointer;
      flex: 0 0 auto;
      fill: currentcolor;
      font-size: ${esm_design_tokens.cS};
      height: calc(${heightNumber} * 1px);
      line-height: ${esm_design_tokens.RU};
      margin: 0 calc(${esm_design_tokens._5} * 1px);
      outline: none;
      overflow: hidden;
      padding: 0 calc(${esm_design_tokens._5} * 2.25px);
      user-select: none;
      white-space: nowrap;
    }

    /* TODO should we use outline instead of background for focus to support multi-selection */
    :host(:${style_focus.b}) {
      background: ${esm_design_tokens.D8};
      color: ${esm_design_tokens.$u};
    }

    :host([aria-selected='true']) {
      background: ${esm_design_tokens.Av};
      color: ${esm_design_tokens.w4};
    }

    :host(:hover) {
      background: ${esm_design_tokens.OC};
      color: ${esm_design_tokens.lJ};
    }

    :host(:active) {
      background: ${esm_design_tokens.UE};
      color: ${esm_design_tokens.Pp};
    }

    :host(:not([aria-selected='true']):hover),
    :host(:not([aria-selected='true']):active) {
      background: ${esm_design_tokens.Xi};
      color: ${esm_design_tokens.hY};
    }

    :host([disabled]) {
      cursor: ${disabled.H};
      opacity: ${esm_design_tokens.VF};
    }

    :host([disabled]:hover) {
      background-color: inherit;
    }

    .content {
      grid-column-start: 2;
      justify-self: start;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .start,
    .end,
    ::slotted(svg) {
      display: flex;
    }

    ::slotted(svg) {
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      height: calc(${esm_design_tokens._5} * 4px);
      width: calc(${esm_design_tokens._5} * 4px);
    }

    ::slotted([slot='end']) {
      margin-inline-start: 1ch;
    }

    ::slotted([slot='start']) {
      margin-inline-end: 1ch;
    }
  `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        :host {
          border-color: transparent;
          forced-color-adjust: none;
          color: ${system_colors.H.ButtonText};
          fill: currentcolor;
        }

        :host(:not([aria-selected='true']):hover),
        :host([aria-selected='true']) {
          background: ${system_colors.H.Highlight};
          color: ${system_colors.H.HighlightText};
        }

        :host([disabled]),
        :host([disabled]:not([aria-selected='true']):hover) {
          background: ${system_colors.H.Canvas};
          color: ${system_colors.H.GrayText};
          fill: currentcolor;
          opacity: 1;
        }
      `)),jpOption=listbox_option.wt.compose({baseName:"option",template:listbox_option_template.T,styles:optionStyles});var base_progress=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/progress/base-progress.js"),progress_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/progress/progress.template.js"),progress_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/progress/progress.styles.js");const jpProgress=base_progress.B.compose({baseName:"progress",template:progress_template.n,styles:progress_styles.Q,indeterminateIndicator1:'\n        <span class="indeterminate-indicator-1" part="indeterminate-indicator-1"></span>\n    ',indeterminateIndicator2:'\n        <span class="indeterminate-indicator-2" part="indeterminate-indicator-2"></span>\n    '});var progress_ring_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/progress-ring/progress-ring.template.js"),progress_ring_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/progress-ring/progress-ring.styles.js");const jpProgressRing=base_progress.B.compose({baseName:"progress-ring",template:progress_ring_template.Z,styles:progress_ring_styles.j,indeterminateIndicator:'\n        <svg class="progress" part="progress" viewBox="0 0 16 16">\n            <circle\n                class="background"\n                part="background"\n                cx="8px"\n                cy="8px"\n                r="7px"\n            ></circle>\n            <circle\n                class="indeterminate-indicator-1"\n                part="indeterminate-indicator-1"\n                cx="8px"\n                cy="8px"\n                r="7px"\n            ></circle>\n        </svg>\n    '});var radio_radio=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/radio/radio.js"),radio_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/radio/radio.template.js");const radioStyles=(context,definition)=>css.i`
    ${(0,display.j)("inline-flex")} :host {
      --input-size: calc((${heightNumber} / 2) + ${design_tokens._5});
      align-items: center;
      outline: none;
      margin: calc(${design_tokens._5} * 1px) 0;
      /* Chromium likes to select label text or the default slot when
         the radio is clicked. Maybe there is a better solution here? */
      user-select: none;
      position: relative;
      flex-direction: row;
      transition: all 0.2s ease-in-out;
    }

    .control {
      position: relative;
      width: calc((${heightNumber} / 2 + ${design_tokens._5}) * 1px);
      height: calc((${heightNumber} / 2 + ${design_tokens._5}) * 1px);
      box-sizing: border-box;
      border-radius: 999px;
      border: calc(${design_tokens.H} * 1px) solid ${design_tokens.ak};
      background: ${design_tokens._B};
      outline: none;
      cursor: pointer;
    }

    .label {
      font-family: ${design_tokens.SV};
      color: ${design_tokens.hY};
      /* Need to discuss with Brian how HorizontalSpacingNumber can work.
            https://github.com/microsoft/fast/issues/2766 */
      padding-inline-start: calc(${design_tokens._5} * 2px + 2px);
      margin-inline-end: calc(${design_tokens._5} * 2px + 2px);
      cursor: pointer;
      font-size: ${design_tokens.cS};
      line-height: ${design_tokens.RU};
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    .control,
    .checked-indicator {
      flex-shrink: 0;
    }

    .checked-indicator {
      position: absolute;
      top: 5px;
      left: 5px;
      right: 5px;
      bottom: 5px;
      border-radius: 999px;
      display: inline-block;
      background: ${design_tokens.w4};
      fill: ${design_tokens.w4};
      opacity: 0;
      pointer-events: none;
    }

    :host(:not([disabled])) .control:hover {
      background: ${design_tokens.Tm};
      border-color: ${design_tokens.QP};
    }

    :host(:not([disabled])) .control:active {
      background: ${design_tokens.Iu};
      border-color: ${design_tokens.c1};
    }

    :host(:${style_focus.b}) .control {
      outline: solid calc(${design_tokens.vx} * 1px) ${design_tokens.D8};
    }

    :host([aria-checked='true']) .control {
      background: ${design_tokens.Av};
      border: calc(${design_tokens.H} * 1px) solid ${design_tokens.Av};
    }

    :host([aria-checked='true']:not([disabled])) .control:hover {
      background: ${design_tokens.OC};
      border: calc(${design_tokens.H} * 1px) solid ${design_tokens.OC};
    }

    :host([aria-checked='true']:not([disabled]))
      .control:hover
      .checked-indicator {
      background: ${design_tokens.lJ};
      fill: ${design_tokens.lJ};
    }

    :host([aria-checked='true']:not([disabled])) .control:active {
      background: ${design_tokens.UE};
      border: calc(${design_tokens.H} * 1px) solid ${design_tokens.UE};
    }

    :host([aria-checked='true']:not([disabled]))
      .control:active
      .checked-indicator {
      background: ${design_tokens.Pp};
      fill: ${design_tokens.Pp};
    }

    :host([aria-checked="true"]:${style_focus.b}:not([disabled])) .control {
      outline-offset: 2px;
      outline: solid calc(${design_tokens.vx} * 1px) ${design_tokens.D8};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
      cursor: ${disabled.H};
    }

    :host([aria-checked='true']) .checked-indicator {
      opacity: 1;
    }

    :host([disabled]) {
      opacity: ${design_tokens.VF};
    }
  `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        .control,
        :host([aria-checked='true']:not([disabled])) .control {
          forced-color-adjust: none;
          border-color: ${system_colors.H.FieldText};
          background: ${system_colors.H.Field};
        }
        :host(:not([disabled])) .control:hover {
          border-color: ${system_colors.H.Highlight};
          background: ${system_colors.H.Field};
        }
        :host([aria-checked='true']:not([disabled])) .control:hover,
        :host([aria-checked='true']:not([disabled])) .control:active {
          border-color: ${system_colors.H.Highlight};
          background: ${system_colors.H.Highlight};
        }
        :host([aria-checked='true']) .checked-indicator {
          background: ${system_colors.H.Highlight};
          fill: ${system_colors.H.Highlight};
        }
        :host([aria-checked='true']:not([disabled]))
          .control:hover
          .checked-indicator,
        :host([aria-checked='true']:not([disabled]))
          .control:active
          .checked-indicator {
          background: ${system_colors.H.HighlightText};
          fill: ${system_colors.H.HighlightText};
        }
        :host(:${style_focus.b}) .control {
          border-color: ${system_colors.H.Highlight};
          outline-offset: 2px;
          outline: solid calc(${design_tokens.vx} * 1px)
            ${system_colors.H.FieldText};
        }
        :host([aria-checked="true"]:${style_focus.b}:not([disabled])) .control {
          border-color: ${system_colors.H.Highlight};
          outline: solid calc(${design_tokens.vx} * 1px)
            ${system_colors.H.FieldText};
        }
        :host([disabled]) {
          forced-color-adjust: none;
          opacity: 1;
        }
        :host([disabled]) .label {
          color: ${system_colors.H.GrayText};
        }
        :host([disabled]) .control,
        :host([aria-checked='true'][disabled]) .control:hover,
        .control:active {
          background: ${system_colors.H.Field};
          border-color: ${system_colors.H.GrayText};
        }
        :host([disabled]) .checked-indicator,
        :host([aria-checked='true'][disabled])
          .control:hover
          .checked-indicator {
          fill: ${system_colors.H.GrayText};
          background: ${system_colors.H.GrayText};
        }
      `)),jpRadio=radio_radio.Y.compose({baseName:"radio",template:radio_template.C,styles:radioStyles,checkedIndicator:'\n    <div part="checked-indicator" class="checked-indicator"></div>\n  '});var radio_group=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/radio-group/radio-group.js"),radio_group_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/radio-group/radio-group.template.js"),radio_group_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/radio-group/radio-group.styles.js");const jpRadioGroup=radio_group.E.compose({baseName:"radio-group",template:radio_group_template.l,styles:radio_group_styles.p});var search=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/search/search.js"),search_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/search/search.template.js"),esm_search=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/search/index.js"),design_token=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/design-token/design-token.js");const clearButtonHover=design_token.DesignToken.create("clear-button-hover").withDefault((target=>{const buttonRecipe=design_tokens.DF.getValueFor(target),inputRecipe=design_tokens.At.getValueFor(target);return buttonRecipe.evaluate(target,inputRecipe.evaluate(target).hover).hover})),clearButtonActive=design_token.DesignToken.create("clear-button-active").withDefault((target=>{const buttonRecipe=design_tokens.DF.getValueFor(target),inputRecipe=design_tokens.At.getValueFor(target);return buttonRecipe.evaluate(target,inputRecipe.evaluate(target).hover).active})),searchStyles=(context,definition)=>css.i`
    ${BaseFieldStyles}

    .control {
      padding: 0;
      padding-inline-start: calc(${design_tokens._5} * 2px + 1px);
      padding-inline-end: calc(
        (${design_tokens._5} * 2px) + (${heightNumber} * 1px) + 1px
      );
    }

    .control::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }

    .control:hover,
    .control:${style_focus.b},
    .control:disabled,
    .control:active {
      outline: none;
    }

    .clear-button {
      height: calc(100% - 2px);
      opacity: 0;
      margin: 1px;
      background: transparent;
      color: ${design_tokens.hY};
      fill: currentcolor;
      border: none;
      border-radius: calc(${design_tokens.UW} * 1px);
      min-width: calc(${heightNumber} * 1px);
      font-size: ${design_tokens.cS};
      line-height: ${design_tokens.RU};
      outline: none;
      font-family: ${design_tokens.SV};
      padding: 0 calc((10 + (${design_tokens._5} * 2 * ${design_tokens.hV})) * 1px);
    }

    .clear-button:hover {
      background: ${design_tokens.Qp};
    }

    .clear-button:active {
      background: ${design_tokens.sG};
    }

    :host([appearance='filled']) .clear-button:hover {
      background: ${clearButtonHover};
    }

    :host([appearance='filled']) .clear-button:active {
      background: ${clearButtonActive};
    }

    .input-wrapper {
      display: flex;
      position: relative;
      width: 100%;
    }

    .start,
    .end {
      display: flex;
      margin: 1px;
    }

    ::slotted([slot='end']) {
      height: 100%;
    }

    .end {
      margin-inline-end: 1px;
    }

    ::slotted(svg) {
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      margin-inline-end: 11px;
      margin-inline-start: 11px;
      margin-top: auto;
      margin-bottom: auto;
    }

    .clear-button__hidden {
      opacity: 0;
    }

    :host(:hover:not([disabled], [readOnly])) .clear-button,
    :host(:active:not([disabled], [readOnly])) .clear-button,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button {
      opacity: 1;
    }

    :host(:hover:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:active:not([disabled], [readOnly])) .clear-button__hidden,
    :host(:focus-within:not([disabled], [readOnly])) .clear-button__hidden {
      opacity: 0;
    }
  `,jpSearch=esm_search.ol.compose({baseName:"search",baseClass:search.o,template:search_template.O,styles:searchStyles,shadowOptions:{delegatesFocus:!0}});var select_select=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/select/select.js"),select_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/select/select.template.js");class Select extends select_select.P{}(0,tslib_es6.gn)([(0,attributes.Lj)({attribute:"minimal",mode:"boolean"})],Select.prototype,"minimal",void 0);const jpSelect=Select.compose({baseName:"select",baseClass:select_select.P,template:select_template.U,styles:selectStyles,indicator:'\n        <svg\n            class="select-indicator"\n            part="select-indicator"\n            viewBox="0 0 12 7"\n            xmlns="http://www.w3.org/2000/svg"\n        >\n            <path\n                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"\n            />\n        </svg>\n    '});var slider=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.js"),slider_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/slider/slider.template.js");const jpSlider=slider.i.compose({baseName:"slider",template:slider_template.t,styles:(context,definition)=>css.i`
    :host([hidden]) {
      display: none;
    }

    ${(0,display.j)("inline-grid")} :host {
      --thumb-size: calc(${heightNumber} * 0.5 - ${design_tokens._5});
      --thumb-translate: calc(
        var(--thumb-size) * -0.5 + var(--track-width) / 2
      );
      --track-overhang: calc((${design_tokens._5} / 2) * -1);
      --track-width: ${design_tokens._5};
      --jp-slider-height: calc(var(--thumb-size) * 10);
      align-items: center;
      width: 100%;
      margin: calc(${design_tokens._5} * 1px) 0;
      user-select: none;
      box-sizing: border-box;
      border-radius: calc(${design_tokens.UW} * 1px);
      outline: none;
      cursor: pointer;
    }
    :host([orientation='horizontal']) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      grid-template-rows: calc(var(--thumb-size) * 1px) 1fr;
    }
    :host([orientation='vertical']) .positioning-region {
      position: relative;
      margin: 0 8px;
      display: grid;
      height: 100%;
      grid-template-columns: calc(var(--thumb-size) * 1px) 1fr;
    }

    :host(:${style_focus.b}) .thumb-cursor {
      box-shadow: 0 0 0 2px ${design_tokens.If},
        0 0 0 calc((2 + ${design_tokens.vx}) * 1px) ${design_tokens.D8};
    }

    .thumb-container {
      position: absolute;
      height: calc(var(--thumb-size) * 1px);
      width: calc(var(--thumb-size) * 1px);
      transition: all 0.2s ease;
      color: ${design_tokens.hY};
      fill: currentcolor;
    }
    .thumb-cursor {
      border: none;
      width: calc(var(--thumb-size) * 1px);
      height: calc(var(--thumb-size) * 1px);
      background: ${design_tokens.hY};
      border-radius: calc(${design_tokens.UW} * 1px);
    }
    .thumb-cursor:hover {
      background: ${design_tokens.hY};
      border-color: ${design_tokens.QP};
    }
    .thumb-cursor:active {
      background: ${design_tokens.hY};
    }
    :host([orientation='horizontal']) .thumb-container {
      transform: translateX(calc(var(--thumb-size) * 0.5px))
        translateY(calc(var(--thumb-translate) * 1px));
    }
    :host([orientation='vertical']) .thumb-container {
      transform: translateX(calc(var(--thumb-translate) * 1px))
        translateY(calc(var(--thumb-size) * 0.5px));
    }
    :host([orientation='horizontal']) {
      min-width: calc(var(--thumb-size) * 1px);
    }
    :host([orientation='horizontal']) .track {
      right: calc(var(--track-overhang) * 1px);
      left: calc(var(--track-overhang) * 1px);
      align-self: start;
      height: calc(var(--track-width) * 1px);
    }
    :host([orientation='vertical']) .track {
      top: calc(var(--track-overhang) * 1px);
      bottom: calc(var(--track-overhang) * 1px);
      width: calc(var(--track-width) * 1px);
      height: 100%;
    }
    .track {
      background: ${design_tokens.ak};
      position: absolute;
      border-radius: calc(${design_tokens.UW} * 1px);
    }
    :host([orientation='vertical']) {
      height: calc(var(--jp-slider-height) * 1px);
      min-height: calc(var(--thumb-size) * 1px);
      min-width: calc(${design_tokens._5} * 20px);
    }
    :host([disabled]),
    :host([readonly]) {
      cursor: ${disabled.H};
    }
    :host([disabled]) {
      opacity: ${design_tokens.VF};
    }
  `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        .thumb-cursor {
          forced-color-adjust: none;
          border-color: ${system_colors.H.FieldText};
          background: ${system_colors.H.FieldText};
        }
        .thumb-cursor:hover,
        .thumb-cursor:active {
          background: ${system_colors.H.Highlight};
        }
        .track {
          forced-color-adjust: none;
          background: ${system_colors.H.FieldText};
        }
        :host(:${style_focus.b}) .thumb-cursor {
          border-color: ${system_colors.H.Highlight};
        }
        :host([disabled]) {
          opacity: 1;
        }
        :host([disabled]) .track,
        :host([disabled]) .thumb-cursor {
          forced-color-adjust: none;
          background: ${system_colors.H.GrayText};
        }

        :host(:${style_focus.b}) .thumb-cursor {
          background: ${system_colors.H.Highlight};
          border-color: ${system_colors.H.Highlight};
          box-shadow: 0 0 0 2px ${system_colors.H.Field},
            0 0 0 4px ${system_colors.H.FieldText};
        }
      `)),thumb:'\n        <div class="thumb-cursor"></div>\n    '});var slider_label=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/slider-label/index.js"),slider_label_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/slider-label/slider-label.styles.js"),slider_label_slider_label=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/slider-label/slider-label.js"),slider_label_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/slider-label/slider-label.template.js");const jpSliderLabel=slider_label.PQ.compose({baseName:"slider-label",baseClass:slider_label_slider_label.P,template:slider_label_template.$,styles:slider_label_styles.Ok});var switch_switch=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/switch/switch.js"),switch_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/switch/switch.template.js");const jpSwitch=switch_switch.r.compose({baseName:"switch",template:switch_template.o,styles:(context,definition)=>css.i`
    :host([hidden]) {
      display: none;
    }

    ${(0,display.j)("inline-flex")} :host {
      align-items: center;
      outline: none;
      font-family: ${design_tokens.SV};
      margin: calc(${design_tokens._5} * 1px) 0;
      ${""} user-select: none;
    }

    :host([disabled]) {
      opacity: ${design_tokens.VF};
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .switch,
    :host([disabled]) .switch {
      cursor: ${disabled.H};
    }

    .switch {
      position: relative;
      outline: none;
      box-sizing: border-box;
      width: calc(${heightNumber} * 1px);
      height: calc((${heightNumber} / 2 + ${design_tokens._5}) * 1px);
      background: ${design_tokens._B};
      border-radius: calc(${design_tokens.UW} * 1px);
      border: calc(${design_tokens.H} * 1px) solid ${design_tokens.ak};
    }

    .switch:hover {
      background: ${design_tokens.Tm};
      border-color: ${design_tokens.QP};
      cursor: pointer;
    }

    host([disabled]) .switch:hover,
    host([readonly]) .switch:hover {
      background: ${design_tokens.Tm};
      border-color: ${design_tokens.QP};
      cursor: ${disabled.H};
    }

    :host(:not([disabled])) .switch:active {
      background: ${design_tokens.Iu};
      border-color: ${design_tokens.c1};
    }

    :host(:${style_focus.b}) .switch {
      outline-offset: 2px;
      outline: solid calc(${design_tokens.vx} * 1px) ${design_tokens.D8};
    }

    .checked-indicator {
      position: absolute;
      top: 5px;
      bottom: 5px;
      background: ${design_tokens.hY};
      border-radius: calc(${design_tokens.UW} * 1px);
      transition: all 0.2s ease-in-out;
    }

    .status-message {
      color: ${design_tokens.hY};
      cursor: pointer;
      font-size: ${design_tokens.cS};
      line-height: ${design_tokens.RU};
    }

    :host([disabled]) .status-message,
    :host([readonly]) .status-message {
      cursor: ${disabled.H};
    }

    .label {
      color: ${design_tokens.hY};

      ${""} margin-inline-end: calc(${design_tokens._5} * 2px + 2px);
      font-size: ${design_tokens.cS};
      line-height: ${design_tokens.RU};
      cursor: pointer;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    ::slotted([slot='checked-message']),
    ::slotted([slot='unchecked-message']) {
      margin-inline-start: calc(${design_tokens._5} * 2px + 2px);
    }

    :host([aria-checked='true']) .checked-indicator {
      background: ${design_tokens.w4};
    }

    :host([aria-checked='true']) .switch {
      background: ${design_tokens.Av};
      border-color: ${design_tokens.Av};
    }

    :host([aria-checked='true']:not([disabled])) .switch:hover {
      background: ${design_tokens.OC};
      border-color: ${design_tokens.OC};
    }

    :host([aria-checked='true']:not([disabled]))
      .switch:hover
      .checked-indicator {
      background: ${design_tokens.lJ};
    }

    :host([aria-checked='true']:not([disabled])) .switch:active {
      background: ${design_tokens.UE};
      border-color: ${design_tokens.UE};
    }

    :host([aria-checked='true']:not([disabled]))
      .switch:active
      .checked-indicator {
      background: ${design_tokens.Pp};
    }

    :host([aria-checked="true"]:${style_focus.b}:not([disabled])) .switch {
      outline: solid calc(${design_tokens.vx} * 1px) ${design_tokens.D8};
    }

    .unchecked-message {
      display: block;
    }

    .checked-message {
      display: none;
    }

    :host([aria-checked='true']) .unchecked-message {
      display: none;
    }

    :host([aria-checked='true']) .checked-message {
      display: block;
    }
  `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        .checked-indicator,
        :host(:not([disabled])) .switch:active .checked-indicator {
          forced-color-adjust: none;
          background: ${system_colors.H.FieldText};
        }
        .switch {
          forced-color-adjust: none;
          background: ${system_colors.H.Field};
          border-color: ${system_colors.H.FieldText};
        }
        :host(:not([disabled])) .switch:hover {
          background: ${system_colors.H.HighlightText};
          border-color: ${system_colors.H.Highlight};
        }
        :host([aria-checked='true']) .switch {
          background: ${system_colors.H.Highlight};
          border-color: ${system_colors.H.Highlight};
        }
        :host([aria-checked='true']:not([disabled])) .switch:hover,
        :host(:not([disabled])) .switch:active {
          background: ${system_colors.H.HighlightText};
          border-color: ${system_colors.H.Highlight};
        }
        :host([aria-checked='true']) .checked-indicator {
          background: ${system_colors.H.HighlightText};
        }
        :host([aria-checked='true']:not([disabled]))
          .switch:hover
          .checked-indicator {
          background: ${system_colors.H.Highlight};
        }
        :host([disabled]) {
          opacity: 1;
        }
        :host(:${style_focus.b}) .switch {
          border-color: ${system_colors.H.Highlight};
          outline-offset: 2px;
          outline: solid calc(${design_tokens.vx} * 1px)
            ${system_colors.H.FieldText};
        }
        :host([aria-checked="true"]:${style_focus.b}:not([disabled])) .switch {
          outline: solid calc(${design_tokens.vx} * 1px)
            ${system_colors.H.FieldText};
        }
        :host([disabled]) .checked-indicator {
          background: ${system_colors.H.GrayText};
        }
        :host([disabled]) .switch {
          background: ${system_colors.H.Field};
          border-color: ${system_colors.H.GrayText};
        }
      `),new design_tokens.O8(css.i`
        .checked-indicator {
          left: 5px;
          right: calc(((${heightNumber} / 2) + 1) * 1px);
        }

        :host([aria-checked='true']) .checked-indicator {
          left: calc(((${heightNumber} / 2) + 1) * 1px);
          right: 5px;
        }
      `,css.i`
        .checked-indicator {
          right: 5px;
          left: calc(((${heightNumber} / 2) + 1) * 1px);
        }

        :host([aria-checked='true']) .checked-indicator {
          right: calc(((${heightNumber} / 2) + 1) * 1px);
          left: 5px;
        }
      `)),switch:'\n    <span class="checked-indicator" part="checked-indicator"></span>\n  '});var tab_panel=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/tab-panel/tab-panel.js"),tab_panel_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/tab-panel/tab-panel.template.js"),tab_panel_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/tab-panel/tab-panel.styles.js");const jpTabPanel=tab_panel.x.compose({baseName:"tab-panel",template:tab_panel_template.o,styles:tab_panel_styles.T});var tab=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/tab/tab.js"),tab_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/tab/tab.template.js");const tabStyles=(context,definition)=>css.i`
    ${(0,display.j)("inline-flex")} :host {
      box-sizing: border-box;
      font-family: ${esm_design_tokens.SV};
      font-size: ${esm_design_tokens.cS};
      line-height: ${esm_design_tokens.RU};
      height: calc(${heightNumber} * 1px);
      padding: calc(${esm_design_tokens._5} * 5px) calc(${esm_design_tokens._5} * 4px);
      color: ${esm_design_tokens.Q5};
      fill: currentcolor;
      border-radius: 0 0 calc(${esm_design_tokens.UW} * 1px)
        calc(${esm_design_tokens.UW} * 1px);
      border: calc(${esm_design_tokens.H} * 1px) solid transparent;
      align-items: center;
      grid-row: 2;
      justify-content: center;
      cursor: pointer;
    }

    :host(:hover) {
      color: ${esm_design_tokens.hY};
      fill: currentcolor;
    }

    :host(:active) {
      color: ${esm_design_tokens.hY};
      fill: currentcolor;
    }

    :host([disabled]) {
      cursor: ${disabled.H};
      opacity: ${esm_design_tokens.VF};
    }

    :host([disabled]:hover) {
      color: ${esm_design_tokens.Q5};
      background: ${esm_design_tokens.jq};
    }

    :host([aria-selected='true']) {
      background: ${esm_design_tokens.wF};
      color: ${esm_design_tokens.hY};
      fill: currentcolor;
    }

    :host([aria-selected='true']:hover) {
      background: ${esm_design_tokens.Xi};
      color: ${esm_design_tokens.hY};
      fill: currentcolor;
    }

    :host([aria-selected='true']:active) {
      background: ${esm_design_tokens.Gy};
      color: ${esm_design_tokens.hY};
      fill: currentcolor;
    }

    :host(:${style_focus.b}) {
      outline: none;
      border-color: ${esm_design_tokens.D8};
      box-shadow: 0 0 0 calc((${esm_design_tokens.vx} - ${esm_design_tokens.H}) * 1px)
        ${esm_design_tokens.D8};
    }

    :host(:focus) {
      outline: none;
    }

    :host(.vertical) {
      justify-content: end;
      grid-column: 2;
      border-bottom-left-radius: 0;
      border-top-right-radius: calc(${esm_design_tokens.UW} * 1px);
    }

    :host(.vertical[aria-selected='true']) {
      z-index: 2;
    }

    :host(.vertical:hover) {
      color: ${esm_design_tokens.hY};
    }

    :host(.vertical:active) {
      color: ${esm_design_tokens.hY};
    }

    :host(.vertical:hover[aria-selected='true']) {
    }
  `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        :host {
          forced-color-adjust: none;
          border-color: transparent;
          color: ${system_colors.H.ButtonText};
          fill: currentcolor;
        }
        :host(:hover),
        :host(.vertical:hover),
        :host([aria-selected='true']:hover) {
          background: ${system_colors.H.Highlight};
          color: ${system_colors.H.HighlightText};
          fill: currentcolor;
        }
        :host([aria-selected='true']) {
          background: ${system_colors.H.HighlightText};
          color: ${system_colors.H.Highlight};
          fill: currentcolor;
        }
        :host(:${style_focus.b}) {
          border-color: ${system_colors.H.ButtonText};
          box-shadow: none;
        }
        :host([disabled]),
        :host([disabled]:hover) {
          opacity: 1;
          color: ${system_colors.H.GrayText};
          background: ${system_colors.H.ButtonFace};
        }
      `)),jpTab=tab.O.compose({baseName:"tab",template:tab_template.O,styles:tabStyles});var tabs=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/tabs/tabs.js"),tabs_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/tabs/tabs.template.js");const tabsStyles=(context,definition)=>css.i`
    ${(0,display.j)("grid")} :host {
      box-sizing: border-box;
      font-family: ${design_tokens.SV};
      font-size: ${design_tokens.cS};
      line-height: ${design_tokens.RU};
      color: ${design_tokens.hY};
      grid-template-columns: auto 1fr auto;
      grid-template-rows: auto 1fr;
    }

    .tablist {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: auto;
      position: relative;
      width: max-content;
      align-self: end;
      padding: calc(${design_tokens._5} * 4px) calc(${design_tokens._5} * 4px) 0;
      box-sizing: border-box;
    }

    .start,
    .end {
      align-self: center;
    }

    .activeIndicator {
      grid-row: 1;
      grid-column: 1;
      width: 100%;
      height: 4px;
      justify-self: center;
      background: ${design_tokens.Av};
      margin-top: 0;
      border-radius: calc(${design_tokens.UW} * 1px)
        calc(${design_tokens.UW} * 1px) 0 0;
    }

    .activeIndicatorTransition {
      transition: transform 0.01s ease-in-out;
    }

    .tabpanel {
      grid-row: 2;
      grid-column-start: 1;
      grid-column-end: 4;
      position: relative;
    }

    :host([orientation='vertical']) {
      grid-template-rows: auto 1fr auto;
      grid-template-columns: auto 1fr;
    }

    :host([orientation='vertical']) .tablist {
      grid-row-start: 2;
      grid-row-end: 2;
      display: grid;
      grid-template-rows: auto;
      grid-template-columns: auto 1fr;
      position: relative;
      width: max-content;
      justify-self: end;
      align-self: flex-start;
      width: 100%;
      padding: 0 calc(${design_tokens._5} * 4px)
        calc((${heightNumber} - ${design_tokens._5}) * 1px) 0;
    }

    :host([orientation='vertical']) .tabpanel {
      grid-column: 2;
      grid-row-start: 1;
      grid-row-end: 4;
    }

    :host([orientation='vertical']) .end {
      grid-row: 3;
    }

    :host([orientation='vertical']) .activeIndicator {
      grid-column: 1;
      grid-row: 1;
      width: 4px;
      height: 100%;
      margin-inline-end: 0px;
      align-self: center;
      border-radius: calc(${design_tokens.UW} * 1px) 0 0
        calc(${design_tokens.UW} * 1px);
    }

    :host([orientation='vertical']) .activeIndicatorTransition {
      transition: transform 0.01s ease-in-out;
    }
  `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        .activeIndicator,
        :host([orientation='vertical']) .activeIndicator {
          forced-color-adjust: none;
          background: ${system_colors.H.Highlight};
        }
      `)),jpTabs=tabs.m.compose({baseName:"tabs",template:tabs_template.q,styles:tabsStyles});var text_area=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/text-area/text-area.js"),text_area_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/text-area/text-area.template.js"),esm_text_area=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/text-area/index.js");const textAreaStyles=(context,definition)=>css.i`
    ${(0,display.j)("inline-block")} :host {
      font-family: ${design_tokens.SV};
      outline: none;
      user-select: none;
    }

    .control {
      box-sizing: border-box;
      position: relative;
      color: ${design_tokens.hY};
      background: ${design_tokens._B};
      border-radius: calc(${design_tokens.UW} * 1px);
      border: calc(${design_tokens.H} * 1px) solid ${design_tokens.P0};
      height: calc(${heightNumber} * 2px);
      font: inherit;
      font-size: ${design_tokens.cS};
      line-height: ${design_tokens.RU};
      padding: calc(${design_tokens._5} * 2px + 1px);
      width: 100%;
      resize: none;
    }

    .control:hover:enabled {
      background: ${design_tokens.Tm};
      border-color: ${design_tokens.Dg};
    }

    .control:active:enabled {
      background: ${design_tokens.Iu};
      border-color: ${design_tokens.hP};
    }

    .control:hover,
    .control:${style_focus.b},
    .control:disabled,
    .control:active {
      outline: none;
    }

    :host(:focus-within) .control {
      border-color: ${design_tokens.D8};
      box-shadow: 0 0 0 calc((${design_tokens.vx} - ${design_tokens.H}) * 1px)
        ${design_tokens.D8};
    }

    :host([appearance='filled']) .control {
      background: ${design_tokens.wF};
    }

    :host([appearance='filled']:hover:not([disabled])) .control {
      background: ${design_tokens.Xi};
    }

    :host([resize='both']) .control {
      resize: both;
    }

    :host([resize='horizontal']) .control {
      resize: horizontal;
    }

    :host([resize='vertical']) .control {
      resize: vertical;
    }

    .label {
      display: block;
      color: ${design_tokens.hY};
      cursor: pointer;
      font-size: ${design_tokens.cS};
      line-height: ${design_tokens.RU};
      margin-bottom: 4px;
    }

    .label__hidden {
      display: none;
      visibility: hidden;
    }

    :host([disabled]) .label,
    :host([readonly]) .label,
    :host([readonly]) .control,
    :host([disabled]) .control {
      cursor: ${disabled.H};
    }
    :host([disabled]) {
      opacity: ${design_tokens.VF};
    }
    :host([disabled]) .control {
      border-color: ${design_tokens.ak};
    }
  `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        :host([disabled]) {
          opacity: 1;
        }
      `)),jpTextArea=esm_text_area.Kx.compose({baseName:"text-area",baseClass:text_area.K,template:text_area_template.Z,styles:textAreaStyles,shadowOptions:{delegatesFocus:!0}});var text_field_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/text-field/text-field.template.js"),esm_text_field=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/text-field/index.js");const textFieldStyles=(context,definition)=>css.i`
    ${BaseFieldStyles}

    .start,
    .end {
      display: flex;
    }
  `,jpTextField=esm_text_field.nv.compose({baseName:"text-field",baseClass:text_field.nv,template:text_field_template.J,styles:textFieldStyles,shadowOptions:{delegatesFocus:!0}});var toolbar=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/toolbar/index.js"),toolbar_toolbar=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/toolbar/toolbar.js"),toolbar_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/toolbar/toolbar.template.js");const toolbarStyles=(context,definition)=>css.i`
    ${(0,display.j)("inline-flex")} :host {
      --toolbar-item-gap: calc(
        (var(--design-unit) + calc(var(--density) + 2)) * 1px
      );
      background-color: ${design_tokens.If};
      border-radius: calc(${design_tokens.UW} * 1px);
      fill: currentcolor;
      padding: var(--toolbar-item-gap);
    }

    :host(${style_focus.b}) {
      outline: calc(${design_tokens.H} * 1px) solid ${design_tokens.D8};
    }

    .positioning-region {
      align-items: flex-start;
      display: inline-flex;
      flex-flow: row wrap;
      justify-content: flex-start;
    }

    :host([orientation='vertical']) .positioning-region {
      flex-direction: column;
    }

    ::slotted(:not([slot])) {
      flex: 0 0 auto;
      margin: 0 var(--toolbar-item-gap);
    }

    :host([orientation='vertical']) ::slotted(:not([slot])) {
      margin: var(--toolbar-item-gap) 0;
    }

    .start,
    .end {
      display: flex;
      margin: auto;
      margin-inline: 0;
    }

    ::slotted(svg) {
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      width: 16px;
      height: 16px;
    }
  `.withBehaviors((0,match_media_stylesheet_behavior.vF)(css.i`
        :host(:${style_focus.b}) {
          box-shadow: 0 0 0 calc(${design_tokens.vx} * 1px)
            ${system_colors.H.Highlight};
          color: ${system_colors.H.ButtonText};
          forced-color-adjust: none;
        }
      `)),jpToolbar=toolbar.o8.compose({baseName:"toolbar",baseClass:toolbar_toolbar.o,template:toolbar_template.T,styles:toolbarStyles,shadowOptions:{delegatesFocus:!0}});var tooltip=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/tooltip/tooltip.js"),tooltip_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/tooltip/tooltip.template.js"),tooltip_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/tooltip/tooltip.styles.js");const jpTooltip=tooltip.u.compose({baseName:"tooltip",template:tooltip_template.e,styles:tooltip_styles.n});var tree_item=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/tree-item/tree-item.js"),tree_item_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/tree-item/tree-item.template.js");const tree_item_styles_ltr=css.i`
  .expand-collapse-glyph {
    transform: rotate(0deg);
  }
  :host(.nested) .expand-collapse-button {
    left: var(
      --expand-collapse-button-nested-width,
      calc(${heightNumber} * -1px)
    );
  }
  :host([selected])::after {
    left: calc(${design_tokens.vx} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-glyph {
    transform: rotate(90deg);
  }
`,tree_item_styles_rtl=css.i`
  .expand-collapse-glyph {
    transform: rotate(180deg);
  }
  :host(.nested) .expand-collapse-button {
    right: var(
      --expand-collapse-button-nested-width,
      calc(${heightNumber} * -1px)
    );
  }
  :host([selected])::after {
    right: calc(${design_tokens.vx} * 1px);
  }
  :host([expanded]) > .positioning-region .expand-collapse-glyph {
    transform: rotate(90deg);
  }
`,expandCollapseButtonSize=css.j`((${design_tokens.nf} / 2) * ${design_tokens._5}) + ((${design_tokens._5} * ${design_tokens.hV}) / 2)`,expandCollapseHoverBehavior=design_token.DesignToken.create("tree-item-expand-collapse-hover").withDefault((target=>{const recipe=design_tokens.DF.getValueFor(target);return recipe.evaluate(target,recipe.evaluate(target).hover).hover})),selectedExpandCollapseHoverBehavior=design_token.DesignToken.create("tree-item-expand-collapse-selected-hover").withDefault((target=>{const baseRecipe=design_tokens.At.getValueFor(target);return design_tokens.DF.getValueFor(target).evaluate(target,baseRecipe.evaluate(target).rest).hover})),jpTreeItem=tree_item.k.compose({baseName:"tree-item",template:tree_item_template.W,styles:(context,definition)=>css.i`
    ${(0,display.j)("block")} :host {
      contain: content;
      position: relative;
      outline: none;
      color: ${design_tokens.hY};
      background: ${design_tokens.jq};
      cursor: pointer;
      font-family: ${design_tokens.SV};
      --expand-collapse-button-size: calc(${heightNumber} * 1px);
      --tree-item-nested-width: 0;
    }

    :host(:focus) > .positioning-region {
      outline: none;
    }

    :host(:focus) .content-region {
      outline: none;
    }

    :host(:${style_focus.b}) .positioning-region {
      border-color: ${design_tokens.D8};
      box-shadow: 0 0 0 calc((${design_tokens.vx} - ${design_tokens.H}) * 1px)
        ${design_tokens.D8} inset;
      color: ${design_tokens.hY};
    }

    .positioning-region {
      display: flex;
      position: relative;
      box-sizing: border-box;
      border: transparent calc(${design_tokens.H} * 1px) solid;
      border-radius: calc(${design_tokens.UW} * 1px);
      height: calc((${heightNumber} + 1) * 1px);
    }

    .positioning-region::before {
      content: '';
      display: block;
      width: var(--tree-item-nested-width);
      flex-shrink: 0;
    }

    .positioning-region:hover {
      background: ${design_tokens.Qp};
    }

    .positioning-region:active {
      background: ${design_tokens.sG};
    }

    .content-region {
      display: inline-flex;
      align-items: center;
      white-space: nowrap;
      width: 100%;
      min-width: 0;
      height: calc(${heightNumber} * 1px);
      margin-inline-start: calc(${design_tokens._5} * 2px + 8px);
      font-size: ${design_tokens.cS};
      line-height: ${design_tokens.RU};
      font-weight: 400;
    }

    .items {
      display: none;
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      font-size: calc(1em + (${design_tokens._5} + 16) * 1px);
    }

    .expand-collapse-button {
      background: none;
      border: none;
      outline: none;
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      width: calc((${expandCollapseButtonSize} + (${design_tokens._5} * 2)) * 1px);
      height: calc((${expandCollapseButtonSize} + (${design_tokens._5} * 2)) * 1px);
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-left: 6px;
      margin-right: 6px;
    }

    .expand-collapse-glyph {
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      width: 16px;
      height: 16px;
      transition: transform 0.1s linear;

      pointer-events: none;
      fill: currentcolor;
    }

    .start,
    .end {
      display: flex;
      fill: currentcolor;
    }

    ::slotted(svg) {
      /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
      width: 16px;
      height: 16px;
    }

    .start {
      /* TODO: horizontalSpacing https://github.com/microsoft/fast/issues/2766 */
      margin-inline-end: calc(${design_tokens._5} * 2px + 2px);
    }

    .end {
      /* TODO: horizontalSpacing https://github.com/microsoft/fast/issues/2766 */
      margin-inline-start: calc(${design_tokens._5} * 2px + 2px);
    }

    :host([expanded]) > .items {
      display: block;
    }

    :host([disabled]) .content-region {
      opacity: ${design_tokens.VF};
      cursor: ${disabled.H};
    }

    :host(.nested) .content-region {
      position: relative;
      margin-inline-start: var(--expand-collapse-button-size);
    }

    :host(.nested) .expand-collapse-button {
      position: absolute;
    }

    :host(.nested) .expand-collapse-button:hover {
      background: ${expandCollapseHoverBehavior};
    }

    :host([selected]) .positioning-region {
      background: ${design_tokens.wF};
    }

    :host([selected]) .expand-collapse-button:hover {
      background: ${selectedExpandCollapseHoverBehavior};
    }

    :host([selected])::after {
      /* The background needs to be calculated based on the selected background state
            for this control. We currently have no way of changing that, so setting to
            accent-foreground-rest for the time being */
      background: ${design_tokens.go};
      border-radius: calc(${design_tokens.UW} * 1px);
      content: '';
      display: block;
      position: absolute;
      top: calc((${heightNumber} / 4) * 1px);
      width: 3px;
      height: calc((${heightNumber} / 2) * 1px);
    }

    ::slotted(${context.tagFor(tree_item.k)}) {
      --tree-item-nested-width: 1em;
      --expand-collapse-button-nested-width: calc(${heightNumber} * -1px);
    }
  `.withBehaviors(new design_tokens.O8(tree_item_styles_ltr,tree_item_styles_rtl),(0,match_media_stylesheet_behavior.vF)(css.i`
        :host {
          forced-color-adjust: none;
          border-color: transparent;
          background: ${system_colors.H.Field};
          color: ${system_colors.H.FieldText};
        }
        :host .content-region .expand-collapse-glyph {
          fill: ${system_colors.H.FieldText};
        }
        :host .positioning-region:hover,
        :host([selected]) .positioning-region {
          background: ${system_colors.H.Highlight};
        }
        :host .positioning-region:hover .content-region,
        :host([selected]) .positioning-region .content-region {
          color: ${system_colors.H.HighlightText};
        }
        :host .positioning-region:hover .content-region .expand-collapse-glyph,
        :host .positioning-region:hover .content-region .start,
        :host .positioning-region:hover .content-region .end,
        :host([selected]) .content-region .expand-collapse-glyph,
        :host([selected]) .content-region .start,
        :host([selected]) .content-region .end {
          fill: ${system_colors.H.HighlightText};
        }
        :host([selected])::after {
          background: ${system_colors.H.Field};
        }
        :host(:${style_focus.b}) .positioning-region {
          border-color: ${system_colors.H.FieldText};
          box-shadow: 0 0 0 2px inset ${system_colors.H.Field};
          color: ${system_colors.H.FieldText};
        }
        :host([disabled]) .content-region,
        :host([disabled]) .positioning-region:hover .content-region {
          opacity: 1;
          color: ${system_colors.H.GrayText};
        }
        :host([disabled]) .content-region .expand-collapse-glyph,
        :host([disabled]) .content-region .start,
        :host([disabled]) .content-region .end,
        :host([disabled])
          .positioning-region:hover
          .content-region
          .expand-collapse-glyph,
        :host([disabled]) .positioning-region:hover .content-region .start,
        :host([disabled]) .positioning-region:hover .content-region .end {
          fill: ${system_colors.H.GrayText};
        }
        :host([disabled]) .positioning-region:hover {
          background: ${system_colors.H.Field};
        }
        .expand-collapse-glyph,
        .start,
        .end {
          fill: ${system_colors.H.FieldText};
        }
        :host(.nested) .expand-collapse-button:hover {
          background: ${system_colors.H.Field};
        }
        :host(.nested) .expand-collapse-button:hover .expand-collapse-glyph {
          fill: ${system_colors.H.FieldText};
        }
      `)),expandCollapseGlyph:'\n        <svg\n            viewBox="0 0 16 16"\n            xmlns="http://www.w3.org/2000/svg"\n            class="expand-collapse-glyph"\n        >\n            <path\n                d="M5.00001 12.3263C5.00124 12.5147 5.05566 12.699 5.15699 12.8578C5.25831 13.0167 5.40243 13.1437 5.57273 13.2242C5.74304 13.3047 5.9326 13.3354 6.11959 13.3128C6.30659 13.2902 6.4834 13.2152 6.62967 13.0965L10.8988 8.83532C11.0739 8.69473 11.2153 8.51658 11.3124 8.31402C11.4096 8.11146 11.46 7.88966 11.46 7.66499C11.46 7.44033 11.4096 7.21853 11.3124 7.01597C11.2153 6.81341 11.0739 6.63526 10.8988 6.49467L6.62967 2.22347C6.48274 2.10422 6.30501 2.02912 6.11712 2.00691C5.92923 1.9847 5.73889 2.01628 5.56823 2.09799C5.39757 2.17969 5.25358 2.30817 5.153 2.46849C5.05241 2.62882 4.99936 2.8144 5.00001 3.00369V12.3263Z"\n            />\n        </svg>\n    '});var tree_view=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/tree-view/tree-view.js"),tree_view_template=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/tree-view/tree-view.template.js"),tree_view_styles=__webpack_require__("../../node_modules/@microsoft/fast-components/dist/esm/tree-view/tree-view.styles.js");const jpTreeView=tree_view.L.compose({baseName:"tree-view",template:tree_view_template.E,styles:tree_view_styles.N}),allComponents={jpAccordion,jpAccordionItem,jpAnchoredRegion,jpAvatar,jpBadge,jpBreadcrumb,jpBreadcrumbItem,jpButton,jpCard,jpCheckbox,jpCombobox,jpDataGrid,jpDataGridCell,jpDataGridRow,jpDateField,jpDivider,jpMenu,jpMenuItem,jpNumberField,jpOption,jpProgress,jpProgressRing,jpRadio,jpRadioGroup,jpSearch,jpSelect,jpSlider,jpSliderLabel,jpSwitch,jpTab,jpTabPanel,jpTabs,jpTextArea,jpTextField,jpToolbar,jpTooltip,jpTreeItem,jpTreeView,register(container,...rest){if(container)for(const key in this)"register"!==key&&this[key]().register(container,...rest)}};var design_system=__webpack_require__("../../node_modules/@microsoft/fast-foundation/dist/esm/design-system/design-system.js");function provideJupyterDesignSystem(element){return design_system.K.getOrCreate(element).withPrefix("jp")}var parse_color=__webpack_require__("../../node_modules/@microsoft/fast-colors/dist/parse-color.js"),color_converters=__webpack_require__("../../node_modules/@microsoft/fast-colors/dist/color-converters.js"),color_hsl=__webpack_require__("../../node_modules/@microsoft/fast-colors/dist/color-hsl.js"),color=__webpack_require__("./src/color.ts");const THEME_NAME_BODY_ATTRIBUTE="data-jp-theme-name",THEME_MODE_BODY_ATTRIBUTE="data-jp-theme-light";let isThemeChangeInitialized=!1;function addJupyterLabThemeChangeListener(){isThemeChangeInitialized||(isThemeChangeInitialized=!0,function initThemeChangeListener(){const addObserver=()=>{new MutationObserver((()=>{applyCurrentTheme()})).observe(document.body,{attributes:!0,attributeFilter:[THEME_NAME_BODY_ATTRIBUTE],childList:!1,characterData:!1}),applyCurrentTheme()};"complete"===document.readyState?addObserver():window.addEventListener("load",addObserver)}())}const tokenMappings={"--jp-border-width":{converter:value=>{const parsedValue=parseInt(value,10);return isNaN(parsedValue)?null:parsedValue},token:design_tokens.H},"--jp-layout-color1":{converter:(value,isDark)=>{const parsedColor=(0,parse_color.lu)(value);if(parsedColor){const hsl=(0,color_converters.lw)(parsedColor),correctedHSL=color_hsl.H.fromObject({h:hsl.h,s:hsl.s,l:.5}),correctedRGB=(0,color_converters.hP)(correctedHSL);return color.vD.from(color.wd.create(correctedRGB.r,correctedRGB.g,correctedRGB.b))}return null},token:design_tokens.yv},"--jp-brand-color1":{converter:(value,isDark)=>{const parsedColor=(0,parse_color.lu)(value);if(parsedColor){const hsl=(0,color_converters.lw)(parsedColor),direction=isDark?1:-1,correctedHSL=color_hsl.H.fromObject({h:hsl.h,s:hsl.s,l:hsl.l+direction*design_tokens.B2.getValueFor(document.body)/94}),correctedRGB=(0,color_converters.hP)(correctedHSL);return color.vD.from(color.wd.create(correctedRGB.r,correctedRGB.g,correctedRGB.b))}return null},token:design_tokens.au},"--jp-ui-font-family":{token:design_tokens.SV},"--jp-ui-font-size1":{token:design_tokens.cS}};function applyCurrentTheme(){var _a;if(!document.body.getAttribute(THEME_NAME_BODY_ATTRIBUTE))return;const styles=getComputedStyle(document.body),isDark="false"===document.body.getAttribute(THEME_MODE_BODY_ATTRIBUTE);design_tokens.q2.setValueFor(document.body,isDark?color.he.DarkMode:color.he.LightMode);for(const jpTokenName in tokenMappings){const toolkitTokenName=tokenMappings[jpTokenName],value=styles.getPropertyValue(jpTokenName).toString();if(document.body&&""!==value){const parsedValue=(null!==(_a=toolkitTokenName.converter)&&void 0!==_a?_a:v=>v)(value.trim(),isDark);null!==parsedValue?toolkitTokenName.token.setValueFor(document.body,parsedValue):console.error(`Fail to parse value '${value}' for '${jpTokenName}' as FAST design token.`)}}}const JupyterDesignSystem=provideJupyterDesignSystem().register(allComponents);const _storybook_preview={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},options:{storySort:{order:["Docs","Library"]},isToolshown:!0,enableShortcuts:!1},docs:{theme:__webpack_require__("../../node_modules/@storybook/theming/dist/chunk-4NMOSTKD.mjs").np.dark},backgrounds:{default:"dark",values:[{name:"light",value:"#f9f9f9"},{name:"dark",value:"#252526"}]}},globalTypes:{accent:{name:"Accent",description:"Theme accent color for components",defaultValue:"#006CBE",toolbar:{icon:"paintbrush",items:[{value:"#006CBE",right:"🔵",title:"blue"},{value:"#DA1A5F",title:"pink"}],showName:!1}}}}},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./anchored-region/anchored-region.stories.mdx":["./src/anchored-region/anchored-region.stories.mdx",690,867]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$",module.exports=webpackAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.ts)$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./accordion-item/accordion-item.stories":["./src/accordion-item/accordion-item.stories.ts",246,441],"./accordion-item/accordion-item.stories.ts":["./src/accordion-item/accordion-item.stories.ts",246,441],"./accordion/accordion.stories":["./src/accordion/accordion.stories.ts",246,928],"./accordion/accordion.stories.ts":["./src/accordion/accordion.stories.ts",246,928],"./avatar/avatar.stories":["./src/avatar/avatar.stories.ts",246,355],"./avatar/avatar.stories.ts":["./src/avatar/avatar.stories.ts",246,355],"./badge/badge.stories":["./src/badge/badge.stories.ts",246,412],"./badge/badge.stories.ts":["./src/badge/badge.stories.ts",246,412],"./breadcrumb-item/breadcrumb-item.stories":["./src/breadcrumb-item/breadcrumb-item.stories.ts",246,886],"./breadcrumb-item/breadcrumb-item.stories.ts":["./src/breadcrumb-item/breadcrumb-item.stories.ts",246,886],"./breadcrumb/breadcrumb.stories":["./src/breadcrumb/breadcrumb.stories.ts",246,842],"./breadcrumb/breadcrumb.stories.ts":["./src/breadcrumb/breadcrumb.stories.ts",246,842],"./button/button.stories":["./src/button/button.stories.ts",246,911],"./button/button.stories.ts":["./src/button/button.stories.ts",246,911],"./card/card.stories":["./src/card/card.stories.ts",246,279],"./card/card.stories.ts":["./src/card/card.stories.ts",246,279],"./checkbox/checkbox.stories":["./src/checkbox/checkbox.stories.ts",246,329],"./checkbox/checkbox.stories.ts":["./src/checkbox/checkbox.stories.ts",246,329],"./combobox/combobox.stories":["./src/combobox/combobox.stories.ts",246,736],"./combobox/combobox.stories.ts":["./src/combobox/combobox.stories.ts",246,736],"./data-grid/data-grid.stories":["./src/data-grid/data-grid.stories.ts",246,739],"./data-grid/data-grid.stories.ts":["./src/data-grid/data-grid.stories.ts",246,739],"./date-field/date-field.stories":["./src/date-field/date-field.stories.ts",246,318],"./date-field/date-field.stories.ts":["./src/date-field/date-field.stories.ts",246,318],"./divider/divider.stories":["./src/divider/divider.stories.ts",246,927],"./divider/divider.stories.ts":["./src/divider/divider.stories.ts",246,927],"./menu-item/menu-item.stories":["./src/menu-item/menu-item.stories.ts",246,498],"./menu-item/menu-item.stories.ts":["./src/menu-item/menu-item.stories.ts",246,498],"./menu/menu.stories":["./src/menu/menu.stories.ts",246,553],"./menu/menu.stories.ts":["./src/menu/menu.stories.ts",246,553],"./number-field/number-field.stories":["./src/number-field/number-field.stories.ts",246,985],"./number-field/number-field.stories.ts":["./src/number-field/number-field.stories.ts",246,985],"./option/option.stories":["./src/option/option.stories.ts",246,562],"./option/option.stories.ts":["./src/option/option.stories.ts",246,562],"./progress-ring/progress-ring.stories":["./src/progress-ring/progress-ring.stories.ts",246,419],"./progress-ring/progress-ring.stories.ts":["./src/progress-ring/progress-ring.stories.ts",246,419],"./progress/progress.stories":["./src/progress/progress.stories.ts",246,968],"./progress/progress.stories.ts":["./src/progress/progress.stories.ts",246,968],"./radio-group/radio-group.stories":["./src/radio-group/radio-group.stories.ts",246,31],"./radio-group/radio-group.stories.ts":["./src/radio-group/radio-group.stories.ts",246,31],"./radio/radio.stories":["./src/radio/radio.stories.ts",246,342],"./radio/radio.stories.ts":["./src/radio/radio.stories.ts",246,342],"./search/search.stories":["./src/search/search.stories.ts",246,127],"./search/search.stories.ts":["./src/search/search.stories.ts",246,127],"./select/select.stories":["./src/select/select.stories.ts",246,980],"./select/select.stories.ts":["./src/select/select.stories.ts",246,980],"./slider-label/slider-label.stories":["./src/slider-label/slider-label.stories.ts",246,172],"./slider-label/slider-label.stories.ts":["./src/slider-label/slider-label.stories.ts",246,172],"./slider/slider.stories":["./src/slider/slider.stories.ts",246,26],"./slider/slider.stories.ts":["./src/slider/slider.stories.ts",246,26],"./switch/switch.stories":["./src/switch/switch.stories.ts",246,932],"./switch/switch.stories.ts":["./src/switch/switch.stories.ts",246,932],"./tabs/tabs.stories":["./src/tabs/tabs.stories.ts",246,459],"./tabs/tabs.stories.ts":["./src/tabs/tabs.stories.ts",246,459],"./text-area/text-area.stories":["./src/text-area/text-area.stories.ts",246,357],"./text-area/text-area.stories.ts":["./src/text-area/text-area.stories.ts",246,357],"./text-field/text-field.stories":["./src/text-field/text-field.stories.ts",246,463],"./text-field/text-field.stories.ts":["./src/text-field/text-field.stories.ts",246,463],"./toolbar/toolbar.stories":["./src/toolbar/toolbar.stories.ts",246,458],"./toolbar/toolbar.stories.ts":["./src/toolbar/toolbar.stories.ts",246,458],"./tooltip/tooltip.stories":["./src/tooltip/tooltip.stories.ts",246,253],"./tooltip/tooltip.stories.ts":["./src/tooltip/tooltip.stories.ts",246,253],"./tree-item/tree-item.stories":["./src/tree-item/tree-item.stories.ts",246,854],"./tree-item/tree-item.stories.ts":["./src/tree-item/tree-item.stories.ts",246,854],"./tree-view/tree-view.stories":["./src/tree-view/tree-view.stories.ts",246,364],"./tree-view/tree-view.stories.ts":["./src/tree-view/tree-view.stories.ts",246,364]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.ts)$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var dist=__webpack_require__("../../node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api");const external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.ts)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.ts)$")("./"+pathRemainder)}];const channel=(0,external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject.createChannel)({page:"preview"});if(external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===dist.global.CONFIG_TYPE){const serverChannel=(0,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject.createChannel)({});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setServerChannel(serverChannel),window.__STORYBOOK_SERVER_CHANNEL__=serverChannel}const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("../../node_modules/@storybook/html/preview.js"),__webpack_require__("../../node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("../../node_modules/@storybook/addon-a11y/dist/preview.mjs"),__webpack_require__("./.storybook/preview.js")])})},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{__webpack_require__.O(0,[943],(()=>{return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);
//# sourceMappingURL=main.3f123a4a.iframe.bundle.js.map