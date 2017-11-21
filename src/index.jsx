import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import { Hello } from './containers/Hello'

let store = createStore(reducer)

render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.querySelector('#app')
)
