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
  return {
    onClickLogin: () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebaseApp.auth().signInWithPopup(provider)
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
