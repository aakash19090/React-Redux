import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR
} from './userTypes'

export const fetchUserRequest = () => {
    return{
        type: FETCH_USER_REQUEST
    }
}

export const fetchUserSuccess = users => {
    return{
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetchUserError = error => {
    return{
        type: FETCH_USER_ERROR,
        payload: error
    }
}

export const fetchUserList = () => {
    return (dispatch) => {

        dispatch(fetchUserRequest)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(apiData => dispatch(fetchUserSuccess(apiData)))
        .catch(errorMsg => dispatch(fetchUserError(errorMsg)))
    }
}
