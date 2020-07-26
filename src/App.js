import React from 'react';
import Appcss from './App.css'
import { Provider } from 'react-redux'
import store from './Redux/store'
// import UserList from './components/Users/User'
import CakeContainer from './components/ReduxDemo/CakeContainer'
import IcecreamContainer from './components/ReduxDemo/IcecreamContainer'
const App = () => {

    return(
        <Provider store={store}>
            <>
                <div className="home">
                    {/* <UserList/> */}
                    <CakeContainer/>
                    <IcecreamContainer />
                </div>
            </>
        </Provider>
    )

}

export default App;