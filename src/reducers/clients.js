import { handleAction } from 'redux-actions';
import { setClients } from '../actions';

const initialState = [];


const clients = handleAction(
    setClients,
    (state,{ payload }) => [...payload],
    initialState
)

export default clients;
