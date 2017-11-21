import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import messages from 'Reducers/messages'
import createSagaMiddleware from 'redux-saga'
import saga from './sagas'
import App from 'Containers/App'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let store = createStore(
  messages,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(saga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
)
