(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"4Gv4":function(t,n,e){"use strict";e.r(n);var r=e("q1tI"),c=e.n(r),o=e("2A+t"),u=e("izhR");function a(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function i(t){return function n(e){return 0===arguments.length||a(e)?n:t.apply(this,arguments)}}function l(t){return function n(e,r){switch(arguments.length){case 0:return n;case 1:return a(e)?n:i((function(n){return t(e,n)}));default:return a(e)&&a(r)?n:a(e)?i((function(n){return t(n,r)})):a(r)?i((function(n){return t(e,n)})):t(e,r)}}}var f=Number.isInteger||function(t){return t<<0===t};var s=l((function(t,n){var e,r=t<0?n.length+t:t;return e=n,"[object String]"===Object.prototype.toString.call(e)?n.charAt(r):n[r]})),p=l((function(t,n){return t.map((function(t){for(var e,r=n,c=0;c<t.length;){if(null==r)return;e=t[c],r=f(e)?s(e,r):r[e],c+=1}return r}))})),b=l((function(t,n){return p([t],n)[0]})),m=e("A2+M"),y=e("bz+c"),d=e("HsYx"),g=e("5hlw"),h=e("MUpH"),O=e("vOnD");function v(t){return function n(e,r,c){switch(arguments.length){case 0:return n;case 1:return a(e)?n:l((function(n,r){return t(e,n,r)}));case 2:return a(e)&&a(r)?n:a(e)?l((function(n,e){return t(n,r,e)})):a(r)?l((function(n,r){return t(e,n,r)})):i((function(n){return t(e,r,n)}));default:return a(e)&&a(r)&&a(c)?n:a(e)&&a(r)?l((function(n,e){return t(n,e,c)})):a(e)&&a(c)?l((function(n,e){return t(n,r,e)})):a(r)&&a(c)?l((function(n,r){return t(e,n,r)})):a(e)?i((function(n){return t(n,r,c)})):a(r)?i((function(n){return t(e,n,c)})):a(c)?i((function(n){return t(e,r,n)})):t(e,r,c)}}}var j=l((function(t,n){return null==n||n!=n?t:n})),x=v((function(t,n,e){return j(t,b(n,e))})),w=v((function(t,n,e){return x(t,[n],e)}));function P(){var t=Object(h.a)(["\n  background-color: #f9f6f7;\n  padding: 1.5rem;\n  list-style: none;\n  h2 {\n    margin: 0;\n  }\n  li {\n    line-height: 1rem;\n    margin-top: 1rem;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n  }\n"]);return P=function(){return t},t}var S=O.a.ul(P()),E=function t(n){var e=n.url,r=n.title,o=n.items;return c.a.createElement("li",{key:e},c.a.createElement("a",{href:e,key:e},r),o&&c.a.createElement("ul",null,o.map(t)))},R=function(t){var n=t.data,e=w([],"items",n);return c.a.createElement(c.a.Fragment,null,e.length>0&&c.a.createElement(S,null,c.a.createElement("h2",null,"Contents"),e.map(E)))},k=["32px","16px","8px","4px"].map((function(t){return"rgba(0, 0, 0, 0.15) 0px "+t+" "+t+" 0px"})),I=function(t){var n=t.data,e=n.post,r=n.mdx;if(!e)return Object(o.c)("div",null,"This page has not been translated yet");var a=b(["banner","childImageSharp","resize","src"],e),i=(r||{}).tableOfContents;return Object(o.c)(y.a,null,Object(o.c)(g.a,{title:e.title,description:e.description?e.description:e.excerpt,image:a,pathname:e.slug,canonicalUrl:e.canonicalUrl}),Object(o.c)(u.d,{as:"h1",variant:"styles.h1"},e.title),Object(o.c)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},Object(o.c)("time",null,e.date),e.tags&&Object(o.c)(c.a.Fragment,null," — ",Object(o.c)(d.a,{tags:e.tags})),e.timeToRead&&" — ",e.timeToRead&&Object(o.c)("span",null,e.timeToRead," min read")),Object(o.c)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],boxShadow:k.join(", ")},variant:"layout.content"}},Object(o.c)(R,{data:i}),Object(o.c)(m.MDXRenderer,null,e.body)))};n.default=function(t){var n=Object.assign({},t);return c.a.createElement(I,n)}},"A2+M":function(t,n,e){var r=e("X8hv");t.exports={MDXRenderer:r}},Bnag:function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,n){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},HsYx:function(t,n,e){"use strict";var r=e("q1tI"),c=e.n(r),o=e("izhR"),u=e("Frpm"),a=e("wuJk"),i=e("Cceb");n.a=function(t){var n=t.tags,e=Object(a.a)(),r=e.tagsPath,l=e.basePath;return c.a.createElement(c.a.Fragment,null,n.filter((function(t){return!["project","summary"].includes(t.slug)})).map((function(t,n){return c.a.createElement(c.a.Fragment,{key:t.slug},!!n&&", ",c.a.createElement(o.e,{as:u.a,to:Object(i.a)("/"+l+"/"+r+"/"+t.slug)},t.name))})))}},Ijbi:function(t,n,e){var r=e("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},RIqP:function(t,n,e){var r=e("Ijbi"),c=e("EbDI"),o=e("ZhPi"),u=e("Bnag");t.exports=function(t){return r(t)||c(t)||o(t)||u()}},SksO:function(t,n){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},e(n,r)}t.exports=e},WkPL:function(t,n){t.exports=function(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}},X8hv:function(t,n,e){var r=e("sXyB"),c=e("RIqP"),o=e("lSNA"),u=e("8OQS");function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}var l=e("q1tI"),f=e("7ljp").mdx,s=e("BfwJ").useMDXScope;t.exports=function(t){var n=t.scope,e=t.children,o=u(t,["scope","children"]),a=s(n),p=l.useMemo((function(){if(!e)return null;var t=i({React:l,mdx:f},a),n=Object.keys(t),o=n.map((function(n){return t[n]}));return r(Function,["_fn"].concat(c(n),[""+e])).apply(void 0,[{}].concat(c(o)))}),[e,n]);return l.createElement(p,i({},o))}},ZhPi:function(t,n,e){var r=e("WkPL");t.exports=function(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}},b48C:function(t,n){t.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}},sXyB:function(t,n,e){var r=e("SksO"),c=e("b48C");function o(n,e,u){return c()?t.exports=o=Reflect.construct:t.exports=o=function(t,n,e){var c=[null];c.push.apply(c,n);var o=new(Function.bind.apply(t,c));return e&&r(o,e.prototype),o},o.apply(null,arguments)}t.exports=o}}]);
//# sourceMappingURL=component---src-lekoarts-gatsby-theme-minimal-blog-core-templates-post-query-tsx-8ab54a15c007b7f341fb.js.map