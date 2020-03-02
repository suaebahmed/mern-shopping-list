import {
    USER_LOADED,
    USER_LOADING,
    LOGIN_SUCCESS,
    REGISTER_SUCCESS,
    AUTH_ERROR,
    LOGIN_FAIL,
    REGISTER_FAIL,
    LOGOUT_SUCCESS
    } from './actionType'
import axios from 'axios'
import {retunErrors,clearErrors} from './errAction'


export const loadUser = () => (dispatch,getState) =>{

    dispatch({type: USER_LOADING});
    // get token from combineReducer in authReducer of token of localStorage
    const token = getState().authReducer.token
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    // if token has, add to headers
    if(token){
        config.headers['x-auth-token'] = token;
    }
    axios.get('http://localhost:3000/api/auth/user',config) //this was worng
         .then(res=>{
             console.log(res.data)
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
         })
         .catch( err =>{
            // axios return res.response back data form server
            //and
            //send data to returnErrors action
            dispatch(retunErrors(err.response.data, err.response.status))
            dispatch({
                type: AUTH_ERROR,
            })
         })
}


export const register =({name,email,password})=> dispatch =>{

    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const body= JSON.stringify({name,email,password})
    axios.post('http://localhost:3000/api/auth/signup',body,config)
        .then(res=>{
            dispatch({type: REGISTER_SUCCESS,payload: res.data})
             
        })
        .catch(err=>{
            dispatch(retunErrors(err.response.data, err.response.status,'REGISTER_FAIL'))
            dispatch({type: REGISTER_FAIL})
        })
}

export const logout = () =>{
    return {
        type: LOGOUT_SUCCESS
    }
}

export const login  =({email,password})=> dispatch =>{
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    const body= JSON.stringify({email,password})
    axios.post('http://localhost:3000/api/auth/signin',body,config)
        .then(res=>{
            dispatch({type: LOGIN_SUCCESS,payload: res.data})
        })
        .catch(err=>{
            dispatch(retunErrors(err.response.data, err.response.status,'LOGIN_FAIL'))
            dispatch({type: LOGIN_FAIL})
        })
}



