import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Map from '../Map/Map'

import './Welcome.css'
import {
  sync,
} from '../../actions/map'

class Welcome extends React.Component {
  state = {
    number: 0,
  }

  renderWellcome = () => {
    const {
      number,
    } = this.state
    return (
      <React.Fragment>
        <div className="app__header">Insert number from 10 to 1000</div>
        <input
          id="title"
          type="text"
          onChange={this.handleChange}
          className="add__title"
          placeholder="Title"
          value={number}
        />
        <button
          type="button"
          className="app__show-btn"
          onClick={this.showMap}
        >
          show map
        </button>
      </React.Fragment>
    )
  }

  handleChange = (e) => {
    const { value } = e.currentTarget
    this.setState({ number: value })
  }

  showMap = (e) => {
    const { showMapAction } = this.props
    e.preventDefault()
    const { number } = this.state
    showMapAction(number)
  }

  render() {
    const {
      showMap,
      loadingInterval,
    } = this.props
    return (
      showMap ? <Map loadingTime={loadingInterval} /> : this.renderWellcome()
    )
  }
}

const mapStateToProps = (store) => {
  const showMap = store.map.mapView
  const loadingInterval = store.map.loadingTime
  return {
    showMap,
    loadingInterval,
  }
}

const mapDispatchToProps = dispatch => ({
  showMapAction: number => dispatch(sync(number)),
})

Welcome.propTypes = {
  showMapAction: PropTypes.func.isRequired,
  showMap: PropTypes.bool,
  loadingInterval: PropTypes.number,
}

Welcome.defaultProps = {
  showMap: false,
  loadingInterval: null,
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
