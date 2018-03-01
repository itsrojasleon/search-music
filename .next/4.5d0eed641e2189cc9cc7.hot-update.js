webpackHotUpdate(4,{

/***/ "./components/SearchBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/rojas/Desktop/find-music-by-spotify-demo/components/SearchBar.js",
    _this = this;

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();



var SearchBar = function SearchBar(_ref) {
  var query = _ref.query,
      search = _ref.search;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "columns container-music", __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "column is-8", __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "field", __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "control", __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "form",
            { onSubmit: query, className: "container-search-bar", __source: {
                fileName: _jsxFileName,
                lineNumber: 9
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
              className: "input is-danger is-medium",
              type: "text",
              placeholder: "Busca tu canci\xF3n favorita",
              onChange: search,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            })
          )
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "column container-button", __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { onClick: _this.handleClick, className: "button is-danger is-medium", __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        "Buscar"
      )
    )
  );
};
var _default = SearchBar;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SearchBar, "SearchBar", "/Users/rojas/Desktop/find-music-by-spotify-demo/components/SearchBar.js");
  reactHotLoader.register(_default, "default", "/Users/rojas/Desktop/find-music-by-spotify-demo/components/SearchBar.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.5d0eed641e2189cc9cc7.hot-update.js.map