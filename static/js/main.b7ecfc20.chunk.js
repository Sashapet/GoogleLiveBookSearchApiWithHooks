(this["webpackJsonplearning-hooks"]=this["webpackJsonplearning-hooks"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(6),i=t.n(c),o=function(e){return l.a.createElement("div",{className:"item"},l.a.createElement("div",{className:"poster"},l.a.createElement("img",{src:e.img})),l.a.createElement("div",{className:"title"},l.a.createElement("h5",null,e.title)))},s=function(e){var a=e.data&&e.data,t=function(e){if(a&&a[e])return a[e].volumeInfo.imageLinks?l.a.createElement(o,{title:a[e].volumeInfo.title,img:a[e].volumeInfo.imageLinks.thumbnail}):l.a.createElement(o,{title:a[e].volumeInfo.title,img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/450px-No_image_available.svg.png"})};return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},"1"==e.line?t(0):t(5)),l.a.createElement("div",{className:"col"},"1"==e.line?t(1):t(6)),l.a.createElement("div",{className:"col"},"1"==e.line?t(2):t(7)),l.a.createElement("div",{className:"col"},"1"==e.line?t(3):t(8)),l.a.createElement("div",{className:"col"},"1"==e.line?t(4):t(9)))},r=t(2),m=function(e){var a=Object(n.useState)({data:null,loading:!0}),t=Object(r.a)(a,2),l=t[0],c=t[1];return Object(n.useEffect)((function(){c((function(e){return{data:e.data,loading:!1}})),fetch(e).then((function(e){return e.json()})).then((function(e){c({data:e.items,loading:!0})}))}),[e]),l},d=t(7);var u=function(){var e=Object(d.a)({}),a=e.register,t=(0,e.watch)("search");t||(t="*");var n=document.getElementsByClassName("content")[0];"*"==t&&n?n.classList.add("noContent"):n&&n.classList.remove("noContent");var c=m("https://www.googleapis.com/books/v1/volumes?q=".concat(t)),i=c.data,o=c.loading;return l.a.createElement("div",{className:"app"},!o&&l.a.createElement("h1",null,"Loading"),l.a.createElement("div",{className:"headerFlex"},l.a.createElement("div",{className:"headerLogo"},l.a.createElement("h1",{className:"logo"},"GoogleBookDataBase")),l.a.createElement("div",{className:"headerSearch"},l.a.createElement("input",{className:"search",type:"text",ref:a,name:"search",placeholder:"Live Search"}))),l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"container"},l.a.createElement(s,{data:i,line:"1"}),l.a.createElement(s,{data:i,line:"2"}))))};t(14);i.a.render(l.a.createElement(u,null),document.getElementById("root"))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.b7ecfc20.chunk.js.map