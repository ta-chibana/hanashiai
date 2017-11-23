import firebase from 'firebase'
import { firebaseApp } from '../firebase'
import { connect } from 'react-redux'
import Auth from 'Components/Auth'
import { authorized, signIn, signOut } from 'Actions/auth'

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  const provider = new firebase.auth.GoogleAuthProvider()

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
          return
        }
        dispatch(authorized(user))
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
