import React from 'react'

import TodoList from '../container/TodoList'
import TodoInput from '../container/TodoInput'

const Main = () => (
  <section className="main-content">
    <TodoInput />
    <TodoList />
  </section>
)

export default Main
