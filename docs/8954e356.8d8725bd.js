(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),i=(n(0),n(286)),o={title:"Graphics / Primitives"},p={unversionedId:"examples/graphics-primitives",id:"examples/graphics-primitives",isDocsHomePage:!1,title:"Graphics / Primitives",description:"Use the graphics module to render and update shapes.",source:"@site/docs/examples/graphics-primitives.md",slug:"/examples/graphics-primitives",permalink:"/docs/examples/graphics-primitives",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/graphics-primitives.md",version:"current",sidebar:"someSidebar",previous:{title:"Mode / Unicast",permalink:"/docs/examples/counter-unicast"},next:{title:"Graphics / Spline",permalink:"/docs/examples/graphics-spline"}},c=[],s={rightToc:c};function l(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Use the graphics module to render and update shapes."),Object(i.b)("div",{className:"cover",style:{backgroundImage:"url("+n(379).default+")"}}),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_q import site, ui, graphics as g\n\n# Create some shapes\narc = g.arc(r1=25, r2=50, a1=90, a2=180)\ncircle = g.circle(cx=25, cy=25, r=25)\nellipse = g.ellipse(cx=25, cy=25, rx=25, ry=20)\nimage = g.image(width=50, height=50, href='https://www.python.org/static/community_logos/python-powered-h-140x182.png')\nline = g.line(x1=0, y1=0, x2=50, y2=50)\npath = g.path(d='M 0,0 L 50,50 L 50,0 L 0,50 z')\npath2 = g.path(d=g.p().M(0, 0).L(50, 50).L(50, 0).L(0, 50).z().d())  # same effect as above, but programmable.\npath3 = g.p().M(0, 0).L(50, 50).L(50, 0).L(0, 50).z().path()  # same effect as above, but a tad more concise.\npolygon = g.polygon(points='0,0 50,50 50,0 0,50')\npolyline = g.polyline(points='0,0 50,50 50,0 0,50')\nrect = g.rect(x=0, y=0, width=50, height=50)\nrounded_rect = g.rect(x=0, y=0, width=50, height=50, rx=10)\ntext = g.text(x=0, y=48, text='Z', font_size='4em')\n\n# Collect 'em all\nshapes = [arc, circle, ellipse, image, line, path, path2, path3, polygon, polyline, rect, rounded_rect, text]\n\n# Apply fill/stroke for each shape\nfor shape in shapes:\n    shape.fill = 'none' if g.type_of(shape) == 'polyline' else 'crimson'\n    shape.stroke = 'darkred'\n    shape.stroke_width = 5\n\n# Lay out shapes vertically\ny = 10\nfor shape in shapes:\n    shape.transform = f'translate(10,{y})'\n    y += 60\n\n# Add shapes to the graphics card\npage = site['/demo']\npage['example'] = ui.graphics_card(\n    box='1 1 1 10', view_box='0 0 70 800', width='100%', height='100%',\n    stage=g.stage(\n        arc=arc,\n        circle=circle,\n        ellipse=ellipse,\n        image=image,\n        line=line,\n        path=path,\n        path2=path2,\n        path3=path3,\n        polygon=polygon,\n        polyline=polyline,\n        rect=rect,\n        rounded_rect=rounded_rect,\n        text=text,\n    ),\n)\n\npage.save()\n")))}l.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,d=u["".concat(o,".").concat(m)]||u[m]||h[m]||i;return n?a.a.createElement(d,p(p({ref:t},s),{},{components:n})):a.a.createElement(d,p({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},379:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/graphics-primitives-069da2917a0f9226163992fa997d7064.png"}}]);