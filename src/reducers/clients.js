import { handleAction } from 'redux-actions';
import { setClients } from '../actions';

const initialState = {
    clients: []
}

const clients = handleAction(
    setClients,
    (state,{ payload }) => ({ ...state, clients: payload }),
    initialState

)

export default clients;