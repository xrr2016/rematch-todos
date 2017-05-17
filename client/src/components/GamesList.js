import React from 'react'
import PropTypes from 'prop-types'
import GameCard from './GameCard'

export default function GamesList({ games }) {
  const empty = (
    <p>There are no games yet in your collection.</p>
  )
  const gamesList = (
    <div className="ui five cards">
      {games.map(game => <GameCard key={game.cover} game={game} />)}
    </div>
  )
  return (
    <div>
      {games.length > 0 ? gamesList : empty}
    </div>
  )
}

GamesList.propTypes = {
  games: PropTypes.array.isRequired
}

