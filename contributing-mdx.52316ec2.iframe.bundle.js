/*! For license information please see contributing-mdx.52316ec2.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_jupyter_web_components=self.webpackChunk_jupyter_web_components||[]).push([[8401],{"../../node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>DocsRenderer});var react=__webpack_require__("../../node_modules/react/index.js"),client=__webpack_require__("../../node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async el=>{let root=nodes.get(el);return root||(root=client.createRoot(el),nodes.set(el,root)),root},dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.bD,a:dist.Ct,...dist.lO},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components};return new Promise(((resolve,reject)=>{__webpack_require__.e(1040).then(__webpack_require__.bind(__webpack_require__,"../../node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el)=>{let root=await getReactRoot(el);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(dist.WI,{context,docsParameter}))),element))).then(resolve)}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"../../node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h_:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_});__webpack_require__("../../node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs")},"./docs/contributing.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>contributing});__webpack_require__("../../node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/@storybook/addon-docs/dist/index.mjs"),blocks_dist=__webpack_require__("../../node_modules/@storybook/blocks/dist/index.mjs");const CONTRIBUTING_namespaceObject="# Contributing to UI Toolkit for Jupyter\n\nIf you're reading this section, you're probably interested in\ncontributing to UI Toolkit for Jupyter. Welcome and thanks for your interest in\ncontributing!\n\nPlease take a look at the Contributor documentation and see the Jupyter [Community Guides](https://jupyter.readthedocs.io/en/latest/community/content-community.html).\n\nWe have labeled some issues as [good first issue](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22)\nor [help wanted](https://github.com/jupyterlab/jupyterlab/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)\nthat we believe are good examples of small, self-contained changes. We\nencourage those that are new to the code base to implement and/or ask\nquestions about these issues.\n\n## Development installation\n\nYou will need to install `yarn` (for example with `npm install --global yarn && yarn set version berry`).\n\nTo build the components packages, execute:\n\n```sh\nyarn install\nyarn build\n```\n\nThen to interactively test or develop web components:\n\n```sh\ncd packages/components\nyarn start\n```\n\n### JupyterLab demo extension\n\nTo test locally the JupyterLab demo extension, using `conda` package manager:\n\n```sh\nconda create -n jupyter-toolkit -c conda-forge -y nodejs yarn=3 jupyterlab=4\nconda activate jupyter-toolkit\nyarn install\nyarn build\npip install -e .\njupyter labextension develop --overwrite .\n```\n\n## General Guidelines for Contributing\n\nFor general documentation about contributing to Jupyter projects, see\nthe [Project Jupyter Contributor Documentation](https://jupyter.readthedocs.io/en/latest/contributing/content-contributor.html)\nand [Code of Conduct](https://github.com/jupyter/governance/blob/master/conduct/code_of_conduct.md).\n\nAll source code is written in\n[TypeScript](https://www.typescriptlang.org/Handbook). See the [Style Guide](https://github.com/jupyterlab/jupyterlab/wiki/TypeScript-Style-Guide).\n\nAll source code is formatted using [prettier](https://prettier.io).\nThe benefit of using a code formatter like prettier is that it removes the topic of\ncode style from the conversation when reviewing pull requests, thereby\nspeeding up the review process.\n\nYou may use the prettier npm script (e.g.\n`yarn prettier`) to format the entire code base.\nWe recommend installing a prettier extension for your code editor and\nconfiguring it to format your code with a keyboard shortcut or\nautomatically on save.\n\n## Submitting a Pull Request Contribution\n\nGenerally, an issue should be opened describing a piece of proposed work\nand the issues it solves before a pull request is opened.\n\n## Issue Management\n\n[Opening an issue](https://github.com/jupyterlab-contrib/jupyter-ui-toolkit/issues/new/choose) lets community members participate in the design\ndiscussion, makes others aware of work being done, and sets the stage\nfor a fruitful community interaction. A pull request should reference\nthe issue it is addressing. Once the pull request is merged, the issue\nrelated to it will also be closed. If there is additional discussion\naround implementation the issue may be re-opened. If additional\ndiscussion is desired, or if the pull request doesn't fully address the\nlocked issue, please open a new issue referencing the locked issue.\n";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Contributing"}),"\n",(0,jsx_runtime.jsx)(blocks_dist.UG,{children:CONTRIBUTING_namespaceObject})]})}const contributing=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent()}},"../../node_modules/react-dom/client.js":(__unused_webpack_module,exports,__webpack_require__)=>{var m=__webpack_require__("../../node_modules/react-dom/index.js");exports.createRoot=m.createRoot,exports.hydrateRoot=m.hydrateRoot},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("../../node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);