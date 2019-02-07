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
    PropTypes.integer,
    PropTypes.arrayOf(PropTypes.integer),
  ]),
  arrow: PropTypes.boolean,
  // contentAsHTML: PropTypes.boolean,
  debug: PropTypes.boolean,
  delay:  PropTypes.oneOfType([
    PropTypes.integer,
    PropTypes.arrayOf(PropTypes.integer),
  ]),
  delayTouch: PropTypes.oneOfType([
    PropTypes.integer,
    PropTypes.arrayOf(PropTypes.integer),
  ]),
  distance: PropTypes.oneOfType([
    PropTypes.integer,
    PropTypes.arrayOf(PropTypes.integer),
  ]),
  functionInit: PropTypes.func,
  functionBefore: PropTypes.func,
  functionReady: PropTypes.func,
  functionAfter: PropTypes.func,
  functionFormat: PropTypes.func,
  functionPosition: PropTypes.func,
  IEMin: PropTypes.integer,
  interactive: PropTypes.boolean,
  maxWidth: PropTypes.integer,
  minIntersection: PropTypes.integer,
  minWidth: PropTypes.integer,
  // multiple: PropTypes.boolean,
  plugins: PropTypes.arrayOf(PropTypes.string),
  repositionOnScroll: PropTypes.boolean,
  // restoration: PropTypes.oneOf(['none', 'previous', 'current']),
  // selfDestruction: PropTypes.boolean,
  side: PropTypes.oneOfType([
    PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    PropTypes.arrayOf(PropTypes.oneOf(['top', 'bottom', 'right', 'left']))
  ]),
  timer: PropTypes.integer,
  theme: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  // trackerInterval: PropTypes.integer,
  trackOrigin: PropTypes.boolean,
  trackTooltip: PropTypes.boolean,
  trigger: PropTypes.oneOf(['hover', 'click', 'custom']),
  triggerClose: PropTypes.object,
  triggerOpen: PropTypes.object,
  updateAnimation: PropTypes.oneOf(['fade', 'rotate', 'scale']),
  viewportAware: PropTypes.boolean,
  zIndex: PropTypes.integer
}
TooltipsterSVG.defaultProps = {
  rootType: 'span',
  plugins: ['sideTip', 'tooltipster.SVG']
}

export default TooltipsterSVG