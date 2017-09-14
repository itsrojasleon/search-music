'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _trae = require('trae');

var _trae2 = _interopRequireDefault(_trae);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var platziMusicService = _trae2.default.create({
  baseUrl: _config2.default.apiUrl
});
exports.default = platziMusicService;