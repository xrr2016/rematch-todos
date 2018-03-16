import { ulid } from 'ulid'
import { todosStore } from '../storage'

import { ACTIVE } from './type'

const todos = {
  state: [],
  reducers: {
    addTodo(state, text) {
      const todoId = ulid()
      const newTodo = {
        id: todoId,
        text,
        author: 'leo',
        startAt: Date.now(),
        type: ACTIVE
      }
      todosStore.setItem(todoId, newTodo)
      return [newTodo, ...state]
    },
    pushTodo(state, todo) {
      return [todo, ...state]
    },
    editTodo(state, { id, newText }) {
      return state.map(todo => {
        if (todo.id === id) {
          const newTodo = { ...todo, text: newText }
          todosStore.setItem(id, newTodo)
          return newTodo
        } else {
          return todo
        }
      })
    },
    changeTodoType(state, { id, type }) {
      const index = state.findIndex(todo => todo.id === id)
      state[index].type = type
      todosStore.setItem(id, state[index])
      return [...state]
    },
    descendingOrder(state) {
      for (let i = 0; i < state.length - 1; i++) {
        for (let j = 0; j < state.length - 1; j++) {
          if (state[i].startAt < state[j].startAt) {
            ;[state[i], state[j]] = [state[j], state[i]]
          }
        }
      }
      return [...state]
    },
    ascendingOrder(state) {
      for (let i = 0; i < state.length - 1; i++) {
        for (let j = 0; j < state.length - 1; j++) {
          if (state[i].startAt > state[j].startAt) {
            ;[state[i], state[j]] = [state[j], state[i]]
          }
        }
      }
      return [...state]
    },
    clearTodos(state) {
      todosStore.clear()
      return []
    }
  }
}

export default todos
