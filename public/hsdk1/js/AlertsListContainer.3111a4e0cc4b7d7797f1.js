(window.deskappJsonp=window.deskappJsonp||[]).push([[16],{"../components/lib/CheckBox/CheckBox.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=i(a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js")),r=i(a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js")),l=i(a("../components/lib/CheckBox/CheckBox.module.css")),s=i(a("../components/lib/Label/Label.js"));function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.onChange=a.onChange.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),n(t,[{key:"onChange",value:function(e){var t=this.props,a=t.onChange,n=t.checked;a&&a(!n,e)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.name,n=e.checked,r=e.disabled,i=e.palette,c=e.text,d=e.labelPalette,u=e.active,m=e.labelSize,p=e.getRef,f=e.dataId,b=u?l.default[i+"_active"]:"",h=r?l.default.disabled:l.default.pointer;return o.default.createElement("span",{className:l.default.container+" "+h+" "+(c?l.default.layout:l.default.basic)+" "},o.default.createElement("input",{type:"checkbox",className:l.default.input+" "+(n?l.default.checked:""),name:a,checked:n,disabled:r,ref:p}),o.default.createElement("label",{className:l.default["label_"+i]+" "+b+" "+(c?l.default.layoutshrink:""),onClick:this.onChange,"data-id":f},o.default.createElement("span",null)),c&&o.default.createElement("span",{className:l.default.text},o.default.createElement(s.default,{text:c,palette:d,id:t,size:m,type:"title",clipped:!0,onClick:this.onChange})))}}]),t}();t.default=c,c.defaultProps={active:!1,checked:!1,disabled:!1,labelPalette:"default",labelSize:"medium",palette:"primary"},c.propTypes={active:r.default.bool,checked:r.default.bool,dataId:r.default.string,disabled:r.default.bool,getRef:r.default.func,id:r.default.string,labelPalette:r.default.oneOf(["default","primary","secondary","danger","mandatory"]),labelSize:r.default.oneOf(["small","medium","large"]),name:r.default.string,onChange:r.default.func,palette:r.default.oneOf(["primary","danger"]),text:r.default.string},c.propTypesDescription={disabled:" ",checked:" ",active:" ",labelPalette:" ",labelSize:" ",getRef:" ",palette:" ",onChange:" ",text:" "}},"../components/lib/Label/Label.js":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),o=s(a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js")),r=s(a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js")),l=s(a("../components/lib/Label/Label.module.css"));function s(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),n(t,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.type,n=e.palette,r=e.size,s=e.clipped,i=e.name,c=e.title,d=e.onClick,u=e.dataId;return o.default.createElement("label",{className:l.default.label+" "+l.default[a]+" "+l.default[r]+" "+l.default[n]+"\n          "+(s?l.default.dotted:"")+" "+(d?l.default.pointer:l.default.cursor),name:i,"data-title":c,"data-id":u,onClick:d},t)}}]),t}();t.default=i,i.defaultProps={clipped:!1,dataId:"label",palette:"default",size:"medium",text:"Label",type:"title"},i.propTypes={clipped:r.default.bool,dataId:r.default.string,name:r.default.string,onClick:r.default.func,palette:r.default.oneOf(["default","primary","secondary","danger","mandatory"]),size:r.default.oneOf(["small","medium","large"]),text:r.default.string,title:r.default.string,type:r.default.oneOf(["title","subtitle"])},i.propTypesDescription={type:" ",size:" ",name:" ",palette:" ",text:" ",id:" ",clipped:" ",title:" "}},"./src/actions/AgentActions.js":function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/assign.js"),o=a.n(n),r=a("./src/utils/RequestAPI.js"),l=a("./src/utils/Common.js"),s=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/simple-normalizr/es/index.js"),i=a("./src/constants/setup/labels.js"),c=a("./src/constants/agents.js");function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:50,d=(arguments.length>4&&void 0!==arguments[4]&&arguments[4],arguments.length>5&&void 0!==arguments[5]&&arguments[5],a>1?c.f:c.e),u=i.e;return{types:Object(l.m)(d),callAPI:function(l){var i="/api/v1/agents?searchStr="+t+"&from="+a+"&limit="+n+"&status="+c.a+"&isConfirmed=true&departmentId="+e;return Object(r.a)(i,!1,{orgId:l.currentOrgId}).get().then(function(a){return 204==a.responseStatus?{}:""===t?o()(Object(s.b)(a.data,Object(s.a)(Object(s.c)("agent"))),{departmentId:e,status:u}):{result:a.data}})}}}},"./src/actions/automation/AlertsListAction.js":function(e,t,a){"use strict";a.d(t,"d",function(){return m}),a.d(t,"a",function(){return p}),a.d(t,"c",function(){return f}),a.d(t,"e",function(){return b}),a.d(t,"b",function(){return h});var n=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/defineProperty.js"),o=a.n(n),r=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/assign.js"),l=a.n(r),s=a("./src/utils/RequestAPI.js"),i=a("./src/utils/Common.js"),c=a("./src/reducers/selector.js"),d=a("./src/constants/index.js"),u=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/simple-normalizr/es/index.js");function m(){return{types:Object(i.m)("AUTOMATION_ALERTS"),callAPI:function(e){var t=Object(c.t)(e);return Object(s.a)("/api/v1/automationAlerts?departmentId="+t,!1,{orgId:e.currentOrgId}).get().then(function(e){return l()({},Object(u.b)(204!==e.responseStatus?e:[],Object(u.a)(Object(u.c)(d.R.AUTOMATIONALERTS_L,{id:"alertId"}))),{deptId:t,moduleName:d.R.AUTOMATIONALERTS_L})})}}}function p(e){return{types:Object(i.m)("AUTOMATION_ALERTS_CREATE"),callAPI:function(t){var a=Object(c.t)(t);return Object(s.a)("/api/v1/automationAlerts",!1,{orgId:t.currentOrgId}).post(null,e).then(function(e){return{res:e,id:e.alertId,deptId:a,moduleName:d.R.AUTOMATIONALERTS_L}})}}}function f(e){return{types:Object(i.m)("AUTOMATION_ALERT"),callAPI:function(t){var a=Object(c.t)(t);return Object(s.a)("/api/v1/automationAlerts/"+e,!1,{orgId:t.currentOrgId}).get().then(function(t){return l()({},{entities:{automationalerts:o()({},e,t)},result:[e],deptId:a,moduleName:d.R.AUTOMATIONALERTS_L})})}}}function b(e,t){return{types:Object(i.m)("AUTOMATION_ALERT_UPDATE"),callAPI:function(a){var n=Object(c.t)(a);return Object(s.a)("/api/v1/automationAlerts/"+e,!1,{orgId:a.currentOrgId}).put(null,t).then(function(e){return{res:e,id:e.alertId,deptId:n,moduleName:d.R.AUTOMATIONALERTS_L}})}}}function h(e){return{types:Object(i.m)("AUTOMATION_ALERTS_DELETE"),callAPI:function(t,a){var n=Object(c.t)(t);return Object(s.a)("/api/v1/automationAlerts/"+e,!1,{orgId:t.currentOrgId}).del().then(function(t){return{moduleName:d.R.AUTOMATIONALERTS_L,id:e,deptId:n}})}}}},"./src/actions/automation/EmailTemplateActions.js":function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/assign.js"),o=a.n(n),r=a("./src/utils/RequestAPI.js"),l=a("./src/utils/Common.js"),s=a("./src/reducers/selector.js"),i=a("./src/constants/index.js"),c=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/simple-normalizr/es/index.js");function d(e){return{types:Object(l.m)("EMAIL_TEMPLATES"),callAPI:function(t){var a=Object(s.t)(t),n="/api/v1/templates?departmentId="+a;return void 0!==e&&(n+="&module="+e),Object(r.a)(n,!1,{orgId:t.currentOrgId}).get().then(function(e){return o()({},Object(c.b)(204!==e.responseStatus?e:[],Object(c.a)(Object(c.c)(i.R.EMAILTEMPLATES_L,{id:"templateId"}))),{deptId:a,moduleName:i.R.EMAILTEMPLATES_L})})}}}},"./src/actions/roleAction.js":function(e,t,a){"use strict";a.d(t,"b",function(){return c}),a.d(t,"a",function(){return d});var n=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/assign.js"),o=a.n(n),r=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/simple-normalizr/es/index.js"),l=a("./src/utils/RequestAPI.js"),s=a("./src/utils/Common.js"),i=a("./src/constants/index.js");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.Z,n=arguments[3];return{types:Object(s.m)(i.R.ROLE),callAPI:function(s){var c=2*a>500?500:2*a;return Object(l.a)("/api/v1/roles?from="+e+"&limit="+c+(t?"&searchStr=*"+t+"*":"")+(n?"&isVisible=true":""),!1,{orgId:s.currentOrgId}).get().then(function(n){return o()({},Object(r.b)(204!==n.responseStatus?n.data:[],Object(r.a)(Object(r.c)(i.R.ROLE_L))),{from:e,limit:a,isNext:!!n.data&&n.data.length>a,searchStr:t})},function(e){throw e})}}}function d(e){return{types:Object(s.m)("ROLE"),shouldCallAPI:function(){return e.length>=1},callAPI:function(t){return Object(l.a)("/api/v1/rolesByIds?roleIds="+e.join(),!1,{orgId:t.currentOrgId}).get().then(function(e){return Object(r.b)(204!==e.responseStatus?e.data:[],Object(r.a)(Object(r.c)(i.R.ROLE_L)))})}}}},"./src/components/ChannelIcon/ChannelIcon.js":function(e,t,a){"use strict";var n=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=a.n(n),r=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=a.n(r),s=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=a.n(s),c=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=a.n(c),u=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),m=a.n(u),p=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),f=a.n(p),b=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),h=a.n(b),g=a("./node_modules/@zohodesk/icons/lib/Icon/index.js"),_=a.n(g),j=a("../components/lib/Avatar/Avatar.js"),D=a.n(j),I=a("./src/components/avatar/AvatarIcon/AvatarIcon.js"),C=a("./src/utils/ChannelIconMapping.js"),k=a("./src/components/ChannelIcon/ChannelIcon.module.css"),O=a.n(k),y=function(e){function t(e){return l()(this,t),d()(this,(t.__proto__||o()(t)).call(this,e))}return m()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.action,n=e.iconSize,o=e.size,r=e.topicIcon,l=e.topicIconTitle,s=e.topicIconSize,i=e.topicIconColor,c=e.iconClass,d=e.dataId,u=e.className,m=e.palette,p=t&&Object(C.a)()[t.toUpperCase()],b=null,h=null;return p?h=p[a]:b=t,f.a.createElement("span",{className:O.a.container},b?f.a.createElement(D.a,{name:b,size:o,palette:m}):o?h?f.a.createElement(I.a,{name:h,iconSize:n,size:o,iconClass:O.a.iconStyle+" "+(t&&a?O.a[t.toLowerCase()+"_"+a.toLowerCase()]:"")+" "+(c||"")+" ",dataId:d,className:u}):f.a.createElement(D.a,{name:t,size:o,palette:m}):f.a.createElement(_.a,{name:h,size:n,iconClass:c||""}),r?f.a.createElement("span",{className:O.a.thread,"data-title":l},f.a.createElement(_.a,{name:r,size:s,iconClass:O.a["topic_"+i]?O.a["topic_"+i]:""})):null)}}]),t}(p.Component);t.a=y,y.defaultProps={iconSize:"18",name:"phone"},y.propTypes={action:h.a.string,className:h.a.string,dataId:h.a.string,iconClass:h.a.string,iconSize:h.a.string,name:h.a.string,palette:h.a.oneOf(["primary","secondary","info","default"]),size:h.a.string,topicIcon:h.a.string,topicIconColor:h.a.string,topicIconSize:h.a.string,topicIconTitle:h.a.string}},"./src/components/FlipCard/FlipCard.js":function(e,t,a){"use strict";var n=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=a.n(n),r=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=a.n(r),s=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=a.n(s),c=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=a.n(c),u=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),m=a.n(u),p=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),f=a.n(p),b=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),h=a.n(b),g=a("./src/components/avatar/AvatarUser/AvatarUser.js"),_=a("./src/components/avatar/AvatarIcon/AvatarIcon.js"),j=a("../components/lib/CheckBox/CheckBox.js"),D=a.n(j),I=a("../components/lib/Layout/index.js"),C=a("./src/components/ChannelIcon/ChannelIcon.js"),k=a("./src/components/FlipCard/FlipCard.module.css"),O=a.n(k),y=a("./src/components/setup/timetrack/utils.js"),A=function(e){function t(e){l()(this,t);var a=d()(this,(t.__proto__||o()(t)).call(this,e));return a.onChange=a.onChange.bind(a),a.onClick=a.onClick.bind(a),a}return m()(t,e),i()(t,[{key:"onClick",value:function(e){this.props.noNeedFlip||Object(y.a)(e)}},{key:"onChange",value:function(e,t){var a=this.props.onChange;Object(y.a)(t),a(this.props.id,e,t)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.action,n=e.name,o=e.isChecked,r=e.noNeedFlip,l=e.size,s=e.channel,i=e.isPaidUser,c=e.isPortalUser,d=e.src,u=e.icon,m=e.iconSize,p=e.iconClass,b=e.ticListContainer,h=e.ticList,j=e.dataId,k=e.className,y=e.palette,A=e.frontClass,v=e.needTitle;return f.a.createElement("div",{className:O.a[l]+"  "+(r?O.a.flipNone:o?O.a.notFlip:O.a.flip),onClick:this.onClick,"data-id":b},f.a.createElement("div",{className:O.a.container,"data-id":h},r?null:f.a.createElement(I.Container,{align:"both",className:O.a.front+" "+(A||"")},f.a.createElement(D.a,{checked:o,name:"category",onChange:this.onChange,id:"checkbox_"+t,dataId:"listViewCheckBox_"+t})),f.a.createElement(I.Container,{align:"both",className:O.a.back},s&&a?f.a.createElement(C.a,{name:s,action:a,size:l,iconSize:m,iconClass:p,dataId:s,className:k,palette:y}):u?f.a.createElement(_.a,{name:u,iconSize:m,size:l,iconClass:p,dataId:u,className:k}):f.a.createElement(g.a,{name:n,size:l,isPaid:i,isPortal:c,src:d,dataId:j,needTitle:v}))))}}]),t}(p.Component);t.a=A,A.propTypes={action:h.a.string,channel:h.a.string,className:h.a.string,dataId:h.a.string,frontClass:h.a.string,icon:h.a.string,iconClass:h.a.string,iconSize:h.a.string,id:h.a.string.isRequired,isChecked:h.a.bool,isPaidUser:h.a.bool,isPortalUser:h.a.bool,name:h.a.string,needTitle:h.a.bool,noNeedFlip:h.a.bool,onChange:h.a.func,palette:h.a.oneOf(["primary","secondary","info","default"]),size:h.a.string,src:h.a.string,ticList:h.a.string,ticListContainer:h.a.string},A.defaultProps={size:"medium",needTitle:!0}},"./src/components/avatar/AvatarIcon/AvatarIcon.js":function(e,t,a){"use strict";var n=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=a.n(n),r=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=a.n(r),s=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=a.n(s),c=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=a.n(c),u=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),m=a.n(u),p=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),f=a.n(p),b=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),h=a.n(b),g=a("./src/components/avatar/AvatarIcon/AvatarIcon.module.css"),_=a.n(g),j=a("./node_modules/@zohodesk/icons/lib/Icon/index.js"),D=a.n(j),I=function(e){function t(){return l()(this,t),d()(this,(t.__proto__||o()(t)).apply(this,arguments))}return m()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.size,n=e.iconSize,o=e.iconClass,r=e.onClick,l=e.palette,s=e.dataId,i=e.className,c=e.isIconBold;return f.a.createElement("span",{className:_.a.container+" "+_.a[a]+" "+_.a[l]+" "+(i||""),onClick:r,"data-id":"ZD-chEmail1"===t?"autoId_215":"ZD-chPhone"===t?"autoId_885":s},f.a.createElement(D.a,{name:t,size:n,iconClass:_.a["text_"+o]?_.a["text_"+o]:o||null,isBold:c}))}}]),t}(f.a.Component);t.a=I,I.defaultProps={iconSize:"15",name:"ZD-addAgent",palette:"default",size:"medium",isIconBold:!1},I.propTypes={className:h.a.string,dataId:h.a.string,iconClass:h.a.string,iconSize:h.a.string,isIconBold:h.a.bool,name:h.a.string,onClick:h.a.func,palette:h.a.oneOf(["default","primary","secondary","success","danger"]),size:h.a.string}},"./src/components/avatar/AvatarUser/AvatarUser.js":function(e,t,a){"use strict";var n=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=a.n(n),r=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=a.n(r),s=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=a.n(s),c=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=a.n(c),u=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),m=a.n(u),p=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),f=a.n(p),b=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),h=a.n(b),g=a("./src/components/avatar/AvatarUser/AvatarUser.module.css"),_=a.n(g),j=a("../components/lib/Avatar/Avatar.js"),D=a.n(j),I=a("./node_modules/@zohodesk/icons/lib/Icon/index.js"),C=a.n(I),k=a("./src/fz-i18n/index.js"),O=function(e){function t(e){return l()(this,t),d()(this,(t.__proto__||o()(t)).call(this,e))}return m()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.src,a=e.name,n=e.size,o=e.onClick,r=e.title,l=e.isPaid,s=e.isPortal,i=e.dataId,c=e.needTitle;return f.a.createElement("div",{className:_.a.container+" "+_.a[n],"data-id":i||a},l?f.a.createElement("span",{"data-title":k.h.getI18NValue("support.customerPortal.users.paidUser"),className:_.a.paid},f.a.createElement(C.a,{name:"ZD-paiduser"})):"",s?f.a.createElement("span",{"data-title":k.h.getI18NValue("crm.end.user"),className:_.a.portal},f.a.createElement(C.a,{name:"ZD-globe1"})):"",f.a.createElement(D.a,{src:t,name:a,title:r,onClick:o,size:n,needTitle:c}))}}]),t}(f.a.Component);t.a=O,O.defaultProps={size:"medium",needTitle:!0},O.propTypes={dataId:h.a.string,isPaid:h.a.bool,isPortal:h.a.bool,name:h.a.string,needTitle:h.a.bool,onClick:h.a.func,size:h.a.string,src:h.a.string,title:h.a.string}},"./src/containers/AlertsListContainer/AlertsListContainer.js":function(e,t,a){"use strict";a.r(t);var n,o=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/defineProperty.js"),r=a.n(o),l=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),s=a.n(l),i=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),c=a.n(i),d=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),u=a.n(d),m=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),p=a.n(m),f=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),b=a.n(f),h=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),g=a.n(h),_=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),j=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react-redux/es/index.js"),D=a("./src/actions/index.js"),I=a("./src/reducers/selector.js"),C=a("./src/actions/AgentActions.js"),k=a("./src/actions/roleAction.js"),O=a("./src/components/FlipCard/FlipCard.js"),y=a("./src/containers/AlertsListContainer/AlertsListContainer.module.css"),A=a.n(y),v=a("./node_modules/@zohodesk/icons/lib/Icon/index.js"),z=a.n(v),E=function(e){function t(){return c()(this,t),p()(this,(t.__proto__||s()(t)).apply(this,arguments))}return b()(t,e),u()(t,[{key:"render",value:function(){var e=this;return g.a.createElement("div",{className:A.a.alrtnamedescDiv},g.a.createElement("div",{className:A.a.alertBlock,onClick:function(){return e.props.editAlertDetail(e.props.url)}},g.a.createElement("span",{className:A.a.alrtTtlNme},this.props.name)),g.a.createElement("span",{className:A.a.alrtIcnsSpnDiv},g.a.createElement("span",{className:A.a.alrtIcnSpn+" "+A.a.editBlue,"data-title":"Edit",onClick:function(){return e.props.editAlertDetail(e.props.url)}},g.a.createElement(z.a,{name:"ZD-pen2"})),g.a.createElement("span",{"data-title":"Delete",className:A.a.alrtIcnSpn+" "+A.a.delRed,onClick:function(){return e.props.deleteAlertDetail(e.props.id)}},g.a.createElement(z.a,{name:"ZD-delete2"}))),g.a.createElement("div",{className:A.a.alrtdscrp},this.props.tempName))}}]),t}(g.a.Component);E.PropTypes=(n={deleteAlertDetail:_.PropTypes.func,tempName:_.PropTypes.string,name:_.PropTypes.string,module:_.PropTypes.string,push:_.PropTypes.func,url:_.PropTypes.string},r()(n,"name",_.PropTypes.string),r()(n,"id",_.PropTypes.string),n);var T=a("./src/actions/automation/EmailTemplateActions.js"),Z=a("./src/actions/automation/AlertsListAction.js"),P=a("./src/utils/setup/common.js"),w=function(e){function t(e){c()(this,t);var a=p()(this,(t.__proto__||s()(t)).call(this,e));return a.deleteAlertDetail=a.deleteAlertDetail.bind(a),a.editAlertDetail=a.editAlertDetail.bind(a),a}return b()(t,e),u()(t,[{key:"deleteAlertDetail",value:function(e){confirm("Are you delete this alert?")&&this.props.deleteAlert(e)}},{key:"editAlertDetail",value:function(e){var t=this;this.props.getTeamsList().then(),this.props.getRolesList(0,null,10).then(),this.props.getDepartmentAgents(this.props.deptId).then(function(a){return t.props.push({pathname:e})})}},{key:"componentWillMount",value:function(){this.props.getAlertsListAPI().then(),this.props.getEmailTemplateListAPI().then()}},{key:"render",value:function(){var e=this,t=this.props,a=t.alertsDetails,n=t.templateDetails;return g.a.createElement("div",{className:A.a.alrtCntr},this.props.alertsList.map(function(t,o){var r=a[t]||{},l=r.name,s=r.alertId,i=r.emailTemplateId,c=n[i]?n[i].templateName:null,d=e.props.paramMap,u=(d.page,d.orgName),m=d.deptName,p=d.depOrModuleName,f=e.props.subModule,b=Object(P.d)(p,e.props.setupModuleName),h="/"+u+"/"+m+b[f].url.substring(0,b[f].url.indexOf("/list"))+"/edit/"+s;return g.a.createElement("div",{className:A.a.alertListsDiv,key:o},g.a.createElement(O.a,{"data-title":r.module,size:"xmedium",noNeedFlip:!0,icon:{tickets:"ZD-tickets30",contacts:"ZD-zdContacts",tasks:"ZD-task30",products:"ZD-products2",accounts:"ZD-zdAccounts"}[r.module]}),g.a.createElement(E,{name:l,tempName:c,id:s,deleteAlertDetail:e.deleteAlertDetail,editAlertDetail:e.editAlertDetail,url:h}))}))}}]),t}(g.a.Component);t.default=Object(j.connect)(function(e){return{paramMap:e.routing.paramMap,setupModuleName:Object(P.c)(e),alertsList:e.departmentSpecificState[Object(I.t)(e)].automationAlerts||[],emailTemplates:e.departmentSpecificState[Object(I.t)(e)].emailTemplates||[],alertsDetails:e.module.automationalerts||{},templateDetails:e.module.emailtemplates||{},deptId:Object(I.t)(e)}},{push:D.L,getAlertsListAPI:Z.d,getEmailTemplateListAPI:T.a,deleteAlert:Z.b,getDepartmentAgents:C.a,getTeamsList:D.u,getRolesList:k.b})(w);w.PropTypes=r()({getAlertsListAPI:_.PropTypes.func,getEmailTemplateListAPI:_.PropTypes.func,deptId:_.PropTypes.string,alertsList:_.PropTypes.array,emailTemplates:_.PropTypes.array,templateId:_.PropTypes.number},"deptId",_.PropTypes.number)},"./src/containers/AlertsListContainer/AlertsListContainer.module.css":function(e,t,a){e.exports={alrtCntr:"zd-alertslistcontainer-alrtCntr zd26201135e6 zdcded585cf4",alrtLstIcnDiv:"zd-alertslistcontainer-alrtLstIcnDiv",alertListsDiv:"zd-alertslistcontainer-alertListsDiv",alrtTtlNme:"zd-alertslistcontainer-alrtTtlNme zd6063afa107",alrtdscrp:"zd-alertslistcontainer-alrtdscrp",alrtnamedescDiv:"zd-alertslistcontainer-alrtnamedescDiv",alertBlock:"zd-alertslistcontainer-alertBlock",alrtIcnsSpnDiv:"zd-alertslistcontainer-alrtIcnsSpnDiv",alrtIcnSpn:"zd-alertslistcontainer-alrtIcnSpn",editBlue:"zd-alertslistcontainer-editBlue",delRed:"zd-alertslistcontainer-delRed"}},"./src/utils/ChannelIconMapping.js":function(e,t,a){"use strict";function n(e,t){var a=void 0,n="";return e?"OFFLINE_CHAT"==(a=e.channel)?n="missed":e.isDraft?n="draft":e.isForward?n="forward":"in"===e.direction?n="incoming":"out"===e.direction&&(n="outgoing"):(a=t||"",n="default"),{channelName:a,action:n}}function o(e){return{in:{icon:"ZD-emailIn",bordercolor:"primary",color:"primary",size:"10"},out:{icon:"ZD-emailOut",bordercolor:"primary",color:"primary",size:"10"},dft:{icon:"ZD-pen2",bordercolor:"primary",color:"primary",size:"8"},fwd:{icon:"ZD-emailFwd",bordercolor:"primary",color:"primary",size:"6"},feedback:{icon:"ZD-feedback",bordercolor:"primary",color:"primary",size:"10"},comment:{icon:"ZD-zdeskCommentfilled",bordercolor:"primary",color:"primary",size:"8"},failed:{icon:"ZD-notifiExclamation",bordercolor:"primary",color:"danger",size:"10"}}[e]}function r(){return{EMAIL:{default:"ZD-chEmail1",incoming:"ZD-chEmailIn",outgoing:"ZD-chEmailOut",draft:"ZD-chEmailDft",forward:"ZD-chEmailFwd",forwardDraft:"ZD-forwarddft",missed:"ZD-chEmailMis"},FACEBOOK:{default:"ZD-chFacebook",incoming:"ZD-chFacebookIn",outgoing:"ZD-chFacebookOut",draft:"ZD-chFacebookDft",forward:"ZD-chEmailFwd",forwardDraft:"ZD-forwarddft",missed:"ZD-chFacebookMis"},FACEBOOK_DM:{default:"ZD-chFacebookDmOut",incoming:"ZD-chFacebookDmOut",outgoing:"ZD-chFacebookDmOut",draft:"ZD-chFacebookDmOut",forward:"ZD-chFacebookDmOut",forwardDraft:"ZD-chFacebookDmOut",missed:""},TWITTER:{default:"ZD-chTwitter",incoming:"ZD-chTwitterIn",outgoing:"ZD-chTwitterOut",draft:"ZD-chTwitterDft",forward:"ZD-chEmailFwd",forwardDraft:"ZD-forwarddft",missed:"ZD-chTwitterMis"},FORUMS:{default:"ZD-chForums",incoming:"ZD-chForumsIn",outgoing:"ZD-chForumsOut",draft:"ZD-chForumsDft",forward:"ZD-chEmailFwd",forwardDraft:"ZD-forwarddft",missed:"ZD-chForumsMis"},CHAT:{default:"ZD-chChat",incoming:"ZD-chChatIn",outgoing:"ZD-chEmailOut",draft:"ZD-chEmailDft",forward:"ZD-chEmailFwd",forwardDraft:"ZD-forwarddft",missed:"ZD-chChatMis"},OFFLINE_CHAT:{default:"ZD-chChat",incoming:"ZD-chChatIn",outgoing:"ZD-chEmailOut",draft:"ZD-chEmailDft",forward:"ZD-chEmailFwd",forwardDraft:"ZD-forwarddft",missed:"ZD-chChatMis"},ONLINE_CHAT:{default:"ZD-chChat",incoming:"ZD-chChatIn",outgoing:"ZD-chEmailOut",draft:"ZD-chEmailDft",forward:"ZD-chEmailFwd",forwardDraft:"ZD-forwarddft",missed:"ZD-chChatMis"},PHONE:{default:"ZD-activityCalls",incoming:"ZD-chPhoneIn",outgoing:"ZD-chPhoneOut",draft:"ZD-chEmailDft",forward:"ZD-chEmailFwd",forwardDraft:"ZD-forwarddft",missed:"ZD-chPhoneMis"},WEB:{default:"ZD-chWeb",incoming:"ZD-chWebIn",out:"ZD-chEmailOut",draft:"ZD-chEmailDft",forward:"ZD-chEmailFwd",forwardDraft:"ZD-forwarddft",missed:"ZD-chWebMis"},CUSTOMERPORTAL:{default:"ZD-chWeb",incoming:"ZD-chWebIn",out:"ZD-chEmailOut",draft:"ZD-chEmailDft",forward:"ZD-chEmailFwd",forwardDraft:"ZD-forwarddft",missed:"ZD-chWebMis"},FEEDBACK:{default:"ZD-chFeedback",incoming:"ZD-chFeedback",out:"ZD-chFeedbackOut",draft:"ZD-chEmailDft",forward:"ZD-chEmailFwd",forwardDraft:"ZD-forwarddft",missed:"ZD-chFeedbackMis"}}}a.d(t,"c",function(){return n}),a.d(t,"b",function(){return o}),a.d(t,"a",function(){return r})}}]);