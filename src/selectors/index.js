import { createSelector } from 'reselect';
import { prop, find, propEq } from 'ramda';
export const userListSelector = state => state.userList;
export const createUsersSelector = createSelector.bind(null,userListSelector);
export const selectUsers = createUsersSelector(prop('clients'));


export const selectUserById = createSelector(
    [selectUsers, (_, id) => id],
    (users, userId) => find(propEq('id', userId))(users)
)