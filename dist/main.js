/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/homepageStyle.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/homepageStyle.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Magic-Retro.ttf */ "./src/Magic-Retro.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Black.ttf */ "./src/Roboto-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./unicorn-school.otf */ "./src/unicorn-school.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./restaurant-outside.jpeg */ "./src/restaurant-outside.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'logoFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'mainFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'tabsFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n\nbody{\n    padding: 0;\n    margin: 0;\n    height: 100%;\n}\n.content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    background-color: brown;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    height: 17vh;\n    min-height: 100px;\n    width: 100%;\n    background-color: rgb(0, 0, 0);\n    gap: 20%;\n    color: white;\n    border-bottom-color: white;\n    border-bottom-style: solid;\n}\n\n.logo-container {\n    width: 20%;\n    min-width: 170px;\n    padding: 5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    gap: 5px;\n}\n\n.restaurant-name{\n    font-size: 2.5rem;\n    font-family: 'logoFont';\n    margin: 0;\n\n}\n\nimg {\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.tabs-container{\n    display: grid;\n    grid-template-rows: 2fr 1fr;\n    width: 100%;\n}\n.tabs{\n    display: flex;\n    flex-direction: row;\n    gap: 25px;\n    align-items: center;\n}\n.tab{\n    display: flex;\n    height: 100%;\n    min-width: 15%;\n    flex-direction: column;\n    justify-content: center;\n    padding-left: 5px;\n    padding-right: 5px;\n    border-color: rgb(255, 255, 255);\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom: 0;\n    border-style: solid;\n    text-align: center;\n    font-family: 'tabsFont';\n    font-size: 1.5rem;\n}\n\n\n.main{\n    height: 100vh;\n    margin-left: 10%;\n    margin-right: 10%;\n    max-width: 80%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    font-family: 'mainFont';\n}\n\n.main-text-container{\n    margin-top: 10%;\n    margin-left: 10%;\n    margin-right: 40%;\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-radius: 15px;\n    background-color: rgb(0, 0, 0);\n    color: white;\n}", "",{"version":3,"sources":["webpack://./src/homepageStyle.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,+DAAgD;IAChD,gBAAgB;IAChB,kBAAkB;EACpB;EACA;IACE,uBAAuB;IACvB,+DAAiD;IACjD,gBAAgB;IAChB,kBAAkB;EACpB;EACA;IACE,uBAAuB;IACvB,+DAAmD;IACnD,gBAAgB;IAChB,kBAAkB;EACpB;;AAEF;IACI,UAAU;IACV,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,WAAW;IACX,8BAA8B;IAC9B,QAAQ;IACR,YAAY;IACZ,0BAA0B;IAC1B,0BAA0B;AAC9B;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,SAAS;;AAEb;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,WAAW;AACf;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,YAAY;IACZ,cAAc;IACd,sBAAsB;IACtB,uBAAuB;IACvB,iBAAiB;IACjB,kBAAkB;IAClB,gCAAgC;IAChC,2BAA2B;IAC3B,4BAA4B;IAC5B,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,yDAAgD;IAChD,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,oBAAoB;IACpB,mBAAmB;IACnB,8BAA8B;IAC9B,YAAY;AAChB","sourcesContent":["@font-face {\n    font-family: 'logoFont';\n    src: url('./Magic-Retro.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'mainFont';\n    src: url('./Roboto-Black.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'tabsFont';\n    src: url('./unicorn-school.otf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n\nbody{\n    padding: 0;\n    margin: 0;\n    height: 100%;\n}\n.content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 100%;\n    width: 100%;\n    background-color: brown;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    height: 17vh;\n    min-height: 100px;\n    width: 100%;\n    background-color: rgb(0, 0, 0);\n    gap: 20%;\n    color: white;\n    border-bottom-color: white;\n    border-bottom-style: solid;\n}\n\n.logo-container {\n    width: 20%;\n    min-width: 170px;\n    padding: 5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    gap: 5px;\n}\n\n.restaurant-name{\n    font-size: 2.5rem;\n    font-family: 'logoFont';\n    margin: 0;\n\n}\n\nimg {\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.tabs-container{\n    display: grid;\n    grid-template-rows: 2fr 1fr;\n    width: 100%;\n}\n.tabs{\n    display: flex;\n    flex-direction: row;\n    gap: 25px;\n    align-items: center;\n}\n.tab{\n    display: flex;\n    height: 100%;\n    min-width: 15%;\n    flex-direction: column;\n    justify-content: center;\n    padding-left: 5px;\n    padding-right: 5px;\n    border-color: rgb(255, 255, 255);\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom: 0;\n    border-style: solid;\n    text-align: center;\n    font-family: 'tabsFont';\n    font-size: 1.5rem;\n}\n\n\n.main{\n    height: 100vh;\n    margin-left: 10%;\n    margin-right: 10%;\n    max-width: 80%;\n    background-image: url(./restaurant-outside.jpeg);\n    font-family: 'mainFont';\n}\n\n.main-text-container{\n    margin-top: 10%;\n    margin-left: 10%;\n    margin-right: 40%;\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    border-radius: 15px;\n    background-color: rgb(0, 0, 0);\n    color: white;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/menuPageStyle.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menuPageStyle.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Magic-Retro.ttf */ "./src/Magic-Retro.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Roboto-Black.ttf */ "./src/Roboto-Black.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./unicorn-school.otf */ "./src/unicorn-school.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./restaurant-outside.jpeg */ "./src/restaurant-outside.jpeg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'logoFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'mainFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'tabsFont';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n\nbody{\n    padding: 0;\n    margin: 0;\n}\n.content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* height: 100%; */\n    /* width: 100%; */\n    background-color: brown;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    height: 17vh;\n    min-height: 100px;\n    width: 100%;\n    background-color: rgb(0, 0, 0);\n    gap: 15%;\n    color: white;\n    border-bottom-color: white;\n    border-bottom-style: solid;\n}\n\n.logo-container {\n    width: 20%;\n    min-width: 170px;\n    padding: 5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    gap: 5px;\n}\n\n.restaurant-name{\n    font-size: 2.5rem;\n    font-family: 'logoFont';\n    margin: 0;\n\n}\n\nimg {\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.tabs-container{\n    display: grid;\n    grid-template-rows: 2fr 1fr;\n    width: 100%;\n}\n.tabs{\n    display: flex;\n    flex-direction: row;\n    gap: 25px;\n    align-items: center;\n}\n.tab{\n    height: 100%;\n    min-width: 15%;\n    align-items: center;\n    background-color: black;\n    color: white;\n    border-color: rgb(255, 255, 255);\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom: 0;\n    border-style: solid;\n    font-family: 'tabsFont';\n    font-size: 1.5rem;\n}\n\n.tab:hover{\n    background-color: white;\n    color: black;\n    align-items: center;\n}\n\n\n.main{\n    height: auto;\n    min-height: 100vh;\n    margin-left: 10%;\n    margin-right: 10%;\n    max-width: 80%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    font-family: 'mainFont';\n}\n\n.menu-text-container{\n    background-color: white;\n    margin-top: 10%;\n    margin-left: 15%;\n    margin-right: 15%;\n    display: grid;\n    grid-template-columns: repeat(3 1fr);\n    gap: 30px;\n    padding: 20px;\n    grid-row: auto;\n    justify-content: center;\n    margin-bottom: 10%;\n}\n\n.menu-heading{\n    display: flex;\n    grid-column: 1/4;\n    justify-content: space-around;\n}\n\n.appitizer-heading, .entree-heading, .drinks-heading{\n    display: flex;\n    grid-column: 1/4;\n    justify-content: space-around;\n}\n\n.menu-item-container{\n    text-align: center;\n}\n\n.menu-item-container:last-child{\n    grid-column: 1/4;\n}", "",{"version":3,"sources":["webpack://./src/menuPageStyle.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,+DAAgD;IAChD,gBAAgB;IAChB,kBAAkB;EACpB;EACA;IACE,uBAAuB;IACvB,+DAAiD;IACjD,gBAAgB;IAChB,kBAAkB;EACpB;EACA;IACE,uBAAuB;IACvB,+DAAmD;IACnD,gBAAgB;IAChB,kBAAkB;EACpB;;AAEF;IACI,UAAU;IACV,SAAS;AACb;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,WAAW;IACX,8BAA8B;IAC9B,QAAQ;IACR,YAAY;IACZ,0BAA0B;IAC1B,0BAA0B;AAC9B;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,iBAAiB;IACjB,uBAAuB;IACvB,SAAS;;AAEb;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,WAAW;AACf;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,cAAc;IACd,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,gCAAgC;IAChC,2BAA2B;IAC3B,4BAA4B;IAC5B,gBAAgB;IAChB,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,mBAAmB;AACvB;;;AAGA;IACI,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,iBAAiB;IACjB,cAAc;IACd,yDAAgD;IAChD,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,eAAe;IACf,gBAAgB;IAChB,iBAAiB;IACjB,aAAa;IACb,oCAAoC;IACpC,SAAS;IACT,aAAa;IACb,cAAc;IACd,uBAAuB;IACvB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,6BAA6B;AACjC;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;AACpB","sourcesContent":["@font-face {\n    font-family: 'logoFont';\n    src: url('./Magic-Retro.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'mainFont';\n    src: url('./Roboto-Black.ttf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'tabsFont';\n    src: url('./unicorn-school.otf') format('truetype');\n    font-weight: 600;\n    font-style: normal;\n  }\n\nbody{\n    padding: 0;\n    margin: 0;\n}\n.content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    /* height: 100%; */\n    /* width: 100%; */\n    background-color: brown;\n}\n\n.header {\n    display: flex;\n    flex-direction: row;\n    height: 17vh;\n    min-height: 100px;\n    width: 100%;\n    background-color: rgb(0, 0, 0);\n    gap: 15%;\n    color: white;\n    border-bottom-color: white;\n    border-bottom-style: solid;\n}\n\n.logo-container {\n    width: 20%;\n    min-width: 170px;\n    padding: 5px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    align-items: center;\n    gap: 5px;\n}\n\n.restaurant-name{\n    font-size: 2.5rem;\n    font-family: 'logoFont';\n    margin: 0;\n\n}\n\nimg {\n    max-width: 100%;\n    max-height: 100%;\n}\n\n.tabs-container{\n    display: grid;\n    grid-template-rows: 2fr 1fr;\n    width: 100%;\n}\n.tabs{\n    display: flex;\n    flex-direction: row;\n    gap: 25px;\n    align-items: center;\n}\n.tab{\n    height: 100%;\n    min-width: 15%;\n    align-items: center;\n    background-color: black;\n    color: white;\n    border-color: rgb(255, 255, 255);\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    border-bottom: 0;\n    border-style: solid;\n    font-family: 'tabsFont';\n    font-size: 1.5rem;\n}\n\n.tab:hover{\n    background-color: white;\n    color: black;\n    align-items: center;\n}\n\n\n.main{\n    height: auto;\n    min-height: 100vh;\n    margin-left: 10%;\n    margin-right: 10%;\n    max-width: 80%;\n    background-image: url(./restaurant-outside.jpeg);\n    font-family: 'mainFont';\n}\n\n.menu-text-container{\n    background-color: white;\n    margin-top: 10%;\n    margin-left: 15%;\n    margin-right: 15%;\n    display: grid;\n    grid-template-columns: repeat(3 1fr);\n    gap: 30px;\n    padding: 20px;\n    grid-row: auto;\n    justify-content: center;\n    margin-bottom: 10%;\n}\n\n.menu-heading{\n    display: flex;\n    grid-column: 1/4;\n    justify-content: space-around;\n}\n\n.appitizer-heading, .entree-heading, .drinks-heading{\n    display: flex;\n    grid-column: 1/4;\n    justify-content: space-around;\n}\n\n.menu-item-container{\n    text-align: center;\n}\n\n.menu-item-container:last-child{\n    grid-column: 1/4;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/homepageStyle.css":
/*!*******************************!*\
  !*** ./src/homepageStyle.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_homepageStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./homepageStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/homepageStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_homepageStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_homepageStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_homepageStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_homepageStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/menuPageStyle.css":
/*!*******************************!*\
  !*** ./src/menuPageStyle.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menuPageStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./menuPageStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/menuPageStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menuPageStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menuPageStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menuPageStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menuPageStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildHomepage": () => (/* binding */ buildHomepage)
/* harmony export */ });
/* harmony import */ var _homepageStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepageStyle.css */ "./src/homepageStyle.css");
/* harmony import */ var _cocktail_shaker_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cocktail-shaker.png */ "./src/cocktail-shaker.png");




const buildHomepage = function () {
    const content = document.getElementById('content')
    content.classList.add('content')

    //created elements
    const header = document.createElement('div');
    const main = document.createElement('div');


    //header elements
    const logoContainer = document.createElement('div')
    const logoImage = new Image()
    logoImage.src = _cocktail_shaker_png__WEBPACK_IMPORTED_MODULE_1__
    const restaurantName = document.createElement('h3')
    restaurantName.textContent = "The Den"

    const tabsContainer = document.createElement('div')
    const aboveTabs = document.createElement('div')
    const tabs = document.createElement('div')
    const homeTabContainer = document.createElement('button')
    homeTabContainer.textContent = "Home"
    const menuTabContainer = document.createElement('button')
    menuTabContainer.textContent = "Menu"
    const aboutTabContainer = document.createElement('button')
    aboutTabContainer.textContent = "About"
    const contactTabContainer = document.createElement('button')
    contactTabContainer.textContent = "Contact"
    //header element classes
    header.classList.add('header')
    logoContainer.classList.add('logo-container')
    logoImage.classList.add('logo-image')
    restaurantName.classList.add('restaurant-name')
    tabsContainer.classList.add('tabs-container')
    tabs.classList.add('tabs')
    homeTabContainer.classList.add('tab')
    homeTabContainer.setAttribute('id', 'homeTabButton')
    menuTabContainer.classList.add('tab')
    menuTabContainer.setAttribute('id', 'menuTabButton')
    aboutTabContainer.classList.add('tab')
    aboutTabContainer.setAttribute('id', 'aboutTabButton')
    contactTabContainer.classList.add('tab')
    contactTabContainer.setAttribute('id', 'contactTabButton')
    //append header elements
    logoContainer.appendChild(logoImage)
    logoContainer.appendChild(restaurantName)
    header.appendChild(logoContainer)
    tabs.appendChild(homeTabContainer)
    tabs.appendChild(menuTabContainer)
    tabs.appendChild(aboutTabContainer)
    tabs.appendChild(contactTabContainer)
    tabsContainer.appendChild(aboveTabs)
    tabsContainer.appendChild(tabs)
    header.appendChild(tabsContainer)



    //main elements
    const mainTextContainer = document.createElement('div')
    const textHeading = document.createElement('h1')
    textHeading.textContent = "\"The best meal I've ever had\""
    const textHeading2 = document.createElement('h1')
    textHeading2.textContent = "-Dean Stirrat"
    const textBody = document.createElement('p')
    textBody.textContent = "His tota magna timeam an, eu sit iudico epicuri, mea ex epicurei eloquentiam. At quo alii minim torquatos, mea et brute assum. At clita accusam mea. Vel nemore numquam no."
    //main element classes
    main.classList.add('main')
    mainTextContainer.classList.add('main-text-container')
    textHeading.classList.add('text-heading')
    textBody.classList.add('text-body')
    //append main elements
    mainTextContainer.appendChild(textHeading)
    mainTextContainer.appendChild(textHeading2)
    mainTextContainer.appendChild(textBody)
    main.appendChild(mainTextContainer)


    //append content elements
    content.appendChild(header)
    content.appendChild(main)
}

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildMenuPage": () => (/* binding */ buildMenuPage)
/* harmony export */ });
/* harmony import */ var _menuPageStyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuPageStyle.css */ "./src/menuPageStyle.css");
/* harmony import */ var _cocktail_shaker_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cocktail-shaker.png */ "./src/cocktail-shaker.png");




const buildMenuPage = function () {
    const content = document.getElementById('content')
    content.classList.add('content')

    //created elements
    const header = document.createElement('div');
    const main = document.createElement('div');


    //header elements
    const logoContainer = document.createElement('div')
    const logoImage = new Image()
    logoImage.src = _cocktail_shaker_png__WEBPACK_IMPORTED_MODULE_1__
    const restaurantName = document.createElement('h3')
    restaurantName.textContent = "The Den"

    const tabsContainer = document.createElement('div')
    const aboveTabs = document.createElement('div')
    const tabs = document.createElement('div')
    const homeTabContainer = document.createElement('button')
    homeTabContainer.textContent = "Home"
    const menuTabContainer = document.createElement('button')
    menuTabContainer.textContent = "Menu"
    const aboutTabContainer = document.createElement('button')
    aboutTabContainer.textContent = "About"
    const contactTabContainer = document.createElement('button')
    contactTabContainer.textContent = "Contact"
    //header element classes
    header.classList.add('header')
    logoContainer.classList.add('logo-container')
    logoImage.classList.add('logo-image')
    restaurantName.classList.add('restaurant-name')
    tabsContainer.classList.add('tabs-container')
    tabs.classList.add('tabs')
    homeTabContainer.classList.add('tab')
    homeTabContainer.setAttribute('id', 'homeTabButton')
    menuTabContainer.classList.add('tab')
    menuTabContainer.setAttribute('id', 'menuTabButton')
    aboutTabContainer.classList.add('tab')
    aboutTabContainer.setAttribute('id', 'aboutTabButton')
    contactTabContainer.classList.add('tab')
    contactTabContainer.setAttribute('id', 'contactTabButton')
    //append header elements
    logoContainer.appendChild(logoImage)
    logoContainer.appendChild(restaurantName)
    header.appendChild(logoContainer)
    tabs.appendChild(homeTabContainer)
    tabs.appendChild(menuTabContainer)
    tabs.appendChild(aboutTabContainer)
    tabs.appendChild(contactTabContainer)
    tabsContainer.appendChild(aboveTabs)
    tabsContainer.appendChild(tabs)
    header.appendChild(tabsContainer)



    //main elements
    const menuTextContainer = document.createElement('div')
    const menuHeading = document.createElement('h1')
    menuHeading.textContent = "Menu"
    const appitizerHeader = document.createElement('h2')
    appitizerHeader.textContent = "Appitizers"
    const entreeHeading = document.createElement('h2')
    entreeHeading.textContent = "Entrees"
    const drinksHeading = document.createElement('h2')
    drinksHeading.textContent = "Drink Selection"

    const menuItemContainer1 = document.createElement('div')
    const menuItemContainer2 = document.createElement('div')
    const menuItemContainer3 = document.createElement('div')
    const menuItemContainer4 = document.createElement('div')
    const menuItemContainer5 = document.createElement('div')
    const menuItemContainer6 = document.createElement('div')
    const menuItemContainer7 = document.createElement('div')
    const menuItemContainer8 = document.createElement('div')
    const menuItemContainer9 = document.createElement('div')
    const menuItemContainer10 = document.createElement('div')
    const menuItemContainer11 = document.createElement('div')
    const menuItemContainer12 = document.createElement('div')

    const menuItem1 = document.createElement('p')
    menuItem1.textContent = "APPETIZER PLATER - (mozzarella (4pcs.), zuccidi (4pcs), jahpeno cheese popper (4pcs), breaded mushroom (6pca), onion rings (6pcs))"
    const menuItem2 = document.createElement('p')
    menuItem2.textContent = "DOUBLE CRUNCH BONE-IN WINGS - Twice battered and fried, these crisp outside, tender inside wings are tossed in your choice of sauce. Served with Bleu cheese or house-made ranch dressing with real buttermilk."
    const menuItem3 = document.createElement('p')
    menuItem3.textContent = "BREW PUB PRETZELS & BEER CHEESE DIP - The perfect balance of crunchy and chewy, warm pretzel sticks are ready to dip in BLUE MOON® white Cheddar beer cheese and honey Dijon mustard."
    const menuItem4 = document.createElement('p')
    menuItem4.textContent = "Steaks provided by SNAKE RIVER - Includes mash potatoes and seasonal veggies with a choice of house glaze or Szechuan pepper corn crust"
    const menuItem5 = document.createElement('p')
    menuItem5.textContent = "Korean BBQ Short Ribs - 1lb beef ribs in house marinade served with sautéed veggies, mushrooms, and 2 styles of kimchi (cucumber and cabbage) "
    const menuItem6 = document.createElement('p')
    menuItem6.textContent = "Orange Chicken - Battered and tossed in a house made orange sauce"
    const menuItem7 = document.createElement('p')
    menuItem7.textContent = "Pan Seared Sesame Crusted Wild Yellowfin Tuna (Ahi)."
    const menuItem8 = document.createElement('p')
    menuItem8.textContent = "FLAT IRON STEAK SHISH KABOB - Charbroiled, All Natural, Antibiotic-and-Hormone Free Flat Iron Steak from"
    const menuItem9 = document.createElement('p')
    menuItem9.textContent = "CHARBROILED CHICKEN SHISH KABOB (A MUST) - Charbroiled Wayne Farms Fresh Tenders with No Antibiotics. Skewered with Grilled Vegetables."
    const menuItem10 = document.createElement('p')
    menuItem10.textContent = "COMBO KABOB - Charbroiled ABF (Antibiotic & Hormone Free) Chicken Tenders Skewered With Grilled Vegetables and a Half Pound (1 Skewer) of Charbroiled, All-Natural, ABF (Antibiotic & Hormone Free) Seasoned Ground Beef."
    const menuItem11 = document.createElement('p')
    menuItem11.textContent = "COMBO KA-BOX - Charbroiled ABF (Antibiotic & Hormone Free) Chicken Tenders in a Skewer With Grilled Vegetables and 1/2 Pound (1 Skewer) of Charbroiled, All-Natural, ABF (Antibiotic & Hormone Free) Seasoned Ground Beef. Served with Your Choice of Rice and Spread."
    const menuItem12 = document.createElement('p')
    menuItem12.textContent = "water"
    
    //main element classes
    main.classList.add('main')
    menuTextContainer.classList.add('menu-text-container')
    menuHeading.classList.add('menu-heading')
    appitizerHeader.classList.add('appitizer-heading')
    entreeHeading.classList.add('entree-heading')
    drinksHeading.classList.add('drinks-heading')
    menuItemContainer1.classList.add('menu-item-container')
    menuItemContainer2.classList.add('menu-item-container')
    menuItemContainer3.classList.add('menu-item-container')
    menuItemContainer4.classList.add('menu-item-container')
    menuItemContainer5.classList.add('menu-item-container')
    menuItemContainer6.classList.add('menu-item-container')
    menuItemContainer7.classList.add('menu-item-container')
    menuItemContainer8.classList.add('menu-item-container')
    menuItemContainer9.classList.add('menu-item-container')
    menuItemContainer10.classList.add('menu-item-container')
    menuItemContainer11.classList.add('menu-item-container')
    menuItemContainer12.classList.add('menu-item-container')
    menuItem1.classList.add('menu-item')
    menuItem2.classList.add('menu-item')
    menuItem3.classList.add('menu-item')
    menuItem4.classList.add('menu-item')
    menuItem5.classList.add('menu-item')
    menuItem6.classList.add('menu-item')
    menuItem7.classList.add('menu-item')
    menuItem8.classList.add('menu-item')
    menuItem9.classList.add('menu-item')
    menuItem10.classList.add('menu-item')
    menuItem11.classList.add('menu-item')
    menuItem12.classList.add('menu-item')
    
    
    //append main elements
    menuTextContainer.appendChild(menuHeading)
    menuItemContainer1.appendChild(menuItem1)
    menuItemContainer2.appendChild(menuItem2)
    menuItemContainer3.appendChild(menuItem3)
    menuItemContainer4.appendChild(menuItem4)
    menuItemContainer5.appendChild(menuItem5)
    menuItemContainer6.appendChild(menuItem6)
    menuItemContainer7.appendChild(menuItem7)
    menuItemContainer8.appendChild(menuItem8)
    menuItemContainer9.appendChild(menuItem9)
    menuItemContainer10.appendChild(menuItem10)
    menuItemContainer11.appendChild(menuItem11)
    menuItemContainer12.appendChild(menuItem12)

    menuTextContainer.appendChild(appitizerHeader)
    menuTextContainer.appendChild(menuItemContainer1)
    menuTextContainer.appendChild(menuItemContainer2)
    menuTextContainer.appendChild(menuItemContainer3)
    menuTextContainer.appendChild(entreeHeading)
    menuTextContainer.appendChild(menuItemContainer4)
    menuTextContainer.appendChild(menuItemContainer5)
    menuTextContainer.appendChild(menuItemContainer6)
    menuTextContainer.appendChild(menuItemContainer7)
    menuTextContainer.appendChild(menuItemContainer8)
    menuTextContainer.appendChild(menuItemContainer9)
    menuTextContainer.appendChild(menuItemContainer10)
    menuTextContainer.appendChild(menuItemContainer11)
    menuTextContainer.appendChild(drinksHeading)
    menuTextContainer.appendChild(menuItemContainer12)

    main.appendChild(menuTextContainer)


    //append content elements
    content.appendChild(header)
    content.appendChild(main)
}

/***/ }),

/***/ "./src/Magic-Retro.ttf":
/*!*****************************!*\
  !*** ./src/Magic-Retro.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83fd0b5584c39c084273.ttf";

/***/ }),

/***/ "./src/Roboto-Black.ttf":
/*!******************************!*\
  !*** ./src/Roboto-Black.ttf ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "45715786ed948b799cf8.ttf";

/***/ }),

/***/ "./src/cocktail-shaker.png":
/*!*********************************!*\
  !*** ./src/cocktail-shaker.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5b4037aa1564ef6267d.png";

/***/ }),

/***/ "./src/restaurant-outside.jpeg":
/*!*************************************!*\
  !*** ./src/restaurant-outside.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b9af737a70bb27db376.jpeg";

/***/ }),

/***/ "./src/unicorn-school.otf":
/*!********************************!*\
  !*** ./src/unicorn-school.otf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b407ddc80f2902c9ce6.otf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _menuPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage.js */ "./src/menuPage.js");



const content = document.createElement('div')
content.setAttribute("id", "content")
document.body.appendChild(content)

;(0,_homepage_js__WEBPACK_IMPORTED_MODULE_0__.buildHomepage)();
const deleteContent = function(){
    content.innerHTML = ''
}

document.getElementById("menuTabButton").addEventListener("click", deleteContent);
document.getElementById("menuTabButton").addEventListener("click", _menuPage_js__WEBPACK_IMPORTED_MODULE_1__.buildMenuPage);

document.getElementById("homeTabButton").addEventListener("click", deleteContent);
document.getElementById("homeTabButton").addEventListener("click", _homepage_js__WEBPACK_IMPORTED_MODULE_0__.buildHomepage);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O0FDbkY2QjtBQUNZO0FBQ25COztBQUV0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaURBQUk7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNuTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQThDO0FBQ0g7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQSw0REFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1FQUFtRSx1REFBYTs7QUFFaEY7QUFDQSxtRUFBbUUsdURBQWEsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZVN0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudVBhZ2VTdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lcGFnZVN0eWxlLmNzcz9jMmM4Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51UGFnZVN0eWxlLmNzcz9kMWUzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9NYWdpYy1SZXRyby50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL1JvYm90by1CbGFjay50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL3VuaWNvcm4tc2Nob29sLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vcmVzdGF1cmFudC1vdXRzaWRlLmpwZWdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdsb2dvRm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG4gIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ21haW5Gb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcbiAgQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAndGFic0ZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0OiAxN3ZoO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgZ2FwOiAyMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5yZXN0YXVyYW50LW5hbWV7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ2xvZ29Gb250JztcXG4gICAgbWFyZ2luOiAwO1xcblxcbn1cXG5cXG5pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YWJzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnRhYnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhYntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDE1JTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICd0YWJzRm9udCc7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5cXG4ubWFpbntcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpO1xcbiAgICBmb250LWZhbWlseTogJ21haW5Gb250JztcXG59XFxuXFxuLm1haW4tdGV4dC1jb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiA0MCU7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWVwYWdlU3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLCtEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSx1QkFBdUI7SUFDdkIsK0RBQWlEO0lBQ2pELGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QiwrREFBbUQ7SUFDbkQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixRQUFRO0lBQ1IsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlEQUFnRDtJQUNoRCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2xvZ29Gb250JztcXG4gICAgc3JjOiB1cmwoJy4vTWFnaWMtUmV0cm8udHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuICBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluRm9udCc7XFxuICAgIHNyYzogdXJsKCcuL1JvYm90by1CbGFjay50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG4gIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3RhYnNGb250JztcXG4gICAgc3JjOiB1cmwoJy4vdW5pY29ybi1zY2hvb2wub3RmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuXFxuYm9keXtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJyb3duO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0OiAxN3ZoO1xcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgZ2FwOiAyMCU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG4ubG9nby1jb250YWluZXIge1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtaW4td2lkdGg6IDE3MHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxufVxcblxcbi5yZXN0YXVyYW50LW5hbWV7XFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICBmb250LWZhbWlseTogJ2xvZ29Gb250JztcXG4gICAgbWFyZ2luOiAwO1xcblxcbn1cXG5cXG5pbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YWJzLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnRhYnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGdhcDogMjVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnRhYntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4td2lkdGg6IDE1JTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDA7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICd0YWJzRm9udCc7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5cXG4ubWFpbntcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9yZXN0YXVyYW50LW91dHNpZGUuanBlZyk7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbkZvbnQnO1xcbn1cXG5cXG4ubWFpbi10ZXh0LWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDQwJTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vTWFnaWMtUmV0cm8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9Sb2JvdG8tQmxhY2sudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi91bmljb3JuLXNjaG9vbC5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL3Jlc3RhdXJhbnQtb3V0c2lkZS5qcGVnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbG9nb0ZvbnQnO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuICBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluRm9udCc7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIH1cXG4gIEBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3RhYnNGb250JztcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcblxcbmJvZHl7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBoZWlnaHQ6IDE3dmg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBnYXA6IDE1JTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1pbi13aWR0aDogMTcwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnJlc3RhdXJhbnQtbmFtZXtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnbG9nb0ZvbnQnO1xcbiAgICBtYXJnaW46IDA7XFxuXFxufVxcblxcbmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhYnMtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4udGFic3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFie1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMTUlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBmb250LWZhbWlseTogJ3RhYnNGb250JztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YWI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5tYWlue1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbkZvbnQnO1xcbn1cXG5cXG4ubWVudS10ZXh0LWNvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNSU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMgMWZyKTtcXG4gICAgZ2FwOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBncmlkLXJvdzogYXV0bztcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcXG59XFxuXFxuLm1lbnUtaGVhZGluZ3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5hcHBpdGl6ZXItaGVhZGluZywgLmVudHJlZS1oZWFkaW5nLCAuZHJpbmtzLWhlYWRpbmd7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudS1pdGVtLWNvbnRhaW5lcjpsYXN0LWNoaWxke1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbWVudVBhZ2VTdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsK0RBQWdEO0lBQ2hELGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QiwrREFBaUQ7SUFDakQsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLCtEQUFtRDtJQUNuRCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksVUFBVTtJQUNWLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsV0FBVztJQUNYLDhCQUE4QjtJQUM5QixRQUFRO0lBQ1IsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlEQUFnRDtJQUNoRCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxTQUFTO0lBQ1QsYUFBYTtJQUNiLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdsb2dvRm9udCc7XFxuICAgIHNyYzogdXJsKCcuL01hZ2ljLVJldHJvLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcbiAgQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWFpbkZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9Sb2JvdG8tQmxhY2sudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuICBAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICd0YWJzRm9udCc7XFxuICAgIHNyYzogdXJsKCcuL3VuaWNvcm4tc2Nob29sLm90ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcblxcbmJvZHl7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnJvd247XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBoZWlnaHQ6IDE3dmg7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgICBnYXA6IDE1JTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogc29saWQ7XFxufVxcblxcbi5sb2dvLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1pbi13aWR0aDogMTcwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG59XFxuXFxuLnJlc3RhdXJhbnQtbmFtZXtcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxuICAgIGZvbnQtZmFtaWx5OiAnbG9nb0ZvbnQnO1xcbiAgICBtYXJnaW46IDA7XFxuXFxufVxcblxcbmltZyB7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhYnMtY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4udGFic3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZ2FwOiAyNXB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGFie1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMTUlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBmb250LWZhbWlseTogJ3RhYnNGb250JztcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi50YWI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcblxcbi5tYWlue1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcXG4gICAgbWF4LXdpZHRoOiA4MCU7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL3Jlc3RhdXJhbnQtb3V0c2lkZS5qcGVnKTtcXG4gICAgZm9udC1mYW1pbHk6ICdtYWluRm9udCc7XFxufVxcblxcbi5tZW51LXRleHQtY29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMyAxZnIpO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGdyaWQtcm93OiBhdXRvO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xcbn1cXG5cXG4ubWVudS1oZWFkaW5ne1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuLmFwcGl0aXplci1oZWFkaW5nLCAuZW50cmVlLWhlYWRpbmcsIC5kcmlua3MtaGVhZGluZ3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tZW51LWl0ZW0tY29udGFpbmVyOmxhc3QtY2hpbGR7XFxuICAgIGdyaWQtY29sdW1uOiAxLzQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lcGFnZVN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZXBhZ2VTdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudVBhZ2VTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnVQYWdlU3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9ob21lcGFnZVN0eWxlLmNzcyc7XG5pbXBvcnQgbG9nbyBmcm9tICcuL2NvY2t0YWlsLXNoYWtlci5wbmcnO1xuZXhwb3J0IHtidWlsZEhvbWVwYWdlfVxuXG5jb25zdCBidWlsZEhvbWVwYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcblxuICAgIC8vY3JlYXRlZCBlbGVtZW50c1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgLy9oZWFkZXIgZWxlbWVudHNcbiAgICBjb25zdCBsb2dvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBsb2dvSW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgIGxvZ29JbWFnZS5zcmMgPSBsb2dvXG4gICAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIlRoZSBEZW5cIlxuXG4gICAgY29uc3QgdGFic0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgYWJvdmVUYWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBob21lVGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBob21lVGFiQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJIb21lXCJcbiAgICBjb25zdCBtZW51VGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBtZW51VGFiQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJNZW51XCJcbiAgICBjb25zdCBhYm91dFRhYkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYWJvdXRUYWJDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkFib3V0XCJcbiAgICBjb25zdCBjb250YWN0VGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBjb250YWN0VGFiQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJDb250YWN0XCJcbiAgICAvL2hlYWRlciBlbGVtZW50IGNsYXNzZXNcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgICBsb2dvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2xvZ28tY29udGFpbmVyJylcbiAgICBsb2dvSW1hZ2UuY2xhc3NMaXN0LmFkZCgnbG9nby1pbWFnZScpXG4gICAgcmVzdGF1cmFudE5hbWUuY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC1uYW1lJylcbiAgICB0YWJzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhYnMtY29udGFpbmVyJylcbiAgICB0YWJzLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKVxuICAgIGhvbWVUYWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiJylcbiAgICBob21lVGFiQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZVRhYkJ1dHRvbicpXG4gICAgbWVudVRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWInKVxuICAgIG1lbnVUYWJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdtZW51VGFiQnV0dG9uJylcbiAgICBhYm91dFRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWInKVxuICAgIGFib3V0VGFiQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXRUYWJCdXR0b24nKVxuICAgIGNvbnRhY3RUYWJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFiJylcbiAgICBjb250YWN0VGFiQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdFRhYkJ1dHRvbicpXG4gICAgLy9hcHBlbmQgaGVhZGVyIGVsZW1lbnRzXG4gICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpXG4gICAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSlcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcilcbiAgICB0YWJzLmFwcGVuZENoaWxkKGhvbWVUYWJDb250YWluZXIpXG4gICAgdGFicy5hcHBlbmRDaGlsZChtZW51VGFiQ29udGFpbmVyKVxuICAgIHRhYnMuYXBwZW5kQ2hpbGQoYWJvdXRUYWJDb250YWluZXIpXG4gICAgdGFicy5hcHBlbmRDaGlsZChjb250YWN0VGFiQ29udGFpbmVyKVxuICAgIHRhYnNDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdmVUYWJzKVxuICAgIHRhYnNDb250YWluZXIuYXBwZW5kQ2hpbGQodGFicylcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGFic0NvbnRhaW5lcilcblxuXG5cbiAgICAvL21haW4gZWxlbWVudHNcbiAgICBjb25zdCBtYWluVGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgdGV4dEhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgdGV4dEhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlxcXCJUaGUgYmVzdCBtZWFsIEkndmUgZXZlciBoYWRcXFwiXCJcbiAgICBjb25zdCB0ZXh0SGVhZGluZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgdGV4dEhlYWRpbmcyLnRleHRDb250ZW50ID0gXCItRGVhbiBTdGlycmF0XCJcbiAgICBjb25zdCB0ZXh0Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHRleHRCb2R5LnRleHRDb250ZW50ID0gXCJIaXMgdG90YSBtYWduYSB0aW1lYW0gYW4sIGV1IHNpdCBpdWRpY28gZXBpY3VyaSwgbWVhIGV4IGVwaWN1cmVpIGVsb3F1ZW50aWFtLiBBdCBxdW8gYWxpaSBtaW5pbSB0b3JxdWF0b3MsIG1lYSBldCBicnV0ZSBhc3N1bS4gQXQgY2xpdGEgYWNjdXNhbSBtZWEuIFZlbCBuZW1vcmUgbnVtcXVhbSBuby5cIlxuICAgIC8vbWFpbiBlbGVtZW50IGNsYXNzZXNcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKVxuICAgIG1haW5UZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21haW4tdGV4dC1jb250YWluZXInKVxuICAgIHRleHRIZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ3RleHQtaGVhZGluZycpXG4gICAgdGV4dEJvZHkuY2xhc3NMaXN0LmFkZCgndGV4dC1ib2R5JylcbiAgICAvL2FwcGVuZCBtYWluIGVsZW1lbnRzXG4gICAgbWFpblRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dEhlYWRpbmcpXG4gICAgbWFpblRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dEhlYWRpbmcyKVxuICAgIG1haW5UZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRCb2R5KVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpblRleHRDb250YWluZXIpXG5cblxuICAgIC8vYXBwZW5kIGNvbnRlbnQgZWxlbWVudHNcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pXG59IiwiaW1wb3J0ICcuL21lbnVQYWdlU3R5bGUuY3NzJztcbmltcG9ydCBsb2dvIGZyb20gJy4vY29ja3RhaWwtc2hha2VyLnBuZyc7XG5leHBvcnQge2J1aWxkTWVudVBhZ2V9XG5cbmNvbnN0IGJ1aWxkTWVudVBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxuXG4gICAgLy9jcmVhdGVkIGVsZW1lbnRzXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICAvL2hlYWRlciBlbGVtZW50c1xuICAgIGNvbnN0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGxvZ29JbWFnZSA9IG5ldyBJbWFnZSgpXG4gICAgbG9nb0ltYWdlLnNyYyA9IGxvZ29cbiAgICBjb25zdCByZXN0YXVyYW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICByZXN0YXVyYW50TmFtZS50ZXh0Q29udGVudCA9IFwiVGhlIERlblwiXG5cbiAgICBjb25zdCB0YWJzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBhYm92ZVRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IGhvbWVUYWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGhvbWVUYWJDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkhvbWVcIlxuICAgIGNvbnN0IG1lbnVUYWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG1lbnVUYWJDb250YWluZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIlxuICAgIGNvbnN0IGFib3V0VGFiQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBhYm91dFRhYkNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiQWJvdXRcIlxuICAgIGNvbnN0IGNvbnRhY3RUYWJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnRhY3RUYWJDb250YWluZXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIlxuICAgIC8vaGVhZGVyIGVsZW1lbnQgY2xhc3Nlc1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuICAgIGxvZ29Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbG9nby1jb250YWluZXInKVxuICAgIGxvZ29JbWFnZS5jbGFzc0xpc3QuYWRkKCdsb2dvLWltYWdlJylcbiAgICByZXN0YXVyYW50TmFtZS5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LW5hbWUnKVxuICAgIHRhYnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFicy1jb250YWluZXInKVxuICAgIHRhYnMuY2xhc3NMaXN0LmFkZCgndGFicycpXG4gICAgaG9tZVRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWInKVxuICAgIGhvbWVUYWJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lVGFiQnV0dG9uJylcbiAgICBtZW51VGFiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhYicpXG4gICAgbWVudVRhYkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnVUYWJCdXR0b24nKVxuICAgIGFib3V0VGFiQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RhYicpXG4gICAgYWJvdXRUYWJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dFRhYkJ1dHRvbicpXG4gICAgY29udGFjdFRhYkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YWInKVxuICAgIGNvbnRhY3RUYWJDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0VGFiQnV0dG9uJylcbiAgICAvL2FwcGVuZCBoZWFkZXIgZWxlbWVudHNcbiAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvZ29JbWFnZSlcbiAgICBsb2dvQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvQ29udGFpbmVyKVxuICAgIHRhYnMuYXBwZW5kQ2hpbGQoaG9tZVRhYkNvbnRhaW5lcilcbiAgICB0YWJzLmFwcGVuZENoaWxkKG1lbnVUYWJDb250YWluZXIpXG4gICAgdGFicy5hcHBlbmRDaGlsZChhYm91dFRhYkNvbnRhaW5lcilcbiAgICB0YWJzLmFwcGVuZENoaWxkKGNvbnRhY3RUYWJDb250YWluZXIpXG4gICAgdGFic0NvbnRhaW5lci5hcHBlbmRDaGlsZChhYm92ZVRhYnMpXG4gICAgdGFic0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YWJzKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0YWJzQ29udGFpbmVyKVxuXG5cblxuICAgIC8vbWFpbiBlbGVtZW50c1xuICAgIGNvbnN0IG1lbnVUZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBtZW51SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBtZW51SGVhZGluZy50ZXh0Q29udGVudCA9IFwiTWVudVwiXG4gICAgY29uc3QgYXBwaXRpemVySGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGFwcGl0aXplckhlYWRlci50ZXh0Q29udGVudCA9IFwiQXBwaXRpemVyc1wiXG4gICAgY29uc3QgZW50cmVlSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBlbnRyZWVIZWFkaW5nLnRleHRDb250ZW50ID0gXCJFbnRyZWVzXCJcbiAgICBjb25zdCBkcmlua3NIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGRyaW5rc0hlYWRpbmcudGV4dENvbnRlbnQgPSBcIkRyaW5rIFNlbGVjdGlvblwiXG5cbiAgICBjb25zdCBtZW51SXRlbUNvbnRhaW5lcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IG1lbnVJdGVtQ29udGFpbmVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbWVudUl0ZW1Db250YWluZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBtZW51SXRlbUNvbnRhaW5lcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IG1lbnVJdGVtQ29udGFpbmVyNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbWVudUl0ZW1Db250YWluZXI2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBtZW51SXRlbUNvbnRhaW5lcjcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnN0IG1lbnVJdGVtQ29udGFpbmVyOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29uc3QgbWVudUl0ZW1Db250YWluZXI5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBtZW51SXRlbUNvbnRhaW5lcjEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBtZW51SXRlbUNvbnRhaW5lcjExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb25zdCBtZW51SXRlbUNvbnRhaW5lcjEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcblxuICAgIGNvbnN0IG1lbnVJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1lbnVJdGVtMS50ZXh0Q29udGVudCA9IFwiQVBQRVRJWkVSIFBMQVRFUiAtIChtb3p6YXJlbGxhICg0cGNzLiksIHp1Y2NpZGkgKDRwY3MpLCBqYWhwZW5vIGNoZWVzZSBwb3BwZXIgKDRwY3MpLCBicmVhZGVkIG11c2hyb29tICg2cGNhKSwgb25pb24gcmluZ3MgKDZwY3MpKVwiXG4gICAgY29uc3QgbWVudUl0ZW0yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbWVudUl0ZW0yLnRleHRDb250ZW50ID0gXCJET1VCTEUgQ1JVTkNIIEJPTkUtSU4gV0lOR1MgLSBUd2ljZSBiYXR0ZXJlZCBhbmQgZnJpZWQsIHRoZXNlIGNyaXNwIG91dHNpZGUsIHRlbmRlciBpbnNpZGUgd2luZ3MgYXJlIHRvc3NlZCBpbiB5b3VyIGNob2ljZSBvZiBzYXVjZS4gU2VydmVkIHdpdGggQmxldSBjaGVlc2Ugb3IgaG91c2UtbWFkZSByYW5jaCBkcmVzc2luZyB3aXRoIHJlYWwgYnV0dGVybWlsay5cIlxuICAgIGNvbnN0IG1lbnVJdGVtMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1lbnVJdGVtMy50ZXh0Q29udGVudCA9IFwiQlJFVyBQVUIgUFJFVFpFTFMgJiBCRUVSIENIRUVTRSBESVAgLSBUaGUgcGVyZmVjdCBiYWxhbmNlIG9mIGNydW5jaHkgYW5kIGNoZXd5LCB3YXJtIHByZXR6ZWwgc3RpY2tzIGFyZSByZWFkeSB0byBkaXAgaW4gQkxVRSBNT09Owq4gd2hpdGUgQ2hlZGRhciBiZWVyIGNoZWVzZSBhbmQgaG9uZXkgRGlqb24gbXVzdGFyZC5cIlxuICAgIGNvbnN0IG1lbnVJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1lbnVJdGVtNC50ZXh0Q29udGVudCA9IFwiU3RlYWtzIHByb3ZpZGVkIGJ5IFNOQUtFIFJJVkVSIC0gSW5jbHVkZXMgbWFzaCBwb3RhdG9lcyBhbmQgc2Vhc29uYWwgdmVnZ2llcyB3aXRoIGEgY2hvaWNlIG9mIGhvdXNlIGdsYXplIG9yIFN6ZWNodWFuIHBlcHBlciBjb3JuIGNydXN0XCJcbiAgICBjb25zdCBtZW51SXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBtZW51SXRlbTUudGV4dENvbnRlbnQgPSBcIktvcmVhbiBCQlEgU2hvcnQgUmlicyAtIDFsYiBiZWVmIHJpYnMgaW4gaG91c2UgbWFyaW5hZGUgc2VydmVkIHdpdGggc2F1dMOpZWQgdmVnZ2llcywgbXVzaHJvb21zLCBhbmQgMiBzdHlsZXMgb2Yga2ltY2hpIChjdWN1bWJlciBhbmQgY2FiYmFnZSkgXCJcbiAgICBjb25zdCBtZW51SXRlbTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBtZW51SXRlbTYudGV4dENvbnRlbnQgPSBcIk9yYW5nZSBDaGlja2VuIC0gQmF0dGVyZWQgYW5kIHRvc3NlZCBpbiBhIGhvdXNlIG1hZGUgb3JhbmdlIHNhdWNlXCJcbiAgICBjb25zdCBtZW51SXRlbTcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBtZW51SXRlbTcudGV4dENvbnRlbnQgPSBcIlBhbiBTZWFyZWQgU2VzYW1lIENydXN0ZWQgV2lsZCBZZWxsb3dmaW4gVHVuYSAoQWhpKS5cIlxuICAgIGNvbnN0IG1lbnVJdGVtOCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1lbnVJdGVtOC50ZXh0Q29udGVudCA9IFwiRkxBVCBJUk9OIFNURUFLIFNISVNIIEtBQk9CIC0gQ2hhcmJyb2lsZWQsIEFsbCBOYXR1cmFsLCBBbnRpYmlvdGljLWFuZC1Ib3Jtb25lIEZyZWUgRmxhdCBJcm9uIFN0ZWFrIGZyb21cIlxuICAgIGNvbnN0IG1lbnVJdGVtOSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1lbnVJdGVtOS50ZXh0Q29udGVudCA9IFwiQ0hBUkJST0lMRUQgQ0hJQ0tFTiBTSElTSCBLQUJPQiAoQSBNVVNUKSAtIENoYXJicm9pbGVkIFdheW5lIEZhcm1zIEZyZXNoIFRlbmRlcnMgd2l0aCBObyBBbnRpYmlvdGljcy4gU2tld2VyZWQgd2l0aCBHcmlsbGVkIFZlZ2V0YWJsZXMuXCJcbiAgICBjb25zdCBtZW51SXRlbTEwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgbWVudUl0ZW0xMC50ZXh0Q29udGVudCA9IFwiQ09NQk8gS0FCT0IgLSBDaGFyYnJvaWxlZCBBQkYgKEFudGliaW90aWMgJiBIb3Jtb25lIEZyZWUpIENoaWNrZW4gVGVuZGVycyBTa2V3ZXJlZCBXaXRoIEdyaWxsZWQgVmVnZXRhYmxlcyBhbmQgYSBIYWxmIFBvdW5kICgxIFNrZXdlcikgb2YgQ2hhcmJyb2lsZWQsIEFsbC1OYXR1cmFsLCBBQkYgKEFudGliaW90aWMgJiBIb3Jtb25lIEZyZWUpIFNlYXNvbmVkIEdyb3VuZCBCZWVmLlwiXG4gICAgY29uc3QgbWVudUl0ZW0xMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIG1lbnVJdGVtMTEudGV4dENvbnRlbnQgPSBcIkNPTUJPIEtBLUJPWCAtIENoYXJicm9pbGVkIEFCRiAoQW50aWJpb3RpYyAmIEhvcm1vbmUgRnJlZSkgQ2hpY2tlbiBUZW5kZXJzIGluIGEgU2tld2VyIFdpdGggR3JpbGxlZCBWZWdldGFibGVzIGFuZCAxLzIgUG91bmQgKDEgU2tld2VyKSBvZiBDaGFyYnJvaWxlZCwgQWxsLU5hdHVyYWwsIEFCRiAoQW50aWJpb3RpYyAmIEhvcm1vbmUgRnJlZSkgU2Vhc29uZWQgR3JvdW5kIEJlZWYuIFNlcnZlZCB3aXRoIFlvdXIgQ2hvaWNlIG9mIFJpY2UgYW5kIFNwcmVhZC5cIlxuICAgIGNvbnN0IG1lbnVJdGVtMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBtZW51SXRlbTEyLnRleHRDb250ZW50ID0gXCJ3YXRlclwiXG4gICAgXG4gICAgLy9tYWluIGVsZW1lbnQgY2xhc3Nlc1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpXG4gICAgbWVudVRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS10ZXh0LWNvbnRhaW5lcicpXG4gICAgbWVudUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkaW5nJylcbiAgICBhcHBpdGl6ZXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgnYXBwaXRpemVyLWhlYWRpbmcnKVxuICAgIGVudHJlZUhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnZW50cmVlLWhlYWRpbmcnKVxuICAgIGRyaW5rc0hlYWRpbmcuY2xhc3NMaXN0LmFkZCgnZHJpbmtzLWhlYWRpbmcnKVxuICAgIG1lbnVJdGVtQ29udGFpbmVyMS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJylcbiAgICBtZW51SXRlbUNvbnRhaW5lcjIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWNvbnRhaW5lcicpXG4gICAgbWVudUl0ZW1Db250YWluZXIzLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1jb250YWluZXInKVxuICAgIG1lbnVJdGVtQ29udGFpbmVyNC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJylcbiAgICBtZW51SXRlbUNvbnRhaW5lcjUuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWNvbnRhaW5lcicpXG4gICAgbWVudUl0ZW1Db250YWluZXI2LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1jb250YWluZXInKVxuICAgIG1lbnVJdGVtQ29udGFpbmVyNy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJylcbiAgICBtZW51SXRlbUNvbnRhaW5lcjguY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWNvbnRhaW5lcicpXG4gICAgbWVudUl0ZW1Db250YWluZXI5LmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1jb250YWluZXInKVxuICAgIG1lbnVJdGVtQ29udGFpbmVyMTAuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtLWNvbnRhaW5lcicpXG4gICAgbWVudUl0ZW1Db250YWluZXIxMS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0tY29udGFpbmVyJylcbiAgICBtZW51SXRlbUNvbnRhaW5lcjEyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbS1jb250YWluZXInKVxuICAgIG1lbnVJdGVtMS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKVxuICAgIG1lbnVJdGVtMi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKVxuICAgIG1lbnVJdGVtMy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKVxuICAgIG1lbnVJdGVtNC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKVxuICAgIG1lbnVJdGVtNS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKVxuICAgIG1lbnVJdGVtNi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKVxuICAgIG1lbnVJdGVtNy5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKVxuICAgIG1lbnVJdGVtOC5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKVxuICAgIG1lbnVJdGVtOS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKVxuICAgIG1lbnVJdGVtMTAuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJylcbiAgICBtZW51SXRlbTExLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpXG4gICAgbWVudUl0ZW0xMi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKVxuICAgIFxuICAgIFxuICAgIC8vYXBwZW5kIG1haW4gZWxlbWVudHNcbiAgICBtZW51VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SGVhZGluZylcbiAgICBtZW51SXRlbUNvbnRhaW5lcjEuYXBwZW5kQ2hpbGQobWVudUl0ZW0xKVxuICAgIG1lbnVJdGVtQ29udGFpbmVyMi5hcHBlbmRDaGlsZChtZW51SXRlbTIpXG4gICAgbWVudUl0ZW1Db250YWluZXIzLmFwcGVuZENoaWxkKG1lbnVJdGVtMylcbiAgICBtZW51SXRlbUNvbnRhaW5lcjQuYXBwZW5kQ2hpbGQobWVudUl0ZW00KVxuICAgIG1lbnVJdGVtQ29udGFpbmVyNS5hcHBlbmRDaGlsZChtZW51SXRlbTUpXG4gICAgbWVudUl0ZW1Db250YWluZXI2LmFwcGVuZENoaWxkKG1lbnVJdGVtNilcbiAgICBtZW51SXRlbUNvbnRhaW5lcjcuYXBwZW5kQ2hpbGQobWVudUl0ZW03KVxuICAgIG1lbnVJdGVtQ29udGFpbmVyOC5hcHBlbmRDaGlsZChtZW51SXRlbTgpXG4gICAgbWVudUl0ZW1Db250YWluZXI5LmFwcGVuZENoaWxkKG1lbnVJdGVtOSlcbiAgICBtZW51SXRlbUNvbnRhaW5lcjEwLmFwcGVuZENoaWxkKG1lbnVJdGVtMTApXG4gICAgbWVudUl0ZW1Db250YWluZXIxMS5hcHBlbmRDaGlsZChtZW51SXRlbTExKVxuICAgIG1lbnVJdGVtQ29udGFpbmVyMTIuYXBwZW5kQ2hpbGQobWVudUl0ZW0xMilcblxuICAgIG1lbnVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGFwcGl0aXplckhlYWRlcilcbiAgICBtZW51VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbUNvbnRhaW5lcjEpXG4gICAgbWVudVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1Db250YWluZXIyKVxuICAgIG1lbnVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtQ29udGFpbmVyMylcbiAgICBtZW51VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChlbnRyZWVIZWFkaW5nKVxuICAgIG1lbnVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtQ29udGFpbmVyNClcbiAgICBtZW51VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbUNvbnRhaW5lcjUpXG4gICAgbWVudVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1Db250YWluZXI2KVxuICAgIG1lbnVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtQ29udGFpbmVyNylcbiAgICBtZW51VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbUNvbnRhaW5lcjgpXG4gICAgbWVudVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1Db250YWluZXI5KVxuICAgIG1lbnVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtQ29udGFpbmVyMTApXG4gICAgbWVudVRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1Db250YWluZXIxMSlcbiAgICBtZW51VGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChkcmlua3NIZWFkaW5nKVxuICAgIG1lbnVUZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtQ29udGFpbmVyMTIpXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVUZXh0Q29udGFpbmVyKVxuXG5cbiAgICAvL2FwcGVuZCBjb250ZW50IGVsZW1lbnRzXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgeyBidWlsZEhvbWVwYWdlIH0gZnJvbSBcIi4vaG9tZXBhZ2UuanNcIjtcbmltcG9ydCB7YnVpbGRNZW51UGFnZX0gZnJvbSBcIi4vbWVudVBhZ2UuanNcIlxuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnRlbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250ZW50XCIpXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbmJ1aWxkSG9tZXBhZ2UoKTtcbmNvbnN0IGRlbGV0ZUNvbnRlbnQgPSBmdW5jdGlvbigpe1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJydcbn1cblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51VGFiQnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVDb250ZW50KTtcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVRhYkJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYnVpbGRNZW51UGFnZSk7XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVRhYkJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlQ29udGVudCk7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhvbWVUYWJCdXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGJ1aWxkSG9tZXBhZ2UpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==