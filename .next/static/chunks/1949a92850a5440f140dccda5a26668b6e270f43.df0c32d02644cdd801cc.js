(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{"469l":function(e,t,n){"use strict";var i=n("wx14"),o=n("Ff2n"),r=n("q1tI"),a=(n("17x9"),n("iuhU")),c=n("H2TA"),l=n("5AJ6"),s=Object(l.a)(r.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var d=r.forwardRef((function(e,t){var n=e.alt,c=e.children,l=e.classes,d=e.className,u=e.component,f=void 0===u?"div":u,h=e.imgProps,p=e.sizes,m=e.src,b=e.srcSet,g=e.variant,v=void 0===g?"circle":g,x=Object(o.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),j=null,w=function(e){var t=e.src,n=e.srcSet,i=r.useState(!1),o=i[0],a=i[1];return r.useEffect((function(){if(t||n){a(!1);var e=!0,i=new Image;return i.src=t,i.srcSet=n,i.onload=function(){e&&a("loaded")},i.onerror=function(){e&&a("error")},function(){e=!1}}}),[t,n]),o}({src:m,srcSet:b}),y=m||b,O=y&&"error"!==w;return j=O?r.createElement("img",Object(i.a)({alt:n,src:m,srcSet:b,sizes:p,className:l.img},h)):null!=c?c:y&&n?n[0]:r.createElement(s,{className:l.fallback}),r.createElement(f,Object(i.a)({className:Object(a.a)(l.root,l.system,l[v],d,!O&&l.colorDefault),ref:t},x),j)}));t.a=Object(c.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(d)},"5AJ6":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var i=n("wx14"),o=n("q1tI"),r=n.n(o),a=n("Ff2n"),c=(n("17x9"),n("iuhU")),l=n("H2TA"),s=n("NqtD"),d=o.forwardRef((function(e,t){var n=e.children,r=e.classes,l=e.className,d=e.color,u=void 0===d?"inherit":d,f=e.component,h=void 0===f?"svg":f,p=e.fontSize,m=void 0===p?"default":p,b=e.htmlColor,g=e.titleAccess,v=e.viewBox,x=void 0===v?"0 0 24 24":v,j=Object(a.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return o.createElement(h,Object(i.a)({className:Object(c.a)(r.root,l,"inherit"!==u&&r["color".concat(Object(s.a)(u))],"default"!==m&&r["fontSize".concat(Object(s.a)(m))]),focusable:"false",viewBox:x,color:b,"aria-hidden":!g||void 0,role:g?"img":void 0,ref:t},j),n,g?o.createElement("title",null,g):null)}));d.muiName="SvgIcon";var u=Object(l.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(d);function f(e,t){var n=function(t,n){return r.a.createElement(u,Object(i.a)({ref:n},t),e)};return n.muiName=u.muiName,r.a.memo(r.a.forwardRef(n))}},"8OQS":function(e,t){e.exports=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}},Aiso:function(e,t,n){e.exports=n("dQHF")},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var i=n("WkPL");e.exports=function(e){if(Array.isArray(e))return i(e)}},"R/WZ":function(e,t,n){"use strict";var i=n("wx14"),o=n("RD7I"),r=n("cNwE");t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(o.a)(e,Object(i.a)({defaultTheme:r.a},t))}},RIqP:function(e,t,n){var i=n("Ijbi"),o=n("EbDI"),r=n("ZhPi"),a=n("Bnag");e.exports=function(e){return i(e)||o(e)||r(e)||a()}},TrRe:function(e,t,n){"use strict";t.a={normal:50,high:100,higher:150,highest:200}},UWYU:function(e,t,n){"use strict";t.__esModule=!0,t.imageConfigDefault=t.VALID_LOADERS=void 0;t.VALID_LOADERS=["default","imgix","cloudinary","akamai"];t.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[]}},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var i=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var r=o(n("q1tI")),a=n("elyg"),c=n("nOHt"),l=n("vNVm"),s={};function d(e,t,n,i){if((0,a.isLocalURL)(t)){e.prefetch(t,n,i).catch((function(e){0}));var o=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),o=n&&n.pathname||"/",u=r.default.useMemo((function(){var t=(0,a.resolveHref)(o,e.href,!0),n=i(t,2),r=n[0],c=n[1];return{href:r,as:e.as?(0,a.resolveHref)(o,e.as):c||r}}),[o,e.href,e.as]),f=u.href,h=u.as,p=e.children,m=e.replace,b=e.shallow,g=e.scroll,v=e.locale;"string"===typeof p&&(p=r.default.createElement("a",null,p));var x=r.Children.only(p),j=x&&"object"===typeof x&&x.ref,w=(0,l.useIntersection)({rootMargin:"200px"}),y=i(w,2),O=y[0],S=y[1],z=r.default.useCallback((function(e){O(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,O]);(0,r.useEffect)((function(){var e=S&&t&&(0,a.isLocalURL)(f),i="undefined"!==typeof v?v:n&&n.locale,o=s[f+"%"+h+(i?"%"+i:"")];e&&!o&&d(n,f,h,{locale:i})}),[h,f,S,v,t,n]);var A={ref:z,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,n,i,o,r,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=i.indexOf("#")<0),t[o?"replace":"push"](n,i,{shallow:r,locale:l}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,f,h,m,b,g,v)},onMouseEnter:function(e){(0,a.isLocalURL)(f)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),d(n,f,h,{priority:!0}))}};return(e.passHref||"a"===x.type&&!("href"in x.props))&&(A.href=(0,a.addBasePath)((0,a.addLocale)(h,"undefined"!==typeof v?v:n&&n.locale,n&&n.defaultLocale))),r.default.cloneElement(x,A)};t.default=u},dEHY:function(e,t,n){"use strict";t.__esModule=!0,t.toBase64=function(e){return window.btoa(e)}},dQHF:function(e,t,n){"use strict";var i=n("J4zp"),o=n("RIqP"),r=n("TqRt");t.__esModule=!0,t.default=function(e){var t=e.src,n=e.sizes,r=e.unoptimized,c=void 0!==r&&r,d=e.priority,f=void 0!==d&&d,h=e.loading,m=e.className,b=e.quality,g=e.width,w=e.height,y=e.objectFit,O=e.objectPosition,S=(0,a.default)(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","objectFit","objectPosition"]),z=n?"responsive":"intrinsic",A=!1;"unsized"in S?(A=Boolean(S.unsized),delete S.unsized):"layout"in S&&(S.layout&&(z=S.layout),delete S.layout);0;var I=!f&&("lazy"===h||"undefined"===typeof h);t&&t.startsWith("data:")&&(c=!0,I=!1);var k,N,E,R=(0,u.useIntersection)({rootMargin:"200px",disabled:!I}),C=i(R,2),L=C[0],M=C[1],q=!I||M,D=j(g),_=j(w),B=j(b),T={visibility:q?"visible":"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:y,objectPosition:O};if("undefined"!==typeof D&&"undefined"!==typeof _&&"fill"!==z){var P=_/D,H=isNaN(P)?"100%":"".concat(100*P,"%");"responsive"===z?(k={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},N={display:"block",boxSizing:"border-box",paddingTop:H}):"intrinsic"===z?(k={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},N={boxSizing:"border-box",display:"block",maxWidth:"100%"},E='<svg width="'.concat(D,'" height="').concat(_,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===z&&(k={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:D,height:_})}else"undefined"===typeof D&&"undefined"===typeof _&&"fill"===z&&(k={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0});var F={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"};q&&(F=function(e){var t=e.src,n=e.unoptimized,i=e.layout,r=e.width,a=e.quality,c=e.sizes;if(n)return{src:t};var l=function(e,t){if("number"!==typeof e||"fill"===t||"responsive"===t)return{widths:p,kind:"w"};return{widths:o(new Set([e,2*e,3*e].map((function(e){return v.find((function(t){return t>=e}))||v[v.length-1]})))),kind:"x"}}(r,i),s=l.widths,d=l.kind,u=s.length-1,f=s.map((function(e,n){return"".concat(x({src:t,quality:a,width:e})," ").concat("w"===d?e:n+1).concat(d)})).join(", ");c||"w"!==d||(c="100vw");return{src:t=x({src:t,quality:a,width:s[u]}),sizes:c,srcSet:f}}({src:t,unoptimized:c,layout:z,width:D,quality:B,sizes:n}));A&&(k=void 0,N=void 0,T=void 0);return l.default.createElement("div",{style:k},N?l.default.createElement("div",{style:N},E?l.default.createElement("img",{style:{maxWidth:"100%",display:"block"},alt:"","aria-hidden":!0,role:"presentation",src:"data:image/svg+xml;base64,".concat((0,s.toBase64)(E))}):null):null,l.default.createElement("img",Object.assign({},S,F,{decoding:"async",className:m,ref:L,style:T})))};var a=r(n("8OQS")),c=r(n("pVnL")),l=r(n("q1tI")),s=n("dEHY"),d=n("UWYU"),u=n("vNVm");var f=new Map([["imgix",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality,r=["auto=format","fit=max","w="+i],a="";o&&r.push("q="+o);r.length&&(a="?"+r.join("&"));return"".concat(t).concat(w(n)).concat(a)}],["cloudinary",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality,r=["f_auto","c_limit","w_"+i,"q_"+(o||"auto")].join(",")+"/";return"".concat(t).concat(r).concat(w(n))}],["akamai",function(e){var t=e.root,n=e.src,i=e.width;return"".concat(t).concat(w(n),"?imwidth=").concat(i)}],["default",function(e){var t=e.root,n=e.src,i=e.width,o=e.quality;0;return"".concat(t,"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(o||75)}]]),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"}||d.imageConfigDefault,p=h.deviceSizes,m=h.imageSizes,b=h.loader,g=h.path,v=(h.domains,[].concat(o(p),o(m)));function x(e){var t=f.get(b);if(t)return t((0,c.default)({root:g},e));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(b))}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function w(e){return"/"===e[0]?e.slice(1):e}p.sort((function(e,t){return e-t})),v.sort((function(e,t){return e-t}))},gMP8:function(e,t,n){"use strict";var i=n("rePB"),o=n("nKUr"),r=n("q1tI"),a=n("R/WZ"),c=n("de8u"),l=n("Aiso"),s=n.n(l),d=n("YFqc"),u=n.n(d),f=n("20a2"),h=Object(a.a)({root:Object(i.a)({color:"white",fontSize:"small",textTransform:"capitalize",cursor:"pointer","&:hover":{transition:"0.3s",fontSize:16}},"@media (max-width: 700px)",{marginRight:"1rem"})}),p=function(e){var t=e.title,n=e.link,i=e.setShowLoading,r=h(),a=Object(f.useRouter)();return Object(o.jsx)("div",{className:r.root,onClick:function(){a.pathname!==n&&i(!0),a.push("".concat(n))},children:Object(o.jsx)(u.a,{href:"".concat(n),children:Object(o.jsx)("a",{style:{textDecoration:"none",color:"white"},children:t})})})},m=Object(a.a)({navItemsContainer:{display:"flex",justifyContent:"space-around",alignItems:"center",color:"white",fontSize:"small",overflow:"hidden"}}),b=function(e){var t=e.setShowLoading,n=m();return Object(o.jsxs)("div",{className:n.navItemsContainer,children:[Object(o.jsx)(p,{title:"Home",link:"/",setShowLoading:t}),Object(o.jsx)(p,{title:"Quizzes",link:"/quizzes",setShowLoading:t}),Object(o.jsx)(p,{title:"Blog",link:"/blog/posts",setShowLoading:t})," "]})},g=n("ODXe"),v=n("469l"),x=n("vDqi"),j=n.n(x),w=n("PhsX"),y=n("5AJ6"),O=Object(y.a)(r.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess"),S=Object(y.a)(r.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore"),z=function(){var e=Object(w.a)("user",""),t=Object(g.a)(e,2),n=t[0],i=t[1],a=Object(r.useState)(""),c=a[0],l=a[1],s=Object(r.useState)(!1),d=s[0],f=s[1],h=A({user:n});Object(r.useEffect)((function(){n||j()({method:"get",url:"/api/auth/google?get=link"}).then((function(e){l(e.data.url)}))}),[]),Object(r.useEffect)((function(){n||j()({method:"get",url:"/api/auth/google?get=link"}).then((function(e){l(e.data.url)}))}),[n]);var p=Object(o.jsxs)("div",{className:h.container,onClick:function(e){(n||c)&&(!n&&c?(e.preventDefault(),window.open(c.toString())):n&&f(!d))},children:[!n&&Object(o.jsx)("div",{className:h.googleLogoContainer,children:Object(o.jsx)(I,{})}),n&&Object(o.jsx)("div",{className:h.profilePic,children:Object(o.jsx)(v.a,{alt:"".concat(null===n||void 0===n?void 0:n.name),src:"".concat(n.picture),style:{height:35,width:35}})}),Object(o.jsx)("p",{className:h.text,children:!n&&!c&&"Loading..."}),Object(o.jsx)("p",{className:h.text,children:!n&&c&&"Sign In"}),Object(o.jsx)("p",{className:h.text,children:n&&"".concat(n.name.toLowerCase())}),n&&Object(o.jsx)("div",{className:h.arrow,children:d?Object(o.jsx)(O,{color:"inherit"}):Object(o.jsx)(S,{color:"inherit"})}),d&&Object(o.jsxs)("div",{className:h.collapseContainer,onClick:function(){d&&f(!1)},children:[Object(o.jsx)("div",{className:h.menuItem,children:Object(o.jsx)(u.a,{href:"/user/profile",children:Object(o.jsx)("a",{style:{textDecoration:"none"},children:Object(o.jsx)("div",{className:h.linkText,children:"Profile"})})})}),Object(o.jsx)("div",{className:h.menuItem,onClick:function(){return i(""),void location.reload()},children:Object(o.jsx)("div",{className:h.linkText,children:"Logout"})})]})]});return Object(o.jsx)(o.Fragment,{children:n?p:c?Object(o.jsx)("a",{href:c.toString(),style:{textDecoration:"none"},children:p}):p})},A=Object(a.a)({container:{display:"flex",alignItems:"center",minWidth:150,justifyContent:"space-between",padding:"0.5rem 0.5rem 0.5rem 0.25rem",borderRadius:5,position:"relative",cursor:"pointer",backgroundColor:function(e){return e.user?"inherit":"white"}},text:{color:function(e){return e.user?"white":"black"},fontSize:14,fontWeight:500,textTransform:"capitalize",margin:"0px 5px 0px 2px",textDecoration:"none",whiteSpace:"nowrap",overflow:"hidden"},googleLogoContainer:{marginRight:5,marginLeft:5,width:20,height:20,float:"left",display:"flex",alignItems:"center"},profilePic:{borderRadius:"50%",overflow:"hidden",height:40,width:40,display:"flex",alignItems:"center"},arrow:{color:"#3798A7",display:"flex",alignItems:"center",justifyContent:"center"},collapseContainer:{position:"absolute",top:50,right:0,zIndex:1e3,backgroundColor:"#003085",color:"white",width:"auto",display:"flex",flexDirection:"column"},menuItem:{width:"100%",height:"100%",padding:16,borderBottom:"1px solid white",color:"white",cursor:"pointer",textAlign:"center","&:hover":{borderBottom:"1px solid #3798A7"}},linkText:{color:"white","&:hover":{color:"#3798A7"}}}),I=function(){return Object(o.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",children:[Object(o.jsx)("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"}),Object(o.jsx)("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"}),Object(o.jsx)("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"}),Object(o.jsx)("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"})]})},k=n("TrRe"),N=Object(a.a)({topbarContainer:{position:"fixed",top:0,left:0,right:0,height:100,borderBottomRightRadius:15,display:"flex",justifyContent:"space-between",alignItems:"center",paddingLeft:"2.5%",paddingRight:"2.5%",zIndex:k.a.normal,background:"transparent linear-gradient(180deg, #003EAA 0%, #002461E0 100%) 0% 0% no-repeat padding-box"},placeholder:{position:"relative",top:0,left:0,marginRight:100,width:"100%",height:100,background:"transparent linear-gradient(180deg, #000266 0%, #032C73 57%, #00163B 100%, #003A67 100%) 0% 0% no-repeat padding-box"},outerContainer:{display:"flex",flexDirection:"column"},mobileNavItems:Object(i.a)({backgroundColor:"rgba(0, 34, 94, 0.8)",padding:"0.5rem 1rem",color:"white",position:"fixed",top:100,left:0,right:0,zIndex:40},"@media (min-width: 700px)",{display:"none"}),pcNavItems:Object(i.a)({width:"60%"},"@media (max-width: 700px)",{display:"none"})});t.a=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],i=N();return Object(o.jsxs)("div",{className:i.outerContainer,children:[Object(o.jsx)("div",{className:i.placeholder}),t&&Object(o.jsx)(c.a,{color:"primary"}),Object(o.jsxs)("div",{className:i.outerContainer,children:[Object(o.jsxs)("div",{className:i.topbarContainer,children:[Object(o.jsx)("div",{children:Object(o.jsx)(s.a,{src:"/assets/new_logo.png",alt:"Smartifier Logo",height:45,width:135})}),Object(o.jsx)("div",{className:i.pcNavItems,children:Object(o.jsx)(b,{setShowLoading:n})}),Object(o.jsx)(z,{})]}),Object(o.jsx)("div",{className:i.mobileNavItems,children:Object(o.jsx)(b,{setShowLoading:n})})]})]})}},pVnL:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},n.apply(this,arguments)}e.exports=n},vNVm:function(e,t,n){"use strict";var i=n("J4zp"),o=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,o=(0,r.useRef)(),s=(0,r.useState)(!1),d=i(s,2),u=d[0],f=d[1],h=(0,r.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),n||u||e&&e.tagName&&(o.current=function(e,t,n){var i=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:o,elements:i}),n}(n),o=i.id,r=i.observer,a=i.elements;return a.set(e,t),r.observe(e),function(){r.unobserve(e),0===a.size&&(r.disconnect(),l.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return(0,r.useEffect)((function(){c||u||(0,a.default)((function(){return f(!0)}))}),[u]),[h,u]};var r=n("q1tI"),a=o(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var l=new Map}}]);