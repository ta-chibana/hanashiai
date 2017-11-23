export const AUTHORIZED = 'AUTHORIZED'
export const SIGN_IN_REQUESTED = 'SIGN_IN_REQUESTED'
export const SIGN_IN_SUCCEEDED = 'SIGN_IN_SUCCEEDED'
// export const SIGN_IN_FAILED = 'SIGN_IN_FAILED'
export const SIGN_OUT_REQUESTED = 'SIGN_OUT_REQUESTED'
export const SIGN_OUT_SUCCEEDED = 'SIGN_OUT_SUCCEEDED'

export const signIn = () => {
  return { type: SIGN_IN_REQUESTED }
}

export const signInSucceeded = (user) => {
  return { type: SIGN_IN_SUCCEEDED, user }
}

export const signOut = () => {
  return { type: SIGN_OUT_REQUESTED }
}

export const signOutSucceeded = () => {
  return { type: SIGN_OUT_SUCCEEDED }
}

export const authorized = (user) => {
  return { type: AUTHORIZED, user }
}
