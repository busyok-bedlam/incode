import { connect } from 'react-redux';
import { selectClientAction } from '../actions';
import Search from '../components/search';


const mapDispatchToprops = { select: selectClientAction }

export default connect(null,mapDispatchToprops)(Search);