import ApiCreator from './api';
const api = ApiCreator('localhost:3000');
export const getUsers = () => api.get(`clients`);


export const filterUsers = ( filter,value ) => api.get(`users?${filter}=${value}`);
