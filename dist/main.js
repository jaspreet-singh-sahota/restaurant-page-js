!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){var o=t(1),r=t(2);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);e.exports=r.locals||{}},function(e,n,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function c(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},o=[],r=0;r<e.length;r++){var i=e[r],s=n.base?i[0]+n.base:i[0],l=t[s]||0,u="".concat(s," ").concat(l);t[s]=l+1;var d=c(u),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(p)):a.push({identifier:u,updater:v(p,n),references:1}),o.push(u)}return o}function l(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u,d=(u=[],function(e,n){return u[e]=n,u.filter(Boolean).join("\n")});function p(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(n,r);else{var i=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function f(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,m=0;function v(e,n){var t,o,r;if(n.singleton){var i=m++;t=h||(h=l(n)),o=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=l(n),o=f.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=r());var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=c(t[o]);a[r].references--}for(var i=s(e,n),l=0;l<t.length;l++){var u=c(t[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}t=i}}}},function(e,n,t){(n=t(3)(!1)).push([e.i,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n#content {\n  position: relative;\n  width: 100%;\n  height: 100vh;\n  overflow-y: hidden;\n}\n\nvideo {\n  width: 100%;\n}\n\n.video-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  z-index: -1;\n}\n\n/* .color-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: lightblue;\n  width: 100%;\n  height: 100vh;\n  opacity: 0.5;\n} */\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\nheader nav {\n  background-color: rgba(0, 0, 0, 0.2);\n  display: flex;\n  justify-content: space-between;\n  width: 100vw;\n}\n\n.fly-dining-logo {\n  margin: 2vh 0 2vh 8vh;\n}\n\n.header-logo {\n  width: 200px;\n}\n\nnav .nav-list {\n  width: 37%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  list-style-type: none;\n  margin-right: 10vh;\n}\n\n.nav-list .nav-links {\n  padding: 28px;\n  font-size: 25px;\n  font-weight: bolder;\n  letter-spacing: 2px;\n}\n\n.nav-list .nav-links:hover {\n  background-color: rgba(0, 0, 0, 0.7);\n}\n\n.nav-list .active {\n  color:#ff5a5f;\n}\n\n.restaurant-info {\n  font-size: 40px;\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n  color: white;\n  /* background-color: rgba(0, 0, 0, 0.2); */\n  font-weight: bolder;\n}\n\nbutton {\n  font-size: 20px;\n  background-color:#ff5a5f;\n  border: 1px solid #ff5a5f;\n  color: white;\n  padding: 7px;\n  cursor: pointer;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n\n.info {\n  position: absolute;\n  width: 35%;\n  top: 40%;\n  left: 65%;\n}\n\n\n\n",""]),e.exports=n},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",o=e[3];if(!o)return t;if(n&&"function"==typeof btoa){var r=(a=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([r]).join("\n")}var a,c,s;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},function(e,n,t){"use strict";t.r(n);t(0);var o=t.p+"background.mp4";var r=(()=>{const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("video"),r=document.createElement("source");return e.setAttribute("class","video-container"),n.setAttribute("class","color-overlay"),t.setAttribute("muted",""),t.setAttribute("autoplay",""),t.setAttribute("loop",""),r.setAttribute("src",o),r.setAttribute("type","video/mp4"),t.appendChild(r),n.appendChild(t),e.appendChild(n),t.muted=!0,t.play(),e})();var i=(()=>{const e=document.createElement("header"),n=document.createElement("nav"),t=document.createElement("a");t.setAttribute("class","fly-dining-logo"),t.setAttribute("href","#"),t.setAttribute("id","logo");const o=document.createElement("img");o.setAttribute("src","https://www.flydining.com/wp-content/uploads/2020/02/flydininglogo-compressor.png"),o.setAttribute("alt","Fly Dining, Dinner in the Sky restaurant Franchise."),o.setAttribute("class","header-logo");const r=document.createElement("ul");r.setAttribute("class","nav-list");const i=document.createElement("li"),a=document.createElement("a");i.setAttribute("class","nav-links"),a.setAttribute("href","#"),a.textContent="Home";const c=document.createElement("li"),s=document.createElement("a");c.setAttribute("class","nav-links"),s.setAttribute("href","#"),s.textContent="Menu";const l=document.createElement("li"),u=document.createElement("a");l.setAttribute("class","nav-links"),u.setAttribute("href","#"),u.textContent="Contact";const d=document.createElement("div"),p=document.createElement("p");d.setAttribute("class","info"),p.setAttribute("class","restaurant-info"),p.textContent="MOST AMAZING DINING RIDE";const f=document.createElement("button");return f.textContent="Book Now",d.appendChild(p),d.appendChild(f),i.appendChild(a),c.appendChild(s),l.appendChild(u),r.appendChild(i),r.appendChild(c),r.appendChild(l),t.appendChild(o),n.appendChild(t),n.appendChild(r),e.appendChild(n),e.appendChild(d),e})();const a=document.getElementById("content");a.appendChild(r),a.appendChild(i)}]);