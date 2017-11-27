import firebase from 'firebase'
import { firebaseApp } from '../firebase'
import { fcmTokensRef } from './database'

const messaging = firebase.messaging()

const storeToken = () => {
  messaging.getToken().then(token => (
    fcmTokensRef.child(token).set(firebaseApp.auth().currentUser.uid)
  )).catch(e => {
    console.error(e)
  })
}

export const requestPermission = () => {
  messaging.requestPermission().then(
    storeToken
  ).catch(e => {
    console.error(e)
  })
}
