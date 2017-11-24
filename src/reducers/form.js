import { CHANGE_MESSAGE } from 'Actions/form'
import { WRITE_MESSAGE_SUCCEEDED } from 'Actions/messages'

const initialState = { message: '' }

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE: {
      return { message: action.message }
    }
    case WRITE_MESSAGE_SUCCEEDED: {
      return initialState
    }
    default: {
      return state
    }
  }
}
