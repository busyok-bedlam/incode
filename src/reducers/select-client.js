import { selectClient } from '../actions';
import { handleAction } from 'redux-actions';

const selectedClient = handleAction(
    selectClient,
    (state,{payload}) => payload,
    null
)

export default selectedClient;