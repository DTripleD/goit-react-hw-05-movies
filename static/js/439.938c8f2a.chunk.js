"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[439],{6439:function(e,n,t){t.r(n),t.d(n,{default:function(){return j}});var r,i=t(9439),c=t(2791),o=t(7689),a=t(1087),u=t(5652),s=t(4390),l=t(1362),h=t(168),d=t(5706).Z.img(r||(r=(0,h.Z)(["\n  width: 200px;\n  height: 300px;\n"]))),f=t(184),j=function(){var e,n,t,r=(0,c.useState)([]),h=(0,i.Z)(r,2),j=h[0],p=h[1],v=(0,o.UO)().movieId,g=(0,o.TH)(),m=(0,c.useRef)(null!==(e=null===(n=g.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");(0,c.useEffect)((function(){(0,s.hG)(v).then((function(e){return p(e)})).catch((function(e){return console.error(e)}))}),[v]);var x=new Date(j.release_date).getFullYear(),I=parseInt(10*j.vote_average);return(0,f.jsxs)("div",{children:[(0,f.jsx)(a.rU,{to:m.current,children:"Go back"}),(0,f.jsx)(d,{src:null!==j&&void 0!==j&&j.poster_path?"https://image.tmdb.org/t/p/w500/"+(null===j||void 0===j?void 0:j.poster_path):u,alt:j.title}),(0,f.jsxs)("h2",{children:[j.title," (",x,")"]}),(0,f.jsxs)("p",{children:[I,"%"]}),(0,f.jsx)("h3",{children:"Overview"}),(0,f.jsx)("p",{children:j.overview}),(0,f.jsx)("h3",{children:"Genres"}),(0,f.jsx)("p",{children:null===j||void 0===j||null===(t=j.genres)||void 0===t?void 0:t.map((function(e){return e.name})).join(" ")}),(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]}),(0,f.jsx)(c.Suspense,{fallback:(0,f.jsx)(l.a,{}),children:(0,f.jsx)(o.j3,{})})]})]})}},4390:function(e,n,t){t.d(n,{WE:function(){return c},_L:function(){return o},hG:function(){return s},jP:function(){return u},p8:function(){return a}});var r={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTk2NzkxM2YyYTI0MWUwMjZhODZjZGRkOGZhZDA0YyIsInN1YiI6IjY0NzEyMWQyZGQ3MzFiMDBmYWU5Y2RmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c0BqOYAiI0jKVlZ9l2Yx4Ke1g5cQnB9763DkGfGs40c"}},i="https://api.themoviedb.org/3/",c=function(e){return fetch("".concat(i,"search/movie?query=").concat(e,"&include_adult=false&language=en-US&page=1"),r).then((function(e){return e.json()}))},o=function(){return fetch("".concat(i,"/trending/all/day?language=en-US"),r).then((function(e){return e.json()}))},a=function(e){return fetch("".concat(i,"movie/").concat(e,"/credits?language=en-US"),r).then((function(e){return e.json()}))},u=function(e){return fetch("".concat(i,"movie/").concat(e,"/reviews?language=en-US&page=1"),r).then((function(e){return e.json()}))},s=function(e){return fetch("https://api.themoviedb.org/3/movie/".concat(e,"?language=en-US"),r).then((function(e){return e.json()}))}},5652:function(e,n,t){e.exports=t.p+"static/media/no-image.e1ce751ef1b590f719f9.jpg"}}]);
//# sourceMappingURL=439.938c8f2a.chunk.js.map