import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import GamesPage from '../containers/GamesPage'
import GameFormPage from '../containers/GameFormPage'

const ActiveLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
    <Link className={match ? 'active item' : 'item'} to={to}>{label}</Link>
  }} />
)

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <ActiveLink activeOnlyWhenExact to='/' label="Home" />
          <ActiveLink activeOnlyWhenExact to='/games' label="Games" />
          <ActiveLink activeOnlyWhenExact to='/games/new' label="New Game" />
        </div>
        <Route exact path="/games" component={GamesPage} />
        <Route exact path="/games/new" component={GameFormPage} />
        <Route exact path="/game/:_id" component={GameFormPage} />
      </div>
    )
  }
}

export default App;
