import firebase from 'firebase'
import { firebaseApp } from '../firebase'

export const signIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider()
  return firebaseApp.auth().signInWithPopup(provider).then((result) => {
    return result.user
  })
}

export const signOut = () => {
  return firebase.auth().signOut()
}
