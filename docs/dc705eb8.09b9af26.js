(window.webpackJsonp=window.webpackJsonp||[]).push([[196],{250:function(A,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return o})),r.d(e,"metadata",(function(){return m})),r.d(e,"rightToc",(function(){return c})),r.d(e,"default",(function(){return d}));var t=r(2),n=r(6),a=(r(0),r(286)),o={title:"Layout / Position"},m={unversionedId:"examples/layout",id:"examples/layout",isDocsHomePage:!1,title:"Layout / Position",description:"How to adjust the position of cards on a page.",source:"@site/docs/examples/layout.md",slug:"/examples/layout",permalink:"/docs/examples/layout",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/layout.md",version:"current",sidebar:"someSidebar",previous:{title:"Stat / Series / Tall / Interval",permalink:"/docs/examples/stat-tall-series-interval"},next:{title:"Layout / Size",permalink:"/docs/examples/layout-size"}},c=[],p={rightToc:c};function d(A){var e=A.components,o=Object(n.a)(A,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,o,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"How to adjust the position of cards on a page."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+r(416).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-py"}),"from h2o_q import site, ui\n\n# Every page has a grid system in place.\n# The grid has 12 columns and 10 rows.\n# A column is 134 pixels wide.\n# A row is 76 pixels high.\n# The gap between rows and columns is set to 15 pixels.\n\n# Cards have a `box` attribute that specifies its column, row, width and height.\n# box = 'column row width height'\n# They indicate the 1-based column/row to position the top-left corner of the card.\n\n# In this example, we place a 1x1 card in each column/row on a page\n# to demonstrate their column/row values.\n\npage = site['/demo']\ncolumns = 12\nrows = 10\n\nfor column in range(1, columns + 1):\n    for row in range(1, rows + 1):\n        box = f'{column} {row} 1 1'\n        page[f'card_{column}_{row}'] = ui.markdown_card(box=box, title=box, content='')\n\npage.save()\n")))}d.isMDXComponent=!0},286:function(A,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return f}));var t=r(0),n=r.n(t);function a(A,e,r){return e in A?Object.defineProperty(A,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):A[e]=r,A}function o(A,e){var r=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),r.push.apply(r,t)}return r}function m(A){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(A,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(r,e))}))}return A}function c(A,e){if(null==A)return{};var r,t,n=function(A,e){if(null==A)return{};var r,t,n={},a=Object.keys(A);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(n[r]=A[r]);return n}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(A,r)&&(n[r]=A[r])}return n}var p=n.a.createContext({}),d=function(A){var e=n.a.useContext(p),r=e;return A&&(r="function"==typeof A?A(e):m(m({},e),A)),r},i=function(A){var e=d(A.components);return n.a.createElement(p.Provider,{value:e},A.children)},u={inlineCode:"code",wrapper:function(A){var e=A.children;return n.a.createElement(n.a.Fragment,{},e)}},s=n.a.forwardRef((function(A,e){var r=A.components,t=A.mdxType,a=A.originalType,o=A.parentName,p=c(A,["components","mdxType","originalType","parentName"]),i=d(r),s=t,f=i["".concat(o,".").concat(s)]||i[s]||u[s]||a;return r?n.a.createElement(f,m(m({ref:e},p),{},{components:r})):n.a.createElement(f,m({ref:e},p))}));function f(A,e){var r=arguments,t=e&&e.mdxType;if("string"==typeof A||t){var a=r.length,o=new Array(a);o[0]=s;var m={};for(var c in e)hasOwnProperty.call(e,c)&&(m[c]=e[c]);m.originalType=A,m.mdxType="string"==typeof A?A:t,o[1]=m;for(var p=2;p<a;p++)o[p]=r[p];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},416:function(A,e,r){"use strict";r.r(e),e.default="data:image/png;base64,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"}}]);