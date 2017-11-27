import firebase from 'firebase'
import { firebaseApp } from '../firebase'
import { connect } from 'react-redux'
import Auth from 'Components/Auth'
import { authorized, signIn, signOut } from 'Actions/auth'
import { observeMessages, unobserveMessages } from 'Actions/messages'
import { permissionRequested } from 'Actions/messaging'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickSignIn: () => {
      dispatch(signIn())
    },
    onClickSignOut: () => {
      dispatch(signOut())
    },
    onMount: () => {
      firebaseApp.auth().onAuthStateChanged(user => {
        if (!user) {
          unobserveMessages(dispatch)
          return
        }
        dispatch(authorized(user))
        dispatch(permissionRequested())
        observeMessages(dispatch)
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
