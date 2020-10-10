(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(286)),o={title:"Form / Tabs"},c={unversionedId:"examples/tabs",id:"examples/tabs",isDocsHomePage:!1,title:"Form / Tabs",description:"Use tabs within a form to navigate between two or more distinct content categories.",source:"@site/docs/examples/tabs.md",slug:"/examples/tabs",permalink:"/docs/examples/tabs",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/tabs.md",version:"current",sidebar:"someSidebar",previous:{title:"Form / Swatch Picker",permalink:"/docs/examples/swatch-picker"},next:{title:"Form / Separator",permalink:"/docs/examples/separator"}},l=[],m={rightToc:l};function u(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},m,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use tabs within a form to navigate between two or more distinct content categories."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+n(374).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_q import Q, listen, ui\n\ntabs = [\n    ui.tab(name='email', label='Mail', icon='Mail'),\n    ui.tab(name='events', label='Events', icon='Calendar'),\n    ui.tab(name='spam', label='Spam'),\n]\n\n\nasync def main(q: Q):\n    if q.args.menu:\n        q.page['example'].items = [\n            ui.tabs(name='menu', value=q.args.menu, items=tabs),\n            get_tab_content(q.args.menu),\n        ]\n    else:\n        q.page['example'] = ui.form_card(box='1 1 4 10', items=[\n            ui.tabs(name='menu', value='email', items=tabs),\n            get_tab_content('email'),\n        ])\n    await q.page.save()\n\n\ndef get_tab_content(category: str):\n    # Return a checklist of dummy items.\n    items = [f'{category.title()} {i}' for i in range(1, 11)]\n    return ui.checklist(name='items', choices=[ui.choice(name=item, label=item) for item in items])\n\n\nif __name__ == '__main__':\n    listen('/demo', main)\n")))}u.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=a.a.createContext({}),u=function(e){var t=a.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(n),p=r,f=s["".concat(o,".").concat(p)]||s[p]||b[p]||i;return n?a.a.createElement(f,c(c({ref:t},m),{},{components:n})):a.a.createElement(f,c({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var m=2;m<i;m++)o[m]=n[m];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},374:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"}}]);