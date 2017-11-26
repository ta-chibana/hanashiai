import firebase from 'firebase'
import { firebaseApp } from '../firebase'

export const messagesRef = firebaseApp.database().ref('messages')
export const fcmTokensRef = firebaseApp.database().ref('fcmTokens')

export const writeMessage = (user, message) => {
  messagesRef.push({
    userName: user.displayName,
    photoURL: user.photoURL,
    message
  })
}
