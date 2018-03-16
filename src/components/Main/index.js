import React, { Component } from 'react'
// import { connect } from '@rematch/core'
import TodoList from '../TodoList'
import AddTodoInput from '../AddTodoInput'

const todos = [
  { id: '1111', text: 'code cool thing', completed: true, startAt: Date.now() },
  { id: '2222', text: 'take a sleep', completed: false, startAt: Date.now() + 1 },
  { id: '3333', text: 'rest yout self', completed: false, startAt: Date.now() + 2 },
  { id: '4444', text: 'eat breakfast', completed: false, startAt: Date.now() + 3 }
]

class Main extends Component {
  render() {
    return (
      <main className="main">
        <AddTodoInput />
        <TodoList todos={todos} />
      </main>
    )
  }
}

export default Main
