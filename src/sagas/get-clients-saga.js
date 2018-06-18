import { fork, takeEvery, call, put } from 'redux-saga/effects'
import { delay } from 'redux-saga';

import { getClients as getClientsAction,setClients } from "../actions";
import { getClients } from '../api'

export default function * clientListSaga(){
  yield fork(getClientsWatcher);
}

function * getClientsWatcher(){
  yield takeEvery(getClientsAction, getClientsWorker)
}

function * getClientsWorker(){
  yield call(delay,1000);
  const clients = yield call(getClients);
  yield put( setClients(clients) );
}