(window.deskappJsonp=window.deskappJsonp||[]).push([[14],{1718:function(e,t,n){e.exports={extension:"MarketPlaceRightPanel-module__extension",headerDiv:"MarketPlaceRightPanel-module__headerDiv",marketTxt:"MarketPlaceRightPanel-module__marketTxt common-module__dotted common-module__oflow common-module__ellipsis",marketLink:"MarketPlaceRightPanel-module__marketLink",marketClose:"MarketPlaceRightPanel-module__marketClose",subContainer:"MarketPlaceRightPanel-module__subContainer"}},1719:function(e,t,n){e.exports={emptyMain:"MarketplaceEmpty-module__emptyMain",emptyTitle:"MarketplaceEmpty-module__emptyTitle common-module__semibold common-module__ftsmooth",emptyDesc:"MarketplaceEmpty-module__emptyDesc",button:"MarketplaceEmpty-module__button"}},173:function(e,t,n){e.exports={container:"Loading-module__container",dot:"Loading-module__dot",bounce:"Loading-module__bounce"}},458:function(e,t,n){"use strict";var a=n(12),o=n.n(a),i=n(9),r=n.n(i),l=n(10),s=n.n(l),c=n(13),m=n.n(c),d=n(14),p=n.n(d),u=n(0),_=n.n(u),f=n(173),g=n.n(f),h=n(16),E=function(e){function t(){return r()(this,t),m()(this,(t.__proto__||o()(t)).apply(this,arguments))}return p()(t,e),s()(t,[{key:"render",value:function(){return _.a.createElement(h.Container,{alignBox:"row",align:"both",className:g.a.container},_.a.createElement(h.Box,{className:g.a.dot}),_.a.createElement(h.Box,{className:g.a.dot}),_.a.createElement(h.Box,{className:g.a.dot}),_.a.createElement(h.Box,{className:g.a.dot}),_.a.createElement(h.Box,{className:g.a.dot}),_.a.createElement(h.Box,{className:g.a.dot}))}}]),t}(_.a.Component);t.a=E},661:function(e,t,n){"use strict";n.r(t);var a=n(20),o=n.n(a),i=n(12),r=n.n(i),l=n(9),s=n.n(l),c=n(10),m=n.n(c),d=n(13),p=n.n(d),u=n(14),_=n.n(u),f=n(0),g=n.n(f),h=n(1),E=n.n(h),x=n(26),k=n(53),y=n(17),v=n(1718),N=n.n(v),b=n(65),C=n(16),M=n(22),w=n(458),I=n(987),L=n(1719),P=n.n(L),D=n(73),T=n.n(D),B=n(8),R=function(e){function t(){return s()(this,t),p()(this,(t.__proto__||r()(t)).apply(this,arguments))}return _()(t,e),m()(t,[{key:"render",value:function(){return g.a.createElement("div",{className:P.a.emptyMain},g.a.createElement("div",{className:P.a.emptyTitle},B.f.getI18NValue("support.empty.extns.title")),g.a.createElement("div",{className:P.a.emptyDesc},B.f.getI18NValue("support.empty.extns.desc")),g.a.createElement("div",{className:P.a.button},g.a.createElement(T.a,{text:B.f.getI18NValue("support.mp.extnslist.goto"),palette:"primaryFilled"})))}}]),t}(g.a.Component);var A=n(30),O=n(6),j=function(e){function t(e){s()(this,t);var n=p()(this,(t.__proto__||r()(t)).call(this,e));return n.state={isEmpty:!1,noMoreData:!1,from:1},n.getExtensionList=n.getExtensionList.bind(n),n}return _()(t,e),m()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.licenseType,n=e.isLightAgent;"NEW_FREE"==t||n||ZApp.isDevMode()||this.getExtensionList()}},{key:"getExtensionList",value:function(e){var t=this,n=e?this.state.from+10:1,a=this.props,o=a.getExtensionList,i=a.deptId,r=a.location;return o(n,10,r,i).then(function(e){e.data.isEmpty&&t.setState({isEmpty:!0});var a=e.data.result.length%10!=0;t.setState({noMoreData:a,from:n})})}},{key:"render",value:function(){var e=this.props,t=e.extensions,n=void 0===t?[]:t,a=e.location,i=e.widgets,r=e.closePanel,l=this.state,s=l.isEmpty,c=l.noMoreData;return g.a.createElement(b.Card,{noMoreData:c,fetchData:this.getExtensionList.bind(this,!0),noNeedUpScroll:!0},g.a.createElement(b.CardHeader,null,g.a.createElement(C.Container,{alignBox:"row",align:"vertical",className:N.a.headerDiv},g.a.createElement(C.Box,{flexible:!0},g.a.createElement("span",{className:N.a.marketTxt},B.f.getI18NValue("support.setup.label.marketplace")),g.a.createElement(I.a,{href:"https://marketplace.zoho.com/desk",className:N.a.marketLink},g.a.createElement(A.TopbandFontIcon,{name:"newtab",size:"11",hoverColor:"primary"}))),g.a.createElement(C.Box,{className:N.a.marketClose,onClick:r},g.a.createElement(A.OthersFontIcon,{size:"12",name:"appMinimize"})))),g.a.createElement(b.CardContent,{className:N.a.subContainer},s?g.a.createElement(R,null):ZApp.isDevMode()?o()(i).map(function(e,t){var n=i[e];return n.location==a?g.a.createElement("div",{key:t,className:N.a.extension},g.a.createElement(M.P,{placeHolder:a,extensionId:n.installationId,widgetName:decodeURIComponent(n.sanitisedName)})):null}):n.length?n.map(function(e,t){return((e.manifest||{}).modules.widgets||[]).map(function(e,n){var o=i[e];return o.location==a?g.a.createElement(C.Container,{alignBox:"column",key:t,className:N.a.extension},g.a.createElement(M.P,{placeHolder:a,extensionId:o.installationId,widgetName:decodeURIComponent(o.sanitisedName)+"_"+o.widgetId})):null})}):g.a.createElement(w.a,null)))}}]),t}(f.Component);j.propTypes={closePanel:E.a.func,extensions:E.a.array,getExtensionList:E.a.func,isLightAgent:E.a.bool,licenseType:E.a.bool,widgets:E.a.object};t.default=Object(x.connect)(function(){var e=Object(y.w)();return function(t,n){var a=Object(O.c)(t.myInfo.profileId,t.module.profile);return{extensions:e(t,{deptId:n.deptId,location:n.location}),widgets:t.module.widgets,licenseType:t.license.licenseType,isLightAgent:a}}},{getExtensionList:k.g})(j)},987:function(e,t,n){"use strict";var a=n(12),o=n.n(a),i=n(9),r=n.n(i),l=n(10),s=n.n(l),c=n(13),m=n.n(c),d=n(14),p=n.n(d),u=n(0),_=n.n(u),f=n(1),g=n.n(f),h=n(993),E=n.n(h),x=function(e){function t(){return r()(this,t),m()(this,(t.__proto__||o()(t)).apply(this,arguments))}return p()(t,e),s()(t,[{key:"render",value:function(){var e=this.props,t=e.href,n=e.title,a=e.target,o=e.className,i=e.children,r=e.rel,l=(e.download,e.dataTestid);return _.a.createElement("a",{href:t,target:a,className:E.a.link+" "+(o||""),"data-title":n,rel:r,dataId:l},i)}}]),t}(_.a.Component);t.a=x,x.defaultProps={text:"",target:"_blank",rel:"noopener noreferrer"},x.propTypes={className:g.a.string,href:g.a.string,isDownload:g.a.bool,rel:g.a.string,target:g.a.oneOf(["_blank","_self"]),text:g.a.string,title:g.a.string}},993:function(e,t,n){e.exports={link:"ExternalLink-module__link"}}}]);