import ApiCreator from './api';
const api = ApiCreator('localhost:3000');
export const getClients = () => api.get(`clients`);
export const selectClientApi = firstName => {
    return api.get(`clients?general.firstName=${firstName}`)
}

// export const filterClients = ( filter,value ) => api.get(`Clients?${filter}=${value}`);
