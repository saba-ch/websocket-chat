import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import WebSocket from 'socket'
import store from 'state'

import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WebSocket>
        <App />
      </WebSocket>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
