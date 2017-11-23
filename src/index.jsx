import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import auth from 'Reducers/auth'
import messages from 'Reducers/messages'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from './sagas'
import Root from 'Containers/Root'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const rootReducer = combineReducers({ auth: auth, messages: messages })

let store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(saga)

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.querySelector('#app')
)
