(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{391:function(e,t,n){"use strict";n.r(t);var r=n(5),c=(n(30),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,c,article;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,c=e.error,t.next=3,n("/",{deep:!0}).where({slug:r.slug}).fetch();case 3:if(article=(article=t.sent)[0]){t.next=7;break}return t.abrupt("return",c({statusCode:404,message:"Article not found"}));case 7:return t.abrupt("return",{article:article});case 8:case"end":return t.stop()}}),t)})))()}}),o=n(35),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("client-only",[n("div",[n("nuxt-content",{attrs:{document:e.article}})],1)])}),[],!1,null,null,null);t.default=component.exports}}]);