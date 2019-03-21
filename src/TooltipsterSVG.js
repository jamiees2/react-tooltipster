import React from 'react'

import PropTypes from 'prop-types'
import SVG from 'svg.js'

// import 'svg.screenbbox.js'
import './screenBBox.js'
window.SVG = SVG

import Tooltipster from './Tooltipster'

import 'tooltipster/dist/js/plugins/tooltipster/SVG/tooltipster-SVG'

const TooltipsterSVG = (props) => {
  return <Tooltipster {...props} />
}

TooltipsterSVG.propTypes = {
  children: PropTypes.node,
  rootType: PropTypes.string,
  rootProps: PropTypes.object,
  content: PropTypes.node,
  animation: PropTypes.oneOf(['fade', 'grow', 'swing', 'slide', 'fall']),
  animationDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  arrow: PropTypes.bool,
  // contentAsHTML: PropTypes.bool,
  debug: PropTypes.bool,
  delay:  PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  delayTouch: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  distance: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  functionInit: PropTypes.func,
  functionBefore: PropTypes.func,
  functionReady: PropTypes.func,
  functionAfter: PropTypes.func,
  functionFormat: PropTypes.func,
  functionPosition: PropTypes.func,
  IEMin: PropTypes.number,
  interactive: PropTypes.bool,
  maxWidth: PropTypes.number,
  minIntersection: PropTypes.number,
  minWidth: PropTypes.number,
  // multiple: PropTypes.bool,
  plugins: PropTypes.arrayOf(PropTypes.string),
  repositionOnScroll: PropTypes.bool,
  // restoration: PropTypes.oneOf(['none', 'previous', 'current']),
  // selfDestruction: PropTypes.bool,
  side: PropTypes.oneOfType([
    PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    PropTypes.arrayOf(PropTypes.oneOf(['top', 'bottom', 'right', 'left']))
  ]),
  timer: PropTypes.number,
  theme: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  // trackerInterval: PropTypes.number,
  trackOrigin: PropTypes.bool,
  trackTooltip: PropTypes.bool,
  trigger: PropTypes.oneOf(['hover', 'click', 'custom']),
  triggerClose: PropTypes.object,
  triggerOpen: PropTypes.object,
  updateAnimation: PropTypes.oneOf(['fade', 'rotate', 'scale']),
  viewportAware: PropTypes.bool,
  zIndex: PropTypes.number
}
TooltipsterSVG.defaultProps = {
  rootType: 'span',
  plugins: ['sideTip', 'tooltipster.SVG']
}

export default TooltipsterSVG
