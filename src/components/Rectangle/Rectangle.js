import React from 'react'
import {
  Rect,
} from 'react-konva'
import PropTypes from 'prop-types'
import Popup from '../Popup/Popup'
// import './.Map.css'

class Rectangle extends React.Component {
  state = {
    popupOpen: false,
  }

  handleMouseEnter=() => {
    this.setState({ popupOpen: true })
    console.log(1111)
  }

  handleMouseLeave=() => {
    this.setState({ popupOpen: false })
    console.log(222222)
  }

  render() {
    const { popupOpen } = this.state
    const {
      color, xValue, yValue, info,
    } = this.props
    return (
      <React.Fragment>
        <Rect
          x={xValue}
          y={yValue}
          width={10}
          height={10}
          fill={color}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}

        />
        { popupOpen && <Popup info={info} xValue={xValue} yValue={yValue} /> }
      </React.Fragment>
    )
  }
}

export default Rectangle

Rectangle.propTypes = {
  color: PropTypes.string.isRequired,
  xValue: PropTypes.number.isRequired,
  yValue: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired,
}
