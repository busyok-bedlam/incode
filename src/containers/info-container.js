import { connect } from 'react-redux';
import Info from '../components/info';


const mapStateToProps = state => ({
    clientinfo: state.selectedClient
})

export default connect(mapStateToProps)(Info)
