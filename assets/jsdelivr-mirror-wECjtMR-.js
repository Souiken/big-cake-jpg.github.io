import{_ as p}from"./ValaxyMain.vue_vue_type_style_index_0_lang-EV0qxPxf.js";import{_ as d,a as m,p as F,o as h,c as y,w as e,s as u,f as s,g as l,h as i,r as a,i as E}from"./app-9AZgD7-C.js";import"./YunFooter.vue_vue_type_style_index_0_lang-pQd5FK9y.js";import"./YunCard.vue_vue_type_script_setup_true_lang-6Uxxo-5h.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-iKuD5YOe.js";import"./index-nlSmcLJj.js";const t=JSON.parse('{"title":"自建 jsDelivr 镜像","description":"","frontmatter":{"layout":"post","title":"自建 jsDelivr 镜像","date":"2023-05-03T12:17:12.000Z","updated":"2023-05-03T12:17:12.000Z","cover":"https://r2.lihaoyu.cn/2023/05/03/6451e2aacc37e.webp","tags":["CDN","白嫖"],"categories":"大蛋糕的安利"},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]},{"level":2,"title":"缓存刷新","slug":"缓存刷新","link":"#缓存刷新","children":[]}],"relativePath":"pages/posts/jsdelivr-mirror.md","path":"/home/runner/work/big-cake-jpg.github.io/big-cake-jpg.github.io/pages/posts/jsdelivr-mirror.md","lastUpdated":1706528779000}'),g={name:"pages/posts/jsdelivr-mirror.md",data(){return{data:t,frontmatter:t.frontmatter,$frontmatter:t.frontmatter}},setup(){const n=m();n.meta.frontmatter=Object.assign(n.meta.frontmatter||{},t.frontmatter||{}),F("pageData",t)}},_=s("p",null,"花了点时间，简单做出来的。",-1),f={id:"前言",tabindex:"-1"},A=s("p",null,"之所以做这个，主要是因为大部分的 jsDelivr 镜像都不允许用于加速图片，而自己早期的文章还有一堆仍在 GitHub 未迁移的图片。",-1),v=s("p",null,"也正是因为允许用于加速图片，才使用 Cloudflare CDN 分发资源以至于不让 Vercel 那 100 GB 流量被快速消耗完的同时防范攻击。",-1),b=s("p",null,"看到网上同类项目不算多，因此想着做了一个。",-1),j={id:"使用方法",tabindex:"-1"},k=s("p",null,[l("Endpoint："),s("code",null,"https://jsd.lihaoyu.cn")],-1),D=s("p",null,[l("只需要将 "),s("code",null,"https://cdn.jsdelivr.net"),l(" 替换为 "),s("code",null,"https://jsd.lihaoyu.cn"),l(" 即可。")],-1),B=s("p",null,"文件结构遵循 jsDelivr 原有结构，建议在生产环境中指定版本号，防止因缓存原因造成不必要的麻烦。",-1),$=s("p",null,"示例：",-1),C=s("div",{class:"language-diff"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"diff"),s("pre",{class:"shiki material-theme-darker vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"<!DOCTYPE html>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"<html>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"  <head>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},'    <meta charset="utf-8">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},'    <meta name="viewport" content="width=device-width, initial-scale=1">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"    <title>Hello Bulma!</title>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"-"),s("span",{style:{color:"#F07178"}},'   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"+"),s("span",{style:{color:"#C3E88D"}},'   <link rel="stylesheet" href="https://jsd.lihaoyu.cn/npm/bulma@0.9.4/css/bulma.min.css">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"  </head>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"  <body>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},'  <section class="section">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},'    <div class="container">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},'      <h1 class="title">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"        Hello World")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"      </h1>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},'      <p class="subtitle">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"        My first website with <strong>Bulma</strong>!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"      </p>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},'      <figure class="image is-128x128">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"-"),s("span",{style:{color:"#F07178"}},'       <img class="is-rounded" src="https://cdn.jsdelivr.net/gh/Big-Cake-jpg/Image_For_My_Blog/20230404_124948000_iOS.jpg">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"+"),s("span",{style:{color:"#C3E88D"}},'       <img class="is-rounded" src="https://jsd.lihaoyu.cn/gh/Big-Cake-jpg/Image_For_My_Blog/20230404_124948000_iOS.jpg">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"      </figure>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"    </div>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"  </section>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"  </body>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#EEFFFF"}},"</html>")])])]),s("pre",{class:"shiki material-theme-lighter vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"<!DOCTYPE html>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"<html>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"  <head>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},'    <meta charset="utf-8">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},'    <meta name="viewport" content="width=device-width, initial-scale=1">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"    <title>Hello Bulma!</title>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#39ADB5"}},"-"),s("span",{style:{color:"#E53935"}},'   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#39ADB5"}},"+"),s("span",{style:{color:"#91B859"}},'   <link rel="stylesheet" href="https://jsd.lihaoyu.cn/npm/bulma@0.9.4/css/bulma.min.css">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"  </head>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"  <body>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},'  <section class="section">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},'    <div class="container">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},'      <h1 class="title">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"        Hello World")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"      </h1>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},'      <p class="subtitle">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"        My first website with <strong>Bulma</strong>!")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"      </p>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},'      <figure class="image is-128x128">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#39ADB5"}},"-"),s("span",{style:{color:"#E53935"}},'       <img class="is-rounded" src="https://cdn.jsdelivr.net/gh/Big-Cake-jpg/Image_For_My_Blog/20230404_124948000_iOS.jpg">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#39ADB5"}},"+"),s("span",{style:{color:"#91B859"}},'       <img class="is-rounded" src="https://jsd.lihaoyu.cn/gh/Big-Cake-jpg/Image_For_My_Blog/20230404_124948000_iOS.jpg">')]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"      </figure>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"    </div>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"  </section>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"  </body>")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#90A4AE"}},"</html>")])])]),s("button",{class:"collapse"})],-1),w={id:"缓存刷新",tabindex:"-1"},M=s("p",null,"缓存刷新这里我没什么办法解决。",-1),O=s("p",null,"如果要刷新的话，可以在评论区留言，我每周末统一刷新一次吧。",-1);function N(n,P,S,V,c,H){const o=E,r=p;return h(),y(r,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":e(()=>[_,u(" more "),s("h2",f,[l("前言 "),i(o,{class:"header-anchor",href:"#前言","aria-label":'Permalink to "前言"'},{default:e(()=>[l("​")]),_:1})]),A,v,b,s("h2",j,[l("使用方法 "),i(o,{class:"header-anchor",href:"#使用方法","aria-label":'Permalink to "使用方法"'},{default:e(()=>[l("​")]),_:1})]),k,D,B,$,C,s("h2",w,[l("缓存刷新 "),i(o,{class:"header-anchor",href:"#缓存刷新","aria-label":'Permalink to "缓存刷新"'},{default:e(()=>[l("​")]),_:1})]),M,O]),"main-header":e(()=>[a(n.$slots,"main-header")]),"main-header-after":e(()=>[a(n.$slots,"main-header-after")]),"main-nav":e(()=>[a(n.$slots,"main-nav")]),"main-content":e(()=>[a(n.$slots,"main-content")]),"main-content-after":e(()=>[a(n.$slots,"main-content-after")]),"main-nav-before":e(()=>[a(n.$slots,"main-nav-before")]),"main-nav-after":e(()=>[a(n.$slots,"main-nav-after")]),comment:e(()=>[a(n.$slots,"comment")]),footer:e(()=>[a(n.$slots,"footer")]),aside:e(()=>[a(n.$slots,"aside")]),"aside-custom":e(()=>[a(n.$slots,"aside-custom")]),default:e(()=>[a(n.$slots,"default")]),_:3},8,["frontmatter","data"])}const J=d(g,[["render",N]]);export{t as data,J as default};
