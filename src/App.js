import React from 'react';
import UserList from './components/Users/User'
import Appcss from './App.css'
const App = () => {

    return(
        <>
            <div className="home">
                <UserList/>
            </div>
        </>
    )

}

export default App;