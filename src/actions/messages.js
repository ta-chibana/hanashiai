import firebase from 'firebase'
import { firebaseApp } from '../firebase'

export const FETCH_MESSAGES_SUCCEEDED = 'FETCH_MESSAGES_SUCCEEDED'
const fetchMessagesSucceeded = (snapshot) => {
  return {
    type: FETCH_MESSAGES_SUCCEEDED, messages: snapshot.val()
  }
}

const messagesRef = firebaseApp.database().ref('messages')

export const subscribeMessages = (dispatch) => {
  messagesRef.on('value',
    (snapshot) => dispatch(fetchMessagesSucceeded(snapshot)),
    (error) => console.error(error)
  )
}

export const unSubscribeMessages = () => {
  messagesRef.off()
}
