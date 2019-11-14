(window.deskappJsonp=window.deskappJsonp||[]).push([[70],{"./src/actions/CommentActions.js":function(e,o,t){"use strict";t.d(o,"d",function(){return m}),t.d(o,"b",function(){return u}),t.d(o,"a",function(){return p}),t.d(o,"e",function(){return h}),t.d(o,"c",function(){return b});var n=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/assign.js"),s=t.n(n),a=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/defineProperty.js"),l=t.n(a),r=t("./src/utils/RequestAPI.js"),i=t("./src/constants/index.js"),c=t("./src/utils/Common.js"),d=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/simple-normalizr/es/index.js"),m=function(e,o,t,n,a){return{types:Object(c.m)(o.toUpperCase()+"_GET_"+i.R.COMMENT),callAPI:function(c){return Object(r.a)(""+i.B+e+"/"+t+"/comments?sortBy=-commentedTime&from="+n+"&limit="+a+"&include=mentions",!1,{orgId:c.currentOrgId}).get().then(function(e){var a;if(204!=e.responseStatus){var r=l()({id:t},i.R.COMMENT_L,e.data);return s()({},Object(d.b)(r,Object(d.c)(o,{mapping:{comment:Object(d.a)(Object(d.c)(i.R.COMMENT_L))}})),{from:n})}return{entities:(a={},l()(a,i.R.COMMENT_L,{}),l()(a,o,[]),a),from:n}})}}},u=function(e,o,t,n,s){return{types:Object(c.m)(o.toUpperCase()+"_DELETE_"+s),callAPI:function(s,a){return Object(r.a)(""+i.B+e+"/"+t+"/comments/"+n,!1,{orgId:s.currentOrgId}).del().then(function(e){if(200==e.responseStatus){var s=a(),r=!0;if("ticket"==o&&(r=Object(c.F)(s,t,n)),r){var d="0",m=s.module[o][t].commentCount;return(m=parseInt(m))&&(d=m-1),{entities:l()({},o,l()({},t,l()({},i.R.COMMENT_L,[n]))),commentCount:d,result:t}}return e}})}}},p=function(e,o,t,n,a){var d=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[];return{types:Object(c.m)(o.toUpperCase()+"_ADD_"+a),callAPI:function(a,m){return Object(r.a)(""+i.B+e+"/"+t+"/comments",!1,{orgId:a.currentOrgId}).post("",n).then(function(e){var n=m(),a=e.id,r=!1;if("ticket"==o&&(r=Object(c.F)(n,t,a)),!r){var u,p="1",h=n.module[o][t].commentCount;return(h=parseInt(h))&&h>0&&(p=h+1),{entities:(u={},l()(u,i.R.COMMENT_L,l()({},a,s()({},e,{mention:d}))),l()(u,o,l()({},t,l()({},i.R.COMMENT_L,[a]))),u),commentCount:p,result:t}}return e})}}},h=function(e,o,t,n,a,d){var m=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[];return{types:Object(c.m)(o.toUpperCase()+"_UPDATE_"+d),callAPI:function(o){return Object(r.a)(""+i.B+e+"/"+t+"/comments/"+n,!1,{orgId:o.currentOrgId}).patch("",a).then(function(e){return{entities:l()({},i.R.COMMENT_L,l()({},n,s()({},e,{mention:m})))}})}}},b=function(e,o){return{types:Object(c.m)("COMMENTHISTORY"),callAPI:function(t){return Object(r.a)(i.B+"tickets/"+e+"/comments/"+o+"/history",!1,{orgId:t.currentOrgId}).get().then(function(e){return{data:e.data,entities:{},result:[]}})}}}},"./src/components/Subtab/CommentHistory/CommentHistory.module.css":function(e,o,t){e.exports={cmtRightDiv:"zd-commenthistory-cmtRightDiv",cmthistyCont:"zd-commenthistory-cmthistyCont",leftdiv:"zd-commenthistory-leftdiv",cmtDiv:"zd-commenthistory-cmtDiv",dateTimeDiv:"zd-commenthistory-dateTimeDiv",comntDtls:"zd-commenthistory-comntDtls",avatrDiv:"zd-commenthistory-avatrDiv",comments:"zd-commenthistory-comments",cmntType:"zd-commenthistory-cmntType",attachCount:"zd-commenthistory-attachCount",attachList:"zd-commenthistory-attachList",cmntMode:"zd-commenthistory-cmntMode",dot:"zd-commenthistory-dot",cmntName:"zd-commenthistory-cmntName"}},"./src/components/Subtab/Loading/Loading.js":function(e,o,t){"use strict";var n=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),s=t.n(n),a=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=t.n(a),r=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=t.n(r),c=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=t.n(c),m=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),u=t.n(m),p=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),h=t.n(p),b=t("./src/components/Subtab/Loading/SubtabLoading.module.css"),_=t.n(b),g=t("../components/lib/Layout/index.js"),k=function(e){function o(){return l()(this,o),d()(this,(o.__proto__||s()(o)).apply(this,arguments))}return u()(o,e),i()(o,[{key:"render",value:function(){return h.a.createElement(g.Container,{alignBox:"row",align:"both",className:_.a.container},h.a.createElement(g.Box,{className:_.a.dot}),h.a.createElement(g.Box,{className:_.a.dot}),h.a.createElement(g.Box,{className:_.a.dot}),h.a.createElement(g.Box,{className:_.a.dot}),h.a.createElement(g.Box,{className:_.a.dot}),h.a.createElement(g.Box,{className:_.a.dot}))}}]),o}(h.a.Component);o.a=k},"./src/components/lookup/Lookup/Lookup.js":function(e,o,t){"use strict";var n=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),s=t.n(n),a=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=t.n(a),r=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=t.n(r),c=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=t.n(c),m=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),u=t.n(m),p=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),h=t.n(p),b=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),_=t.n(b),g=t("./src/components/FreezeLayer/FreezeLayer.js"),k=t("../components/lib/Layout/index.js"),j=t("./src/components/lookup/Lookup/Lookup.module.css"),y=t.n(j),f=function(e){function o(){return l()(this,o),d()(this,(o.__proto__||s()(o)).apply(this,arguments))}return u()(o,e),i()(o,[{key:"render",value:function(){var e=this.props,o=e.isActive,t=e.elementMedia,n=e.children,s=e.size,a=e.dataId,l=e.forwardRef;return h.a.createElement(g.a,{align:"horizontal",animationName:"fade",childAnimationName:"flyDown",isActive:o,palette:"snow",forwardRef:l},h.a.createElement(k.ResponsiveContainer,{alignBox:"row",className:y.a.container,dataId:"fldValue",elementMedia:t},h.a.createElement("div",{className:y.a.box+" "+y.a["size_"+s],"data-id":a},n)))}}]),o}(p.Component);o.a=f,f.propTypes={children:_.a.node,dataId:_.a.string,elementMedia:_.a.object,isActive:_.a.bool,size:_.a.oneOf(["small","medium"])},f.defaultProps={size:"medium"}},"./src/components/lookup/Section/Section.js":function(e,o,t){"use strict";var n=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),s=t.n(n),a=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=t.n(a),r=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=t.n(r),c=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=t.n(c),m=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),u=t.n(m),p=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),h=t.n(p),b=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),_=t.n(b),g=t("../components/lib/Layout/index.js"),k=t("./src/components/lookup/Section/LookupSection.module.css"),j=t.n(k),y=function(e){function o(e){return l()(this,o),d()(this,(o.__proto__||s()(o)).call(this,e))}return u()(o,e),i()(o,[{key:"render",value:function(){var e=this.props,o=e.alignBox,t=e.className;return h.a.createElement(g.Container,{alignBox:o,className:j.a.section+" "+(t||"")},h.a.createElement(g.Box,{flexible:!0},this.props.children))}}]),o}(p.Component);o.a=y,y.propTypes={alignBox:_.a.string,children:_.a.node,className:_.a.string},y.defaultProps={}},"./src/components/lookup/header/Close/Close.js":function(e,o,t){"use strict";var n=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),s=t.n(n),a=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=t.n(a),r=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=t.n(r),c=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=t.n(c),m=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),u=t.n(m),p=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),h=t.n(p),b=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),_=t.n(b),g=t("./node_modules/@zohodesk/icons/lib/Icon/index.js"),k=t.n(g),j=t("./src/components/lookup/header/Close/LookupClose.module.css"),y=t.n(j),f=function(e){function o(){return l()(this,o),d()(this,(o.__proto__||s()(o)).apply(this,arguments))}return u()(o,e),i()(o,[{key:"render",value:function(){var e=this.props,o=e.onClose,t=e.dataId;return h.a.createElement("div",{className:y.a.container,"data-id":t,onClick:o},h.a.createElement(k.a,{name:"ZD-close2"}))}}]),o}(p.PureComponent);o.a=f,f.propTypes={dataId:_.a.string,onClose:_.a.func}},"./src/components/lookup/header/ModuleHeader/ModuleHeader.js":function(e,o,t){"use strict";var n=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),s=t.n(n),a=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=t.n(a),r=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=t.n(r),c=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=t.n(c),m=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),u=t.n(m),p=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),h=t.n(p),b=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),_=t.n(b),g=t("./src/components/lookup/header/Title/Title.js"),k=t("./src/components/lookup/header/Close/Close.js"),j=t("./src/components/lookup/header/Search/Search.js"),y=t("../components/lib/Layout/index.js"),f=t("./src/components/lookup/header/lookupHeaderCommon.module.css"),C=t.n(f),v=t("./src/components/lookup/header/lookupHeaderCommonResponsive.module.css"),z=t.n(v),x=function(e){function o(){return l()(this,o),d()(this,(o.__proto__||s()(o)).apply(this,arguments))}return u()(o,e),i()(o,[{key:"render",value:function(){var e=this.props,o=e.title,t=void 0===o?"":o,n=e.needSearch,s=void 0!==n&&n,a=e.onLookupClose,l=e.searchStr,r=void 0===l?"":l,i=e.onSearch,c=e.onSearchChange,d=e.searchPlaceHolder;return h.a.createElement(y.ResponsiveContainer,{align:"vertical",alignBox:"row",className:C.a.container+" "+z.a.container,elementMedia:{xs:""+z.a.extraSmall},isCover:!1,wrap:"wrap"},h.a.createElement("div",{className:C.a.closeContainer},h.a.createElement(k.a,{dataId:"close",onClose:a})),h.a.createElement(y.Box,{flexible:!0},h.a.createElement("div",{className:C.a.title},h.a.createElement(g.a,{text:t}))),s&&h.a.createElement(y.Box,{className:C.a.searchContainer+" "+z.a.searchContainer},h.a.createElement(j.a,{onSearch:i,searchStr:r,onChange:c,placeHolder:d,dataId:"search"})))}}]),o}(p.Component);o.a=x,x.propTypes={needSearch:_.a.bool,onLookupClose:_.a.func,onSearch:_.a.func,onSearchChange:_.a.func,searchPlaceHolder:_.a.string,searchStr:_.a.string,title:_.a.string}},"./src/components/lookup/header/Search/Search.js":function(e,o,t){"use strict";var n=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),s=t.n(n),a=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=t.n(a),r=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=t.n(r),c=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=t.n(c),m=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),u=t.n(m),p=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),h=t.n(p),b=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),_=t.n(b),g=t("./src/components/lookup/header/Search/LookupSearch.module.css"),k=t.n(g),j=t("../components/lib/TextBox/TextBox.js"),y=t.n(j),f=t("../components/lib/utils/debounce.js"),C=function(e){function o(e){l()(this,o);var t=d()(this,(o.__proto__||s()(o)).call(this,e));return t.state={isActive:!1,isFocused:!1},t.handleChange=t.handleChange.bind(t),t.handleBlur=t.handleBlur.bind(t),t.handleFocus=t.handleFocus.bind(t),t.handleClear=t.handleClear.bind(t),t.handleKeyDown=t.handleKeyDown.bind(t),t.handleSearch=Object(f.debounce)(t.handleSearch.bind(t),500),t}return u()(o,e),i()(o,[{key:"componentDidUpdate",value:function(e){var o=this.props.searchStr,t=this.state.isFocused;e.searchStr&&""===o&&!t&&this.setState({isActive:!1})}},{key:"handleSearch",value:function(){var e=this.props.onSearch;e&&e()}},{key:"handleKeyDown",value:function(e){var o=e.keyCode,t=this.props.onSearch;13===o&&t&&t()}},{key:"handleChange",value:function(e){var o=this.props.onChange;o&&o(e)}},{key:"handleBlur",value:function(){var e=this.props.searchStr;this.setState({isFocused:!1}),e||this.setState({isActive:!1})}},{key:"handleFocus",value:function(){this.setState({isActive:!0,isFocused:!0})}},{key:"handleClear",value:function(){var e=this.props.onSearch;e&&e("")}},{key:"render",value:function(){var e=this.props,o=e.searchStr,t=e.placeHolder,n=e.dataId,s=this.state.isActive;return h.a.createElement(y.a,{className:k.a.inputStyle+" "+(s?k.a.inputActive:""),placeHolder:t,value:o,onChange:this.handleChange,onBlur:this.handleBlur,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,dataId:n})}}]),o}(p.Component);o.a=C,C.propTypes={dataId:_.a.string,onChange:_.a.func,onSearch:_.a.func,placeHolder:_.a.string,searchStr:_.a.string}},"./src/components/lookup/header/Title/Title.js":function(e,o,t){"use strict";var n=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),s=t.n(n),a=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=t.n(a),r=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=t.n(r),c=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=t.n(c),m=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),u=t.n(m),p=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),h=t.n(p),b=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),_=t.n(b),g=t("./src/components/lookup/header/Title/LookupTitle.module.css"),k=t.n(g),j=function(e){function o(){return l()(this,o),d()(this,(o.__proto__||s()(o)).apply(this,arguments))}return u()(o,e),i()(o,[{key:"render",value:function(){var e=this.props,o=e.text,t=e.palette;return h.a.createElement("span",{className:k.a.title+" "+k.a[t]},o)}}]),o}(p.PureComponent);o.a=j,j.propTypes={palette:_.a.oneOf(["default","primary","danger"]),text:_.a.string},j.defaultProps={palette:"default"}},"./src/containers/Subtab/CommentHistory/CommentHistory.js":function(e,o,t){"use strict";t.r(o);var n=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),s=t.n(n),a=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=t.n(a),r=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=t.n(r),c=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=t.n(c),m=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),u=t.n(m),p=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),h=t.n(p),b=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),_=t.n(b),g=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react-redux/es/index.js"),k=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/selectn/index.js"),j=t.n(k),y=t("./src/components/Subtab/CommentHistory/CommentHistory.module.css"),f=t.n(y),C=t("../components/lib/Avatar/Avatar.js"),v=t.n(C),z=t("./src/fz-i18n/index.js"),x=t("./src/utils/Common.js"),E=t("../components/lib/Layout/index.js"),N=t("./src/components/setup/timetrack/utils.js"),S=t("./src/components/Subtab/Loading/Loading.js"),I=(t("./src/components/lookup/Lookup/Lookup.js"),t("./src/components/lookup/header/ModuleHeader/ModuleHeader.js")),L=t("./src/components/lookup/Section/Section.js"),D=function(e){function o(){return l()(this,o),d()(this,(o.__proto__||s()(o)).apply(this,arguments))}return u()(o,e),i()(o,[{key:"render",value:function(){var e=this.props,o=e.hideCommentHistory,t=e.historyList,n=null;return h.a.createElement(h.a.Fragment,null,h.a.createElement(I.a,{title:z.h.getI18NValue("support.request.history.commented.commenthistory"),needSearch:!1,onLookupClose:o,dataId:"CloseHistory"}),h.a.createElement(L.a,{alignBox:"row"},t.length?h.a.createElement(E.Container,{alignBox:"column",onClick:N.a},h.a.createElement(E.Box,{flexible:!0,scroll:"vertical"},h.a.createElement("div",{className:f.a.cmthistyCont},t.map(function(e,o){var t=e.attachments,s=e.commenter,a=e.content,l=e.isPublic,r=e.commentedTime,i=t.length,c=s.name,d=s.photoURL,m=!1,u=!1,p=new Date(r),b=new Date;r=z.h.userDateFormat(new Date(r),{},"lateby","left",!1,function(){return"hh:mm A"});var _=null;return b.getFullYear()==p.getFullYear()&&b.getMonth()==p.getMonth()&&(b.getDate()==p.getDate()?(m=!0,_="today"):b.getDate()-1==p.getDate()&&(u=!0,_="yesterday")),_||(_=z.h.userDateFormat(new Date(r),{},"lateby","left",!1,function(){return"DD MMM YYYY"})),_!=n?n=_:_=null,h.a.createElement(E.Container,{alignBox:"row",isCover:!1,className:f.a.cmtDiv,key:o},h.a.createElement(E.Box,{className:f.a.leftdiv},h.a.createElement(E.Container,{alignBox:"row",align:"vertical",isCover:!1},h.a.createElement(E.Box,{className:f.a.dateTimeDiv},_?h.a.createElement("div",{className:f.a.dateDiv},m?z.h.getI18NValue("support.filter.today.label"):u?z.h.getI18NValue("support.filter.yesterday.lable"):_):null,h.a.createElement("div",{className:f.a.timeDiv},r)),h.a.createElement(E.Box,{className:f.a.avatrDiv},d?h.a.createElement(v.a,{src:d,name:c,size:"medium",title:c}):h.a.createElement(v.a,{name:Object(x.u)(c),size:"medium",title:c})))),h.a.createElement(E.Box,{className:f.a.comntDtls,flexible:!0},h.a.createElement("div",{className:f.a.cmtRightDiv},h.a.createElement("p",{className:f.a.comments,dangerouslySetInnerHTML:{__html:a}})),h.a.createElement("div",{className:f.a.cmntType},h.a.createElement("span",{className:f.a.cmntMode},l?z.h.getI18NValue("support.request.public"):z.h.getI18NValue("support.department.type.internal")),h.a.createElement("span",{className:f.a.dot},"."),h.a.createElement("span",{className:f.a.cmntName},c)),i?[h.a.createElement("div",{className:f.a.attachCount,key:"header"},i," ",z.h.getI18NValue("support.attachments")),h.a.createElement("div",{className:f.a.attachList,key:"list"},"("+t.map(function(e){return" "+e})+")")]:null))})))):h.a.createElement(S.a,null)))}}]),o}(h.a.Component),T=D;D.propTypes={hideCommentHistory:_.a.func,historyList:_.a.array};var B=t("./src/actions/CommentActions.js"),M=function(e){function o(e){l()(this,o);var t=d()(this,(o.__proto__||s()(o)).call(this,e));return t.state={historyList:[]},t}return u()(o,e),i()(o,[{key:"componentDidMount",value:function(){var e=this,o=this.props,t=o.ticketId,n=o.commentId;(0,o.getCommentHistory)(t,n).then(function(o){e.setState({historyList:o.data.data})})}},{key:"render",value:function(){var e=this.props.hideCommentHistory,o=this.state.historyList;return h.a.createElement(T,{hideCommentHistory:e,historyList:o})}}]),o}(p.Component);M.propTypes={commentHistoryInfo:_.a.object,getCommentHistory:_.a.func,hideCommentHistory:_.a.func};o.default=Object(g.connect)(function(e,o){return{ticketId:j()("routing.paramMap.moduleId",e)||j()("routing.location.query.peekId",e),commentHistoryInfo:e.commentHistoryInfo}},{getCommentHistory:B.c})(M)}}]);