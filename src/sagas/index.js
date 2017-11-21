import 'regenerator-runtime/runtime'
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

function* fetchMessages(action) {
  try {
    const messages = yield call(Api.fetchMessages)
    yield put('MESSAGES_FETCH_SUCCEEDED', { messages })
  } catch (e) {
    yield put('MESSAGES_FETCH_FAILED', e)
  }
}

function* saga() {
  yield takeEvery('MESSAGES_FETCH_REQUESTED', fetchMessages)
}

export default saga
