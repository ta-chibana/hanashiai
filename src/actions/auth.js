export const AUTHORIZED = 'AUTHORIZED'

export const authorize = (user) => {
  const { uid, email, displayName } = user

  return {
    type: AUTHORIZED,
    uid, email, displayName
  }
}
