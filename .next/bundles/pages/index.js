
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

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

      return _react2.default.createElement('div', { className: 'container-react-spotify', 'data-jsx': 3599425410,
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
        'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'React Spotify'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '../static/favicon.ico', type: 'image/x-icon', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement('link', { rel: 'icon', href: '../static/favicon.ico', type: 'image/x-icon', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      })), _react2.default.createElement('div', { className: 'columns container-music', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('img', { src: 'https://image.ibb.co/mcfhvG/logo.png', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }), _react2.default.createElement('div', { className: 'column is-8', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('div', { className: 'field', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }, _react2.default.createElement('div', { className: 'control', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement('form', { onSubmit: this.handleClick, className: 'container-search-bar', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('input', {
        className: 'input is-danger is-medium',
        type: 'text',
        placeholder: 'Busca tu canci\xF3n favorita',
        onChange: this.handleSearch,
        'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }))))), _react2.default.createElement('div', { className: 'column container-button', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement('a', { onClick: this.handleClick, className: 'button is-danger is-medium', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, 'Buscar'))), this.state.songCounter > 0 && _react2.default.createElement('div', { className: 'notification is-danger', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, _react2.default.createElement('p', { className: 'is-size-4 results', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        }
      }, 'Resultados: ', this.state.songCounter)), this.state.songCounter === 0 && _react2.default.createElement('section', { className: 'hero is-danger is-fullheight', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        }
      }, _react2.default.createElement('div', { className: 'hero-body', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        }
      }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, '\xA1Ups!'), _react2.default.createElement('h2', { className: 'subtitle', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, 'No se encontraron resultados con ', _react2.default.createElement('strong', {
        'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, this.state.searchQuery))))), _react2.default.createElement('div', { className: 'reproductor', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement(_Player2.default, { selectedTrack: this.state.selectedTrack, __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      })), this.state.loading ? _react2.default.createElement(_Loading2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }) : _react2.default.createElement('div', { className: 'columns is-multiline', 'data-jsx': 3599425410,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, this.state.tracks.map(function (track) {
        return _react2.default.createElement('div', { className: 'column scale is-3', key: track.id, 'data-jsx': 3599425410,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        }, _react2.default.createElement(_Track2.default, (0, _extends3.default)({ onClick: _this3.setSelectedTrack }, track, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          }
        })));
      })), _react2.default.createElement(_style2.default, {
        styleId: 3599425410,
        css: '.container-music[data-jsx="3599425410"]{background-image:url(\'http://www.thebostoncalendar.com/system/events/photos/000/111/997/original/15626282_1265806610150656_195814471174752819_o.jpg?1483524751\');display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:40px;box-shadow:0 0 10px 2px #C7C7C7;margin-bottom:30px;height:80vh;width:100vw;background-attachment:fixed}.image-logo[data-jsx="3599425410"]{background-image:url(\'https://image.ibb.co/mcfhvG/logo.png\');height:20vh;background-repeat:no-repeat}.container-search-bar[data-jsx="3599425410"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.container-button[data-jsx="3599425410"]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.reproductor[data-jsx="3599425410"]{position:fixed;bottom:0;z-index:999;width:100%}.input[data-jsx="3599425410"]{width:70%}.columns.is-multiline[data-jsx="3599425410"]{margin-bottom:100px}.is-selected[data-jsx="3599425410"]{background-color:red}.scale[data-jsx="3599425410"]{-webkit-transition:.3s;transition:.3s}.scale[data-jsx="3599425410"]:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}.results[data-jsx="3599425410"]{-webkit-text-align:center;text-align:center}@media(max-width:800px){.container-music[data-jsx="3599425410"]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:30vh}.input[data-jsx="3599425410"]{width:100%}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNIb0IsQUFHOEssQUFDcEcsQUFDaEQsQUFDYyxBQUNaLEFBQ0wsQUFDVSxBQUNDLEFBQ04sQUFDTSxBQUNILEFBRU0sQUFDWCxXQVJRLENBUUssSUFUVyxLQUVOLENBQ0MsSUFIOEIsYUFBd0IsQ0FJNUQsTUFFRyxLQU5vRSxXQUhYLGFBQXlDLEdBQzVFLEFBT25CLEdBR21CLGFBQWEsVUFYMEUsS0FFckYscURBSHNJLGlCQUU3SCxRQUNFLHFEQUgySixpR0FBMEIsY0FBNkMsaUNBQWdDLG9CQUF5QixhQUF5QixhQUF5Qyw2QkFBVyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVhbmx1aXNyb2phc2xlb24vRGVza3RvcC9maW5kLW11c2ljLWJ5LXNwb3RpZnktZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdHJhY2tTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2VzL3RyYWNrJztcbmltcG9ydCBUcmFjayBmcm9tICcuLi9jb21wb25lbnRzL1RyYWNrJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9Mb2FkaW5nJztcbmltcG9ydCBCYW5uZXIgZnJvbSAnLi4vY29tcG9uZW50cy9zaGFyZWQvQmFubmVyJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9QbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlYXJjaFF1ZXJ5OiAnJyxcbiAgICAgIHRyYWNrczogW10sXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkVHJhY2s6ICcnLFxuICAgICAgc29uZ0NvdW50ZXI6IG51bGwsXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZVNlYXJjaCA9IHRoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFNlbGVjdGVkVHJhY2sgPSB0aGlzLnNldFNlbGVjdGVkVHJhY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZVNlYXJjaChldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2VhcmNoUXVlcnk6IGV2ZW50LnRhcmdldC52YWx1ZSxcbiAgICB9KTtcbiAgfVxuXG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZighdGhpcy5zdGF0ZS5zZWFyY2hRdWVyeSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgIH0pXG5cbiAgICB0cmFja1NlcnZpY2Uuc2VhcmNoKHRoaXMuc3RhdGUuc2VhcmNoUXVlcnkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHRyYWNrczogcmVzcG9uc2UudHJhY2tzLml0ZW1zLFxuICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgIHNvbmdDb3VudGVyOiByZXNwb25zZS50cmFja3MuaXRlbXMubGVuZ3RoLFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gIH1cblxuICBzZXRTZWxlY3RlZFRyYWNrKGRhdGEpIHtcbiAgICBpZighZGF0YSkge1xuICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZFRyYWNrOiBkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1yZWFjdC1zcG90aWZ5XCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5SZWFjdCBTcG90aWZ5PC90aXRsZT5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuanMuY2xvdWRmbGFyZS5jb20vYWpheC9saWJzL2J1bG1hLzAuNS4wL2Nzcy9idWxtYS5taW4uY3NzXCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi4uL3N0YXRpYy9mYXZpY29uLmljb1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiLi4vc3RhdGljL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgey8qPEJhbm5lciAvPiovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgY29udGFpbmVyLW11c2ljXCI+XG4gICAgICAgIDxpbWcgc3JjPXsnaHR0cHM6Ly9pbWFnZS5pYmIuY28vbWNmaHZHL2xvZ28ucG5nJ30gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBpcy04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJjb250YWluZXItc2VhcmNoLWJhclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0IGlzLWRhbmdlciBpcy1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQnVzY2EgdHUgY2FuY2nDs24gZmF2b3JpdGFcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVTZWFyY2h9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBjb250YWluZXItYnV0dG9uXCI+XG4gICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyIGlzLW1lZGl1bVwiPkJ1c2NhcjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLnNvbmdDb3VudGVyID4gMCAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24gaXMtZGFuZ2VyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJpcy1zaXplLTQgcmVzdWx0c1wiPlJlc3VsdGFkb3M6IHt0aGlzLnN0YXRlLnNvbmdDb3VudGVyfTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge3RoaXMuc3RhdGUuc29uZ0NvdW50ZXIgPT09IDAgJiYgKFxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhlcm8gaXMtZGFuZ2VyIGlzLWZ1bGxoZWlnaHRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyby1ib2R5XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+wqFVcHMhPC9oMT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIE5vIHNlIGVuY29udHJhcm9uIHJlc3VsdGFkb3MgY29uIDxzdHJvbmc+e3RoaXMuc3RhdGUuc2VhcmNoUXVlcnl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICl9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwcm9kdWN0b3JcIj5cbiAgICAgICAgICA8UGxheWVyIHNlbGVjdGVkVHJhY2s9e3RoaXMuc3RhdGUuc2VsZWN0ZWRUcmFja30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmxvYWRpbmcgPyA8TG9hZGluZyAvPiA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbnMgaXMtbXVsdGlsaW5lXCI+XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS50cmFja3MubWFwKCh0cmFjaykgPT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gc2NhbGUgaXMtM1wiIGtleT17dHJhY2suaWR9PlxuICAgICAgICAgICAgICAgIDxUcmFjayBvbkNsaWNrPXt0aGlzLnNldFNlbGVjdGVkVHJhY2t9IHsuLi50cmFja30gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbnRhaW5lci1tdXNpYyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly93d3cudGhlYm9zdG9uY2FsZW5kYXIuY29tL3N5c3RlbS9ldmVudHMvcGhvdG9zLzAwMC8xMTEvOTk3L29yaWdpbmFsLzE1NjI2MjgyXzEyNjU4MDY2MTAxNTA2NTZfMTk1ODE0NDcxMTc0NzUyODE5X28uanBnPzE0ODM1MjQ3NTEnKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDJweCAjQzdDN0M3O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pbWFnZS1sb2dvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZS5pYmIuY28vbWNmaHZHL2xvZ28ucG5nJyk7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyLXNlYXJjaC1iYXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXItYnV0dG9uIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZXByb2R1Y3RvciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW5zLmlzLW11bHRpbGluZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmlzLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNjYWxlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IC4zcztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNjYWxlOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlc3VsdHMge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAgICAgLmNvbnRhaW5lci1tdXNpYyB7XG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgIGhlaWdodDogMzB2aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
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

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(551);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/components/Player.js";


var Player = function Player(_ref) {
  var selectedTrack = _ref.selectedTrack;

  return _react2.default.createElement("div", {
    "data-jsx": 347375447,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, selectedTrack && _react2.default.createElement("div", { className: "box reproductor", "data-jsx": 347375447,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement("div", { className: "description", "data-jsx": 347375447,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement("figure", { className: "image is-64x64", "data-jsx": 347375447,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("img", { src: selectedTrack.album.images[1].url, "data-jsx": 347375447,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), _react2.default.createElement("div", { className: "description-children", "data-jsx": 347375447,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("p", {
    "data-jsx": 347375447,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, selectedTrack.name), _react2.default.createElement("small", {
    "data-jsx": 347375447,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, selectedTrack.artists[0].name))), _react2.default.createElement("div", { className: "container-player", "data-jsx": 347375447,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement("audio", {
    className: "player",
    autoPlay: true,
    controls: true,
    src: selectedTrack.preview_url, "data-jsx": 347375447,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }))), _react2.default.createElement(_style2.default, {
    styleId: 347375447,
    css: ".reproductor[data-jsx=\"347375447\"]{padding-bottom:0px !important;padding-top:10px !important;background-color:rgb(248,248,248)}.container-player[data-jsx=\"347375447\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.description[data-jsx=\"347375447\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.description-children[data-jsx=\"347375447\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:12px}.player[data-jsx=\"347375447\"]{width:40%;margin:0px auto 0px auto}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUGxheWVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCa0IsQUFHeUMsQUFDakIsQUFDQSxBQUNBLEFBQ0gsV0FBb0Msb0JBSnVCLE1BSWQsdUJBSjJELGtCQUM1RixBQUNxQixBQUNHLGlCQUg2RSx1REFFbEQsU0FDQyxrQkFBUyxzRUFERCIsImZpbGUiOiJjb21wb25lbnRzL1BsYXllci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVhbmx1aXNyb2phc2xlb24vRGVza3RvcC9maW5kLW11c2ljLWJ5LXNwb3RpZnktZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFBsYXllciA9ICh7IHNlbGVjdGVkVHJhY2sgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7c2VsZWN0ZWRUcmFjayAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IHJlcHJvZHVjdG9yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJpbWFnZSBpcy02NHg2NFwiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17c2VsZWN0ZWRUcmFjay5hbGJ1bS5pbWFnZXNbMV0udXJsfSAvPlxuICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uLWNoaWxkcmVuXCI+XG4gICAgICAgICAgICAgIDxwPntzZWxlY3RlZFRyYWNrLm5hbWV9PC9wPlxuICAgICAgICAgICAgICA8c21hbGw+e3NlbGVjdGVkVHJhY2suYXJ0aXN0c1swXS5uYW1lfTwvc21hbGw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1wbGF5ZXJcIj5cbiAgICAgICAgICAgIDxhdWRpb1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwbGF5ZXJcIlxuICAgICAgICAgICAgICBhdXRvUGxheVxuICAgICAgICAgICAgICBjb250cm9sc1xuICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkVHJhY2sucHJldmlld191cmx9PlxuICAgICAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucmVwcm9kdWN0b3Ige1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHggIWltcG9ydGFudDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDgsMjQ4LDI0OCk7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhaW5lci1wbGF5ZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuZGVzY3JpcHRpb24tY2hpbGRyZW4ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgfVxuICAgICAgICAucGxheWVyIHtcbiAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMHB4IGF1dG87XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIl19 */\n/*@ sourceURL=components/Player.js */"
  }));
};
exports.default = Player;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/components/Player.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/components/Player.js"); } } })();

/***/ }),

/***/ 554:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _head = __webpack_require__(201);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/components/Track.js';


var Track = function (_Component) {
  (0, _inherits3.default)(Track, _Component);

  function Track(props) {
    (0, _classCallCheck3.default)(this, Track);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Track.__proto__ || (0, _getPrototypeOf2.default)(Track)).call(this, props));

    _this.state = {
      previewUrl: '',
      disabled: '',
      time: _this.props.duration_ms
    };
    _this.selectTrack = _this.selectTrack.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Track, [{
    key: 'selectTrack',
    value: function selectTrack() {
      this.props.onClick(this.props);
    }
  }, {
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
      this.setState({
        time: time
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css', 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      })), _react2.default.createElement('div', { className: 'card ' + this.state.previewUrl, 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('div', { className: 'card-image', 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('figure', { className: 'image is-4by3', 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement('img', { src: this.props.album.images[0].url, alt: 'Image', 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }))), _react2.default.createElement('div', { className: 'card-content', 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement('div', { className: 'media', 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement('div', { className: 'media-left', 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('figure', { className: 'image is-48x48', 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, _react2.default.createElement('img', { src: this.props.album.images[2].url, alt: 'Image', 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }))), _react2.default.createElement('div', { className: 'media-content', 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('p', { className: 'title is-4', 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, this.props.name), _react2.default.createElement('p', { className: 'subtitle is-6', 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, this.props.artists[0].name))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('small', {
        'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, this.state.time), _react2.default.createElement('br', {
        'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }), _react2.default.createElement('small', {
        'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('a', { className: 'button is-danger ' + this.state.disabled, onClick: this.selectTrack, 'data-jsx': 3346019981,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, '\u25B6\uFE0E'))))), _react2.default.createElement(_style2.default, {
        styleId: 3346019981,
        css: '.card.preview-url[data-jsx="3346019981"]{cursor:no-drop;filter:blur(3px)}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUVvQixBQUc0QixnQkFBOEIsa0JBQVciLCJmaWxlIjoiY29tcG9uZW50cy9UcmFjay5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVhbmx1aXNyb2phc2xlb24vRGVza3RvcC9maW5kLW11c2ljLWJ5LXNwb3RpZnktZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcmV2aWV3VXJsOiAnJyxcbiAgICAgIGRpc2FibGVkOiAnJyxcbiAgICAgIHRpbWU6IHRoaXMucHJvcHMuZHVyYXRpb25fbXMsXG4gICAgfTtcbiAgICB0aGlzLnNlbGVjdFRyYWNrID0gdGhpcy5zZWxlY3RUcmFjay5iaW5kKHRoaXMpO1xuICB9XG4gIHNlbGVjdFRyYWNrKCkge1xuICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzKTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZighdGhpcy5wcm9wcy5wcmV2aWV3X3VybCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHByZXZpZXdVcmw6ICdwcmV2aWV3LXVybCcsXG4gICAgICAgIGRpc2FibGVkOiAnaXMtc3RhdGljJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRoaXMuc3RhdGUudGltZSAvIDYwMDAwKTtcbiAgICBjb25zdCBzZWNvbmRzID0gKHRoaXMuc3RhdGUudGltZSAlIDYwMDAwIC8gMTAwMCkudG9GaXhlZCgwKTtcbiAgICBjb25zdCB0aW1lID0gYCR7bWludXRlc306JHtzZWNvbmRzfWA7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aW1lXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYnVsbWEvMC41LjAvY3NzL2J1bG1hLm1pbi5jc3NcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZCAke3RoaXMuc3RhdGUucHJldmlld1VybH1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtNGJ5M1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5hbGJ1bS5pbWFnZXNbMF0udXJsfSBhbHQ9XCJJbWFnZVwiIC8+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTQ4eDQ4XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5hbGJ1bS5pbWFnZXNbMl0udXJsfSBhbHQ9XCJJbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+e3RoaXMucHJvcHMubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGUgaXMtNlwiPnt0aGlzLnByb3BzLmFydGlzdHNbMF0ubmFtZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICA8c21hbGw+e3RoaXMuc3RhdGUudGltZX08L3NtYWxsPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGJ1dHRvbiBpcy1kYW5nZXIgJHt0aGlzLnN0YXRlLmRpc2FibGVkfWB9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0VHJhY2t9PuKWtu+4jjwvYT5cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jYXJkLnByZXZpZXctdXJsIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigzcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=components/Track.js */'
      }));
    }
  }]);

  return Track;
}(_react.Component);

exports.default = Track;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/components/Track.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/components/Track.js"); } } })();

/***/ }),

/***/ 555:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _style = __webpack_require__(551);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/components/shared/Banner.js";


var Banner = function Banner() {
	return _react2.default.createElement("div", {
		"data-jsx": 3186593533,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 5
		}
	}, _react2.default.createElement("div", { className: "image", "data-jsx": 3186593533,
		__source: {
			fileName: _jsxFileName,
			lineNumber: 6
		}
	}), _react2.default.createElement(_style2.default, {
		styleId: 3186593533,
		css: ".image[data-jsx=\"3186593533\"]{background-image:url('https://image.ibb.co/mcfhvG/logo.png');height:20vh;background-repeat:no-repeat}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL0Jhbm5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNZSxBQUdtRSw4REFBa0IsYUFBa0MsNkJBRWxIIiwiZmlsZSI6ImNvbXBvbmVudHMvc2hhcmVkL0Jhbm5lci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVhbmx1aXNyb2phc2xlb24vRGVza3RvcC9maW5kLW11c2ljLWJ5LXNwb3RpZnktZGVtbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbWFnZVwiPjwvZGl2PlxuXHRcdFx0PHN0eWxlIGpzeD57YFxuXHRcdFx0XHQuaW1hZ2Uge1xuXHRcdFx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9pbWFnZS5pYmIuY28vbWNmaHZHL2xvZ28ucG5nJyk7XG5cdFx0XHRcdFx0aGVpZ2h0OiAyMHZoO1xuXHRcdFx0XHRcdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHRcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0YH08L3N0eWxlPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuZXhwb3J0IGRlZmF1bHQgQmFubmVyOyJdfQ== */\n/*@ sourceURL=components/shared/Banner.js */"
	}));
};
exports.default = Banner;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/components/shared/Banner.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/components/shared/Banner.js"); } } })();

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _head = __webpack_require__(201);

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/components/shared/Loading.js';


var Loading = function (_Component) {
  (0, _inherits3.default)(Loading, _Component);

  function Loading() {
    (0, _classCallCheck3.default)(this, Loading);

    return (0, _possibleConstructorReturn3.default)(this, (Loading.__proto__ || (0, _getPrototypeOf2.default)(Loading)).apply(this, arguments));
  }

  (0, _createClass3.default)(Loading, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        'data-jsx': 4087341420,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, _react2.default.createElement(_head2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css', 'data-jsx': 4087341420,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      })), _react2.default.createElement('div', { className: 'columns', 'data-jsx': 4087341420,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, _react2.default.createElement('div', { className: 'column', 'data-jsx': 4087341420,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, _react2.default.createElement('a', { className: 'button is-danger is-loading', 'data-jsx': 4087341420,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        }
      }, 'Loading'))), _react2.default.createElement(_style2.default, {
        styleId: 4087341420,
        css: '.column[data-jsx="4087341420"]{-webkit-text-align:center;text-align:center}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2hhcmVkL0xvYWRpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZW9CLEFBRytCLDhDQUFXIiwiZmlsZSI6ImNvbXBvbmVudHMvc2hhcmVkL0xvYWRpbmcuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p1YW5sdWlzcm9qYXNsZW9uL0Rlc2t0b3AvZmluZC1tdXNpYy1ieS1zcG90aWZ5LWRlbW8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9hZGluZyBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9idWxtYS8wLjUuMC9jc3MvYnVsbWEubWluLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYW5nZXIgaXMtbG9hZGluZ1wiPkxvYWRpbmc8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=components/shared/Loading.js */'
      }));
    }
  }]);

  return Loading;
}(_react.Component);

exports.default = Loading;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/components/shared/Loading.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/components/shared/Loading.js"); } } })();

/***/ }),

/***/ 557:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var configService = {
  apiUrl: 'https://spotify-demo-api.now.sh'
};
exports.default = configService;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/services/config.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/services/config.js"); } } })();

/***/ }),

/***/ 558:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _trae = __webpack_require__(560);

var _trae2 = _interopRequireDefault(_trae);

var _config = __webpack_require__(557);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var platziMusicService = _trae2.default.create({
  baseUrl: _config2.default.apiUrl
});
exports.default = platziMusicService;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/services/platzi-music.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/services/platzi-music.js"); } } })();

/***/ }),

/***/ 559:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _platziMusic = __webpack_require__(558);

var _platziMusic2 = _interopRequireDefault(_platziMusic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var trackService = {};

trackService.search = function (q) {
  var type = 'track';

  return _platziMusic2.default.get('/search', {
    params: { q: q, type: type }
  }).then(function (res) {
    return res.data;
  });
};

exports.default = trackService;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/services/track.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/juanluisrojasleon/Desktop/find-music-by-spotify-demo/services/track.js"); } } })();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(552);


/***/ })

},[561]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzFkZDkwMGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QbGF5ZXIuanM/MWRkOTAwZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RyYWNrLmpzPzFkZDkwMGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvQmFubmVyLmpzPzFkZDkwMGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zaGFyZWQvTG9hZGluZy5qcz8xZGQ5MDBkIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2NvbmZpZy5qcz8xZGQ5MDBkIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3BsYXR6aS1tdXNpYy5qcz8xZGQ5MDBkIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3RyYWNrLmpzPzFkZDkwMGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0cmFja1NlcnZpY2UgZnJvbSAnLi4vc2VydmljZXMvdHJhY2snO1xuaW1wb3J0IFRyYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhY2snO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBMb2FkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvc2hhcmVkL0xvYWRpbmcnO1xuaW1wb3J0IEJhbm5lciBmcm9tICcuLi9jb21wb25lbnRzL3NoYXJlZC9CYW5uZXInO1xuaW1wb3J0IFBsYXllciBmcm9tICcuLi9jb21wb25lbnRzL1BsYXllcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VhcmNoUXVlcnk6ICcnLFxuICAgICAgdHJhY2tzOiBbXSxcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRUcmFjazogJycsXG4gICAgICBzb25nQ291bnRlcjogbnVsbCxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlU2VhcmNoID0gdGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0U2VsZWN0ZWRUcmFjayA9IHRoaXMuc2V0U2VsZWN0ZWRUcmFjay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlU2VhcmNoKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWFyY2hRdWVyeTogZXZlbnQudGFyZ2V0LnZhbHVlLFxuICAgIH0pO1xuICB9XG5cblxuICBoYW5kbGVDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmKCF0aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgfSlcblxuICAgIHRyYWNrU2VydmljZS5zZWFyY2godGhpcy5zdGF0ZS5zZWFyY2hRdWVyeSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgdHJhY2tzOiByZXNwb25zZS50cmFja3MuaXRlbXMsXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgc29uZ0NvdW50ZXI6IHJlc3BvbnNlLnRyYWNrcy5pdGVtcy5sZW5ndGgsXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgfVxuXG4gIHNldFNlbGVjdGVkVHJhY2soZGF0YSkge1xuICAgIGlmKCFkYXRhKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkVHJhY2s6IGRhdGEsXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXJlYWN0LXNwb3RpZnlcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlJlYWN0IFNwb3RpZnk8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYnVsbWEvMC41LjAvY3NzL2J1bG1hLm1pbi5jc3NcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPVwiLi4vc3RhdGljL2Zhdmljb24uaWNvXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIuLi9zdGF0aWMvZmF2aWNvbi5pY29cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICB7Lyo8QmFubmVyIC8+Ki99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBjb250YWluZXItbXVzaWNcIj5cbiAgICAgICAgPGltZyBzcmM9eydodHRwczovL2ltYWdlLmliYi5jby9tY2ZodkcvbG9nby5wbmcnfSAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGlzLThcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250cm9sXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImNvbnRhaW5lci1zZWFyY2gtYmFyXCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQgaXMtZGFuZ2VyIGlzLW1lZGl1bVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCdXNjYSB0dSBjYW5jacOzbiBmYXZvcml0YVwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVNlYXJjaH1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIGNvbnRhaW5lci1idXR0b25cIj5cbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1kYW5nZXIgaXMtbWVkaXVtXCI+QnVzY2FyPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuc29uZ0NvdW50ZXIgPiAwICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbiBpcy1kYW5nZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlzLXNpemUtNCByZXN1bHRzXCI+UmVzdWx0YWRvczoge3RoaXMuc3RhdGUuc29uZ0NvdW50ZXJ9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7dGhpcy5zdGF0ZS5zb25nQ291bnRlciA9PT0gMCAmJiAoXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVybyBpcy1kYW5nZXIgaXMtZnVsbGhlaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj7CoVVwcyE8L2gxPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgTm8gc2UgZW5jb250cmFyb24gcmVzdWx0YWRvcyBjb24gPHN0cm9uZz57dGhpcy5zdGF0ZS5zZWFyY2hRdWVyeX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgKX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXByb2R1Y3RvclwiPlxuICAgICAgICAgIDxQbGF5ZXIgc2VsZWN0ZWRUcmFjaz17dGhpcy5zdGF0ZS5zZWxlY3RlZFRyYWNrfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3RoaXMuc3RhdGUubG9hZGluZyA/IDxMb2FkaW5nIC8+IDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnRyYWNrcy5tYXAoKHRyYWNrKSA9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtbiBzY2FsZSBpcy0zXCIga2V5PXt0cmFjay5pZH0+XG4gICAgICAgICAgICAgICAgPFRyYWNrIG9uQ2xpY2s9e3RoaXMuc2V0U2VsZWN0ZWRUcmFja30gey4uLnRyYWNrfSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuY29udGFpbmVyLW11c2ljIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL3d3dy50aGVib3N0b25jYWxlbmRhci5jb20vc3lzdGVtL2V2ZW50cy9waG90b3MvMDAwLzExMS85OTcvb3JpZ2luYWwvMTU2MjYyODJfMTI2NTgwNjYxMDE1MDY1Nl8xOTU4MTQ0NzExNzQ3NTI4MTlfby5qcGc/MTQ4MzUyNDc1MScpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggMnB4ICNDN0M3Qzc7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltYWdlLWxvZ28ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlLmliYi5jby9tY2ZodkcvbG9nby5wbmcnKTtcbiAgICAgICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWluZXItc2VhcmNoLWJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhaW5lci1idXR0b24ge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlcHJvZHVjdG9yIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaW5wdXQge1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbnMuaXMtbXVsdGlsaW5lIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXMtc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2NhbGUge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogLjNzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2NhbGU6aG92ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVzdWx0cyB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgICAuY29udGFpbmVyLW11c2ljIHtcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHZoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmlucHV0IHtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUGxheWVyID0gKHsgc2VsZWN0ZWRUcmFjayB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHtzZWxlY3RlZFRyYWNrICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3ggcmVwcm9kdWN0b3JcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTY0eDY0XCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtzZWxlY3RlZFRyYWNrLmFsYnVtLmltYWdlc1sxXS51cmx9IC8+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzY3JpcHRpb24tY2hpbGRyZW5cIj5cbiAgICAgICAgICAgICAgPHA+e3NlbGVjdGVkVHJhY2submFtZX08L3A+XG4gICAgICAgICAgICAgIDxzbWFsbD57c2VsZWN0ZWRUcmFjay5hcnRpc3RzWzBdLm5hbWV9PC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLXBsYXllclwiPlxuICAgICAgICAgICAgPGF1ZGlvXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBsYXllclwiXG4gICAgICAgICAgICAgIGF1dG9QbGF5XG4gICAgICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRUcmFjay5wcmV2aWV3X3VybH0+XG4gICAgICAgICAgICA8L2F1ZGlvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5yZXByb2R1Y3RvciB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OCwyNDgsMjQ4KTtcbiAgICAgICAgfVxuICAgICAgICAuY29udGFpbmVyLXBsYXllciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5kZXNjcmlwdGlvbi1jaGlsZHJlbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAwcHggYXV0bztcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1BsYXllci5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmFjayBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwcmV2aWV3VXJsOiAnJyxcbiAgICAgIGRpc2FibGVkOiAnJyxcbiAgICAgIHRpbWU6IHRoaXMucHJvcHMuZHVyYXRpb25fbXMsXG4gICAgfTtcbiAgICB0aGlzLnNlbGVjdFRyYWNrID0gdGhpcy5zZWxlY3RUcmFjay5iaW5kKHRoaXMpO1xuICB9XG4gIHNlbGVjdFRyYWNrKCkge1xuICAgIHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzKTtcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZighdGhpcy5wcm9wcy5wcmV2aWV3X3VybCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHByZXZpZXdVcmw6ICdwcmV2aWV3LXVybCcsXG4gICAgICAgIGRpc2FibGVkOiAnaXMtc3RhdGljJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKHRoaXMuc3RhdGUudGltZSAvIDYwMDAwKTtcbiAgICBjb25zdCBzZWNvbmRzID0gKHRoaXMuc3RhdGUudGltZSAlIDYwMDAwIC8gMTAwMCkudG9GaXhlZCgwKTtcbiAgICBjb25zdCB0aW1lID0gYCR7bWludXRlc306JHtzZWNvbmRzfWA7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB0aW1lXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYnVsbWEvMC41LjAvY3NzL2J1bG1hLm1pbi5jc3NcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZCAke3RoaXMuc3RhdGUucHJldmlld1VybH1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cbiAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiaW1hZ2UgaXMtNGJ5M1wiPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5hbGJ1bS5pbWFnZXNbMF0udXJsfSBhbHQ9XCJJbWFnZVwiIC8+XG4gICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cImltYWdlIGlzLTQ4eDQ4XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17dGhpcy5wcm9wcy5hbGJ1bS5pbWFnZXNbMl0udXJsfSBhbHQ9XCJJbWFnZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aXRsZSBpcy00XCI+e3RoaXMucHJvcHMubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3VidGl0bGUgaXMtNlwiPnt0aGlzLnByb3BzLmFydGlzdHNbMF0ubmFtZX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICA8c21hbGw+e3RoaXMuc3RhdGUudGltZX08L3NtYWxsPlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YGJ1dHRvbiBpcy1kYW5nZXIgJHt0aGlzLnN0YXRlLmRpc2FibGVkfWB9IG9uQ2xpY2s9e3RoaXMuc2VsZWN0VHJhY2t9PuKWtu+4jjwvYT5cbiAgICAgICAgICAgICAgPC9zbWFsbD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jYXJkLnByZXZpZXctdXJsIHtcbiAgICAgICAgICAgIGN1cnNvcjogbm8tZHJvcDtcbiAgICAgICAgICAgIGZpbHRlcjogYmx1cigzcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1RyYWNrLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgQmFubmVyID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImltYWdlXCI+PC9kaXY+XG5cdFx0XHQ8c3R5bGUganN4PntgXG5cdFx0XHRcdC5pbWFnZSB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL2ltYWdlLmliYi5jby9tY2ZodkcvbG9nby5wbmcnKTtcblx0XHRcdFx0XHRoZWlnaHQ6IDIwdmg7XG5cdFx0XHRcdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcdFxuXHRcdFx0XHRcdFxuXHRcdFx0XHR9XG5cdFx0XHRgfTwvc3R5bGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9zaGFyZWQvQmFubmVyLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvYWRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYnVsbWEvMC41LjAvY3NzL2J1bG1hLm1pbi5jc3NcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b24gaXMtZGFuZ2VyIGlzLWxvYWRpbmdcIj5Mb2FkaW5nPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3NoYXJlZC9Mb2FkaW5nLmpzIiwiY29uc3QgY29uZmlnU2VydmljZSA9IHtcbiAgYXBpVXJsOiAnaHR0cHM6Ly9zcG90aWZ5LWRlbW8tYXBpLm5vdy5zaCcsXG59XG5leHBvcnQgZGVmYXVsdCBjb25maWdTZXJ2aWNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmljZXMvY29uZmlnLmpzIiwiaW1wb3J0IHRyYWUgZnJvbSAndHJhZSc7XG5pbXBvcnQgY29uZmlnU2VydmljZSBmcm9tICcuL2NvbmZpZyc7XG5cbmNvbnN0IHBsYXR6aU11c2ljU2VydmljZSA9IHRyYWUuY3JlYXRlKHtcbiAgYmFzZVVybDogY29uZmlnU2VydmljZS5hcGlVcmwsXG59KVxuZXhwb3J0IGRlZmF1bHQgcGxhdHppTXVzaWNTZXJ2aWNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmljZXMvcGxhdHppLW11c2ljLmpzIiwiaW1wb3J0IHBsYXR6aU11c2ljU2VydmljZSBmcm9tICcuL3BsYXR6aS1tdXNpYyc7XG5cbmNvbnN0IHRyYWNrU2VydmljZSA9IHt9O1xuXG50cmFja1NlcnZpY2Uuc2VhcmNoID0gZnVuY3Rpb24ocSkge1xuICBjb25zdCB0eXBlID0gJ3RyYWNrJztcblxuICByZXR1cm4gcGxhdHppTXVzaWNTZXJ2aWNlLmdldCgnL3NlYXJjaCcsIHtcbiAgICBwYXJhbXM6IHsgcSwgdHlwZSB9XG4gIH0pXG4gIC50aGVuKHJlcyA9PiByZXMuZGF0YSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgdHJhY2tTZXJ2aWNlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc2VydmljZXMvdHJhY2suanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU5BO0FBTUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUhBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBRkE7QUFLQTs7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUZBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUdBO0FBSEE7QUFHQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFKQTs7QUFBQTtBQVVBO0FBVkE7QUFDQTs7QUFTQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFHQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFJQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBbERBO0FBc0hBO0FBdEhBOzs7OztBQXJEQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFDQTtBQURBOztBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBQUE7QUFBQTtBQUNBO0FBZEE7QUFnREE7QUFoREE7QUFpREE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7Ozs7O0FBRUE7QUFBQTs7OztBQUlBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRkE7Ozs7QUFLQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFFQTtBQUZBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFHQTtBQUhBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUEzQkE7QUF3Q0E7QUF4Q0E7Ozs7O0FBaENBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUVBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBOztBQURBO0FBWUE7QUFaQTtBQWFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBRUE7QUFGQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkE7QUFnQkE7QUFoQkE7Ozs7O0FBSEE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFHQTtBQUZBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        