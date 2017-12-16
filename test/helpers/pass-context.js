import React from 'react'
import PropTypes from 'prop-types'

class PassContext extends React.Component {
  getChildContext () {
    return {
      reactIconBase: this.props.context
    }
  }

  render () {
    return React.Children.only(this.props.children)
  }
}

PassContext.propTypes = {
  children: PropTypes.node.isRequired
}

PassContext.childContextTypes = {
  reactIconBase: PropTypes.object.isRequired
}

export default PassContext
