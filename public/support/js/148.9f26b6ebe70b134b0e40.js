(window.deskappJsonp=window.deskappJsonp||[]).push([[148],{1031:function(e,t,o){"use strict";var n=o(12),a=o.n(n),r=o(9),l=o.n(r),i=o(10),s=o.n(i),u=o(13),c=o.n(u),p=o(14),d=o.n(p),f=o(0),m=o.n(f),g=o(1),h=o.n(g),v=o(16),I=o(30),_=o(1033),y=o.n(_),x=function(e){function t(e){l()(this,t);var o=c()(this,(t.__proto__||a()(t)).call(this,e));return o.state={isHelpInfoOpen:!1},o.toggleHelpInfo=o.toggleHelpInfo.bind(o),o}return d()(t,e),s()(t,[{key:"toggleHelpInfo",value:function(){var e=this.state.isHelpInfoOpen;this.setState({isHelpInfoOpen:!e})}},{key:"render",value:function(){var e=this,t=this.state.isHelpInfoOpen,o=this.props,n=o.children,a=o.needHelpInfo,r=o.getHelpInfo,l=o.helpInfoTitle;return m.a.createElement(v.Container,{isScrollAttribute:!0},m.a.Children.map(n,function(t){return t&&t.type==b?m.a.cloneElement(t,{openHelpInfo:e.toggleHelpInfo,needHelpInfo:a}):t}),r?m.a.createElement(v.Box,{className:y.a.popup+" "+(t?y.a.open:y.a.close)},m.a.createElement(v.Container,null,m.a.createElement(v.Box,null,m.a.createElement(v.Container,{alignBox:"row",align:"vertical",className:y.a.infoHeader},m.a.createElement(v.Box,{className:y.a.infoIcon},m.a.createElement(I.GettingstartedFontIcon,{name:"info31",size:"12"})),m.a.createElement(v.Box,{flexible:!0,className:y.a.infoText},l),m.a.createElement(v.Box,null,m.a.createElement("span",{onClick:this.toggleHelpInfo,className:y.a.infoClose},m.a.createElement(I.TopbandFontIcon,{name:"close",size:"28"}))))),m.a.createElement(v.Box,{flexible:!0,scroll:"vertical",className:y.a.infoFooter},r()))):null)}}]),t}(m.a.Component),L=x;x.propTypes={children:h.a.element,getHelpInfo:h.a.func,helpInfoTitle:h.a.string,needHelpInfo:h.a.bool},x.defaultProps={helpInfoTitle:"Page Tips",needHelpInfo:!1};var b=function(e){function t(e){return l()(this,t),c()(this,(t.__proto__||a()(t)).call(this,e))}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.title,o=e.needBack,n=e.onBackClick,a=e.openHelpInfo,r=e.needHelpInfo,l=e.needHelpInfoWrapper,i=e.getLeftPlaceHolder,s=e.getRightPlaceHolder,u=e.leftClassName,c=e.rightClassName,p=e.isCustomizedHeader,d=e.headerCustomStyle;return m.a.createElement(v.Box,{className:!0===p?d:y.a.header},m.a.createElement(v.Container,{alignBox:"row",align:"vertical"},m.a.createElement(v.Box,{className:y.a.back},o?m.a.createElement("span",{className:y.a.backIcon,onClick:n},m.a.createElement(I.TopbandFontIcon,{name:"back",size:"12"})):null),m.a.createElement(v.Box,{flexible:!i&&!s,className:y.a.title},t),i?m.a.createElement(v.Box,{flexible:!0,shrink:!0,adjust:!!s,className:u},m.a.createElement(v.Container,{align:"vertical",alignBox:"row"},i())):null,s?m.a.createElement(v.Box,{flexible:!0,shrink:!0,adjust:!!i,className:c},m.a.createElement(v.Container,{align:"vertical",alignBox:"row",className:y.a.rightPanel},s())):null,r?m.a.createElement(v.Box,null,l?m.a.createElement("span",{className:y.a.helpInfoCont},m.a.createElement("span",{className:y.a.helpInfo,onClick:a},m.a.createElement(I.GettingstartedFontIcon,{name:"info31",size:"11"}))):m.a.createElement("span",{className:y.a.helpInfo+" "+y.a.mr15,onClick:a},m.a.createElement(I.GettingstartedFontIcon,{name:"info31",size:"11"}))):null))}}]),t}(f.Component);b.propTypes={getLeftPlaceHolder:h.a.func,getRightPlaceHolder:h.a.func,headerCustomStyle:h.a.object,isCustomizedHeader:h.a.bool,leftClassName:h.a.string,needBack:h.a.bool,needHelpInfo:h.a.bool,needHelpInfoWrapper:h.a.bool,onBackClick:h.a.func,openHelpInfo:h.a.func,rightClassName:h.a.string,title:h.a.string},b.defaultProps={needBack:!1,needHelpInfo:!1,needHelpInfoWrapper:!1};var N=function(e){function t(e){return l()(this,t),c()(this,(t.__proto__||a()(t)).call(this,e))}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.children,o=e.needPadding,n=e.className;return m.a.createElement(v.Box,{flexible:!0,scroll:"vertical",className:(n||"")+" "+y.a.content+" "+(o?y.a.padding:"")+" ",isScrollAttribute:!0},t)}}]),t}(f.Component);N.propTypes={children:h.a.element,className:h.a.bool,needPadding:h.a.bool},N.defaultProps={needPadding:!0};var w=function(e){function t(e){return l()(this,t),c()(this,(t.__proto__||a()(t)).call(this,e))}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this.props.children;return m.a.createElement(v.Box,{className:""+y.a.footer},m.a.createElement(v.Container,{alignBox:"row",align:"vertical"},e))}}]),t}(f.Component);w.propTypes={children:h.a.element},o.d(t,"b",function(){return L}),o.d(t,"d",function(){return b}),o.d(t,"c",function(){return w}),o.d(t,"a",function(){return N})},1033:function(e,t,o){e.exports={header:"SetupDetailLayout-module__header",back:"SetupDetailLayout-module__back",backIcon:"SetupDetailLayout-module__backIcon",title:"SetupDetailLayout-module__title common-module__ftsmooth",rightPanel:"SetupDetailLayout-module__rightPanel common-module__justifyFend",helpInfoCont:"SetupDetailLayout-module__helpInfoCont",helpInfo:"SetupDetailLayout-module__helpInfo",mr15:"SetupDetailLayout-module__mr15",footer:"SetupDetailLayout-module__footer",content:"SetupDetailLayout-module__content",padding:"SetupDetailLayout-module__padding",popup:"SetupDetailLayout-module__popup",open:"SetupDetailLayout-module__open",close:"SetupDetailLayout-module__close common-module__disableFocus",infoHeader:"SetupDetailLayout-module__infoHeader",infoIcon:"SetupDetailLayout-module__infoIcon",infoText:"SetupDetailLayout-module__infoText common-module__dotted common-module__oflow common-module__ellipsis",infoClose:"SetupDetailLayout-module__infoClose",infoFooter:"SetupDetailLayout-module__infoFooter",organizeModules:"SetupDetailLayout-module__organizeModules"}},1120:function(e,t,o){"use strict";var n=o(12),a=o.n(n),r=o(9),l=o.n(r),i=o(10),s=o.n(i),u=o(13),c=o.n(u),p=o(14),d=o.n(p),f=o(0),m=o.n(f),g=o(1),h=o.n(g),v=o(1121),I=o.n(v),_=function(e){function t(e){return l()(this,t),c()(this,(t.__proto__||a()(t)).call(this,e))}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this.props.text;return m.a.createElement("p",{className:I.a.text},e)}}]),t}(m.a.Component);t.a=_,_.propTypes={text:h.a.string}},1121:function(e,t,o){e.exports={text:"Description-module__text"}},1153:function(e,t,o){"use strict";var n=o(12),a=o.n(n),r=o(9),l=o.n(r),i=o(10),s=o.n(i),u=o(13),c=o.n(u),p=o(14),d=o.n(p),f=o(0),m=o.n(f),g=o(1),h=o.n(g),v=o(1154),I=o.n(v),_=o(987),y=function(e){function t(e){return l()(this,t),c()(this,(t.__proto__||a()(t)).call(this,e))}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.text,o=e.url,n=e.onClick,a=e.isDangerous;return void 0!==a&&a?m.a.createElement("div",{className:I.a.container,onClick:n,dangerouslySetInnerHTML:{__html:t}}):m.a.createElement(_.a,{href:o,onClick:n,className:I.a.text},t)}}]),t}(m.a.Component);t.a=y,y.propTypes={isDangerous:h.a.bool,onClick:h.a.func,text:h.a.string,url:h.a.string}},1154:function(e,t,o){e.exports={container:"Link-module__container",text:"Link-module__text"}},1221:function(e,t,o){e.exports={container:"UploadPopup-module__container",input:"UploadPopup-module__input",uploadInput:"UploadPopup-module__uploadInput",orText:"UploadPopup-module__orText",orOption:"UploadPopup-module__orOption",delete:"UploadPopup-module__delete",flieSize:"UploadPopup-module__flieSize"}},1275:function(e,t,o){e.exports={companyAvatar:"LogoAvatar-module__companyAvatar",cameraIcon:"LogoAvatar-module__cameraIcon common-module__xmedium common-module__middleBoth common-module__middle",icon:"LogoAvatar-module__icon",uploadInput:"LogoAvatar-module__uploadInput"}},1344:function(e,t,o){"use strict";var n=o(12),a=o.n(n),r=o(9),l=o.n(r),i=o(10),s=o.n(i),u=o(13),c=o.n(u),p=o(14),d=o.n(p),f=o(0),m=o.n(f),g=o(1),h=o.n(g),v=o(1275),I=o.n(v),_=o(152),y=o(64),x=o.n(y),L=o(1221),b=o.n(L),N=o(72),w=o.n(N),E=o(8),k=o(80),P=o.n(k),C=function(e){function t(e){l()(this,t);var o=c()(this,(t.__proto__||a()(t)).call(this,e));return o.state={showAlert:!1},o.uploadPhoto=o.uploadPhoto.bind(o),o.showAlertPop=o.showAlertPop.bind(o),o}return d()(t,e),s()(t,[{key:"componentDidMount",value:function(){this.props.onRef(this)}},{key:"uploadPhoto",value:function(e){this.props.onUpload(e.target.files)}},{key:"showAlertPop",value:function(){var e={submitText:"ok",cancelText:"cancel",isActive:!this.state.showAlert,title:"Alert",iconName:"exclamationThincircle",message:"Are you sure to delete Photo?",type:"confirmation"};this.props.showAlert(e)}},{key:"render",value:function(){var e=this.props,t=e.btnText,o=(e.fileSize,e.onUpload,e.showDelete),n=e.isPopupOpen;return m.a.createElement(w.a,{boxPosition:"bottomRight",isActive:n,isAnimate:!0,left:30,size:"xlarge"},m.a.createElement("div",{className:b.a.container},m.a.createElement("label",{className:b.a.input},t,m.a.createElement("input",{accept:"image/*",className:b.a.uploadInput,"data-id":"imgFile",id:"upload",onChange:this.uploadPhoto,type:"file"})),null!=o?m.a.createElement("div",null,m.a.createElement("div",{className:b.a.orOption},m.a.createElement("span",{className:b.a.orText},E.f.getI18NValue("crm.label.or"))),m.a.createElement("div",{className:b.a.delete,onClick:this.showAlertPop},E.f.getI18NValue("crm.button.delete"))):null,m.a.createElement("div",{className:b.a.flieSize},m.a.createElement("span",null,E.f.getI18NValue("support.livechat.photo.msg")))))}}]),t}(m.a.Component);C.propTypes={btnText:h.a.string,fileSize:h.a.string,isPopupOpen:h.a.bool,onRef:h.a.func,onUpload:h.a.func,showAlert:h.a.func,showDelete:h.a.string};var O=P()(C),A=o(30),U=function(e){function t(e){l()(this,t);var o=c()(this,(t.__proto__||a()(t)).call(this,e));return o.state={uploadRef:""},o.uploadImage=o.uploadImage.bind(o),o.setUploadRef=o.setUploadRef.bind(o),o.togglePopup=o.togglePopup.bind(o),o}return d()(t,e),s()(t,[{key:"uploadImage",value:function(e){this.props.onUploadImage(e)}},{key:"setUploadRef",value:function(e){this.setState({uploadRef:e})}},{key:"togglePopup",value:function(e){this.props.toggleUploadPopup(this.state.uploadRef,e)}},{key:"render",value:function(){var e=this.props,t=e.imgSrc,o=e.size,n=e.name,a=e.iconSize,r=e.isUpload,l=e.onUploadImage,i=e.showAlert;return m.a.createElement("div",{className:I.a.companyAvatar},t?m.a.createElement(x.a,{name:"Avatar",size:"xlarge",src:t}):m.a.createElement(_.a,{iconColor:"smoke18",iconSize:a,name:n,size:o}),r&&m.a.createElement("label",{className:I.a.cameraIcon},m.a.createElement("i",{className:I.a.icon},m.a.createElement(A.GettingstartedFontIcon,{name:"camera",onClick:this.togglePopup,size:"20"}))),m.a.createElement(O,{btnText:E.f.getI18NValue("support.survey.lable.upload"),onRef:this.setUploadRef,onUpload:l,showAlert:i,showDelete:t}))}}]),t}(m.a.Component);t.a=U;U.defaultProps={iconSize:"50",isUpload:!0,name:"company",size:"xlarge"},U.propTypes={iconSize:g.PropTypes.string,imgSrc:g.PropTypes.string,isUpload:g.PropTypes.bool,isViewPopup:g.PropTypes.bool,name:g.PropTypes.string,onUploadImage:g.PropTypes.func,showAlert:g.PropTypes.func,size:g.PropTypes.string,toggleUploadPopup:g.PropTypes.func}},1523:function(e,t,o){"use strict";var n=o(12),a=o.n(n),r=o(9),l=o.n(r),i=o(10),s=o.n(i),u=o(13),c=o.n(u),p=o(14),d=o.n(p),f=o(0),m=o.n(f),g=o(1),h=o(1524),v=o.n(h),I=function(e){function t(e){return l()(this,t),c()(this,(t.__proto__||a()(t)).call(this,e))}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=(e.editHeading,e.editContent);return m.a.createElement("div",{className:v.a.editeContentBox},m.a.createElement("p",{className:v.a.editContent}," ",t," "))}}]),t}(m.a.Component);t.a=I,I.propTypes={editContent:g.PropTypes.string,editHeading:g.PropTypes.string}},1524:function(e,t,o){e.exports={editeContentBox:"CompanyPaymentContent-module__editeContentBox",editContent:"CompanyPaymentContent-module__editContent"}},174:function(e,t,o){"use strict";o.d(t,"c",function(){return i}),o.d(t,"e",function(){return s}),o.d(t,"d",function(){return u}),o.d(t,"j",function(){return c}),o.d(t,"n",function(){return p}),o.d(t,"o",function(){return d}),o.d(t,"k",function(){return f}),o.d(t,"i",function(){return m}),o.d(t,"g",function(){return h}),o.d(t,"h",function(){return v}),o.d(t,"a",function(){return I}),o.d(t,"l",function(){return y}),o.d(t,"b",function(){return x}),o.d(t,"m",function(){return L}),o.d(t,"f",function(){return b});var n=o(11),a=o.n(n),r=o(177),l=o(8);function i(e){var t=u(e),o=Object(r.a)().toLowerCase()||"",n=navigator.platform.toLowerCase()||"";switch(t){case"jpeg":case"jpg":case"png":case"gif":case"bmp":case"tiff":case"tif":case"ico":return"filePicture";case"txt":case"rtf":return"fileText2";case"pdf":return"filePdf";case"html":case"htm":case"xhtml":return-1!==o.indexOf("chrome")||-1!==o.indexOf("safari")?"chrome":-1!==o.indexOf("ie")||-1!==o.indexOf("edge")?"ie":"firefox";case"ppt":case"pps":case"odp":case"sxi":case"pptx":return"ppt";case"rar":case"jar":case"zip":return"zip3";case"doc":case"docx":case"sxw":case"odt":return-1!==n.indexOf("mac")||-1!==n.indexOf("linux")?"fileOpenoffice":"fileWord";case"xml":return"xml";case"xls":case"xlsx":case"sxc":case"ods":case"csv":case"tsv":return"fileExcel";case"ics":return"ics";case"exe":return"exe";case"sh":case"bin":return"sh2";case"css":return"css52";case"mp3":case"wav":case"wma":case"aac":case"m4r":case"ogg":return"fileMusic";case"mp4":case"mkv":case"mov":case"mpeg":case"flv":case"avi":case"webm":return"fileVideo";default:return"unknown"}}function s(e){return(e=parseInt(e))<1e3?e+" Bytes":e<1e6?(e/1e3).toFixed(1)+" KB":e>=1e6?(e/1e6).toFixed(1)+" MB":void 0}function u(e){return e&&e.indexOf(".")?e.substring(e.lastIndexOf(".")+1,e.length).toLowerCase():""}function c(e){var t=u(e);return-1!=="jpeg|jpg|png|gif|bmp|ico".indexOf(t)}function p(e,t){var o={inValidArray:[],validArray:[]};if(t+e.length>10)return o.isCountExceeds=!0,o;for(var n=0;n<e.length;n++){var a=e[n],r=a.name,l=a.size;f(r)?o.inValidArray.push({isUnSupported:!0}):m(r)?o.inValidArray.push({isFileNameSizeInvalid:!0}):0===a.size?o.inValidArray.push({isEmpty:!0}):g(l)?o.inValidArray.push({isAttachSizeExceeded:!0}):o.validArray.push(a)}return o}function d(e,t,o){if(t+e.length>10)alert(l.f.getI18NValue("support.attachments.count.exceeds",[10]));else for(var n=0;n<e.length;n++){var a=e[n],r=a.name,i=a.size;if(f(r))alert(l.f.getI18NValue("support.community.attachmentcontent.extensionnotpermitted"));else if(m(r))alert(l.f.getI18NValue("support.comments.attachment.fileNameSizeLimitation"));else if(0!==a.size)if(g(i))alert(l.f.getI18NValue("support.feedback.uploaded.file.exceeds.20mb"));else{var s=new FormData;s.append("file",a),o&&o(s)}else alert(l.f.getI18NValue("support.request.empty.attachment.message"))}}function f(e){var t=e.split(".").pop().toLowerCase();return-1!==["ade","adp","bat","chm","cmd","com","cpl","exe","hta","ins","isp","jar","lib","lnk","mde","msc","msp","mst","pif","scr","sct","shb","sys","vb","vbe","vxd","wsc","wsf","wsh","jse","vbs"].indexOf(t)}function m(e){return e.length>100}function g(e){return e>20971520}function h(e){var t=0;return e.forEach(function(e){t+=parseInt(e.size)}),t}function v(e,t){return!(!(null!==e.types||e.files&&e.files.length>0)||t.fromPaste||!(e.files&&e.files.length>0||(e.types.indexOf?-1!==e.types.indexOf("Files"):e.types.contains("application/x-moz-file"))||"Files"===e.types[0]))}function I(e,t,o){var n={};n.previewData=t.filter(function(e){return!e.isPreview&&c(e.name)}),n.previewData.filter(function(t,o){t.id===e&&(n.selectedIndex=o)}),o&&o(n)}function _(e,t,o){var n=e.indexOf("/api"),a=e;return n>-1&&(a=e.slice(n,e.length),a+="?orgId="+t+(o?"&inline=true":"")),a}function y(e,t){window.open(_(e,t,!0))}function x(e,t){window.location.href=_(e,t,!1)}function L(e,t,o,n){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:20,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,s=e.length,u=[],c=[],p=0;if(n&&s>n-o){var d=l.f.getI18NValue("support.attachments.count.exceeds",[n]);return a.a.resolve({isError:!0,errorI18N:d})}for(var g=0;g<s;g++){var h=e[g],v=h||{},I=v.size,_=void 0===I?0:I,y=v.name,x=void 0===y?"":y;if(p+=_,f(x)){var L=l.f.getI18NValue("support.community.attachmentcontent.extensionnotpermitted");u.push({errorI18N:L,fileName:x,errorType:"fileType"})}else if(m(x)){var b=l.f.getI18NValue("support.comments.attachment.fileNameSizeLimitation");u.push({errorI18N:b,fileName:x,errorType:"fileNameSize"})}else if(0===_){var N=l.f.getI18NValue("support.request.empty.attachment.message");u.push({errorI18N:N,fileName:x,errorType:"emptyFile"})}else c.push(h)}if(!c.length){if(1===u.length){var w=u[0].errorI18N;return a.a.resolve({isError:!0,errorI18N:w})}var E=l.f.getI18NValue("support.unable.to.process.your.request");return a.a.resolve({isError:!0,errorI18N:E})}if(0===p){var k=l.f.getI18NValue("support.request.empty.attachment.message");return a.a.resolve({isError:!0,errorI18N:k})}if(p+i>1024*r*1024){var P=l.f.getI18NValue("support.attachments.size.limit.exceeds",[r]);return a.a.resolve({isError:!0,errorI18N:P})}for(var C=[],O=[],A=[],U=function(e){var o=c[e];if(t){var n=new FormData;n.append("file",o);var a=t(n).then(function(e){var t=(e.data||{}).data,o=void 0===t?{}:t,n=o.id;n&&(C.push(o),O.push(n))},function(e){var t=o.name,n=l.f.getI18NValue("support.unable.to.process.your.request");throw u.push({errorI18N:n,fileName:t,errorType:"apiError"}),e});A.push(a)}},z=0;z<c.length;z++)U(z);var T={uploadFiles:C,inValidFiles:u,isError:!1,uploadFileIds:O};return a.a.all(A).then(function(){return T},function(){return C.length?T:{isError:!0,errorI18N:l.f.getI18NValue("support.unable.to.process.your.request")}})}function b(e,t){var o=e.name;return{index:t,isPreview:!0,size:e.size,name:o,href:URL.createObjectURL(e)}}},1901:function(e,t,o){e.exports={avatarGroup:"CompanyLogo-module__avatarGroup",companyAvatar:"CompanyLogo-module__companyAvatar",icon:"CompanyLogo-module__icon",textBoxHeading:"CompanyLogo-module__textBoxHeading",logoText:"CompanyLogo-module__logoText",logoBox:"CompanyLogo-module__logoBox",logoWarber:"CompanyLogo-module__logoWarber",logoContainer:"CompanyLogo-module__logoContainer",textBox:"CompanyLogo-module__textBox"}},645:function(e,t,o){"use strict";o.r(t);var n=o(12),a=o.n(n),r=o(9),l=o.n(r),i=o(10),s=o.n(i),u=o(13),c=o.n(u),p=o(14),d=o.n(p),f=o(0),m=o.n(f),g=o(1),h=o.n(g),v=o(26),I=o(1901),_=o.n(I),y=o(16),x=o(151),L=o.n(x),b=o(1344),N=o(1523),w=o(1031),E=o(8),k=o(1120),P=o(1153),C=o(316),O=function(e){function t(e){l()(this,t);var o=c()(this,(t.__proto__||a()(t)).call(this,e));return o.state={isViewPopuplogo:!1,isViewPopupfav:!1,logoURL:e.logoURL,favIconURL:e.favIconURL},o.onUploadLogo=o.onUploadLogo.bind(o),o.onUploadFavIcon=o.onUploadFavIcon.bind(o),o.onDeleteFavIcon=o.onDeleteFavIcon.bind(o),o.onDeleteLogo=o.onDeleteLogo.bind(o),o.showAlertLogo=o.showAlertLogo.bind(o),o.showAlertFav=o.showAlertFav.bind(o),o.toggleUploadPopup=o.toggleUploadPopup.bind(o),o.renderPageTips=o.renderPageTips.bind(o),o}return d()(t,e),s()(t,[{key:"onUploadLogo",value:function(e){var t=this,o=this.props.showMessage;this.props.updateLogo(e).then(function(e){t.setState({logoURL:e.data.res.logoURL}),o({type:"success",message:E.f.getI18NValue("support.logo.update.success")})},function(e){o({type:"alert",message:E.f.getI18NValue("support.logo.file.size.exceed")})})}},{key:"onUploadFavIcon",value:function(e){var t=this,o=this.props.showMessage;this.props.updateFavIcon(e).then(function(e){t.setState({favIconURL:e.data.res.faviconURL}),o({type:"success",message:E.f.getI18NValue("support.favicon.update.success")})},function(e){o({type:"alert",message:E.f.getI18NValue("support.favicon.file.size.exceed")})})}},{key:"onDeleteLogo",value:function(){var e=this,t=this.props.showMessage;this.props.onDeleteLogo().then(function(o){204==o.data.res.responseStatus&&(e.setState({logoURL:null}),t({type:"success",message:E.f.getI18NValue("support.logo.delete.success")}))},function(e){t({type:"alert",message:E.f.getI18NValue("support.zohocrm.integration.internal.error")})})}},{key:"onDeleteFavIcon",value:function(){var e=this,t=this.props.showMessage;this.props.onDeleteFavIcon().then(function(o){204==o.data.res.responseStatus&&(e.setState({favIconURL:null}),t({type:"success",message:E.f.getI18NValue("support.favicon.delete.success")}))},function(e){t({type:"alert",message:E.f.getI18NValue("support.zohocrm.integration.internal.error")})})}},{key:"showAlertLogo",value:function(e){var t=this;this.props.showAlert(e).then(function(){t.onDeleteLogo()})}},{key:"showAlertFav",value:function(e){var t=this;this.props.showAlert(e).then(function(){t.onDeleteFavIcon()})}},{key:"toggleUploadPopup",value:function(e,t){e.props.togglePopup(t)}},{key:"renderPageTips",value:function(){return m.a.createElement("div",null,m.a.createElement(k.a,{text:E.f.getI18NValue("support.setup.rebranding.help1")}),m.a.createElement(k.a,{text:E.f.getI18NValue("support.setup.help.someHelpHeading")}),m.a.createElement(P.a,{text:E.f.getI18NValue("support.setup.rebranding.logo.help.link"),url:"https://help.zoho.com/portal/kb/articles/rebranding-your-help-desk#personalize-logo"}))}},{key:"render",value:function(){return m.a.createElement(C.a,{favIcon:this.state.favIconURL},m.a.createElement(w.b,{helpInfoTitle:E.f.getI18NValue("support.setup.label.pagetips"),getHelpInfo:this.renderPageTips,needHelpInfo:!0},m.a.createElement(w.d,{title:E.f.getI18NValue("support.setup.search.sublabel.logo")}),m.a.createElement(w.a,null,m.a.createElement(y.Container,{alignBox:"column",className:_.a.logoContainer},m.a.createElement(y.Box,{className:_.a.logoBox},m.a.createElement("div",{className:_.a.avatarGroup},m.a.createElement("p",{className:_.a.logoText},m.a.createElement(L.a,{text:E.f.getI18NValue("support.setup.search.sublabel.logo"),id:"label5",size:"medium",palette:"primary"})),m.a.createElement(b.a,{imgSrc:this.state.logoURL,isViewPopup:this.state.isViewPopuplogo,onUploadImage:this.onUploadLogo,showAlert:this.showAlertLogo,toggleUploadPopup:this.toggleUploadPopup})),m.a.createElement("div",{className:_.a.avatarGroup},m.a.createElement("p",{className:_.a.logoText},m.a.createElement(L.a,{text:E.f.getI18NValue("support.label.favicon"),id:"label5",size:"medium",palette:"primary"})),m.a.createElement(b.a,{iconSize:"35",imgSrc:this.state.favIconURL,isViewPopup:this.state.isViewPopupfav,onUploadImage:this.onUploadFavIcon,showAlert:this.showAlertFav,size:"xlarge",toggleUploadPopup:this.toggleUploadPopup}))),m.a.createElement(y.Box,{className:_.a.logoBox},m.a.createElement(N.a,{editContent:E.f.getI18NValue("support.company.logo.size.dimention.text")}))))))}}]),t}(m.a.Component),A=O;O.propTypes={favIconURL:h.a.string,logoURL:h.a.string,onDeleteFavIcon:h.a.func,onDeleteLogo:h.a.func,showAlert:h.a.func,showMessage:h.a.func,updateFavIcon:h.a.func,updateLogo:h.a.func};var U=o(174),z=o(3),T=o(15),F=o(6);var S=o(24),D=function(e){function t(e){l()(this,t);var o=c()(this,(t.__proto__||a()(t)).call(this,e));return o.state={logoURL:"",favIconURL:"",islogoLoaded:!1,isFavLoaded:!1},o.updateOrgLogo=o.updateOrgLogo.bind(o),o.updateFavIcon=o.updateFavIcon.bind(o),o.onDeleteLogo=o.onDeleteLogo.bind(o),o.onDeleteFavIcon=o.onDeleteFavIcon.bind(o),o.showAlert=o.showAlert.bind(o),o}return d()(t,e),s()(t,[{key:"updateOrgLogo",value:function(e){var t=new FormData;return Object(U.o)(e,1,function(e){e.append("logo",e.get("file")),e.delete("file"),t=e}),this.props.updateOrganizationLogo(t)}},{key:"updateFavIcon",value:function(e){var t=new FormData;return Object(U.o)(e,1,function(e){e.append("favicon",e.get("file")),e.delete("file"),t=e}),this.props.updateOrganizationFavicon(t)}},{key:"onDeleteLogo",value:function(){return this.props.deleteOrgLogo()}},{key:"onDeleteFavIcon",value:function(){return this.props.deleteOrgFavIcon()}},{key:"showAlert",value:function(e){return this.props.showAlert(e)}},{key:"componentDidMount",value:function(){this.checkImage()}},{key:"checkImage",value:function(){var e=this;Object(T.a)("/api/v1/organizations/"+this.props.currentOrgId+"/logo",!1).get().then(function(t){204==t.responseStatus?e.setState({logoURL:null,islogoLoaded:!0}):e.setState({logoURL:"/api/v1/organizations/"+e.props.currentOrgId+"/logo",islogoLoaded:!0})}),Object(T.a)("/api/v1/organizations/"+this.props.currentOrgId+"/favicon",!1).get().then(function(t){204==t.responseStatus?e.setState({favIconURL:null,isFavLoaded:!0}):e.setState({favIconURL:"/api/v1/organizations/"+e.props.currentOrgId+"/favicon",isFavLoaded:!0})})}},{key:"render",value:function(){var e=this.props.currentOrgId;return this.state.isFavLoaded&&this.state.islogoLoaded?m.a.createElement(A,{logoURL:this.state.logoURL,favIconURL:this.state.favIconURL,currentOrgId:e,updateLogo:this.updateOrgLogo,updateFavIcon:this.updateFavIcon,onDeleteFavIcon:this.onDeleteFavIcon,onDeleteLogo:this.onDeleteLogo,showMessage:this.props.showMessage,showAlert:this.showAlert}):null}}]),t}(f.Component);D.propTypes={currentOrgId:h.a.string,deleteOrgFavIcon:h.a.func,deleteOrgLogo:h.a.func,showAlert:h.a.func,showMessage:h.a.func,updateOrganizationFavicon:h.a.func,updateOrganizationLogo:h.a.func};t.default=Object(v.connect)(function(e){return{currentOrgId:e.currentOrgId}},{updateOrganizationLogo:function(e){return{types:Object(F.m)(z.L.ORGANIZATION),callAPI:function(t){return Object(T.a)("/api/v1/organizations/"+t.currentOrgId+"/logo",!1).post("",e).then(function(e){return{res:e}})}}},updateOrganizationFavicon:function(e){return{types:Object(F.m)(z.L.ORGANIZATION),callAPI:function(t){return Object(T.a)("/api/v1/organizations/"+t.currentOrgId+"/favicon",!1).post("",e).then(function(e){return{res:e}})}}},showMessage:S.Q,deleteOrgFavIcon:function(){return{types:Object(F.m)(z.L.ORGANIZATION),callAPI:function(e){return Object(T.a)("/api/v1/organizations/"+e.currentOrgId+"/favicon",!1).del().then(function(e){return{res:e}})}}},deleteOrgLogo:function(){return{types:Object(F.m)(z.L.ORGANIZATION),callAPI:function(e){return Object(T.a)("/api/v1/organizations/"+e.currentOrgId+"/logo",!1).del().then(function(e){return{res:e}})}}},showAlert:S.a.showConfirmBox})(D)},987:function(e,t,o){"use strict";var n=o(12),a=o.n(n),r=o(9),l=o.n(r),i=o(10),s=o.n(i),u=o(13),c=o.n(u),p=o(14),d=o.n(p),f=o(0),m=o.n(f),g=o(1),h=o.n(g),v=o(993),I=o.n(v),_=function(e){function t(){return l()(this,t),c()(this,(t.__proto__||a()(t)).apply(this,arguments))}return d()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.href,o=e.title,n=e.target,a=e.className,r=e.children,l=e.rel,i=(e.download,e.dataTestid);return m.a.createElement("a",{href:t,target:n,className:I.a.link+" "+(a||""),"data-title":o,rel:l,dataId:i},r)}}]),t}(m.a.Component);t.a=_,_.defaultProps={text:"",target:"_blank",rel:"noopener noreferrer"},_.propTypes={className:h.a.string,href:h.a.string,isDownload:h.a.bool,rel:h.a.string,target:h.a.oneOf(["_blank","_self"]),text:h.a.string,title:h.a.string}},993:function(e,t,o){e.exports={link:"ExternalLink-module__link"}}}]);