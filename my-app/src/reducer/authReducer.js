import {
USER_LOADED,
USER_LOADING,
LOGIN_SUCCESS,
REGISTER_SUCCESS,
AUTH_ERROR,
LOGIN_FAIL,
REGISTER_FAIL,
LOGOUT_SUCCESS
} from '../actions/actionType'


const initState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading : false,
    user: null
}

const authReducer = (state=initState,action) =>{
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading : true
            }
        case USER_LOADED:
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading : false
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading : false,
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: null,
                isLoading : false,
                user: null
        }
        default:
            return state;
    }
}

export default authReducer;
