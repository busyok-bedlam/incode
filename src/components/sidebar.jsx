import React from 'react';
import Search from '../containers/search-cont';
import ClientList from '../containers/client-list';



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
