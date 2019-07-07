(window.deskappJsonp=window.deskappJsonp||[]).push([[65],{1054:function(t,e,n){"use strict";n.d(e,"f",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"a",function(){return i}),n.d(e,"b",function(){return d}),n.d(e,"e",function(){return l}),n.d(e,"c",function(){return s});var a=n(8),r={DASHBOARDS:"dashboards",REPORTS:"reports"},o=31,i=[{id:"BAR",title:a.f.getI18NValue("support.survey.report.chart.bar")},{id:"STACKEDBAR",title:a.f.getI18NValue("crm.dashboard.label.stacked.bar")},{id:"PERCENTAGEBAR",title:a.f.getI18NValue("crm.dashboard.label.precentage.bar")},{id:"PIE",title:a.f.getI18NValue("crm.report.pie")},{id:"FUNNEL",title:a.f.getI18NValue("crm.report.funnel")},{id:"LINE",title:a.f.getI18NValue("crm.report.line")},{id:"MULTIPLELINE",title:a.f.getI18NValue("support.dashboard.label.multiple.line")},{id:"TABLE",title:a.f.getI18NValue("crm.dashboard.label.table")}],d={BAR:"bar",STACKEDBAR:"stackedBar",PERCENTAGEBAR:"percentageBar",PIE:"pie",FUNNEL:"funnel",LINE:"line",MULTIPLELINE:"multiLine",TABLE:"table",TICKETS:"ticket",TASKS:"task",CONTACTS:"contact",ACCOUNTS:"account",EMBEDED:"embed"},l=[{displayLabel:a.f.getI18NValue("crm.report.record.count"),fieldId:"Record Count"}],s=[{label:a.f.getI18NValue("support.survey.last.7days"),id:"LAST_7_DAYS"},{label:a.f.getI18NValue("support.survey.last.30days"),id:"LAST_30_DAYS"},{label:a.f.getI18NValue("Current Week"),id:"THIS_WEEK"},{label:a.f.getI18NValue("Last Week"),id:"LAST_WEEK"},{label:a.f.getI18NValue("Current Month"),id:"THIS_MONTH"},{label:a.f.getI18NValue("Last Month"),id:"LAST_MONTH"},{label:a.f.getI18NValue("Custom"),id:"CUSTOM_IN_DATE"}]},1057:function(t,e,n){"use strict";n.d(e,"e",function(){return d}),n.d(e,"h",function(){return l}),n.d(e,"f",function(){return s}),n.d(e,"d",function(){return u}),n.d(e,"c",function(){return c}),n.d(e,"a",function(){return h}),n.d(e,"b",function(){return f}),n.d(e,"g",function(){return p});var a=n(41),r=n.n(a),o=n(20),i=n.n(o);function d(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new RegExp('^[^\\<\\>\\&\\(\\)\\~\\`\\{\\}\\[\\]\\|\\+\\=\\#\\%\\^\\*\\;\\"\\\\]+$').test(t)}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object.prototype.toString.call(t);if(n!==Object.prototype.toString.call(e))return!1;if(["[object Array]","[object Object]"].indexOf(n)<0)return!1;var a="[object Array]"===n?t.length:i()(t).length;if(a!==("[object Array]"===n?e.length:i()(e).length))return!1;var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=Object.prototype.toString.call(t);if(["[object Array]","[object Object]"].indexOf(n)>=0){if(!s(t,e))return!1}else{if(n!==Object.prototype.toString.call(e))return!1;if("[object Function]"===n){if(t.toString()!==e.toString())return!1}else if(t!==e)return!1}};if("[object Array]"===n){for(var o=0;o<a;o++)if(!1===r(t[o],e[o]))return!1}else for(var d in t)if(t.hasOwnProperty(d)&&!1===r(t[d],e[d]))return!1;return!0}function u(t){return[{type:"bar",seriesname:"Advertisement",data:[[["Lary",9],["Stella",4],["Ashlin",7]]]},{type:"bar",seriesname:"Trade Show",data:[[["Lary",5],["Stella",5],["Ashlin",5]]]},{type:"bar",seriesname:"Referral",data:[[["Lary",2],["Stella",3],["Ashlin",6]]]}]}function c(t){return[{type:"line",seriesname:"Advertisement",data:[[["Lary",4],["Stella",6],["Ashlin",3]]]},{type:"line",seriesname:"Trade Show",data:[[["Lary",6],["Stella",2],["Ashlin",5]]]}]}function h(t){var e=t.split("T")[0].split("-"),n=r()(e,3),a=n[0],o=n[1];return n[2]+"-"+o+"-"+a}function f(t){var e=t.split("-"),n=r()(e,3),a=n[0],o=n[1];return n[2]+"-"+o+"-"+a}function p(t,e){return(e-t)/864e5<(arguments.length>2&&void 0!==arguments[2]?arguments[2]:31)}},1058:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a={DASHBOARDS:{DEFAULT:"SET_AS_DEFAULT_DASHBOARD",LIST:"GET_DASHBOARDS_LIST",VIEW:"GET_DASHBOARD",CREATE:"CREATE_DASHBOARD",UPDATE:"UPDATE_DASHBOARD",DELETE:"DELETE_DASHBOARD",FOLDER:{VIEW:"GET_DASHBOARD_FOLDER",CREATE:"CREATE_DASHBOARD_FOLDER",UPDATE:"UPDATE_DASHBOARD_FOLDER",DELETE:"DELETE_DASHBOARD_FOLDER"},COMPONENT:{LIST:"GET_DASHBOARD_COMPONENTS",ADD:"ADD_COMPONENT",UPDATE:"UPDATE_COMPONENT",DELETE:"DELETE_COMPONENT"}},REPORTS:{LIST:"GET_REPORTS_LIST"},GALLERY:"GET_GALLERY_LISTS"}},1105:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a="all-dashboards"},1164:function(t,e,n){"use strict";var a=n(12),r=n.n(a),o=n(9),i=n.n(o),d=n(10),l=n.n(d),s=n(13),u=n.n(s),c=n(14),h=n.n(c),f=n(0),p=n.n(f),b=n(1),g=n.n(b),m=n(1057),v=n(529),O=n.n(v),I=function(t){function e(t){i()(this,e);var n=u()(this,(e.__proto__||r()(e)).call(this,t));return n.chartObj=null,n.chart=p.a.createRef(),n.redraw=n.redraw.bind(n),n.drawZCharts=n.drawZCharts.bind(n),n}return h()(e,t),l()(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.data,n=t.onChange;this.chartObj=this.drawZCharts(this.chart,e),n&&n(this.chartObj),window.addEventListener("resize",this.redraw)}},{key:"componentDidUpdate",value:function(t,e){var n=this.props,a=n.data,r=n.onChange;Object(m.e)(a)||Object(m.e)(t.data)||(Object(m.f)(t.data,a)?Object(m.e)(this.chartObj)||(this.chartObj.userdata=a,this.chartObj.redraw()):this.chartObj=this.drawZCharts(this.chart,a)),r&&r(this.chartObj)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.redraw)}},{key:"drawZCharts",value:function(t,e){try{return new O.a.charts(t.current,e)}catch(t){console.log(t)}}},{key:"redraw",value:function(){Object(m.e)(this.chartObj)||this.chartObj.redraw()}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.id;return p.a.createElement("div",{className:e,id:n,"data-id":n,ref:this.chart})}}]),e}(f.PureComponent);e.a=I,I.defaultProps={id:"chart"},I.propTypes={className:g.a.string.isRequired,data:g.a.object.isRequired,id:g.a.string,onChange:g.a.func}},1167:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return l}),n.d(e,"c",function(){return s});var a=n(23),r=n.n(a),o=n(1105);function i(t,e){for(var n=[],a=0;a<e.length;a++){var i=e[a].dashboards;n.push.apply(n,r()(i))}return[{departmentId:t,id:o.a,name:"All Dashboards",isCustomizable:!1,dashboards:n}].concat(r()(e))}function d(t,e,n,a,r,o){return a=a>=15?a:24,r=r>=6?r:8,{i:t.toString(),x:e,y:n,w:a,h:r,minW:15,minH:6,maxW:48,maxH:15,componentId:o}}function l(t){return t.forEach(function(e,n){var a=e.style,r=e.id,o=e.position;if(a){var i=a.xCoordinate,l=a.yCoordinate,s=a.width,u=a.height;t[n].layout=d(parseInt(o-1),parseInt(i),parseInt(l),parseInt(s),parseInt(u),r)}else t[n].layout=d(n,n%2*24,1/0,24,8,r)}),t}function s(t){return[{id:"ticket",title:t.tickets.displayLabel},{id:"contact",title:t.contacts.displayLabel},{id:"account",title:t.accounts.displayLabel},{id:"task",title:t.tasks.displayLabel}]}},1194:function(t,e,n){"use strict";n.d(e,"h",function(){return g}),n.d(e,"e",function(){return m}),n.d(e,"f",function(){return v}),n.d(e,"b",function(){return O}),n.d(e,"l",function(){return I}),n.d(e,"d",function(){return A}),n.d(e,"g",function(){return E}),n.d(e,"j",function(){return D}),n.d(e,"a",function(){return y}),n.d(e,"k",function(){return C}),n.d(e,"c",function(){return L}),n.d(e,"i",function(){return S});var a=n(7),r=n(15),o=n(6),i=n(17),d=n(1058),l=n(1054),s=n(1167),u=d.a.DASHBOARDS,c=(u.DEFAULT,u.LIST),h=u.DELETE,f=u.FOLDER,p=u.COMPONENT,b=d.a.GALLERY;function g(){return{types:Object(o.m)(c),shouldCallAPI:function(){return!0},callAPI:function(t){var e=Object(i.r)(t),n="/api/v1/dashboardFolders?"+("departmentId="+e+"&include=dashboards,default");return Object(r.a)(n,!1,{orgId:t.currentOrgId}).get().then(function(t){var n=t.data,r=void 0===n?[]:n;if(r.length){var o=Object(s.a)(e,r);return{data:Object(a.normalize)(o,Object(a.arrayOf)(Object(a.schema)(l.f.DASHBOARDS))),deptId:e}}return{data:r,deptId:e}},function(t){return console.log("Get Dashboards List ====>",t),{data:[],deptId:e}})}}}function m(t){return{types:Object(o.m)(f.DELETE),shouldCallAPI:function(){return!0},callAPI:function(e){var n="/api/v1/dashboardFolders/"+t;return Object(r.a)(n,!1,{orgId:e.currentOrgId}).del().then(function(n){if(200===n.responseStatus)return{folderId:t,deptId:Object(i.r)(e)}},function(e){console.log("Delete Dashboard Folder ====>",e,"Dashboard FolderId",t)})}}}function v(t,e){var n="/api/v1/dashboards/"+e;return Object(r.a)(n,!1,{orgId:t}).get().then(function(t){return t||{}}).catch(function(t){return console.log("Get Particular Dashboards ====>",t,"DashboardId",e),{}})}function O(t,e){return Object(r.a)("/api/v1/dashboards",!1,{orgId:t}).post("",e).then(function(t){return t}).catch(function(t){console.log("Add Dashboard ====> ",t)})}function I(t,e,n){var a="/api/v1/dashboards/"+e;return Object(r.a)(a,!1,{orgId:t}).patch("",n).then(function(t){return t}).catch(function(t){console.log("Update Dashboard ====> ",t,"DashboardId",e)})}function A(t,e){return{types:Object(o.m)(h),shouldCallAPI:function(){return!0},callAPI:function(n){var a="/api/v1/dashboards/"+t;return Object(r.a)(a,!1,{orgId:n.currentOrgId}).del().then(function(a){if(200===a.responseStatus)return{dashboardId:t,folderId:e,deptId:Object(i.r)(n)}},function(e){console.log("Delete Dashboard ====>",e,"dashboardId",t)})}}}function E(t){return{types:Object(o.m)(p.LIST),shouldCallAPI:function(){return!0},callAPI:function(e){var n=Object(i.r)(e),a="";"allDepartment"!==n&&(a+="&departmentId="+n);var o="/api/v1/dashboards/"+t+"/components?"+a;return Object(r.a)(o,!1,{orgId:e.currentOrgId}).get().then(function(e){var a=(e||{}).data;return{data:void 0===a?[]:a,dashboardId:t,deptId:n}},function(t){return console.log("Get Dashboard Components ====>",t),{data:[],deptId:n}})}}}function D(t,e,n){var a="/api/v1/dashboards/"+e+"/components/"+n+"?orgId="+t+"&needReportDetails=true";return Object(r.a)(a).get().then(function(t){return t}).catch(function(t){console.log("Get Specific Dashboard Componnet",t,"Dashboard ===> ",e,"ComponentId ===>",n)})}function y(t,e){return{types:Object(o.m)(p.ADD),shouldCallAPI:function(){return!0},callAPI:function(n){var a="/api/v1/dashboards/"+t+"/components";return Object(r.a)(a,!1,{orgId:n.currentOrgId}).post("",e).then(function(e){return{deptId:Object(i.r)(n),data:e,dashboardId:t}}).catch(function(t){return console.log("Add Component ====> ",t),{error:t}})}}}function C(t,e,n){return{types:Object(o.m)(p.UPDATE),shouldCallAPI:function(){return!0},callAPI:function(a){var o="/api/v1/dashboards/"+t+"/components/"+e;return Object(r.a)(o,!1,{orgId:a.currentOrgId}).patch("",n).then(function(n){return{deptId:Object(i.r)(a),data:n,dashboardId:t,componentId:e}}).catch(function(n){console.log("Update Component ====> ",n,"DashboardId ===> ",t,"ComponentId ===>",e)})}}}function L(t,e){return{types:Object(o.m)(p.DELETE),shouldCallAPI:function(){return!0},callAPI:function(n){var a="/api/v1/dashboards/"+t+"/components/"+e;return Object(r.a)(a,!1,{orgId:n.currentOrgId}).del().then(function(a){if(200===a.responseStatus)return{deptId:Object(i.r)(n),componentId:e,dashboardId:t}}).catch(function(n){console.log("Delete Component ====> ",n,"DashboardId ===> ",t,"ComponentId ===>",e)})}}}function S(){return{types:Object(o.m)(b),shouldCallAPI:function(){return!0},callAPI:function(t){var e=Object(i.r)(t),n="";"allDepartment"!==e&&(n+="&departmentId="+e);var o="/api/v1/dashboardsGalleries?"+n;return Object(r.a)(o,!1,{orgId:t.currentOrgId}).get().then(function(t){var e=t.data,n=void 0===e?[]:e;return{data:Object(a.normalize)(n,Object(a.arrayOf)(Object(a.schema)("gallery",{id:"type"})))}}).catch(function(t){console.log("Get Gallery List ===> ",t)})}}}},1269:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"d",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"e",function(){return d}),n.d(e,"f",function(){return l}),n.d(e,"j",function(){return s}),n.d(e,"k",function(){return u}),n.d(e,"l",function(){return c}),n.d(e,"g",function(){return h}),n.d(e,"h",function(){return f}),n.d(e,"i",function(){return p});var a="bar",r="line",o="pie",i="funnel";function d(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Regular",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#272c32";return{canvas:{fontWeight:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"bold",fontFamily:t,fontSize:e,fontColor:n,theme:"zczdtheme"}}}function l(){return{chart:{effects:{choice:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""},axes:{xaxis:{label:{show:arguments.length>1&&void 0!==arguments[1]&&arguments[1],text:arguments.length>2&&void 0!==arguments[2]?arguments[2]:""}},yaxis:[{label:{show:!(arguments.length>3&&void 0!==arguments[3])||arguments[3],text:arguments.length>4&&void 0!==arguments[4]?arguments[4]:""}}]},plot:{plotoptions:{}}}}}function s(){return{bar:{multiColoring:!0,maxBandWidth:arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,fillOpacity:1,stacked:{enabled:arguments.length>1&&void 0!==arguments[1]&&arguments[1],showAs:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"values"},datalabels:{show:!(arguments.length>3&&void 0!==arguments[3])||arguments[3],fontWeight:"bold",labelPos:"middle",stackLabels:{show:arguments.length>4&&void 0!==arguments[4]&&arguments[4],fontWeight:"bold"}}}}}function u(){return{line:{mode:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"monotone",marker:{innerFillOpacity:1,innerStrokeOpacity:1,innerFillColor:"#FFFFFF",outerFillOpacity:.5,outerStrokeOpacity:1},hoveroptions:{innerFillColor:"#FFFFFF"}}}}function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{pie:{innerRadius:t,strokeWidth:e,outerPadding:5,sliceOutHeight:2.5,fillOpacity:"0.9",datalabels:{show:a,type:"doubleside",innerLabel:{show:a}}},gradients:{type:"radial",options:{radial:{radius:100,x:0,y:0,stopOffset:["0%","80%","81%","100%"],stopOpacity:[1,1],spreadMethod:"pad",gradientUnits:"userSpaceOnUse",colorGamma:[.5,.1,.1,-1]}}},datalabels:{show:n,showAs:"y"}}}function h(){return{legend:{enabled:arguments.length>0&&void 0!==arguments[0]&&arguments[0],colorBox:{shape:null},title:{show:arguments.length>1&&void 0!==arguments[1]&&arguments[1],text:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",fontWeight:"bold"},hAlign:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"center",vAlign:arguments.length>4&&void 0!==arguments[4]?arguments[4]:"bottom",fontColor:"#333",itemMargin:5}}}function f(){return{metadata:{axes:{x:[0],y:[[1]],clr:[2],tooltip:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,1]},columns:[{dataindex:0,columnname:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",datatype:"ordinal"},{dataindex:1,columnname:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",datatype:"numeric"},{columnname:arguments.length>3&&void 0!==arguments[3]?arguments[3]:""}]}}}function p(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{notes:{enabled:t,chartValues:[{type:"customNote",x:function(t,e,n){var a=n.getBoundingClientRect();return t.plotarea.left+t.plotarea.width/2-a.width/2},y:function(t,e,n){var a=n.getBoundingClientRect();return t.plotarea.top+t.plotarea.height/2-a.height/2},htmlEl:function(t,n){var a=t.seriesdata[0].data[0],r=t.dataset,o=t.seriesdata[0].yaxiscolumnorder,i=t.systemConf.metadata.axes.y[0][0],d=t.systemConf.metadata.columns[i];o=o instanceof Array?o[0]:o;var l=a.reduce(function(t,e,n){return t+(e.disabled?0:Math.abs(r.getY(e,o)))},0),s="<div class='tac s-light'><span id='rpt_notecount' class='rpt_ntecnt'  >"+(l=.1==(l=$ZC.getFormattedValue(d[d.datatype],l,d.datatype))?0:l)+"</span></br><span class='DvsubHead content-dotted rpt_cntspan' title="+e+">"+e+"</span></div>";return s=e||s}}]}}}},1851:function(t,e,n){t.exports={charts:"CustomDetailView__charts"}},668:function(t,e,n){"use strict";n.r(e);var a=n(12),r=n.n(a),o=n(9),i=n.n(o),d=n(10),l=n.n(d),s=n(13),u=n.n(s),c=n(14),h=n.n(c),f=n(0),p=n.n(f),b=n(8),g=n(1),m=n.n(g),v=n(26),O=n(19),I=n.n(O),A=n(17),E=n(24),D=n(1851),y=n.n(D),C=n(1054),L=n(1105),S=n(1057),j=n(2),T=n.n(j),N=n(1269),R=n(1164),_=function(t){function e(t){i()(this,e);var n=u()(this,(e.__proto__||r()(e)).call(this,t));return n.getData=n.getData.bind(n),n.getChart=n.getChart.bind(n),n.getDonut=n.getDonut.bind(n),n.getLegend=n.getLegend.bind(n),n.getNote=n.getNote.bind(n),n}return h()(e,t),l()(e,[{key:"getLegend",value:function(){var t=this.props.colors,e={legend:{enabled:!1}};return t.length&&(e.legend.colors=t),e}},{key:"getDonut",value:function(){var t=this.props,e=t.data;return{tooltip:{enabled:!!t.tooltip.length,fontColor:"#FFF"},seriesdata:{chartdata:[{type:N.d,yaxiscolumnorder:[0],data:[e]}]}}}},{key:"getChart",value:function(){var t=this.props,e=t.label,n=t.size,a=e.rowLabel,r=void 0===a?null:a,o=e.columnLabel,i=void 0===o?null:o,d=e.isRow,l=void 0!==d&&d,s=e.isColumn,u=void 0!==s&&s,c=Object(N.f)("none",l,r,u,i),h=Object(N.l)(n);return T()(c.chart.plot.plotoptions,h),c}},{key:"getData",value:function(){var t=this.props.tooltip,e=Object(N.e)(),n=this.getChart(),a=Object(N.h)(t),r=this.getLegend(),o=this.getDonut(),i=this.getNote();return T()({},e,n,a,r,o,i)}},{key:"getNote",value:function(){var t=this.props.note;return t.length?Object(N.i)("true","",t):{}}},{key:"render",value:function(){var t=this.props,e=t.className,n=t.id,a=t.onChange,r=this.getData();return p.a.createElement(R.a,{className:e,id:n,onChange:a&&a,data:r})}}]),e}(f.Component),w=_;_.defaultProps={id:"donutchart",tooltip:[0,1],data:[["open",10],["closed",8],["onhold",5]],label:{rowLabel:"Status",columnLabel:"Count",seriesLabel:"Status",hAlign:"center",vAlign:"bottom"},size:"80%",colors:[],note:""},_.propTypes={className:m.a.string.isRequired,colors:m.a.array,data:m.a.array.isRequired,id:m.a.string,label:m.a.objectOf(m.a.shape({rowLabel:m.a.string,columnLabel:m.a.string,seriesLabel:m.a.string,hAlign:m.a.oneOf(["left","center","right"]),vAlign:m.a.oneOf(["top","bottom"]),isRow:m.a.bool,isColumn:m.a.bool})),note:m.a.string,onChange:m.a.func,size:m.a.string,tooltip:m.a.array};var P=n(1194),F=function(t){function e(t){i()(this,e);var n=u()(this,(e.__proto__||r()(e)).call(this,t));return n.state={isLoading:!0,dashboardName:"",dashboardFolderId:"",isCustomizable:!1},n}return h()(e,t),l()(e,[{key:"componentDidMount",value:function(){var t=this,e=this.props,n=e.dashboardsView,a=e.viewName,r=e.orgId,o=e.getDashboardComponents;if(Object(S.e)(n))Object(P.f)(r,a).then(function(e){var n=e.name,a=e.isCustomizable,r=e.dashboardFolderId;t.setState({dashboardName:n,dashboardFolderId:r,isCustomizable:a})});else{var i=(n[L.a]||{}).dashboards.find(function(t){return t.id===a}),d=i.name,l=i.isCustomizable,s=i.dashboardFolderId;this.setState({dashboardName:d,isCustomizable:l,dashboardFolderId:s})}o(a)}},{key:"render",value:function(){b.f.getI18NValue;var t=this.props,e=(t.dashboardSingModuleName,t.dashboardsModuleName,t.componentList,this.state),n=e.dashboardName;e.isCustomizable,e.dashboardFolderId;return p.a.createElement("div",null,p.a.createElement("span",null,n),p.a.createElement("span",null,"Set as Default"),p.a.createElement("span",null,"Edit Dashboard"),p.a.createElement("span",null,"Delete Dashboards"),p.a.createElement("span",null),p.a.createElement(w,{className:y.a.charts}))}}]),e}(f.Component);e.default=Object(v.connect)(function(t){var e=Object(A.r)(t),n=I()("moduleMeta.dashboards.singularLabel",t)||"",a=I()("moduleMeta.dashboards.pluralLabel",t)||"",r=t.routing.paramMap,o=r.orgName,i=r.deptName,d=r.moduleId,l=t.analytics,s=void 0===l?{}:l,u={},c=[];if(void 0!==s[e]){var h=s[e];u=h.module[C.f.DASHBOARDS],c=h.components?h.components[d]:[]}return{orgId:t.currentOrgId,orgName:o,deptName:i,viewName:d,deptId:e,moduleMeta:t.moduleMeta,isAllDepartment:Object(A.rb)(t),dashboardSingModuleName:n,dashboardsModuleName:a,dashboardsView:u,componentList:c}},{push:E.K,getDashboardComponents:P.g})(F);F.propTypes={dashboardSingModuleName:m.a.string,dashboardsModuleName:m.a.string,dashboardsView:m.a.object,deptId:m.a.string,deptName:m.a.string,getDashboardComponents:m.a.func,moduleMeta:m.a.object,orgId:m.a.string,push:m.a.func,viewName:m.a.string}}}]);