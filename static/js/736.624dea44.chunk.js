"use strict";(self.webpackChunkmovie_search=self.webpackChunkmovie_search||[]).push([[736],{9736:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r,c,a=t(9439),u=t(2791),i=t(7689),s=t(7433),o=t(5652),f=t(168),p=t(5706),h=p.Z.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n  padding: 0;\n"]))),l=p.Z.li(c||(c=(0,f.Z)(["\n  list-style: none;\n  flex-basis: 120px;\n  border: 1px solid #eeeeee;\n"]))),d=t(184),v=function(){var n=(0,i.UO)().movieId,e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],c=t[1];return(0,u.useEffect)((function(){(0,s.p8)(n).then((function(n){return c(n.cast)})).catch((function(n){return console.error(n)}))}),[n]),(0,d.jsx)("div",{children:(0,d.jsx)(h,{children:r.map((function(n){var e=n.profile_path,t=n.cast_id,r=n.name,c=n.character;return(0,d.jsxs)(l,{children:[(0,d.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500/"+e:o,alt:r,width:"120px",height:"170px"}),(0,d.jsx)("h3",{children:r}),(0,d.jsxs)("p",{children:["Character: ",c]})]},t)}))})})}},7433:function(n,e,t){function r(n,e,t,r,c,a,u){try{var i=n[a](u),s=i.value}catch(o){return void t(o)}i.done?e(s):Promise.resolve(s).then(r,c)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(c,a){var u=n.apply(e,t);function i(n){r(u,c,a,i,s,"next",n)}function s(n){r(u,c,a,i,s,"throw",n)}i(void 0)}))}}t.d(e,{p8:function(){return p},jP:function(){return h},_L:function(){return f},hG:function(){return l},WE:function(){return o}});var a=t(4687),u=t.n(a),i={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTk2NzkxM2YyYTI0MWUwMjZhODZjZGRkOGZhZDA0YyIsInN1YiI6IjY0NzEyMWQyZGQ3MzFiMDBmYWU5Y2RmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c0BqOYAiI0jKVlZ9l2Yx4Ke1g5cQnB9763DkGfGs40c"}},s="https://api.themoviedb.org/3/",o=function(){var n=c(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=1"),i);case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=c(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"/trending/all/day?language=en-US"),i);case 2:return e=n.sent,n.next=5,e.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=c(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"movie/").concat(e,"/credits?language=en-US"),i);case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=c(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(s,"movie/").concat(e,"/reviews?language=en-US&page=1"),i);case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=c(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),i);case 2:return t=n.sent,n.next=5,t.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},5652:function(n,e,t){n.exports=t.p+"static/media/no-image.e1ce751ef1b590f719f9.jpg"}}]);
//# sourceMappingURL=736.624dea44.chunk.js.map