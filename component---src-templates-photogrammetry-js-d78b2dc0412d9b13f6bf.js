"use strict";(self.webpackChunkmuseologi_st=self.webpackChunkmuseologi_st||[]).push([[7796],{2623:function(e,t,r){var n=r(4942),a=r(5987),o=r(5900),c=r.n(o),i=r(7294),s=r(9541),l=r(5893),u=["bsPrefix","bg","pill","text","className","as"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=i.forwardRef((function(e,t){var r=e.bsPrefix,n=e.bg,o=e.pill,i=e.text,p=e.className,b=e.as,m=void 0===b?"span":b,d=(0,a.Z)(e,u),O=(0,s.vE)(r,"badge");return(0,l.jsx)(m,f(f({ref:t},d),{},{className:c()(p,O,o&&"rounded-pill",i&&"text-".concat(i),n&&"bg-".concat(n))}))}));b.displayName="Badge",b.defaultProps={bg:"primary",pill:!1},t.Z=b},8870:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(4942),a=r(5987),o=r(5900),c=r.n(o),i=/-(.)/g;var s=r(7294),l=r(9541),u=r(5893),p=["className","bsPrefix","as"];function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){return e[0].toUpperCase()+(t=e,t.replace(i,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.displayName,n=void 0===r?m(e):r,o=t.Component,i=t.defaultProps,f=s.forwardRef((function(t,r){var n=t.className,i=t.bsPrefix,s=t.as,f=void 0===s?o||"div":s,m=(0,a.Z)(t,p),d=(0,l.vE)(i,e);return(0,u.jsx)(f,b({ref:r,className:c()(n,d)},m))}));return f.defaultProps=i,f.displayName=n,f}},738:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(7294),a=r(5697),o=r.n(a),c=r(1082),i=r(3639);function s(e){var t=e.pageContext,r=t.pageNumber,a=t.numberOfPages,o=t.humanPageNumber,s=t.previousPagePath,l=t.nextPagePath;return n.createElement(i.Z,null,n.createElement("nav",{className:"pagination py-2"},o>1?n.createElement(c.Link,{title:"Go to previous page",to:s},"← Previous"):n.createElement("span",null),n.createElement("strong",null,"Page ",r+1," of ",a),o<a?n.createElement(c.Link,{title:"Go to next page",to:l},"Next →"):n.createElement("span",null)))}s.propType={pageContext:o().object.isRequired}},7262:function(e,t,r){r.d(t,{Z:function(){return A}});var n=r(7294),a=r(7408),o=r(4942),c=r(5987),i=r(5900),s=r.n(i),l=r(9541),u=r(8870),p=r(5893);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){return n.forwardRef((function(t,r){return(0,p.jsx)("div",b(b({},t),{},{ref:r,className:s()(t.className,e)}))}))},d=["bsPrefix","className","variant","as"];function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var g=n.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.variant,i=e.as,u=void 0===i?"img":i,f=(0,c.Z)(e,d),b=(0,l.vE)(r,"card-img");return(0,p.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({ref:t,className:s()(a?"".concat(b,"-").concat(a):b,n)},f))}));g.displayName="CardImg";var y=g,v=n.createContext(null);v.displayName="CardHeaderContext";var j=v,P=["bsPrefix","className","as"];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=n.forwardRef((function(e,t){var r=e.bsPrefix,a=e.className,o=e.as,i=void 0===o?"div":o,u=(0,c.Z)(e,P),f=(0,l.vE)(r,"card-header"),b=(0,n.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return(0,p.jsx)(j.Provider,{value:b,children:(0,p.jsx)(i,w(w({ref:t},u),{},{className:s()(a,f)}))})}));E.displayName="CardHeader";var x=E,N=["bsPrefix","className","bg","text","border","body","children","as"];function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=m("h5"),C=m("h6"),S=(0,u.Z)("card-body"),R=(0,u.Z)("card-title",{Component:k}),H=(0,u.Z)("card-subtitle",{Component:C}),I=(0,u.Z)("card-link",{Component:"a"}),_=(0,u.Z)("card-text",{Component:"p"}),B=(0,u.Z)("card-footer"),L=(0,u.Z)("card-img-overlay"),T=n.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.bg,o=e.text,i=e.border,u=e.body,f=e.children,b=e.as,m=void 0===b?"div":b,d=(0,c.Z)(e,N),O=(0,l.vE)(r,"card");return(0,p.jsx)(m,D(D({ref:t},d),{},{className:s()(n,O,a&&"bg-".concat(a),o&&"text-".concat(o),i&&"border-".concat(i)),children:u?(0,p.jsx)(S,{children:f}):f}))}));T.displayName="Card",T.defaultProps={body:!1};var G=Object.assign(T,{Img:y,Title:R,Subtitle:H,Body:S,Link:I,Text:_,Header:x,Footer:B,ImgOverlay:L}),M=r(2623),U=r(1082),q=r(3723),A=function(e){var t=e.post;return n.createElement(a.Z,{md:4,className:"mb-3 aos-init aos-animate","data-aos-duration":"600","data-aos":"flip-right","data-aos-delay":"0"},n.createElement(G,{className:"border-0 bg-light"},n.createElement(y,{className:"card-img-top rounded-0",as:q.G,image:(0,q.c)(t.frontmatter.featuredImg),alt:t.frontmatter.title}),n.createElement(G.Body,{className:"bg-white border-0 rounded-0"},n.createElement("div",{className:"h-100",style:{minHeight:70}},n.createElement(U.Link,{to:t.frontmatter.slug,className:"stretched-link stretched-link__blog_post"},n.createElement("h1",{className:"lead text-black fw-bold"},t.frontmatter.title))),t.frontmatter.institution&&n.createElement("div",{className:"h-100"},n.createElement(M.Z,{bg:"primary",className:"text-white p-2"},t.frontmatter.institution)))))}},1450:function(e,t,r){r.r(t),r.d(t,{Head:function(){return u}});var n=r(7294),a=r(3495),o=r(7262),c=r(3639),i=r(994),s=r(2765),l=r(738);t.default=function(e){var t=e.data.allMarkdownRemark.edges.map((function(e){return n.createElement(o.Z,{key:e.node.id,post:e.node})}));return n.createElement(a.Z,null,n.createElement(c.Z,null,n.createElement(i.Z,null,n.createElement("h1",{className:"ml-4 mt-4"},"3D Scans and research work"),n.createElement("p",null,"This page gives an introduction and overview of all the different 3D models I have created in museums.")),n.createElement(i.Z,null,t)),n.createElement(c.Z,{fluid:!0,className:"mx-auto text-center bg-pastel"},n.createElement(l.Z,{pageContext:e.pageContext})))};var u=function(){return n.createElement(s.Z,{title:"My photogrammetry and 3d scanning work",description:"An overview of my photogrammetry work around the world"})}}}]);
//# sourceMappingURL=component---src-templates-photogrammetry-js-d78b2dc0412d9b13f6bf.js.map