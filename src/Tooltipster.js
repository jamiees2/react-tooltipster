import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import jQuery from 'jquery'
import 'tooltipster'

const tooltipsterArguments = ["animation", "animationDuration", "arrow", "debug", "delay", "delayTouch", "distance", "functionInit", "functionBefore", "functionReady", "functionAfter", "functionFormat", "functionPosition", "IEMin", "interactive", "maxWidth", "minIntersection", "minWidth", "plugins", "repositionOnScroll", "side", "timer", "theme", "trackOrigin", "trackTooltip", "trigger", "triggerClose", "triggerOpen", "updateAnimation", "viewportAware", "zIndex"]

const getArguments = (props) => {
  const res = {}
  tooltipsterArguments.forEach(a => { res[a] = props[a] })
  return res
}

const diff = (a, b, k) => !k.every(arg => a[arg] === b[arg])


class Tooltipster extends React.Component {
  constructor(props) {
    super(props)
    this.rootRef = React.createRef()
    this.contentEl = document.createElement('div')
  }

  componentDidMount() {
    const $root = jQuery(this.rootRef.current)
    const $content = jQuery(this.contentEl)
    $root.tooltipster({
      content: $content,
      ...getArguments(this.props)
    })
  }
  componentDidUpdate(prevProps) {
    const prevArgs = getArguments(prevProps)
    const newArgs = getArguments(this.props)
    const $root = jQuery(this.rootRef.current)
    const $content = jQuery(this.contentEl)

    if (diff(prevArgs, newArgs, tooltipsterArguments)) {
      $root.tooltipster('destroy')
      $root.tooltipster({
        content: $content,
        ...newArgs
      })
    } else {
      $root.tooltipster('content', $content)
    }

  }

  componentWillUnmount() {
    const $root = jQuery(this.rootRef.current)
    $root.tooltipster('destroy')
  }

  renderContent() {
    return createPortal(this.props.content, this.contentEl)
  }

  render() {
    const Root = this.props.rootType
    return (
      <React.Fragment>
        <Root ref={this.rootRef} {...this.props.rootProps}>
          {this.props.children}
        </Root>
        { this.renderContent() }
      </React.Fragment>
    )
  }
}
Tooltipster.defaultProps = {
  rootType: 'span'
}
Tooltipster.propTypes = {
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

export default Tooltipster

