(this["webpackJsonpportfolio-react"]=this["webpackJsonpportfolio-react"]||[]).push([[0],{17:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return i}));var n=a(8),c=[{name:"Conacoin1",date:"2020.03.25",stack:"html5, css3, javascript",url:"/img/portfolio/port_0.jpg"},{name:"Conacoin2",date:"2020.03.26",stack:"html5, css3, javascript, react",url:"/img/portfolio/port_1.jpg"},{name:"Conacoin3",date:"2020.03.27",stack:"html5, css3, javascript, vue",url:"/img/portfolio/port_2.jpg"},{name:"Conacoin4",date:"2020.03.28",stack:"html5, css3, javascript, express",url:"/img/portfolio/port_3.jpg"}],r=Object(n.b)({name:"project",initialState:{projectList:c,searchList:c},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},searchByStack:function(e,t){var a=t.payload.toLowerCase().split(" "),n=[];a.forEach((function(t){e.searchList.forEach((function(e,a){e.stack.indexOf(t)>-1&&n.push(e)}))}));var c=Array.from(new Set(n));c.sort((function(e,t){return t.date<e.date?-1:t.date>e.date?1:0})),e.projectList=c}}}),l=r.actions.searchByStack,i=function(e){var t=Array.from(e.project.projectList);return t.sort((function(e,t){return t.date<e.date?-1:t.date>e.date?1:0})),t};t.a=r.reducer},24:function(e,t,a){e.exports=a(44)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/me2.3180af6a.jpg"},36:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),l=a.n(r),i=a(4),m=a(5),o=a(12),s=Object(o.a)((function(){return a.e(3).then(a.bind(null,49))})),u=Object(o.a)((function(){return a.e(4).then(a.bind(null,47))})),p=Object(o.a)((function(){return a.e(5).then(a.bind(null,48))})),d=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.d,null,c.a.createElement(m.b,{path:"/",exact:!0,component:s}),c.a.createElement(m.b,{path:"/about",component:u}),c.a.createElement(m.b,{path:"/activity",component:p}),c.a.createElement(m.a,{from:"*",to:"/"})))},E=(a(33),Object(m.g)((function(e){var t=e.location.pathname,a="";return"/"===t?a="Project":"/about"===t?a="About":"/activity"===t&&(a="Activity"),c.a.createElement(c.a.Fragment,null,c.a.createElement("header",{className:"app-header"},c.a.createElement("h2",{className:"page-header"},a)))}))),f=(a(34),Object(m.g)((function(e){var t=e.location.pathname;return c.a.createElement("div",{className:"app-sidebar"},c.a.createElement("div",{className:"profile"},c.a.createElement("figure",null,c.a.createElement("img",{src:a(35),alt:"\ud504\ub85c\ud544\uc0ac\uc9c4"}),c.a.createElement("figcaption",null,"JunCoder"))),c.a.createElement("nav",{className:"nav"},c.a.createElement("h1",{className:"hide"},"\uba54\uc778\uba54\ub274"),c.a.createElement("div",{className:"stack-area"},c.a.createElement("p",{className:"title"},"Stack"),c.a.createElement("p",{className:"text"},c.a.createElement("span",{className:"item"},"Html5"),",\xa0",c.a.createElement("span",{className:"item"},"Css3"),",\xa0",c.a.createElement("span",{className:"item"},"Javascript"),",",c.a.createElement("br",null),c.a.createElement("span",{className:"item"},"React"),",\xa0",c.a.createElement("span",{className:"item"},"Vue"),",",c.a.createElement("br",null),c.a.createElement("span",{className:"item"},"Express"))),c.a.createElement("ul",{className:"menu"},c.a.createElement("li",{className:"/about"===t?"active":""},c.a.createElement(i.b,{to:"/about"},"About")),c.a.createElement("li",{className:"/"===t?"active":""},c.a.createElement(i.b,{to:"/"},"Project")),c.a.createElement("li",{className:"/activity"===t?"active":""},c.a.createElement(i.b,{to:"/activity"},"Activity")))),c.a.createElement("small",{className:"copyright"},"Made by JunCoder with React"))})));a(36);var v=function(){return c.a.createElement("div",{className:"app"},c.a.createElement("h1",{className:"app-name hide"},"JunCoder\uc758 \ub9ac\uc561\ud2b8\ub85c \ub9cc\ub4e0 \ud3ec\ud2b8\ud3f4\ub9ac\uc624"),c.a.createElement(E,null),c.a.createElement(f,null),c.a.createElement("main",{className:"app-contents",id:"main"},c.a.createElement(d,null)))},b=a(8),h=Object(b.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),j=h.actions,N=(j.increment,j.decrement,j.incrementByAmount,h.reducer),g=a(17),y=Object(b.a)({reducer:{counter:N,project:g.a}}),k=a(18);l.a.render(c.a.createElement(i.a,null,c.a.createElement(k.a,{store:y},c.a.createElement(v,null))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.dae486fa.chunk.js.map