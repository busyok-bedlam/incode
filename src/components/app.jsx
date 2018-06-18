import React from 'react';
import Sidebar from './sidebar';


const App = () => {

    return (
        <div className="ui container attached grid">
            <div className="four wide column">
                <Sidebar />
            </div>
            <div className="twelve wide column">
            </div>
        </div>

    )
}
export default App;
