import React from 'react';
import Search from './search';
import ClientList from '../containers/client-list';

const clients = [
    { name: "client1" },
    { name: "client2" },
    { name: "client3" }
]


const Sidebar = () => (
    <div className="ui list">
        <div className="item">
            <Search/>
        </div>
        <div className="item">
            <ClientList  />
        </div>
        
    </div>
)

export default Sidebar;