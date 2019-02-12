import React from 'react'
import PropTypes from 'prop-types'
import Portal from './Portal'
import { parseInfo } from '../../helpers/parseInfo'
import { topShift, leftShift } from '../../constants/rectangle'

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
            top: yValue - topShift,
            left: xValue + leftShift,
            backgroundColor: 'rgba(236, 236, 236, 0.5)',
            color: 'rgb(10, 10, 10)',
            display: ' block',
          }}
        >
          <ul style={{
            padding: '5px',
            listStyleType: 'none',
            margin: '0',
            border: '1px solid grey',
            fontSize: '14px',
          }}
          >
            {parseInfo(info).map(el => (
              <li>
                {el}
              </li>
            ))}
          </ul>
        </div>
      </Portal>

    )
  }
}

export default Popup

Popup.propTypes = {
  info: PropTypes.object.isRequired,
  xValue: PropTypes.number.isRequired,
  yValue: PropTypes.number.isRequired,
}
