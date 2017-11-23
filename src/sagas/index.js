import 'regenerator-runtime/runtime'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as authClient from '../common/authorize'
import {
  signInSucceeded, signOutSucceeded,
  SIGN_IN_REQUESTED, SIGN_OUT_REQUESTED
} from 'Actions/auth'

function* signIn() {
  try {
    const user = yield call(authClient.signIn)
    yield put(signInSucceeded(user))
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

function* saga() {
  yield takeEvery(SIGN_IN_REQUESTED, signIn)
  yield takeEvery(SIGN_OUT_REQUESTED, signOut)
}

export default saga
