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
        'data-jsx': 3346019981
      }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css', 'data-jsx': 3346019981
      })), _react2.default.createElement('div', { className: 'card ' + this.state.previewUrl, 'data-jsx': 3346019981
      }, _react2.default.createElement('div', { className: 'card-image', 'data-jsx': 3346019981
      }, _react2.default.createElement('figure', { className: 'image is-4by3', 'data-jsx': 3346019981
      }, _react2.default.createElement('img', { src: this.props.album.images[0].url, alt: 'Image', 'data-jsx': 3346019981
      }))), _react2.default.createElement('div', { className: 'card-content', 'data-jsx': 3346019981
      }, _react2.default.createElement('div', { className: 'media', 'data-jsx': 3346019981
      }, _react2.default.createElement('div', { className: 'media-left', 'data-jsx': 3346019981
      }, _react2.default.createElement('figure', { className: 'image is-48x48', 'data-jsx': 3346019981
      }, _react2.default.createElement('img', { src: this.props.album.images[2].url, alt: 'Image', 'data-jsx': 3346019981
      }))), _react2.default.createElement('div', { className: 'media-content', 'data-jsx': 3346019981
      }, _react2.default.createElement('p', { className: 'title is-4', 'data-jsx': 3346019981
      }, this.props.name), _react2.default.createElement('p', { className: 'subtitle is-6', 'data-jsx': 3346019981
      }, this.props.artists[0].name))), _react2.default.createElement('div', { className: 'content', 'data-jsx': 3346019981
      }, _react2.default.createElement('small', {
        'data-jsx': 3346019981
      }, this.state.time), _react2.default.createElement('br', {
        'data-jsx': 3346019981
      }), _react2.default.createElement('small', {
        'data-jsx': 3346019981
      }, _react2.default.createElement('a', { className: 'button is-danger ' + this.state.disabled, onClick: this.selectTrack, 'data-jsx': 3346019981
      }, '\u25B6\uFE0E'))))), _react2.default.createElement(_style2.default, {
        styleId: 3346019981,
        css: '.card.preview-url[data-jsx="3346019981"]{cursor:no-drop;filter:blur(3px)}'
      }));
    }
  }]);

  return Track;
}(_react.Component);

exports.default = Track;