import List from '../components/list';
import { connect } from 'react-redux';
import { getClients } from '../actions';

const mapStateToProps = state => ({
    clientsList: state.clients
})
const mapDispatchToProps = { getClients }

const ClientList = connect(mapStateToProps,mapDispatchToProps)(List)
export default ClientList;