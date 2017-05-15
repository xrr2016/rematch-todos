import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import GamesList from './components/GamesList'
import { fetchGames } from './actions/actions'

class GamesPage extends Component {
  componentDidMount() {
    this.props.fetchGames()
  }
  
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
  games: PropTypes.array.isRequired,
  fetchGames: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchGames: () => {
//       dispatch('F')
//     }
//   }
// }

export default  connect(mapStateToProps, { fetchGames })(GamesPage)