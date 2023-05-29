"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[947],{3947:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,i=t(9439),o=t(2791),c=t(7689),a=t(1087),u=t(4390),s=t(1362),f=t(168),l=t(5706).Z.img(r||(r=(0,f.Z)(["\n  width: 200px;\n  height: 300px;\n"]))),d=t(5652),h=t(184),p=function(n){var e=n.movieInfo,t=e.release_date,r=e.vote_average,i=e.poster_path,o=e.title,c=e.overview,a=e.genres,u=new Date(t).getFullYear(),s=parseInt(10*r);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{src:i?"https://image.tmdb.org/t/p/w500/"+i:d,alt:o}),(0,h.jsxs)("h2",{children:[o," (",u,")"]}),(0,h.jsxs)("p",{children:[s,"%"]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:c}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:null===a||void 0===a?void 0:a.map((function(n){return n.name})).join(" ")})]})},x=t(5800),g=function(){var n,e,t=(0,o.useState)([]),r=(0,i.Z)(t,2),f=r[0],l=r[1],d=(0,c.UO)().movieId,g=(0,c.TH)(),j=(0,o.useRef)(null!==(n=null===(e=g.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,o.useEffect)((function(){(0,u.hG)(d).then((function(n){return l(n)})).catch((function(n){return console.error(n)}))}),[d]),(0,h.jsx)(x.W2,{children:(0,h.jsxs)(x.Q2,{children:[(0,h.jsx)(x.Fg,{to:j.current,children:"Go back"}),(0,h.jsx)(p,{movieInfo:f}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:"Additional information"}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(a.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(a.rU,{to:"reviews",children:"Reviews"})})]}),(0,h.jsx)(o.Suspense,{fallback:(0,h.jsx)(s.a,{}),children:(0,h.jsx)(c.j3,{})})]})]})})}},5800:function(n,e,t){t.d(e,{Fg:function(){return p},Q2:function(){return x},W2:function(){return l},l0:function(){return d},zx:function(){return h}});var r,i,o,c,a,u=t(168),s=t(5706),f=t(1087),l=s.Z.div(r||(r=(0,u.Z)(["\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),d=s.Z.form(i||(i=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),h=s.Z.button(o||(o=(0,u.Z)(["\n  position: relative;\n  background-color: #4caf50;\n  border: none;\n  font-size: 15px;\n  color: #ffffff;\n  padding: 10px;\n  width: 100px;\n  text-align: center;\n  transition-duration: 0.4s;\n  text-decoration: none;\n  overflow: hidden;\n  cursor: pointer;\n  margin-left: 20px;\n"]))),p=(0,s.Z)(f.rU)(c||(c=(0,u.Z)(["\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #ffffff;\n  text-align: center;\n  font-size: 15px;\n  padding: 10px;\n  width: 75px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n"]))),x=s.Z.div(a||(a=(0,u.Z)(["\n  display: flex;\n  flex-direction: column;\n"])))},4390:function(n,e,t){t.d(e,{WE:function(){return o},_L:function(){return c},hG:function(){return s},jP:function(){return u},p8:function(){return a}});var r={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTk2NzkxM2YyYTI0MWUwMjZhODZjZGRkOGZhZDA0YyIsInN1YiI6IjY0NzEyMWQyZGQ3MzFiMDBmYWU5Y2RmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c0BqOYAiI0jKVlZ9l2Yx4Ke1g5cQnB9763DkGfGs40c"}},i="https://api.themoviedb.org/3/",o=function(n){return fetch("".concat(i,"search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1"),r).then((function(n){return n.json()}))},c=function(){return fetch("".concat(i,"/trending/all/day?language=en-US"),r).then((function(n){return n.json()}))},a=function(n){return fetch("".concat(i,"movie/").concat(n,"/credits?language=en-US"),r).then((function(n){return n.json()}))},u=function(n){return fetch("".concat(i,"movie/").concat(n,"/reviews?language=en-US&page=1"),r).then((function(n){return n.json()}))},s=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),r).then((function(n){return n.json()}))}},5652:function(n,e,t){n.exports=t.p+"static/media/no-image.e1ce751ef1b590f719f9.jpg"}}]);
//# sourceMappingURL=947.5a597997.chunk.js.map