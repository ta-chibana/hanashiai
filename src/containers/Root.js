import React from 'react'
import { connect } from 'react-redux'
import App from 'Components/App'

const mapStateToProps = (state) => {
  return {
    uid: state.auth
  }
}

export default connect(mapStateToProps)(App)
