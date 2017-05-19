import { SET_GAMES, ADD_GAME, GAME_FETCHED, GAME_UPDATED, GAME_DETETE } from '../actions/actions'

export default (state = [], action = {}) => {
  switch (action.type) {
    case SET_GAMES:
      return action.games
    case ADD_GAME:
      return [
        ...state, action.game
      ]
    case GAME_FETCHED:
      const index = state.findIndex(item => item._id === action.game._id)
      if (index > -1) {
        return state.map(item => {
          // return item._id === action.game._id
          if (item._id === action.game._id) {
            return action.game
          }
          return item
        })
      } else {
        return [
          ...state,
          action.game
        ]
      }
    case GAME_UPDATED:
      return state.map(item => {
        if (item._id === action.game._id) {
          return action.item
        }
        return item
      })
    case GAME_DETETE:
      // const idx = state.findIndex(item => item._id === action.id)
      // return [
      //   ...state.slice(0, idx),
      //   ...state.slice(idx + 1)
      // ]
      return state.filter(item => item._id !== action.id)
    // return state.find(game => game._id === action.game._id)
    default:
      return state
  }
}