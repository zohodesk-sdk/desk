(window.deskappJsonp=window.deskappJsonp||[]).push([[57],{"./src/analytics/constants/dashboards/index.js":function(e,a,o){"use strict";o.d(a,"a",function(){return t}),o.d(a,"c",function(){return s}),o.d(a,"f",function(){return l}),o.d(a,"e",function(){return r}),o.d(a,"g",function(){return i}),o.d(a,"d",function(){return c}),o.d(a,"b",function(){return d});var n=o("./src/fz-i18n/index.js"),t="all-dashboards",s="firstResponse",l="response",r="resolution",i={HOURS_24:"24hours",HOURS_48:"48hours",HOURS_72:"72hours"},c=[{value:n.h.getI18NValue("support.label.print"),iconName:"printing2",iconSize:"15",isArrow:!1,id:2}],d={MULTIPLE_CHART:"MULTIPLE_CHART",LINE_CHART:"LINE_CHART",BAR_CHART:"BAR_CHART",VERTICAL_BAR_CHART:"VERTICAL_BAR_CHART",HORIZONTAL_BAR_CHART:"HORIZONTAL_BAR_CHART",DONUT_CHART:"DONUT_CHART",DIAL_CHART:"DIAL_CHART"}},"./src/analytics/constants/index.js":function(e,a,o){"use strict";o.d(a,"l",function(){return t}),o.d(a,"i",function(){return s}),o.d(a,"c",function(){return l}),o.d(a,"a",function(){return r}),o.d(a,"b",function(){return i}),o.d(a,"k",function(){return c}),o.d(a,"h",function(){return d}),o.d(a,"d",function(){return u}),o.d(a,"j",function(){return m}),o.d(a,"e",function(){return p}),o.d(a,"f",function(){return h}),o.d(a,"g",function(){return b});var n=o("./src/fz-i18n/index.js"),t={DASHBOARDS:"dashboards",REPORTS:"reports"},s=31,l="CUSTOM_IN_DATE",r=[{id:"BAR",title:n.h.getI18NValue("support.survey.report.chart.bar")},{id:"STACKEDBAR",title:n.h.getI18NValue("crm.dashboard.label.stacked.bar")},{id:"PERCENTAGEBAR",title:n.h.getI18NValue("crm.dashboard.label.precentage.bar")},{id:"PIE",title:n.h.getI18NValue("crm.report.pie")},{id:"FUNNEL",title:n.h.getI18NValue("crm.report.funnel")},{id:"LINE",title:n.h.getI18NValue("crm.report.line")},{id:"MULTIPLELINE",title:n.h.getI18NValue("support.dashboard.label.multiple.line")},{id:"TABLE",title:n.h.getI18NValue("crm.dashboard.label.table")}],i={BAR:"bar",STACKEDBAR:"stackedBar",PERCENTAGEBAR:"percentageBar",PIE:"pie",FUNNEL:"funnel",LINE:"line",MULTIPLELINE:"multiLine",TABLE:"table",TICKETS:"ticket",TASKS:"task",CONTACTS:"contact",ACCOUNTS:"account",EMBEDED:"embed"},c=[{displayLabel:n.h.getI18NValue("crm.report.record.count"),fieldId:"Record Count"}],d=[{label:n.h.getI18NValue("support.md.label.last24hours"),id:"LAST24HOURS"},{label:n.h.getI18NValue("support.filter.today.label"),id:"TODAY"},{label:n.h.getI18NValue("support.filter.yesterday.lable"),id:"YESTERDAY"}],u=[{label:n.h.getI18NValue("support.survey.last.7days"),id:"LAST_7_DAYS"},{label:n.h.getI18NValue("support.survey.last.30days"),id:"LAST_30_DAYS"},{label:n.h.getI18NValue("Current Week"),id:"THIS_WEEK"},{label:n.h.getI18NValue("Last Week"),id:"LAST_WEEK"},{label:n.h.getI18NValue("Current Month"),id:"THIS_MONTH"},{label:n.h.getI18NValue("Last Month"),id:"LAST_MONTH"},{label:n.h.getI18NValue("Custom"),id:"CUSTOM_IN_DATE"}],m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"],p=[{value:n.h.getI18NValue("support.setup.label.export"),iconName:"fileExcel",iconSize:"15",id:1}],h=[{value:n.h.getI18NValue("support.overview.export.csv"),id:"csv",index:1},{value:n.h.getI18NValue("support.overview.export.excel"),id:"xls",index:2}],b=[{value:n.h.getI18NValue("support.overview.export.pdf"),id:"pdf",index:3}]},"./src/analytics/containers/AnalyticsLeftMenu/AnalyticsLeftMenu.js":function(e,a,o){"use strict";o.r(a);var n=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/defineProperty.js"),t=o.n(n),s=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),l=o.n(s),r=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),i=o.n(r),c=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),d=o.n(c),u=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),m=o.n(u),p=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),h=o.n(p),b=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),v=o.n(b),g=o("./src/fz-i18n/index.js"),f=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),_=o.n(f),C=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react-redux/es/index.js"),k=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/selectn/index.js"),S=o.n(k),A=o("./src/components/Lhs/Lhs.js"),N=o("./src/components/Lhs/Lhs.module.css"),x=o.n(N),y=o("./src/components/Lhs/Menulist/Menulist.js"),j=o("./src/components/Lhs/Menucollapse/Menucollapse.js"),E=o("./src/components/Lhs/Menutree/Menutree.js"),I=o("./src/components/Lhs/Menutreetitle/Menutreetitle.js"),w=o("./src/components/ViewSearchEmpty/ViewSearchEmpty.js"),L=o("./src/containers/LhsContainer/LhsContainer.js"),D=(o("./src/constants/index.js"),o("./src/analytics/constants/index.js")),T=o("./src/analytics/constants/dashboards/index.js"),z=o("./src/actions/index.js"),M=o("./src/reducers/selector.js"),R=o("./src/analytics/reducers/selector.js"),V=o("./src/analytics/containers/asyncComponent.js"),B=o("./src/components/PortalLayer/PortalLayer.js"),F=function(e){function a(e){i()(this,a);var o=m()(this,(a.__proto__||l()(a)).call(this,e));return o.state={dashboardSearchValue:"",reportSearchValue:"",isFolderSearchActive:!1,isFolderForm:!1},o.onDashboardsView=o.onMenuClick.bind(o,D.l.DASHBOARDS),o.onReportsView=o.onMenuClick.bind(o,D.l.REPORTS),o.onViewSearch=o.onViewSearch.bind(o),o.onDashboardsSearch=o.onDashboardsSearch.bind(o),o.onReportsSearch=o.onReportsSearch.bind(o),o.getDashboardsFolderFilterList=o.getDashboardsFolderFilterList.bind(o),o.onDashboardView=o.onDashboardView.bind(o),o.onAddFolder=o.onShowHideFolderForm.bind(o,!0),o.getReportsFolderFilterList=o.getReportsFolderFilterList.bind(o),o.onReportView=o.onReportView.bind(o),o.onOverview=o.onOverview.bind(o),o.onFolderSearchActive=o.onFolderActive.bind(o,!0),o.onFolderSearchClose=o.onFolderActive.bind(o,!1),o.onHideFolderForm=o.onShowHideFolderForm.bind(o,!1),o.handleFolderToggle=o.handleFolderToggle.bind(o),o}return h()(a,e),d()(a,[{key:"handleFolderToggle",value:function(e){this.onFolderToggle=e}},{key:"onOverview",value:function(){var e=this.props,a=e.orgName,o=e.deptName;(0,e.push)({pathname:"/"+a+"/"+o+"/"+e.moduleMeta.dashboards.sanitizedName+"/details/overview"})}},{key:"onMenuClick",value:function(e){var a=this.props,o=a.orgName,n=a.deptName,t=a.push,s=a.moduleMeta,l="";e===D.l.REPORTS?l=s.reports.sanitizedName+"/list":e===D.l.DASHBOARDS&&(l=s.dashboards.sanitizedName+"/list/"+T.a),t({pathname:"/"+o+"/"+n+"/"+l})}},{key:"onModuleView",value:function(e,a){var o=this.props,n=o.orgName,t=o.deptName,s=o.push,l=o.moduleMeta,r="";e===D.l.REPORTS?r=l.reports.sanitizedName:e===D.l.DASHBOARDS&&(r=l.dashboards.sanitizedName),s({pathname:"/"+n+"/"+t+"/"+r+"/list/"+a})}},{key:"onViewSearch",value:function(e,a){this.setState(t()({},e,a))}},{key:"onDashboardsSearch",value:function(e){this.onViewSearch("dashboardSearchValue",e)}},{key:"onReportsSearch",value:function(e){this.onViewSearch("reportSearchValue",e)}},{key:"onDashboardView",value:function(e){this.onModuleView(D.l.DASHBOARDS,e)}},{key:"getDashboardsFolderFilterList",value:function(){var e=[],a=this.props,o=a.dashboardsFoldersList,n=a.dashboardsView,t=a.isDashboardsView,s=this.state.dashboardSearchValue;return t&&o.length&&(e=o.filter(function(e){return n[e].name.toLowerCase().includes(s.toLowerCase())})),e}},{key:"getReportsFolderFilterList",value:function(){var e=[],a=this.props,o=a.reportsFoldersList,n=a.reportsView,t=a.isReportsView,s=this.state.reportSearchValue;return t&&o.length&&(e=o.filter(function(e){return n[e].name.toLowerCase().includes(s.toLowerCase())})),e}},{key:"onReportView",value:function(e){this.onModuleView(D.l.REPORTS,e)}},{key:"onFolderActive",value:function(e){this.setState({isFolderSearchActive:e})}},{key:"onShowHideFolderForm",value:function(e){this.onFolderToggle(e)}},{key:"render",value:function(){var e=this,a=g.h.getI18NValue,o=this.props,n=o.moduleMeta,t=(o.isReportsView,o.isDashboardsView),s=o.dashboardsView,l=o.viewName,r=(o.reportsView,this.state),i=r.dashboardSearchValue,c=(r.reportSearchValue,r.isFolderSearchActive),d=this.getDashboardsFolderFilterList();this.getReportsFolderFilterList();return v.a.createElement(v.a.Fragment,null,v.a.createElement(L.a,{dataId:"dashboardLPView"},v.a.createElement(A.b,null,v.a.createElement("div",{className:x.a.lhsMenu},v.a.createElement(y.a,{text:"Overview",iconName:"ZD-overviewNew3",onClick:this.onOverview})),v.a.createElement("div",{className:x.a.lhsMenu},v.a.createElement(y.a,{text:n.dashboards.displayLabel,isAdd:t,isSearch:!1,isActive:t,onClick:this.onDashboardsView,addClick:this.onAddFolder})),t?v.a.createElement("div",{className:x.a.lhsGroup},v.a.createElement("div",{className:x.a.lhsGtree},v.a.createElement(E.a,{text:"All Dashboards",key:T.a,viewName:T.a,count:s[T.a]?s[T.a].dashboards.length:0,isActive:l===T.a,click:this.onDashboardView,needCount:!0})),v.a.createElement("div",{className:x.a.lhsGtitle},v.a.createElement(I.a,{isActive:!0,text:"Folders",isSearchNeeded:!0,isSearchActive:c,onSearch:this.onDashboardsSearch,onSearchActivate:this.onFolderSearchActive,isCloseNeeded:!0,placeHolder:a("support.search","Folder"),onCloseSearch:this.onFolderSearchClose})),d.length?d.map(function(a){var o=s[a],n=o.name,t=o.id,r=o.dashboards;if(l=l||T.a,t!==T.a)return v.a.createElement(E.a,{text:n,key:t,viewName:t,count:r.length,isActive:l===t,click:e.onDashboardView,needCount:!0})}):i.length?v.a.createElement(w.a,{text:a("There are no folder matching the keyword"),searchWord:i}):null):null,v.a.createElement("div",{className:x.a.lhsMenu},v.a.createElement(y.a,{text:"Advanced Analytics",iconName:"ZD-overviewNew3"}))),v.a.createElement(A.a,null,v.a.createElement("div",{className:x.a.lhsMenu},v.a.createElement(j.a,{text:"Overview",iconName:"ZD-overviewNew3"})),v.a.createElement("div",{className:x.a.lhsMenu},v.a.createElement(j.a,{text:"Dashboards"})),v.a.createElement("div",{className:x.a.lhsMenu},v.a.createElement(j.a,{iconName:"ZD-overviewNew3",text:"Advanced Analytics"})),v.a.createElement("div",{className:x.a.lhsGroup}))),v.a.createElement(B.a,{saveUpdateFunction:this.handleFolderToggle},v.a.createElement(V.h,{onHide:this.onHideFolderForm})))}}]),a}(b.Component);a.default=Object(C.connect)(function(e){var a=Object(M.t)(e),o=S()("analytics["+a+"].dashboardsFoldersList",e)||[],n=S()("analytics["+a+"].module["+D.l.DASHBOARDS+"]",e)||{},t=S()("analytics["+a+"].reportsFoldersList",e)||[],s=S()("analytics["+a+"].module["+D.l.REPORTS+"]",e)||{};return{orgId:e.routing.paramMap.portalId,orgName:e.routing.paramMap.orgName,deptName:e.routing.paramMap.deptName,viewName:e.routing.paramMap.viewName,deptId:a,moduleMeta:e.moduleMeta,isAllDepartment:Object(M.Bb)(e),isReportsView:Object(R.h)(e),isDashboardsView:Object(R.f)(e),dashboardsFoldersList:o,dashboardsView:n,reportsFoldersList:t,reportsView:s}},{push:z.L})(F),F.propTypes={dashboardsFoldersList:_.a.array,dashboardsView:_.a.object,deptName:_.a.string,isDashboardsView:_.a.bool,isReportsView:_.a.bool,moduleMeta:_.a.object,orgId:_.a.string,orgName:_.a.string,push:_.a.func,reportsFoldersList:_.a.array,reportsView:_.a.object,viewName:_.a.string}},"./src/analytics/reducers/selector.js":function(e,a,o){"use strict";o.d(a,"f",function(){return l}),o.d(a,"c",function(){return r}),o.d(a,"b",function(){return i}),o.d(a,"a",function(){return c}),o.d(a,"g",function(){return d}),o.d(a,"j",function(){return u}),o.d(a,"i",function(){return m}),o.d(a,"h",function(){return p}),o.d(a,"e",function(){return h}),o.d(a,"d",function(){return b});var n=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/selectn/index.js"),t=o.n(n),s=o("./src/analytics/constants/dashboards/index.js"),l=function(e){return"dashboards"===e.moduleMapper[e.routing.paramMap.moduleName]},r=function(e){return t()("moduleMeta.dashboards",e)},i=function(e){return t()("moduleMeta.dashboards.singularLabel",e)},c=function(e){return t()("moduleMeta.dashboards.pluralLabel",e)},d=function(e){return e.routing.paramMap.moduleId===s.c},u=function(e){return e.routing.paramMap.moduleId===s.f},m=function(e){return e.routing.paramMap.moduleId===s.e},p=function(e){return"reports"===e.moduleMapper[e.routing.paramMap.moduleName]},h=function(e){return t()("moduleMeta.reports.singularLabel",e)},b=function(e){return t()("moduleMeta.reports.pluralLabel",e)}},"./src/components/Lhs/Lhs.js":function(e,a,o){"use strict";o.d(a,"b",function(){return f}),o.d(a,"a",function(){return _});var n=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),t=o.n(n),s=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=o.n(s),r=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=o.n(r),c=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=o.n(c),u=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),m=o.n(u),p=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),h=o.n(p),b=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),v=o.n(b),g=o("../components/lib/Layout/index.js"),f=function(e){return e.children},_=function(e){return e.children},C=function(e){function a(e){return l()(this,a),d()(this,(a.__proto__||t()(a)).call(this,e))}return m()(a,e),i()(a,[{key:"render",value:function(){var e=this.props,a=e.children,o=e.isCollapse,n=e.dataId;return h.a.createElement(g.Container,{dataId:n,alignBox:"column",scroll:"vertical"},h.a.Children.map(a,function(e){return o&&e.type==_?e.props.children:o||e.type!=f?null:e.props.children}))}}]),a}(h.a.Component);a.c=C,C.propTypes={children:v.a.array,isCollapse:v.a.bool},C.defaultProps={isCollapse:!1}},"./src/components/Lhs/Menucollapse/Menucollapse.js":function(e,a,o){"use strict";var n=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),t=o.n(n),s=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=o.n(s),r=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=o.n(r),c=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=o.n(c),u=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),m=o.n(u),p=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),h=o.n(p),b=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),v=o.n(b),g=o("./src/components/Lhs/Menucollapse/Menucollapse.module.css"),f=o.n(g),_=o("./node_modules/@zohodesk/icons/lib/Icon/index.js"),C=o.n(_),k=function(e){function a(e){l()(this,a);var o=d()(this,(a.__proto__||t()(a)).call(this,e));return o.state={avtiveMenu:o.props.isActive},o.active=o.active.bind(o),o}return m()(a,e),i()(a,[{key:"active",value:function(e){e&&e.preventDefault();var a=this.props.onClick;a?a():this.setState({avtiveMenu:!this.state.avtiveMenu})}},{key:"componentDidUpdate",value:function(e){var a=this.props.isActive;a!=e.isActive&&this.setState({avtiveMenu:a})}},{key:"render",value:function(){var e=this.props,a=e.text,o=e.iconName,n=e.iconSize,t=e.iconClass,s=e.isDotted,l=e.onClick,r=e.isActive?f.a.mActive:"",i=s?f.a.dotted:"";return h.a.createElement("div",{className:f.a.menu+" "+r,onClick:l},h.a.createElement("div",{className:f.a.mInfo},h.a.createElement("span",{className:f.a.mIcon},h.a.createElement(C.a,{name:o,size:n,iconClass:t+" "+f.a.iconColor})),h.a.createElement("span",{className:f.a.mText+" "+i,"data-title":a},a)))}}]),a}(p.Component);a.a=k,k.propTypes={iconClass:v.a.string,iconName:v.a.string,iconSize:v.a.string,isActive:v.a.bool,isDotted:v.a.bool,onClick:v.a.func,text:v.a.string},k.defaultProps={text:"",iconName:"ZD-dashboardNew1",iconSize:"14",iconClass:"",isDotted:!1,isActive:!1}},"./src/components/Lhs/Menulist/Menulist.js":function(e,a,o){"use strict";var n=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/extends.js"),t=o.n(n),s=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),l=o.n(s),r=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),i=o.n(r),c=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),d=o.n(c),u=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),m=o.n(u),p=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),h=o.n(p),b=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),v=o.n(b),g=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),f=o.n(g),_=o("./src/components/Lhs/Menulist/Menulist.module.css"),C=o.n(_),k=o("../components/lib/Layout/index.js"),S=o("./node_modules/@zohodesk/icons/lib/Icon/index.js"),A=o.n(S),N=o("../components/lib/Popup/Popup.js"),x=o.n(N),y=o("../components/lib/TextBox/TextBox.js"),j=o.n(y),E=function(e){function a(e){i()(this,a);var o=m()(this,(a.__proto__||l()(a)).call(this,e));return o.state={value:""},o.searchActivate=o.searchActivate.bind(o),o.closeSearch=o.closeSearch.bind(o),o.onInputChange=o.onInputChange.bind(o),o.handleKeyDown=o.handleKeyDown.bind(o),o.handleAddClick=o.handleAddClick.bind(o),o}return h()(a,e),d()(a,[{key:"onInputChange",value:function(e){this.setState({value:e});var a=this.props.onViewSearch;e&&a(e)}},{key:"searchActivate",value:function(e){e.stopPropagation();var a=this.props,o=a.isPopupOpen,n=a.togglePopup;o||n(e)}},{key:"closeSearch",value:function(e){e&&e.preventDefault(),e&&e.stopPropagation&&e.stopPropagation();var a=this.props,o=a.onViewSearch,n=a.isPopupOpen,t=a.togglePopup;n&&(t(),o(""))}},{key:"handleKeyDown",value:function(e){27===e.keyCode&&this.closeSearch()}},{key:"componentWillReceiveProps",value:function(e){var a=e.togglePopup,o=e.isPopupOpen;!e.isActive&&o&&a()}},{key:"stopPropagate",value:function(e){e&&e.preventDefault(),e&&e.stopPropagation&&e.stopPropagation()}},{key:"handleAddClick",value:function(e){e&&e.preventDefault(),e&&e.stopPropagation&&e.stopPropagation();var a=this.props,o=a.addClick;a.isPopupOpen?this.closeSearch():o()}},{key:"render",value:function(){var e=this.props,a=e.text,o=e.isSearch,n=e.isAdd,t=e.isActive,s=e.isInfo,l=e.iconName,r=e.iconSize,i=e.placeHolder,c=e.maxlength,d=e.isLink,u=e.iconClass,m=e.onClick,p=e.addTitle,h=e.isPopupOpen,b=e.setSearchInput,g=e.removeClose,f=e.dataId,_=this.state.value,S=t?C.a.mActive:"",N=h?C.a.msAdd:"",x=h?C.a.msSearch:"",y=h?C.a.msAvtivate:"",E=h?C.a.activate:"",I=!n&&o?C.a.onlySearch:"";return v.a.createElement(k.Container,{alignBox:"row",isCover:!1,align:"vertical",className:C.a.menu+" "+S},v.a.createElement(k.Box,{flexible:!0,className:C.a.mInfo+" "+E,onClick:m,dataId:f},v.a.createElement(k.Container,{alignBox:"row",align:"vertical"},v.a.createElement(k.Box,{className:C.a.mIcon},v.a.createElement(A.a,{name:l,size:r,iconClass:u})),v.a.createElement(k.Box,{flexible:!0,className:C.a.mText,"data-title":a},a))),n||o||s||d?v.a.createElement(k.Container,{alignBox:"row",align:"vertical",isCover:!1,className:C.a.menuAction+" "+y+" "+I},o?v.a.createElement("div",{onClick:g,className:C.a.textBox},v.a.createElement(k.Box,{className:C.a.maIcon+" "+x+" "+C.a.mSearch,onClick:this.searchActivate,dataId:"cvSearchIcon"},v.a.createElement(A.a,{name:"ZD-search",size:"12"})),v.a.createElement(k.Box,{className:C.a.inputContainer},v.a.createElement(j.a,{dataId:"cvSearchInput",placeHolder:i,maxLength:c,className:C.a.mTbox,onChange:this.onInputChange,autofocus:!0,onKeyDown:this.handleKeyDown,value:_,inputRef:b,needAppearence:!1}))):null,!n&&o?v.a.createElement(k.Box,{className:C.a.maIcon+" "+C.a.mAdd+" "+C.a.msAdd,onClick:this.closeSearch},v.a.createElement(A.a,{name:"ZD-tpAdd",size:"12",isBold:!0})):null,n?v.a.createElement(k.Box,{className:C.a.maIcon+" "+C.a.mAdd+" "+N,onClick:this.handleAddClick,"data-title":p,dataId:N?"closeCvSearchIcon":"addCvIcon"},v.a.createElement(A.a,{name:"ZD-tpAdd",size:"12",isBold:!0})):null,s?v.a.createElement(k.Box,{className:C.a.maInfo},v.a.createElement(A.a,{name:"ZD-information57",size:"14"})):null,d?v.a.createElement(k.Box,{className:C.a.maLink},v.a.createElement(A.a,{name:"ZD-newtab",size:"14",isBold:!0})):null):null)}}]),a}(b.Component);E.propTypes={_searchInput:f.a.element,addClick:f.a.func,addTitle:f.a.string,dataId:f.a.string,iconClass:f.a.string,iconName:f.a.string,iconSize:f.a.string,isActive:f.a.bool,isAdd:f.a.bool,isInfo:f.a.bool,isLink:f.a.bool,isPopupOpen:f.a.bool,isSearch:f.a.bool,maxlength:f.a.string,onClick:f.a.func,onViewSearch:f.a.func,placeHolder:f.a.string,removeClose:f.a.func,setSearchInput:f.a.func,text:f.a.string,togglePopup:f.a.func},E.defaultProps={isActive:!1,isAdd:!1,isSearch:!1,isInfo:!1,isLink:!1,text:"Dashboard",iconName:"ZD-dashboardNew1",iconSize:"14",placeHolder:"",maxlength:"75",iconClass:"",addClick:function(){}};var I=x()(E),w=function(e){function a(e){i()(this,a);var o=m()(this,(a.__proto__||l()(a)).call(this,e));return o.state={_searchInput:null},o.checkBeforeClose=o.checkBeforeClose.bind(o),o.setSearchInput=o.setSearchInput.bind(o),o}return h()(a,e),d()(a,[{key:"setSearchInput",value:function(e){this.setState({_searchInput:e})}},{key:"checkBeforeClose",value:function(){return!this.state._searchInput||0==this.state._searchInput.value.length}},{key:"render",value:function(){return v.a.createElement(I,t()({},this.props,this.state,{setSearchInput:this.setSearchInput,checkBeforeClose:this.checkBeforeClose}))}}]),a}(v.a.Component);a.a=w},"./src/components/Lhs/Menutree/Menutree.js":function(e,a,o){"use strict";var n=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),t=o.n(n),s=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=o.n(s),r=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=o.n(r),c=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=o.n(c),u=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),m=o.n(u),p=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),h=o.n(p),b=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),v=o.n(b),g=o("../components/lib/Layout/index.js"),f=o("./src/components/Lhs/Menutree/Menutree.module.css"),_=o.n(f),C=function(e){function a(e){l()(this,a);var o=d()(this,(a.__proto__||t()(a)).call(this,e));return o.onclick=o.onclick.bind(o),o}return m()(a,e),i()(a,[{key:"onclick",value:function(){var e=this.props,a=e.click,o=e.viewName;a&&a(o)}},{key:"render",value:function(){var e=this.props,a=e.text,o=e.count,n=e.isActive,t=(e.click,e.isDrag),s=e.needCount,l=n?_.a.active:"";return h.a.createElement(g.Container,{alignBox:"row",isCover:!1,className:_.a.tree+" "+l+" "+(t&&_.a.dragMode),onClick:this.onclick,dataId:a.toLowerCase().replace(/ /g,"_"),align:"vertical"},h.a.createElement(g.Box,{className:_.a.treeName,flexible:!0,"data-title":a},a),s?h.a.createElement(g.Box,{className:_.a.treeCount,"data-title":o,dataId:"data-count"},o):null)}}]),a}(p.Component);a.a=C,C.propTypes={click:v.a.func,count:v.a.oneOfType([v.a.string,v.a.number]),isActive:v.a.bool,isDrag:v.a.bool,needCount:v.a.bool,text:v.a.string,viewName:v.a.oneOfType([v.a.string,v.a.object])},C.defaultProps={text:"All",isActive:!1,isDrag:!1,dataId:"menuTree",needCount:!1}},"./src/components/Lhs/Menutreetitle/Menutreetitle.js":function(e,a,o){"use strict";var n=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),t=o.n(n),s=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=o.n(s),r=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=o.n(r),c=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=o.n(c),u=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),m=o.n(u),p=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),h=o.n(p),b=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),v=o.n(b),g=o("./src/components/Lhs/Menutreetitle/Menutreetitle.module.css"),f=o.n(g),_=o("./node_modules/@zohodesk/icons/lib/Icon/index.js"),C=o.n(_),k=o("../components/lib/Layout/index.js"),S=o("./src/components/Lhs/MenuSearch/MenuSearch.module.css"),A=o.n(S),N=o("../components/lib/TextBox/TextBox.js"),x=o.n(N),y=function(e){function a(e){l()(this,a);var o=d()(this,(a.__proto__||t()(a)).call(this,e));return o.state={value:""},o.onInputChange=o.onInputChange.bind(o),o.handleKeyDown=o.handleKeyDown.bind(o),o}return m()(a,e),i()(a,[{key:"onInputChange",value:function(e){this.setState({value:e}),(0,this.props.onSearch)(e)}},{key:"handleKeyDown",value:function(e){var a=this.props.onCloseSearch;27===e.keyCode&&a()}},{key:"render",value:function(){var e=this.state.value,a="",o="",n=this.props,t=n.placeHolder,s=n.maxlength,l=n.isCloseNeeded,r=n.isSearchActive,i=n.onSearchActivate,c=n.onCloseSearch;return r&&(a=A.a.msSearch,o=A.a.msAvtivate),h.a.createElement(k.Container,{alignBox:"row",align:"vertical",isCover:!1,className:A.a.menuAction+" "+o},h.a.createElement(k.Box,{className:A.a.maIcon+" "+a+" ",onClick:i},h.a.createElement(C.a,{name:"ZD-search",size:"12",iconClass:A.a.serachIcon})),h.a.createElement(k.Box,{className:A.a.inputContainer},h.a.createElement(x.a,{placeHolder:t,maxLength:s,className:A.a.mTbox,onChange:this.onInputChange,value:e,onKeyDown:this.handleKeyDown,needAppearence:!1})),l&&r?h.a.createElement(k.Box,{className:A.a.maIcon+" "+A.a.mAdd+" "+A.a.msAdd,onClick:c},h.a.createElement(C.a,{name:"ZD-tpAdd",size:"12",isBold:!0,iconClass:A.a.serachIcon})):null)}}]),a}(h.a.Component),j=y;y.propTypes={isCloseNeeded:v.a.bool,isSearchActive:v.a.bool,maxlength:v.a.oneOfType([v.a.string,v.a.number]),onCloseSearch:v.a.func,onSearch:v.a.func,onSearchActivate:v.a.func,placeHolder:v.a.string},y.defaultProps={isSearchActive:!1,placeHolder:"",maxLength:"75",isCloseNeeded:!0};var E=function(e){function a(){return l()(this,a),d()(this,(a.__proto__||t()(a)).apply(this,arguments))}return m()(a,e),i()(a,[{key:"render",value:function(){var e=this.props,a=e.text,o=e.textIcon,n=e.isActive,t=e.isStar,s=e.needArrow,l=(e.isDrag,e.dataId,e.isSearchNeeded),r=e.isSearchActive,i=e.onSearch,c=e.isCloseNeeded,d=e.onSearchActivate,u=e.onCloseSearch,m=e.placeHolder,p=e.needUnderline,b=void 0===p||p,v=e.count,g=n?f.a.menuActive:"",_=l&&r?f.a.hide:"";return h.a.createElement(k.Container,{isCover:!1,alignBox:"row",className:f.a.menuTitle+" "+g,align:"vertical",dataId:a.toLowerCase().replace(/\s+/g,"_")},h.a.createElement(k.Box,{flexible:!0,className:""+_},h.a.createElement(k.Container,{alignBox:"row",align:"vertical"},o?h.a.createElement(k.Box,{className:f.a.archive},h.a.createElement(C.a,{name:o,size:"13"})):null,h.a.createElement(k.Box,{dataId:"allTags",shrink:!0,className:f.a.title+" "+(b?f.a.underline:""),"data-title":a},a),v&&h.a.createElement(k.Box,{className:f.a.count},"("+v+")"),t?h.a.createElement(C.a,{name:"ZD-pStar1",size:"13",iconClass:f.a.star}):null)),l?h.a.createElement(j,{isSearchActive:r,onSearch:i,isCloseNeeded:c,onSearchActivate:d,onCloseSearch:u,placeHolder:m}):null,s&&(!l||l&&!r)?h.a.createElement(k.Box,{className:f.a.mTAction},h.a.createElement("span",{className:f.a.actArrow},h.a.createElement(C.a,{name:"ZD-blockDownArrow",iconClass:f.a.iconArw}))):"")}}]),a}(p.Component);a.a=E;E.propTypes={count:v.a.oneOfType([v.a.string,v.a.number]),isActive:v.a.bool,isCloseNeeded:v.a.bool,isDrag:v.a.bool,isSearchActive:v.a.bool,isSearchNeeded:v.a.bool,isStar:v.a.bool,needArrow:v.a.bool,needUnderline:v.a.bool,onCloseSearch:v.a.func,onSearch:v.a.func,onSearchActivate:v.a.func,placeHolder:v.a.string,text:v.a.string,textIcon:v.a.string},E.defaultProps={text:"Views",isActive:!1,isStar:!1,needArrow:!1,isDrag:!1,isSearchNeeded:!1,needUnderline:!0}},"./src/containers/LhsContainer/LhsContainer.js":function(e,a,o){"use strict";var n=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),t=o.n(n),s=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),l=o.n(s),r=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),i=o.n(r),c=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),d=o.n(c),u=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),m=o.n(u),p=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),h=o.n(p),b=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),v=o.n(b),g=o("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react-redux/es/index.js"),f=o("./src/reducers/selector.js"),_=o("./src/components/Lhs/Lhs.js"),C=function(e){function a(e){return l()(this,a),d()(this,(a.__proto__||t()(a)).call(this,e))}return m()(a,e),i()(a,[{key:"render",value:function(){var e=this.props,a=e.children,o=e.isCollapseSidePanel,n=e.dataId,t=document.documentElement;return o?t.style.setProperty("--zd_lhsViewsDiv","var(--zd_size70)"):t.style.setProperty("--zd_lhsViewsDiv","0px"),h.a.createElement(_.c,{isCollapse:o,dataId:n},a)}}]),a}(p.Component);a.a=Object(g.connect)(function(e){var a=e.UIState,o=e.screenMode,n=a.peekState,t=Object(f.k)(e);return t="sm"!==o&&"xs"!==o&&t,{isCollapseSidePanel:t=!(!Object(f.Nb)(e)||!n.isShrink)||t}})(C),C.propTypes={children:v.a.any,isCollapseSidePanel:v.a.bool}}}]);