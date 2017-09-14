'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _track = require('../services/track');

var _track2 = _interopRequireDefault(_track);

var _Track = require('../components/Track');

var _Track2 = _interopRequireDefault(_Track);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _Loading = require('../components/shared/Loading');

var _Loading2 = _interopRequireDefault(_Loading);

var _Player = require('../components/Player');

var _Player2 = _interopRequireDefault(_Player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

      return _react2.default.createElement('div', { className: 'container-react-spotify', 'data-jsx': 1781050343
      }, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', {
        'data-jsx': 1781050343
      }, 'React Spotify'), _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.0/css/bulma.min.css', 'data-jsx': 1781050343
      }), _react2.default.createElement('link', { rel: 'shortcut icon', href: '../static/favicon.ico', type: 'image/x-icon', 'data-jsx': 1781050343
      }), _react2.default.createElement('link', { rel: 'icon', href: '../static/favicon.ico', type: 'image/x-icon', 'data-jsx': 1781050343
      })), _react2.default.createElement('div', { className: 'columns container-music', 'data-jsx': 1781050343
      }, _react2.default.createElement('div', { className: 'column is-8', 'data-jsx': 1781050343
      }, _react2.default.createElement('div', { className: 'field', 'data-jsx': 1781050343
      }, _react2.default.createElement('div', { className: 'control', 'data-jsx': 1781050343
      }, _react2.default.createElement('form', { onSubmit: this.handleClick, className: 'container-search-bar', 'data-jsx': 1781050343
      }, _react2.default.createElement('input', {
        className: 'input is-danger is-medium',
        type: 'text',
        placeholder: 'Busca tu canci\xF3n favorita',
        onChange: this.handleSearch,
        'data-jsx': 1781050343
      }))))), _react2.default.createElement('div', { className: 'column container-button', 'data-jsx': 1781050343
      }, _react2.default.createElement('a', { onClick: this.handleClick, className: 'button is-danger is-medium', 'data-jsx': 1781050343
      }, 'Buscar'))), this.state.songCounter > 0 && _react2.default.createElement('div', { className: 'notification is-danger', 'data-jsx': 1781050343
      }, _react2.default.createElement('p', { className: 'is-size-4 results', 'data-jsx': 1781050343
      }, 'Resultados: ', this.state.songCounter)), this.state.songCounter === 0 && _react2.default.createElement('section', { className: 'hero is-danger is-fullheight', 'data-jsx': 1781050343
      }, _react2.default.createElement('div', { className: 'hero-body', 'data-jsx': 1781050343
      }, _react2.default.createElement('div', { className: 'container', 'data-jsx': 1781050343
      }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 1781050343
      }, '\xA1Ups!'), _react2.default.createElement('h2', { className: 'subtitle', 'data-jsx': 1781050343
      }, 'No se encontraron resultados con ', _react2.default.createElement('strong', {
        'data-jsx': 1781050343
      }, this.state.searchQuery))))), _react2.default.createElement('div', { className: 'reproductor', 'data-jsx': 1781050343
      }, _react2.default.createElement(_Player2.default, { selectedTrack: this.state.selectedTrack })), this.state.loading ? _react2.default.createElement(_Loading2.default, null) : _react2.default.createElement('div', { className: 'columns is-multiline', 'data-jsx': 1781050343
      }, this.state.tracks.map(function (track) {
        return _react2.default.createElement('div', { className: 'column scale is-3', key: track.id, 'data-jsx': 1781050343
        }, _react2.default.createElement(_Track2.default, (0, _extends3.default)({ onClick: _this3.setSelectedTrack }, track)));
      })), _react2.default.createElement(_style2.default, {
        styleId: 1781050343,
        css: '.container-music[data-jsx="1781050343"]{background-image:url(\'https://image.ibb.co/dwV3mv/200.jpg\');display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:40px;box-shadow:0 0 10px 2px #C7C7C7;margin-bottom:30px;height:75vh;width:100%;background-attachment:fixed}.container-search-bar[data-jsx="1781050343"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.container-button[data-jsx="1781050343"]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.reproductor[data-jsx="1781050343"]{position:fixed;bottom:0;z-index:999;width:100%}.input[data-jsx="1781050343"]{width:70%}.columns.is-multiline[data-jsx="1781050343"]{margin-bottom:100px}.is-selected[data-jsx="1781050343"]{background-color:red}.scale[data-jsx="1781050343"]{-webkit-transition:.3s;transition:.3s}.scale[data-jsx="1781050343"]:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}.results[data-jsx="1781050343"]{-webkit-text-align:center;text-align:center}@media(max-width:800px){.container-music[data-jsx="1781050343"]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:30vh}.input[data-jsx="1781050343"]{width:100%}}'
      }));
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;