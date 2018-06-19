import { setSelectedClient } from '../actions';
import { handleAction } from 'redux-actions';

const selectedClient = handleAction(
    setSelectedClient,
    (state,{payload}) => payload,
    null
)

export default selectedClient;