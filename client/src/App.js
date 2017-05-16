import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import GamesPage from './GamesPage'
import GameForm from './containers/GameForm'
// import logo from './logo.svg';
import './App.css';

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
      </div>
    )
  }
}

export default App;
