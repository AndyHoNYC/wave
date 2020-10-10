(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{286:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var i=a(0),n=a.n(i);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},c=Object.keys(e);for(i=0;i<c.length;i++)a=c[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)a=c[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),s=p(a),d=i,O=s["".concat(o,".").concat(d)]||s[d]||u[d]||c;return a?n.a.createElement(O,r(r({ref:t},l),{},{components:a})):n.a.createElement(O,r({ref:t},l))}));function O(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=a.length,o=new Array(c);o[0]=d;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var l=2;l<c;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var i=a(2),n=a(6),c=(a(0),a(286)),o={title:"Components"},r={unversionedId:"components",id:"components",isDocsHomePage:!1,title:"Components",description:"Components are blocks of interactive content (inputs, commands, notifications, graphics) contained in a form card.",source:"@site/docs/components.md",slug:"/components",permalink:"/docs/components",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/components.md",version:"current",sidebar:"someSidebar",previous:{title:"Data Buffers",permalink:"/docs/buffers"},next:{title:"Event Arguments",permalink:"/docs/arguments"}},b=[{value:"Content",id:"content",children:[{value:"Text",id:"text",children:[]},{value:"Label",id:"label",children:[]},{value:"Link",id:"link",children:[]},{value:"Template",id:"template",children:[]},{value:"HTML",id:"html",children:[]},{value:"Inline frame",id:"inline-frame",children:[]},{value:"Table",id:"table",children:[]}]},{value:"Inputs",id:"inputs",children:[{value:"Checkbox",id:"checkbox",children:[]},{value:"Checklist",id:"checklist",children:[]},{value:"Choice Group",id:"choice-group",children:[]},{value:"Color Picker",id:"color-picker",children:[]},{value:"Combo Box",id:"combo-box",children:[]},{value:"Date Picker",id:"date-picker",children:[]},{value:"Dropdown",id:"dropdown",children:[]},{value:"File Upload",id:"file-upload",children:[]},{value:"Picker",id:"picker",children:[]},{value:"Range Slider",id:"range-slider",children:[]},{value:"Slider",id:"slider",children:[]},{value:"Spin Box",id:"spin-box",children:[]},{value:"Table",id:"table-1",children:[]},{value:"Textbox",id:"textbox",children:[]},{value:"Toggle",id:"toggle",children:[]}]},{value:"Commands",id:"commands",children:[{value:"Command",id:"command",children:[]},{value:"Button",id:"button",children:[]},{value:"Button Set",id:"button-set",children:[]},{value:"Tabs",id:"tabs",children:[]}]},{value:"Engagement",id:"engagement",children:[{value:"Message Bar",id:"message-bar",children:[]},{value:"Progress Bar",id:"progress-bar",children:[]},{value:"Stepper",id:"stepper",children:[]}]},{value:"Graphics",id:"graphics",children:[{value:"Visualization",id:"visualization",children:[]},{value:"Vega-lite Visualization",id:"vega-lite-visualization",children:[]}]},{value:"Utilities",id:"utilities",children:[{value:"Expander",id:"expander",children:[]},{value:"Separator",id:"separator",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(i.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Components are blocks of interactive content (inputs, commands, notifications, graphics) contained in a ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#form_card"}),"form card"),"."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Several of the components below allow users to input information or interact with them in some way. To know what the user did, see ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/arguments"}),"event arguments"),"."))),Object(c.b)("h2",{id:"content"},"Content"),Object(c.b)("h3",{id:"text"},"Text"),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"text()")," or one of its variants to display text content. Markdown works, too. ",Object(c.b)("inlineCode",{parentName:"p"},"text_xl()")," and ",Object(c.b)("inlineCode",{parentName:"p"},"text_l()")," support context menus."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#text"}),"ui.text()")," ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#text_l"}),"ui.text_l()")," ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#text_m"}),"ui.text_m()")," ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#text_s"}),"ui.text_s()")," ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#text_xl"}),"ui.text_xl()")," ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#text_xs"}),"ui.text_xs()")),Object(c.b)("h3",{id:"label"},"Label"),Object(c.b)("p",null,"Use a label to give a name or title to other components."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#label"}),"ui.label()")),Object(c.b)("h3",{id:"link"},"Link"),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"link()")," to display a hyperlink."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#link"}),"ui.link()")),Object(c.b)("h3",{id:"template"},"Template"),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"template()")," to render dynamic content using HTML."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#template"}),"ui.template()")),Object(c.b)("h3",{id:"html"},"HTML"),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"markup()")," to display raw HTML."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#markup"}),"ui.markup()")),Object(c.b)("h3",{id:"inline-frame"},"Inline frame"),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"frame()")," to embed external HTML content using an inline frame."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#frame"}),"ui.frame()")),Object(c.b)("h3",{id:"table"},"Table"),Object(c.b)("p",null,"Use a table to display tabular data. A table also functions as an input element, and can report row(s) selection, useful for building ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Master%E2%80%93detail_interface"}),"master-detail")," views."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#table"}),"ui.table()")),Object(c.b)("h2",{id:"inputs"},"Inputs"),Object(c.b)("h3",{id:"checkbox"},"Checkbox"),Object(c.b)("p",null,"Use a checkbox to allow switching between two mutually exclusive options (checked/unchecked or on/off)."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#checkbox"}),"ui.checkbox()")),Object(c.b)("h3",{id:"checklist"},"Checklist"),Object(c.b)("p",null,"Use a checklist to display a list of checkboxes."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#checklist"}),"ui.checklist()")),Object(c.b)("h3",{id:"choice-group"},"Choice Group"),Object(c.b)("p",null,"Use a choice group (also called ",Object(c.b)("em",{parentName:"p"},"radio buttons"),") to allow switching between more than two mutually exclusive options."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#choice_group"}),"ui.choice_group()")),Object(c.b)("h3",{id:"color-picker"},"Color Picker"),Object(c.b)("p",null,"Use a color picker to allow pick colors or swatches."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#color_picker"}),"ui.color_picker()")),Object(c.b)("h3",{id:"combo-box"},"Combo Box"),Object(c.b)("p",null,"Use a combo box to allow picking from a list of choices, or typing in custom values."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#combobox"}),"ui.combobox()")),Object(c.b)("h3",{id:"date-picker"},"Date Picker"),Object(c.b)("p",null,"Use a date picker to allow picking a date."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#date_picker"}),"ui.date_picker()")),Object(c.b)("h3",{id:"dropdown"},"Dropdown"),Object(c.b)("p",null,"Use a dropdown to allow picking from a list of choices."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#dropdown"}),"ui.dropdown()")),Object(c.b)("h3",{id:"file-upload"},"File Upload"),Object(c.b)("p",null,"Use a file upload component to allow uploading files."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#file_upload"}),"ui.file_upload()")),Object(c.b)("h3",{id:"picker"},"Picker"),Object(c.b)("p",null,"Use a picker component to allow picking multiple tags or labels from a list."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#picker"}),"ui.picker()")),Object(c.b)("h3",{id:"range-slider"},"Range Slider"),Object(c.b)("p",null,"Use a range slider to allow selecting a range of values within another range."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#range_slider"}),"ui.range_slider()")),Object(c.b)("h3",{id:"slider"},"Slider"),Object(c.b)("p",null,"Use a slider to allow selecting a value from a range of values."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#slider"}),"ui.slider()")),Object(c.b)("h3",{id:"spin-box"},"Spin Box"),Object(c.b)("p",null,"Use a spin box to allow incrementally adjusting a value in small steps."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#spinbox"}),"ui.spinbox()")),Object(c.b)("h3",{id:"table-1"},"Table"),Object(c.b)("p",null,"Use a table to display tabular data, or allow selecting one or more rows."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#table"}),"ui.table()")),Object(c.b)("h3",{id:"textbox"},"Textbox"),Object(c.b)("p",null,"Use a textbox to allow typing in text."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#textbox"}),"ui.textbox()")),Object(c.b)("h3",{id:"toggle"},"Toggle"),Object(c.b)("p",null,"Use a toggle to allow switching between two mutually exclusive options (checked/unchecked or on/off), while producing an immediate result.\nSee ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#toggle"}),"ui.toggle()")),Object(c.b)("h2",{id:"commands"},"Commands"),Object(c.b)("h3",{id:"command"},"Command"),Object(c.b)("p",null,"Use a command to define menu items for cards and components that support menus and context-menus."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#command"}),"ui.command()")),Object(c.b)("h3",{id:"button"},"Button"),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"button()")," to display a clickable button."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#button"}),"ui.button()")),Object(c.b)("h3",{id:"button-set"},"Button Set"),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"buttons()")," to display two or more buttons side by side."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#buttons"}),"ui.buttons()")),Object(c.b)("h3",{id:"tabs"},"Tabs"),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"tabs()")," to display a set of tabs."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#tabs"}),"ui.tabs()")),Object(c.b)("h2",{id:"engagement"},"Engagement"),Object(c.b)("h3",{id:"message-bar"},"Message Bar"),Object(c.b)("p",null,"Use a message bar to display information, warning and error notifications."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#message_bar"}),"ui.message_bar()")),Object(c.b)("h3",{id:"progress-bar"},"Progress Bar"),Object(c.b)("p",null,"Use a progress bar to display progress information for tasks or operations."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#progress"}),"ui.progress()")),Object(c.b)("h3",{id:"stepper"},"Stepper"),Object(c.b)("p",null,"Use a stepper to display a sequence of steps in a process, and how many have been completed."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#stepper"}),"ui.stepper()")),Object(c.b)("h2",{id:"graphics"},"Graphics"),Object(c.b)("h3",{id:"visualization"},"Visualization"),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"visualization()")," to display visualizations defined using Q's native ",Object(c.b)("inlineCode",{parentName:"p"},"plot()")," API, based on the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://www.springer.com/gp/book/9780387245447"}),"Grammar of Graphics"),"."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#visualization"}),"ui.visualization()")),Object(c.b)("h3",{id:"vega-lite-visualization"},"Vega-lite Visualization"),Object(c.b)("p",null,"Use ",Object(c.b)("inlineCode",{parentName:"p"},"vega_visualization()")," to display visualization defined using ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://vega.github.io/vega-lite/"}),"Vega-Lite"),"."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#vega_visualization"}),"ui.vega_visualization()")),Object(c.b)("h2",{id:"utilities"},"Utilities"),Object(c.b)("h3",{id:"expander"},"Expander"),Object(c.b)("p",null,"Use an expander to show or hider a group of related components."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#expander"}),"ui.expander()")),Object(c.b)("h3",{id:"separator"},"Separator"),Object(c.b)("p",null,"Use a separator to visually separate components in to groups."),Object(c.b)("p",null,"See ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"/docs/api/ui#separator"}),"ui.separator()")))}p.isMDXComponent=!0}}]);