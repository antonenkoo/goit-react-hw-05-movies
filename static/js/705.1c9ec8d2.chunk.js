"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[705],{705:function(e,t,r){r.r(t);var n=r(861),s=r(885),i=r(757),a=r.n(i),c=r(791),o=r(731),l=r(739),u=r(184);t.default=function(){var e=(0,c.useState)(""),t=(0,s.Z)(e,2),r=t[0],i=t[1],p=(0,c.useState)([]),h=(0,s.Z)(p,2),d=h[0],f=h[1],x=(0,o.lr)(),g=(0,s.Z)(x,2),m=g[0],w=g[1],y=(0,l.TH)(),v=m.get("query");(0,c.useEffect)((function(){null!==m.get("query")?i(m.get("query")):i("");var e=JSON.parse(window.localStorage.getItem("list",JSON.stringify(d)));e&&v&&f(e)}),[]);var j=function(){var e=(0,n.Z)(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return window.localStorage.removeItem("list"),w(""!==r?{query:r}:{}),e.next=4,fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat("cc1be8043ea5c323822776e71613d749","&query=").concat(r),{method:"GET"});case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,window.localStorage.setItem("list",JSON.stringify(n.results)),f(n.results);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.jsxs)("main",{children:[(0,u.jsxs)("form",{children:[(0,u.jsx)("input",{type:"text",value:r,onChange:function(e){i(e.target.value)}}),(0,u.jsx)("button",{type:"button",onClick:j,children:"Search"})]}),(0,u.jsx)("ul",{style:{display:"flex",flexWrap:"wrap"},children:d.map((function(e){return(0,u.jsx)("li",{style:{margin:"10px"},children:(0,u.jsx)(o.rU,{to:"".concat(e.id),state:{from:y},children:(0,u.jsxs)("div",{style:{width:"100px"},children:[(0,u.jsx)("img",{style:{width:"100px"},src:"https://image.tmdb.org/t/p/w342/".concat(e.poster_path),alt:""}),(0,u.jsx)("p",{children:e.title})]})})},e.id)}))})]})}}}]);
//# sourceMappingURL=705.1c9ec8d2.chunk.js.map