"use strict";(self.webpackChunkmuseologi_st=self.webpackChunkmuseologi_st||[]).push([[3782],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,s=new RegExp("^"+i.source),o=new RegExp(i.source+n.source,"gu"),l=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,s=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];i&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),i=!1,o=s,s=!0,l++):s&&o&&a.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=s,s=!1,i=!0):(i=r(c)===c&&n(c)!==c,o=s,s=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(s,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,a)=>t(a))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{G:function(){return A},L:function(){return y},M:function(){return S},P:function(){return L},_:function(){return o},a:function(){return s},b:function(){return m},c:function(){return c},d:function(){return u},g:function(){return g},h:function(){return l}});var r=a(6540),n=(a(2729),a(5556)),i=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData},u=e=>{var t,a,r;return null==(t=c(e))||null==(a=t.images)||null==(r=a.fallback)?void 0:r.src};function d(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function m(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function g(e,t,a,r,n,i,o,l){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const p=["children"],h=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},y=function(e){let{children:t}=e,a=o(e,p);return r.createElement(r.Fragment,null,r.createElement(h,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],b=["fallback","sources","shouldLoad"],w=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:l}=e,c=o(e,f);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:i}))},v=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=o(e,b);const l=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(w,s({},i,t,{sizes:l,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:`${t}-${i}-${a}`,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:l})})),c):c};var E;w.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const k=["fallback"],L=function(e){let{fallback:t}=e,a=o(e,k);return t?r.createElement(v,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};L.displayName="Placeholder",L.propTypes={fallback:n.string,sources:null==(E=v.propTypes)?void 0:E.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const S=function(e){return r.createElement(r.Fragment,null,r.createElement(v,s({},e)),r.createElement("noscript",null,r.createElement(v,s({},e,{shouldLoad:!0}))))};S.displayName="MainImage",S.propTypes=v.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],I=["style","className"],x=e=>e.replace(/\n/g,""),$=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},T={image:i().object.isRequired,alt:$},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],_=["style","className"],j=new Set;let O,R;const q=function(e){let{as:t="div",image:n,style:i,backgroundColor:c,className:u,class:m,onStartLoad:g,onLoad:p,onError:h}=e,y=o(e,N);const{width:f,height:b,layout:w}=n,v=d(f,b,w),{style:E,className:k}=v,L=o(v,_),S=(0,r.useRef)(),C=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const I=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(w,f,b);return(0,r.useEffect)((()=>{O||(O=a.e(1108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=S.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(C);if(R&&j.has(C))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;S.current&&(S.current.innerHTML=a(s({isLoading:!0,isLoaded:j.has(C),image:n},y)),j.has(C)||(t=requestAnimationFrame((()=>{S.current&&(r=o(S.current,C,j,i,g,p,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{j.has(C)&&R&&(S.current.innerHTML=R(s({isLoading:j.has(C),isLoaded:j.has(C),image:n},y)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},L,{style:s({},E,i,{backgroundColor:c}),className:`${k}${u?` ${u}`:""}`,ref:S,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(q,e):null}));A.propTypes=T,A.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:a,__imageData:n,__error:i}=t,l=o(t,P);return i&&console.warn(i),n?r.createElement(e,s({image:n},l)):(console.warn("Image not loaded",a),null)}}const z=M((function(e){let{as:t="div",className:a,class:n,style:i,image:l,loading:c="lazy",imgClassName:u,imgStyle:p,backgroundColor:h,objectFit:f,objectPosition:b}=e,w=o(e,C);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),p=s({objectFit:f,objectPosition:b,backgroundColor:h},p);const{width:v,height:E,layout:k,images:$,placeholder:T,backgroundColor:N}=l,_=d(v,E,k),{style:j,className:O}=_,R=o(_,I),q={fallback:void 0,sources:[]};return $.fallback&&(q.fallback=s({},$.fallback,{srcSet:$.fallback.srcSet?x($.fallback.srcSet):void 0})),$.sources&&(q.sources=$.sources.map((e=>s({},e,{srcSet:x(e.srcSet)})))),r.createElement(t,s({},R,{style:s({},j,i,{backgroundColor:h}),className:`${O}${a?` ${a}`:""}`}),r.createElement(y,{layout:k,width:v,height:E},r.createElement(L,s({},g(T,!1,k,v,E,N,f,b))),r.createElement(S,s({"data-gatsby-image-ssr":"",className:u},w,m("eager"===c,!1,q,c,p)))))})),W=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},F=new Set(["fixed","fullWidth","constrained"]),H={src:i().string.isRequired,alt:$,width:W,height:W,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};z.displayName="StaticImage",z.propTypes=H;const D=M(A);D.displayName="StaticImage",D.propTypes=H},5757:function(e,t,a){a.d(t,{A:function(){return i}});var r=a(6540),n=a(4794);var i=e=>{let{title:t,description:a,pathname:i,children:s,featured:o}=e;const{title:l,description:c,image:u,siteUrl:d,twitterHandle:m}=(0,n.useStaticQuery)("4037206124").site.siteMetadata,g=function(e,t){return e?null==e?void 0:e.childImageSharp.gatsbyImageData.images.fallback.src:t}(o,u),p={title:t||l,description:a||c,image:`${d}${g}`,url:`${d}${i||""}`,twitterHandle:m};return r.createElement(r.Fragment,null,r.createElement("title",null,p.title),r.createElement("meta",{name:"description",content:p.description}),r.createElement("meta",{name:"image",content:p.image}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:p.title}),r.createElement("meta",{name:"twitter:url",content:p.url}),r.createElement("meta",{name:"twitter:description",content:p.description}),r.createElement("meta",{name:"twitter:image",content:p.image}),r.createElement("meta",{name:"twitter:creator",content:p.twitterHandle}),r.createElement("meta",{property:"og:url",content:p.url.toString()}),r.createElement("meta",{property:"og:title",content:p.title}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:site_name",content:"Museologi.st"}),r.createElement("meta",{property:"og:description",content:p.description}),r.createElement("meta",{property:"og:locale",content:"en-gb"}),r.createElement("meta",{property:"og:image",content:p.image.toString()}),r.createElement("meta",{property:"og:image:alt",content:"An image representing this post"}),r.createElement("meta",{property:"og:image:width",content:"600"}),r.createElement("meta",{property:"og:image:width",content:"600"}),r.createElement("meta",{property:"og:image:type",content:"image/jpeg"}),s)}}}]);
//# sourceMappingURL=cef5027e81718ac354ad643d929c8b76192f594e-21b294310c3824a0e763.js.map