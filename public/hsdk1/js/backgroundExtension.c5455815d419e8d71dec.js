(window.deskappJsonp=window.deskappJsonp||[]).push([[62],{"./src/containers/BackgroundExtesion/BackgroundExtesion.js":function(e,n,o){"use strict";o.r(n);var t=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/keys.js"),s=o.n(t),l=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),i=o.n(l),d=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),a=o.n(d),r=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),c=o.n(r),u=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=o.n(u),m=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),b=o.n(m),g=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),h=o.n(g),_=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),j=o.n(_),f=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react-redux/es/index.js"),k=o("./src/actions/ExtensionsActions.js"),y=o("./src/reducers/selector.js"),x=o("./src/containers/asyncComponent.js"),I=o("./src/utils/Common.js"),w=function(e){function n(){return a()(this,n),p()(this,(n.__proto__||i()(n)).apply(this,arguments))}return b()(n,e),c()(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.getExtensionList,o=e.deptId,t=e.location,s=e.licenseType,l=e.isLightAgent;if("NEW_FREE"!=s&&!l)return n(1,10,t,o)}},{key:"render",value:function(){var e=this.props,n=e.location,o=e.widgets,t=e.extensions;return h.a.createElement("div",{style:{display:"none"}},ZApp.isDevMode()?s()(o).map(function(e,t){var s=o[e];return s.location==n?h.a.createElement(x.H,{key:t,placeHolder:n,extensionId:s.installationId,widgetName:decodeURIComponent(s.sanitisedName)}):null}):t.length?t.map(function(e,t){return((e.manifest||{}).modules.widgets||[]).map(function(e,s){var l=o[e];return l.location==n?h.a.createElement(x.H,{key:t,placeHolder:n,extensionId:l.installationId,widgetName:decodeURIComponent(l.sanitisedName)+"_"+l.widgetId}):null})}):null)}}]),n}(g.Component);w.propTypes={deptId:j.a.string,extensions:j.a.func,getExtensionList:j.a.func,isLightAgent:j.a.bool,licenseType:j.a.string,location:j.a.string,widgets:j.a.object},n.default=Object(f.connect)(function(e,n){var o=Object(y.t)(e),t=Object(I.c)(e.myInfo.profileId,e.module.profile);return{deptId:o,extensions:Object(y.y)(e,{deptId:o,location:n.location}),widgets:e.module.widgets,licenseType:e.license.licenseType,isLightAgent:t}},{getExtensionList:k.f})(w)}}]);