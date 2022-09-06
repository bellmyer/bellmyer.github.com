(window.webpackJsonpconway=window.webpackJsonpconway||[]).push([[0],{15:function(e,t,n){e.exports=n(30)},20:function(e,t,n){},21:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(4),i=n.n(o),l=(n(20),n(21),n(3)),c=n(5),s=n(6),u=n(8),m=n(7),d=function(e){return r.a.createElement("img",{src:"./bunny.gif",className:"tile",onClick:function(){e.onClick(e.row,e.col,0)}})},h=function(e){return r.a.createElement("img",{src:"./grass.gif",className:"tile",onClick:function(){e.onClick(e.row,e.col,1)}})},f=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(c.a)(this,n),a=t.call(this,e);var r=Math.floor(1e6*Math.random()).toString();return a.state={source:"./explode.gif?"+r},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({source:"./grass.gif"})}),1e3)}},{key:"render",value:function(){var e=this;return r.a.createElement("img",{src:this.state.source,className:"tile",onClick:function(){e.props.onClick(e.props.row,e.props.col,1)}})}}]),n}(a.Component),p=function(e){return 1==e},g=function(e,t,n){var a=e.length;return n<0&&(n=a-1),n>=a&&(n=0),t<0&&(t=a-1),t>=a&&(t=0),p(e[t][n])?1:0},v=function(e,t,n){var a=e[t][n],r=function(e,t,n){return g(e,t-1,n-1)+g(e,t-1,n)+g(e,t-1,n+1)+g(e,t,n-1)+g(e,t,n+1)+g(e,t+1,n-1)+g(e,t+1,n)+g(e,t+1,n+1)}(e,t,n);return p(a)?r<2||r>3?2:1:3==r?1:0},E=function(e){for(var t=[],n=e.length,a=e[0].length,r=0;r<n;r++){for(var o=[],i=0;i<a;i++)o.push(v(e,r,i));t.push(o)}return t},w=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).initialGrid=function(){return[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]},a.copyGrid=function(e){for(var t=[],n=0;n<e.length;n++){for(var a=[],r=0;r<e[n].length;r++)a.push(e[n][r]);t.push(a)}return t},a.updateTile=function(e,t,n){var r=a.copyGrid(a.state.grid);r[e][t]=n,a.setState({grid:r})},a.tile=function(e,t,n){switch(n){case 0:return r.a.createElement(h,{row:e,col:t,onClick:a.updateTile});case 1:return r.a.createElement(d,{row:e,col:t,onClick:a.updateTile});case 2:return r.a.createElement(f,{row:e,col:t,onClick:a.updateTile});default:return null}},a.rowTiles=function(e,t){return r.a.createElement("div",null,t.map((function(t,n){return a.tile(e,n,t)})))},a.gridTiles=function(e){return e.map((function(e,t){return a.rowTiles(t,e)}))},a.nextGeneration=function(e){a.setState({grid:E(a.state.grid)})},a.state={grid:a.initialGrid()},a}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},this.gridTiles(this.state.grid),r.a.createElement(l.a,{className:"button-space",color:"primary",onClick:this.nextGeneration},"See What Happens"),r.a.createElement(l.a,{className:"button-space",color:"secondary",onClick:function(){e.setState({grid:e.initialGrid()})}},"Reset"))))}}]),n}(a.Component),b=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).toggle=function(){a.setState((function(e){return{modal:!e.modal}}))},a.state={modal:!1},a}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"float-right"},r.a.createElement(l.a,{color:"secondary",onClick:this.toggle},this.props.buttonLabel),r.a.createElement(l.b,{isOpen:this.state.modal,toggle:this.toggle,className:this.props.className},r.a.createElement(l.e,{toggle:this.toggle},"Conway's Game of Life"),r.a.createElement(l.c,null,r.a.createElement("p",null,"This is the exploding bunny version of "," ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",target:"_blank"},"Conway's Game of Life"),"."),r.a.createElement("p",null,'Click around the grassy field to add/remove bunnies. Then click "see what happens":'),r.a.createElement("ol",null,r.a.createElement("li",null,"Bunnies that have 2-3 bunnies as neighbors survive."),r.a.createElement("li",null,"Bunnies with too many or too few neighbors explode."),r.a.createElement("li",null,"Empty spaces with exactly three bunnies as neighbors will spawn a new bunny.")),r.a.createElement("p",null,"Still confused? This video will help!"),r.a.createElement("video",{src:"https://dti6i5hz1tz1z.cloudfront.net/items/2C2r440X022y050r3E0Y/Screen%20Recording%202019-08-17%20at%2006.03%20PM.mov",controls:!0,style:{display:"block",height:"auto",width:"100%"}},"Exploding-Bunnies.mov")),r.a.createElement(l.d,null,r.a.createElement(l.a,{color:"primary",onClick:this.toggle},"Got It!"))))}}]),n}(a.Component);var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.f,{dark:!0,color:"primary"},r.a.createElement("div",{className:"container"},r.a.createElement(l.g,{href:"/"},r.a.createElement("img",{src:"/apple-icon.png",className:"header-icon"}),"Conway's Game of Exploding Bunnies"),r.a.createElement(b,{buttonLabel:"How it Works"}))),r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(29);i.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.1196a02e.chunk.js.map