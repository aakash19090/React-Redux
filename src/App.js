import React from 'react';
import UserList from './components/Users/User'
import Appcss from './App.css'
import Counter from './components/Render Props/Counter'
import ClickCounter from './components/Render Props/ClickCounter'
import HoverCounter from './components/Render Props/HoverCounter'

const App = () => {

    return(
        <>
            <div className="home">
                {/* <UserList/> */}
                <Counter render= { (counter, incrementCount) => (
                    <ClickCounter count={counter} incrementCount={incrementCount}/>
                )}
                />
                <Counter render= { (counter, incrementCount) => (
                    <HoverCounter count={counter} incrementCount={incrementCount}/>
                )}
                />
                
            </div>
        </>
    )

}

export default App;