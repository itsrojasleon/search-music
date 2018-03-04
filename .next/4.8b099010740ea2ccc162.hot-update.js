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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_time__ = __webpack_require__("./helpers/time.js");
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
      this.setState({ time: Object(__WEBPACK_IMPORTED_MODULE_4__helpers_time__["a" /* helperTime */])(this.state.time) });
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3__helpers_styles__["b" /* CardRow */],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css', className: 'jsx-653727978',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-653727978' + ' ' + ('' + this.state.previewUrl),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'figure',
            {
              className: 'jsx-653727978',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 32
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { style: { maxWidth: '100%' }, src: this.props.album.images[0].url, alt: 'Image', className: 'jsx-653727978',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-653727978',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-653727978',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'figure',
                {
                  className: 'jsx-653727978',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { style: { maxWidth: '100%' }, src: this.props.album.images[2].url, alt: 'Image', className: 'jsx-653727978',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-653727978',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'p',
                  {
                    className: 'jsx-653727978',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 41
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
                      lineNumber: 42
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
                  lineNumber: 45
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'small',
                {
                  className: 'jsx-653727978',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                  }
                },
                this.state.time
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                className: 'jsx-653727978',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 47
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'small',
                {
                  className: 'jsx-653727978',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'button',
                  { disabled: this.state.disabled, onClick: this.selectTrack, className: 'jsx-653727978',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
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
          css: '.preview-url.jsx-653727978{cursor:no-drop;-webkit-filter:blur(3px);filter:blur(3px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcURvQixBQUc0QixlQUNFLDBDQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL1RyYWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yb2phcy9EZXNrdG9wL2ZpbmQtbXVzaWMtYnktc3BvdGlmeS1kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgQ2FyZFJvdyB9IGZyb20gJy4uL2hlbHBlcnMvc3R5bGVzJ1xuaW1wb3J0IHsgaGVscGVyVGltZSB9IGZyb20gJy4uL2hlbHBlcnMvdGltZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJhY2sgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBwcmV2aWV3VXJsOiAnJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdGltZTogdGhpcy5wcm9wcy5kdXJhdGlvbl9tcyxcbiAgfVxuICBzZWxlY3RUcmFjayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcylcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZighdGhpcy5wcm9wcy5wcmV2aWV3X3VybCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHByZXZpZXdVcmw6ICdwcmV2aWV3LXVybCcsXG4gICAgICAgIGRpc2FibGVkOiAndHJ1ZScsXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgdGltZTogaGVscGVyVGltZSh0aGlzLnN0YXRlLnRpbWUpIH0pXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q2FyZFJvdz5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9idWxtYS8wLjUuMC9jc3MvYnVsbWEubWluLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuc3RhdGUucHJldmlld1VybH1gfT5cbiAgICAgICAgICA8ZmlndXJlPlxuICAgICAgICAgICAgPGltZyBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnIH19IHNyYz17dGhpcy5wcm9wcy5hbGJ1bS5pbWFnZXNbMF0udXJsfSBhbHQ9XCJJbWFnZVwiIC8+XG4gICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxmaWd1cmU+XG4gICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnIH19IHNyYz17dGhpcy5wcm9wcy5hbGJ1bS5pbWFnZXNbMl0udXJsfSBhbHQ9XCJJbWFnZVwiIC8+XG4gICAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLmFydGlzdHNbMF0ubmFtZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8c21hbGw+e3RoaXMuc3RhdGUudGltZX08L3NtYWxsPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuZGlzYWJsZWR9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0VHJhY2t9PuKWtu+4jjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnByZXZpZXctdXJsIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigzcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9DYXJkUm93PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=components/Track.js */'
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
//# sourceMappingURL=4.8b099010740ea2ccc162.hot-update.js.map