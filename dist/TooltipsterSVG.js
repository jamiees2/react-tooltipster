"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _svg = _interopRequireDefault(require("svg.js"));

require("./screenBBox.js");

var _Tooltipster = _interopRequireDefault(require("./Tooltipster"));

require("tooltipster/dist/js/plugins/tooltipster/SVG/tooltipster-SVG");

// import 'svg.screenbbox.js'
window.SVG = _svg.default;

var TooltipsterSVG = function TooltipsterSVG(props) {
  return _react.default.createElement(_Tooltipster.default, props);
};

TooltipsterSVG.propTypes = {
  children: _propTypes.default.node,
  rootType: _propTypes.default.string,
  rootProps: _propTypes.default.object,
  content: _propTypes.default.node,
  animation: _propTypes.default.oneOf(['fade', 'grow', 'swing', 'slide', 'fall']),
  animationDuration: _propTypes.default.oneOfType([_propTypes.default.integer, _propTypes.default.arrayOf(_propTypes.default.integer)]),
  arrow: _propTypes.default.bool,
  // contentAsHTML: PropTypes.bool,
  debug: _propTypes.default.bool,
  delay: _propTypes.default.oneOfType([_propTypes.default.integer, _propTypes.default.arrayOf(_propTypes.default.integer)]),
  delayTouch: _propTypes.default.oneOfType([_propTypes.default.integer, _propTypes.default.arrayOf(_propTypes.default.integer)]),
  distance: _propTypes.default.oneOfType([_propTypes.default.integer, _propTypes.default.arrayOf(_propTypes.default.integer)]),
  functionInit: _propTypes.default.func,
  functionBefore: _propTypes.default.func,
  functionReady: _propTypes.default.func,
  functionAfter: _propTypes.default.func,
  functionFormat: _propTypes.default.func,
  functionPosition: _propTypes.default.func,
  IEMin: _propTypes.default.integer,
  interactive: _propTypes.default.bool,
  maxWidth: _propTypes.default.integer,
  minIntersection: _propTypes.default.integer,
  minWidth: _propTypes.default.integer,
  // multiple: PropTypes.bool,
  plugins: _propTypes.default.arrayOf(_propTypes.default.string),
  repositionOnScroll: _propTypes.default.bool,
  // restoration: PropTypes.oneOf(['none', 'previous', 'current']),
  // selfDestruction: PropTypes.bool,
  side: _propTypes.default.oneOfType([_propTypes.default.oneOf(['top', 'bottom', 'right', 'left']), _propTypes.default.arrayOf(_propTypes.default.oneOf(['top', 'bottom', 'right', 'left']))]),
  timer: _propTypes.default.integer,
  theme: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  // trackerInterval: PropTypes.integer,
  trackOrigin: _propTypes.default.bool,
  trackTooltip: _propTypes.default.bool,
  trigger: _propTypes.default.oneOf(['hover', 'click', 'custom']),
  triggerClose: _propTypes.default.object,
  triggerOpen: _propTypes.default.object,
  updateAnimation: _propTypes.default.oneOf(['fade', 'rotate', 'scale']),
  viewportAware: _propTypes.default.bool,
  zIndex: _propTypes.default.integer
};
TooltipsterSVG.defaultProps = {
  rootType: 'span',
  plugins: ['sideTip', 'tooltipster.SVG']
};
var _default = TooltipsterSVG;
exports.default = _default;