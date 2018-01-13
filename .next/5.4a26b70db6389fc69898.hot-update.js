webpackHotUpdate(5,{

/***/ 552:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(95);

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = __webpack_require__(35);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(38);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(37);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(551);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _track = __webpack_require__(559);

var _track2 = _interopRequireDefault(_track);

var _Track = __webpack_require__(554);

var _Track2 = _interopRequireDefault(_Track);

var _head = __webpack_require__(201);

var _head2 = _interopRequireDefault(_head);

var _Loading = __webpack_require__(556);

var _Loading2 = _interopRequireDefault(_Loading);

var _Banner = __webpack_require__(555);

var _Banner2 = _interopRequireDefault(_Banner);

var _Player = __webpack_require__(553);

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/pages/index.js?entry';


var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home(props) {
    (0, _classCallCheck3.default)(this, Home);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call(this, props));

    _this.state = {
      searchQuery: '',
      tracks: [],
      loading: false,
      selectedTrack: '',
      songCounter: null
    };
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.setSelectedTrack = _this.setSelectedTrack.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Home, [{
    key: 'handleSearch',
    value: function handleSearch(event) {
      this.setState({
        searchQuery: event.target.value
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _this2 = this;

      e.preventDefault();
      if (!this.state.searchQuery) {
        return null;
      }

      this.setState({
        loading: true
      });

      _track2.default.search(this.state.searchQuery).then(function (response) {
        _this2.setState({
          tracks: response.tracks.items,
          loading: false,
          songCounter: response.tracks.items.length
        });
      });
    }
  }, {
    key: 'setSelectedTrack',
    value: function setSelectedTrack(data) {
      if (!data) {
        return null;
      }
      this.setState({
        selectedTrack: data
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement('div', { className: 'container-react-spotify', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('title', {
        'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'React Spotify'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '../static/favicon.ico', type: 'image/x-icon', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement('link', { rel: 'icon', href: '../static/favicon.ico', type: 'image/x-icon', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement('div', { className: 'columns container-music', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('div', { className: 'column is-8', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('div', { className: 'field', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('div', { className: 'control', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('form', { onSubmit: this.handleClick, className: 'container-search-bar', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('input', {
        className: 'input is-danger is-medium',
        type: 'text',
        placeholder: 'Busca tu canci\xF3n favorita',
        onChange: this.handleSearch,
        'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }))))), _react2.default.createElement('div', { className: 'column container-button', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, _react2.default.createElement('a', { onClick: this.handleClick, className: 'button is-danger is-medium', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, 'Buscar'))), this.state.songCounter > 0 && _react2.default.createElement('div', { className: 'notification is-danger', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, _react2.default.createElement('p', { className: 'is-size-4 results', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, 'Resultados: ', this.state.songCounter)), this.state.songCounter === 0 && _react2.default.createElement('section', { className: 'hero is-danger is-fullheight', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        }
      }, _react2.default.createElement('div', { className: 'hero-body', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, '\xA1Ups!'), _react2.default.createElement('h2', { className: 'subtitle', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, 'No se encontraron resultados con ', _react2.default.createElement('strong', {
        'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, this.state.searchQuery))))), _react2.default.createElement('div', { className: 'reproductor', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement(_Player2.default, { selectedTrack: this.state.selectedTrack, __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      })), this.state.loading ? _react2.default.createElement(_Loading2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }) : _react2.default.createElement('div', { className: 'columns is-multiline', 'data-jsx': 2361373708,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, this.state.tracks.map(function (track) {
        return _react2.default.createElement('div', { className: 'column scale is-3', key: track.id, 'data-jsx': 2361373708,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          }
        }, _react2.default.createElement(_Track2.default, (0, _extends3.default)({ onClick: _this3.setSelectedTrack }, track, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        })));
      })), _react2.default.createElement(_style2.default, {
        styleId: 2361373708,
        css: '.container-music[data-jsx="2361373708"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:40px;box-shadow:0 0 10px 5px #ccc;margin-bottom:30px;height:30vh;width:100vw;background-attachment:fixed;background:linear-gradient(to right, #F44336, #EF9A9A)}.image-logo[data-jsx="2361373708"]{background-image:url(\'https://image.ibb.co/mcfhvG/logo.png\');height:20vh;background-repeat:no-repeat}.container-search-bar[data-jsx="2361373708"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.container-button[data-jsx="2361373708"]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.reproductor[data-jsx="2361373708"]{position:fixed;bottom:0;z-index:999;width:100%}.input[data-jsx="2361373708"]{width:70%}.columns.is-multiline[data-jsx="2361373708"]{margin-bottom:100px}.is-selected[data-jsx="2361373708"]{background-color:red}.scale[data-jsx="2361373708"]{-webkit-transition:.3s;transition:.3s}.scale[data-jsx="2361373708"]:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}.results[data-jsx="2361373708"]{-webkit-text-align:center;text-align:center}@media(max-width:800px){.container-music[data-jsx="2361373708"]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:30vh}.input[data-jsx="2361373708"]{width:100%}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFIb0IsQUFHMEIsQUFDZ0QsQUFDaEQsQUFDYyxBQUNaLEFBQ0wsQUFDVSxBQUNDLEFBQ04sQUFDTSxBQUNILEFBRU0sQUFDWCxXQVJRLENBUUssSUFUVyxLQUVOLENBQ0MsSUFIOEIsYUFBd0IsQ0FJNUQsTUFFRyxLQU5vRSxXQUhYLGFBQXlDLEdBRGxGLEFBRU0sQUFPbkIsR0FHbUIsYUFBYSxVQVgwRSxLQUVyRixrRUFIa0IsSUFFVCxRQUNFLEVBSGlELDhCQUFnQyxvQkFBeUIsYUFBeUIsYUFBeUMsNkJBQW9FLHdEQUFXIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdWFubHVpc3JvamFzbGVvbi9EZXNrdG9wL2ZpbmQtbXVzaWMtYnktc3BvdGlmeS1kZW1vIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0cmFja1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvdHJhY2snO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhY2snO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0xvYWRpbmcnO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9CYW5uZXInO1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgICAgdHJhY2tzOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRUcmFjazogJycsXG4gICAgICBzb25nQ291bnRlcjogbnVsbCxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU2VhcmNoID0gdGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0U2VsZWN0ZWRUcmFjayA9IHRoaXMuc2V0U2VsZWN0ZWRUcmFjay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2hRdWVyeTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCF0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgfSlcblxuICAgIHRyYWNrU2VydmljZS5zZWFyY2godGhpcy5zdGF0ZS5zZWFyY2hRdWVyeSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdHJhY2tzOiByZXNwb25zZS50cmFja3MuaXRlbXMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgc29uZ0NvdW50ZXI6IHJlc3BvbnNlLnRyYWNrcy5pdGVtcy5sZW5ndGgsXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkVHJhY2soZGF0YSkge1xuICAgIGlmKCFkYXRhKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkVHJhY2s6IGRhdGEsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJlYWN0LXNwb3RpZnlcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlJlYWN0IFNwb3RpZnk8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYnVsbWEvMC41LjAvY3NzL2J1bG1hLm1pbi5jc3NcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiLi4vc3RhdGljL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIuLi9zdGF0aWMvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7Lyo8QmFubmVyIC8+Ki99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBjb250YWluZXItbXVzaWNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJjb250YWluZXItc2VhcmNoLWJhclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLWRhbmdlciBpcy1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2EgdHUgY2FuY2nDs24gZmF2b3JpdGFcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2h9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250YWluZXItYnV0dG9uXCI+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyIGlzLW1lZGl1bVwiPkJ1c2NhcjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNvbmdDb3VudGVyID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24gaXMtZGFuZ2VyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpcy1zaXplLTQgcmVzdWx0c1wiPlJlc3VsdGFkb3M6IHt0aGlzLnN0YXRlLnNvbmdDb3VudGVyfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMuc3RhdGUuc29uZ0NvdW50ZXIgPT09IDAgJiYgKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm8gaXMtZGFuZ2VyIGlzLWZ1bGxoZWlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+wqFVcHMhPC9oMT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIE5vIHNlIGVuY29udHJhcm9uIHJlc3VsdGFkb3MgY29uIDxzdHJvbmc+e3RoaXMuc3RhdGUuc2VhcmNoUXVlcnl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwcm9kdWN0b3JcIj5cbiAgICAgICAgICA8UGxheWVyIHNlbGVjdGVkVHJhY2s9e3RoaXMuc3RhdGUuc2VsZWN0ZWRUcmFja30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZyAvPiA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbXVsdGlsaW5lXCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS50cmFja3MubWFwKCh0cmFjaykgPT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gc2NhbGUgaXMtM1wiIGtleT17dHJhY2suaWR9PlxuICAgICAgICAgICAgICAgIDxUcmFjayBvbkNsaWNrPXt0aGlzLnNldFNlbGVjdGVkVHJhY2t9IHsuLi50cmFja30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lci1tdXNpYyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDQwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCA1cHggI2NjYztcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjRjQ0MzM2LCAjRUY5QTlBKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltYWdlLWxvZ28ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlLmliYi5jby9tY2ZodkcvbG9nby5wbmcnKTtcbiAgICAgICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXItc2VhcmNoLWJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lci1idXR0b24ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlcHJvZHVjdG9yIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbnMuaXMtbXVsdGlsaW5lIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXMtc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2NhbGUge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2NhbGU6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVzdWx0cyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyLW11c2ljIHtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40YTI2YjcwZGI2Mzg5ZmM2OTg5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/ZjhhODM5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHRyYWNrU2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy90cmFjayc7XG5pbXBvcnQgVHJhY2sgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFjayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExvYWRpbmcgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvTG9hZGluZyc7XG5pbXBvcnQgQmFubmVyIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0Jhbm5lcic7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvUGxheWVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzZWFyY2hRdWVyeTogJycsXG4gICAgICB0cmFja3M6IFtdLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBzZWxlY3RlZFRyYWNrOiAnJyxcbiAgICAgIHNvbmdDb3VudGVyOiBudWxsLFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVTZWFyY2ggPSB0aGlzLmhhbmRsZVNlYXJjaC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRTZWxlY3RlZFRyYWNrID0gdGhpcy5zZXRTZWxlY3RlZFRyYWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVTZWFyY2goZXZlbnQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlYXJjaFF1ZXJ5OiBldmVudC50YXJnZXQudmFsdWUsXG4gICAgfSk7XG4gIH1cblxuXG4gIGhhbmRsZUNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYoIXRoaXMuc3RhdGUuc2VhcmNoUXVlcnkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICB9KVxuXG4gICAgdHJhY2tTZXJ2aWNlLnNlYXJjaCh0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICB0cmFja3M6IHJlc3BvbnNlLnRyYWNrcy5pdGVtcyxcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICBzb25nQ291bnRlcjogcmVzcG9uc2UudHJhY2tzLml0ZW1zLmxlbmd0aCxcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWRUcmFjayhkYXRhKSB7XG4gICAgaWYoIWRhdGEpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VsZWN0ZWRUcmFjazogZGF0YSxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItcmVhY3Qtc3BvdGlmeVwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+UmVhY3QgU3BvdGlmeTwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9idWxtYS8wLjUuMC9jc3MvYnVsbWEubWluLmNzc1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIuLi9zdGF0aWMvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4uL3N0YXRpYy9mYXZpY29uLmljb1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIHsvKjxCYW5uZXIgLz4qL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zIGNvbnRhaW5lci1tdXNpY1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImNvbnRhaW5lci1zZWFyY2gtYmFyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtZGFuZ2VyIGlzLW1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCdXNjYSB0dSBjYW5jacOzbiBmYXZvcml0YVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbnRhaW5lci1idXR0b25cIj5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYW5nZXIgaXMtbWVkaXVtXCI+QnVzY2FyPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuc29uZ0NvdW50ZXIgPiAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbiBpcy1kYW5nZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlzLXNpemUtNCByZXN1bHRzXCI+UmVzdWx0YWRvczoge3RoaXMuc3RhdGUuc29uZ0NvdW50ZXJ9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7dGhpcy5zdGF0ZS5zb25nQ291bnRlciA9PT0gMCAmJiAoXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVybyBpcy1kYW5nZXIgaXMtZnVsbGhlaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj7CoVVwcyE8L2gxPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgTm8gc2UgZW5jb250cmFyb24gcmVzdWx0YWRvcyBjb24gPHN0cm9uZz57dGhpcy5zdGF0ZS5zZWFyY2hRdWVyeX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXByb2R1Y3RvclwiPlxuICAgICAgICAgIDxQbGF5ZXIgc2VsZWN0ZWRUcmFjaz17dGhpcy5zdGF0ZS5zZWxlY3RlZFRyYWNrfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkaW5nIC8+IDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRyYWNrcy5tYXAoKHRyYWNrKSA9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBzY2FsZSBpcy0zXCIga2V5PXt0cmFjay5pZH0+XG4gICAgICAgICAgICAgICAgPFRyYWNrIG9uQ2xpY2s9e3RoaXMuc2V0U2VsZWN0ZWRUcmFja30gey4uLnRyYWNrfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyLW11c2ljIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCAjY2NjO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGNDQzMzYsICNFRjlBOUEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW1hZ2UtbG9nbyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vaW1hZ2UuaWJiLmNvL21jZmh2Ry9sb2dvLnBuZycpO1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHZoO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lci1zZWFyY2gtYmFyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyLWJ1dHRvbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVwcm9kdWN0b3Ige1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1ucy5pcy1tdWx0aWxpbmUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pcy1zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zY2FsZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuM3M7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zY2FsZTpob3ZlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZXN1bHRzIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgIC5jb250YWluZXItbXVzaWMge1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMwdmg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5wdXQge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFOQTtBQU1BO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBOzs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFIQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBS0E7Ozs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFGQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBOztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBSkE7O0FBQUE7QUFVQTtBQVZBO0FBQ0E7O0FBU0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBR0E7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQWpEQTtBQXFIQTtBQXJIQTs7Ozs7QUFyREE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=