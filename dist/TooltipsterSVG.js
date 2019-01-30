"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _svg = _interopRequireDefault(require("svg.js"));

require("./screenBBox.js");

var _Tooltipster = _interopRequireDefault(require("./Tooltipster"));

require("tooltipster/dist/js/plugins/tooltipster/SVG/tooltipster-SVG");

// import 'svg.screenbbox.js'
window.SVG = _svg.default;

var TooltipsterSVG = function TooltipsterSVG(props) {
  return _react.default.createElement(_Tooltipster.default, props);
};

TooltipsterSVG.propTypes = _Tooltipster.default.propTypes;
TooltipsterSVG.defaultProps = {
  rootType: 'span',
  plugins: ['sideTip', 'tooltipster.SVG']
};
var _default = TooltipsterSVG;
exports.default = _default;