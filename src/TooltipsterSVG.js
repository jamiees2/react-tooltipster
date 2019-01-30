import React from 'react'

import SVG from 'svg.js'

// import 'svg.screenbbox.js'
import './screenBBox.js'
window.SVG = SVG

import Tooltipster from './Tooltipster'

import 'tooltipster/dist/js/plugins/tooltipster/SVG/tooltipster-SVG'

const TooltipsterSVG = (props) => {
  return <Tooltipster {...props} />
}

TooltipsterSVG.propTypes = Tooltipster.propTypes
TooltipsterSVG.defaultProps = {
  rootType: 'span',
  plugins: ['sideTip', 'tooltipster.SVG']
}

export default TooltipsterSVG