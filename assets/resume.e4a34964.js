import{e as m,f as v,o as _,g as y,p as g,h as w,i as x}from"./vendor.518b0a5e.js";function M(){var t=document.getElementById("myCanvas");t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight;var e=t.getContext("2d");function r(){this.x=s(3,t.width-3),this.y=s(3,t.height-3),this.r=s(.5,1),this.color=p(),this.speedX=s(-3,3)*.2,this.speedY=s(-3,3)*.2}r.prototype={draw:function(){e.beginPath(),e.globalAlpha=1,e.fillStyle=this.color,e.arc(this.x,this.y,this.r,0,Math.PI*2),e.fill()},move:function(){this.x+=this.speedX,this.y+=this.speedY,(this.x<=3||this.x>t.width-3)&&(this.speedX*=-1),(this.y<=3||this.y>=t.height-3)&&(this.speedY*=-1)}};for(var o=[],h=0;h<t.width/10;h++){var d=new r;o.push(d)}l();function l(){e.clearRect(0,0,t.width,t.height),f(),u(),window.requestAnimationFrame(l)}var i,c;t.onmousemove=function(a){var n=event||a;i=n.offsetX,c=n.offsetY};function u(){for(var a=0;a<o.length;a++){o[a].draw(),o[a].move();for(var n=0;n<o.length;n++)a!=n&&Math.sqrt(Math.pow(o[a].x-o[n].x,2)+Math.pow(o[a].y-o[n].y,2))<t.width*.04&&(e.beginPath(),e.moveTo(o[a].x,o[a].y),e.lineTo(o[n].x,o[n].y),e.strokeStyle="white",e.globalAlpha=.05,e.stroke())}}function f(){for(var a=0;a<o.length;a++)Math.sqrt(Math.pow(o[a].x-i,2)+Math.pow(o[a].y-c,2))<80&&(e.beginPath(),e.moveTo(o[a].x,o[a].y),e.lineTo(i,c),e.strokeStyle="white",e.globalAlpha=.06,e.stroke())}function s(a,n){return Math.floor(Math.random()*(n-a+1)+a)}function p(){return"rgb("+s(0,255)+","+s(0,255)+","+s(0,255)+")"}}var b=(t,e)=>{const r=t.__vccOpts||t;for(const[o,h]of e)r[o]=h;return r};const k={name:"",components:{},setup(){const t=m({});return v(()=>{M()}),{data:t}}},S=t=>(g("data-v-afae85c4"),t=t(),w(),t),I={class:"fulangren-resume"},B=S(()=>x("canvas",{id:"myCanvas"},null,-1)),C=[B];function X(t,e,r,o,h,d){return _(),y("div",I,C)}var A=b(k,[["render",X],["__scopeId","data-v-afae85c4"]]);export{A as default};
