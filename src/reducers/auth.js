import {
  AUTHORIZED, SIGN_IN_SUCCEEDED, SIGN_OUT_SUCCEEDED
} from 'Actions/auth'

const initialState = {
  uid: null,
  displayName: '',
  photoURL: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCEEDED:
    case AUTHORIZED: {
      const { uid, displayName, photoURL } = action.user
      return { uid, displayName, photoURL }
    }
    case SIGN_OUT_SUCCEEDED: {
      return initialState
    }
    default: {
      return state
    }
  }
}
