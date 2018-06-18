import { combineReducers } from 'redux';
import clients from './clients';
import selectedClient from './select-client';

export default combineReducers({
    clients,selectedClient
})