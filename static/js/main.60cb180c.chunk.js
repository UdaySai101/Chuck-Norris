(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(18),r=n.n(o),i=n(8),a=n(1),s=n(10),l=n(11),u=n(13),d=n(12),h=n(3),j=["Animal","Career","Celebrity","Dev","Explicit","Fashion","Food","History","Money","Movie","Music","Political","Religion","Science","Sport","Travel"];function p(e){return Object(h.jsx)(i.b,{className:e.cn,to:"/".concat(e.text,"/"),children:e.text})}var m=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{style:this.fcStyles,className:"flexContainer hidden",children:j.map((function(e){return Object(h.jsx)(p,{cn:"catElements",text:e})}))})}}]),n}(c.Component),y=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"selectedpar",children:"Selected Category : ".concat(this.props.cat)}),Object(h.jsx)("div",{className:"para",id:"jk",children:Object(h.jsxs)("p",{className:"pjoke",children:[" ",this.props.text," "]})}),Object(h.jsx)(i.b,{className:"newJoke",to:"/".concat(this.props.cat,"/"),children:"New Joke"})]})}}]),n}(c.Component);n(33);r.a.render(Object(h.jsxs)(i.a,{children:[Object(h.jsx)(m,{}),Object(h.jsx)(a.c,{children:["","Animal","Career","Celebrity","Dev","Explicit","Fashion","Food","History","Money","Movie","Music","Political","Religion","Science","Sport","Travel"].map((function(e){return Object(h.jsx)(a.a,{path:"/".concat(e,"/"),children:Object(h.jsx)(y,{text:"...",cat:e})})}))})]}),document.getElementById("section")),document.body.onload=function(){for(var e=document.getElementsByClassName("catElements"),t=document.querySelector(".selectedpar"),n=document.querySelector(".newJoke"),c=function(t){e[t].addEventListener("click",(function(){r(e[t].textContent.toLowerCase()),e[t].style.backgroundColor="#9c2318",e[t].style.color="white",document.querySelector(".para").scrollIntoView();for(var n=0;n<e.length;n++)n!=t&&(e[n].style.backgroundColor="white",e[n].style.color="black")}))},o=0;o<e.length;o++)c(o);function r(e){fetch("https://api.chucknorris.io/jokes/random?category=".concat(e)).then((function(e){return e.json()})).then((function(e){document.querySelector(".pjoke").innerHTML="".concat(e.value)}))}n.addEventListener("click",(function(){"Selected Category : "===t.textContent?fetch("https://api.chucknorris.io/jokes/random").then((function(e){return e.json()})).then((function(e){document.querySelector(".pjoke").innerHTML="".concat(e.value)})):r(t.textContent.split(" : ")[1].toLowerCase());document.querySelector(".para").scrollIntoView()})),document.querySelector(".catBtn").addEventListener("click",(function(){document.querySelector(".flexContainer").classList.contains("hidden")?(document.querySelector(".flexContainer").classList.remove("hidden"),document.querySelector(".arrow").classList.add("up"),document.querySelector(".arrow").classList.remove("down")):(document.querySelector(".flexContainer").classList.add("hidden"),document.querySelector(".arrow").classList.add("down"),document.querySelector(".arrow").classList.remove("up"))}))}}},[[34,1,2]]]);
//# sourceMappingURL=main.60cb180c.chunk.js.map