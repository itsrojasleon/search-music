module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Player.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/rojas/Desktop/find-music-by-spotify-demo/components/Player.js";



var Player = function Player(_ref) {
  var selectedTrack = _ref.selectedTrack;

  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    "div",
    {
      className: "jsx-4064370835",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    selectedTrack && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      "div",
      {
        className: "jsx-4064370835" + " " + "box reproductor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-4064370835" + " " + "description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "figure",
          {
            className: "jsx-4064370835" + " " + "image is-64x64",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("img", { src: selectedTrack.album.images[1].url, className: "jsx-4064370835",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          "div",
          {
            className: "jsx-4064370835" + " " + "description-children",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "p",
            {
              className: "jsx-4064370835",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            },
            selectedTrack.name
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            "small",
            {
              className: "jsx-4064370835",
              __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              }
            },
            selectedTrack.artists[0].name
          )
        )
      ),
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        {
          className: "jsx-4064370835" + " " + "container-player",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("audio", {
          autoPlay: true,
          controls: true,
          src: selectedTrack.preview_url, className: "jsx-4064370835" + " " + "player",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
      styleId: "4064370835",
      css: ".reproductor.jsx-4064370835{padding-bottom:0px !important;padding-top:10px !important;background-color:rgb(248,248,248);}.container-player.jsx-4064370835{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.description.jsx-4064370835{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.description-children.jsx-4064370835{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:12px;}.player.jsx-4064370835{width:40%;margin:0px auto 0px auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHeUMsQUFLakIsQUFHQSxBQUtBLEFBS0gsVUFDZSxvQkFsQkcsS0FtQjlCLHVCQWxCb0MsZ0JBSXBDLEFBR3FCLEFBS0csa0JBWHhCLG1EQU9xQixTQUtGLGlCQUNuQixtRUFMQSIsImZpbGUiOiJjb21wb25lbnRzL1BsYXllci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcm9qYXMvRGVza3RvcC9maW5kLW11c2ljLWJ5LXNwb3RpZnktZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBsYXllciA9ICh7IHNlbGVjdGVkVHJhY2sgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7c2VsZWN0ZWRUcmFjayAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IHJlcHJvZHVjdG9yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy02NHg2NFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17c2VsZWN0ZWRUcmFjay5hbGJ1bS5pbWFnZXNbMV0udXJsfSAvPlxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWNoaWxkcmVuXCI+XG4gICAgICAgICAgICAgIDxwPntzZWxlY3RlZFRyYWNrLm5hbWV9PC9wPlxuICAgICAgICAgICAgICA8c21hbGw+e3NlbGVjdGVkVHJhY2suYXJ0aXN0c1swXS5uYW1lfTwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1wbGF5ZXJcIj5cbiAgICAgICAgICAgIDxhdWRpb1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbGF5ZXJcIlxuICAgICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkVHJhY2sucHJldmlld191cmx9PlxuICAgICAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmVwcm9kdWN0b3Ige1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsMjQ4LDI0OCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lci1wbGF5ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZGVzY3JpcHRpb24tY2hpbGRyZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAucGxheWVyIHtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl19 */\n/*@ sourceURL=components/Player.js */"
    })
  );
};
/* harmony default export */ __webpack_exports__["a"] = (Player);

/***/ }),

/***/ "./components/SearchBar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_styles__ = __webpack_require__("./helpers/styles.js");
var _jsxFileName = '/Users/rojas/Desktop/find-music-by-spotify-demo/components/SearchBar.js';



var Searcher = function Searcher(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'style',
      null,
      '.st0,.st1,.st2',
      '{',
      'stroke:#000;stroke-width:12;stroke-miterlimit:10',
      '}',
      '.st1,.st2',
      '{',
      'stroke-width:7',
      '}',
      '.st2',
      '{',
      'fill:#fff;stroke:#fff;stroke-width:12',
      '}'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', {
      className: 'st0',
      cx: '85',
      cy: '85.1',
      r: '68.6'
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
      className: 'st1',
      d: 'M178 176.9l-.9.9c-.9.9-2.1.9-2.9 0L133 136.6c-.9-.9-.9-2.1 0-2.9l.9-.9c.9-.9 2.1-.9 2.9 0L178 174c.9.9.9 2.1 0 2.9z'
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', {
      className: 'st2',
      cx: '85',
      cy: '85.1',
      r: '56.9'
    })
  );
};

Searcher.defaultProps = {
  id: 'Capa_1',
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 195 195'
};

var Cross = function Cross(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'style',
      null,
      '.st0',
      '{',
      'fill:#fff;stroke:#fff;stroke-width:7;stroke-miterlimit:10',
      '}'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
      className: 'st0',
      d: 'M170.7 170.7c-2.1 2.1-5.4 2.1-7.4 0L24.3 31.8c-2.1-2.1-2.1-5.4 0-7.4 2.1-2.1 5.4-2.1 7.4 0l138.9 138.9c2.1 2 2.1 5.3.1 7.4z'
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', {
      className: 'st0',
      d: 'M24.3 170.7c-2.1-2.1-2.1-5.4 0-7.4l138.9-139c2.1-2.1 5.4-2.1 7.4 0 2.1 2.1 2.1 5.4 0 7.4l-138.8 139c-2.1 2-5.4 2-7.5 0z'
    })
  );
};

Cross.defaultProps = {
  id: 'Capa_1',
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 195 195'
};


var SearchBar = function SearchBar(_ref) {
  var query = _ref.query,
      search = _ref.search,
      showCross = _ref.showCross,
      clearSearcher = _ref.clearSearcher,
      value = _ref.value;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__helpers_styles__["b" /* Container */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__helpers_styles__["c" /* ContainerForm */],
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1__helpers_styles__["e" /* Form */],
        { onSubmit: query, className: 'container-search-bar', __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__helpers_styles__["j" /* Input */], {
          type: 'text',
          placeholder: 'Search your favorite song',
          onChange: search,
          value: value,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__helpers_styles__["o" /* SearcherContainer */],
          { onClick: query, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Searcher, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          })
        ),
        showCross && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1__helpers_styles__["o" /* SearcherContainer */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Cross, { onClick: clearSearcher, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          })
        )
      )
    )
  );
};
/* harmony default export */ __webpack_exports__["a"] = (SearchBar);

/***/ }),

/***/ "./components/Track.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_styles__ = __webpack_require__("./helpers/styles.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_time__ = __webpack_require__("./helpers/time.js");
var _jsxFileName = '/Users/rojas/Desktop/find-music-by-spotify-demo/components/Track.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Play = function Play(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'svg',
    props,
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'style',
      null,
      '.st0',
      '{',
      'fill:#fff',
      '}'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('path', {
      className: 'st0',
      d: 'M129.1 75l-54.5 31.5L20 138V12l54.6 31.5z'
    })
  );
};

Play.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 150 150'
};

var Track = function (_Component) {
  _inherits(Track, _Component);

  function Track() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Track);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Track.__proto__ || Object.getPrototypeOf(Track)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      previewUrl: '',
      disabled: false,
      time: _this.props.duration_ms,
      icons: false
    }, _this.selectTrack = function () {
      _this.props.onClick(_this.props);
    }, _this.handleMouseEnter = function () {
      _this.setState({ icons: !_this.state.icons });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Track, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.preview_url) {
        this.setState({
          previewUrl: 'previewUrl',
          disabled: 'true'
        });
      }
      this.setState({ time: Object(__WEBPACK_IMPORTED_MODULE_3__helpers_time__["a" /* helperTime */])(this.state.time) });
    }
  }, {
    key: 'render',
    value: function render() {
      var blur = this.state.previewUrl;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2__helpers_styles__["a" /* CardRow */],
        {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseEnter,
          blur: '' + this.state.previewUrl,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-653727978',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__helpers_styles__["d" /* Figure */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__helpers_styles__["i" /* ImageContainer */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              },
              !this.props.album.images[0].url && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-653727978',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                  }
                },
                'no hay'
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { style: { maxWidth: '100%' }, src: this.props.album.images[0].url, alt: 'Image', className: 'jsx-653727978',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                }
              })
            ),
            this.state.icons && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_2__helpers_styles__["h" /* IconContainer */],
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_2__helpers_styles__["g" /* Icon */],
                { disabled: this.state.disabled, onClick: this.selectTrack, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Play, {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                  }
                })
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-653727978',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-653727978',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-653727978',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-653727978',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'p',
                  {
                    className: 'jsx-653727978',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 70
                    }
                  },
                  this.props.name
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'p',
                  {
                    className: 'jsx-653727978',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 71
                    }
                  },
                  this.props.artists[0].name
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '653727978',
          css: '.preview-url.jsx-653727978{cursor:no-drop;-webkit-filter:blur(3px);filter:blur(3px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUZvQixBQUc0QixlQUNFLDBDQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL1RyYWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yb2phcy9EZXNrdG9wL2ZpbmQtbXVzaWMtYnktc3BvdGlmeS1kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgQ2FyZFJvdyxcbiAgRmlndXJlLFxuICBJbWFnZUNvbnRhaW5lcixcbiAgSWNvbkNvbnRhaW5lcixcbiAgSWNvblxufSBmcm9tICcuLi9oZWxwZXJzL3N0eWxlcydcbmltcG9ydCB7IGhlbHBlclRpbWUgfSBmcm9tICcuLi9oZWxwZXJzL3RpbWUnXG5cbmltcG9ydCBQbGF5IGZyb20gJy4uL3N2Z3MvcGxheS5zdmcnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYWNrIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcHJldmlld1VybDogJycsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHRpbWU6IHRoaXMucHJvcHMuZHVyYXRpb25fbXMsXG4gICAgaWNvbnM6IGZhbHNlXG4gIH1cbiAgc2VsZWN0VHJhY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMpXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYoIXRoaXMucHJvcHMucHJldmlld191cmwpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBwcmV2aWV3VXJsOiAncHJldmlld1VybCcsXG4gICAgICAgIGRpc2FibGVkOiAndHJ1ZSdcbiAgICAgIH0pXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lOiBoZWxwZXJUaW1lKHRoaXMuc3RhdGUudGltZSkgfSlcbiAgfVxuXG4gIGhhbmRsZU1vdXNlRW50ZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGljb25zOiAhdGhpcy5zdGF0ZS5pY29ucyB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGJsdXIgPSB0aGlzLnN0YXRlLnByZXZpZXdVcmxcbiAgICByZXR1cm4gKFxuICAgICAgPENhcmRSb3dcbiAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmhhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5oYW5kbGVNb3VzZUVudGVyfVxuICAgICAgICBibHVyPXtgJHt0aGlzLnN0YXRlLnByZXZpZXdVcmx9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8RmlndXJlPlxuICAgICAgICAgICAgICA8SW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLmFsYnVtLmltYWdlc1swXS51cmwgJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdj5ubyBoYXk8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDAlJyB9fSBzcmM9e3RoaXMucHJvcHMuYWxidW0uaW1hZ2VzWzBdLnVybH0gYWx0PVwiSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICA8L0ltYWdlQ29udGFpbmVyPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pY29ucyAmJiAoXG4gICAgICAgICAgICAgICAgPEljb25Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICA8SWNvbiBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH0gb25DbGljaz17dGhpcy5zZWxlY3RUcmFja30+XG4gICAgICAgICAgICAgICAgICAgIDxQbGF5IC8+XG4gICAgICAgICAgICAgICAgICA8L0ljb24+XG4gICAgICAgICAgICAgICAgPC9JY29uQ29udGFpbmVyPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9GaWd1cmU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgey8qIDxGaWd1cmU+XG4gICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IG1heFdpZHRoOiAnMTAwJScgfX0gc3JjPXt0aGlzLnByb3BzLmFsYnVtLmltYWdlc1syXS51cmx9IGFsdD1cIkltYWdlXCIgLz5cbiAgICAgICAgICAgICAgICA8L0ZpZ3VyZT4gKi99XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgPHA+e3RoaXMucHJvcHMuYXJ0aXN0c1swXS5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzbWFsbD57dGhpcy5zdGF0ZS50aW1lfTwvc21hbGw+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17dGhpcy5zdGF0ZS5kaXNhYmxlZH0gb25DbGljaz17dGhpcy5zZWxlY3RUcmFja30+4pa277iOPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnByZXZpZXctdXJsIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigzcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9DYXJkUm93PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Track.js */'
        })
      );
    }
  }]);

  return Track;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Track);

/***/ }),

/***/ "./components/card.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Track__ = __webpack_require__("./components/Track.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_styles__ = __webpack_require__("./helpers/styles.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/rojas/Desktop/find-music-by-spotify-demo/components/card.js';





var Card = function Card(_ref) {
  var tracks = _ref.tracks,
      selectedTrack = _ref.selectedTrack;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__helpers_styles__["f" /* GridCard */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    tracks.map(function (track) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Track__["a" /* default */], _extends({ key: track.id, onClick: selectedTrack }, track, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }));
    })
  );
};
/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),

/***/ "./components/shared/Loading.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loading_card__ = __webpack_require__("./components/shared/loading-card.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_styles__ = __webpack_require__("./helpers/styles.js");
var _jsxFileName = '/Users/rojas/Desktop/find-music-by-spotify-demo/components/shared/Loading.js';






var Loading = function Loading() {
  var components = [];
  for (var i = 0; i < 12; i++) {
    components.push(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__loading_card__["a" /* default */], { key: i, __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }));
  }
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2__helpers_styles__["m" /* LoadingContainer */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    },
    components
  );
};
/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),

/***/ "./components/shared/loading-card.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_styles__ = __webpack_require__("./helpers/styles.js");
var _jsxFileName = '/Users/rojas/Desktop/find-music-by-spotify-demo/components/shared/loading-card.js';



var LoadingCard = function LoadingCard() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1__helpers_styles__["l" /* LoadingCardContainer */],
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__helpers_styles__["n" /* LoadingImage */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__helpers_styles__["k" /* LoadingBar */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__helpers_styles__["k" /* LoadingBar */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__helpers_styles__["k" /* LoadingBar */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["a"] = (LoadingCard);

/***/ }),

/***/ "./helpers/styles.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Form; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ContainerForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Container; });
/* unused harmony export ButtonSubmit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return SearcherContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return GridCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Figure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ImageContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return IconContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LoadingContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LoadingCardContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LoadingImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LoadingBar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_components__);


var Form = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.form.withConfig({
  displayName: 'styles__Form',
  componentId: 's1yqit97-0'
})(['display:grid;grid-template-columns:10fr 1fr 1fr;padding:3px;justify-content:center;box-sizing:border-box;']);
var Input = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.input.withConfig({
  displayName: 'styles__Input',
  componentId: 's1yqit97-1'
})(['width:100%;padding:3px 6px 0 6px;font-size:28px;max-height:100%;background-color:transparent;border-top:none;border-left:none;border-right:none;text-align:center;border-bottom:2px solid #424242;&:focus{outline:none;}&::selection{color:#ffffff;background:#000000;}@media(max-width:767px){font-size:20px;}']);
var ContainerForm = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: 'styles__ContainerForm',
  componentId: 's1yqit97-2'
})(['width:50%;text-align:center;margin:6px auto 0 auto;transition:.3s;@media (max-width:769px){width:80%;}@media(max-width:620px){width:100%;}']);
var Container = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: 'styles__Container',
  componentId: 's1yqit97-3'
})(['background:#ffffff;padding:20px;box-shadow:0 0 25px 15px #D9D9D9;']);
var ButtonSubmit = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.button.withConfig({
  displayName: 'styles__ButtonSubmit',
  componentId: 's1yqit97-4'
})(['background:#fff;width:100%;padding:5px;box-sizing:border-box;border-top:none;border-right:none;border-bottom:2px solid #424242;border-left:none;&:hover{cursor:pointer;}&:focus{outline:none;}']);
var SearcherContainer = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: 'styles__SearcherContainer',
  componentId: 's1yqit97-5'
})(['background:#fff;width:100%;padding:5px;box-sizing:border-box;border-top:none;border-right:none;border-bottom:2px solid #424242;border-left:none;box-sizing:border-box;&:nth-of-type(2){background-color:#000000;}&:hover{cursor:pointer;}&:focus{outline:none;}@media (max-width:769px){max-width:80%;}@media(max-width:620px){max-width:100%;}']);
var GridCard = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: 'styles__GridCard',
  componentId: 's1yqit97-6'
})(['display:grid;grid-template-columns:repeat(auto-fill,minmax(100px,250px));grid-gap:12px;justify-content:center;font-family:\'Anton\',sans-serif;']);
var CardRow = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: 'styles__CardRow',
  componentId: 's1yqit97-7'
})(['filter:', ';background-color:#ffffff;&:hover{cursor:pointer;}'], function (props) {
  return props.blur === 'previewUrl' ? 'blur(3px)' : null;
});
var Figure = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.figure.withConfig({
  displayName: 'styles__Figure',
  componentId: 's1yqit97-8'
})(['margin:0;padding:0;display:flex;justify-content:center;align-items:center;']);
var ImageContainer = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: 'styles__ImageContainer',
  componentId: 's1yqit97-9'
})(['position:relative;']);
var Icon = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: 'styles__Icon',
  componentId: 's1yqit97-10'
})(['border-radius:50%;width:40px;height:40px;background:black;padding:10px;box-sizing:border-box;cursor:pointer;transition:.2s;&:hover{transform:scale(1.2);}']);
var IconContainer = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: 'styles__IconContainer',
  componentId: 's1yqit97-11'
})(['position:absolute;display:grid;grid-template-columns:1fr 1fr;grid-gap:10px;']);
var LoadingContainer = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: 'styles__LoadingContainer',
  componentId: 's1yqit97-12'
})(['height:120vh;display:grid;width:85%;margin:auto;grid-gap:12px;grid-template-columns:repeat(auto-fill,minmax(100px,250px));grid-template-rows:repeat(auto-fill,minmax(220px,250px));justify-content:center;']);
var LoadingCardContainer = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: 'styles__LoadingCardContainer',
  componentId: 's1yqit97-13'
})(['width:100%;height:100%;box-sizing:border-box;background-color:#ffffff;margin-top:15px;']);
var LoadingImage = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: 'styles__LoadingImage',
  componentId: 's1yqit97-14'
})(['background-color:rgb(233,235,238);width:50%;height:50%;border-radius:50%;text-align:center;margin:auto;margin-bottom:16px;margin-top:10px;box-sizing:border-box;animation-name:loadingtwo;animation-duration:.7s;animation-iteration-count:infinite;@keyframes loadingtwo{0%{background:rgb(210,222,225);}100%{background:rgb(233,235,238);}}']);
var LoadingBar = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_styled_components___default.a.div.withConfig({
  displayName: 'styles__LoadingBar',
  componentId: 's1yqit97-15'
})(['background-color:rgb(233,235,238);width:80%;height:8%;border-radius:20px;text-align:center;margin:auto;margin-bottom:10px;box-sizing:border-box;animation-name:loading;animation-duration:.7s;animation-iteration-count:infinite;@keyframes loading{0%{background:rgb(210,222,225);}100%{background:rgb(233,235,238);}}']);

/***/ }),

/***/ "./helpers/time.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return helperTime; });
var helperTime = function helperTime(exactlyTime) {
  var minutes = Math.floor(exactlyTime / 60000);
  var seconds = (exactlyTime % 60000 / 1000).toFixed(0);
  var time = minutes + ":" + seconds;
  return time;
};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_track__ = __webpack_require__("./services/track.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_shared_Loading__ = __webpack_require__("./components/shared/Loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Player__ = __webpack_require__("./components/Player.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_SearchBar__ = __webpack_require__("./components/SearchBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_card__ = __webpack_require__("./components/card.js");
var _jsxFileName = '/Users/rojas/Desktop/find-music-by-spotify-demo/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      searchQuery: '',
      tracks: [],
      loading: false,
      selectedTrack: '',
      songCounter: null,
      showCross: false,
      currentValue: ''
    }, _this.handleSearch = function (event) {
      _this.setState({
        searchQuery: event.target.value,
        currentValue: event.target.value
      });
    }, _this.handleClick = function (e) {
      e.preventDefault();
      if (!_this.state.searchQuery) return null;

      _this.setState({ loading: true });

      __WEBPACK_IMPORTED_MODULE_2__services_track__["a" /* default */].search(_this.state.searchQuery).then(function (response) {
        _this.setState({
          tracks: response.tracks.items,
          loading: false,
          songCounter: response.tracks.items.length,
          showCross: true
        });
      });
    }, _this.setSelectedTrack = function (data) {
      if (!data) return null;
      _this.setState({ selectedTrack: data });
    }, _this.clearSearcher = function () {
      _this.setState({
        currentValue: '',
        showCross: false
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-3513609828' + ' ' + 'container-react-spotify',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'title',
            {
              className: 'jsx-3513609828',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              }
            },
            'React Spotify'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'shortcut icon', href: '../static/favicon.ico', type: 'image/x-icon', className: 'jsx-3513609828',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'icon', href: '../static/favicon.ico', type: 'image/x-icon', className: 'jsx-3513609828',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_SearchBar__["a" /* default */], { query: this.handleClick, value: this.state.currentValue, clearSearcher: this.clearSearcher, showCross: this.state.showCross, search: this.handleSearch, __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          }
        }),
        this.state.songCounter > 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3513609828' + ' ' + 'notification is-danger',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-3513609828' + ' ' + 'is-size-4 results',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            'Resultados: ',
            this.state.songCounter
          )
        ),
        this.state.songCounter === 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'section',
          {
            className: 'jsx-3513609828' + ' ' + 'hero is-danger is-fullheight',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3513609828' + ' ' + 'hero-body',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-3513609828' + ' ' + 'container',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 73
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'h1',
                {
                  className: 'jsx-3513609828' + ' ' + 'title',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                  }
                },
                '\xA1Ups!'
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'h2',
                {
                  className: 'jsx-3513609828' + ' ' + 'subtitle',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                  }
                },
                'No se encontraron resultados con ',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'strong',
                  {
                    className: 'jsx-3513609828',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 76
                    }
                  },
                  this.state.searchQuery
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3513609828' + ' ' + 'reproductor',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Player__["a" /* default */], { selectedTrack: this.state.selectedTrack, __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            }
          })
        ),
        this.state.loading ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_shared_Loading__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          }
        }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          { style: { width: '90%', margin: 'auto' }, className: 'jsx-3513609828',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_card__["a" /* default */], { tracks: this.state.tracks, selectedTrack: this.setSelectedTrack, __source: {
              fileName: _jsxFileName,
              lineNumber: 87
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3513609828',
          css: 'body{font-family:\'Candal\',sans-serif;background:rgb(233,235,238);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlGMkIsQUFHOEMsZ0NBQ0wsNEJBQzlCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yb2phcy9EZXNrdG9wL2ZpbmQtbXVzaWMtYnktc3BvdGlmeS1kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHRyYWNrU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy90cmFjaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0xvYWRpbmcnXG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyJ1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICcuLi9jb21wb25lbnRzL1NlYXJjaEJhcidcbmltcG9ydCBDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvY2FyZCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICB0cmFja3M6IFtdLFxuICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgIHNlbGVjdGVkVHJhY2s6ICcnLFxuICAgIHNvbmdDb3VudGVyOiBudWxsLFxuICAgIHNob3dDcm9zczogZmFsc2UsXG4gICAgY3VycmVudFZhbHVlOiAnJ1xuICB9O1xuXG4gIGhhbmRsZVNlYXJjaCA9IChldmVudCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoUXVlcnk6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICAgIGN1cnJlbnRWYWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfSlcbiAgfVxuXG4gIGhhbmRsZUNsaWNrID0gZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCF0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5KSByZXR1cm4gbnVsbFxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUgfSlcblxuICAgIHRyYWNrU2VydmljZS5zZWFyY2godGhpcy5zdGF0ZS5zZWFyY2hRdWVyeSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdHJhY2tzOiByZXNwb25zZS50cmFja3MuaXRlbXMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgc29uZ0NvdW50ZXI6IHJlc3BvbnNlLnRyYWNrcy5pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgc2hvd0Nyb3NzOiB0cnVlXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkVHJhY2sgPSAoZGF0YSkgPT4ge1xuICAgIGlmKCFkYXRhKSByZXR1cm4gbnVsbFxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZFRyYWNrOiBkYXRhIH0pO1xuICB9XG5cbiAgY2xlYXJTZWFyY2hlciA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGN1cnJlbnRWYWx1ZTogJycsXG4gICAgICBzaG93Q3Jvc3M6IGZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcmVhY3Qtc3BvdGlmeVwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+UmVhY3QgU3BvdGlmeTwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIuLi9zdGF0aWMvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4uL3N0YXRpYy9mYXZpY29uLmljb1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxTZWFyY2hCYXIgcXVlcnk9e3RoaXMuaGFuZGxlQ2xpY2t9IHZhbHVlPXt0aGlzLnN0YXRlLmN1cnJlbnRWYWx1ZX0gY2xlYXJTZWFyY2hlcj17dGhpcy5jbGVhclNlYXJjaGVyfSBzaG93Q3Jvc3M9e3RoaXMuc3RhdGUuc2hvd0Nyb3NzfSBzZWFyY2g9e3RoaXMuaGFuZGxlU2VhcmNofSAvPlxuICAgICAgICB7dGhpcy5zdGF0ZS5zb25nQ291bnRlciA+IDAgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uIGlzLWRhbmdlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaXMtc2l6ZS00IHJlc3VsdHNcIj5SZXN1bHRhZG9zOiB7dGhpcy5zdGF0ZS5zb25nQ291bnRlcn08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHt0aGlzLnN0YXRlLnNvbmdDb3VudGVyID09PSAwICYmIChcbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJoZXJvIGlzLWRhbmdlciBpcy1mdWxsaGVpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPsKhVXBzITwvaDE+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICBObyBzZSBlbmNvbnRyYXJvbiByZXN1bHRhZG9zIGNvbiA8c3Ryb25nPnt0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICApfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcHJvZHVjdG9yXCI+XG4gICAgICAgICAgPFBsYXllciBzZWxlY3RlZFRyYWNrPXt0aGlzLnN0YXRlLnNlbGVjdGVkVHJhY2t9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkaW5nID8gPExvYWRpbmcgLz4gOiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzkwJScsIG1hcmdpbjogJ2F1dG8nIH19PlxuICAgICAgICAgICAgPENhcmQgdHJhY2tzPXt0aGlzLnN0YXRlLnRyYWNrc30gc2VsZWN0ZWRUcmFjaz17dGhpcy5zZXRTZWxlY3RlZFRyYWNrfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDYW5kYWwnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIzMywyMzUsMjM4KTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */'
        })
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./services/config.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var configService = {
  apiUrl: 'https://spotify-demo-api.now.sh'
};
/* harmony default export */ __webpack_exports__["a"] = (configService);

/***/ }),

/***/ "./services/platzi-music.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_trae__ = __webpack_require__("trae");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_trae___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_trae__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__("./services/config.js");



var platziMusicService = __WEBPACK_IMPORTED_MODULE_0_trae___default.a.create({
  baseUrl: __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].apiUrl
});
/* harmony default export */ __webpack_exports__["a"] = (platziMusicService);

/***/ }),

/***/ "./services/track.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__platzi_music__ = __webpack_require__("./services/platzi-music.js");


var trackService = {};

trackService.search = function (q) {
  var type = 'track';

  return __WEBPACK_IMPORTED_MODULE_0__platzi_music__["a" /* default */].get('/search', {
    params: { q: q, type: type }
  }).then(function (res) {
    return res.data;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (trackService);

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "trae":
/***/ (function(module, exports) {

module.exports = require("trae");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map