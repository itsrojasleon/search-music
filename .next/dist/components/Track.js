'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

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