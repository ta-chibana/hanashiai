import 'regenerator-runtime/runtime'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as authClient from '../common/authorize'
import * as dbClient from '../common/database'
import * as messaging from '../common/messaging'
import {
  signOutSucceeded, SIGN_IN_REQUESTED, SIGN_OUT_REQUESTED
} from 'Actions/auth'
import {
  writeMessageSucceeded,
  WRITE_MESSAGE_REQUESTED 
} from 'Actions/messages'
import { PERMISSION_REQUESTED } from 'Actions/messaging'

function* signIn() {
  try {
    yield call(authClient.signIn)
  } catch (e) {
    // TODO: put SIGN_IN_FAILED
  }
}

function* signOut() {
  try {
    yield call(authClient.signOut)
    yield put(signOutSucceeded())
  } catch (e) {
    // TODO: put SIGN_OUT_FAILED
  }
}

function* writeMessage(action) {
  const { userName, message } = action
  try {
    yield call(dbClient.writeMessage, userName, message)
    yield put(writeMessageSucceeded())
  } catch (e) {
    console.error(e)
  }
}

function* requestPermission() {
  yield call(messaging.requestPermission)
}

function* saga() {
  yield takeEvery(SIGN_IN_REQUESTED, signIn)
  yield takeEvery(SIGN_OUT_REQUESTED, signOut)
  yield takeEvery(WRITE_MESSAGE_REQUESTED, writeMessage)
  yield takeEvery(PERMISSION_REQUESTED, requestPermission)
}

export default saga
