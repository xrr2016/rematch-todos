export const SET_GAMES = 'SET_GAMES'
export const SAVE_GAME = 'SAVE_GAME'
export const ADD_GAME = 'ADD_GAME'
export const GAME_FETCHED = 'GAME_FETCHED'
export const GAME_UPDATED = 'GAME_UPDATED'
export const GAME_DETETE = 'GAME_DETETE'

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

export function gameFetched(game) {
  return {
    type: GAME_FETCHED,
    game
  }
}

export function fetchGames() {
  return dispatch => {
    fetch(`/api/games`)
      .then(res => res.json())
      .then(data => dispatch(setGames(data.games)))
  }
}


export function fetchGame(id) {
  return dispatch => {
    fetch(`/api/game/${id}`)
      .then(res => res.json())
      .then(data => dispatch(gameFetched(data.game)))
  }
}

export function addGame(game) {
  return {
    type: ADD_GAME,
    game
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
      .then(data => dispatch(addGame(data.games)))
  }
}

export function gameUpdated(game) {
  return {
    type: GAME_UPDATED,
    game
  }
}

export function updateGame(game) {
  return dispatch => {
    return fetch(`/api/games/${game._id}`, {
      method: 'put',
      body: JSON.stringify(game),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(handleResponse)
      .then(data => dispatch(gameUpdated(data.game)))
  }
}


export function deteleGame(game) {
  return {
    type: GAME_DETETE,
    game
  }
}

export function gameRemove(game) {
  return dispatch => {
    fetch(`/api/games/${game._id}`, {
      method: 'detele'
    }).then(res => {
      handleResponse(res)
    }).then(data => dispatch(deteleGame(data.game)))
  }
}