import localforage from 'localforage'

export const todosStore = localforage.createInstance({
  name: 'todos'
})

export const themeStore = localforage.createInstance({
  name: 'theme'
})
