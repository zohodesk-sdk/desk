(window.deskappJsonp=window.deskappJsonp||[]).push([[105],{1028:function(e,t,n){"use strict";n.d(t,"c",function(){return r}),n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"f",function(){return s}),n.d(t,"d",function(){return l}),n.d(t,"e",function(){return c});var a=n(6);function r(e,t){var n=editor[e];n&&t&&n.insertHTML(t)}function o(e){var t=editor[e];if(null!=t){var n=t.getContent();return"<br>"==(n=n.trim())?"":("plaintext"==t.mode&&(n=function(e){void 0!==e&&(e=(e=encodeHTML(e)).replace(/\n/g,"<br/>"));return e}(n)),n)}return""}function i(e,t,n,a){var r={content:"",isSnippetExist:!1,triggerWord:""},o="";if(e.modify){var i=e.getRangeAt(0);e.collapseToStart(),e.modify("move","backward","word"),e.modify("extend","forward","word");var s=e.toString().toLowerCase().trim(),l=a.filter(function(e){return e.snippetWord.toLowerCase()==s.toLowerCase()});null!=(o=l.length?l[0].expandedContent:"")&&""!=o&&o.length>0?(r.isSnippetExist=!0,r.content=o,r.triggerWord=s.toLowerCase(),i.setStart(e.anchorNode,e.anchorOffset),i.setEnd(e.focusNode,e.focusOffset)):(r.content="&nbsp;&nbsp;&nbsp;&nbsp;",r.triggerWord=s.toLowerCase()),e.removeAllRanges(),e.addRange(i)}else r=function(e,t,n,a){var r="",o=e.getRangeAt(0);o.collapse(!0),o.setStart(e.anchorNode,0),r=o.toString();var i=o.cloneRange(),s=e.anchorNode.textContent,l=/\s+/,c=s.split(l).filter(Boolean),u=r.split(l).filter(Boolean),d="",m="",p={content:"",isSnippetExist:!1,triggerWord:""},h=u[u.length-1];if(""!=h&&void 0!==h){d=c[u.length-1],parseInt(d.length);var f=d.toLowerCase(),g=a.filter(function(e){var t=e.snippetWord;return t.toLowerCase()==f.toLowerCase()});m=g.length?g[0].expandedContent:""}if(null!=m&&""!=m&&null!=m){var v=parseInt(d.length-h.length),w=parseInt(r.length);v>0&&(w+=v);var _=parseInt(r.length+v-d.length),C=r.length-r.replace(/\s+$/g,"").length;(_-=C)<0&&(_=0),i.setStart(e.anchorNode,_),i.setEnd(e.focusNode,w),p.isSnippetExist=!0}else m=r;return p.content=m,p.triggerWord=d.toLowerCase(),e.removeAllRanges(),e.addRange(i),p}(e,0,0,a);return r}function s(e,t,n,r,o){for(var i={"${Cases.Contact Name}":Object(a.e)(n.firstName,n.lastName),"${Cases.Email}":n.email||"","${Cases.Phone}":t.phone||"","${Cases.Subject}":t.subject,"${Cases.Description}":t.description||"","${Cases.Request Id}":t.ticketNumber,"${Cases.Account Name}":r?r.accountName:"","${Cases.First Name}":n.firstName||"","${Cases.Last Name}":n.lastName||"","${Cases.CUSTOMER_PORTAL_LINK}":"10","${User.Support Rep Name}":Object(a.e)(o.firstName,o.lastName),"${User.Email}":o.emailId||"","${User.Phone}":o.phone||"","${User.First Name}":o.firstName||"","${User.Last Name}":o.lastName||"","${User.Mobile}":o.mobile||""},s=e.match(/(\$\{\w+\.[\w\s]+\})/g)||[],l=0;l<s.length;l++)e=e.replace(s[l],i[s[l]]);return e}function l(e){if(void 0===e)return!0;var t=e.getContent()||"";return""==t||"<div><br></div>"==t||!e.doc.body.textContent.trim().length}function c(e){return e.replace(/(<iframe.+?<\/iframe>)/g,function(e){var t=e.match(/(htt.+?")/)[0];return'<div><br></div><a href="'+(t=t.substring(0,t.length-1))+'" target="_blank">'+t+"</a>"})}},122:function(e,t,n){e.exports={attachment:"ThreadAttachments-module__attachment common-module__cboth",medium:"ThreadAttachments-module__medium",small:"ThreadAttachments-module__small",attachleft:"ThreadAttachments-module__attachleft common-module__tcenter",attachright:"ThreadAttachments-module__attachright",atatchName:"ThreadAttachments-module__atatchName common-module__dotted common-module__oflow common-module__ellipsis",attachSize:"ThreadAttachments-module__attachSize",attachDownload:"ThreadAttachments-module__attachDownload",pt8:"ThreadAttachments-module__pt8",docspan:"ThreadAttachments-module__docspan",attachCount:"ThreadAttachments-module__attachCount",mr6:"ThreadAttachments-module__mr6",ml6:"ThreadAttachments-module__ml6"}},1294:function(e,t,n){"use strict";var a=n(12),r=n.n(a),o=n(9),i=n.n(o),s=n(10),l=n.n(s),c=n(13),u=n.n(c),d=n(14),m=n.n(d),p=n(0),h=n.n(p),f=n(1),g=n.n(f),v=n(1295),w=n.n(v),_=n(63),C=n.n(_),b=n(459),N=n(8),E=n(16),y=function(e){function t(e){i()(this,t);var n=u()(this,(t.__proto__||r()(t)).call(this,e));return n.shareLink=n.shareLink.bind(n),n.pasteContent=n.pasteContent.bind(n),n}return m()(t,e),l()(t,[{key:"shareLink",value:function(){var e=this.props,t=e.shareLink;t(e.previewData.id)}},{key:"pasteContent",value:function(){var e=this.props,t=e.pasteContent;t(e.previewData.id)}},{key:"render",value:function(){var e=this.props,t=e.closePreviewBox,n=e.previewData,a=e.ticketLabel,r=e.orgId,o=e.downloadAttachment,i=e.showAttachmentViewer,s=e.isPeekView,l=e.isLightAgent,c=n.createdTime,u=n.title,d=n.createdBy,m=n.category,p=n.answer,f=n.attachments,g=void 0===f?[]:f,v=n.status,_=n.permission;return c=N.f.userDateFormat(new Date(c),{},"lateby","left",!1,function(){return"DD MMM YYYY hh:mm A"}),h.a.createElement(E.Container,{className:w.a.suggestnDtls+" "+(s&&w.a.peeksuggestnDtls)},h.a.createElement(E.Box,{onClick:t,className:w.a.header},h.a.createElement("span",{className:w.a.icnClse},h.a.createElement(C.a,{name:"cross",size:"20"}))),h.a.createElement(E.Box,{flexible:!0,scroll:"both",className:w.a.textArea},h.a.createElement("div",{className:w.a.topDiv},h.a.createElement("div",{className:w.a.topContnt},u)),h.a.createElement("div",{className:w.a.titleFormat},N.f.getI18NValue("support.label.created"),": ",h.a.createElement("span",{className:w.a.highLight},d&&d.name," "),N.f.getI18NValue("support.solutions.in.topic"),h.a.createElement("span",{className:w.a.highLight}," ",m&&m.name," "),N.f.getI18NValue("support.label.at")," ",c),h.a.createElement("div",{className:w.a.dtlsComnt,dangerouslySetInnerHTML:{__html:p}})),g.length?h.a.createElement("div",{className:w.a.attachCont},h.a.createElement(b.a,{data:g,downloadAttachment:o,showAttachmentViewer:i,orgId:r})):null,l?null:h.a.createElement(E.Box,null,h.a.createElement("div",{className:w.a.btmOptions},"Published"===v&&"AGENTS"!=_?h.a.createElement("span",{className:w.a.optnList,onClick:this.shareLink},h.a.createElement("span",{className:w.a.optionIcn},h.a.createElement(C.a,{name:"share",size:"14",color:"primary"})),h.a.createElement("span",{className:w.a.optionName},N.f.getI18NValue("support.label.share.link.to.ticket",[a]))):null,h.a.createElement("span",{className:w.a.optnList,onClick:this.pasteContent},h.a.createElement("span",{className:w.a.optionIcn},h.a.createElement(C.a,{name:"copy22",size:"14",color:"primary"})),h.a.createElement("span",{className:w.a.optionName},N.f.getI18NValue("support.label.paste.to.ticket",[a]))))))}}]),t}(h.a.Component);t.a=y,y.propTypes={closePreviewBox:g.a.func,downloadAttachment:g.a.func,isLightAgent:g.a.bool,isPeekView:g.a.bool,orgId:g.a.number,pasteContent:g.a.func,previewData:g.a.object,shareLink:g.a.func,showAttachmentViewer:g.a.func,ticketLabel:g.a.string}},1295:function(e,t,n){e.exports={suggestnDtls:"SuggestionPreviewBox-module__suggestnDtls",header:"SuggestionPreviewBox-module__header",sideArrow:"SuggestionPreviewBox-module__sideArrow common-module__posab",attachCont:"SuggestionPreviewBox-module__attachCont",topDiv:"SuggestionPreviewBox-module__topDiv",topContnt:"SuggestionPreviewBox-module__topContnt common-module__wbreak",icnClse:"SuggestionPreviewBox-module__icnClse",dtlsComnt:"SuggestionPreviewBox-module__dtlsComnt",textArea:"SuggestionPreviewBox-module__textArea",btmOptions:"SuggestionPreviewBox-module__btmOptions",optnList:"SuggestionPreviewBox-module__optnList",optionIcn:"SuggestionPreviewBox-module__optionIcn",optionName:"SuggestionPreviewBox-module__optionName",titleFormat:"SuggestionPreviewBox-module__titleFormat",highLight:"SuggestionPreviewBox-module__highLight",peeksuggestnDtls:"SuggestionPreviewBox-module__peeksuggestnDtls SuggestionPreviewBox-module__suggestnDtls"}},1484:function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i});var a=n(15),r=n(6);n(46);function o(e,t,n){return{types:Object(r.m)("GET_BESTANSWER"),callAPI:function(r){return Object(a.a)("/api/v1/zia/tickets/"+e+"/assistant/answer?departmentId="+n+"&threadId="+t+"&contentType=html",!1,{orgId:r.currentOrgId}).get().then(function(e){return e})}}}function i(e,t,n){return{types:Object(r.m)("GET_BESTANSWER"),callAPI:function(r){return Object(a.a)("/api/v1/zia/tickets/"+e+"/assistant/chat?question="+n+"&departmentId="+t+"&contentType=html",!1,{orgId:r.currentOrgId}).get().then(function(e){return e})}}}},1485:function(e,t,n){e.exports={textArea:"BotConversation-module__textArea",header:"BotConversation-module__header",posrel:"BotConversation-module__posrel",conversation:"BotConversation-module__conversation",footer:"BotConversation-module__footer",sendButton:"BotConversation-module__sendButton",sendHover:"BotConversation-module__sendHover"}},1486:function(e,t,n){e.exports={botConversation:"BotAnswer__botConversation",convWithIcon:"BotAnswer__convWithIcon",hideIcon:"BotAnswer__hideIcon",message:"BotAnswer__message",hideContent:"BotAnswer__hideContent",truncate:"BotAnswer__truncate",more:"BotAnswer__more",bot:"BotAnswer__bot",animate:"BotAnswer__animate",pop:"BotAnswer__pop",user:"BotAnswer__user",article:"BotAnswer__article",articleHeader:"BotAnswer__articleHeader",helpFul:"BotAnswer__helpFul",icons:"BotAnswer__icons",icon:"BotAnswer__icon",isRated:"BotAnswer__isRated",linkAricle:"BotAnswer__linkAricle",button:"BotAnswer__button",blueBtn:"BotAnswer__blueBtn BotAnswer__button",greenBtn:"BotAnswer__greenBtn BotAnswer__button"}},1487:function(e,t,n){e.exports={bot:"BotQuestion__bot",userConversation:"BotQuestion__userConversation",animate:"BotQuestion__animate",pop:"BotQuestion__pop",user:"BotQuestion__user"}},1488:function(e,t,n){e.exports={container:"BotTyping-module__container",typing:"BotTyping-module__typing"}},1532:function(e,t,n){"use strict";var a=n(12),r=n.n(a),o=n(9),i=n.n(o),s=n(10),l=n.n(s),c=n(13),u=n.n(c),d=n(14),m=n.n(d),p=n(0),h=n.n(p),f=n(1),g=n.n(f),v=n(1485),w=n.n(v),_=n(30),C=n(235),b=n.n(C),N=n(65),E=n(16),y=n(1486),x=n.n(y),B=n(152),k=function(e){function t(e){i()(this,t);var n=u()(this,(t.__proto__||r()(t)).call(this,e));return n.state={isTruncate:!1},n.onHelpFulClick=n.onHelpFulClick.bind(n),n.onNotHelpFulClick=n.onNotHelpFulClick.bind(n),n.setContentRef=n.setContentRef.bind(n),n.showFullContent=n.showFullContent.bind(n),n.onContainerCLick=n.onContainerCLick.bind(n),n}return m()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=this.contentRef;e.offsetHeight<e.scrollHeight&&this.setState({isTruncate:!0})}},{key:"setContentRef",value:function(e){this.contentRef=e}},{key:"onHelpFulClick",value:function(){var e=this.props;(0,e.handleBotRating)(e.id,!0)}},{key:"onNotHelpFulClick",value:function(){var e=this.props;(0,e.handleBotRating)(e.id,!1)}},{key:"showFullContent",value:function(){var e=this.props,t=e.showFullContent;t(e.id)}},{key:"onContainerCLick",value:function(e){if("IMG"==e.target.tagName){for(var t=[],n=0,a=this.contentRef.querySelectorAll("img"),r=0;r<a.length;r++)t.push({viewUrl:a[r].src,index:r}),e.target==a[r]&&(n=r);this.props.showAttachmentViewer({previewData:t,selectedIndex:n})}}},{key:"render",value:function(){var e=this,t=this.state.isTruncate,n=this.props,a=n.data,r=n.openPreviewBox,o=n.pasteContent,i=n.isLightAgent,s=a.answer,l=a.relatedArticles,c=a.needBotIcn,u=void 0===c||c,d=a.replyStatus,m=a.isRated,p=a.isNotHelpFul,f=a.isExpaned,g=l&&l.length;return t=t&&!f,h.a.createElement(E.Container,{alignBox:"row",className:x.a.animate+" "+(t?x.a.truncate:""),onClick:this.onContainerCLick},!g&&u?h.a.createElement(E.Box,{className:x.a.bot},h.a.createElement(B.a,{name:"botHead",size:"medium"})):null,g?h.a.createElement("div",{className:x.a.botConversation},h.a.createElement("div",{className:x.a.message+" "+(f?"":x.a.hideContent),dangerouslySetInnerHTML:{__html:s.message},ref:this.setContentRef}),t?h.a.createElement("span",{className:x.a.more,onClick:this.showFullContent},"see more..."):null,h.a.createElement(E.Box,{className:x.a.articleContainer},"articles"===d||i?h.a.createElement("div",null,h.a.createElement("p",{className:x.a.articleHeader},"Related Articles"),l.map(function(t){var n=t.id,a=t.title;return h.a.createElement("span",{className:x.a.article,key:n,onClick:r.bind(e,n)},a)})):h.a.createElement("div",{className:x.a.blueBtn,onClick:o.bind(this,l[0].id)},"Use this in your Reply"),h.a.createElement("div",{className:x.a.helpFul},"articles"!==d?h.a.createElement("span",{className:x.a.linkAricle,onClick:r.bind(this,l[0].id)},"Link to article"):h.a.createElement("div",null,"Helpful ?"),h.a.createElement("div",{className:x.a.icons},h.a.createElement("span",{className:x.a.icon+" "+(m?x.a.isRated:""),"data-title":m?null:"Helpful",onClick:!m&&this.onHelpFulClick},h.a.createElement(_.CommonFontIcon,{name:"deskLikeNew",size:"12"})),h.a.createElement("span",{className:x.a.icon+" "+(m?x.a.isRated:""),"data-title":m?null:"Not Helpful",onClick:!m&&this.onNotHelpFulClick},h.a.createElement(_.CommonFontIcon,{name:"deskDislikeNew",size:"12"})))))):h.a.createElement(E.Box,{className:x.a.botConversation+" "+(u?x.a.convWithIcon:"")+" "+(u?"":x.a.hideIcon)},h.a.createElement("div",{className:x.a.message+" "+(t?x.a.hideContent:""),dangerouslySetInnerHTML:{__html:s.message},ref:this.setContentRef}),t?h.a.createElement("span",{className:x.a.more,onClick:this.showFullContent},"see more..."):null,p&&!i?h.a.createElement("div",{className:x.a.greenBtn},"Create an article"):null))}}]),t}(p.Component),A=k;k.propTypes={data:g.a.array,handleBotRating:g.a.func,id:g.a.string,isLightAgent:g.a.bool,openPreviewBox:g.a.func,pasteContent:g.a.func,showAttachmentViewer:g.a.func,showFullContent:g.a.func};var I=n(1487),T=n.n(I),L=n(64),S=n.n(L),R=function(e){function t(){return i()(this,t),u()(this,(t.__proto__||r()(t)).apply(this,arguments))}return m()(t,e),l()(t,[{key:"render",value:function(){var e=this.props,t=e.question,n=e.name,a=e.photoURL;return h.a.createElement(E.Container,{alignBox:"row",className:T.a.animate+" "+T.a.user},h.a.createElement(E.Box,{className:T.a.bot},h.a.createElement(S.a,{name:n,src:a,size:"medium"})),h.a.createElement(E.Box,null,h.a.createElement("div",{className:T.a.userConversation},t)))}}]),t}(p.Component),P=R;R.propTypes={name:g.a.string,photoURL:g.a.string,question:g.a.object};var F=n(1488),D=n.n(F),O=function(e){function t(e){return i()(this,t),u()(this,(t.__proto__||r()(t)).call(this,e))}return m()(t,e),l()(t,[{key:"render",value:function(){return h.a.createElement("div",{className:D.a.typing+" "+D.a.container},h.a.createElement("div",null),h.a.createElement("div",null),h.a.createElement("div",null))}}]),t}(h.a.Component);var V=n(1294),z=n(8),j=n(1028),H=function(e){function t(e){i()(this,t);var n=u()(this,(t.__proto__||r()(t)).call(this,e));return n.state={question:"",previewData:{}},n.onQuestionChange=n.onQuestionChange.bind(n),n.onKeyDown=n.onKeyDown.bind(n),n.getAnswer=n.getAnswer.bind(n),n.showTyping=n.showTyping.bind(n),n.hideTyping=n.hideTyping.bind(n),n.setScrollRef=n.setScrollRef.bind(n),n.handleBotRating=n.handleBotRating.bind(n),n.openPreviewBox=n.openPreviewBox.bind(n),n.closePreviewBox=n.closePreviewBox.bind(n),n.shareLink=n.shareLink.bind(n),n.pasteContent=n.pasteContent.bind(n),n.insertContentInEditor=n.insertContentInEditor.bind(n),n}return m()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.ziaInitiated,a=t.initiateZIABotReply;n||(this.showTyping(),a().then(function(){e.hideTyping()}))}},{key:"onQuestionChange",value:function(e,t){this.setState({question:e})}},{key:"onKeyDown",value:function(e){13!==e.keyCode||e.shiftKey||this.getAnswer()}},{key:"getAnswer",value:function(){var e=this,t=this.state,n=t.question,a=t.isFetching;""==(n=n.trim())||a||(this.showTyping(),this.props.getAnswer(n).then(function(){e.hideTyping()},function(){e.hideTyping()}))}},{key:"showTyping",value:function(){var e=this;this.setState({isFetching:!0,question:""},function(){e.setScrollTop()})}},{key:"hideTyping",value:function(){var e=this;this.setState({isFetching:!1,question:""},function(){e.setScrollTop()})}},{key:"handleBotRating",value:function(e,t){var n=this;this.props.handleBotRating(e,t),setTimeout(function(){n.setScrollTop()},10)}},{key:"setScrollRef",value:function(e){this.srcollRef=e}},{key:"setScrollTop",value:function(){this.srcollRef.scrollTop=this.srcollRef.scrollHeight}},{key:"openPreviewBox",value:function(e){var t=this;this.setState({previewId:e}),this.props.getArticle(e).then(function(n){t.setState({previewData:n.data.entities.article[e]})})}},{key:"closePreviewBox",value:function(){this.setState({previewId:null})}},{key:"shareLink",value:function(){this.closePreviewBox();var e=this.props,t=e.isEdtiorOpen,n=e.editorId,a=this.state.previewData,r='<br><a href="'+a.webUrl+'" target="_blank" rel="noopener noreferrer">'+a.title+"</a><br>";this.closePreviewBox(),t?Object(j.c)(n,r):this.insertContentInEditor(r)}},{key:"pasteContent",value:function(e){var t=this;this.closePreviewBox();var n=this.props,a=n.isEdtiorOpen,r=n.editorId,o=n.getArticle,i=this.state.previewData,s=i.answer,l=i.attachments;s?(s=Object(j.e)(s),a?Object(j.c)(r,"<br>"+s+"<br></br>"):this.insertContentInEditor("<br>"+s+"<br></br>",l)):o(e).then(function(n){var o=n.data.entities.article[e]||{},i=o.answer,s=o.attachments;i=Object(j.e)(i),a?Object(j.c)(r,"<br>"+i+"<br></br>"):t.insertContentInEditor("<br>"+i+"<br></br>",s)})}},{key:"insertContentInEditor",value:function(e,t){var n=this.props,a=n.recentThread,r=n.openEditor,o=n.recentThreadId,i=n.ticketId;a?"DRAFT"==a.status?r(o,a.content,a,"editDraft",e,t):r(o,a.content,a,"replyall",e,t):r(i," ","","replyall",e,t)}},{key:"render",value:function(){var e=this,t=this.state,n=t.isFetching,a=t.question,r=t.previewId,o=t.previewData,i=void 0===o?{}:o,s=this.props,l=s.conversations,c=void 0===l?[]:l,u=s.name,d=s.photoURL,m=s.showFullContent,p=s.showAttachmentViewer,f=s.moduleMeta,g=s.downloadAttachment,v=s.isLightAgent;return h.a.createElement(N.Card,null,h.a.createElement(N.CardHeader,{className:w.a.header},z.f.getI18NValue("support.zia.reply.assistant")),r?h.a.createElement(V.a,{previewData:i,ticketLabel:f.tickets.singularLabel,downloadAttachment:g,showAttachmentViewer:p,closePreviewBox:this.closePreviewBox,shareLink:this.shareLink,pasteContent:this.pasteContent,isLightAgent:v,needArrow:!1}):null,h.a.createElement(N.CardContent,{className:w.a.posrel},h.a.createElement("div",{className:w.a.conversation,ref:this.setScrollRef},c.map(function(t,n){return"question"==t.type?h.a.createElement(P,{key:n,question:t.question,name:u,photoURL:d}):h.a.createElement(A,{key:n,id:n,data:t,handleBotRating:e.handleBotRating,showFullContent:m,showAttachmentViewer:p,openPreviewBox:e.openPreviewBox,pasteContent:e.pasteContent,isLightAgent:v})}),n?h.a.createElement(O,null):null)),h.a.createElement(N.CardFooter,{className:w.a.footer},h.a.createElement(E.Container,{alignBox:"row",align:"vertical"},h.a.createElement(E.Box,{flexible:!0},h.a.createElement(b.a,{placeHolder:z.f.getI18NValue("support.ask.me.something"),needBorder:!1,text:a,onChange:this.onQuestionChange,onKeyDown:this.onKeyDown,className:w.a.textArea})),h.a.createElement(E.Box,{className:w.a.sendButton+" "+(a.length?w.a.sendHover:""),onClick:this.getAnswer},h.a.createElement(_.KnowledgeBaseFontIcon,{name:"kbessentialsendmessage",size:"14"})))))}}]),t}(h.a.Component);t.a=H;H.propTypes={conversations:g.a.array,downloadAttachment:g.a.func,editorId:g.a.string,getAnswer:g.a.func,getArticle:g.a.func,handleBotRating:g.a.func,initiateZIABotReply:g.a.func,isEdtiorOpen:g.a.bool,isLightAgent:g.a.bool,isPeekView:g.a.bool,moduleMeta:g.a.object,name:g.a.string,openEditor:g.a.func,photoURL:g.a.string,recentThread:g.a.object,recentThreadId:g.a.string,showAttachmentViewer:g.a.func,showFullContent:g.a.func,ticketId:g.a.string,ziaInitiated:g.a.bool}},174:function(e,t,n){"use strict";n.d(t,"c",function(){return s}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return c}),n.d(t,"j",function(){return u}),n.d(t,"n",function(){return d}),n.d(t,"o",function(){return m}),n.d(t,"k",function(){return p}),n.d(t,"i",function(){return h}),n.d(t,"g",function(){return g}),n.d(t,"h",function(){return v}),n.d(t,"a",function(){return w}),n.d(t,"l",function(){return C}),n.d(t,"b",function(){return b}),n.d(t,"m",function(){return N}),n.d(t,"f",function(){return E});var a=n(11),r=n.n(a),o=n(177),i=n(8);function s(e){var t=c(e),n=Object(o.a)().toLowerCase()||"",a=navigator.platform.toLowerCase()||"";switch(t){case"jpeg":case"jpg":case"png":case"gif":case"bmp":case"tiff":case"tif":case"ico":return"filePicture";case"txt":case"rtf":return"fileText2";case"pdf":return"filePdf";case"html":case"htm":case"xhtml":return-1!==n.indexOf("chrome")||-1!==n.indexOf("safari")?"chrome":-1!==n.indexOf("ie")||-1!==n.indexOf("edge")?"ie":"firefox";case"ppt":case"pps":case"odp":case"sxi":case"pptx":return"ppt";case"rar":case"jar":case"zip":return"zip3";case"doc":case"docx":case"sxw":case"odt":return-1!==a.indexOf("mac")||-1!==a.indexOf("linux")?"fileOpenoffice":"fileWord";case"xml":return"xml";case"xls":case"xlsx":case"sxc":case"ods":case"csv":case"tsv":return"fileExcel";case"ics":return"ics";case"exe":return"exe";case"sh":case"bin":return"sh2";case"css":return"css52";case"mp3":case"wav":case"wma":case"aac":case"m4r":case"ogg":return"fileMusic";case"mp4":case"mkv":case"mov":case"mpeg":case"flv":case"avi":case"webm":return"fileVideo";default:return"unknown"}}function l(e){return(e=parseInt(e))<1e3?e+" Bytes":e<1e6?(e/1e3).toFixed(1)+" KB":e>=1e6?(e/1e6).toFixed(1)+" MB":void 0}function c(e){return e&&e.indexOf(".")?e.substring(e.lastIndexOf(".")+1,e.length).toLowerCase():""}function u(e){var t=c(e);return-1!=="jpeg|jpg|png|gif|bmp|ico".indexOf(t)}function d(e,t){var n={inValidArray:[],validArray:[]};if(t+e.length>10)return n.isCountExceeds=!0,n;for(var a=0;a<e.length;a++){var r=e[a],o=r.name,i=r.size;p(o)?n.inValidArray.push({isUnSupported:!0}):h(o)?n.inValidArray.push({isFileNameSizeInvalid:!0}):0===r.size?n.inValidArray.push({isEmpty:!0}):f(i)?n.inValidArray.push({isAttachSizeExceeded:!0}):n.validArray.push(r)}return n}function m(e,t,n){if(t+e.length>10)alert(i.f.getI18NValue("support.attachments.count.exceeds",[10]));else for(var a=0;a<e.length;a++){var r=e[a],o=r.name,s=r.size;if(p(o))alert(i.f.getI18NValue("support.community.attachmentcontent.extensionnotpermitted"));else if(h(o))alert(i.f.getI18NValue("support.comments.attachment.fileNameSizeLimitation"));else if(0!==r.size)if(f(s))alert(i.f.getI18NValue("support.feedback.uploaded.file.exceeds.20mb"));else{var l=new FormData;l.append("file",r),n&&n(l)}else alert(i.f.getI18NValue("support.request.empty.attachment.message"))}}function p(e){var t=e.split(".").pop().toLowerCase();return-1!==["ade","adp","bat","chm","cmd","com","cpl","exe","hta","ins","isp","jar","lib","lnk","mde","msc","msp","mst","pif","scr","sct","shb","sys","vb","vbe","vxd","wsc","wsf","wsh","jse","vbs"].indexOf(t)}function h(e){return e.length>100}function f(e){return e>20971520}function g(e){var t=0;return e.forEach(function(e){t+=parseInt(e.size)}),t}function v(e,t){return!(!(null!==e.types||e.files&&e.files.length>0)||t.fromPaste||!(e.files&&e.files.length>0||(e.types.indexOf?-1!==e.types.indexOf("Files"):e.types.contains("application/x-moz-file"))||"Files"===e.types[0]))}function w(e,t,n){var a={};a.previewData=t.filter(function(e){return!e.isPreview&&u(e.name)}),a.previewData.filter(function(t,n){t.id===e&&(a.selectedIndex=n)}),n&&n(a)}function _(e,t,n){var a=e.indexOf("/api"),r=e;return a>-1&&(r=e.slice(a,e.length),r+="?orgId="+t+(n?"&inline=true":"")),r}function C(e,t){window.open(_(e,t,!0))}function b(e,t){window.location.href=_(e,t,!1)}function N(e,t,n,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:20,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,l=e.length,c=[],u=[],d=0;if(a&&l>a-n){var m=i.f.getI18NValue("support.attachments.count.exceeds",[a]);return r.a.resolve({isError:!0,errorI18N:m})}for(var f=0;f<l;f++){var g=e[f],v=g||{},w=v.size,_=void 0===w?0:w,C=v.name,b=void 0===C?"":C;if(d+=_,p(b)){var N=i.f.getI18NValue("support.community.attachmentcontent.extensionnotpermitted");c.push({errorI18N:N,fileName:b,errorType:"fileType"})}else if(h(b)){var E=i.f.getI18NValue("support.comments.attachment.fileNameSizeLimitation");c.push({errorI18N:E,fileName:b,errorType:"fileNameSize"})}else if(0===_){var y=i.f.getI18NValue("support.request.empty.attachment.message");c.push({errorI18N:y,fileName:b,errorType:"emptyFile"})}else u.push(g)}if(!u.length){if(1===c.length){var x=c[0].errorI18N;return r.a.resolve({isError:!0,errorI18N:x})}var B=i.f.getI18NValue("support.unable.to.process.your.request");return r.a.resolve({isError:!0,errorI18N:B})}if(0===d){var k=i.f.getI18NValue("support.request.empty.attachment.message");return r.a.resolve({isError:!0,errorI18N:k})}if(d+s>1024*o*1024){var A=i.f.getI18NValue("support.attachments.size.limit.exceeds",[o]);return r.a.resolve({isError:!0,errorI18N:A})}for(var I=[],T=[],L=[],S=function(e){var n=u[e];if(t){var a=new FormData;a.append("file",n);var r=t(a).then(function(e){var t=(e.data||{}).data,n=void 0===t?{}:t,a=n.id;a&&(I.push(n),T.push(a))},function(e){var t=n.name,a=i.f.getI18NValue("support.unable.to.process.your.request");throw c.push({errorI18N:a,fileName:t,errorType:"apiError"}),e});L.push(r)}},R=0;R<u.length;R++)S(R);var P={uploadFiles:I,inValidFiles:c,isError:!1,uploadFileIds:T};return r.a.all(L).then(function(){return P},function(){return I.length?P:{isError:!0,errorI18N:i.f.getI18NValue("support.unable.to.process.your.request")}})}function E(e,t){var n=e.name;return{index:t,isPreview:!0,size:e.size,name:n,href:URL.createObjectURL(e)}}},459:function(e,t,n){"use strict";var a=n(12),r=n.n(a),o=n(9),i=n.n(o),s=n(10),l=n.n(s),c=n(13),u=n.n(c),d=n(14),m=n.n(d),p=n(0),h=n.n(p),f=n(1),g=n.n(f),v=n(122),w=n.n(v),_=n(176),C=n.n(_),b=n(120),N=n.n(b),E=n(174),y=n(109),x=n(8),B=function(e){function t(){return i()(this,t),u()(this,(t.__proto__||r()(t)).apply(this,arguments))}return m()(t,e),l()(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.orgId,r=t.showAttachmentViewer,o=t.size,i=t.neNeedToDownload,s=t.dataId,l=Object(E.g)(n);return h.a.createElement("div",null,h.a.createElement("div",{className:w.a.AttachCount,"data-id":s},h.a.createElement("span",{className:w.a.mr6},n.length),h.a.createElement("span",null,h.a.createElement(x.c,{i18NKey:"label.attachments"})),h.a.createElement("span",{className:w.a.ml6},"(",Object(E.e)(l),")")),n.map(function(t,s){var l=Object(E.j)(t.name);return h.a.createElement("div",{className:w.a.docspan,key:s,onClick:i?null:l?E.a.bind(e,t.id,n,function(e){r(e)}):E.l.bind(e,t.viewUrl?t.viewUrl:t.href,a),"data-id":1===n.length?"threadAttch":"threadAttch_"+s},h.a.createElement("span",{className:w.a.attachment+" "+w.a[o]},h.a.createElement("div",{className:w.a.attachleft},h.a.createElement(C.a,{name:Object(E.c)(t.name),size:"20"})),h.a.createElement("div",{className:w.a.attachright},h.a.createElement("span",{className:w.a.atatchName},t.name),h.a.createElement("span",{className:w.a.attachSize},Object(E.e)(t.size))),i?null:h.a.createElement(y.a,{onClick:e.props.downloadAttachment.bind(e,t.downloadUrl?t.downloadUrl:t.href),target:"_blank",className:w.a.attachDownload},h.a.createElement(N.a,{name:"downloadNew",size:"medium"==o?"14":"13",color:"pure"}))))}))}}]),t}(h.a.Component);t.a=B,B.propTypes={data:g.a.array,dataId:g.a.string,downloadAttachment:g.a.func,neNeedToDownload:g.a.bool,orgId:g.a.string,showAttachmentViewer:g.a.func,size:g.a.string},B.defaultProps={size:"medium"}},571:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n.n(a),o=n(9),i=n.n(o),s=n(10),l=n.n(s),c=n(13),u=n.n(c),d=n(14),m=n.n(d),p=n(0),h=n.n(p),f=n(1),g=n.n(f),v=n(26),w=n(1484),_=n(1532),C=function(e){function t(e){i()(this,t);var n=u()(this,(t.__proto__||r()(t)).call(this,e));return n.state={},n}return m()(t,e),l()(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.ticket,n=e.ticketId;(0,e.getBestAnswer)(n,t.recentThreadId,t.departmentId)}},{key:"render",value:function(){return h.a.createElement(_.a,{textBox:"true"})}}]),t}(p.Component);C.propTypes={getBestAnswer:g.a.func,ticket:g.a.object,ticketId:g.a.string},t.default=Object(v.connect)(function(e,t){return{ticket:e.module.ticket[t.ticketId]}},{getBestAnswer:w.b})(C)}}]);