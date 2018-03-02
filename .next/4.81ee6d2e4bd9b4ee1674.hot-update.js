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
      disabled: '',
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
          disabled: 'is-static'
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
          className: 'jsx-3257850895',
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
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css', className: 'jsx-3257850895',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-3257850895' + ' ' + ('card ' + this.state.previewUrl),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3257850895' + ' ' + 'card-image',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'figure',
              {
                className: 'jsx-3257850895' + ' ' + 'image is-4by3',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.album.images[0].url, alt: 'Image', className: 'jsx-3257850895',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-3257850895' + ' ' + 'card-content',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-3257850895' + ' ' + 'media',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-3257850895' + ' ' + 'media-left',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'figure',
                  {
                    className: 'jsx-3257850895' + ' ' + 'image is-48x48',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    }
                  },
                  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('img', { src: this.props.album.images[2].url, alt: 'Image', className: 'jsx-3257850895',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 44
                    }
                  })
                )
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'div',
                {
                  className: 'jsx-3257850895' + ' ' + 'media-content',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'p',
                  {
                    className: 'jsx-3257850895' + ' ' + 'title is-4',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    }
                  },
                  this.props.name
                ),
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'p',
                  {
                    className: 'jsx-3257850895' + ' ' + 'subtitle is-6',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    }
                  },
                  this.props.artists[0].name
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-3257850895' + ' ' + 'content',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'small',
                {
                  className: 'jsx-3257850895',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  }
                },
                this.state.time
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('br', {
                className: 'jsx-3257850895',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 55
                }
              }),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'small',
                {
                  className: 'jsx-3257850895',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                  }
                },
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'a',
                  { onClick: this.selectTrack, className: 'jsx-3257850895' + ' ' + ('button is-danger ' + this.state.disabled),
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 57
                    }
                  },
                  '\u25B6\uFE0E'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '3257850895',
          css: '.card.preview-url.jsx-3257850895{cursor:no-drop;-webkit-filter:blur(3px);filter:blur(3px);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkRvQixBQUc0QixlQUNFLDBDQUNuQiIsImZpbGUiOiJjb21wb25lbnRzL1RyYWNrLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yb2phcy9EZXNrdG9wL2ZpbmQtbXVzaWMtYnktc3BvdGlmeS1kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHByZXZpZXdVcmw6ICcnLFxuICAgIGRpc2FibGVkOiAnJyxcbiAgICB0aW1lOiB0aGlzLnByb3BzLmR1cmF0aW9uX21zLFxuICB9XG4gIHNlbGVjdFRyYWNrID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzKVxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmKCF0aGlzLnByb3BzLnByZXZpZXdfdXJsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcHJldmlld1VybDogJ3ByZXZpZXctdXJsJyxcbiAgICAgICAgZGlzYWJsZWQ6ICdpcy1zdGF0aWMnLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aGlzLnN0YXRlLnRpbWUgLyA2MDAwMClcbiAgICBjb25zdCBzZWNvbmRzID0gKHRoaXMuc3RhdGUudGltZSAlIDYwMDAwIC8gMTAwMCkudG9GaXhlZCgwKVxuICAgIGNvbnN0IHRpbWUgPSBgJHttaW51dGVzfToke3NlY29uZHN9YFxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aW1lIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYnVsbWEvMC41LjAvY3NzL2J1bG1hLm1pbi5jc3NcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZCAke3RoaXMuc3RhdGUucHJldmlld1VybH1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtNGJ5M1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5hbGJ1bS5pbWFnZXNbMF0udXJsfSBhbHQ9XCJJbWFnZVwiIC8+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTQ4eDQ4XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5hbGJ1bS5pbWFnZXNbMl0udXJsfSBhbHQ9XCJJbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+e3RoaXMucHJvcHMubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGUgaXMtNlwiPnt0aGlzLnByb3BzLmFydGlzdHNbMF0ubmFtZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICA8c21hbGw+e3RoaXMuc3RhdGUudGltZX08L3NtYWxsPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGJ1dHRvbiBpcy1kYW5nZXIgJHt0aGlzLnN0YXRlLmRpc2FibGVkfWB9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0VHJhY2t9PuKWtu+4jjwvYT5cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jYXJkLnByZXZpZXctdXJsIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigzcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Track.js */'
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
//# sourceMappingURL=4.81ee6d2e4bd9b4ee1674.hot-update.js.map