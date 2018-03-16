import React, { Component } from 'react'
import { dispatch } from '@rematch/core'

import TodoTextInput from './TodoTextInput'
import { convertTimeStamp } from '../utils'
import { DELETED, COMPLETED, ACTIVE } from '../models/type'

export default class TodoItem extends Component {
  state = { editing: false }

  handleSelect = () => {
    this.item.classList.toggle('selected')
  }

  handleClickDelete = () => {
    dispatch.todos.changeTodoType({
      id: this.props.id,
      type: DELETED
    })
  }

  handleClickDone = () => {
    const { type } = this.props
    const newType = type === COMPLETED ? ACTIVE : COMPLETED
    this.item.classList.toggle('completed')
    dispatch.todos.changeTodoType({
      id: this.props.id,
      type: newType
    })
  }

  handleClickRestore = () => {
    this.item.classList.toggle('completed')
    dispatch.todos.changeTodoType({
      id: this.props.id,
      type: ACTIVE
    })
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  saveEdit = text => {
    this.setState({ editing: false })
    dispatch.todos.editTodo({
      id: this.props.id,
      newText: text
    })
  }

  render() {
    const { editing } = this.state
    const { text, type, startAt, author } = this.props
    return (
      <li
        ref={item => (this.item = item)}
        onClick={this.handleSelect}
        onDoubleClick={this.handleDoubleClick}
        className={`todo-item ${type === COMPLETED ? 'completed' : ''} ${
          type === DELETED ? 'deleted' : ''
        }`}
      >
        <h4 className="todo-text">
          {editing ? (
            <TodoTextInput saveEdit={this.saveEdit} {...this.props} />
          ) : (
            <div>{text}</div>
          )}
          <div className="todo-info">
            {author}&nbsp;&nbsp;&nbsp;&nbsp;{convertTimeStamp(startAt)}
          </div>
        </h4>
        {type === DELETED ? (
          <button onClick={this.handleClickRestore} className="todo-action todo-restore">
            Restore
          </button>
        ) : (
          <div>
            <button onClick={this.handleClickDone} className="todo-action todo-done">
              {type === COMPLETED ? 'None' : 'Done'}
            </button>
            <button
              onClick={this.handleClickDelete}
              className="todo-action todo-delete"
              tabIndex="-1"
            >
              Delete
            </button>
          </div>
        )}
      </li>
    )
  }
}
