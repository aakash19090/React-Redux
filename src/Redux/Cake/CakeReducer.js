import { BUY_CAKE } from './CakeTypes'

const initialCakeState = {
    numOfCakes:10
}

export const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes : state.numOfCakes - 1
        }    
        default: return state
    }
}
