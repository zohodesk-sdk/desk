(window.deskappJsonp=window.deskappJsonp||[]).push([[121],{"./src/components/ToastMessage/ToastMessage.module.css":function(e,a,t){e.exports={container:"zd-toastmessage-container",closeAnimation:"zd-toastmessage-closeAnimation",animation:"zd-toastmessage-animation zd495cc1bc43",leftanimate:"zd-toastmessage-leftanimate zddf7d17516f zd-toastmessage-animation zd495cc1bc43",leftnoanimate:"zd-toastmessage-leftnoanimate",rightanimate:"zd-toastmessage-rightanimate zd6a5f2c3f73 zd-toastmessage-animation zd495cc1bc43 zd-toastmessage-closeAnimation",alertifychild:"zd-toastmessage-alertifychild",alertifybanner:"zd-toastmessage-alertifybanner",alertright:"zd-toastmessage-alertright",popbutton:"zd-toastmessage-popbutton zd183c1224a5 zd5eb82bb6d0",mainbutton:"zd-toastmessage-mainbutton zd-toastmessage-popbutton zd183c1224a5 zd5eb82bb6d0",sumbitBorder:"zd-toastmessage-sumbitBorder",notSolo:"zd-toastmessage-notSolo zd-toastmessage-mainbutton zd-toastmessage-popbutton zd183c1224a5 zd5eb82bb6d0 zd-toastmessage-sumbitBorder",primary:"zd-toastmessage-primary",danger:"zd-toastmessage-danger",success:"zd-toastmessage-success",cancelButton:"zd-toastmessage-cancelButton zd-toastmessage-popbutton zd183c1224a5 zd5eb82bb6d0",alerttab:"zd-toastmessage-alerttab",coverfill:"zd-toastmessage-coverfill",alertleft:"zd-toastmessage-alertleft",alertico:"zd-toastmessage-alertico",alertsecondary:"zd-toastmessage-alertsecondary",alertTitle:"zd-toastmessage-alertTitle zd6063afa107 zd5eb82bb6d0 zdbce71b4599 zdccf2edd024",alertTitleLeft:"zd-toastmessage-alertTitleLeft",alertMessage:"zd-toastmessage-alertMessage zd5eb82bb6d0",buttonText:"zd-toastmessage-buttonText",closeIcon:"zd-toastmessage-closeIcon",closeIconPrimary:"zd-toastmessage-closeIconPrimary",dropdown:"zd-toastmessage-dropdown",message:"zd-toastmessage-message zd183c1224a5 zd6063afa107",messageOff:"zd-toastmessage-messageOff",fill:"zd-toastmessage-fill zde07a357202",successFill:"zd-toastmessage-successFill zd-toastmessage-fill zde07a357202",dangerFill:"zd-toastmessage-dangerFill zd-toastmessage-fill zde07a357202",dangerShadow:"zd-toastmessage-dangerShadow",successPlain:"zd-toastmessage-successPlain",dangerPlain:"zd-toastmessage-dangerPlain",primaryPlain:"zd-toastmessage-primaryPlain"}},"./src/containers/PopnotificationContainer/PopnotificationContainer.js":function(e,a,t){"use strict";t.r(a);var s=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),o=t.n(s),n=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react-redux/es/index.js"),l=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),i=t.n(l),c=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),r=t.n(c),m=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),d=t.n(m),u=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),g=t.n(u),b=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),f=t.n(b),p=t("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),z=t.n(p),h=t("./src/components/ToastMessage/ToastMessage.module.css"),x=t.n(h),C=t("./node_modules/@zohodesk/icons/lib/Icon/index.js"),y=t.n(C),B=t("../components/lib/Layout/index.js"),E=t("./src/actions/index.js"),P=function(e){function a(e){r()(this,a);var t=g()(this,(a.__proto__||i()(a)).call(this,e));return t.state={messageState:t.props.messageState,isClose:t.props.isClose},t._mount=!1,t.messageOff=t.messageOff.bind(t),t.closePop=t.closePop.bind(t),t}return f()(a,e),d()(a,[{key:"componentDidMount",value:function(){var e=this;this._mount=!0;var a=this.props,t=a.autoClose,s=a.hideTime,o=a.id,n=a.hidePopNotification;t&&setTimeout(function(){!e.state.isClose&&e._mount&&e.setState({isClose:!0},function(){setTimeout(function(){n(o)},300)})},s)}},{key:"componentWillUnmount",value:function(){this._mount=!1}},{key:"messageOff",value:function(e){this.setState({messageState:!this.state.messageState}),e.stopPropagation()}},{key:"closePop",value:function(e){var a=this;this.setState({isClose:!0},function(){var e=a.props,t=e.id,s=e.hidePopNotification;setTimeout(function(){s(t)},300)}),e.stopPropagation()}},{key:"render",value:function(){var e=this.props,a=e.id,t=e.type,s=e.subject,n=e.info,l=e.submitText,i=e.cancelText,c=e.iconName,r=e.iconSize,m=e.submitType,d=e.isIconMid,u=e.needClose,g=e.iconPalette,b=e.isMore,f=e.message,p=e.isAnimate,z=e.getLeftContainer,h=e.getBottomContainer,C=e.getSubmitContainer,P=e.onSubmit,N=e.onCancel,T=this.state.isClose?x.a.rightanimate:x.a.leftanimate,_=this.state.isClose?x.a.rightanimate:x.a.leftnoanimate,k=o.a.createElement(y.a,{iconClass:x.a[g],name:c,size:r});return o.a.createElement(B.Container,{className:x.a.container+" "+(p?T:_)+" "+x.a["alert"+t],isCover:!1},o.a.createElement(B.Box,{className:x.a.alertifychild,flexible:!0},o.a.createElement(B.Container,{alignBox:"row",className:x.a.alertifybanner},o.a.createElement(B.Box,{className:x.a.alertleft,flexible:!0},o.a.createElement(B.Container,{align:d?"vertical":"",alignBox:"row"},"success"==t||z?z?o.a.createElement(B.Box,{className:""+x.a.alertico},z()):null:o.a.createElement(B.Box,{className:""+x.a.alertico},o.a.createElement("span",null,k)),o.a.createElement(B.Box,{flexible:!0},o.a.createElement(B.Container,{align:"vertical",alignBox:"row",isCover:!1},"success"==t?o.a.createElement(B.Box,{className:x.a.alertTitleLeft},k):null,o.a.createElement(B.Box,{className:x.a.alertTitle,flexible:!0},s)),n?o.a.createElement("p",{className:x.a.alertMessage},n):null,h?o.a.createElement("div",null,h()):null),"information"==t?o.a.createElement(B.Box,{className:x.a.closeIconPrimary,onClick:this.closePop},o.a.createElement(y.a,{isBold:!0,name:"ZD-close",size:"18"})):null)),"information"!=t?o.a.createElement(B.Box,{className:x.a.alertright},o.a.createElement(B.Container,{className:x.a.alerttab},u?o.a.createElement("span",{className:x.a.closeIcon,onClick:this.closePop},o.a.createElement(y.a,{name:"ZD-close",size:"18"})):null,l?o.a.createElement(B.Box,{className:(C?x.a.sumbitBorder:i?x.a.notSolo:x.a.mainbutton)+" "+(C?"":x.a[m])+" ",flexible:!0,onClick:function(){P&&P(),E.K.ob.resolve(a)}},o.a.createElement(B.Container,{align:"vertical",alignBox:"row"},C?o.a.createElement(B.Box,{flexible:!0},C()):o.a.createElement(B.Box,{className:x.a.buttonText,flexible:!0},l))):null,i?o.a.createElement(B.Box,{className:x.a.cancelButton+" ",flexible:!0,onClick:this.closePop},o.a.createElement(B.Container,{align:"vertical",alignBox:"row"},o.a.createElement(B.Box,{className:""+x.a.buttonText,flexible:!0,onClick:function(){N&&N(),E.K.ob.reject(a)}},i),b?o.a.createElement(B.Box,{className:x.a.dropdown,onClick:this.messageOff},o.a.createElement(y.a,{name:"ZD-down",size:"7"})):null)):null)):null)),b?o.a.createElement(B.Box,{className:x.a.message+" "+(this.state.messageState?"":x.a.messageOff),tagName:"p"},f):null)}}]),a}(o.a.Component),N=P;P.propTypes={autoClose:z.a.bool,cancelText:z.a.string,getBottomContainer:z.a.func,getLeftContainer:z.a.func,getSubmitContainer:z.a.func,hidePopNotification:z.a.func,hideTime:z.a.string,iconName:z.a.string,iconPalette:z.a.oneOf(["successFill","dangerFill","dangerShadow","successPlain","dangerPlain","primaryPlain"]),iconSize:z.a.string,id:z.a.string,info:z.a.string,isAnimate:z.a.bool,isClose:z.a.bool,isIconMid:z.a.bool,isMore:z.a.bool,message:z.a.string,messageState:z.a.bool,needClose:z.a.bool,onCancel:z.a.func,onSubmit:z.a.func,subject:z.a.string,submitText:z.a.string,submitType:z.a.oneOf(["primary","danger","success"]),type:z.a.oneOf(["primary","information","secondary","success"])},P.defaultProps={iconName:"bell",iconSize:"30",submitType:"primary",isIconMid:!1,needClose:!1,type:"primary",isMore:!1,messageState:!1,isAnimate:!0,isClose:!1,autoClose:!1,hideTime:"3000"};a.default=Object(n.connect)(function(e,a){return{hidePopNotification:E.w}},{hidePopNotification:E.w})(N)}}]);