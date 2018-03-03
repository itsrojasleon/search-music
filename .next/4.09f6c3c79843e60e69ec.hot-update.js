webpackHotUpdate(4,{

/***/ "./components/shared/Banner.js":
false,

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_track__ = __webpack_require__("./services/track.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_shared_Loading__ = __webpack_require__("./components/shared/Loading.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Player__ = __webpack_require__("./components/Player.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_SearchBar__ = __webpack_require__("./components/SearchBar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_card__ = __webpack_require__("./components/card.js");
var _jsxFileName = '/Users/rojas/Desktop/find-music-by-spotify-demo/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

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
      songCounter: null
    }, _this.handleSearch = function (event) {
      _this.setState({
        searchQuery: event.target.value
      });
    }, _this.handleClick = function (e) {
      e.preventDefault();
      if (!_this.state.searchQuery) {
        return null;
      }

      _this.setState({
        loading: true
      });

      __WEBPACK_IMPORTED_MODULE_2__services_track__["a" /* default */].search(_this.state.searchQuery).then(function (response) {
        _this.setState({
          tracks: response.tracks.items,
          loading: false,
          songCounter: response.tracks.items.length
        });
      });
    }, _this.setSelectedTrack = function (data) {
      if (!data) return null;
      _this.setState({
        selectedTrack: data
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          className: 'jsx-2951514123' + ' ' + 'container-react-spotify',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_next_head___default.a,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'title',
            {
              className: 'jsx-2951514123',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            },
            'React Spotify'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'shortcut icon', href: '../static/favicon.ico', type: 'image/x-icon', className: 'jsx-2951514123',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('link', { rel: 'icon', href: '../static/favicon.ico', type: 'image/x-icon', className: 'jsx-2951514123',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_SearchBar__["a" /* default */], { query: this.handleClick, search: this.handleSearch, __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          }
        }),
        this.state.songCounter > 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'div',
          {
            className: 'jsx-2951514123' + ' ' + 'notification is-danger',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'p',
            {
              className: 'jsx-2951514123' + ' ' + 'is-size-4 results',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            },
            'Resultados: ',
            this.state.songCounter
          )
        ),
        this.state.songCounter === 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'section',
          {
            className: 'jsx-2951514123' + ' ' + 'hero is-danger is-fullheight',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'div',
            {
              className: 'jsx-2951514123' + ' ' + 'hero-body',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            },
            __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
              'div',
              {
                className: 'jsx-2951514123' + ' ' + 'container',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                }
              },
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'h1',
                {
                  className: 'jsx-2951514123' + ' ' + 'title',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                  }
                },
                '\xA1Ups!'
              ),
              __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                'h2',
                {
                  className: 'jsx-2951514123' + ' ' + 'subtitle',
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                  }
                },
                'No se encontraron resultados con ',
                __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
                  'strong',
                  {
                    className: 'jsx-2951514123',
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 72
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
            className: 'jsx-2951514123' + ' ' + 'reproductor',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Player__["a" /* default */], { selectedTrack: this.state.selectedTrack, __source: {
              fileName: _jsxFileName,
              lineNumber: 79
            }
          })
        ),
        this.state.loading ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_shared_Loading__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          }
        }) : __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_card__["a" /* default */], { tracks: this.state.tracks, selectedTrack: this.setSelectedTrack, __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          }
        }),
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
          styleId: '2951514123',
          css: '.container-music.jsx-2951514123{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:40px;box-shadow:0 0 10px 5px #ccc;margin-bottom:30px;height:30vh;width:100vw;background-attachment:fixed;background:linear-gradient(to right,#F44336,#EF9A9A);}.image-logo.jsx-2951514123{background-image:url(\'https://image.ibb.co/mcfhvG/logo.png\');height:20vh;background-repeat:no-repeat;}.container-search-bar.jsx-2951514123{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;}.container-button.jsx-2951514123{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.reproductor.jsx-2951514123{position:fixed;bottom:0;z-index:999;width:100%;}.input.jsx-2951514123{width:70%;}.columns.is-multiline.jsx-2951514123{margin-bottom:100px;}.is-selected.jsx-2951514123{background-color:red;}.scale.jsx-2951514123{-webkit-transition:.3s;transition:.3s;}.scale.jsx-2951514123:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);}.results.jsx-2951514123{text-align:center;}@media(max-width:800px){.container-music.jsx-2951514123{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:30vh;}.input.jsx-2951514123{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Gb0IsQUFHMEIsQUFXZ0QsQUFLaEQsQUFJYyxBQUlaLEFBTUwsQUFHVSxBQUdDLEFBR04sQUFHTSxBQUdILEFBSU0sQUFJWCxVQXRCZixDQXVCRSxJQTdCUyxHQXFCWCxFQVpBLENBR0EsR0FYYyxZQUNELEVBYWIsU0FaQSxjQWhCYyxZQUNnQixDQVpULEFBZ0JNLENBMEIzQixHQU9nQixZQUNkLFdBckNGLElBT2UsOERBbkJBLElBZ0JmLFFBSUEsQ0FuQitCLDZCQUNWLG1CQUNQLFlBQ0EsWUFDZ0IsNEJBQzJCLHFEQUN6RCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcm9qYXMvRGVza3RvcC9maW5kLW11c2ljLWJ5LXNwb3RpZnktZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0cmFja1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvdHJhY2snXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9Mb2FkaW5nJ1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllcidcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9TZWFyY2hCYXInXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2NhcmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBzZWFyY2hRdWVyeTogJycsXG4gICAgdHJhY2tzOiBbXSxcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBzZWxlY3RlZFRyYWNrOiAnJyxcbiAgICBzb25nQ291bnRlcjogbnVsbCxcbiAgfTtcblxuICBoYW5kbGVTZWFyY2ggPSAoZXZlbnQpID0+e1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoUXVlcnk6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG5cbiAgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZighdGhpcy5zdGF0ZS5zZWFyY2hRdWVyeSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgIH0pXG5cbiAgICB0cmFja1NlcnZpY2Uuc2VhcmNoKHRoaXMuc3RhdGUuc2VhcmNoUXVlcnkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRyYWNrczogcmVzcG9uc2UudHJhY2tzLml0ZW1zLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIHNvbmdDb3VudGVyOiByZXNwb25zZS50cmFja3MuaXRlbXMubGVuZ3RoLFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZFRyYWNrID0gKGRhdGEpID0+IHtcbiAgICBpZighZGF0YSkgcmV0dXJuIG51bGxcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkVHJhY2s6IGRhdGFcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcmVhY3Qtc3BvdGlmeVwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+UmVhY3QgU3BvdGlmeTwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIuLi9zdGF0aWMvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4uL3N0YXRpYy9mYXZpY29uLmljb1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxTZWFyY2hCYXIgcXVlcnk9e3RoaXMuaGFuZGxlQ2xpY2t9IHNlYXJjaD17dGhpcy5oYW5kbGVTZWFyY2h9IC8+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNvbmdDb3VudGVyID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24gaXMtZGFuZ2VyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpcy1zaXplLTQgcmVzdWx0c1wiPlJlc3VsdGFkb3M6IHt0aGlzLnN0YXRlLnNvbmdDb3VudGVyfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMuc3RhdGUuc29uZ0NvdW50ZXIgPT09IDAgJiYgKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm8gaXMtZGFuZ2VyIGlzLWZ1bGxoZWlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+wqFVcHMhPC9oMT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIE5vIHNlIGVuY29udHJhcm9uIHJlc3VsdGFkb3MgY29uIDxzdHJvbmc+e3RoaXMuc3RhdGUuc2VhcmNoUXVlcnl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwcm9kdWN0b3JcIj5cbiAgICAgICAgICA8UGxheWVyIHNlbGVjdGVkVHJhY2s9e3RoaXMuc3RhdGUuc2VsZWN0ZWRUcmFja30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZyAvPiA6IChcbiAgICAgICAgICA8Q2FyZCB0cmFja3M9e3RoaXMuc3RhdGUudHJhY2tzfSBzZWxlY3RlZFRyYWNrPXt0aGlzLnNldFNlbGVjdGVkVHJhY2t9IC8+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyLW11c2ljIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCAjY2NjO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGNDQzMzYsICNFRjlBOUEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1hZ2UtbG9nbyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2UuaWJiLmNvL21jZmh2Ry9sb2dvLnBuZycpO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHZoO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lci1zZWFyY2gtYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyLWJ1dHRvbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVwcm9kdWN0b3Ige1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1ucy5pcy1tdWx0aWxpbmUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pcy1zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zY2FsZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zY2FsZTpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZXN1bHRzIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXItbXVzaWMge1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5wdXQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */'
        })
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

var _default = Home;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, 'Home', '/Users/rojas/Desktop/find-music-by-spotify-demo/pages/index.js');
  reactHotLoader.register(_default, 'default', '/Users/rojas/Desktop/find-music-by-spotify-demo/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.09f6c3c79843e60e69ec.hot-update.js.map