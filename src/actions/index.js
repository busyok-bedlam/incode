import { createAction } from 'redux-actions';

export const setSelectedClient = createAction("selectClient");
export const setClients = createAction("setClients");
export const getClients = createAction("getClients");
export const selectClientAction = createAction("selectClientAction");