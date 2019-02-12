import { connect } from 'react-redux'
import Map from '../../components/Map/Map'

const mapStateToProps = () => {
  const { map: { data } } = global.store.getState()
  return {
    data,
  }
}

export default connect(mapStateToProps)(Map)
