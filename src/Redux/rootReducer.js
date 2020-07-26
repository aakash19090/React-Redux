import { combineReducers } from 'redux'
import { cakeReducer } from './Cake/CakeReducer'
import { icecreamReducer } from './Icecream/IcecreamReducer'
import { userReducer } from './Users/userReducer'
const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : icecreamReducer,
    user : userReducer
})
export default rootReducer