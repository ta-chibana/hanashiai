import { AUTHORIZED } from 'Actions/auth'

const initialState = {
  uid: null,
  displayName: null,
  email: null
}

export default (state = initialState, action) => {
  const { uid, email, displayName } = action
  switch (action.type) {
    case AUTHORIZED: {
      return Object.assign({}, state, { uid, email, displayName })
    }
    default: {
      return state
    }
  }
}
