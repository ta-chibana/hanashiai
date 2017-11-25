import firebase from 'firebase'

export const requestPermission = () => {
  firebase.messaging().requestPermission()
    .then(() => {
      console.log('OK!')
    }).catch((e) => {
      console.log('NG..')
      console.error(e)
    })
}
