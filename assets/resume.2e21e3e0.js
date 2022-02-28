var M=Object.defineProperty,S=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var m=(e,t,a)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))C.call(t,a)&&m(e,a,t[a]);if(g)for(var a of g(t))A.call(t,a)&&m(e,a,t[a]);return e},_=(e,t)=>S(e,I(t));import{e as E,f as B,g as L,t as X,o as u,h as v,i as l,F as Y,j as q,p as D,k as P,l as T}from"./vendor.7d47c0b3.js";function b(){var e=document.getElementById("myCanvas");e.width=document.body.clientWidth||document.documentElement.clientWidth,e.height=document.body.clientHeight||document.documentElement.clientHeight;var t=e.getContext("2d");function a(){this.x=i(3,e.width-3),this.y=i(3,e.height-3),this.r=i(.5,1),this.color=k(),this.speedX=i(-3,3)*.2,this.speedY=i(-3,3)*.2}a.prototype={draw:function(){t.beginPath(),t.globalAlpha=1,t.fillStyle=this.color,t.arc(this.x,this.y,this.r,0,Math.PI*2),t.fill()},move:function(){this.x+=this.speedX,this.y+=this.speedY,(this.x<=3||this.x>e.width-3)&&(this.speedX*=-1),(this.y<=3||this.y>=e.height-3)&&(this.speedY*=-1)}};for(var n=[],r=0;r<e.width/10;r++){var f=new a;n.push(f)}c();function c(){t.clearRect(0,0,e.width,e.height),x(),w(),window.requestAnimationFrame(c)}var d,h;e.onmousemove=function(o){var s=event||o;d=s.offsetX,h=s.offsetY};function w(){for(var o=0;o<n.length;o++){n[o].draw(),n[o].move();for(var s=0;s<n.length;s++)o!=s&&Math.sqrt(Math.pow(n[o].x-n[s].x,2)+Math.pow(n[o].y-n[s].y,2))<e.width*.04&&(t.beginPath(),t.moveTo(n[o].x,n[o].y),t.lineTo(n[s].x,n[s].y),t.strokeStyle="white",t.globalAlpha=.05,t.stroke())}}function x(){for(var o=0;o<n.length;o++)Math.sqrt(Math.pow(n[o].x-d,2)+Math.pow(n[o].y-h,2))<80&&(t.beginPath(),t.moveTo(n[o].x,n[o].y),t.lineTo(d,h),t.strokeStyle="white",t.globalAlpha=.06,t.stroke())}function i(o,s){return Math.floor(Math.random()*(s-o+1)+o)}function k(){return"rgb("+i(0,255)+","+i(0,255)+","+i(0,255)+")"}}const $=["fulangren-single","fulangren-about","fulangren-skills","fulangren-undergo","fulangren-production","fulangren-contact"];var F=(e,t)=>{const a=e.__vccOpts||e;for(const[n,r]of t)a[n]=r;return a};const N={name:"",components:{},setup(){const e=E({MODULES_ID:$});B(()=>{b(),window.onresize=()=>{b()}});let t=a=>{document.querySelector(a).scrollIntoView({behavior:"smooth"})};return L(()=>{}),_(p({},X(e)),{goAnchor:t})}},y=e=>(D("data-v-b7b57936"),e=e(),P(),e),O={class:"fulangren-resume"},U=y(()=>l("canvas",{id:"myCanvas"},null,-1)),V={class:"fulangren-nav"},H=y(()=>l("div",{class:"fulangren-line"},null,-1)),R={class:"nav-list"},W=["onClick"],z=T('<div id="fulangren-single" data-v-b7b57936> \u7B80\u6613\u4ECB\u7ECD </div><div id="fulangren-about" data-v-b7b57936> \u5173\u4E8E\u6211\u81EA\u5DF1 </div><div id="fulangren-skills" data-v-b7b57936> \u6280\u80FD\u7ED8\u56FE </div><div id="fulangren-undergo" data-v-b7b57936> \u5DE5\u4F5C\u7ECF\u5386 </div><div id="fulangren-production" data-v-b7b57936> \u5DE5\u4F5C\u7ECF\u5386 </div><div id="fulangren-contact" data-v-b7b57936> \u8054\u7CFB\u6211 </div>',6);function G(e,t,a,n,r,f){return u(),v("div",O,[U,l("main",null,[l("div",V,[H,l("div",R,[(u(!0),v(Y,null,q(e.MODULES_ID,(c,d)=>(u(),v("a",{key:d,class:"nav-btn",onClick:h=>n.goAnchor("#"+c)},null,8,W))),128))])]),z])])}var Q=F(N,[["render",G],["__scopeId","data-v-b7b57936"]]);export{Q as default};
