(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{246:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(286)),i={title:"Template / Data"},c={unversionedId:"examples/template-data",id:"examples/template-data",isDocsHomePage:!1,title:"Template / Data",description:"Update a template card's data periodically.",source:"@site/docs/examples/template-data.md",slug:"/examples/template-data",permalink:"/docs/examples/template-data",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/template-data.md",version:"current",sidebar:"someSidebar",previous:{title:"Template",permalink:"/docs/examples/template"},next:{title:"Markdown",permalink:"/docs/examples/markdown"}},p=[],l={rightToc:p};function d(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Update a template card's data periodically."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(429).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"import time\nimport random\nfrom h2o_q import site, ui\n\npage = site['/demo']\npage.drop()\n\nmenu = '''\n<ol>\n{{#each dishes}}\n<li><strong>{{name}}</strong> costs {{price}}</li>\n{{/each}}\n</ol\n'''\n\nmenu_card = page.add('template_example', ui.template_card(\n    box=f'1 1 2 2',\n    title='Surge-priced Menu',\n    content=menu,\n    data=dict(dishes=[\n        dict(name='Spam', price='$2.00'),\n        dict(name='Ham', price='$3.45'),\n        dict(name='Eggs', price='$1.75'),\n    ]),\n))\npage.save()\n\n\ndef rand_price(): return f'${random.randrange(0, 4)}.{random.randrange(10, 99)}'\n\n\ndishes = menu_card.data.dishes\nfor i in range(98, 2, -1):\n    time.sleep(1)\n    dishes[0].price = rand_price()\n    dishes[1].price = rand_price()\n    dishes[2].price = rand_price()\n    page.save()\n")))}d.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,f=s["".concat(i,".").concat(u)]||s[u]||m[u]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},429:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/template-data-1b5f5707f248dfd5a606e722345ad2a2.png"}}]);