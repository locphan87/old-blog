(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{HsYx:function(t,e,a){"use strict";var s=a("q1tI"),n=a.n(s),c=a("izhR"),r=a("Frpm"),o=a("wuJk"),i=a("Cceb");e.a=function(t){var e=t.tags,a=Object(o.a)(),s=a.tagsPath,u=a.basePath;return n.a.createElement(n.a.Fragment,null,e.filter((function(t){return!["project","summary"].includes(t.slug)})).map((function(t,e){return n.a.createElement(n.a.Fragment,{key:t.slug},!!e&&", ",n.a.createElement(c.e,{as:r.a,to:Object(i.a)("/"+u+"/"+s+"/"+t.slug)},t.name))})))}},fftI:function(t,e,a){"use strict";a.r(e);var s=a("q1tI"),n=a.n(s),c=a("2A+t"),r=a("izhR"),o=a("Wbzz"),i=a("bz+c"),u=a("wuJk"),l=a("sTtg"),b=a("Cceb"),g=a("5hlw"),m=function(t){var e=t.posts,a=t.pageContext,s=Object(u.a)(),n=s.tagsPath,m=s.basePath;return Object(c.c)(i.a,null,Object(c.c)(g.a,{title:"Tag: "+a.name}),Object(c.c)(r.c,{sx:{alignItems:"center",justifyContent:"space-between",flexFlow:"wrap"}},Object(c.c)(r.d,{as:"h1",variant:"styles.h1",sx:{marginY:2}},a.name),Object(c.c)(r.e,{as:o.Link,sx:{variant:"links.secondary",marginY:2},to:Object(b.a)("/"+m+"/"+n)},"View all tags")),Object(c.c)(l.a,{posts:e,sx:{mt:[4,5]}}))};e.default=function(t){var e=Object.assign({},t),a=e.data.allPost;return n.a.createElement(m,Object.assign({posts:a.nodes},e))}},sTtg:function(t,e,a){"use strict";var s=a("2A+t"),n=a("q1tI"),c=a.n(n),r=a("izhR"),o=a("Frpm"),i=a("HsYx"),u=function(t){var e=t.post,a=t.showTags,n=void 0===a||a;return Object(s.c)(r.a,{mb:4},Object(s.c)(r.e,{as:o.a,to:e.slug,sx:{fontSize:[1,2,3],color:"text"}},e.title),Object(s.c)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},Object(s.c)("time",null,e.date),e.tags&&n&&Object(s.c)(c.a.Fragment,null," — ",Object(s.c)(i.a,{tags:e.tags}))))};e.a=function(t){var e=t.posts,a=t.className,n=void 0===a?"":a,c=t.showTags,r=void 0===c||c;return Object(s.c)("section",{sx:{mb:[5,6,7]},className:n},e&&e.map((function(t){return Object(s.c)(u,{key:t.slug,post:t,showTags:r})})))}}}]);
//# sourceMappingURL=component---src-lekoarts-gatsby-theme-minimal-blog-core-templates-tag-query-tsx-7de3f7d5e4b2f915db88.js.map