(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{191:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return m}));var r=t(2),o=t(6),a=(t(0),t(286)),c={title:"Markdown"},i={unversionedId:"examples/markdown",id:"examples/markdown",isDocsHomePage:!1,title:"Markdown",description:"Use a markdown card to display formatted content using markdown.",source:"@site/docs/examples/markdown.md",slug:"/examples/markdown",permalink:"/docs/examples/markdown",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/markdown.md",version:"current",sidebar:"someSidebar",previous:{title:"Template / Data",permalink:"/docs/examples/template-data"},next:{title:"Markdown / Data",permalink:"/docs/examples/markdown-data"}},d=[],u={rightToc:d};function m(e){var n=e.components,c=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,c,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Use a markdown card to display formatted content using markdown."),Object(a.b)("div",{className:"cover",style:{backgroundImage:"url("+t(391).default+")"}}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_q import site, ui\n\npage = site['/demo']\n\nsample_markdown = '''=\nThe **quick** _brown_ fox jumped over the lazy dog.\n\nBlock quote:\n\n> The quick brown fox jumped over the lazy dog.\n\nUnordered list:\n\n- The quick brown fox jumped over the lazy dog.\n- The quick brown fox jumped over the lazy dog.\n- The quick brown fox jumped over the lazy dog.\n\nOrdered list:\n\n1. The quick brown fox jumped over the lazy dog.\n1. The quick brown fox jumped over the lazy dog.\n1. The quick brown fox jumped over the lazy dog.\n\nImage:\n\n![Monty Python](https://upload.wikimedia.org/wikipedia/en/c/cb/Flyingcircus_2.jpg)\n\nTable:\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Item 1   | Item 2   | Item 3   |\n| Item 1   | Item 2   | Item 3   |\n| Item 1   | Item 2   | Item 3   |\n\n'''\n\npage['example'] = ui.markdown_card(\n    box='1 1 3 -1',\n    title='I was made using markdown!',\n    content=sample_markdown,\n)\npage.save()\n")))}m.isMDXComponent=!0},286:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),m=function(e){var n=o.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=m(e.components);return o.a.createElement(u.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},s=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=m(t),s=r,f=p["".concat(c,".").concat(s)]||p[s]||l[s]||a;return t?o.a.createElement(f,i(i({ref:n},u),{},{components:t})):o.a.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=s;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},391:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/markdown-3164a3fca5f8ccd5e61dbb00656dc796.png"}}]);