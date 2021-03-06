import React from 'react'
import {
  Rect,
} from 'react-konva'
import PropTypes from 'prop-types'
import Popup from '../Popup/Popup'
import { width, height } from '../../constants/rectangle'
import { defineColor } from '../../helpers/defineColor'

class Rectangle extends React.Component {
  state = {
    popupOpen: false,
  }

  handleMouseEnter=() => {
    this.setState({ popupOpen: true })
  }

  handleMouseLeave=() => {
    this.setState({ popupOpen: false })
  }

  checkForEmptyInfo=info => info.objects.length || info.terrain

  render() {
    const { popupOpen } = this.state
    const {
      xValue, yValue, info,
    } = this.props
    return (
      <React.Fragment>
        <Rect
          x={xValue}
          y={yValue}
          width={width}
          height={height}
          fill={defineColor(info)}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}

        />
        { popupOpen && this.checkForEmptyInfo(info) && <Popup info={info} xValue={xValue} yValue={yValue} /> }
      </React.Fragment>
    )
  }
}

export default Rectangle

Rectangle.propTypes = {
  xValue: PropTypes.number.isRequired,
  yValue: PropTypes.number.isRequired,
  info: PropTypes.object.isRequired,
}
