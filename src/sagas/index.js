import { fork } from 'redux-saga/effects'
import clientListSaga from './get-clients-saga';

export default function * rootSaga(){
  yield fork(clientListSaga);
}