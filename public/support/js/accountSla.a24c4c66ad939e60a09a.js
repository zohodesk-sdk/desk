(window.deskappJsonp=window.deskappJsonp||[]).push([[36],{1247:function(t,e,n){"use strict";var a=n(12),o=n.n(a),r=n(9),c=n.n(r),i=n(10),s=n.n(i),l=n(13),u=n.n(l),m=n(14),d=n.n(m),p=n(0),f=n.n(p),h=n(1),g=n.n(h),A=n(1248),y=n.n(A),b=n(30),v=n(120),E=n.n(v),_=function(t){function e(t){c()(this,e);var n=u()(this,(e.__proto__||o()(e)).call(this,t));return n.openUrl=n.openUrl.bind(n),n.editEntity=n.editEntity.bind(n),n.deleteEntity=n.deleteEntity.bind(n),n}return d()(e,t),s()(e,[{key:"openUrl",value:function(t){return function(){return window.open(t,"_blank")}}},{key:"deleteEntity",value:function(){var t=this.props,e=t.deleteEntity;e(t.entityId)}},{key:"editEntity",value:function(){var t=this.props,e=t.editEntity;e(t.entityId,t.entity)}},{key:"render",value:function(){var t=this.props,e=t.title,n=t.viewUrl,a=t.showActions,o=t.needBackBtn,r=t.showContactCrmInfo;return f.a.createElement("div",{className:y.a.followTitle},o?f.a.createElement("span",{className:y.a.backIcon,onClick:r},f.a.createElement(E.a,{name:"arrowLeft2",size:"13"})):null,f.a.createElement("span",{className:y.a.user},e),a||n?f.a.createElement("span",{className:y.a.fRight},a?f.a.createElement(f.a.Fragment,null,f.a.createElement("span",{className:y.a.icon,onClick:this.editEntity},f.a.createElement(b.TopbandFontIcon,{name:"pen2",size:"14",color:"smoke19",hoverColor:"primary"})),f.a.createElement("span",{className:y.a.icon,onClick:this.deleteEntity},f.a.createElement(b.TopbandFontIcon,{name:"delete2",size:"14",color:"smoke19",hoverColor:"danger15"}))):"",n?f.a.createElement("span",{className:y.a.icon},f.a.createElement(b.TopbandFontIcon,{name:"newtab",onClick:this.openUrl(n),size:"14"})):""):"")}}]),e}(p.Component);e.a=_,_.propTypes={deleteEntity:g.a.func,editEntity:g.a.func,entity:g.a.string,entityId:g.a.string,needBackBtn:g.a.bool,showActions:g.a.bool,showContactCrmInfo:g.a.func,title:g.a.string,viewUrl:g.a.string},_.defaultProps={showActions:!1}},1248:function(t,e,n){t.exports={followTitle:"LeftPanelHeader-module__followTitle",user:"LeftPanelHeader-module__user common-module__dotted common-module__oflow common-module__ellipsis",fRight:"LeftPanelHeader-module__fRight",icon:"LeftPanelHeader-module__icon"}},1322:function(t,e,n){"use strict";n.d(e,"d",function(){return f}),n.d(e,"c",function(){return h}),n.d(e,"b",function(){return g}),n.d(e,"a",function(){return A});var a=n(23),o=n.n(a),r=n(5),c=n.n(r),i=n(2),s=n.n(i),l=n(15),u=n(6),m=n(46),d=n(3),p=n(7);function f(t){return{types:Object(u.m)("GET_CONTRACT"),callAPI:function(e){return Object(l.a)(d.w+"contracts/"+t,!1,{orgId:e.currentOrgId}).get().then(function(t){return s()(Object(p.normalize)(t,Object(p.schema)(d.L.CONTRACT_L)))}).catch(function(t){return{status:t.status}})}}}var h=function(t){return{types:Object(u.m)("GET_ACCOUNT_CONTRACTS"),callAPI:function(e){var n=Object(m.a)(e,!0);return Object(l.a)(d.w+"contracts?accountId="+t+n+"&sortBy=createdTime",!1,{orgId:e.currentOrgId}).get().then(function(e){var n=204!=e.responseStatus?e.data:[],a={id:t,contracts:n};return Object(p.normalize)(a,Object(p.schema)(d.L.ACCOUNT_L,{mapping:{contracts:Object(p.arrayOf)(Object(p.schema)(d.L.CONTRACT_L))}}))}).catch(function(t){return{status:t.status}})}}};function g(t,e){return{types:Object(u.m)("DELETE_ACCOUNT_CONTRACT"),callAPI:function(n){var a=n.module.account[t].contracts.filter(function(t){return t!=e});return Object(l.a)(d.w+"contracts/moveToTrash",!1,{orgId:n.currentOrgId}).post("",{contractIds:[e]}).then(function(){return{entities:{account:c()({},t,{id:t,contracts:a})}}}).catch(function(t){return{status:t.status}})}}}var A=function(t,e){return{types:Object(u.m)("CREATE_CONTRACT"),callAPI:function(n){var a=n.module.account[t].contracts;return Object(l.a)(d.w+"contracts",!1,{orgId:n.currentOrgId}).post("",e).then(function(e){return{entities:{account:c()({},t,{id:t,contracts:[e.id].concat(o()(a))}),contract:c()({},e.id,e)}}})}}}},1474:function(t,e,n){"use strict";n.d(e,"b",function(){return a}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return r});var a=function(t){return{type:"OPEN_ACCOUNT_SLA_FORM",data:t}},o=function(){return{type:"CLOSE_ACCOUNT_SLA_FORM"}},r=function(t){return{type:"SLA_FORM_FIELD_CHANGE",data:t}}},1475:function(t,e,n){"use strict";n.d(e,"b",function(){return m}),n.d(e,"a",function(){return d});var a=n(5),o=n.n(a),r=n(23),c=n.n(r),i=n(15),s=n(6),l=n(3),u=n(7);function m(t,e,n,a){var o=""+(t&&"allDepartment"!=t?"&departmentId="+t:"")+(e?"&status="+e:"")+(n?"&from="+n:"")+(a?"&limit="+a:"");return o=o.substring(1,o.length),{types:Object(s.m)("GET_SLAMETAINFO"),callAPI:function(t){return Object(i.a)(l.w+"SLAsMetaInfo"+(o?"?"+o:""),!1,{orgId:t.currentOrgId}).get().then(function(t){return Object(u.normalize)(204!=t.responseStatus?t.data:[],Object(u.arrayOf)(Object(u.schema)(l.L.SLA_L)))}).catch(function(t){return{status:t.status}})}}}var d=function(t,e,n){var a=n?"ADD_ACCOUNT_SLA":"REMOVE_ACCOUNT_SLA";return{types:Object(s.m)(a),callAPI:function(a){var r=a.module.account[t].associatedSLAIds||[],s=void 0;return s=n?[].concat(c()(r),[e]):r.filter(function(t){return t!=e}),Object(i.a)(l.w+"accounts/"+t,!1,{orgId:a.currentOrgId}).patch("",{associatedSLAIds:s}).then(function(){return{entities:{account:o()({},t,{associatedSLAIds:s})}}}).catch(function(t){return{status:t.status}})}}}},1476:function(t,e,n){"use strict";var a=n(12),o=n.n(a),r=n(9),c=n.n(r),i=n(10),s=n.n(i),l=n(13),u=n.n(l),m=n(14),d=n.n(m),p=n(0),f=n.n(p),h=n(1),g=n.n(h),A=n(1477),y=n.n(A),b=function(t){function e(t){return c()(this,e),u()(this,(e.__proto__||o()(e)).call(this,t))}return d()(e,t),s()(e,[{key:"render",value:function(){var t=this.props.text;return f.a.createElement("div",{className:y.a.message},t)}}]),e}(p.Component);e.a=b,b.propTypes={text:g.a.string.isRequired}},1477:function(t,e,n){t.exports={message:"EmptyMessage-module__message"}},173:function(t,e,n){t.exports={container:"Loading-module__container",dot:"Loading-module__dot",bounce:"Loading-module__bounce"}},1754:function(t,e,n){t.exports={fpbtn:"AccountSLA-module__fpbtn",proHgt:"AccountSLA-module__proHgt",fProSection:"AccountSLA-module__fProSection"}},1755:function(t,e,n){t.exports={section:"AccountSlaProfile-module__section",part:"AccountSlaProfile-module__part",icon:"AccountSlaProfile-module__icon",rgt:"AccountSlaProfile-module__rgt",user:"AccountSlaProfile-module__user common-module__dotted common-module__oflow common-module__ellipsis",contact:"AccountSlaProfile-module__contact",phone:"AccountSlaProfile-module__phone",fRight:"AccountSlaProfile-module__fRight"}},458:function(t,e,n){"use strict";var a=n(12),o=n.n(a),r=n(9),c=n.n(r),i=n(10),s=n.n(i),l=n(13),u=n.n(l),m=n(14),d=n.n(m),p=n(0),f=n.n(p),h=n(173),g=n.n(h),A=n(16),y=function(t){function e(){return c()(this,e),u()(this,(e.__proto__||o()(e)).apply(this,arguments))}return d()(e,t),s()(e,[{key:"render",value:function(){return f.a.createElement(A.Container,{alignBox:"row",align:"both",className:g.a.container},f.a.createElement(A.Box,{className:g.a.dot}),f.a.createElement(A.Box,{className:g.a.dot}),f.a.createElement(A.Box,{className:g.a.dot}),f.a.createElement(A.Box,{className:g.a.dot}),f.a.createElement(A.Box,{className:g.a.dot}),f.a.createElement(A.Box,{className:g.a.dot}))}}]),e}(f.a.Component);e.a=y},642:function(t,e,n){"use strict";n.r(e);var a=n(23),o=n.n(a),r=n(11),c=n.n(r),i=n(12),s=n.n(i),l=n(9),u=n.n(l),m=n(10),d=n.n(m),p=n(13),f=n.n(p),h=n(14),g=n.n(h),A=n(0),y=n.n(A),b=n(26),v=n(19),E=n.n(v),_=n(1),I=n.n(_),S=n(1754),C=n.n(S),N=n(16),L=n(1247),w=n(1755),T=n.n(w),O=n(30),k=n(8),D=function(t){function e(t){u()(this,e);var n=f()(this,(e.__proto__||s()(e)).call(this,t));return n.editSla=n.editSla.bind(n),n.deleteSla=n.deleteSla.bind(n),n}return g()(e,t),d()(e,[{key:"deleteSla",value:function(){var t=this.props,e=t.deleteSla;e(t.slaId)}},{key:"editSla",value:function(){var t=this.props,e=t.editSla;e(t.slaId,"sla")}},{key:"render",value:function(){var t=this.props,e=t.entity,n=t.entityName,a=t.department,o=t.date,r=t.showActions;return y.a.createElement(N.Container,{className:T.a.part,alignBox:"row",isCover:!1},y.a.createElement(N.Box,{className:T.a.icon},e==k.f.getI18NValue("support.gettingstarted.label.sla")?y.a.createElement(O.SetupFontIcon,{name:"contract",size:"16"}):y.a.createElement(O.TicketsFontIcon,{name:"newuser",size:"16"})),y.a.createElement(N.Box,{className:T.a.rgt,flexible:!0},y.a.createElement("div",null,y.a.createElement("span",{className:T.a.user},e),y.a.createElement("span",{className:T.a.fRight},r?y.a.createElement(y.a.Fragment,null,y.a.createElement("span",{className:T.a.icon,onClick:this.editSla},y.a.createElement(O.TopbandFontIcon,{name:"pen2",size:"14",color:"smoke19",hoverColor:"primary"})),y.a.createElement("span",{className:T.a.icon,onClick:this.deleteSla},y.a.createElement(O.TopbandFontIcon,{name:"delete2",size:"14",color:"smoke19",hoverColor:"danger15"}))):"")),n?y.a.createElement("span",{className:T.a.contact},n):"",a?y.a.createElement("span",{className:T.a.phone},a):"",o?y.a.createElement("span",{className:T.a.contact},o):""))}}]),e}(A.Component),F=D;D.propTypes={date:I.a.string,deleteSla:I.a.func,department:I.a.string,editSla:I.a.func,entity:I.a.string,entityName:I.a.string,showActions:I.a.bool,slaId:I.a.string};var x=n(73),P=n.n(x),j=n(458),M=n(1475),B=n(1322),R=n(24),V=n(2),z=n.n(V),U=n(21),H=function(t){return t.module.sla},G=function(t){return t.module.department},q=Object(U.createSelector)([function(t){return t.module.account[t.routing.paramMap.moduleId].associatedSLAIds||[]},H,function(t){return t.departmentMapper[t.routing.paramMap.deptName]},G],function(t,e,n,a){return t.reduce(function(t,r){var c=e[r];if(c&&(c.departmentId===n||"allDepartment"===n)){var i=z()({},c,{deptName:a[c.departmentId].name});return[].concat(o()(t),[i])}return t},[])}),J=Object(U.createSelector)([function(t){return t.module.account[t.routing.paramMap.moduleId].contracts||[]},H,function(t){return t.module.contract},G],function(t,e,n,a){return t.filter(function(t){return function(t,e){var n=new Date(t),a=new Date;if(null===e)return n<=a;var o=new Date(e);return a>=n&&a<=o}(n[t].startDate,n[t].endDate)}).map(function(t){return z()({},n[t],{sla:e[n[t].associatedSLAId],deptName:a[n[t].departmentId].name})})}),K=n(17),Q=n(362),W=n(1476),X=n(1474),Y=function(t){function e(t){u()(this,e);var n=f()(this,(e.__proto__||s()(e)).call(this,t));n.state={isFetchDone:!1,showActions:!1,buttonText:"",slaText:""};var a=t.contractsLabel,o=t.accountLabel,r=getI18NValue("support.permission.delete.comment").toLowerCase()+"\n      "+getI18NValue("support.account.slacontract",[a,o]);return n.alertMessage=""+getI18NValue("support.delete.wouldlike",r),n.alertTitle=getI18NValue("support.social.ticket.deletetitle",getI18NValue("support.gettingstarted.label.sla")),n.showActions=n.showActions.bind(n),n.hideActions=n.hideActions.bind(n),n.deleteSla=n.deleteSla.bind(n),n.deleteContract=n.deleteContract.bind(n),n.openForm=n.openForm.bind(n),n.openEditForm=n.openEditForm.bind(n),n}return g()(e,t),d()(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.getSlaMetaInfo,a=e.getAccountContract,o=e.accountId,r=n(e.currentDept,null,1,51),i=a(o);c.a.all([r,i]).then(function(){return t.setState({isFetchDone:!0})})}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.currentDept,a=e.accountSLAs,o=e.accountContracts,r=e.contractsLabel;if(t.currentDept!=n||t.accountSLAs!=a||t.accountContracts!=o){var c=getI18NValue("support.gettingstarted.label.sla"),i="allDepartment"===n||!a.length&&!o.length?getI18NValue("support.workflow.new.task",c):getI18NValue("support.label.add.new.module",r);this.setState({buttonText:i,slaText:c})}}},{key:"showActions",value:function(){this.setState({showActions:!0})}},{key:"hideActions",value:function(){this.setState({showActions:!1})}},{key:"formatDate",value:function(t,e){var n=new Q.a(t),a=new Q.a(e);return n.format("dd mmmm yyyy")+" - "+a.format("dd mmmm yyyy")}},{key:"displayPrivilageError",value:function(){var t=this.props.showAlert,e=k.f.getI18NValue;t({submitText:e("crm.button.ok"),isActive:!0,title:e("support.history.operation.label.wfalert"),iconName:"exclamationThincircle",message:e("support.access.user.error"),iconSize:"30"}).then(function(){},function(){})}},{key:"deleteSla",value:function(t){var e=this,n=this.props,a=n.showAlert,o=n.accountId,r=n.associateAccountSLA,c=n.accountEditPermission,i=k.f.getI18NValue;c?a({submitText:i("support.permission.delete.comment"),cancelText:i("support.label.cancel"),isActive:!0,title:this.alertTitle,iconName:"delete2",message:this.alertMessage,type:"confirmation",iconSize:"15",isBoldIcon:!0}).then(function(){return r(o,t,!1).then(function(t){403===t.data.status&&e.displayPrivilageError()})},function(){}):this.displayPrivilageError()}},{key:"deleteContract",value:function(t){var e=this,n=this.props,a=n.deleteAccountContract,o=n.accountId,r=n.accountDeletePermission,c=n.contractDeletePermission,i=n.showAlert,s=k.f.getI18NValue;r&&c?i({submitText:s("support.permission.delete.comment"),cancelText:s("support.label.cancel"),isActive:!0,title:this.alertTitle,iconName:"delete2",message:this.alertMessage,type:"confirmation",iconSize:"15",isBoldIcon:!0}).then(function(){return a(o,t).then(function(t){403===t.data.status&&e.displayPrivilageError()})},function(){}):this.displayPrivilageError()}},{key:"openForm",value:function(){if(this.props.accountSlaFormInfo.isOpen)return this.props.closeAccountSlaForm();var t=this.props,e=t.openAccountSlaForm,n=t.departments,a=t.currentDept,r=t.accountSLAs,c=t.accountContracts,i=void 0;i="allDepartment"===a?{value:"none",options:[{id:"none",name:"-- Choose Department --"}].concat(o()(n))}:{value:a,options:[]};var s="allDepartment"===a||!r.length&&!c.length?"sla":"contract";e({department:i,sla:{value:"none",options:[{id:"none",name:"-- Choose SLA --"}]},agentNotificationList:{value:[]},notifyDays:{value:""},formTitle:this.state.buttonText,formType:s,entityData:null})}},{key:"openEditForm",value:function(t,e){var n=this.props,a=n.departments,r=n.contractsLabel,c=n.accountContracts,i=n.accountSLAs,s=n.currentDept,l=n.openAccountSlaForm,u=k.f.getI18NValue,m=void 0;m=u("support.module.edit","sla"===e?u("support.gettingstarted.label.sla"):r);var d=void 0;d="sla"===e?i.find(function(e){return e.id===t}):c.find(function(e){return e.id===t});l({department:"allDepartment"===s?{value:d.departmentId,options:[{id:"none",name:"-- Choose Department --"}].concat(o()(a))}:{value:d.departmentId,options:[]},sla:{value:"none",options:[{id:"none",name:"-- Choose SLA --"}]},formTitle:m,formType:e,entityData:d,agentNotificationList:{value:[]},notifyDays:{value:""}})}},{key:"render",value:function(){var t=this,e=this.props,n=e.contractsLabel,a=e.accountSLAs,o=e.accountContracts,r=e.currentDept,c=k.f.getI18NValue,i=this.state,s=i.showActions,l=i.isFetchDone,u=i.slaText,m=i.buttonText,d=c("support.gettingstarted.label.sla")+" & "+c("support.request.information",n);return l?y.a.createElement(N.Container,{alignBox:"column",className:C.a.fProSection},y.a.createElement(N.Box,{className:C.a.proHgt,scroll:"vertical",flexible:!0,onMouseEnter:this.showActions,onMouseLeave:this.hideActions},a.length||o.length?y.a.createElement(y.a.Fragment,null,0!=o.length&&o.map(function(e,a){return y.a.createElement(y.a.Fragment,{key:a},y.a.createElement(L.a,{title:d,showActions:s,entity:"contract",entityId:e.id,deleteEntity:t.deleteContract,editEntity:t.openEditForm}),y.a.createElement(F,{entity:u,entityName:E()("sla.name",e),department:"allDepartment"===r?e.deptName:null}),y.a.createElement(F,{entity:n,entityName:e.contractName,date:t.formatDate(e.startDate,e.endDate)}))}),0!=a.length&&("allDepartment"===r||0===o.length)&&a.map(function(e,n){return y.a.createElement(y.a.Fragment,{key:n},0===o.length&&y.a.createElement(L.a,{entity:"sla",title:d,showActions:s,entityId:e.id,deleteEntity:t.deleteSla,editEntity:t.openEditForm}),y.a.createElement(F,{entity:u,entityName:e.name,department:"allDepartment"===r?e.deptName:null,showActions:0!==o.length&&s,slaId:e.id,deleteSla:t.deleteSla,editSla:t.openEditForm}))})):y.a.createElement(y.a.Fragment,null,y.a.createElement(L.a,{title:d,showActions:!1}),y.a.createElement(W.a,{text:k.f.getI18NValue("support.accounts.slaempty",n)}))),y.a.createElement(N.Box,{className:C.a.fpbtn},y.a.createElement(P.a,{text:m,palette:"primary",onClick:this.openForm}))):y.a.createElement(j.a,null)}}]),e}(y.a.Component);Y.propTypes={accountContracts:I.a.array,accountId:I.a.string,accountLabel:I.a.string,accountSLAs:I.a.array,accountSlaFormInfo:I.a.object,associateAccountSLA:I.a.func,closeAccountSlaForm:I.a.func,contractsLabel:I.a.string,currentDept:I.a.string,deleteAccountContract:I.a.func,departments:I.a.array,getAccountContract:I.a.func,getSlaMetaInfo:I.a.func,openAccountSlaForm:I.a.func,showAlert:I.a.func};e.default=Object(b.connect)(function(t){return{accountId:t.routing.paramMap.moduleId,currentDept:t.departmentMapper[t.routing.paramMap.deptName],departments:Object(K.e)(t),contractsLabel:t.moduleMeta.contracts.singularLabel,accountLabel:t.moduleMeta.accounts.singularLabel,accountSLAs:q(t),accountContracts:J(t),accountSlaFormInfo:t.accountSlaFormInfo,accountEditPermission:Object(K.Ib)(t,{module:"accounts",mode:"edit"}),accountDeletePermission:Object(K.Ib)(t,{module:"accounts",mode:"delete"}),contractCreatePermission:Object(K.Ib)(t,{module:"contracts",mode:"create"}),contractDeletePermission:Object(K.Ib)(t,{module:"contracts",mode:"delete"})}},{getSlaMetaInfo:M.b,getAccountContract:B.c,showAlert:R.a.showConfirmBox,associateAccountSLA:M.a,deleteAccountContract:B.b,openAccountSlaForm:X.b,closeAccountSlaForm:X.a})(Y)}}]);