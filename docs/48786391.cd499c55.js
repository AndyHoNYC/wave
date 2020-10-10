(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(286)),i={title:"Plot / Form"},c={unversionedId:"examples/plot-form",id:"examples/plot-form",isDocsHomePage:!1,title:"Plot / Form",description:"Display a plot inside a form.",source:"@site/docs/examples/plot-form.md",slug:"/examples/plot-form",permalink:"/docs/examples/plot-form",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/plot-form.md",version:"current",sidebar:"someSidebar",previous:{title:"Plot / Axis Titles",permalink:"/docs/examples/plot-axis-title"},next:{title:"Plot / Vega-lite",permalink:"/docs/examples/plot-vegalite"}},p=[],l={rightToc:p};function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Display a plot inside a form."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+r(345).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"from synth import FakeCategoricalSeries\nfrom h2o_q import site, data, ui\n\npage = site['/demo']\n\nn = 20\nf = FakeCategoricalSeries()\nv = page.add('example', ui.form_card(\n    box='1 1 4 5',\n    items=[\n        ui.text_xl('Example 1'),\n        ui.visualization(\n            plot=ui.plot([ui.mark(type='interval', x='=product', y='=price', y_min=0)]),\n            data=data(fields='product price', rows=[(c, x) for c, x, _ in [f.next() for _ in range(n)]], pack=True),\n        ),\n        ui.text_xl('Example 2'),\n        ui.visualization(\n            plot=ui.plot([ui.mark(type='interval', x='=product', y='=price', y_min=0)]),\n            data=data(fields='product price', rows=[(c, x) for c, x, _ in [f.next() for _ in range(n)]], pack=True),\n        ),\n    ],\n))\n\npage.save()\n")))}u.isMDXComponent=!0},286:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(r),m=n,d=s["".concat(i,".").concat(m)]||s[m]||f[m]||a;return r?o.a.createElement(d,c(c({ref:t},l),{},{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},345:function(e,t,r){"use strict";r.r(t),t.default=r.p+"assets/images/plot-form-7b7c198bf0e0f55d1d9389b4f4dcff1a.png"}}]);