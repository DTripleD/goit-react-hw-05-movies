"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{1247:function(n,e,t){t.r(e);var c=t(9439),r=t(2791),i=t(7689),o=t(4390),a=t(5652),u=t(184);e.default=function(){var n=(0,i.UO)().movieId,e=(0,r.useState)([]),t=(0,c.Z)(e,2),f=t[0],h=t[1];return(0,r.useEffect)((function(){(0,o.p8)(n).then((function(n){return h(n.cast)})).catch((function(n){return console.error(n)}))}),[n]),(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:null===f||void 0===f?void 0:f.map((function(n){var e=n.profile_path,t=n.cast_id,c=n.name,r=n.character;return(0,u.jsxs)("li",{children:[(0,u.jsx)("img",{src:e?"https://image.tmdb.org/t/p/w500/"+e:a,alt:c,width:"100px"}),(0,u.jsx)("p",{children:c}),(0,u.jsxs)("p",{children:["Character: ",r]})]},t)}))})})}},4390:function(n,e,t){t.d(e,{WE:function(){return i},_L:function(){return o},hG:function(){return f},jP:function(){return u},p8:function(){return a}});var c={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTk2NzkxM2YyYTI0MWUwMjZhODZjZGRkOGZhZDA0YyIsInN1YiI6IjY0NzEyMWQyZGQ3MzFiMDBmYWU5Y2RmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c0BqOYAiI0jKVlZ9l2Yx4Ke1g5cQnB9763DkGfGs40c"}},r="https://api.themoviedb.org/3/",i=function(n){return fetch("".concat(r,"search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1"),c).then((function(n){return n.json()}))},o=function(){return fetch("".concat(r,"/trending/all/day?language=en-US"),c).then((function(n){return n.json()}))},a=function(n){return fetch("".concat(r,"movie/").concat(n,"/credits?language=en-US"),c).then((function(n){return n.json()}))},u=function(n){return fetch("".concat(r,"movie/").concat(n,"/reviews?language=en-US&page=1"),c).then((function(n){return n.json()}))},f=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),c).then((function(n){return n.json()}))}},5652:function(n,e,t){n.exports=t.p+"static/media/no-image.e1ce751ef1b590f719f9.jpg"}}]);
//# sourceMappingURL=247.40c9848d.chunk.js.map