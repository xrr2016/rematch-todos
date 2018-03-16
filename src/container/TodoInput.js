import React, { Component } from 'react'
import { dispatch } from '@rematch/core'

export default class AddTodoInput extends Component {
  state = { text: '' }

  handleInput = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { text } = this.state
    if (!text.length) return
    dispatch.todos.addTodo(text)
    this.setState({ text: '' })
  }

  render() {
    const { text } = this.state
    return (
      <form onSubmit={this.handleSubmit} className="add-todo-container">
        <input
          value={text}
          onChange={this.handleInput}
          type="text"
          className="add-todo-input"
          title="Add some thing you want."
          placeholder="Add something todo..."
          autofoucs="true"
        />
        <button className="add-todo-button" tabIndex="1" type="submit">
          ADD
        </button>
      </form>
    )
  }
}
