(this["webpackJsonpusing-pre-built-react-components-completed"]=this["webpackJsonpusing-pre-built-react-components-completed"]||[]).push([[0],{29:function(e,t,n){e.exports=n(39)},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(4),r=n.n(c),o=n(22),u=n.n(o);var i=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,l.a.createElement(u.a,null),"Notes"))};var m=function(){const e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))},s=n(24),E=n.n(s);var p=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)}},l.a.createElement(E.a,null)))},f=n(25),d=n.n(f),v=n(54),h=n(55);var b=function(e){const[t,n]=Object(a.useState)(!1),[c,r]=Object(a.useState)({title:"",content:""});function o(e){const{name:t,value:n}=e.target;r(e=>({...e,[t]:n}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},t&&l.a.createElement("input",{name:"title",onChange:o,value:c.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onClick:function(){n(!0)},onChange:o,value:c.content,placeholder:"Take a note...",rows:t?3:1}),l.a.createElement(h.a,{in:t},l.a.createElement(v.a,{onClick:function(t){e.onAdd(c),r({title:"",content:""}),t.preventDefault()}},l.a.createElement(d.a,null)))))};var g=function(){const[e,t]=Object(a.useState)([]);function n(e){t(t=>t.filter((t,n)=>n!==e))}return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(b,{onAdd:function(e){t(t=>[...t,e])}}),e.map((e,t)=>l.a.createElement(p,{key:t,id:t,title:e.title,content:e.content,onDelete:n})),l.a.createElement(m,null))};n(38);r.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.53f4dcaa.chunk.js.map