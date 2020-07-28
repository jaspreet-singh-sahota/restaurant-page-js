/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n    margin: 0;\\n    padding: 0;\\n    border: 0;\\n    font-size: 100%;\\n    font: inherit;\\n    vertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, \\nfooter, header, hgroup, menu, nav, section {\\n    display: block;\\n}\\nbody {\\n    line-height: 1;\\n}\\nol, ul {\\n    list-style: none;\\n}\\nblockquote, q {\\n    quotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n    content: '';\\n    content: none;\\n}\\ntable {\\n    border-collapse: collapse;\\n    border-spacing: 0;\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\n#content {\\n  position: relative;\\n  width: 100%;\\n  height: 100vh;\\n  overflow-y: hidden;\\n}\\n\\nvideo {\\n  width: 100%;\\n}\\n\\n.video-container {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100vh;\\n  z-index: -1;\\n}\\n\\n/* .color-overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  background-color: lightblue;\\n  width: 100%;\\n  height: 100vh;\\n  opacity: 0.5;\\n} */\\n\\na {\\n  text-decoration: none;\\n  color: inherit;\\n}\\n\\nheader nav {\\n  background-color: rgba(0, 0, 0, 0.2);\\n  display: flex;\\n  justify-content: space-between;\\n  width: 100vw;\\n  height: 75px;\\n}\\n\\n.fly-dining-logo {\\n  margin-left: 12vh;\\n}\\n\\n.header-logo {\\n  position: relative;\\n  top: 10.5px;\\n  width: 195px;\\n}\\n\\nnav .nav-list {\\n  width: 37%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  color: white;\\n  list-style-type: none;\\n  margin-right: 10vh;\\n}\\n\\n.nav-list .nav-links {\\n  padding: 22.5px;\\n  font-size: 25px;\\n  font-weight: bolder;\\n  letter-spacing: 2px;\\n}\\n\\n.nav-list .nav-links:hover {\\n  background-color: rgba(0, 0, 0, 0.7);\\n}\\n\\n.nav-list .active {\\n  color:#ff5a5f;\\n}\\n\\n.restaurant-info {\\n  font-size: 40px;\\n  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\\n  color: white;\\n  font-weight: bolder;\\n}\\n\\nbutton {\\n  font-size: 20px;\\n  background-color:#ff5a5f;\\n  border: 1px solid #ff5a5f;\\n  color: white;\\n  padding: 7px;\\n  cursor: pointer;\\n  border-radius: 5px;\\n  margin-top: 10px;\\n}\\n\\n.info {\\n  position: absolute;\\n  width: 35%;\\n  top: 40%;\\n  left: 65%;\\n}\\n  \\n.row {\\n  width: 27%;\\n  display: flex;\\n  flex-wrap: wrap;\\n  border: 2px solid #ff5a5f;\\n  height: 393px;\\n  margin: 1vw;\\n}\\n\\n.img {\\nheight: 347px;\\nwidth: 100%;\\nbackground-size:cover\\n}\\n\\n.details-container {\\n  width: 100%;\\n}\\nh3 {\\n  width: 100%;\\n  position: relative;\\n  bottom: 38px;\\n  color: white;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  padding: 4.7px;\\n  font-size: 25px;\\n}\\n\\n.price {\\n  position: absolute;\\n  padding-left: 9vw;\\n}\\n\\n.button {\\n  width: 100%;\\n  position: relative;\\n  bottom: 38px;\\n  background-color: #ff5a5f;\\n  color: white;\\n  font-weight: bold;\\n  font-size: 25px;\\n  padding: 10px;\\n  text-align: center;\\n  cursor: pointer;\\n}\\n\\n.flex-container {\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.slider-display-left {\\n  position: absolute;\\n  top: 50%;\\n  left: 2%;\\n}\\n\\n.slider-display-right {\\n  position: absolute;\\n  top: 50%;\\n  left: 95%;\\n}\\n\\n.background-blur {\\n  display: none;\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  height: 100vh;\\n  width: 100vw;\\n  backdrop-filter: blur(25px);\\n  border: 2px solid #ff5a5f;\\n  z-index: -1;\\n}\\n\\n.header-menu {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: content-box;\\n  position: absolute;\\n  top: 21%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  font-size: 3rem;\\n  font-weight: bolder;\\n  color: white;\\n}\\n\\n.avatar-container {\\n    flex: 1;\\n}\\n\\n.avatar-container {\\n    flex-basis: 250px;\\n}\\n\\n.column {\\n  flex: 1;\\n}\\n\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_background__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/background */ \"./src/js/background.js\");\n/* harmony import */ var _js_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/navbar */ \"./src/js/navbar.js\");\n/* harmony import */ var _js_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/contact */ \"./src/js/contact.js\");\n\n\n\n// import home from './js/home';\n// import menu from './js/menu';\n\n\nconst body = document.querySelector('body')\nconsole.log(body)\n\nconst content = document.getElementById('content');\ncontent.appendChild(_js_background__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\ncontent.appendChild(_js_navbar__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// content.appendChild(home);\n// content.appendChild(menu);\nbody.insertBefore(_js_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], body.childNodes[2]);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _background_mp4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background.mp4 */ \"./src/js/background.mp4\");\n\n\nconst backgroundVideo = (() => {\n    const divVideoContainer = document.createElement('div');\n    const divColorOverlay = document.createElement('div');\n    const video = document.createElement('video');\n    const source = document.createElement('source');\n    divVideoContainer.setAttribute('class', 'video-container');\n    divColorOverlay.setAttribute('class', 'color-overlay');\n    video.setAttribute('muted', '');\n    video.setAttribute('autoplay', '');\n    video.setAttribute('loop', '');\n    source.setAttribute('src', _background_mp4__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n    source.setAttribute('type', 'video/mp4');\n\n    video.appendChild(source);\n    divColorOverlay.appendChild(video);\n    divVideoContainer.appendChild(divColorOverlay);\n\n    video.muted = true;\n    video.play();\n\n    return divVideoContainer\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (backgroundVideo);\n\n//# sourceURL=webpack:///./src/js/background.js?");

/***/ }),

/***/ "./src/js/background.mp4":
/*!*******************************!*\
  !*** ./src/js/background.mp4 ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"background.mp4\");\n\n//# sourceURL=webpack:///./src/js/background.mp4?");

/***/ }),

/***/ "./src/js/contact.js":
/*!***************************!*\
  !*** ./src/js/contact.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contact = (() => {\n  const scriptTag = document.createElement('script')\n  scriptTag.setAttribute('src', 'https://maps.googleapis.com/maps/api/js?v=3.exp')\n\n\n  const googleDiv = document.createElement('div')\n\n\n\n    // <div id='draggable-google-map' style='height:70%;width:70%;'></div>\n\n\n  return scriptTag\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n//# sourceURL=webpack:///./src/js/contact.js?");

/***/ }),

/***/ "./src/js/navbar.js":
/*!**************************!*\
  !*** ./src/js/navbar.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst navbar = (() => {\n  const header = document.createElement('header');\n  const nav = document.createElement('nav');\n\n  const logoLink = document.createElement('a');\n  logoLink.setAttribute('class', 'fly-dining-logo');\n  logoLink.setAttribute('href', '#');\n  logoLink.setAttribute('id', 'logo');\n  \n  const logoImage = document.createElement('img');\n  logoImage.setAttribute('src', 'https://www.flydining.com/wp-content/uploads/2020/02/flydininglogo-compressor.png')\n  logoImage.setAttribute('alt', 'Fly Dining, Dinner in the Sky restaurant Franchise.')\n  logoImage.setAttribute('class', 'header-logo')\n  \n  const navList = document.createElement('ul');\n  navList.setAttribute('class', 'nav-list');\n  \n  const home = document.createElement('li');\n  const homeLink = document.createElement('a');\n  home.setAttribute('class', 'nav-links');\n  homeLink.setAttribute('href', '#');\n  homeLink.textContent = \"Home\";\n  \n  const menu = document.createElement('li');\n  const menuLink = document.createElement('a');\n  menu.setAttribute('class', 'nav-links');\n  menuLink.setAttribute('href', '#');\n  menuLink.textContent = 'Menu'\n\n  const contact = document.createElement('li');\n  const contactLink = document.createElement('a');\n  contact.setAttribute('class', 'nav-links');\n  contactLink.setAttribute('href', '#');\n  contactLink.textContent = 'Contact'\n\n  home.appendChild(homeLink);\n  menu.appendChild(menuLink);\n  contact.appendChild(contactLink);\n  navList.appendChild(home);\n  navList.appendChild(menu);\n  navList.appendChild(contact);\n\n  logoLink.appendChild(logoImage);\n  nav.appendChild(logoLink);\n  nav.appendChild(navList);\n  header.appendChild(nav);\n\n  return header\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbar);\n\n//# sourceURL=webpack:///./src/js/navbar.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/style.css?");

/***/ })

/******/ });