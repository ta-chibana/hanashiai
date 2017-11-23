import {
  AUTHORIZED, SIGN_IN_SUCCEEDED, SIGN_OUT_SUCCEEDED
} from 'Actions/auth'

const initialState = {
  uid: null,
  displayName: null,
  email: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCEEDED:
    case AUTHORIZED: {
      const { uid, email, displayName } = action.user
      return { uid, email, displayName }
    }
    case SIGN_OUT_SUCCEEDED: {
      return initialState
    }
    default: {
      return state
    }
  }
}
