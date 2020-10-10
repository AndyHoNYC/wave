(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),i=(a(0),a(286)),o={title:"Data Buffers"},c={unversionedId:"buffers",id:"buffers",isDocsHomePage:!1,title:"Data Buffers",description:"Data buffers are in-memory data structures designed to hold a card's tabular data.",source:"@site/docs/buffers.md",slug:"/buffers",permalink:"/docs/buffers",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/buffers.md",version:"current",sidebar:"someSidebar",previous:{title:"Cards",permalink:"/docs/cards"},next:{title:"Components",permalink:"/docs/components"}},l=[{value:"Cards and buffers",id:"cards-and-buffers",children:[]},{value:"Types of buffers",id:"types-of-buffers",children:[]},{value:"The data function",id:"the-data-function",children:[]},{value:"Buffers in practice",id:"buffers-in-practice",children:[]}],b={rightToc:l};function s(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Data buffers")," are in-memory data structures designed to hold a card's tabular data. "),Object(i.b)("p",null,"Data buffers make it convenient to separate data (what is displayed) from presentation (how it is displayed). You can declare a card once, and update its underlying data buffer multiple times. A card can hold zero or more data buffers. "),Object(i.b)("h2",{id:"cards-and-buffers"},"Cards and buffers"),Object(i.b)("p",null,"Data buffers are tabular data structures containing columns and rows. Different cards utilize data buffers in different ways. For example, the plot in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"api/ui#small_series_stat_card"}),"ui.small_series_stat_card()")," uses a data buffer called ",Object(i.b)("inlineCode",{parentName:"p"},"plot_data")," to hold time series data."),Object(i.b)("p",null,Object(i.b)("img",{alt:"CPU Usage",src:a(489).default})),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py",metastring:"{5-7}","{5-7}":!0}),"card = ui.small_series_stat_card(\n    box=f'1 1 1 1',\n    title='CPU',\n    value='10%',\n    plot_data=data('time usage', -15),\n    plot_category='time',\n    plot_value='usage',\n))\n")),Object(i.b)("p",null,"In the above snippet, ",Object(i.b)("inlineCode",{parentName:"p"},"data('time usage', -15)")," defines a placeholder for a table with two columns (",Object(i.b)("inlineCode",{parentName:"p"},"time")," and ",Object(i.b)("inlineCode",{parentName:"p"},"usage"),") and 15 rows (we'll get to why the ",Object(i.b)("inlineCode",{parentName:"p"},"15")," is negative shortly), and the card's ",Object(i.b)("inlineCode",{parentName:"p"},"plot_category")," and ",Object(i.b)("inlineCode",{parentName:"p"},"plot_value")," point to the two columns ",Object(i.b)("inlineCode",{parentName:"p"},"time")," and ",Object(i.b)("inlineCode",{parentName:"p"},"usage"),", respectively."),Object(i.b)("p",null,"Appending ",Object(i.b)("em",{parentName:"p"},"rows")," (",Object(i.b)("em",{parentName:"p"},"tuples")," or ",Object(i.b)("em",{parentName:"p"},"records"),") to the data buffer make the card plot those rows."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py",metastring:"{2}","{2}":!0}),"while True:\n    card.plot_data[-1] = [get_time(), get_usage()]\n    time.sleep(1)\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"while")," loop above does something like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"card.plot_data[-1] = ['2020-10-05T02:10:20Z', 42.5]\ncard.plot_data[-1] = ['2020-10-05T02:10:21Z', 43.1]\ncard.plot_data[-1] = ['2020-10-05T02:10:22Z', 39.2]\ncard.plot_data[-1] = ['2020-10-05T02:10:23Z', 38.7]\n")),Object(i.b)("h2",{id:"types-of-buffers"},"Types of buffers"),Object(i.b)("p",null,"There are three types of data buffers:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Array buffers")," hold tabular data with a fixed number of rows, and allow random access to rows using 0-based integers as keys."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Cyclic buffers")," also hold tabular data with a fixed number of rows, but do not allow random access to rows. They can only be appended to. Rows are first-in first-out (FIFO), and adding rows beyond its capacity overwrites the oldest rows."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Map buffers")," (or dictionary buffers) hold tabular data with a variable number of rows, and allow random access to rows using string keys.")),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Map buffers are convenient to use, but use more memory on the server compared to array buffers and cyclic buffers, so use them sparingly."))),Object(i.b)("h2",{id:"the-data-function"},"The data function"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"data()")," function to declare a data buffer. The Q server uses this declaration to allocate memory for the data buffer."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"data()")," takes multiple arguments:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"fields"),": The names of columns, in order; a space-separate string or a list or a tuple (",Object(i.b)("inlineCode",{parentName:"li"},"foo bar")," or ",Object(i.b)("inlineCode",{parentName:"li"},"['foo', 'bar']")," or ",Object(i.b)("inlineCode",{parentName:"li"},"('foo', 'bar')"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"size"),": The number of rows to allocate.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A positive row count creates an array buffer."),Object(i.b)("li",{parentName:"ul"},"A negative row count creates a cyclic buffer."),Object(i.b)("li",{parentName:"ul"},"A zero row count (or ",Object(i.b)("inlineCode",{parentName:"li"},"None"),") creates a map buffer."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rows"),": A ",Object(i.b)("inlineCode",{parentName:"li"},"dict")," or ",Object(i.b)("inlineCode",{parentName:"li"},"list")," of rows to initialize the data buffer with. Each row can be a list or tuple. ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"For array or cyclic buffers, pass a list of rows."),Object(i.b)("li",{parentName:"ul"},"For map buffers, pass a dict with strings as keys and rows as values.")))),Object(i.b)("h2",{id:"buffers-in-practice"},"Buffers in practice"),Object(i.b)("p",null,"Declare a 5-row buffer with columns ",Object(i.b)("inlineCode",{parentName:"p"},"donut")," and ",Object(i.b)("inlineCode",{parentName:"p"},"price"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Array buffer\nb = data(fields='donut price', size=5)\n\n# Cyclic buffer\nb = data(fields='donut price', size=-5)\n\n# Map buffer\nb = data(fields='donut price')\n")),Object(i.b)("p",null,"Declare and initialize a 5-row buffer with columns ",Object(i.b)("inlineCode",{parentName:"p"},"donut")," and ",Object(i.b)("inlineCode",{parentName:"p"},"price"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Array buffer\nb = data(fields='donut price', size=5, rows=[\n    ['cream', 3.99],\n    ['custard', 2.99],\n    ['cinnamon', 2.49],\n    ['sprinkles', 2.49],\n    ['sugar', 1.99],\n])\n\n# Cyclic buffer\nb = data(fields='donut price', size=-5, rows=[\n    ['cream', 3.99],\n    ['custard', 2.99],\n    ['cinnamon', 2.49],\n    ['sprinkles', 2.49],\n    ['sugar', 1.99],\n])\n\n# Map buffer\nb = data(fields='donut price', rows=dict(\n    crm=['cream', 3.99],\n    cst=['custard', 2.99],\n    cin=['cinnamon', 2.49],\n    spr=['sprinkles', 2.49],\n    sug=['sugar', 1.99],\n))\n")),Object(i.b)("p",null,"Modify a buffer row"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Array buffer\nb[2] = ['cinnamon', 2.99]\n\n# Cyclic buffer\nb[-1] = ['fruit', 2.99] # replaces ['sugar', 1.99]\n\n# Map buffer\nb['cin'] = ['cinnamon', 2.99]\n")),Object(i.b)("p",null,"Modify a buffer value"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Array buffer\nb[2] = ['cinnamon', 2.99]\n\n# Cyclic buffer\nb[-1]['price'] = 2.99 # last donut on menu now costs 2.99\n\n# Map buffer\nb['cin'] = ['cinnamon', 2.99]\n")))}s.isMDXComponent=!0},286:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(a),p=n,f=u["".concat(o,".").concat(p)]||u[p]||d[p]||i;return a?r.a.createElement(f,c(c({ref:t},b),{},{components:a})):r.a.createElement(f,c({ref:t},b))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},489:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,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"}}]);