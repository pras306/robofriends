(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{24:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(13),s=n.n(o),c=n(7),i=n(3),a=n(14),h=n(15),d=n.n(h),u=(n(24),n(5)),b=n(6),l=n(9),j=n(8),p=n(0),O=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(p.jsx)("img",{src:"https://robohash.org/".concat(this.props.id,"?size=200x200"),alt:"Robot"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:this.props.name}),Object(p.jsx)("p",{children:this.props.email})]})]})}}]),n}(r.Component),g=function(e){var t=e.robots;return Object(p.jsx)("div",{children:t.map((function(e){return Object(p.jsx)(O,{id:e.id,name:e.name,email:e.email},e.id)}))})},f=function(e){e.searchField;var t=e.searchChange;return Object(p.jsx)("div",{className:"pa2",children:Object(p.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t})})},v=function(e){return Object(p.jsx)("div",{style:{overflowY:"scroll",border:"5px solid black",height:"80vh"},children:e.children})},m=(n(26),"CHANGE_SEARCH_FIELD"),y="REQUEST_ROBOTS_PENDING",x="REQUEST_ROBOTS_SUCCESS",R="REQUEST_ROBOTS_FAILED",w=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,s=r.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return o?Object(p.jsx)("h1",{children:"Loading"}):Object(p.jsxs)("div",{className:"tc",children:[Object(p.jsx)("h1",{children:"RoboFriends"}),Object(p.jsx)(f,{searchChange:n}),Object(p.jsx)(v,{children:Object(p.jsx)(g,{robots:s})})]})}}]),n}(r.Component),C=Object(c.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e((n=t.target.value,{type:m,payload:n}));var n},onRequestRobots:function(){return e((function(e){e({type:y}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:x,payload:t})})).catch((function(t){return e({type:R,payload:t})}))}))}}}))(w);n(27),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E={searchField:""},S={isPending:!1,robots:[],error:""},F=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case m:return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case y:return Object.assign({},e,{isPending:!0});case x:return Object.assign({},e,{robots:t.payload,isPending:!1});case R:return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),k=Object(i.d)(F,Object(i.a)(a.a,d.a));s.a.render(Object(p.jsx)(c.a,{store:k,children:Object(p.jsx)(C,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.357f7606.chunk.js.map