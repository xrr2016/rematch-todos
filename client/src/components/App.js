import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import GamesPage from '../containers/GamesPage'
import GameForm from '../containers/GameForm'

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <NavLink className="item" exact activeClassName="active" to='/'>Home</NavLink>
          <NavLink className="item" exact activeClassName="active" to='/games'>Games</NavLink>
          <NavLink className="item" exact activeClassName="active" to='/games/new'>New Game</NavLink>
        </div>
        <Route exact path="/games" component={GamesPage} />
        <Route exact path="/games/new" component={GameForm} />
        <Route exact path="/game/:_id" component={GameForm} />
      </div>
    )
  }
}

export default App;
