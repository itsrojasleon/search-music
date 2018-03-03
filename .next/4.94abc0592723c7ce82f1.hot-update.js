webpackHotUpdate(4,{

/***/ "./components/Track.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_styles__ = __webpack_require__("./helpers/styles.js");
var _jsxFileName = '/Users/rojas/Desktop/find-music-by-spotify-demo/components/Track.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





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
      time: _this.props.duration_ms
    }, _this.selectTrack = function () {
      _this.props.onClick(_this.props);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Track, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.preview_url) {
        this.setState({
          previewUrl: 'preview-url',
          disabled: 'true'
        });
      }

      var minutes = Math.floor(this.state.time / 60000);
      var seconds = (this.state.time % 60000 / 1000).toFixed(0);
      var time = minutes + ':' + seconds;
      this.setState({ time: time });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-653727978',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css', className: 'jsx-653727978',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__helpers_styles__["b" /* CardRow */],
          { className: '' + this.state.previewUrl, __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'figure',
            {
              className: 'jsx-653727978',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.album.images[0].url, alt: 'Image', className: 'jsx-653727978',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-653727978',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-653727978',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 39
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'figure',
                {
                  className: 'jsx-653727978',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.album.images[2].url, alt: 'Image', className: 'jsx-653727978',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-653727978',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'p',
                  {
                    className: 'jsx-653727978',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
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
                      lineNumber: 45
                    }
                  },
                  this.props.artists[0].name
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-653727978',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'small',
                {
                  className: 'jsx-653727978',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                  }
                },
                this.state.time
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                className: 'jsx-653727978',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'small',
                {
                  className: 'jsx-653727978',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'button',
                  { disabled: this.state.disabled, onClick: this.selectTrack, className: 'jsx-653727978',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    }
                  },
                  '\u25B6\uFE0E'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '653727978',
          css: '.preview-url.jsx-653727978{cursor:no-drop;-webkit-filter:blur(3px);filter:blur(3px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0RvQixBQUc0QixlQUNFLDBDQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL1RyYWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yb2phcy9EZXNrdG9wL2ZpbmQtbXVzaWMtYnktc3BvdGlmeS1kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQ2FyZFJvdyB9IGZyb20gJy4uL2hlbHBlcnMvc3R5bGVzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHByZXZpZXdVcmw6ICcnLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB0aW1lOiB0aGlzLnByb3BzLmR1cmF0aW9uX21zLFxuICB9XG4gIHNlbGVjdFRyYWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzKVxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmKCF0aGlzLnByb3BzLnByZXZpZXdfdXJsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcHJldmlld1VybDogJ3ByZXZpZXctdXJsJyxcbiAgICAgICAgZGlzYWJsZWQ6ICd0cnVlJyxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGhpcy5zdGF0ZS50aW1lIC8gNjAwMDApXG4gICAgY29uc3Qgc2Vjb25kcyA9ICh0aGlzLnN0YXRlLnRpbWUgJSA2MDAwMCAvIDEwMDApLnRvRml4ZWQoMClcbiAgICBjb25zdCB0aW1lID0gYCR7bWludXRlc306JHtzZWNvbmRzfWBcbiAgICB0aGlzLnNldFN0YXRlKHsgdGltZSB9KVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9idWxtYS8wLjUuMC9jc3MvYnVsbWEubWluLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPENhcmRSb3cgY2xhc3NOYW1lPXtgJHt0aGlzLnN0YXRlLnByZXZpZXdVcmx9YH0+XG4gICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmFsYnVtLmltYWdlc1swXS51cmx9IGFsdD1cIkltYWdlXCIgLz5cbiAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGZpZ3VyZT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5hbGJ1bS5pbWFnZXNbMl0udXJsfSBhbHQ9XCJJbWFnZVwiIC8+XG4gICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmFydGlzdHNbMF0ubmFtZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c21hbGw+e3RoaXMuc3RhdGUudGltZX08L3NtYWxsPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0VHJhY2t9PuKWtu+4jjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZFJvdz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5wcmV2aWV3LXVybCB7XG4gICAgICAgICAgICBjdXJzb3I6IG5vLWRyb3A7XG4gICAgICAgICAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Track.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Track;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Track;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Track, 'Track', '/Users/rojas/Desktop/find-music-by-spotify-demo/components/Track.js');
  reactHotLoader.register(_default, 'default', '/Users/rojas/Desktop/find-music-by-spotify-demo/components/Track.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.94abc0592723c7ce82f1.hot-update.js.map