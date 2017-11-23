import firebase from 'firebase'
import { firebaseApp } from '../firebase'
import { connect } from 'react-redux'
import Auth from 'Components/Auth'
import { authorize } from 'Actions/auth'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  const provider = new firebase.auth.GoogleAuthProvider()

  return {
    onClickSignIn: () => {
      firebaseApp.auth().signInWithPopup(provider)
    },
    onClickSignOut: () => {
      firebaseApp.auth().signOut()
    },
    onMount: () => {
      firebaseApp.auth().onAuthStateChanged(user => {
        if (!user) {
          return
        }
        dispatch(authorize(user))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
