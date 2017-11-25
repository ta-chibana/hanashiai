import firebase from 'firebase'
import { firebaseApp } from '../firebase'
import { connect } from 'react-redux'
import Auth from 'Components/Auth'
import { authorized, signIn, signOut } from 'Actions/auth'
import { subscribeMessages, unSubscribeMessages } from 'Actions/messages'
import { requestPermission } from '../common/messaging'

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
      requestPermission()
      firebaseApp.auth().onAuthStateChanged(user => {
        if (!user) {
          unSubscribeMessages(dispatch)
          return
        }
        dispatch(authorized(user))
        subscribeMessages(dispatch)
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
