import React from 'react'
import TodoItem from '../TodoItem'

export default ({ todos }) => {
  return <ul className="todo-list">{todos.map(todo => <TodoItem {...todo} key={todo.id} />)}</ul>
}
