import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { init } from '@rematch/core'

import './index.css'
import todos from './models/toods'
import App from './container/App'
import registerServiceWorker from './registerServiceWorker'

const store = init({
  models: {
    todos
  }
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
