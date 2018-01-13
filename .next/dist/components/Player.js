"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

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