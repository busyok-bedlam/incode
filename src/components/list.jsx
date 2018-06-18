import React from 'react';
import ListItem from './list-item';

const List = ({ clientList }) => {
    return (
        <div className="ui list">
            {
                clientList.map((item, index) => <ListItem client={item} key={index} />)
            }
        </div>
    )

}

export default List;