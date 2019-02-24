import React from 'react'
import { Layer, Stage } from 'react-konva'
import { uid } from 'react-uid'
import PropTypes from 'prop-types'
import Rectangle from '../Rectangle/Rectangle'
import './Map.css'
import { width, height } from '../../constants/rectangle'
import { countInfo } from '../../helpers/infoCounter'

class Map extends React.Component {
  state = {
    showInfo: false,
    info: [],
    renderingTime: null,
  }

  componentDidMount() {
    const { startRenderingTime } = this.props
    const end = new Date()
    const renderingTime = end - startRenderingTime
    this.setState({ renderingTime })
  }

  createMapView=() => {
    const { data } = this.props
    return (
      data.map(el => (
        <Rectangle
          xValue={el.x * width}
          yValue={el.y * height}
          info={el}
          key={[el.x, el.y]}
        />
      ))
    )
  }

  showInfo=infoArr => infoArr.map(el => (
    <li
      key={uid(el)}
      style={{
        color: 'white',
      }}
    >
      {el}
    </li>
  ))

  countInfo=() => {
    const { data } = this.props
    const info = countInfo(data)
    this.setState({ showInfo: true, info })
  }


  render() {
    const { showInfo, info, renderingTime } = this.state
    const { loadingTime } = this.props
    return (
      <div className="map">
        <div className="info">
Data loaded in
          {' '}
          {loadingTime}
          {' '}
ms
        </div>
        <div className="info">
          Data rendered in
          {' '}
          {renderingTime}
          {' '}
          ms
        </div>
        <Stage width={700} height={700}>
          <Layer>
            {this.createMapView()}
          </Layer>
        </Stage>
        <button type="button" onClick={this.countInfo}>show info</button>
        {showInfo && this.showInfo(info)}
      </div>
    )
  }
}

Map.propTypes = {
  loadingTime: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object),
  startRenderingTime: PropTypes.instanceOf(Date).isRequired,
}

Map.defaultProps = {
  loadingTime: null,
  data: null,
}
export default Map
