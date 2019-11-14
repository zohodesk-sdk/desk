(window.deskappJsonp=window.deskappJsonp||[]).push([[35],{"../components/lib/Button/Button.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=i(n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js")),l=i(n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js")),s=i(n("../components/lib/Button/Button.module.css")),r=n("../components/lib/utils/dummyFunction.js");function i(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.palette,a=e.disabled,l=e.size,r=e.onClick,i=e.rounded,c=e.status,d=e.children,p=e.isBold,u=e.dataId,m=e.needAppearance,b=e.className,h=e.getRef,f=m?s.default[n.toLowerCase()]+" "+(i?s.default.rounded:"")+"   "+(d?s.default["button_"+l.toLowerCase()]:s.default[l.toLowerCase()]):""+s.default.default;return o.default.createElement("button",{className:(b||"")+" "+f+" "+(p?s.default.bold:"")+"  ","data-id":a?u+"_disabled":u,disabled:a||"loading"===c.toLowerCase(),onClick:r,type:"button",ref:h},d||t,"none"!==c&&m&&o.default.createElement("div",{className:s.default.overlay},o.default.createElement("div",{className:"loading"===c.toLowerCase()?s.default.loading:s.default.success},o.default.createElement("div",{className:s.default.element}))))}}]),t}();t.default=c,c.defaultProps={children:null,dataId:"buttonComp",disabled:!1,isBold:!0,needAppearance:!0,onClick:r.dummyFunction,palette:"primary",rounded:!1,size:"medium",status:"none",text:"Button"},c.propTypes={children:l.default.node,className:l.default.string,dataId:l.default.string,disabled:l.default.bool,getRef:l.default.func,isBold:l.default.bool,needAppearance:l.default.bool,onClick:l.default.func,palette:l.default.oneOf(["plainPrimary","plainSecondary","primary","primaryFilled","danger","dangerFilled","secondary","secondaryFilled","successFilled","info"]),rounded:l.default.bool,size:l.default.oneOf(["small","medium","large","xlarge"]),status:l.default.oneOf(["loading","success","none"]),text:l.default.string},c.propTypesDescription={onClick:" ",text:" ",palette:" ",disabled:" ",size:" ",rounded:" ",status:" ",isBold:" ",children:" "}},"./src/components/DotSeparator/DotSeparator.js":function(e,t,n){"use strict";var a=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=n.n(a),l=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),s=n.n(l),r=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=n.n(r),c=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=n.n(c),p=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),u=n.n(p),m=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),b=n.n(m),h=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),f=n.n(h),g=n("./src/components/DotSeparator/DotSeparator.module.css"),k=n.n(g),_=function(e){function t(e){return s()(this,t),d()(this,(t.__proto__||o()(t)).call(this,e))}return u()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.type,a=e.palette,o=e.wrap,l=e.shrink,s=e.aligndirection,r=t.filter(function(e){return null!=e}),i=0;return b.a.createElement("div",{className:k.a.container+" "+k.a[s]+" "+(o?k.a.wrap:"")},r.map(function(e,t){if(e)return r.length-1==t||"column"==s?e&&b.a.createElement("span",{className:""+(l?k.a.shrink:""),key:i++},e):e&&b.a.createElement(b.a.Fragment,{key:t},b.a.createElement("span",{className:l?k.a.shrink:"",key:i++},e),b.a.createElement("span",{className:k.a.separator+" "+k.a[a]+" "+k.a[n]+" ",key:i++},"slash"==n?"/":"arrow"==n?">":"comma"==n?",":"•"))}))}}]),t}(b.a.Component);t.a=_,_.defaultProps={palette:"default",type:"dot",wrap:!1,shrink:!1},_.propTypes={aligndirection:f.a.string,children:f.a.any,palette:f.a.oneOf(["default","primary","secondary"]),shrink:f.a.bool,type:f.a.oneOf(["dot","slash","arrow","comma","none"]),wrap:f.a.bool}},"./src/components/layout/SetupDetailLayout/index.js":function(e,t,n){"use strict";var a=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=n.n(a),l=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),s=n.n(l),r=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=n.n(r),c=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=n.n(c),p=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),u=n.n(p),m=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),b=n.n(m),h=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),f=n.n(h),g=n("../components/lib/Layout/index.js"),k=n("./node_modules/@zohodesk/icons/lib/Icon/index.js"),_=n.n(k),C=n("./src/components/layout/SetupDetailLayout/SetupDetailLayout.module.css"),y=n.n(C),j=function(e){function t(e){s()(this,t);var n=d()(this,(t.__proto__||o()(t)).call(this,e));return n.state={isHelpInfoOpen:!1},n.toggleHelpInfo=n.toggleHelpInfo.bind(n),n}return u()(t,e),i()(t,[{key:"toggleHelpInfo",value:function(){var e=this.state.isHelpInfoOpen;this.setState({isHelpInfoOpen:!e})}},{key:"render",value:function(){var e=this,t=this.state.isHelpInfoOpen,n=this.props,a=n.children,o=n.needHelpInfo,l=n.getHelpInfo,s=n.helpInfoTitle;return b.a.createElement(g.Container,{isScrollAttribute:!0},b.a.Children.map(a,function(t){return t&&t.type==x?b.a.cloneElement(t,{openHelpInfo:e.toggleHelpInfo,needHelpInfo:o}):t}),l?b.a.createElement(g.Box,{className:y.a.popup+" "+(t?y.a.open:y.a.close)},b.a.createElement(g.Container,null,b.a.createElement(g.Box,null,b.a.createElement(g.Container,{alignBox:"row",align:"vertical",className:y.a.infoHeader},b.a.createElement(g.Box,{className:y.a.infoIcon},b.a.createElement(_.a,{name:"ZD-info31"})),b.a.createElement(g.Box,{flexible:!0,className:y.a.infoText},s),b.a.createElement(g.Box,null,b.a.createElement("span",{onClick:this.toggleHelpInfo,className:y.a.infoClose},b.a.createElement(_.a,{name:"ZD-close"}))))),b.a.createElement(g.Box,{flexible:!0,scroll:"vertical",className:y.a.infoFooter},l()))):null)}}]),t}(b.a.Component),v=j;j.propTypes={children:f.a.element,getHelpInfo:f.a.func,helpInfoTitle:f.a.string,needHelpInfo:f.a.bool},j.defaultProps={helpInfoTitle:"Page Tips",needHelpInfo:!1};var x=function(e){function t(e){return s()(this,t),d()(this,(t.__proto__||o()(t)).call(this,e))}return u()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.needBack,a=e.onBackClick,o=e.openHelpInfo,l=e.needHelpInfo,s=e.needHelpInfoWrapper,r=e.getLeftPlaceHolder,i=e.getRightPlaceHolder,c=e.leftClassName,d=e.rightClassName,p=e.isCustomizedHeader,u=e.headerCustomStyle;return b.a.createElement(g.Box,{className:!0===p?u:y.a.header},b.a.createElement(g.Container,{alignBox:"row",align:"vertical"},b.a.createElement(g.Box,{className:y.a.back},n?b.a.createElement("span",{className:y.a.backIcon,onClick:a},b.a.createElement(_.a,{name:"ZD-back"})):null),b.a.createElement(g.Box,{flexible:!r&&!i,className:y.a.title},t),r?b.a.createElement(g.Box,{flexible:!0,shrink:!0,adjust:!!i,className:c},b.a.createElement(g.Container,{align:"vertical",alignBox:"row"},r())):null,i?b.a.createElement(g.Box,{flexible:!0,shrink:!0,adjust:!!r,className:d},b.a.createElement(g.Container,{align:"vertical",alignBox:"row",className:y.a.rightPanel},i())):null,l?b.a.createElement(g.Box,null,s?b.a.createElement("span",{className:y.a.helpInfoCont},b.a.createElement("span",{className:y.a.helpInfo,onClick:o},b.a.createElement(_.a,{name:"ZD-info31"}))):b.a.createElement("span",{className:y.a.helpInfo+" "+y.a.mr15,onClick:o},b.a.createElement(_.a,{name:"ZD-info31"}))):null))}}]),t}(m.Component);x.propTypes={getLeftPlaceHolder:f.a.func,getRightPlaceHolder:f.a.func,headerCustomStyle:f.a.object,isCustomizedHeader:f.a.bool,leftClassName:f.a.string,needBack:f.a.bool,needHelpInfo:f.a.bool,needHelpInfoWrapper:f.a.bool,onBackClick:f.a.func,openHelpInfo:f.a.func,rightClassName:f.a.string,title:f.a.string},x.defaultProps={needBack:!1,needHelpInfo:!1,needHelpInfoWrapper:!1};var N=function(e){function t(e){return s()(this,t),d()(this,(t.__proto__||o()(t)).call(this,e))}return u()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.needPadding,a=e.className;return b.a.createElement(g.Box,{flexible:!0,scroll:"vertical",className:(a||"")+" "+y.a.content+" "+(n?y.a.padding:"")+" ",isScrollAttribute:!0},t)}}]),t}(m.Component);N.propTypes={children:f.a.element,className:f.a.bool,needPadding:f.a.bool},N.defaultProps={needPadding:!0};var E=function(e){function t(e){return s()(this,t),d()(this,(t.__proto__||o()(t)).call(this,e))}return u()(t,e),i()(t,[{key:"render",value:function(){var e=this.props.children;return b.a.createElement(g.Box,null,e)}}]),t}(m.Component);E.propTypes={children:f.a.element},n.d(t,"b",function(){return v}),n.d(t,"d",function(){return x}),n.d(t,"c",function(){return E}),n.d(t,"a",function(){return N})},"./src/components/setup/UserControl/TeamsList/UserControlTeamsList.module.css":function(e,t,n){e.exports={teamList:"zd-usercontrolteamslist-teamList",title:"zd-usercontrolteamslist-title zd6063afa107",subTitle:"zd-usercontrolteamslist-subTitle",agentTxt:"zd-usercontrolteamslist-agentTxt",agentCount:"zd-usercontrolteamslist-agentCount",socialIcon:"zd-usercontrolteamslist-socialIcon",editIcon:"zd-usercontrolteamslist-editIcon",deleIcon:"zd-usercontrolteamslist-deleIcon",iconSize:"zd-usercontrolteamslist-iconSize"}},"./src/components/setup/header/Button/Button.js":function(e,t,n){"use strict";var a=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=n.n(a),l=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),s=n.n(l),r=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=n.n(r),c=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=n.n(c),p=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),u=n.n(p),m=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),b=n.n(m),h=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),f=n.n(h),g=n("./src/components/setup/header/Button/HeaderButton.module.css"),k=n.n(g),_=n("../components/lib/Button/Button.js"),C=n.n(_),y=function(e){function t(e){return s()(this,t),d()(this,(t.__proto__||o()(t)).call(this,e))}return u()(t,e),i()(t,[{key:"render",value:function(){var e=this.props,t=e.palette,n=e.text,a=e.onClick,o=e.id;return b.a.createElement("div",{className:k.a.container},b.a.createElement(C.a,{id:o,onClick:a,palette:t,size:"medium",text:n}))}}]),t}(b.a.Component);t.a=y,y.defaultProps={palette:"primaryFilled",text:""},y.propTypes={id:f.a.string,onClick:f.a.func,palette:f.a.string,text:f.a.string}},"./src/components/setup/header/SelectDropdown/SelectDropdown.js":function(e,t,n){"use strict";var a=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=n.n(a),l=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),s=n.n(l),r=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=n.n(r),c=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=n.n(c),p=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),u=n.n(p),m=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),b=n.n(m),h=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),f=n.n(h),g=n("./src/components/setup/header/SelectDropdown/SelectDropdown.module.css"),k=n.n(g),_=n("../components/lib/DropBox/DropBox.js"),C=n.n(_),y=n("../components/lib/Popup/Popup.js"),j=n.n(y),v=n("../components/lib/ListItem/ListItem.js"),x=n.n(v),N=n("../components/lib/TextBox/TextBox.js"),E=n.n(N),I=n("../components/lib/DropDown/DropDownHeading.js"),z=n.n(I),T=n("./node_modules/@zohodesk/icons/lib/Icon/index.js"),B=n.n(T),w=n("../components/lib/Layout/index.js"),P=function(e){function t(e){s()(this,t);var n=d()(this,(t.__proto__||o()(t)).call(this,e));return n.handleTogglePopup=n.handleTogglePopup.bind(n),n.handleClick=n.handleClick.bind(n),n}return u()(t,e),i()(t,[{key:"handleClick",value:function(e,t,n,a){var o=this.props,l=o.onClick,s=o.togglePopup;l&&l(e,t,n,a),s(a,"bottomRight")}},{key:"handleTogglePopup",value:function(e){(0,this.props.togglePopup)(e,"bottomRight")}},{key:"render",value:function(){var e=this,t=this.props,n=t.title,a=t.selectedText,o=t.isPopupOpen,l=t.isPopupReady,s=t.getTargetRef,r=t.getContainerRef,i=t.removeClose,c=t.suggestions,d=t.selectedId,p=t.isSearchRequired,u=void 0!==p&&p,m=c.idKey,h=c.valueKey,f=c.options,g=void 0===f?[]:f;return b.a.createElement("span",{ref:s,className:k.a.container,onClick:i},b.a.createElement("span",{className:k.a.departName,onClick:this.handleTogglePopup},a),b.a.createElement("span",{className:k.a.departIcon,onClick:this.handleTogglePopup},b.a.createElement(B.a,{name:"ZD-down1",size:"6"})),b.a.createElement(C.a,{size:"medium",boxPosition:"bottomRight",isArrow:!0,isAnimate:!0,right:"-25",isActive:o&&l,getRef:r},b.a.createElement(w.Container,{alignBox:"column",className:k.a.rulesPopup},b.a.createElement(w.Box,{className:k.a.rulesDepart},b.a.createElement(z.a,{text:n})),u?b.a.createElement(w.Box,{className:k.a.searchDepart},b.a.createElement(E.a,{name:"Test",id:"Test",maxLength:"150",placeHolder:"Search Department"})):null,b.a.createElement(w.Box,{scroll:"vertical",flexible:!0,shrink:!0},g.map(function(t,n){return b.a.createElement(x.a,{key:n,autoHover:!0,value:t[h],active:d==t[m],id:t[m],onClick:e.handleClick})})))))}}]),t}(b.a.Component);P.propTypes={getContainerRef:f.a.func,getTargetRef:f.a.func,isPopupOpen:f.a.bool,isPopupReady:f.a.bool,isSearchRequired:f.a.bool,onClick:f.a.func,removeClose:f.a.func,selectedId:f.a.string,selectedText:f.a.string,suggestions:f.a.shape({idKey:f.a.string,valueKey:f.a.string,options:f.a.array}),title:f.a.string},t.a=j()(P)},"./src/containers/Setup/Organization/teams/TeamsListContainer.js":function(e,t,n){"use strict";n.r(t);var a=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=n.n(a),l=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),s=n.n(l),r=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=n.n(r),c=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=n.n(c),p=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),u=n.n(p),m=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),b=n.n(m),h=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),f=n.n(h),g=n("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react-redux/es/index.js"),k=n("./src/components/setup/header/Button/Button.js"),_=n("./src/fz-i18n/index.js"),C=n("./src/actions/index.js"),y=(n("./src/reducers/selector.js"),n("./src/components/setup/header/SelectDropdown/SelectDropdown.js")),j=n("../components/lib/Layout/index.js"),v=n("./src/components/setup/UserControl/TeamsList/UserControlTeamsList.module.css"),x=n.n(v),N=n("./node_modules/@zohodesk/icons/lib/Icon/index.js"),E=n.n(N),I=n("./src/components/DotSeparator/DotSeparator.js"),z=function(e){function t(e){return s()(this,t),d()(this,(t.__proto__||o()(t)).call(this,e))}return u()(t,e),i()(t,[{key:"onClickTeam",value:function(){this.props.onView(this.props.id)}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.description,a=e.onEdit,o=e.onDelete,l=e.agentCount,s=e.teamCount,r=e.roleCount,i=e.rolesandSubCount;e.onView;return b.a.createElement(j.Container,{alignBox:"row",align:"vertical",className:x.a.teamList,isCover:!1},b.a.createElement(j.Box,{flexible:!0},b.a.createElement("span",{className:x.a.title,onClick:this.onClickTeam.bind(this)},t),n&&b.a.createElement("div",{className:x.a.subTitle},n),b.a.createElement(I.a,{type:"comma",palette:"secondary"},l?b.a.createElement("span",{className:x.a.agentTxt},l):null,s?b.a.createElement("span",{className:x.a.agentTxt},s):null,r?b.a.createElement("span",{className:x.a.agentTxt},r):null,i?b.a.createElement("span",{className:x.a.agentTxt},i):null)),b.a.createElement(j.Box,null,b.a.createElement("span",{className:x.a.socialIcon},a&&b.a.createElement("span",{className:x.a.editIcon,onClick:a},b.a.createElement(E.a,{name:"ZD-pen2",iconClass:x.a.iconSize})),o&&b.a.createElement("span",{className:x.a.deleIcon,onClick:o},b.a.createElement(E.a,{name:"ZD-delete2",iconClass:x.a.iconSize})))))}}]),t}(b.a.Component),T=z;z.propTypes={agentCount:f.a.string,description:f.a.string,id:f.a.string,onDelete:f.a.func,onEdit:f.a.func,onView:f.a.func,roleCount:f.a.string,rolesandSubCount:f.a.string,teamCount:f.a.string,title:f.a.string};var B=n("./src/components/layout/SetupDetailLayout/index.js"),w=(n("./src/containers/Setup/SetupPageContainer.module.css"),function(e){function t(e){s()(this,t);var n=d()(this,(t.__proto__||o()(t)).call(this,e));return n.getLeftPlaceHolder=n.getLeftPlaceHolder.bind(n),n.onDepartmentClick=n.onDepartmentClick.bind(n),n.onClickNewTeam=n.onClickNewTeam.bind(n),n.getRightPlaceHolder=n.getRightPlaceHolder.bind(n),n.onClickTeam=n.onClickTeam.bind(n),n}return u()(t,e),i()(t,[{key:"componentDidMount",value:function(){this.props.getTeamsList(this.props.depId)}},{key:"onDepartmentClick",value:function(e,t,n,a){var o=this,l=this.props.paramMap,s=l.setupModule,r=void 0===s?"":s,i=l.orgName,c=l.deptName;this.props.getTeamsList(e).then(function(){o.props.push({pathname:"/"+i+"/"+c+"/setup/"+r+"/"+o.props.departmentsObj[e].sanitizedName+"/list"})})}},{key:"getLeftPlaceHolder",value:function(){var e=this.props.department,t={idKey:"id",valueKey:"name",options:[]};for(var n in e)e.hasOwnProperty(n)&&"allDepartment"!==e[n].id&&t.options.push({id:e[n].id,name:e[n].name});var a=this.props,o=a.depName,l=a.depId;return b.a.createElement(y.a,{title:_.h.getI18NValue("support.label.departments"),selectedText:o,suggestions:t,selectedId:l,isSearchRequired:!1,onClick:this.onDepartmentClick})}},{key:"onClickNewTeam",value:function(e){var t=this.props.paramMap,n=t.setupModule,a=void 0===n?"":n,o=t.orgName,l=t.deptName;this.props.push({pathname:"/"+o+"/"+l+"/setup/"+a+"/"+this.props.departmentName+"/new"})}},{key:"getRightPlaceHolder",value:function(){return b.a.createElement(k.a,{text:_.h.getI18NValue("support.setup.label.newteam"),palette:"primaryFilled",onClick:this.onClickNewTeam})}},{key:"onClickTeam",value:function(e){var t=this.props.paramMap,n=t.setupModule,a=void 0===n?"":n,o=t.orgName,l=t.deptName;this.props.push({pathname:"/"+o+"/"+l+"/setup/"+a+"/"+this.props.departmentName+"/details/"+e})}},{key:"render",value:function(){var e=this,t=this.props,n=t.teamsObject,a=t.teamsIdList.map(function(t){var a=n[t],o=a.id,l=a.name,s=(a.departmentId,a.description),r=a.roles,i=a.rolesWithSubordinates,c=a.subTeams,d=a.agents,p=(a.derivedAgents,d.length),u=c.length,m=r.length,h=i.length;return b.a.createElement(T,{key:o,id:o,title:l,description:s,onEdit:function(){},onDelete:function(){},onView:e.onClickTeam,agentCount:p?p+" "+(p>1?_.h.getI18NValue("support.setup.label.agents"):_.h.getI18NValue("User")):null,teamCount:u?u+" "+(u>1?_.h.getI18NValue("support.setup.label.teams"):_.h.getI18NValue("support.setup.label.team")):null,roleCount:m?m+" "+(m>1?_.h.getI18NValue("support.setup.label.roles"):_.h.getI18NValue("support.setup.label.role")):null,rolesandSubCount:h?h+" "+_.h.getI18NValue("support.label.cv.roles.and.subordinates"):null})});return b.a.createElement(B.b,{getHelpInfo:function(){return _.h.getI18NValue("support.setup.teams.help1")},needHelpInfo:!0},b.a.createElement(B.d,{title:_.h.getI18NValue("support.setup.label.teams"),getLeftPlaceHolder:this.getLeftPlaceHolder,getRightPlaceHolder:this.getRightPlaceHolder}),b.a.createElement(B.a,{needPadding:!0},a))}}]),t}(m.Component));w.propTypes={depId:f.a.string,depName:f.a.string,department:f.a.object,departmentName:f.a.string,departmentsObj:f.a.object,getTeamsList:f.a.func,paramMap:f.a.shape({setupModule:f.a.string,orgName:f.a.string,deptName:f.a.array}),push:f.a.func,teamsIdList:f.a.array,teamsObject:f.a.object};var P={getTeamsList:C.u,push:C.L};t.default=Object(g.connect)(function(e,t){var n=e.routing.paramMap,a=n.setupSubOrDepOrModuleName,o=e.departmentMapper[a],l=e.module.department[o].name;return{depId:o,teamsObject:e.module.teams,teamsIdList:e.departmentSpecificState[o]&&e.departmentSpecificState[o].teamsList||[],department:e.module.department,depName:l,departmentName:a,departmentsObj:e.module.department,paramMap:n}},P)(w)}}]);