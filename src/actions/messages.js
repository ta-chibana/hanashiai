import { messagesRef } from '../common/database'

export const FETCH_MESSAGES_SUCCEEDED = 'FETCH_MESSAGES_SUCCEEDED'
export const WRITE_MESSAGE_REQUESTED = 'WRITE_MESSAGE_REQUESTED'
export const WRITE_MESSAGE_SUCCEEDED = 'WRITE_MESSAGE_SUCCEEDED'

const fetchMessagesSucceeded = (snapshot) => {
  return {
    type: FETCH_MESSAGES_SUCCEEDED, messages: snapshot.val()
  }
}

export const subscribeMessages = (dispatch) => {
  messagesRef.on('value',
    (snapshot) => dispatch(fetchMessagesSucceeded(snapshot)),
    (error) => console.error(error)
  )
}

export const unSubscribeMessages = () => {
  messagesRef.off()
}

export const writeMessageRequested = (user, message) => {
  return {
    type: WRITE_MESSAGE_REQUESTED,
    user, message
  }
}

export const writeMessageSucceeded = () => {
  return {
    type: WRITE_MESSAGE_SUCCEEDED
  }
}
