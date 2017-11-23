import firebase from 'firebase'
import { firebaseApp } from '../firebase'

const messagesDB = firebaseApp.database().ref('messages')

export const writeMessage = (userName, message) => {
  messagesDB.push({
    userName, message
  })
}
