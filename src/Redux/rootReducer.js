import { combineReducers } from 'redux'
import { cakeReducer } from './Cake/CakeReducer'
import { icecreamReducer } from './Icecream/IcecreamReducer'

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : icecreamReducer
})
export default rootReducer