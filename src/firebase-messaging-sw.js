import firebase from 'firebase'
import config from './firebase/config'

const { messagingSenderId } = config

firebase.initializeApp({
  messagingSenderId
})

firebase.messaging()

console.log('service worker installed.')
