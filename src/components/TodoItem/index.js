import React from 'react'

export default ({ text, completed, startAt }) => {
  return (
    <li className={`todo-item ${completed ? 'completed' : ''}`}>
      <input type="checkbox" className="todo-checkbox" />
      <h4 className="todo-text">{text}</h4>
      {!completed ? <button className="todo-action todo-done">Done</button> : ''}
      <button className="todo-action todo-delete">Delete</button>
    </li>
  )
}
