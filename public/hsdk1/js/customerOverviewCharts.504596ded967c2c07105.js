(window.deskappJsonp=window.deskappJsonp||[]).push([[86],{"./src/components/dashboards/Chart/Chart.js":function(e,t,a){"use strict";var n=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/keys.js"),o=a.n(n),r=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),s=a.n(r),l=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),i=a.n(l),c=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),d=a.n(c),u=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),h=a.n(u),p=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),m=a.n(p),g=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),b=a.n(g),v=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),f=a.n(v),C=a("./src/utils/ChartUI.js"),x=function(e){function t(e){i()(this,t);var a=h()(this,(t.__proto__||s()(t)).call(this,e));return a.chartObj=null,a.redraw=a.redraw.bind(a),a.isChartDifference=a.isChartDifference.bind(a),a}return m()(t,e),d()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.data,a=e.onChange;this.chartObj=C.a.Dashboard.drawZCharts(this.chart,t),a&&a(this.chartObj),window.addEventListener("resize",this.redraw)}},{key:"componentDidUpdate",value:function(e,t){var a=this.props,n=a.data,r=a.onChange;o()(n).length&&o()(e.data).length&&(this.isChartDifference(e.data,n)?this.chartObj=C.a.Dashboard.drawZCharts(this.chart,n):o()(this.chartObj).length&&(this.chartObj.userdata=n,this.chartObj.redraw())),r&&r(this.chartObj)}},{key:"isChartDifference",value:function(e,t){if(o()(e).length&&o()(t).length)try{var a=e.seriesdata.chartdata,n=t.seriesdata.chartdata,r=a.length;if(r!==n.length)return!0;for(var s=0;s<r;s++){var l=a[s],i=l.type,c=l.data,d=n[s],u=d.type,h=d.data;if(i!==u)return!0;if("bar"===i&&"bar"===u&&e.chart.plot.plotoptions.bar.stacked.showAs!==t.chart.plot.plotoptions.bar.stacked.showAs)return!0;var p=c[0].length;if(p!==n[s].data[0].length)return!0;for(var m=0;m<p;m++){var g=c[0][s],b=h[0][s];if(g[0]!==b[0]||g[1]!==b[1])return!0}}return!1}catch(e){return!0}}},{key:"redraw",value:function(){o()(this.chartObj).length&&this.chartObj.redraw()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.redraw)}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,n=t.id;return b.a.createElement("div",{className:a,id:n,"data-id":n,ref:function(t){e.chart=t}})}}]),t}(g.PureComponent);t.a=x,x.defaultProps={id:"chart"},x.propTypes={className:f.a.string.isRequired,data:f.a.object.isRequired,id:f.a.string,onChange:f.a.func}},"./src/components/detailsubtab/overview/Channels/Channels.module.css":function(e,t,a){e.exports={list:"zd-channels-list zddf89226dae",titleTxt:"zd-channels-titleTxt zd6063afa107",percentTxt:"zd-channels-percentTxt",ratingTxt:"zd-channels-ratingTxt",circleDot:"zd-channels-circleDot",default:"zd-channels-default",primary:"zd-channels-primary",danger:"zd-channels-danger",success:"zd-channels-success",secondary:"zd-channels-secondary",info:"zd-channels-info"}},"./src/components/detailsubtab/overview/HappinessChart/HappinessChart.module.css":function(e,t,a){e.exports={bar:"zd-happinesschart-bar",chart:"zd-happinesschart-chart",default:"zd-happinesschart-default",good:"zd-happinesschart-good",ok:"zd-happinesschart-ok",bad:"zd-happinesschart-bad"}},"./src/components/detailsubtab/overview/Hours/Hours.module.css":function(e,t,a){e.exports={list:"zd-hours-list",titleTxt:"zd-hours-titleTxt",countTxt:"zd-hours-countTxt",hoursTitle:"zd-hours-hoursTitle",arrowLft:"zd-hours-arrowLft",arrowRgt:"zd-hours-arrowRgt",line:"zd-hours-line"}},"./src/components/detailsubtab/overview/ResponseTime/ResponseTime.module.css":function(e,t,a){e.exports={list:"zd-responsetime-list zddf89226dae",titleHead:"zd-responsetime-titleHead",titleTxt:"zd-responsetime-titleTxt",timeCount:"zd-responsetime-timeCount",line:"zd-responsetime-line",response:"zd-responsetime-response"}},"./src/containers/detailsubtab/CustomerOverviewCharts/CustomerOverviewCharts.js":function(e,t,a){"use strict";a.r(t);var n=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/keys.js"),o=a.n(n),r=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),s=a.n(r),l=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/classCallCheck.js"),i=a.n(l),c=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/createClass.js"),d=a.n(c),u=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),h=a.n(u),p=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/helpers/inherits.js"),m=a.n(p),g=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),b=a.n(g),v=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),f=a.n(v),C=a("./src/containers/detailsubtab/CustomerOverviewCharts/CustomerOverviewCharts.module.css"),x=a.n(C),y=a("../components/lib/Layout/index.js"),w=a("./src/components/detailsubtab/overview/Channels/Channels.module.css"),k=a.n(w),z=function(e){function t(){return i()(this,t),h()(this,(t.__proto__||s()(t)).apply(this,arguments))}return m()(t,e),d()(t,[{key:"render",value:function(){var e=this.props,t=e.percentage,a=e.text,n=e.rating,o=e.palette;return b.a.createElement("div",{className:k.a.list},b.a.createElement("span",{className:k.a.circleDot+" "+k.a[o],style:{background:o}}),t?b.a.createElement("span",{className:k.a.percentTxt},t+"%"):"",a?b.a.createElement("span",{className:k.a.titleTxt,"data-title":a},a):"",n?b.a.createElement("span",{className:k.a.ratingTxt},"(",n,")"):"")}}]),t}(b.a.Component),_=z;z.propTypes={palette:f.a.string,percentage:f.a.string,rating:f.a.string,text:f.a.string};var F=a("./src/components/detailsubtab/overview/ResponseTime/ResponseTime.module.css"),D=a.n(F),j=function(e){function t(){return i()(this,t),h()(this,(t.__proto__||s()(t)).apply(this,arguments))}return m()(t,e),d()(t,[{key:"render",value:function(){var e=this.props,t=e.text,a=e.timecount,n=e.percent;return b.a.createElement("div",{className:D.a.list},b.a.createElement(y.Container,{className:D.a.titleHead,alignBox:"row",isCover:!1},t?b.a.createElement(y.Box,{flexible:!0,className:D.a.titleTxt},t):"",a?b.a.createElement(y.Box,{className:D.a.timeCount},a):""),b.a.createElement("div",{className:D.a.line},b.a.createElement("div",{className:D.a.response,style:{width:n+"%"}})))}}]),t}(b.a.Component),E=j;j.propTypes={percent:f.a.number,text:f.a.string,timecount:f.a.string};var N=a("./src/components/detailsubtab/overview/HappinessChart/HappinessChart.module.css"),T=a.n(N),O=function(e){function t(){return i()(this,t),h()(this,(t.__proto__||s()(t)).apply(this,arguments))}return m()(t,e),d()(t,[{key:"render",value:function(){var e=this.props,t=e.label,a=e.rating;return b.a.createElement("div",{className:T.a.bar},b.a.createElement("span",{className:T.a.chart+" "+T.a[t],style:{height:a+"%"}}))}}]),t}(b.a.Component),A=O;O.propTypes={label:f.a.string,rating:f.a.string};var R=a("./src/components/detailsubtab/overview/Hours/Hours.module.css"),B=a.n(R),P=function(e){function t(){return i()(this,t),h()(this,(t.__proto__||s()(t)).apply(this,arguments))}return m()(t,e),d()(t,[{key:"render",value:function(){var e=this.props,t=e.startcount,a=e.endcount,n=e.title;e.arrow;return b.a.createElement(y.Container,{className:B.a.list,alignBox:"row"},b.a.createElement(y.Box,null,t?b.a.createElement("span",{className:B.a.countTxt},t):""),b.a.createElement(y.Box,{flexible:!0},b.a.createElement("span",{className:B.a.hoursTitle},b.a.createElement("span",{className:B.a.line}),n?b.a.createElement("span",{className:B.a.titleTxt},n):"")),b.a.createElement(y.Box,null,a?b.a.createElement("span",{className:B.a.countTxt},a):""))}}]),t}(b.a.Component),H=P;P.propTypes={arrow:f.a.string,endcount:f.a.string,startcount:f.a.string,title:f.a.string};var S=a("./src/components/dashboards/Chart/Chart.js"),M=a("./src/utils/ChartUI.js"),L=a("./src/utils/TimeFormat.js"),W=a("./src/fz-i18n/index.js"),I=a("./src/utils/formatValue.js"),V=a("./src/components/VelocityAnimation/VelocityAnimationGroup/VelocityAnimationGroup.js"),U=W.h.getI18NValue,Y=function(e){function t(){return i()(this,t),h()(this,(t.__proto__||s()(t)).apply(this,arguments))}return m()(t,e),d()(t,[{key:"constructDataParams",value:function(e,t,a){var n=!0,o=!0,r="",s=e;return 0===e.length?(s=[[,"1"],[,"1"]],n=!1,o=!1):r=U("support.setup.label.channels"),M.a.Dashboard.getDonutChartData("80%",a,t,n,s,o,r)}},{key:"render",value:function(){var e=this.props,t=e.moduleStats,a=void 0===t?{}:t,n=e.isExpand,r=e.ticketLabel,s=a.channelWiseCount,l=o()(s),i=0!=l.length?["#5794f2","#71ba51","#e75a4b","#8870ff","#fece55","#2cc990","#f28034","#39b4ff","#f4509a","#2c3e50","#00a3fe","#e5d569","#50C1E5","#9FD376","#2b908f","#D0A549","#725da2","#d54852","#ff9900","#45d1ba","#edc54b","#629AEC","#45CEB0","#FB6C59","#f15c80","#f48066","#8266f4","#d63e59"]:["#D6D6D6","#cacaca","#D6D6D6"],c=a.firstResponseTime,d=a.responseTime,u=a.resolutionTime,h=a.customerHappiness,p=void 0===h?{}:h,m=p.goodCount,g=p.okCount,v=p.badCount,f=Object(L.d)(c),C=Object(L.d)(d),w=Object(L.d)(u),k=Math.max(f,C,w),z=k<10?10:k<25?25:k<50?50:100,F=100*w/(z=k+(z-k%z)),D=100*C/z,j=100*f/z,N=0!==l.length?l.map(function(e){return[Object(I.a)(e),s[e]]}):[],T=[];T=0===N.length?[[U("Email"),"0"],[U("Phone"),"0"],[U("Chat"),"0"]]:N.sort(function(e,t){return Number(t[1])-Number(e[1])}).slice(0,3);var O="0"===g&&"0"===m&&"0"===v,R=Number(g)+Number(m)+Number(v),B=void 0,P=void 0,M=void 0;return 0!==R?(B=""+Math.floor(Number(m)/R*100),P=""+Math.floor(Number(v)/R*100),M=""+Math.floor(Number(g)/R*100)):B=P=M="0",b.a.createElement(V.a,{name:"slideDown",isActive:n,component:y.Container,isCover:!1},b.a.createElement(y.Box,null,b.a.createElement(y.Container,{alignBox:"row",className:x.a.listParent},b.a.createElement(y.Box,{className:x.a.lft},b.a.createElement(y.Container,{alignBox:"column",align:"vertical","data-title":U("support.subtab.overview.sixmonth"),isCover:!1},b.a.createElement(y.Box,{className:x.a.chart},b.a.createElement(S.a,{data:this.constructDataParams(N,i,r),className:x.a.fullchart})),b.a.createElement(y.Box,{className:x.a.channels,flexible:!0},T.map(function(e,t){return b.a.createElement(_,{key:t,palette:i[t],rating:e[1],text:e[0]})})))),b.a.createElement(y.Box,{className:x.a.middle},b.a.createElement("div",{"data-title":U("support.subtab.overview.sixmonth")},b.a.createElement(E,{percent:j,text:U("support.users.firstresponsetime.label"),timecount:Object(L.a)(c)}),b.a.createElement(E,{percent:D,text:U("support.overview.response.time"),timecount:Object(L.a)(d)}),b.a.createElement(E,{percent:F,text:U("support.sla.resolution.time"),timecount:Object(L.a)(u)}),b.a.createElement(H,{arrow:"down1",endcount:z,startcount:"0",title:U("support.overview.average.hours")}))),b.a.createElement(y.Box,{className:x.a.rgt},b.a.createElement(y.Container,{alignBox:"column"},b.a.createElement(y.Box,null,b.a.createElement(A,{label:"good",rating:B}),b.a.createElement(A,{label:"ok",rating:M}),b.a.createElement(A,{label:"bad",rating:P})),b.a.createElement(y.Box,{flexible:!0,className:x.a.channelPart},b.a.createElement(_,{palette:O?"default":"success",percentage:B,rating:m,text:U("support.survey.lable.goodratings")}),b.a.createElement(_,{palette:O?"default":"info",percentage:M,rating:g,text:U("support.survey.lable.okratings")}),b.a.createElement(_,{palette:O?"default":"danger",percentage:P,rating:v,text:U("support.survey.lable.badratings")})))))))}}]),t}(b.a.Component);t.default=Y;Y.propTypes={isExpand:f.a.bool,moduleStats:f.a.object,ticketLabel:f.a.string},Y.defaultProps={moduleStats:{}}},"./src/containers/detailsubtab/CustomerOverviewCharts/CustomerOverviewCharts.module.css":function(e,t,a){e.exports={listParent:"zd-customeroverviewcharts-listParent",lft:"zd-customeroverviewcharts-lft",middle:"zd-customeroverviewcharts-middle",rgt:"zd-customeroverviewcharts-rgt",fullchart:"zd-customeroverviewcharts-fullchart",chart:"zd-customeroverviewcharts-chart",channelPart:"zd-customeroverviewcharts-channelPart"}},"./src/utils/ChartUI.js":function(e,t,a){"use strict";var n=a("../../../../npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/babel-runtime/core-js/object/assign.js"),o=a.n(n),r=a("ZC"),s=a.n(r),l={PIE_CHART:"pie",BAR_CHART:"bar",LINE_CHART:"line",AREA_CHART:"area",DIAL_CHART:"dial"};l.Dashboard={getCanvasData:function(){return{canvas:{title:{show:!1},subtitle:{show:!1},border:{show:!1},shadow:{show:!1},fontWeight:"normal",fontStyle:"normal",fontFamily:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Regular",fontSize:arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,fontColor:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#999",intelligence:{dataCount:{datalabels:1e3}}}}},getChartAxesData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"dropShadow",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",r=!(arguments.length>5&&void 0!==arguments[5])||arguments[5],s=!(arguments.length>6&&void 0!==arguments[6])||arguments[6],l=!(arguments.length>7&&void 0!==arguments[7])||arguments[7],i=arguments.length>8&&void 0!==arguments[8]?arguments[8]:"",c=!(arguments.length>9&&void 0!==arguments[9])||arguments[9],d=arguments.length>10&&void 0!==arguments[10]&&arguments[10],u=arguments.length>11&&void 0!==arguments[11]?arguments[11]:[],h=arguments.length>12&&void 0!==arguments[12]?arguments[12]:[];return{chart:{effects:{choice:e,options:{dropShadow:{color:"#CACACA",dy:3,dx:3,blur:1.5}}},axes:{rotated:!1,xaxis:{show:t,label:{show:a,text:n},ticklabel:{rotation:"auto",fontColor:o,marginTop:13},axisline:{show:r},tickmark:{color:"#FFF"}},yaxis:[{show:s,label:{show:l,text:i},grid:{color:"rgba(241,241,241,0.6)",style:"shortdash",strokeWidth:1},axisline:{show:c},tickmark:{color:"#FFFFFF"},ticklabel:{rotation:"auto",fontColor:o},threshold:{line:{show:d,values:u,color:h,dashStyle:["shortdash","shortdash"],strokeWidth:1,marker:{enabled:!0,symbol:"circle",fillColor:h,strokeColor:h,strokeWidth:.75},label:{text:"",hAlign:"center"}}}}]},plot:{plotoptions:{}}}}},getPlotOptionForBar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"values",o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];return{bar:{multiColoring:!(arguments.length>5&&void 0!==arguments[5])||arguments[5],maxBandWidth:e,fillOpacity:1,border:{show:t,radius:"5 5 0 0",size:1,color:"#FFF"},stacked:{enabled:a,showAs:n},datalabels:{show:o,fontWeight:"bold"}}}},getPlotOptionForLine:function(){return{line:{mode:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"monotone",marker:{innerFillOpacity:1,innerStrokeOpacity:1,innerFillColor:"#FFFFFF",outerFillOpacity:.5,outerStrokeOpacity:1},hoveroptions:{innerFillColor:"#FFFFFF"}}}},getPlotOptionForArea:function(){return{area:{fillOpacity:"0.2",size:1.5,mode:arguments.length>0&&void 0!==arguments[0]?arguments[0]:"monotone",stacked:{enabled:!1,showAs:"values"},marker:{enabled:!0,innerFillOpacity:1,innerStrokeOpacity:1,innerFillColor:"#FFFFFF",outerFillOpacity:.5,outerStrokeOpacity:1},hoveroptions:{innerFillColor:"#FFFFFF"}}}},getPlotOptionForPie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return{pie:{innerRadius:e,strokeWidth:t,outerPadding:5,sliceOutHeight:2.5,fillOpacity:"0.9",datalabels:{show:n,type:"doubleside",innerLabel:{show:n}}},datalabels:{show:a,showAs:"y"}}},getLegendData:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"center",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"bottom";return{legend:{enabled:e,colorBox:{shape:!(arguments.length>5&&void 0!==arguments[5])||arguments[5]?"square":null,strokewidth:1},title:{show:t,text:a,fontWeight:"bold"},colorPallete:{type:"multicolor",options:{multicolor:"zohosupport"}},hAlign:n,vAlign:o,fontColor:"#333"}}},getTooltipData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{tooltip:{enabled:e,crosshair:arguments.length>2&&void 0!==arguments[2]&&arguments[2],crosshairColor:"#0f7369",sharedSeriesInfo:t,fontSize:12,backgroundColor:"#ffffff",opacity:2,borderWidth:"5 1 1 1",lineHeight:25,shadow:"2px 2px 2px rgba(0,0,0,0.3)"}}},getSharedTooltip:function(){return{tooltip:{enabled:!0,fontSize:12,sharedSeriesInfo:!0,backgroundColor:"#272c32",fontColor:"#FFF",opacity:1,shadow:"2px 2px 2px rgba(0,0,0,0.3)",lineHeight:20,hookHeight:0}}},getMetaData:function(){return{metadata:{axes:{x:[0],y:[[1]],clr:[2],tooltip:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[0,1]},columns:[{dataindex:0,columnname:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",datatype:"ordinal"},{dataindex:1,columnname:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",datatype:"numeric"},{columnname:arguments.length>3&&void 0!==arguments[3]?arguments[3]:""}]}}},getNoteData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]?arguments[2]:"");return{notes:{enabled:e,chartValues:[{type:"customNote",x:function(e,t,a){var n=a.getBoundingClientRect();return e.plotarea.left+e.plotarea.width/2-n.width/2},y:function(e,t,a){var n=a.getBoundingClientRect();return e.plotarea.top+e.plotarea.height/2-n.height/2},htmlEl:function(e,a){var n=e.seriesdata[0].data[0],o=e.dataset,r=e.seriesdata[0].yaxiscolumnorder,l=e.systemConf.metadata.axes.y[0][0],i=e.systemConf.metadata.columns[l];r=r instanceof Array?r[0]:r;var c=n.reduce(function(e,t,a){return e+(t.disabled?0:Math.abs(o.getY(t,r)))},0),d="<div class='tac s-light'><span id='rpt_notecount' class='rpt_ntecnt'  >"+(c=.1==(c=s.a.getFormattedValue(i[i.datatype],c,i.datatype))?0:c)+"</span></br><span class='DvsubHead content-dotted rpt_cntspan' title="+t+">"+t+"</span></div>";return d=t||d}}]}}},getDonutChartData:function(e,t,a,n,r,s,i){var c=['<span style="font-size:14px">{{val(0)}} &#40;{{per(1)}}&#41;</span> <br/>','<span><span style="font-size:23px">{{val(1)}}</span> '+t+"</span>"],d=l.Dashboard.getCanvasData("Regular",40),u=l.Dashboard.getChartAxesData(),h=l.Dashboard.getPlotOptionForPie(e,"0"),p=l.Dashboard.getMetaData(c);d=o()({},d,u,p),u.chart.plot.plotoptions=o()({},u.chart.plot.plotoptions,h);var m={legend:{enabled:!1,colors:a},tooltip:{enabled:n,fontColor:"#FFF"},loader:{htmlEl:"<div></div>"},seriesdata:{chartdata:[{type:"pie",yaxiscolumnorder:[0],data:[r]}]}};if(m=o()({},m,d),s){var g=i?l.Dashboard.getNoteData(!0,"",i):l.Dashboard.getNoteData(!0,t);m=o()({},m,g)}return m},getPlotOptionForDial:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"6.28",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"100%",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"25",o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"#333",r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"percent",s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"#49ceaf";return{dial:{startAngle:e,endAngle:t,innerRadius:a,outerPadding:5,needle:{show:!1},minmaxlabels:{show:!1},datalabels:{fontSize:n,fontColor:o,showAs:r},levelMarker:{strokeColor:s,color:[s]}}}},getCircleChartData:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#ec5463",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#49ceaf",n=l.Dashboard.getCanvasData('"ProximaNovaRegular",Arial,Helvetica,sans-serif'),r=l.Dashboard.getPlotOptionForDial(0,6.28,"92%",23,"#333","percent",a);return o()(n,l.Dashboard.getMetaData(),{chart:{marginTop:0,marginRight:0,marginBottom:0,marginLeft:0,plot:{plotoptions:r},axes:{yaxis:[{show:!1,maxRange:100}]}},seriesdata:{chartdata:[{type:l.DIAL_CHART,yaxiscolumnorder:[0],data:[[["circle",e]]]}]},legend:{colors:[t]}}),n},getScrollData:function(){return{scroll:{enabled:!0,categoryThickness:arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,slider:{radius:2,strokeWidth:0},resizer:{enabled:!(arguments.length>1&&void 0!==arguments[1])||arguments[1]}}}},drawZCharts:function(e,t){try{return new s.a.charts(e,t)}catch(e){console.log("draw ZCharts exception",e)}},filterSeriesNUpdate:function(e,t){var a=t.isAxisCategory||t.isNonAxisMultiSeriesCategory||t.dataObject.isPolarAxisCategory?t.seriesdata[e]:t.seriesdata[0].data[0][e];t.legend.component.filterSeriesNUpdate(a,e,t)}},t.a=l},"./src/utils/TimeFormat.js":function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"d",function(){return s}),a.d(t,"a",function(){return l}),a.d(t,"c",function(){return i});var n=a("./src/fz-i18n/index.js"),o=function(e){return e%10==e?"0"+e:""+e},r=function(e,t,a){return arguments.length>3&&void 0!==arguments[3]&&arguments[3]?o(e)+" : "+o(t)+" : "+o(a):o(e)+":"+o(t)+":"+o(a)},s=function(e){return Math.round(e/36e5)},l=function(e){if(!e)return"00:00";var t=Math.floor(e/6e4%60),a=Math.floor(e/36e5),n=("0"+t).slice(-2);return(1==a.toString().length?"0"+a:a)+":"+n},i=function(e){var t=n.h.getI18NValue,a=n.h.userDateFormat;if(e){var o=!1,r="support.ticket.label.overduetime.info",s=a(e,{},r,"support.ticket.label.duetime.info",!1,function(e){return e.suffix===r&&(o=!0),"DD MMM YYYY hh:mm A"});return{isOverDue:o,overDueText:t(o?r:"support.ticket.label.duetime.info",s)}}return{isOverDue:!1}}},"./src/utils/formatValue.js":function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return o});var n=function(e){return parseFloat(Math.round(100*e)/100).toFixed(2)},o=function(e){return e.replace(/\b\w/g,function(e){return e.toUpperCase()})}}}]);