import React from 'react'
import { Layer, Stage } from 'react-konva'
import PropTypes from 'prop-types'
import Rectangle from '../Rectangle/Rectangle'
// import './.Map.css'
const myInfo = 'jjj'
class Map extends React.Component {
  render() {
    const { loadingTime } = this.props
    return (
      <React.Fragment>
        <div>
Data loaded in
          {' '}
          {loadingTime}
          {' '}
ms
        </div>
        <Stage width={700} height={700}>
          <Layer>
            <Rectangle color="green" xValue={100} yValue={150} info={myInfo} />
            <Rectangle color="red" xValue={120} yValue={170} info={myInfo} />
          </Layer>
        </Stage>
      </React.Fragment>
    )
  }
}
Map.propTypes = {
  loadingTime: PropTypes.number,
}

Map.defaultProps = {
  loadingTime: null,
}
export default Map
