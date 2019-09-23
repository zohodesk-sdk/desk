(window.deskappJsonp=window.deskappJsonp||[]).push([[129],{"./src/actions/RemoteAssistAction.js":function(e,s,t){"use strict";t.d(s,"a",function(){return a}),t.d(s,"c",function(){return i}),t.d(s,"b",function(){return r});var o=t("./src/utils/RequestAPI.js"),n=t("./src/utils/Common.js");function a(){return{types:Object(n.m)("CHECK_PERMISSIONS"),callAPI:function(e){return Object(o.a)("/api/v1/zohoAssist/permissions",!1,{orgId:e.currentOrgId}).get().then(function(e){return{res:e,entities:{},result:[]}})}}}function i(){return{type:"OPEN_REMOTE_ASSIST"}}function r(){return{type:"CLOSE_REMOTE_ASSIST"}}},"./src/components/Subtab/RemoteAssist/RemoteAssist.module.css":function(e,s,t){e.exports={container:"zd-remoteassist-container",closeIcon:"zd-remoteassist-closeIcon",icon:"zd-remoteassist-icon",fontName:"zd-remoteassist-fontName",assistDiv:"zd-remoteassist-assistDiv",frame:"zd-remoteassist-frame"}},"./src/containers/Subtab/RemoteAssist/RemoteAssist.js":function(e,s,t){"use strict";t.r(s);var o=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),n=t.n(o),a=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),i=t.n(a),r=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),c=t.n(r),l=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=t.n(l),m=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),u=t.n(m),p=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),b=t.n(p),h=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),g=t.n(h),f=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react-redux/es/index.js"),_=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/selectn/index.js"),I=t.n(_),k=t("./src/components/Subtab/RemoteAssist/RemoteAssist.module.css"),j=t.n(k),z=t("./src/fz-i18n/index.js"),v=t("./src/constants/index.js"),A=t("./node_modules/@zohodesk/icons/lib/Icon/index.js"),R=t.n(A),y=function(e){function s(){return i()(this,s),d()(this,(s.__proto__||n()(s)).apply(this,arguments))}return u()(s,e),c()(s,[{key:"render",value:function(){var e=this.props,s=e.email,t=e.subject,o=e.ticketId,n=e.orgId,a=e.departmentId,i=e.closeRemoteAssist,r=v.D+"/zoho-desk-app/session?org_id="+n+"&dept_id="+a+"&ticket_subject="+t+"&case_id="+o;return s&&(r+="&customer_email="+s),b.a.createElement("div",{className:j.a.container},b.a.createElement("span",{className:j.a.closeIcon,onClick:i},b.a.createElement("span",{className:j.a.icon},b.a.createElement(R.a,{name:"ZD-close2"})),b.a.createElement("span",{className:j.a.fontName},z.h.getI18NValue("support.zohocrm.integration.lable.name.esc"))),b.a.createElement("iframe",{src:r,className:j.a.frame}))}}]),s}(b.a.Component),E=y;y.propTypes={closeRemoteAssist:g.a.func,departmentId:g.a.string,email:g.a.string,orgId:g.a.string,subject:g.a.string,ticketId:g.a.string};var S=t("./src/actions/RemoteAssistAction.js"),N=t("./src/actions/index.js"),O=t("./src/reducers/selector.js"),C=function(e){function s(e){i()(this,s);var t=d()(this,(s.__proto__||n()(s)).call(this,e));return t.state={},t}return u()(s,e),c()(s,[{key:"componentDidMount",value:function(){var e=this,s=this.props,t=s.checkPermissions,o=s.showMessage,n=s.closeRemoteAssist;t().then(function(s){var t=s.data.res,a=t.features;"This is not a valid member of the org"==t.message?(o({type:"alert",message:z.h.getI18NValue("support.dv.label.zassist.orgMismatch")}),n()):a.includes("REMOTE_SUPPORT")?(e.setState({renderIframe:!0}),e.setState({isFetching:!1})):(o({type:"alert",message:z.h.getI18NValue("support.dv.label.zassist.denyPermision")}),n())},function(e){var s=JSON.parse(e.response).message;if(s.includes("Validation failed")){var t=s.split(":")[1];o({type:"alert",message:t})}else o({type:"alert",message:z.h.getI18NValue("support.setup.addon.zassist.unabletoprocess.info")});n()})}},{key:"render",value:function(){var e=this.props,s=e.ticket,t=e.contact,o=e.closeRemoteAssist,n=e.ticketId,a=e.orgId,i=t.email,r=void 0===i?"":i,c=s.subject,l=s.departmentId;return this.state.renderIframe?b.a.createElement(E,{orgId:a,ticketId:n,departmentId:l,email:r,subject:c,closeRemoteAssist:o}):null}}]),s}(p.Component);C.propTypes={checkPermissions:g.a.func,closeRemoteAssist:g.a.func,contact:g.a.object,orgId:g.a.string,showMessage:g.a.func,showNotification:g.a.func,ticket:g.a.object,ticketId:g.a.string};s.default=Object(f.connect)(function(e){var s=e.routing.paramMap.moduleId||I()("routing.location.query.peekId",e),t=e.module.ticket[s];return{contact:e.module.contact[t.contactId],ticket:t,ticketId:s,orgId:Object(O.T)(e)}},{closeRemoteAssist:S.b,checkPermissions:S.a,showMessage:N.Q})(C)}}]);