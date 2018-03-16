import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { init, dispatch } from '@rematch/core'
import localforage from 'localforage'

import './index.css'
import todos from './models/todos'
import { currentType } from './models/type'
import { ACTIVE } from './models/type'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const store = init({
  models: {
    todos,
    currentType
  }
})

localforage.ready().then(() => {
  localforage.iterate((value, key, index) => {
    dispatch.todos.pushTodo(value)
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
