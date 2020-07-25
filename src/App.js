import React from 'react';
// import UserList from './components/Users/User'
import Appcss from './App.css'
import ClickCounter from './components/HOC Components/ClickCounter'
import HoverCounter from './components/HOC Components/HoverCounter'
const App = () => {

    return(
        <>
            <div className="home">
                {/* <UserList/> */}
                <ClickCounter/>
                <HoverCounter/>
            </div>
        </>
    )

}

export default App;