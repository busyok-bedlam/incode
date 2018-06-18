import List from '../components/list';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    clientsList: state.clients
})

const ClientList = connect()(List)