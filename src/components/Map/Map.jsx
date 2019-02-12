import React from 'react'
import { Layer, Stage } from 'react-konva'
import PropTypes from 'prop-types'
import Rectangle from '../Rectangle/Rectangle'
// import './.Map.css'
import { width, height } from '../../constants/rectangle'
import { countInfo } from '../../helpers/infoCounter'

class Map extends React.Component {
  state = {
    showInfo: false,
    info: [],
  }

  createMapView=() => {
    const { data } = this.props
    return (
      data.map(el => (
        <Rectangle
          color="green"
          xValue={el.x * width}
          yValue={el.y * height}
          info={el}
          key={[el.x, el.y]}
        />
      ))
    )
  }

  showInfo=infoArr => infoArr.map(el => (
    <li>
      {el}
    </li>
  ))

  countInfo=() => {
    const { data } = this.props
    const info = countInfo(data)
    this.setState({ showInfo: true, info })
  }


  render() {
    const { showInfo, info } = this.state
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
            {this.createMapView()}
          </Layer>
        </Stage>
        <button type="button" onClick={this.countInfo}>show info</button>
        {showInfo && this.showInfo(info)}
      </React.Fragment>
    )
  }
}

Map.propTypes = {
  loadingTime: PropTypes.number,
  data: PropTypes.arrayOf(PropTypes.object),
}

Map.defaultProps = {
  loadingTime: null,
  data: null,
}
export default Map
/*
<Rectangle
color="green"
xValue={10 * width}
yValue={10 * height}
info={{ objects: [{ def: 'WoodFence', stuffDef: 'WoodLog', artDesc: '' }], x: 59, y: 0 }}
key={[100, 100]}
/>
<Rectangle
              color="red"
              xValue={20 * width}
              yValue={20 * height}
              info={{
                terrain: { def: 'Bridge' }, objects: [{ def: 'Wall', stuffDef: 'WoodLog', artDesc: '' }], x: 43, y: 42,
              }}
              key={[200, 200]}
            />

*/
