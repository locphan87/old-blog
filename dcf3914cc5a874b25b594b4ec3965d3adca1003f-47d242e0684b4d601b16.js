(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+yNS":function(e,t,n){"use strict";var a=n("Wbzz");t.a=function(){return Object(a.useStaticQuery)("318001574").site.siteMetadata}},"5hlw":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("qhky"),c=n("Wbzz"),i=n("+yNS");t.a=function(e){var t=e.title,n=void 0===t?"":t,a=e.description,l=void 0===a?"":a,s=e.pathname,g=void 0===s?"":s,p=e.image,b=void 0===p?"":p,u=e.children,d=void 0===u?null:u,m=e.canonicalUrl,f=void 0===m?"":m,h=Object(i.a)(),x=h.siteTitle,y=h.siteTitleAlt,O=h.siteUrl,j=h.siteDescription,v=h.siteLanguage,k=h.siteImage,w=h.author,S={title:n||y,description:l||j,url:""+O+(g||""),image:""+O+(b||k)};return r.a.createElement(o.a,{title:n,defaultTitle:y,titleTemplate:"%s | "+x},r.a.createElement("html",{lang:v}),r.a.createElement("meta",{name:"description",content:S.description}),r.a.createElement("meta",{name:"image",content:S.image}),r.a.createElement("meta",{property:"og:title",content:S.title}),r.a.createElement("meta",{property:"og:url",content:S.url}),r.a.createElement("meta",{property:"og:description",content:S.description}),r.a.createElement("meta",{property:"og:image",content:S.image}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:image:alt",content:S.description}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:title",content:S.title}),r.a.createElement("meta",{name:"twitter:url",content:S.url}),r.a.createElement("meta",{name:"twitter:description",content:S.description}),r.a.createElement("meta",{name:"twitter:image",content:S.image}),r.a.createElement("meta",{name:"twitter:image:alt",content:S.description}),r.a.createElement("meta",{name:"twitter:creator",content:w}),r.a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:Object(c.withPrefix)("/favicon-32x32.png")}),r.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:Object(c.withPrefix)("/favicon-16x16.png")}),r.a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:Object(c.withPrefix)("/apple-touch-icon.png")}),f?r.a.createElement("link",{rel:"canonical",href:f}):null,d)}},Cceb:function(e,t,n){"use strict";t.a=function(e){return e.replace(/\/\/+/g,"/")}},Frpm:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("eq4K");var a=n("zLVn"),r=n("q1tI"),o=n("Wbzz"),c=n("B+z7"),i=n("yAkg"),l=function(e){var t=e.to,n=e.language,l=Object(a.a)(e,["to","language"]),s=Object(i.a)(),g=s.defaultLang,p=s.locale,b=n||p;return r.createElement(o.Link,Object.assign({},l,{to:Object(c.localizedPath)(g,b,t)}))};n("YwZP")},"bz+c":function(e,t,n){"use strict";var a=n("rePB"),r=n("q1tI"),o=n.n(r),c=n("qKvR"),i=n("2A+t"),l=n("izhR"),s=(n("c95Q"),n("5hlw")),g=n("PcS7"),p=n("wuJk"),b=function(e){var t=e.isDark,n=e.toggle;return Object(i.c)("button",{onClick:n,type:"button","aria-label":t?"Activate Light Mode":"Activate Dark Mode",title:t?"Activate Light Mode":"Activate Dark Mode",sx:{opacity:.65,position:"relative",borderRadius:"5px",width:"40px",height:"25px",display:"flex",alignItems:"center",justifyContent:"center",transition:"opacity 0.3s ease",border:"none",outline:"none",background:"none",cursor:"pointer",padding:0,appearance:"none","&:hover, &:focus":{opacity:1}}},Object(i.c)("div",{sx:{position:"relative",width:"24px",height:"24px",borderRadius:"50%",border:function(e){return t?"4px solid "+e.colors.toggleIcon:"none"},backgroundColor:t?"toggleIcon":"transparent",transform:t?"scale(0.55)":"scale(1)",transition:"all 0.45s ease",overflow:t?"visible":"hidden",boxShadow:function(e){return t?"none":"inset 8px -8px 0px 0px "+e.colors.toggleIcon},"&:before":{content:'""',position:"absolute",right:"-9px",top:"-9px",height:"24px",width:"24px",border:function(e){return t?"2px solid "+e.colors.toggleIcon:"none"},borderRadius:"50%",transform:t?"translate(14px, -14px)":"translate(0, 0)",opacity:t?0:1,transition:"transform 0.45s ease"},"&:after":{content:'""',width:"8px",height:"8px",borderRadius:"50%",margin:"-4px 0 0 -4px",position:"absolute",top:"50%",left:"50%",boxShadow:function(e){return"0 -23px 0 "+e.colors.toggleIcon+", 0 23px 0 "+e.colors.toggleIcon+", 23px 0 0 "+e.colors.toggleIcon+", -23px 0 0 "+e.colors.toggleIcon+", 15px 15px 0 "+e.colors.toggleIcon+", -15px 15px 0 "+e.colors.toggleIcon+", 15px -15px 0 "+e.colors.toggleIcon+", -15px -15px 0 "+e.colors.toggleIcon},transform:t?"scale(1)":"scale(0)",transition:"all 0.35s ease"}}}))},u=n("Frpm"),d=n("Cceb"),m=function(e){var t=e.nav,n=Object(p.a)().basePath;return Object(i.c)(o.a.Fragment,null,t&&t.length>0&&Object(i.c)("nav",{sx:{"a:not(:last-of-type)":{mr:3},fontSize:[1,"18px"],".active":{color:"heading"}}},t.map((function(e){return Object(i.c)(l.e,{key:e.slug,as:u.a,activeClassName:"active",to:Object(d.a)("/"+n+"/"+e.slug)},e.title)}))))},f=n("+yNS"),h=function(){var e=Object(f.a)().siteTitle,t=Object(p.a)().basePath;return Object(i.c)(u.a,{to:Object(d.a)("/"+t),"aria-label":e+" - Back to home",sx:{color:"heading",textDecoration:"none"}},Object(i.c)("div",{sx:{my:0,fontWeight:"medium",fontSize:[3,4]}},e))},x=function(){var e=Object(p.a)().externalLinks;return Object(i.c)(o.a.Fragment,null,e&&e.length>0&&Object(i.c)("div",{sx:{"a:not(:first-of-type)":{ml:3},fontSize:[1,"18px"]}},e.map((function(e){return Object(i.c)(l.e,{key:e.url,href:e.url},e.name)}))))},y=function(){var e=Object(p.a)().navigation,t=Object(g.b)(),n=t[0],a=t[1],r="dark"===n;return Object(i.c)("header",{sx:{mb:[5,6]}},Object(i.c)(l.c,{sx:{alignItems:"center",justifyContent:"space-between"}},Object(i.c)(h,null),Object(i.c)(b,{isDark:r,toggle:function(e){e.preventDefault(),a(r?"light":"dark")}})),Object(i.c)("div",{sx:{boxSizing:"border-box",display:"flex",variant:"dividers.bottom",alignItems:"center",justifyContent:"space-between",mt:3,color:"secondary",a:{color:"secondary",":hover":{color:"heading"}},flexFlow:"wrap"}},Object(i.c)(m,{nav:e}),Object(i.c)(x,null)))},O=function(){var e=Object(f.a)().siteTitle;return Object(i.c)("footer",{sx:{boxSizing:"border-box",display:"flex",justifyContent:"center",mt:[6],color:"secondary",a:{variant:"links.secondary"},flexDirection:["column","column","row"],variant:"dividers.top"}},Object(i.c)("div",null,"© ",(new Date).getFullYear()," by ",e,". All rights reserved."))},j=n("Twun"),v={"[data-name='live-editor']":{fontSize:1,"textarea, pre":{padding:function(e){return e.space[3]+" !important"}}},"[data-name='live-preview']":{padding:function(e){return"calc("+e.space[2]+" + 10px) !important"},backgroundColor:Object(j.a)("primary",.7)},".prism-code":{fontSize:[1,1,2],padding:"2rem 1rem 1rem 1rem",webkitOverflowScrolling:"touch",backgroundColor:"transparent",minWidth:"100%",mb:0,mt:0,overflow:"auto",'&[data-linenumber="false"]':{".token-line":{pl:3}}},".gatsby-highlight[data-language=''], .gatsby-highlight[data-language='noLineNumbers']":{".prism-code":{pt:"1rem"}},".token":{display:"inline-block"},"p > code, li > code":{bg:"gray.2",color:"gray.8",px:2,py:1,borderRadius:"2px"},".gatsby-highlight":{fontSize:[1,1,2],position:"relative",webkitOverflowScrolling:"touch",bg:"rgb(1, 22, 39)",borderRadius:"2px",mx:[0,0,0,-3],".token-line":{mx:-3,minWidth:"100%"},"pre code":{float:"left",minWidth:"100%"},'pre[class*="language-"]:before':{bg:"white",borderRadius:"0 0 0.25rem 0.25rem",color:"black",fontSize:"12px",letterSpacing:"0.025rem",padding:"0.1rem 0.5rem",position:"absolute",left:"1rem",textAlign:"right",textTransform:"uppercase",top:0},'pre[class~="language-javascript"]:before, pre[class~="language-js"]:before':{content:'"js"',background:"#f7df1e",color:"black"},'pre[class~="language-jsx"]:before':{content:'"jsx"',background:"#61dafb",color:"black"},'pre[class~="language-ts"]:before':{content:'"ts"',background:"#61dafb",color:"black"},'pre[class~="language-tsx"]:before':{content:'"tsx"',background:"#61dafb",color:"black"},'pre[class~="language-html"]:before':{content:'"html"',background:"#005a9c",color:"white"},'pre[class~="language-xml"]:before':{content:'"xml"',background:"#005a9c",color:"white"},'pre[class~="language-svg"]:before':{content:'"svg"',background:"#005a9c",color:"white"},'pre[class~="language-graphql"]:before':{content:'"GraphQL"',background:"#E10098"},'pre[class~="language-css"]:before':{content:'"css"',background:"#ff9800",color:"black"},'pre[class~="language-mdx"]:before':{content:'"mdx"',background:"#f9ac00",color:"black"},'pre[class~="language-php"]:before':{content:'"php"',background:"#777bb3",color:"black"},'pre[class~="language-py"]:before, pre[class~="language-python"]:before':{content:'"py"',background:"#306998",color:"white"},'pre[class~="language-text"]:before':{content:'"text"'},"pre[class~='language-shell']:before":{content:"'shell'"},"pre[class~='language-sh']:before":{content:"'sh'"},"pre[class~='language-bash']:before":{content:"'bash'"},"pre[class~='language-yaml']:before":{content:"'yaml'",background:"#ffa8df"},"pre[class~='language-yml']:before":{content:"'yml'",background:"#ffa8df"},"pre[class~='language-markdown']:before":{content:"'md'"},"pre[class~='language-json']:before, pre[class~='language-json5']:before":{content:"'json'",background:"linen"},"pre[class~='language-diff']:before":{content:"'diff'",background:"#e6ffed"}},'.gatsby-highlight > code[class*="language-"], .gatsby-highlight > pre[class=*="language-"]':{wordSpacing:"normal",wordBreak:"normal",overflowWrap:"normal",lineHeight:1.5,tabSize:4,hyphens:"none"},".gatsby-highlight pre::-webkit-scrollbar":{width:2,height:2},".gatsby-highlight pre::-webkit-scrollbar-thumb":{backgroundColor:"primary"},".gatsby-highlight pre::-webkit-scrollbar-track":{background:"rgb(1, 22, 39)"},".line-number-style":{display:"inline-block",width:"3em",userSelect:"none",opacity:.3,textAlign:"center",position:"relative"},".code-title":{backgroundColor:Object(j.a)("primary",.7),color:"black",fontSize:0,px:3,py:2,fontFamily:"monospace",mx:[0,0,0,-3]},"[data-name='live-preview'], [data-name='live-editor']":{mx:[0,0,0,-3],fontSize:[1,1,2]},".token-line":{pr:3},".highlight-line":{backgroundColor:"rgb(2, 55, 81)",borderLeft:"4px solid rgb(2, 155, 206)",".line-number-style":{width:"calc(3em - 4px)",opacity:.5,left:"-2px"}},".anchor":{display:"none"},".react-live-wrapper":{position:"relative"},".react-live-wrapper .code-copy-button":{right:[0,0,0,-3]}},k=n("zLVn");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z={border:0,clip:"react(0 0 0 0)",height:"1px",width:"1px",margin:"-1px",padding:0,overflow:"hidden",position:"absolute","&:focus":{padding:3,position:"fixed",top:"15px",left:"15px",backgroundColor:"heading",color:"background",zIndex:1,width:"auto",height:"auto",clip:"auto",textDecoration:"none"}},E=function(e){var t=e.children,n=Object(k.a)(e,["children"]);return Object(i.c)("a",Object.assign({},n,{sx:S({},z),href:"#skip-nav","data-skip-link":"true"}),t)};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=e.children,n=e.className,a=void 0===n?"":n;return Object(i.c)(o.a.Fragment,null,Object(i.c)(c.a,{styles:function(e){return{"*":{boxSizing:"inherit"},html:{WebkitTextSizeAdjust:"100%"},img:{borderStyle:"none"},pre:{fontFamily:"monospace",fontSize:"1em"},"[hidden]":{display:"none"},"::selection":{backgroundColor:e.colors.text,color:e.colors.background},a:{transition:"all 0.3s ease-in-out",color:"text"}}}}),Object(i.c)(s.a,null),Object(i.c)(E,null,"Skip to content"),Object(i.c)(l.b,null,Object(i.c)(y,null),Object(i.c)(l.a,{id:"skip-nav",sx:I({},v),className:a},t),Object(i.c)(O,null)))}},c95Q:function(e,t,n){}}]);
//# sourceMappingURL=dcf3914cc5a874b25b594b4ec3965d3adca1003f-47d242e0684b4d601b16.js.map