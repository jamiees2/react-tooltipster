"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = require("react-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _jquery = _interopRequireDefault(require("jquery"));

require("tooltipster");

var tooltipsterArguments = ["animation", "animationDuration", "arrow", "debug", "delay", "delayTouch", "distance", "functionInit", "functionBefore", "functionReady", "functionAfter", "functionFormat", "functionPosition", "IEMin", "interactive", "maxWidth", "minIntersection", "minWidth", "plugins", "repositionOnScroll", "side", "timer", "theme", "trackOrigin", "trackTooltip", "trigger", "triggerClose", "triggerOpen", "updateAnimation", "viewportAware", "zIndex"];

var getArguments = function getArguments(props) {
  var res = {};
  tooltipsterArguments.forEach(function (a) {
    res[a] = props[a];
  });
  return res;
};

var diff = function diff(a, b, k) {
  return !k.every(function (arg) {
    return a[arg] === b[arg];
  });
};

var Tooltipster =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Tooltipster, _React$Component);

  function Tooltipster(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Tooltipster);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tooltipster).call(this, props));
    _this.rootRef = _react.default.createRef();
    _this.contentEl = document.createElement('div');
    return _this;
  }

  (0, _createClass2.default)(Tooltipster, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var $root = (0, _jquery.default)(this.rootRef.current);
      var $content = (0, _jquery.default)(this.contentEl);
      $root.tooltipster((0, _objectSpread2.default)({
        content: $content
      }, getArguments(this.props)));
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var prevArgs = getArguments(prevProps);
      var newArgs = getArguments(this.props);
      var $root = (0, _jquery.default)(this.rootRef.current);
      var $content = (0, _jquery.default)(this.contentEl);

      if (diff(prevArgs, newArgs, tooltipsterArguments)) {
        $root.tooltipster('destroy');
        $root.tooltipster((0, _objectSpread2.default)({
          content: $content
        }, newArgs));
      } else {
        $root.tooltipster('content', $content);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var $root = (0, _jquery.default)(this.rootRef.current);
      $root.tooltipster('destroy');
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      return (0, _reactDom.createPortal)(this.props.content, this.contentEl);
    }
  }, {
    key: "render",
    value: function render() {
      var Root = this.props.rootType;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Root, (0, _extends2.default)({
        ref: this.rootRef
      }, this.props.rootProps), this.props.children), this.renderContent());
    }
  }]);
  return Tooltipster;
}(_react.default.Component);

Tooltipster.defaultProps = {
  rootType: 'span'
};
Tooltipster.propTypes = {
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
var _default = Tooltipster;
exports.default = _default;