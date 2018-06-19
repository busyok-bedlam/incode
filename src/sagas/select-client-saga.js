import { fork,takeEvery,call,put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { selectClientApi }  from '../api';
import { selectClientAction,setSelectedClient } from '../actions';



export default function * selectCLientSaga(){
    yield fork(selectClientWatcher);
}
function * selectClientWatcher(){
    yield takeEvery(selectClientAction,selectClientWorker);
}

function * selectClientWorker({ payload }){
    const [ selectedClient ] = yield call(selectClientApi,payload);
    yield put(setSelectedClient(selectedClient));
    

}