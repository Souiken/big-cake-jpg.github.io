import{_ as M}from"./YunFooter.vue_vue_type_style_index_0_lang-pQd5FK9y.js";import{d,o as n,e as r,f as i,r as S,D as C,E as y,S as T,t as b,s as h,_ as H,aL as L,k as g,v as $,F as B,l as V,n as Y,m as _,c as w,h as k,aM as D,N as E,aN as z,a as A,q as F,ax as R}from"./app-9AZgD7-C.js";const G={class:"yun-notice m-auto"},P=["innerHTML"],j=d({__name:"YunNotice",props:{content:{}},setup(m){return(e,t)=>(n(),r("div",G,[i("span",{innerHTML:e.content},null,8,P),S(e.$slots,"default")]))}}),q={class:"say"},I={key:0,class:"say-content animate-fade-in animate-iteration-1"},O={key:1,class:"say-author"},W={key:2,class:"say-from"},J=d({__name:"YunSay",setup(m){const e=C(),t=y(""),s=y(""),u=y("");function v(){const a=e.value.say.hitokoto.enable?e.value.say.hitokoto.api:e.value.say.api;a&&fetch(a).then(o=>{if(o.ok)o.json().then(c=>{if(e.value.say.hitokoto.enable)t.value=c.hitokoto,s.value=c.from_who,u.value=c.from;else{const l=c[Math.floor(Math.random()*c.length)];l.content?(t.value=l.content,s.value=l.author,u.value=l.from):t.value=l}});else throw new Error(`${e.value.say.api}, HTTP error, status = ${o.status}`)}).catch(o=>{console.error(o.message)})}return T(()=>{v()}),(a,o)=>(n(),r("div",q,[t.value?(n(),r("span",I,b(t.value),1)):h("v-if",!0),s.value?(n(),r("span",O,b(s.value),1)):h("v-if",!0),u.value?(n(),r("span",W,b(u.value),1)):h("v-if",!0)]))}}),K=i("div",{"i-ri-arrow-down-s-line":"","inline-flex":""},null,-1),Q=[K],U=d({__name:"YunGoDown",setup(m){function e(){const t=document.getElementById("yun-banner");t&&window.scrollTo({top:t.clientHeight,behavior:"smooth"})}return(t,s)=>(n(),r("button",{class:"go-down","aria-label":"go-down",onClick:e},Q))}}),X={},Z={class:"yun-cloud"},ee=L('<svg class="waves" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto"><defs><path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" fill="var(--yun-c-cloud)"></path></defs><g class="parallax"><use xlink:href="#gentle-wave" x="48" y="0"></use><use xlink:href="#gentle-wave" x="48" y="3"></use><use xlink:href="#gentle-wave" x="48" y="5"></use><use xlink:href="#gentle-wave" x="48" y="7"></use></g></svg>',1),ne=[ee];function te(m,e){return n(),r("div",Z,ne)}const oe=H(X,[["render",te]]),se={class:"banner-line-container"},ae={class:"banner-char-container"},re={class:"char"},ce={class:"banner-line-container bottom"},le=d({__name:"YunBanner",setup(m){const e=C(),t=g(()=>{const a=[];for(let o=0;o<e.value.banner.title.length;o++){const c=D(1.5,3.5);a.push(c)}return a}),s=g(()=>t.value.reduce((a,o)=>a+o,0)/2),u=g(()=>({"--banner-line-height":`calc(var(--banner-height, 100vh) / 2 - ${s.value}rem)`})),v=y(!0);return(a,o)=>{var f;const c=oe,l=U;return n(),r("div",{id:"yun-banner",style:Y(u.value)},[i("div",se,[i("div",{class:$(["banner-line vertical-line-top",{active:v.value}])},null,2)]),i("div",ae,[(n(!0),r(B,null,V(_(e).banner.title,(x,p)=>(n(),r("div",{key:p,class:"char-box"},[i("span",{class:$([p%2!==0?"char-right":"char-left"]),style:Y({"--banner-char-size":`${t.value[p]}rem`})},[i("span",re,b(x),1)],6)]))),128))]),i("div",ce,[i("div",{class:$(["banner-line vertical-line-bottom",{active:v.value}])},null,2)]),(f=_(e).banner.cloud)!=null&&f.enable?(n(),w(c,{key:0})):h("v-if",!0),k(l)],4)}}}),_e=d({__name:"home",setup(m){const e=E(),t=z("home"),s=C(),u=A(),v=g(()=>u.path.startsWith("/page"));return(a,o)=>{const c=R,l=le,f=J,x=j,p=F("RouterView"),N=M;return n(),r("main",{class:$(["yun-main flex-center",_(t)&&!_(e).isSidebarOpen?"pl-0":"md:pl-$va-sidebar-width"]),flex:"~ col",w:"full"},[k(c,{"show-hamburger":!0}),v.value?h("v-if",!0):(n(),r(B,{key:0},[_(s).banner.enable?(n(),w(l,{key:0})):h("v-if",!0),_(s).say.enable?(n(),w(f,{key:1,w:"full"})):h("v-if",!0)],64)),_(s).notice.enable?(n(),w(x,{key:1,content:_(s).notice.content,mt:"4"},null,8,["content"])):h("v-if",!0),S(a.$slots,"board"),S(a.$slots,"default",{},()=>[k(p)]),k(N)],2)}}});export{_e as default};
