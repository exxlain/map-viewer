import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import './App.css'
import {
  sync,
} from '../../actions/map'

class App extends React.Component {
  state = {
    number: 0,
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
      number,
    } = this.state

    return (
      <div className="app">
        <hr className="app__line" />
        <div className="app__wrapper">
          <div>Insert number from 10 to 1000</div>
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
            className="app__new-btn"
            onClick={this.showMap}
          >
            show map
          </button>

        </div>
      </div>
    )
  }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = dispatch => ({
  showMapAction: number => dispatch(sync(number)),
})

App.propTypes = {
  showMapAction: PropTypes.func.isRequired,
}

App.defaultProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
