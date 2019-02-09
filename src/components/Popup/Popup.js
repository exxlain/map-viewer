import React from 'react'
import PropTypes from 'prop-types'
import Portal from './Portal'

class Popup extends React.Component {
  render() {
    const {
      info, xValue, yValue,
    } = this.props
    return (
      <Portal>
        <div
          style={{
            position: 'absolute',
            top: yValue,
            left: xValue,
            width: '200px',
            height: '200px',
            color: 'red',
            display: ' block',
          }}
        >
          {info}
        </div>
      </Portal>

    )
  }
}

export default Popup

Popup.propTypes = {
  info: PropTypes.string.isRequired,
  xValue: PropTypes.string.isRequired,
  yValue: PropTypes.string.isRequired,
}
