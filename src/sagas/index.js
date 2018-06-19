import { fork } from 'redux-saga/effects'
import clientListSaga from './get-clients-saga';
import selectClientSaga from './select-client-saga';

export default function * rootSaga(){
  yield fork(clientListSaga);
  yield fork(selectClientSaga);
}