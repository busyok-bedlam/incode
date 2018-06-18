import React,{ Component } from 'react';
import ListItem from './list-item';


class List extends Component {
    componentDidMount(){
        this.props.getClients();
    }
    render(){
        const { clientsList } = this.props;
        return (
            <div className="ui list">
                {
                    clientsList.map((item, index) => <ListItem client={item} key={index} />)
                }
            </div>
        )  
    }
}

export default List;