import firebase from 'firebase'
import { firebaseApp } from '../firebase'

export const messagesRef = firebaseApp.database().ref('messages')

export const writeMessage = (userName, message) => {
  messagesRef.push({ userName, message })
}
