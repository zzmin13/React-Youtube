(this["webpackJsonpreact-youtube"]=this["webpackJsonpreact-youtube"]||[]).push([[0],{11:function(e,t,a){e.exports={title:"home_title__22Eh9",container:"home_container__aYHcE"}},12:function(e,t,a){e.exports={container:"video_container__29wuO",grid:"video_grid__2hZE-",list:"video_list__MXGvf",video:"video_video__1ryiW",thumbnail:"video_thumbnail__1schN",image:"video_image__29XAr",actived:"video_actived__1PwXY",inactived:"video_inactived__1YzpT",playIcon:"video_playIcon__3gbcc",metadata:"video_metadata__13PO2",title:"video_title__34j4a",channel:"video_channel__3N6jW"}},21:function(e,t,a){e.exports={box:"loadingImage_box__2bylc",image:"loadingImage_image__3J2z3",text:"loadingImage_text__231Sx"}},46:function(e,t,a){},47:function(e,t,a){},5:function(e,t,a){e.exports={container:"videoDetail_container__2qGmY",videoDetail:"videoDetail_videoDetail__1ecAV",metadata:"videoDetail_metadata__3zsjR",title:"videoDetail_title__kRB47",channel:"videoDetail_channel__6vDuZ",channel_image:"videoDetail_channel_image__3SQJD",channel_text:"videoDetail_channel_text__2YKzQ",channel_title:"videoDetail_channel_title__2BMTG",channel_subscribers:"videoDetail_channel_subscribers__31rS9",actived:"videoDetail_actived__12QxF",inactived:"videoDetail_inactived__Auq8t",moreBtn:"videoDetail_moreBtn__2WQWU",playlist:"videoDetail_playlist__UyWYe",video:"videoDetail_video__hFD3l"}},52:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),i=a(37),s=a.n(i),o=(a(46),a(15)),r=a(9),l=a(2),j=(a(47),a(27),a(38)),u=a.n(j),d=(a(52),a(0)),b=Object(c.memo)((function(e){var t=e.history;console.log("navbar");var a=Object(c.useRef)();return Object(d.jsxs)("div",{className:"navbar",children:[Object(d.jsxs)(r.b,{to:"/",className:"navbar-logo",children:[Object(d.jsx)("i",{style:{color:"red"},className:"fab fa-youtube navbar-logo-icon"}),Object(d.jsx)("span",{className:"navbar-logo-title",children:"YouTube"})]}),Object(d.jsxs)("div",{className:"navbar-form",children:[Object(d.jsx)("input",{type:"search",placeholder:"\uac80\uc0c9",ref:a,name:"word",className:"navbar-form-input",onKeyPress:function(e){if("Enter"===e.key){var c=a.current.value;t.push("/search/".concat(c)),a.current.value=""}}}),Object(d.jsx)("button",{type:"submit",className:"navbar-form-button",onClick:function(){var e=a.current.value;t.push("/search/".concat(e)),a.current.value=""},children:Object(d.jsx)("i",{className:"fas fa-search"})})]})]})})),m=Object(l.e)(b),h=(a(58),Object(c.memo)((function(e){return console.log("navigation"),Object(d.jsxs)("ul",{className:"navigation",children:[Object(d.jsx)("li",{className:"navigation-itemBox",children:Object(d.jsxs)(r.b,{to:"/",className:"navigation-item",children:[Object(d.jsx)("i",{className:"fas fa-home"}),Object(d.jsx)("span",{children:"\ud648"})]})}),Object(d.jsx)("li",{className:"navigation-itemBox",children:Object(d.jsxs)(r.b,{to:"/popular/sport",className:"navigation-item",children:[Object(d.jsx)("i",{className:"far fa-futbol"}),Object(d.jsx)("span",{children:"\uc2a4\ud3ec\uce20"})]})}),Object(d.jsx)("li",{className:"navigation-itemBox",children:Object(d.jsxs)(r.b,{to:"/popular/education",className:"navigation-item",children:[Object(d.jsx)("i",{className:"fas fa-book-open"}),Object(d.jsx)("span",{children:"\uad50\uc721"})]})}),Object(d.jsx)("li",{className:"navigation-itemBox",children:Object(d.jsxs)(r.b,{to:"/popular/news",className:"navigation-item",children:[Object(d.jsx)("i",{className:"far fa-newspaper"}),Object(d.jsx)("span",{children:"\ub274\uc2a4"})]})}),Object(d.jsx)("li",{className:"navigation-itemBox",children:Object(d.jsxs)(r.b,{to:"/popular/comedy",className:"navigation-item",children:[Object(d.jsx)("i",{className:"fas fa-theater-masks"}),Object(d.jsx)("span",{children:"\ucf54\ubbf8\ub514"})]})})]})}))),O=a(3),v=a(12),x=a.n(v),p=a(20),f=a.n(p),g=f.a.bind(x.a),_=Object(c.memo)((function(e){var t=e.video.snippet,a=t.title,n=t.description,i=t.channelTitle,s=t.thumbnails,o=e.id,l=e.videos,j=e.display,u=s.medium.url,b=document.location.href,m=Object(c.useRef)(),h="list"===j?x.a.list:x.a.grid;return console.log("video : ".concat(o)),Object(d.jsx)("li",{className:"".concat(x.a.container," ").concat(h),children:Object(d.jsxs)(r.b,{to:{pathname:"/video/".concat(o),state:{id:o,title:a,description:n,thumbnails:s,videos:l,channelTitle:i,locationHref:b}},className:"".concat(x.a.video," ").concat(h),onMouseEnter:function(){m.current.className=g("hoverBox",{inactived:!1},{actived:!0})},onMouseLeave:function(){m.current.className=g("hoverBox",{inactived:!0},{actived:!1})},children:[Object(d.jsxs)("div",{className:"".concat(x.a.thumbnail," ").concat(h),children:[Object(d.jsx)("img",{src:u,alt:a,className:x.a.image}),Object(d.jsxs)("div",{ref:m,className:g("hoverBox",{inactived:!0},{actived:!1}),children:[Object(d.jsx)("i",{className:g("fas","fa-arrow-right","playIcon")}),Object(d.jsx)("span",{children:"\uc9c0\uae08 \uc7ac\uc0dd"})]})]}),Object(d.jsxs)("div",{className:"".concat(x.a.metadata," ").concat(h),children:[Object(d.jsx)("p",{className:x.a.title,children:a}),Object(d.jsx)("p",{className:x.a.channel,children:i})]})]})})})),y=Object(c.memo)((function(e){var t=e.videos,a=e.display;return console.log("videos"),t.map((function(e){return Object(d.jsx)(_,{id:e.id,videos:t,video:e,display:a},e.id)}))})),N=a(21),w=a.n(N),k=function(e){return Object(d.jsxs)("div",{className:w.a.box,children:[Object(d.jsx)("img",{className:w.a.image,src:"https://i.imgur.com/bBILr5g.gif",alt:"loading"}),Object(d.jsx)("h1",{className:w.a.text,children:"Loading..."})]})},D=a(11),S=a.n(D);var B=function(e){var t=e.youtube,a=Object(c.useState)([]),n=Object(O.a)(a,2),i=n[0],s=n[1],o=Object(c.useState)(!0),r=Object(O.a)(o,2),l=r[0],j=r[1];return Object(c.useEffect)((function(){t.getMostPopular().then((function(e){return s(e)})).then(j(!1))}),[]),console.log("home"),Object(d.jsx)(d.Fragment,{children:l?Object(d.jsx)(k,{}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:S.a.title,children:"\uc778\uae30 \uae09\uc0c1\uc2b9 \ub3d9\uc601\uc0c1"}),Object(d.jsx)("ul",{className:S.a.container,children:Object(d.jsx)(y,{videos:i,display:"grid"})})]})})})},F=Object(c.memo)((function(e){var t=e.youtube,a=Object(c.useState)([]),n=Object(O.a)(a,2),i=n[0],s=n[1],o=Object(c.useState)(!0),r=Object(O.a)(o,2),l=r[0],j=r[1];return Object(c.useEffect)((function(){t.getCategoryVideos(27).then((function(e){return s(e)})).then(j(!1))}),[]),console.log("education"),Object(d.jsx)(d.Fragment,{children:l?Object(d.jsx)(k,{}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{style:{paddingLeft:"0.4em",marginBottom:"10px"},children:"\uad50\uc721 \uc778\uae30 \ub3d9\uc601\uc0c1"}),Object(d.jsx)("ul",{className:S.a.container,children:Object(d.jsx)(y,{videos:i})})]})})})})),E=Object(c.memo)((function(e){var t=e.youtube,a=Object(c.useState)([]),n=Object(O.a)(a,2),i=n[0],s=n[1],o=Object(c.useState)(!0),r=Object(O.a)(o,2),l=r[0],j=r[1];return Object(c.useEffect)((function(){t.getCategoryVideos(17).then((function(e){return s(e)})).then(j(!1))}),[]),console.log("sport"),Object(d.jsx)(d.Fragment,{children:l?Object(d.jsx)(k,{}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{style:{paddingLeft:"0.4em",marginBottom:"10px"},children:"\uc2a4\ud3ec\uce20 \uc778\uae30 \ub3d9\uc601\uc0c1"}),Object(d.jsx)("ul",{className:S.a.container,children:Object(d.jsx)(y,{videos:i})})]})})})})),R=Object(c.memo)((function(e){var t=e.youtube,a=Object(c.useState)([]),n=Object(O.a)(a,2),i=n[0],s=n[1],o=Object(c.useState)(!0),r=Object(O.a)(o,2),l=r[0],j=r[1];return Object(c.useEffect)((function(){t.getCategoryVideos(25).then((function(e){return s(e)})).then(j(!1))}),[]),console.log("news"),Object(d.jsx)(d.Fragment,{children:l?Object(d.jsx)(k,{}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{style:{paddingLeft:"0.4em",marginBottom:"10px"},children:"\ub274\uc2a4 \uc778\uae30 \ub3d9\uc601\uc0c1"}),Object(d.jsx)("ul",{className:S.a.container,children:Object(d.jsx)(y,{videos:i})})]})})})})),C=Object(c.memo)((function(e){var t=e.youtube,a=Object(c.useState)([]),n=Object(O.a)(a,2),i=n[0],s=n[1],o=Object(c.useState)(!0),r=Object(O.a)(o,2),l=r[0],j=r[1];return Object(c.useEffect)((function(){t.getCategoryVideos(23).then((function(e){return s(e)})).then(j(!1))}),[]),console.log("comedy"),Object(d.jsx)(d.Fragment,{children:l?Object(d.jsx)(k,{}):Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{style:{paddingLeft:"0.4em",marginBottom:"10px"},children:"\ucf54\ubbf8\ub514 \uc778\uae30 \ub3d9\uc601\uc0c1"}),Object(d.jsx)("ul",{className:S.a.container,children:Object(d.jsx)(y,{videos:i})})]})})})})),I=a(5),M=a.n(I),Y=f.a.bind(M.a),L=Object(c.memo)((function(e){var t=Object(c.useState)(!1),a=Object(O.a)(t,2),n=a[0],i=a[1],s=Object(c.useRef)(),o=e.location,r=e.history,l=Object(c.useRef)();Object(c.useEffect)((function(){void 0===o.state&&r.push("/"),window.scroll(0,0),i(!1)}),[o.state]);if(o.state){var j=o.state,u=j.id,b=j.title,m=j.description,h=j.channelTitle,v=j.videos;return console.log("videoDetail : ".concat(u)),Object(d.jsxs)("div",{className:M.a.container,children:[Object(d.jsxs)("div",{className:M.a.videoDetail,children:[Object(d.jsx)("iframe",{className:M.a.video,src:"https://www.youtube.com/embed/".concat(u,"?autoplay=1"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),Object(d.jsxs)("div",{className:M.a.metadata,children:[Object(d.jsx)("div",{className:M.a.title,children:b}),Object(d.jsxs)("div",{className:M.a.channel,children:[Object(d.jsx)("img",{className:M.a.channel_image,src:"https://i.imgur.com/bqCsyXb.jpg",alt:"temp-profile"}),Object(d.jsxs)("div",{className:M.a.channel_text,children:[Object(d.jsx)("div",{className:M.a.channel_title,children:h}),Object(d.jsx)("div",{className:M.a.channel_subscribers,children:"\uad6c\ub3c5\uc790 n \uba85"})]})]}),Object(d.jsx)("pre",{className:Y("description",n?{actived:!0}:{inactived:!0}),ref:s,children:m}),Object(d.jsx)("span",{className:M.a.moreBtn,ref:l,onClick:function(){i(!n)},children:n?"\uac04\ub7b5\ud788":"\ub354\ubcf4\uae30"})]})]}),Object(d.jsx)("ul",{className:M.a.playlist,children:Object(d.jsx)(y,{videos:v,display:"list"})})]})}return null})),P=(a(59),function(e){var t=e.youtube,a=e.location,n=a.pathname.slice(8,a.pathname.length),i=Object(c.useState)([]),s=Object(O.a)(i,2),o=s[0],r=s[1],l=Object(c.useState)(!0),j=Object(O.a)(l,2),u=j[0],b=j[1];return Object(c.useEffect)((function(){!function(e){t.getSearch(e).then((function(e){return r(e)})).then(b(!1))}(n)}),[]),console.log("search : ".concat(n)),Object(d.jsxs)("div",{className:"search-container",children:[Object(d.jsxs)("span",{className:"search-text",children:[Object(d.jsx)("span",{style:{color:"red",fontWeight:"600"},children:n}),"\uc5d0 \ub300\ud55c \uac80\uc0c9 \uacb0\uacfc"]}),u?Object(d.jsx)(k,{}):Object(d.jsx)("ul",{className:"video-container",children:Object(d.jsx)(y,{videos:o})})]})});u.a.config();var T=function(e){var t=e.youtube;return console.log("app"),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(r.a,{basename:"/React-Youtube",children:[Object(d.jsx)(m,{}),Object(d.jsxs)("div",{className:"body-container",children:[Object(d.jsx)(h,{}),Object(d.jsx)(l.a,{path:"/",exact:!0,render:function(){return Object(d.jsx)(B,{youtube:t})}}),Object(d.jsx)(l.a,{path:"/popular/sport",render:function(){return Object(d.jsx)(E,{youtube:t})}}),Object(d.jsx)(l.a,{path:"/popular/education",render:function(){return Object(d.jsx)(F,{youtube:t})}}),Object(d.jsx)(l.a,{path:"/popular/news",render:function(){return Object(d.jsx)(R,{youtube:t})}}),Object(d.jsx)(l.a,{path:"/popular/comedy",render:function(){return Object(d.jsx)(C,{youtube:t})}}),Object(d.jsx)(l.a,{path:"/video/:id",render:function(e){return Object(d.jsx)(L,Object(o.a)({youtube:t},e))}}),Object(d.jsx)(l.a,{path:"/search/:params",render:function(e){return Object(d.jsx)(P,Object(o.a)({youtube:t},e))}})]})]})})},V=a(13),W=a.n(V),q=a(17),z=a(40),A=a(41),G=a(22),H=a.n(G),J=new(function(){function e(t){Object(z.a)(this,e),this.key=t}return Object(A.a)(e,[{key:"getMostPopular",value:function(){var e=Object(q.a)(W.a.mark((function e(){var t,a;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&key=".concat(this.key));case 2:return t=e.sent,a=t.data.items,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getCategoryVideos",value:function(){var e=Object(q.a)(W.a.mark((function e(t){var a,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&regionCode=KR&videoCategoryId=".concat(t,"&key=").concat(this.key));case 2:return a=e.sent,c=a.data.items,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getVideoDetail",value:function(){var e=Object(q.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getSearch",value:function(){var e=Object(q.a)(W.a.mark((function e(t){var a,c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H.a.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=".concat(t,"&key=").concat(this.key));case 2:return a=e.sent,c=(c=a.data.items).map((function(e){return Object(o.a)(Object(o.a)({},e),{},{id:e.id.videoId})})),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}())("AIzaSyDqHl5YM0AgGvxlbRaM4OHmnMClh-0k3mM");s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(T,{youtube:J})}),document.getElementById("root"))}},[[78,1,2]]]);
//# sourceMappingURL=main.76fe4469.chunk.js.map