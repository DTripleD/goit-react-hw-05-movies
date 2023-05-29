"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{4672:function(n,e,t){t.d(e,{Z:function(){return I}});var r,i,o,c,a,u,s,l,h=t(7689),f=t(168),d=t(5706),p=t(1087),m=d.Z.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 30px;\n"]))),g=d.Z.li(i||(i=(0,f.Z)(["\n  list-style: none;\n  flex-basis: calc((100% - 150px) / 6);\n"]))),x=(0,d.Z)(p.rU)(o||(o=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  &:hover .see-more {\n    transform: translateY(80%);\n  }\n"]))),Z=d.Z.div(c||(c=(0,f.Z)(["\n  position: relative;\n  overflow: hidden;\n"]))),j=d.Z.img(a||(a=(0,f.Z)(["\n  display: block;\n  max-width: 100%;\n  height: auto;\n"]))),v=d.Z.p(u||(u=(0,f.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  transform: translateY(100%);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  background-color: rgba(78, 100, 57, 0.9);\n  font-size: 18px;\n  line-height: 1.56;\n  color: #fff;\n  text-align: center;\n"]))),b=d.Z.div(s||(s=(0,f.Z)(["\n  border: 1px solid #eeeeee;\n  border-top: none;\n  padding: 20px 24px;\n"]))),y=d.Z.h2(l||(l=(0,f.Z)(["\n  font-size: 18px;\n  line-height: 2;\n  letter-spacing: 0.06em;\n  margin-bottom: 4px;\n  color: #212121;\n  text-align: center;\n"]))),w=t(184),I=function(n){var e=n.films,t=(0,h.TH)();return console.log(e),(0,w.jsx)("div",{children:(0,w.jsx)(m,{children:null===e||void 0===e?void 0:e.map((function(n){var e=n.id,r=n.poster_path,i=n.name,o=n.title;return(0,w.jsx)(g,{children:(0,w.jsxs)(x,{to:"/movies/".concat(e),state:{from:t},children:[(0,w.jsxs)(Z,{children:[(0,w.jsx)(j,{src:"https://image.tmdb.org/t/p/w500/"+r,alt:""}),(0,w.jsx)(v,{className:"see-more",children:"See more"})]}),(0,w.jsx)(b,{children:(0,w.jsx)(y,{children:i||o})})]})},e)}))})})}},1134:function(n,e,t){t.r(e);var r=t(9439),i=t(2791),o=t(1087),c=t(4672),a=t(4390),u=t(184);e.default=function(){var n=(0,o.lr)(),e=(0,r.Z)(n,2),t=e[0],s=e[1],l=(0,i.useState)(""),h=(0,r.Z)(l,2),f=h[0],d=h[1],p=(0,i.useState)([]),m=(0,r.Z)(p,2),g=m[0],x=m[1];(0,i.useEffect)((function(){var n=t.get("query");n&&(0,a.WE)(n).then((function(n){return x(n)})).catch((function(n){return console.error(n)}))}),[t]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("form",{onSubmit:function(n){n.preventDefault(),f?s({query:f}):alert("Enter something")},children:[(0,u.jsx)("input",{type:"text",onInput:function(n){return d(n.target.value)}}),(0,u.jsx)("button",{type:"submit",children:"Search"})]}),(0,u.jsx)(c.Z,{films:g.results})]})}},4390:function(n,e,t){t.d(e,{WE:function(){return o},_L:function(){return c},hG:function(){return s},jP:function(){return u},p8:function(){return a}});var r={headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTk2NzkxM2YyYTI0MWUwMjZhODZjZGRkOGZhZDA0YyIsInN1YiI6IjY0NzEyMWQyZGQ3MzFiMDBmYWU5Y2RmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c0BqOYAiI0jKVlZ9l2Yx4Ke1g5cQnB9763DkGfGs40c"}},i="https://api.themoviedb.org/3/",o=function(n){return fetch("".concat(i,"search/movie?query=").concat(n,"&include_adult=false&language=en-US&page=1"),r).then((function(n){return n.json()}))},c=function(){return fetch("".concat(i,"/trending/all/day?language=en-US"),r).then((function(n){return n.json()}))},a=function(n){return fetch("".concat(i,"movie/").concat(n,"/credits?language=en-US"),r).then((function(n){return n.json()}))},u=function(n){return fetch("".concat(i,"movie/").concat(n,"/reviews?language=en-US&page=1"),r).then((function(n){return n.json()}))},s=function(n){return fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),r).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=134.898ccdab.chunk.js.map