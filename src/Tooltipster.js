import React from 'react'
import { render } from 'react-dom'
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

  render() {
    const Root = this.props.rootType
    render(this.props.content, this.contentEl)
    return (
      <React.Fragment>
        <Root ref={this.rootRef} {...this.props.rootProps}>
          {this.props.children}
        </Root>
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

export default Tooltipster

