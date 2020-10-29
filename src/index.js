import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { StylesProvider } from '@material-ui/core/styles'

import store from 'state'

import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <StylesProvider injectFirst>
        <App />
      </StylesProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
