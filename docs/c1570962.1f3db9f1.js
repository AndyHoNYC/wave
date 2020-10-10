(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{230:function(A,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return i})),t.d(e,"rightToc",(function(){return u})),t.d(e,"default",(function(){return p}));var a=t(2),n=t(6),r=(t(0),t(286)),o={title:"Nav"},i={unversionedId:"examples/nav",id:"examples/nav",isDocsHomePage:!1,title:"Nav",description:"Use nav cards to display sidebar navigation.",source:"@site/docs/examples/nav.md",slug:"/examples/nav",permalink:"/docs/examples/nav",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/nav.md",version:"current",sidebar:"someSidebar",previous:{title:"Markup",permalink:"/docs/examples/markup"},next:{title:"Toolbar",permalink:"/docs/examples/toolbar"}},u=[],l={rightToc:u};function p(A){var e=A.components,o=Object(n.a)(A,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,o,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Use nav cards to display sidebar navigation."),Object(r.b)("div",{className:"cover",style:{backgroundImage:"url("+t(430).default+")"}}),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"from h2o_q import site, ui\n\npage = site['/demo']\n\npage['tabs'] = ui.nav_card(\n    box='1 1 2 5',\n    items=[\n        ui.nav_group('Menu', items=[\n            ui.nav_item(name='#menu/spam', label='Spam'),\n            ui.nav_item(name='#menu/ham', label='Ham'),\n            ui.nav_item(name='#menu/eggs', label='Eggs'),\n        ]),\n        ui.nav_group('Help', items=[\n            ui.nav_item(name='#about', label='About'),\n            ui.nav_item(name='#support', label='Support'),\n        ])\n    ],\n)\n\npage.save()\n")))}p.isMDXComponent=!0},286:function(A,e,t){"use strict";t.d(e,"a",(function(){return b})),t.d(e,"b",(function(){return m}));var a=t(0),n=t.n(a);function r(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function o(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,a)}return t}function i(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function u(A,e){if(null==A)return{};var t,a,n=function(A,e){if(null==A)return{};var t,a,n={},r=Object.keys(A);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var l=n.a.createContext({}),p=function(A){var e=n.a.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):i(i({},e),A)),t},b=function(A){var e=p(A.components);return n.a.createElement(l.Provider,{value:e},A.children)},v={inlineCode:"code",wrapper:function(A){var e=A.children;return n.a.createElement(n.a.Fragment,{},e)}},f=n.a.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,o=A.parentName,l=u(A,["components","mdxType","originalType","parentName"]),b=p(t),f=a,m=b["".concat(o,".").concat(f)]||b[f]||v[f]||r;return t?n.a.createElement(m,i(i({ref:e},l),{},{components:t})):n.a.createElement(m,i({ref:e},l))}));function m(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,o=new Array(r);o[0]=f;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=A,i.mdxType="string"==typeof A?A:a,o[1]=i;for(var l=2;l<r;l++)o[l]=t[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},430:function(A,e,t){"use strict";t.r(e),e.default="data:image/png;base64,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"}}]);