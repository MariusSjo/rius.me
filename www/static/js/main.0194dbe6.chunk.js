(this["webpackJsonprius.me"]=this["webpackJsonprius.me"]||[]).push([[0],{22:function(e,t,a){e.exports=a.p+"static/media/logo2.0.1457ad70.png"},23:function(e,t,a){e.exports=a.p+"static/media/portrett.1568700c.jpg"},24:function(e,t,a){e.exports=a.p+"static/media/sporty.d5f3f9ce.jpeg"},25:function(e,t,a){e.exports=a.p+"static/media/paaTur.bb77f787.jpg"},28:function(e,t,a){e.exports=a(44)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),c=a.n(r),i=(a(33),a(34),a(3)),o=a(4),s=a(7),u=a(5),m=a(6),d=(a(35),n.Component,a(22)),p=a.n(d),h=(a(36),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{id:"logoposition"},l.a.createElement("img",{id:"riusLogo",src:p.a,alt:"riusLogo"})),l.a.createElement("div",{class:"animation-area"},l.a.createElement("ul",{class:"box-area"},l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null),l.a.createElement("li",null))))}}]),t}(n.Component)),E=a(15),v=a(14),g=(a(37),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={liste:[]},console.log(a.searchText),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.test);try{fetch("https://apis.vinmonopolet.no/products/v0/details-normal?maxResults=500&key=6a5497e32c02464c854e54ec27996ab1").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({liste:t})})),console.log(this.state.liste),localStorage.setItem("0",this.state.liste)}catch(t){console.log("not connected")}}},{key:"sortBeer",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,this.props.searchText),l.a.createElement("h1",null,"Polet kommer her"),l.a.createElement("div",{className:"enhet"},l.a.createElement("div",{id:"namecolumn"},"Name"),l.a.createElement("div",{id:"pricecolumn"},"Price"),l.a.createElement("div",{id:"alco"},"Alco"),l.a.createElement("div",{id:"picturecolumn"},"Picture")),this.state.liste.map((function(e){if(e.basic.alcoholContent>0)return l.a.createElement("div",{className:"enheter",key:e.basic.productId},e.basic.productLongName,l.a.createElement("div",null,e.basic.volume),l.a.createElement("div",null,e.basic.alcoholContent,"%"),l.a.createElement("div",null,e.prices[0].salesPrice),l.a.createElement("img",{className:"picture",alt:e.basic.productLongName,src:"https://bilder.vinmonopolet.no/cache/100x100-0/"+e.basic.productId+"-1.jpg"}))})))}}]),t}(n.Component)),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={searchText:""},e.handleChange=e.handleChange.bind(Object(v.a)(e)),e}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({searchText:e.target.value})}},{key:"render",value:function(){var e;return l.a.createElement("div",null,l.a.createElement("input",(e={id:"searchBar",type:"text"},Object(E.a)(e,"id","searchBar"),Object(E.a)(e,"value",this.state.value),Object(E.a)(e,"onChange",this.handleChange),e)),l.a.createElement(g,{test:this.state.searchText}))}}]),t}(n.Component),f=(n.Component,a(38),a(23)),j=a.n(f),k=a(24),O=a.n(k),y=a(25),C=a.n(y),x=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"home"},l.a.createElement("div",{id:"section"},l.a.createElement("img",{src:j.a,alt:"Portrett",id:"portrett"}),l.a.createElement("h2",null,"Hei!"),l.a.createElement("p",null,"Jeg er Marius Sj\xf8berg, en student som studerer informatikk ved NTNU i Trondeim. Og som du kanskje har skj\xf8nt; en stolt eier av rius.me domenet.")),l.a.createElement("div",{id:"section"},l.a.createElement("img",{src:O.a,alt:"Portrett",id:"sporty"}),l.a.createElement("p",null,"Jeg er utrolig glad i \xe5 l\xf8pe! S\xe5 det er ganske enkel logikk for om jeg l\xf8per eller ikke!",l.a.createElement("br",null)," (VondtIKneet) ? LiggerPaaSofaen : erPaaLopetur")),l.a.createElement("div",{id:"section"},l.a.createElement("img",{src:C.a,alt:"Portrett",id:"paaTur"}),l.a.createElement("p",null,'Jeg er veldig glad i \xe5 "koble av" med en liten tur! S\xe5 du finner meg fort der dekningen ikke strekker til ogs\xe5.')))}}]),t}(n.Component),N=a(13),P=a(10);var T=function(){return l.a.createElement("div",null,l.a.createElement(N.a,null,l.a.createElement("ul",{class:"navbar"},l.a.createElement("div",null,l.a.createElement("li",null,l.a.createElement(N.b,{activeClassName:"active",to:"/ "},"Home")),l.a.createElement("li",{id:"divider"}," | "),l.a.createElement("li",null,l.a.createElement(N.b,{activeClassName:"active",to:"/projects",id:"projects"},"Projects"))),l.a.createElement("li",null,l.a.createElement(N.b,{activeClassName:"active",to:"/contact"},"Contact"))),l.a.createElement(P.c,null,l.a.createElement(P.a,{path:"/projects"},l.a.createElement(h,null)),l.a.createElement(P.a,{path:"/contact"},l.a.createElement(h,null)),l.a.createElement(P.a,{path:"/"},l.a.createElement(h,null),l.a.createElement(x,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[28,1,2]]]);
//# sourceMappingURL=main.0194dbe6.chunk.js.map