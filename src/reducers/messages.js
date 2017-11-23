import { FETCH_MESSAGES_SUCCEEDED } from 'Actions/messages'
import { SIGN_OUT_SUCCEEDED } from 'Actions/auth'

const initialState = {}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_MESSAGES_SUCCEEDED: {
      return action.messages
    }
    case SIGN_OUT_SUCCEEDED: {
      return initialState
    }
    default: {
      return state
    }
  }
}
