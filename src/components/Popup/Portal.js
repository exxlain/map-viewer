import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Portal extends React.Component {
  componentDidMount() {
    this.renderPortal()
  }

  componentDidUpdate() {
    this.renderPortal()
  }

  componentWillUnmount() {
    const { node } = this.props
    ReactDOM.unmountComponentAtNode(this.defaultNode || node)
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode)
    }
    this.defaultNode = null
  }

  renderPortal() {
    const { node, children } = this.props
    if (!node && !this.defaultNode) {
      this.defaultNode = document.createElement('div')
      document.body.appendChild(this.defaultNode)
    }

    let currentChildren = children
    if (typeof currentChildren.type === 'function') {
      currentChildren = React.cloneElement(currentChildren)
    }

    ReactDOM.render(currentChildren, node || this.defaultNode)
  }

  render() {
    return null
  }
}


Portal.propTypes = {
  node: PropTypes.node,
  children: PropTypes.node.isRequired,
}

Portal.defaultProps = {
  node: null,
}
