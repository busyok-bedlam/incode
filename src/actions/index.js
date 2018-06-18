import { createAction } from 'redux-actions';

export const selectClient = createAction("selectClient");
export const setClients = createAction("setClients");
export const getClients = createAction("getClients");