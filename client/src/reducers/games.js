import { SET_GAMES, ADD_GAME } from '../actions/actions'

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_GAMES:
      return action.games
    case ADD_GAME:
      return [
        ...state, action.game
      ]
    default:
      return state
  }
}