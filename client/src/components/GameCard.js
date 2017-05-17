import React from 'react'
import PropTypes from 'prop-types'

const GameCard = ({ game }) => {
  const { title, cover } = game
  return (
    <div className="ui card">
      <div className="image">
        <img src={cover} alt={title} />
      </div>
      <div className="content">
        <div className="header">
          {title}
        </div>
      </div>
    </div>
  )
}

GameCard.propTypes = {
  game: PropTypes.object.isRequired,
}

export default GameCard