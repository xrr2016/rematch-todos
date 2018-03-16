import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { init, dispatch } from '@rematch/core'

import './index.css'
import todos from './models/todos'
import App from './container/App'
import { currentTheme, APP_THEME, LIGHT } from './models/theme'
import { currentType, ACTIVE } from './models/type'
import { todosStore, themeStore } from './storage'
import registerServiceWorker from './registerServiceWorker'

const store = init({
  models: {
    todos,
    currentTheme,
    currentType
  }
})

todosStore.ready().then(() => {
  todosStore
    .iterate((value, key, index) => {
      dispatch.todos.pushTodo(value)
    })
    .catch(function(err) {
      console.log(err)
    })
})

themeStore.ready().then(() => {
  themeStore.getItem(APP_THEME).then(value => {
    const theme = value ? value : LIGHT
    dispatch.currentTheme.changeTheme(theme)
  })
})

dispatch.currentType.changeType(ACTIVE)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
