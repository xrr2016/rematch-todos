import React from 'react'
import PropTypes from 'prop-types'

export default function GamesList ({ games }) {
  const empty = (
    <p>There are no games yet in your collection.</p>
  )
  const gamesList = (
    <p>games list</p>
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

