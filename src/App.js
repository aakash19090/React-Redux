import React from 'react';
import Appcss from './App.css'
import { Provider } from 'react-redux'
import store from './Redux/store'
// import UserList from './components/Users/User'
import CakeContainer from './components/ReduxDemo/CakeContainer'
import IcecreamContainer from './components/ReduxDemo/IcecreamContainer'
import AsyncUsers from './components/Users/AsyncUsers'
import BasicForm from './components/ReduxForm/BasicForm'
import LocalData from './components/Users/LocalData'

const App = () => {

    return(
        <Provider store={store}>
            <>
                <div className="home">
                    {/* <UserList/> */}
                    {/* <CakeContainer/> */}
                    {/* <IcecreamContainer /> */}
                    {/* <AsyncUsers/> */}
                    <BasicForm/>
                    {/* <LocalData/> */}
                </div>
            </>
        </Provider>
    )

}

export default App;