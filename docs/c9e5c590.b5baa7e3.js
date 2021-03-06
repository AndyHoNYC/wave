(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{255:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(311)),i=n(313),c={title:"Plot / Line / Smooth",keywords:["plot"]},u={unversionedId:"examples/plot-line-smooth",id:"examples/plot-line-smooth",isDocsHomePage:!1,title:"Plot / Line / Smooth",description:"Make a line plot using a smooth curve.",source:"@site/docs/examples/plot-line-smooth.md",slug:"/examples/plot-line-smooth",permalink:"/wave/docs/examples/plot-line-smooth",editUrl:"https://github.com/h2oai/wave/edit/master/website/docs/examples/plot-line-smooth.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Line / Groups",permalink:"/wave/docs/examples/plot-line-groups"},next:{title:"Plot / Line / Step",permalink:"/wave/docs/examples/plot-step"}},l=[],s={rightToc:l};function p(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Make a line plot using a smooth curve."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+n(490).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeTimeSeries\nfrom h2o_wave import site, data, ui\n\npage = site['/demo']\n\nn = 50\nf = FakeTimeSeries()\nv = page.add('example', ui.plot_card(\n    box='1 1 4 5',\n    title='Line, smooth',\n    data=data('date price', n),\n    plot=ui.plot([ui.mark(type='line', x_scale='time', x='=date', y='=price', curve='smooth', y_min=0)])\n))\nv.data = [(t, x) for t, x, dx in [f.next() for _ in range(n)]]\n\npage.save()\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tags"),": \u2002",Object(a.b)("a",{href:Object(i.a)("docs/examples/tags#plot")},"plot")))}p.isMDXComponent=!0},311:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||f[m]||a;return n?o.a.createElement(d,c(c({ref:t},l),{},{components:n})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},312:function(e,t,n){"use strict";var r=n(0),o=n(19);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},313:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));var r=n(312),o=n(314);function a(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,c=void 0!==i&&i,u=a.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(a,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},314:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},490:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/plot-line-smooth-566975ab0a25c3e3ad7b3941ca441df6.png"}}]);