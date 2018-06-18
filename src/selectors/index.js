import { createSelector } from 'reselect';
import { prop, find, propEq } from 'ramda';
export const clientsSelector = state => state.clientsList;
// export const createClientsSelector = createSelector.bind(null,clientListSelector);
// // export const selectUsers = createUsersSelector(prop('clients'));


export const selectUserById = createSelector(
    [clientsSelector, (_, id) => id],
    (users, userId) => find(propEq('id', userId))(users)
)
