import { connect } from 'react-redux';
import { selectClientAction } from '../actions';
import ListItem from '../components/list-item';


const mapDispatchToprops = { selectClientAction }

export default connect(null,mapDispatchToprops)(ListItem);