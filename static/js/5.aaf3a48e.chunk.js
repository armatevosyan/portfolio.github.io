(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[5,8],{145:function(t,e,c){"use strict";var a=c(3),n=c(2),s=c(4),r=c(5),o=c.n(r),i=c(0),l=c(8),f=c(1),j=["as","bsPrefix","className"],b=["className"];var u=i.forwardRef((function(t,e){var c=function(t){var e=t.as,c=t.bsPrefix,a=t.className,r=Object(s.a)(t,j);c=Object(l.c)(c,"col");var i=Object(l.a)(),f=Object(l.b)(),b=[],u=[];return i.forEach((function(t){var e,a,n,s=r[t];delete r[t],"object"===typeof s&&null!=s?(e=s.span,a=s.offset,n=s.order):e=s;var o=t!==f?"-".concat(t):"";e&&b.push(!0===e?"".concat(c).concat(o):"".concat(c).concat(o,"-").concat(e)),null!=n&&u.push("order".concat(o,"-").concat(n)),null!=a&&u.push("offset".concat(o,"-").concat(a))})),[Object(n.a)(Object(n.a)({},r),{},{className:o.a.apply(void 0,[a].concat(b,u))}),{as:e,bsPrefix:c,spans:b}]}(t),r=Object(a.a)(c,2),i=r[0],u=i.className,d=Object(s.a)(i,b),p=r[1],h=p.as,O=void 0===h?"div":h,m=p.bsPrefix,v=p.spans;return Object(f.jsx)(O,Object(n.a)(Object(n.a)({},d),{},{ref:e,className:o()(u,!v.length&&m)}))}));u.displayName="Col",e.a=u},158:function(t,e,c){"use strict";var a=c(2),n=c(4),s=c(5),r=c.n(s),o=c(0),i=c(8),l=c(1),f=["bsPrefix","className","as"],j=o.forwardRef((function(t,e){var c=t.bsPrefix,s=t.className,o=t.as,j=void 0===o?"div":o,b=Object(n.a)(t,f),u=Object(i.c)(c,"row"),d=Object(i.a)(),p=Object(i.b)(),h="".concat(u,"-cols"),O=[];return d.forEach((function(t){var e,c=b[t];delete b[t],e=null!=c&&"object"===typeof c?c.cols:c;var a=t!==p?"-".concat(t):"";null!=e&&O.push("".concat(h).concat(a,"-").concat(e))})),Object(l.jsx)(j,Object(a.a)(Object(a.a)({ref:e},b),{},{className:r.a.apply(void 0,[s,u].concat(O))}))}));j.displayName="Row",e.a=j},88:function(t,e,c){"use strict";c.r(e);c(0),c(90);var a=c(1);e.default=function(t){var e=t.title;return Object(a.jsx)("div",{className:"header",children:e})}},92:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c(0),s=c(179),r=c(139),o=c(158),i=c(145),l=c(64),f=c.n(l),j=c(88),b=c(24),u=c(32),d=c(1),p={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"}};e.default=function(t){var e,c=t.header,l=Object(n.useState)(null),h=Object(a.a)(l,2),O=h[0],m=h[1];return Object(n.useEffect)((function(){fetch(b.a.about,{method:"GET"}).then((function(t){return t.json()})).then((function(t){return m(t)})).catch((function(t){return t}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j.default,{title:c}),Object(d.jsx)("div",{className:"section-content-container",children:Object(d.jsx)(r.a,{children:O?Object(d.jsx)(f.a,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(i.a,{style:p.introTextContainer,children:(e=O.about,Object(d.jsx)(s.a,{children:e}))}),Object(d.jsx)(i.a,{style:p.introImageContainer,children:Object(d.jsx)("img",{style:{height:"100%",width:"70%"},src:"https://media.licdn.com/dms/image/D5603AQFckQ9qDGHGsg/profile-displayphoto-shrink_800_800/0/1686234434961?e=1700697600&v=beta&t=453pgF1iyNdztFDX9L-nNOt3w1RWpBagW4vpgzSJCU0",alt:"profile"})})]})}):Object(d.jsx)(u.default,{})})})]})}}}]);
//# sourceMappingURL=5.aaf3a48e.chunk.js.map