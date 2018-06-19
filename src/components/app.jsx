import React from 'react';
import Sidebar from './sidebar';
import Info from "../containers/info-container";


const App = () => {

    return (
        <div className="ui container attached grid">
            <div className="four wide column">
                <Sidebar />
            </div>
            <div className="twelve wide column">
                <Info />
            </div>
        </div>

    )
}
export default App;
