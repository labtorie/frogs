(this.webpackJsonpfrogs=this.webpackJsonpfrogs||[]).push([[0],[,,,,function(e,a,t){e.exports={chatWrapper:"Chat_chatWrapper__3sR7g",Header:"Chat_Header__MS9Yw",Body:"Chat_Body__1jaNy",Input:"Chat_Input__18lm4",wrapper:"Chat_wrapper__1C6ET",pPicture:"Chat_pPicture__1Cdnz",Name:"Chat_Name__3g71K",messageSpace:"Chat_messageSpace__-Rgzd",bubble:"Chat_bubble__2W47T",sent:"Chat_sent__XPMJ2",received:"Chat_received__3bE2E"}},,,,function(e,a,t){e.exports={profileGrid:"Profile_profileGrid__1x7k1",profilePic:"Profile_profilePic__eIVTb",profileInfo:"Profile_profileInfo__RXenA",menu:"Profile_menu__2zXne",Name:"Profile_Name__Rdmk3",Bio:"Profile_Bio__142v8",Button:"Profile_Button__3CwY3",croakWrapper:"Profile_croakWrapper__E0bgd"}},,,function(e,a,t){e.exports={dialogsWrapper:"Dialogs_dialogsWrapper__3wive",activeChat:"Dialogs_activeChat__3Aqy2",dialogItem:"Dialogs_dialogItem__PgOBz",Link:"Dialogs_Link__3iFHm",profilePicture:"Dialogs_profilePicture__OMjyZ",name:"Dialogs_name__2oSGY"}},,function(e,a,t){e.exports={menu:"Menu_menu__2bXZL",menuWrapper:"Menu_menuWrapper__21ldz",item:"Menu_item__3k2Jh",activeTab:"Menu_activeTab__nX8ts",itemText:"Menu_itemText__1jy7r"}},,,,,,function(e,a,t){e.exports={header:"Header_header__13rWd",logo:"Header_logo__3Ugzt",news:"Header_news__3y6zH"}},,,,,,,,function(e,a,t){e.exports={contentWrapper:"Content_contentWrapper__xhfcA"}},function(e,a,t){e.exports={messagesGrid:"Messages_messagesGrid__1-be4"}},,function(e,a,t){e.exports={infoWrapper:"Info_infoWrapper__2Oz6L"}},function(e,a,t){e.exports=t(44)},function(e,a,t){},,,,,function(e,a,t){e.exports=t.p+"static/media/logo.64ca5c54.png"},function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);t(32),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var n=t(17),r=t.n(n),c=t(0),i=t.n(c),s=t(19),l=t.n(s),o=function(){return i.a.createElement("div",{className:l.a.header},i.a.createElement("img",{className:l.a.logo,src:t(37),alt:"logo"}),i.a.createElement("span",{className:l.a.news},"Messages are fake-sendable now!"))},m=(t(38),t(13)),u=t.n(m),p=t(9),d=function(e){return i.a.createElement(p.b,{className:u.a.itemText,to:e.linkTo,activeClassName:u.a.activeTab},i.a.createElement("div",{className:u.a.item},e.name))},_=function(){return i.a.createElement("div",{className:u.a.menu},i.a.createElement("div",{className:u.a.menuWrapper},i.a.createElement(d,{name:"\ud83d\udc38 \u041f\u0440\u043e\u0444\u0438\u043b\u044c",linkTo:"/profile"}),i.a.createElement(d,{name:"\ud83d\udcac \u0414\u0438\u0430\u043b\u043e\u0433\u0438",linkTo:"/messages"}),i.a.createElement(d,{name:"\ud83e\udd13 \u0418\u043d\u0444\u043e",linkTo:"/info"})))},f=t(27),h=t.n(f),g=t(2),E=t(28),v=t.n(E),b=t(10),N=t(11),P=t.n(N),I=function(e){return i.a.createElement(p.b,{className:P.a.Link,to:"/messages/".concat(e.id),activeClassName:P.a.activeChat},i.a.createElement("div",{className:P.a.dialogItem},i.a.createElement("div",{className:P.a.profilePicture},i.a.createElement("img",{src:e.img,alt:"Profile"})),i.a.createElement("div",{className:P.a.name},e.name)))},C=function(e){var a=e.chats.map((function(e){return i.a.createElement(I,{name:e.name,img:e.profilePictureURL,id:e.id})}));return i.a.createElement("div",{className:P.a.dialogsWrapper},a)},x=Object(b.b)((function(e){return{chats:e.messagesPage.chats}}),(function(e){return{}}))(C),T=t(4),D=t.n(T),w=function(e){return i.a.createElement("div",{className:D.a.wrapper},i.a.createElement("div",{className:D.a.pPicture},i.a.createElement("img",{src:e.currentChat.profilePictureURL,alt:"Profile"})),i.a.createElement("div",{className:D.a.Name},i.a.createElement("b",null,e.currentChat.name)))},W=function(e){return i.a.createElement("div",{className:D.a.messageSpace},i.a.createElement("div",{className:"".concat(e.mine?D.a.sent:D.a.received)},i.a.createElement("div",{className:D.a.bubble}," ",e.messageText)))},k=function(e){var a=e.currentChat.messages.map((function(e){return i.a.createElement(W,{messageText:e.messageText,id:e.id,mine:e.mine})}));return i.a.createElement("div",{className:D.a.chatWrapper},i.a.createElement("div",{className:D.a.Header},i.a.createElement(w,{currentChat:e.currentChat})),i.a.createElement("div",{className:D.a.Body},a),i.a.createElement("div",{className:D.a.Input},i.a.createElement("textarea",{placeholder:"\u041d\u043e\u0432\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",onChange:function(a){return e.changeInput(a.target.value)},value:e.currentChat.currentInput}),i.a.createElement("button",{onClick:function(){return e.sendMessage()}},"\u21d2")))},y=t(20),j=t(16),M={chats:[{id:0,name:"Playboi Carti",profilePictureURL:"https://bstars.ru/media/djcatalog2/images/item/17/playboi-carti.1_f.jpg",currentInput:"",messages:[{id:0,mine:!1,messageText:"They're trynna be crazy"},{id:1,mine:!0,messageText:"She wanna be Carti"}]},{id:1,name:"Lil Pump",profilePictureURL:"https://avatars.mds.yandex.net/get-ynews/56393/c75e2863dcdd080c632437162daccc65/orig",currentInput:"",messages:[{id:0,mine:!1,messageText:"\u044d\u0447\u043a\u0435\u0440\u0435)"},{id:1,mine:!0,messageText:")"}]}]},S=Object(b.b)((function(e,a){return{currentChat:e.messagesPage.chats[a.id]}}),(function(e,a){return{sendMessage:function(){return e({type:"SEND-MESSAGE",chatID:a.id})},changeInput:function(t){return e(function(e,a){return{type:"UPDATE-NEW-MESSAGE-INPUT",text:e,chatID:a}}(t,a.id))}}}))(k),O=function(){var e=Object(g.e)().chat;return i.a.createElement(S,{id:e})},L=function(e){return i.a.createElement("div",{className:v.a.messagesGrid},i.a.createElement(x,null),i.a.createElement(g.a,{path:"/messages/:chat",render:function(){return i.a.createElement(O,null)}}))},B=t(30),U=t.n(B),R=function(e){return i.a.createElement("div",{className:U.a.infoWrapper},i.a.createElement("h3",null,"\u0414\u0430\u043d\u043d\u044b\u0439 \u0441\u0430\u0439\u0442 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043a\u0430\u043a\u0438\u043c-\u0442\u043e \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u0438\u043c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u043c"),i.a.createElement("span",null,"\u0418 \u0432\u043e\u043e\u0431\u0449\u0435 \u043e\u043d \u043f\u043e \u043f\u0440\u0438\u043a\u043e\u043b\u0443 \u0441\u0434\u0435\u043b\u0430\u043d \u0438 \u043d\u0435 \u043d\u0430\u0434\u043e \u043f\u043b\u0438\u0437 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u0442\u0443\u0442 \u043a\u0430\u043a\u0438\u0435-\u0442\u043e \u043f\u0435\u0440\u043d\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0432\u043e\u0438 \u043f\u0430\u0440\u043e\u043b\u0438 \u0438 \u0442\u0434. \u042f \u0437\u0430 \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u043d\u0435 \u043d\u0435\u0441\u0443."))},G=t(8),z=t.n(G),A=function(e){return i.a.createElement("div",{className:z.a.profileGrid},i.a.createElement("div",{className:z.a.profilePic},i.a.createElement("img",{src:e.profilePictureURL,alt:"Profile"})),i.a.createElement("div",{className:z.a.profileInfo},i.a.createElement("div",{className:z.a.Name},i.a.createElement("b",null,e.name),i.a.createElement("span",null," | ",e.croaks," \u041a\u0432\u0430\u043a\u043e\u0432")),i.a.createElement("div",{className:z.a.Bio},e.bio)),i.a.createElement("div",{className:z.a.menu},i.a.createElement("div",{className:z.a.Button},"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c"),i.a.createElement("div",{className:z.a.Button},"\u041a\u0432\u0430\u043a\u043d\u0443\u0442\u044c")))},H=Object(b.b)((function(e){return{name:e.profilePage.user.name,croaks:e.profilePage.user.croaks,bio:e.profilePage.user.bio,profilePictureURL:e.profilePage.user.profilePictureURL}}),(function(e){return{}}))(A),X=function(e){return i.a.createElement("div",{className:h.a.contentWrapper},i.a.createElement(g.a,{path:"/profile",render:function(){return i.a.createElement(H,null)}}),i.a.createElement(g.a,{path:"/messages",render:function(){return i.a.createElement(L,null)}}),i.a.createElement(g.a,{path:"/info",render:function(){return i.a.createElement(R,null)}}))},J=function(e){return i.a.createElement("div",{className:"app-grid"},i.a.createElement(o,null),i.a.createElement(_,null),i.a.createElement(X,null))},Y=function(e){return i.a.createElement(p.a,null,i.a.createElement(J,null))},Z=t(15),q={user:{id:22842069,profilePictureURL:"https://bstars.ru/media/djcatalog2/images/item/17/playboi-carti.1_f.jpg",name:"Playboi Carti",croaks:1337,bio:"die lit "}},F=Object(Z.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;return e},messagesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEND-MESSAGE":if(""===e.chats[a.chatID].currentInput)return e;var t=0!==e.chats[a.chatID].messages.length?e.chats[a.chatID].messages.slice(-1)[0].id+1:0,n=Object(j.a)({},e);return n.chats=Object(y.a)(e.chats),n.chats[a.chatID]=Object(j.a)({},e.chats[a.chatID]),n.chats[a.chatID].messages=Object(y.a)(e.chats[a.chatID].messages),n.chats[a.chatID].messages.push({messageText:e.chats[a.chatID].currentInput,mine:!0,id:t}),n.chats[a.chatID].currentInput="",n;case"UPDATE-NEW-MESSAGE-INPUT":var r=a.text,c=Object(j.a)({},e);return c.chats=Object(y.a)(e.chats),c.chats[a.chatID]=Object(j.a)({},e.chats[a.chatID]),c.chats[a.chatID].currentInput=r,c;default:return e}}}),K=Object(Z.c)(F);window.store=K;var V=K;r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b.a,{store:V},i.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[31,1,2]]]);
//# sourceMappingURL=main.110850a3.chunk.js.map