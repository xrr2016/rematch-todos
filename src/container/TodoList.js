import React, { Component } from 'react'
import { connect } from 'react-redux'

import TodoItem from './TodoItem'
import { ALL, ACTIVE, COMPLETED, DELETED } from '../models/type'

const mapState = state => ({
  todos: state.todos,
  type: state.currentType
})

const filterTodos = (todos, type) => {
  switch (type) {
    case ALL:
      return [...todos]
    case ACTIVE:
      return todos.filter(todo => todo.type === ACTIVE)
    case COMPLETED:
      return todos.filter(todo => todo.type === COMPLETED)
    case DELETED:
      return todos.filter(todo => todo.type === DELETED)
    default:
      return [...todos]
  }
}

class TodoList extends Component {
  render() {
    const { todos, type } = this.props
    const renderTodos = filterTodos(todos, type)
    if (!renderTodos.length) {
      return <div className="no-todo-text">Not thing to do</div>
    }
    return (
      <ul className="todo-list">
        {renderTodos.map(todo => <TodoItem {...todo} key={todo.id} />)}
      </ul>
    )
  }
}

export default connect(mapState)(TodoList)
