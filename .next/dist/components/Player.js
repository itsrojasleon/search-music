"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Player = function Player(_ref) {
  var selectedTrack = _ref.selectedTrack;

  return _react2.default.createElement("div", {
    "data-jsx": 347375447
  }, selectedTrack && _react2.default.createElement("div", { className: "box reproductor", "data-jsx": 347375447
  }, _react2.default.createElement("div", { className: "description", "data-jsx": 347375447
  }, _react2.default.createElement("figure", { className: "image is-64x64", "data-jsx": 347375447
  }, _react2.default.createElement("img", { src: selectedTrack.album.images[1].url, "data-jsx": 347375447
  })), _react2.default.createElement("div", { className: "description-children", "data-jsx": 347375447
  }, _react2.default.createElement("p", {
    "data-jsx": 347375447
  }, selectedTrack.name), _react2.default.createElement("small", {
    "data-jsx": 347375447
  }, selectedTrack.artists[0].name))), _react2.default.createElement("div", { className: "container-player", "data-jsx": 347375447
  }, _react2.default.createElement("audio", {
    className: "player",
    autoPlay: true,
    controls: true,
    src: selectedTrack.preview_url, "data-jsx": 347375447
  }))), _react2.default.createElement(_style2.default, {
    styleId: 347375447,
    css: ".reproductor[data-jsx=\"347375447\"]{padding-bottom:0px !important;padding-top:10px !important;background-color:rgb(248,248,248)}.container-player[data-jsx=\"347375447\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.description[data-jsx=\"347375447\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.description-children[data-jsx=\"347375447\"]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:12px}.player[data-jsx=\"347375447\"]{width:40%;margin:0px auto 0px auto}"
  }));
};
exports.default = Player;