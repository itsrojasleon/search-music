'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _platziMusic = require('./platzi-music');

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