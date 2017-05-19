import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GamesList from '../components/GamesList'
import { fetchGames, deteleGame } from '../actions/actions'

class GamesPage extends Component {
  componentDidMount() {
    this.props.fetchGames()
  }
  
  render() {
    return (
      <div>
        <h1>GamesPage</h1>
        <GamesList games={this.props.games} deleGame={this.props.deteleGame} />
      </div>
    )
  }
}

GamesPage.propTypes = {
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}

export default  connect(mapStateToProps, { fetchGames, deteleGame })(GamesPage)