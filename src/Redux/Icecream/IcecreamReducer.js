import { BUY_ICECREAM } from './IcecreamType'


const initialIcecreamState = {
    numOfIcecream: 20
}


export const icecreamReducer = (state = initialIcecreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM: return{
            ...state,
            numOfIcecream : state.numOfIcecream - 1
        }
        default: return state
    }
}
