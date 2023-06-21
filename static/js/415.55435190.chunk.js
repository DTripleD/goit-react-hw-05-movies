"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{4672:function(n,e,t){t.d(e,{Z:function(){return w}});var r,o,i,c,a,l,u,f,s=t(7689),d=t(168),p=t(5706),h=t(1087),x=p.Z.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n  justify-content: center;\n  padding-left: 40px;\n  padding-right: 40px;\n"]))),g=p.Z.li(o||(o=(0,d.Z)(["\n  list-style: none;\n  flex-basis: calc((100% - 262px) / 6);\n  border: 1px solid #eeeeee;\n  border-bottom: none;\n"]))),m=(0,p.Z)(h.rU)(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover .see-more {\n    transform: translateY(80%);\n  }\n"]))),Z=p.Z.div(c||(c=(0,d.Z)(["\n  position: relative;\n  overflow: hidden;\n"]))),b=p.Z.img(a||(a=(0,d.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n"]))),j=p.Z.p(l||(l=(0,d.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  transform: translateY(100%);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: rgba(78, 100, 57, 0.9);\n  font-size: 18px;\n  line-height: 1.56;\n  color: #fff;\n  text-align: center;\n"]))),v=p.Z.div(u||(u=(0,d.Z)(["\n  border: 1px solid #eeeeee;\n  border-top: none;\n  padding: 20px 24px;\n  flex-grow: 1;\n"]))),y=p.Z.h2(f||(f=(0,d.Z)(["\n  font-size: 18px;\n  line-height: 2;\n  letter-spacing: 0.06em;\n  margin-bottom: 4px;\n  color: #212121;\n  text-align: center;\n"]))),k=t(184),w=function(n){var e=n.films,t=(0,s.TH)();return(0,k.jsx)("div",{children:(0,k.jsx)(x,{children:null===e||void 0===e?void 0:e.map((function(n){var e=n.id,r=n.poster_path,o=n.name,i=n.title;return(0,k.jsx)(g,{children:(0,k.jsxs)(m,{to:"/movies/".concat(e),state:{from:t},children:[(0,k.jsxs)(Z,{children:[(0,k.jsx)(b,{src:"https://image.tmdb.org/t/p/w500/"+r,alt:""}),(0,k.jsx)(j,{className:"see-more",children:"See more"})]}),(0,k.jsx)(v,{children:(0,k.jsx)(y,{children:o||i})})]})},e)}))})})}},5415:function(n,e,t){t.r(e);var r=t(9439),o=t(2791),i=t(4672),c=t(4390),a=t(3640),l=t(184);e.default=function(){var n=(0,o.useState)([]),e=(0,r.Z)(n,2),t=e[0],u=e[1];return(0,o.useEffect)((function(){(0,c._L)().then((function(n){return u(n.results)})).catch((function(n){return console.error(n)}))}),[]),(0,l.jsxs)(a.W2,{children:[(0,l.jsx)("h2",{children:"Trending today:"}),(0,l.jsx)(i.Z,{films:t})]})}},3640:function(n,e,t){t.d(e,{Bk:function(){return Z},Fg:function(){return m},Q2:function(){return b},W2:function(){return h},aV:function(){return v},ck:function(){return j},l0:function(){return x},zx:function(){return g}});var r,o,i,c,a,l,u,f,s=t(168),d=t(5706),p=t(1087),h=d.Z.div(r||(r=(0,s.Z)(["\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n"]))),x=d.Z.form(o||(o=(0,s.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),g=d.Z.button(i||(i=(0,s.Z)(["\n  position: relative;\n  background-color: #4caf50;\n  border: none;\n  font-size: 15px;\n  color: #ffffff;\n  padding: 10px;\n  width: 100px;\n  text-align: center;\n  transition-duration: 0.4s;\n  text-decoration: none;\n  overflow: hidden;\n  cursor: pointer;\n  margin-left: 20px;\n"]))),m=(0,d.Z)(p.rU)(c||(c=(0,s.Z)(["\n  display: inline-block;\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #ffffff;\n  text-align: center;\n  font-size: 15px;\n  padding: 10px;\n  width: 75px;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n"]))),Z=(0,d.Z)(p.rU)(a||(a=(0,s.Z)(["\n  color: #fff;\n  text-decoration: none;\n"]))),b=d.Z.div(l||(l=(0,s.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),j=d.Z.li(u||(u=(0,s.Z)(["\n  list-style: none;\n  padding: 0.5rem 2rem;\n  border: 0.2rem solid darkred;\n  border-radius: 0.5rem;\n\n  font-size: 1.2rem;\n\n  background-color: darkred;\n"]))),v=d.Z.ul(f||(f=(0,s.Z)(["\n  display: flex;\n  gap: 20px;\n"])))},4390:function(n,e,t){t.d(e,{WE:function(){return i},_L:function(){return c},hG:function(){return u},jP:function(){return l},p8:function(){return a}});var r={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTk2NzkxM2YyYTI0MWUwMjZhODZjZGRkOGZhZDA0YyIsInN1YiI6IjY0NzEyMWQyZGQ3MzFiMDBmYWU5Y2RmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c0BqOYAiI0jKVlZ9l2Yx4Ke1g5cQnB9763DkGfGs40c"}},o="https://api.themoviedb.org/3/",i=function(n){return fetch("".concat(o,"search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1"),r).then((function(n){return n.json()}))},c=function(){return fetch("".concat(o,"/trending/all/day?language=en-US"),r).then((function(n){return n.json()}))},a=function(n){return fetch("".concat(o,"movie/").concat(n,"/credits?language=en-US"),r).then((function(n){return n.json()}))},l=function(n){return fetch("".concat(o,"movie/").concat(n,"/reviews?language=en-US&page=1"),r).then((function(n){return n.json()}))},u=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),r).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=415.55435190.chunk.js.map