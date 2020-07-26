import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from './userTypes'

const initialUserState = {
    isLoading: false,
    users:[],
    error:''
}

export const userReducer = (state = initialUserState, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
        return{
            ...state,
            isLoading: true
        }

        case FETCH_USER_SUCCESS:
        return{
            ...state,
            isLoading: false,
            users: action.payload,
            error:''
        }

        case FETCH_USER_ERROR:
        return{
            ...state,
            isLoading: false,
            users: [],
            error: action.payload
        }

        default: return state
    }
}
