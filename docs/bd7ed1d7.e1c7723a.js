(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{222:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(286)),c={title:"Mode / Multicast"},i={unversionedId:"examples/counter-multicast",id:"examples/counter-multicast",isDocsHomePage:!1,title:"Mode / Multicast",description:"Launch the server in multicast mode to synchronize browser state across a user's clients.",source:"@site/docs/examples/counter-multicast.md",slug:"/examples/counter-multicast",permalink:"/docs/examples/counter-multicast",editUrl:"https://github.com/h2oai/qd/edit/master/website/docs/examples/counter-multicast.md",version:"current",sidebar:"someSidebar",previous:{title:"Mode / Broadcast",permalink:"/docs/examples/counter-broadcast"},next:{title:"Mode / Unicast",permalink:"/docs/examples/counter-unicast"}},s=[],u={rightToc:s};function l(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Launch the server in multicast mode to synchronize browser state across a user's clients.\nOpen ",Object(o.b)("inlineCode",{parentName:"p"},"/demo")," in multiple browsers and watch them synchronize in realtime."),Object(o.b)("div",{className:"cover",style:{backgroundImage:"url("+n(413).default+")"}}),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-py"}),"from h2o_q import Q, listen, ui, pack\n\n\nasync def main(q: Q):\n    count = q.user.count or 0\n    if 'increment' in q.args:\n        count += 1\n        q.user.count = count\n\n    items = pack([ui.button(name='increment', label=f'Count={count}')])\n\n    if count > 0:\n        form = q.page['example']\n        form.items = items\n    else:\n        q.page['example'] = ui.form_card(box='1 1 12 10', items=items)\n\n    await q.page.save()\n\n\nif __name__ == '__main__':\n    listen('/demo', main, mode='multicast')\n")))}l.isMDXComponent=!0},286:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,b=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?a.a.createElement(b,i(i({ref:t},u),{},{components:n})):a.a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},413:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAABSCAYAAAC7Zl0HAAAABHNCSVQICAgIfAhkiAAAABl0RVh0U29mdHdhcmUAZ25vbWUtc2NyZWVuc2hvdO8Dvz4AAAAtdEVYdENyZWF0aW9uIFRpbWUATW9uIDI4IFNlcCAyMDIwIDAyOjA5OjE0IFBNIFBEVKhCfrcAAAcISURBVHic7d1/TJT3HcDxN7BguFvAaFMkBkTTKSAYDxJElIIpE2KnbQGpA9TD/jHB6vyxIWhqrZ2VX+pEreI/hbWjiWLbKMLQOa9C1jBdAB0/MmA1CEETWEDkUMR79od6CdRV775QjuTzSi65PM9zz/N9cu88P3iSw0nTNA0h7OQ80QMQk5sEJJRIQEKJBCSUSEBCiQQklEhAQokEJJRIQEKJBCSUSEBCiQQklEhAQokEJJRIQEKJBCSUSEBCiQQklEhAQokEJJRIQEKJBCSUSEBCyc/s+dC/bt7AZLrCoNk81uMR48RNpyMqahmBQQvGdL12BWQyXSEhIZEZXl5jOhgxfu50dVFaenrMA7LrFDZoNks8k8wML69xOWPINZBQIgEJJRKQUCIBCSUSkFAiAQklEpBQ4nAB9ff3c/jQIX715gqWhC8mMXE1xcVFDA0NTfTQ7HaqsJCQYAMhwQZ6enqs04eGhjhaUEBszHIWh4WRkpzE1avfTuBIbedQAfX392Ncv44vvvgci8VCYFAQPd3dFBw5ws6MDH7qX+PLz88jJNhAXV2t3eu4e/cuxcVFz52XfeAARUWf8aqnJ7GxsXR0dLBj+3bq6+rs3t5PzaECOn78GLdu3eLtd97hfNkFCgtPUXahnNDQUK5e/ZYLZWUTPUSbHfnjYTRNw2vUX+7NZjNlZeeZO3cuRUXFfLh3Lzm5eVgsFs6eLZ2g0drOYQJ69OgRFeXleHh4kJGxExcXFwDc3Nz47dathIaG0t3dbV3+n9evk2pcT/jiMJb/MpqD+fk8fPgQgN7eXkKCDby/aZN1+cbGRkKCDXyyfz8AOdnZhAQbMJlMrE1JZnHYItatTaGttRWArMxMviwpAeC9DRtI2/gbm/epvq6OyspKUlLWEjT6GZSm8cEHe9iZmYmz85Ovwdd3FoB1PyYDhwmos7OT+/fvYzAYmDJlyoh5fn7+nDhZiDE1FYDm5ibS09Nob28nKTmZwMBASkr+zK6sTJu3m5uTQ2BgEOHh4TQ0NLB79y4AVry5wrpMVFQU8fEJAFRWVlqvZ0a/ampqrJ+xWCzk5eUybdo0jEbjD7ar0+tZuWoVCxcarNMqyisARkxzdHY9jR8PfX19AHh4TH3hskWfFTE8PMy+fR+zZOlSNE3jvQ2pmEwm2lpbmf7KKy+9XWOqkcTEdwFY824iLS0t9Pb2EhHxOr9OSuLLkhLWrltn/VK9vb2tMY3m6elpfX/u3DmamprI2rUbnV7/wnFcv3aNkydPMGfOHOLi4196/BPNYQJyd3cHoO9e3wuXbW5uwsXFhUVhYQA4OTkRvmQJ9fX1NDU1sTQi4qW3O2+en/W9j48PLS0tmM1mpk59fsgBAQEEBAT86DoHBgY4fvwYs2fPJi4u7oVjaGxsZNv2bej1eg4eOvyDI7Ajc5iAZs6ciU6vp662lqGhIVxdXa3zWltbOFVYSGjoIhJWr0bTNJycnEau4NkN2ujpTz1+/Pi5059df7ysxsZGvvn66+fOS0pOxtfXl9LSM/y3pwevGTPY/4ePAbh4sRKAffs+IjU11XpEa2tr4/1N6aBpFBw9ho+Pj03jmWgOE5CrqyuxMbF89dVZDubnsTMzC2dnZwYHBzl08CA1NTUsXx4DgL9/AB0dHXz33d+JiHgdi8VCdXUVAH5+89DpdAB0dNy2xlZXa/utuBNPYhx+NGyddvv27f97l/RGdDS+vr7c67sHQENDAw0NDSOWqa6qYlnUMhYuNNDZ2UF62kYGBgYoKDjK/PnzbR7jRHOYgAA2b97MtWv/oLS0lKqq6qenlH/T29tLZGQkb0RHA7DeaOTKlb/x4Z49rFy5iu+//w83b94kMjKS1177BQALFizgxo0bbEpPw8vLi+rqapvH8+yapqDgCPEJCbz11tvExMQQExPz4/uxZQubt2wZMS3j97/j8uXLXLz0V6ZPn86DBw9I27iR7u5uvL29Ka8op7yiHAAPdw+279hh83gngsPchQG4e3hQ/KfPWbNmDQB1dbXo9T9n69Zt5OblW09b/v7+fPrpCWbNmsWZM6dpbm4mKSmZA9k51nXt3fsRAQEB1NbW0traRlbWLpvHExcfT3R0NO3t7fylomJsdvKpgYEBOjs7gSdHtbLz562vS5cujum2xpVmh9zsT+z5mJhg4/G9OdQRSEw+EpBQIgEJJRKQUCIBCSUSkFAiAQklEpBQYldAbjodd7q6xnosYhzd6erC7ekzwrFk17OwqKhllJaelp93mUSe/bzLWHPSNPm/8cJ+cg0klEhAQokEJJRIQEKJBCSUSEBCiQQklEhAQokEJJRIQEKJBCSUSEBCiQQklEhAQokEJJRIQEKJBCSUSEBCiQQklEhAQokEJJRIQEKJBCSUSEBCiQQklPwP/AdkyB0kEsMAAAAASUVORK5CYII="}}]);