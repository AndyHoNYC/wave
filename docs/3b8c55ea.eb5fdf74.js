(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),A=n(6),a=(n(0),n(286)),o={title:"Installation"},i={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installation",description:"To set up H2O Q, simply download and extract a release (~8MB). The release ships with a precompiled binary executable, so no explicit installation step is necessary.",source:"@site/docs/installation.md",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/installation.md",version:"current",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/docs/getting-started"},next:{title:"A Tour of Q",permalink:"/docs/tour"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Setup",id:"setup",children:[{value:"Step 1: Download",id:"step-1-download",children:[]},{value:"Step 2: Extract",id:"step-2-extract",children:[]},{value:"Step 3: Move",id:"step-3-move",children:[]},{value:"Step 4: Run",id:"step-4-run",children:[]},{value:"Step 5: Verify",id:"step-5-verify",children:[]}]}],c={rightToc:l};function p(e){var t=e.components,o=Object(A.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To set up H2O Q, simply download and extract a release (~8MB). The release ships with a precompiled binary executable, so no explicit installation step is necessary."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)("p",null,"H2O Q runs on Linux, macOS, and Windows, having Python 3.6.1 or later."),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("h3",{id:"step-1-download"},"Step 1: Download"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/h2oai/qd/releases/latest"}),"Download the H2O Q SDK")," for your platform. "),Object(a.b)("h3",{id:"step-2-extract"},"Step 2: Extract"),Object(a.b)("p",null,"Extract your download."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"tar -xzf qd-x.y.z-linux-amd64.tar.gz\n")),Object(a.b)("h3",{id:"step-3-move"},"Step 3: Move"),Object(a.b)("p",null,"Move it to a convenient location, say ",Object(a.b)("inlineCode",{parentName:"p"},"$HOME/q/"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"})," mv qd-x.y.z-linux-amd64 $HOME/q\n")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If you have a previous version of H2O Q installed, be sure to remove it before installing another. To remove it, simply delete the previous directory."))),Object(a.b)("p",null,"Inspect your ",Object(a.b)("inlineCode",{parentName:"p"},"$HOME/q")," directory. You should see the following content:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),".\n\u251c\u2500\u2500 docs/           ... Documentation\n\u251c\u2500\u2500 examples/       ... Examples\n\u251c\u2500\u2500 test/           ... Browser testing framework\n\u251c\u2500\u2500 www/            ... Q server web root (do not modify!)\n\u2514\u2500\u2500 qd              ... Q server executable\n")),Object(a.b)("h3",{id:"step-4-run"},"Step 4: Run"),Object(a.b)("p",null,"Go to your H2O Q directory."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"cd $HOME/q\n")),Object(a.b)("p",null,"Start the H2O Q server."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"./qd\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),'2020/10/01 01:27:35 # \n2020/10/01 01:27:35 #              __\n2020/10/01 01:27:35 #   ____ _____/ /\n2020/10/01 01:27:35 #  / __ `/ __  /\n2020/10/01 01:27:35 # / /_/ / /_/ /\n2020/10/01 01:27:35 # \\__, /\\__,_/\n2020/10/01 01:27:35 #   /_/\n2020/10/01 01:27:35 # \n2020/10/01 01:27:35 # {"address":":55555","t":"listen","webroot":"/home/elp/q/www"}\n\n')),Object(a.b)("h3",{id:"step-5-verify"},"Step 5: Verify"),Object(a.b)("p",null,"Finally, point your web browser to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"http://localhost:55555/"}),"http://localhost:55555/"),". You should see an empty page with a spinner that looks like this:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"spinner",src:n(487).default})),Object(a.b)("p",null,"Congratulations! H2O Q is now running, but doesn't have any content yet (hence the spinner). "),Object(a.b)("p",null,"In the next few sections, we'll add some content and see what the fuss is all about."))}p.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),A=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,A=function(e,t){if(null==e)return{};var n,r,A={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(A[n]=e[n]);return A}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(A[n]=e[n])}return A}var c=A.a.createContext({}),p=function(e){var t=A.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return A.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return A.a.createElement(A.a.Fragment,{},t)}},d=A.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,b=s["".concat(o,".").concat(d)]||s[d]||u[d]||a;return n?A.a.createElement(b,i(i({ref:t},c),{},{components:n})):A.a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<a;c++)o[c]=n[c];return A.a.createElement.apply(null,o)}return A.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},487:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);