(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{157:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(6),o=(r(0),r(286)),i={title:"Plot / Area / Smooth"},c={unversionedId:"examples/plot-area-smooth",id:"examples/plot-area-smooth",isDocsHomePage:!1,title:"Plot / Area / Smooth",description:"Make an area plot with a smooth curve.",source:"@site/docs/examples/plot-area-smooth.md",slug:"/examples/plot-area-smooth",permalink:"/docs/examples/plot-area-smooth",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/plot-area-smooth.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Area / Range",permalink:"/docs/examples/plot-area-range"},next:{title:"Plot / Area / Stacked",permalink:"/docs/examples/plot-area-stacked"}},p=[],l={rightToc:p};function s(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Make an area plot with a smooth curve."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+r(364).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeTimeSeries\nfrom h2o_q import site, data, ui\n\npage = site['/demo']\n\nn = 50\nf = FakeTimeSeries()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Area, smooth',\n    data=data('date price', n),\n    plot=ui.plot([ui.mark(type='area', x_scale='time', x='=date', y='=price', curve='smooth', y_min=0)])\n))\nv.data = [(t, x) for t, x, dx in [f.next() for _ in range(n)]]\n\npage.save()\n")))}s.isMDXComponent=!0},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return r?a.a.createElement(f,c(c({ref:t},l),{},{components:r})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},364:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/plot-area-smooth-4826228f8423a45fda33727184111c06.png"}}]);