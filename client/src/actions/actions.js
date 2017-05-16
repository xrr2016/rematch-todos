export const SET_GAMES = 'SET_GAMES'
export const SAVE_GAME = 'SAVE_GAME'

const handleResponse = (res) => {
  if (res.ok) {
    return res.json()
  } else {
    let error = new Error(res.statusText)
    error.response = res
    throw error
  }
}

export function setGames(games) {
  return {
    type: SET_GAMES,
    games
  }
}

export function fetchGames() {
  return dispatch => {
    fetch('/api/games')
      .then(res => res.json())
      .then(data => dispatch(setGames(data.games)))
  }
}

export function saveGame(game) {
  return dispatch => {
    return fetch('/api/games', {
      method: 'post',
      body: JSON.stringify(game),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
  }
}