(this.webpackJsonpvoter=this.webpackJsonpvoter||[]).push([[0],{17:function(e,t,s){},18:function(e,t,s){},22:function(e,t,s){"use strict";s.r(t);var r=s(0),c=s(1),a=s.n(c),n=s(9),i=s.n(n),o=(s(17),s(3)),l=s(4),u=s(6),j=s(5),d=(s(18),s(10)),h=s(2),g={angular:0,react:0,vuejs:0};var b=Object(d.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"VOTE_REACT":return console.log("vote react"),Object(h.a)(Object(h.a)({},e),{},{react:e.react+1});case"VOTE_ANGULAR":return console.log("vote angular"),Object(h.a)(Object(h.a)({},e),{},{angular:e.angular+1});case"VOTE_VUEJS":return console.log("vote vue"),Object(h.a)(Object(h.a)({},e),{},{vuejs:e.vuejs+1});default:return e}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var v=function(){return Object(r.jsxs)("div",{className:"jumbotron",children:[Object(r.jsxs)("div",{className:"App__heading",children:[Object(r.jsx)("h2",{children:"What is your favourite JS framework?"}),Object(r.jsx)("h5",{children:"Click on the image to vote"})]}),Object(r.jsx)("img",{src:"https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/21_Angular-512.png",alt:"Angular logo",onClick:function(){b.dispatch({type:"VOTE_ANGULAR"})}}),Object(r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",alt:"react icon",onClick:function(){b.dispatch({type:"VOTE_REACT"})}}),Object(r.jsx)("img",{src:"https://i.ibb.co/M99KY3w/vue-js-javascript-library-react-angularjs-hsv-logo-c6fbc27a3614875b0bee965d9e74a14d.png",alt:"vue icon",onClick:function(){b.dispatch({type:"VOTE_VUEJS"})}})]})},O=function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).store=r.props.store,r}return Object(l.a)(s,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(v,{})})}}]),s}(c.Component),p=(s(21),function(e){Object(u.a)(s,e);var t=Object(j.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).store=r.props.store,r}return Object(l.a)(s,[{key:"votesAngularInPercent",value:function(){return this.store.getState().angular?this.store.getState().angular/(this.store.getState().angular+this.store.getState().react+this.store.getState().vuejs)*100:0}},{key:"votesReactInPercent",value:function(){return this.store.getState().react?this.store.getState().react/(this.store.getState().angular+this.store.getState().react+this.store.getState().vuejs)*100:0}},{key:"votesVueInPercent",value:function(){return this.store.getState().vuejs?this.store.getState().vuejs/(this.store.getState().angular+this.store.getState().react+this.store.getState().vuejs)*100:0}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"graph",children:[Object(r.jsx)("span",{children:"Angular"}),Object(r.jsx)("div",{className:"progress progress-striped ",children:Object(r.jsx)("div",{className:"progress-bar bg-danger",style:{width:"".concat(this.votesAngularInPercent().toFixed(2)+"%")},children:this.votesAngularInPercent().toFixed(2)+"%"})})]}),Object(r.jsxs)("div",{className:"graph",children:[Object(r.jsx)("span",{children:"React"}),Object(r.jsx)("div",{className:"progress progress-striped ",children:Object(r.jsx)("div",{className:"progress-bar bg-info",style:{width:"".concat(this.votesReactInPercent().toFixed(2)+"%")},children:this.votesReactInPercent().toFixed(2)+"%"})})]}),Object(r.jsxs)("div",{className:"graph",children:[Object(r.jsx)("span",{children:"Vue"}),Object(r.jsx)("div",{className:"progress progress-striped ",children:Object(r.jsx)("div",{className:"progress-bar bg-success",style:{width:"".concat(this.votesVueInPercent().toFixed(2)+"%")},children:this.votesVueInPercent().toFixed(2)+"%"})})]})]})}}]),s}(c.Component));function x(){i.a.render(Object(r.jsxs)(a.a.StrictMode,{children:[Object(r.jsx)(O,{store:b}),Object(r.jsx)(p,{store:b})]}),document.getElementById("root"))}b.subscribe(x),x()}},[[22,1,2]]]);
//# sourceMappingURL=main.0367d62c.chunk.js.map