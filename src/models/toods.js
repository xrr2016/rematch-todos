import { ulid } from 'ulid'

const todos = {
  state: [],
  reducers: {
    addTodo(state, text) {
      const newTodo = {
        id: ulid(),
        text,
        startAt: Date.now(),
        completed: false
      }
      return [newTodo, ...state]
    },
    removeTodo(state, id) {
      return state.filter(todo => todo.id !== id)
    },
    toggleTodo(state, id) {
      const index = state.findIndex(todo => todo.id === id)
      state[index].completed = !state[index].completed
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
    }
  },
  effects: {
    // eslint-disable
    async loadTodos(state) {
      const datas = await fetch('/todos')
      return state.concat(JSON.parse(datas))
    }
  }
}

export default todos
