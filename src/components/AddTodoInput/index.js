import React, { Component } from 'react'

export default class AddTodoInput extends Component {
  render() {
    return (
      <div className="add-todo-container">
        <input className="add-todo-input" type="text" title="Add some thing you want." placeholder="Add something"  autofoucs="true"/>
        <button className="add-todo-button">ADD</button>
      </div>
    )
  }
}
