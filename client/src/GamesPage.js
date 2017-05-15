import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GamesList from './components/GamesList'

class GamesPage extends Component {
  render() {
    return (
      <div>
        <h1>GamesPage</h1>
        <GamesList games={this.props.games} />
      </div>
    )
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(GamesPage)