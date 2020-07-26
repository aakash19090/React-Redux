import { BUY_ICECREAM } from './IcecreamType'

export const buyIcecream = qty => {
    return{
        type: BUY_ICECREAM,
        payload:qty
    }
}