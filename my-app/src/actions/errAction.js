import { GET_ERRORS, CLEAR_ERRORS } from './actionType'

// return error
export const retunErrors = (msg,status,id=null) =>{
    return {
        type: GET_ERRORS,
        payload: {msg,status,id}
    }
}
// clear Error 
export const clearErrors = ( ) =>{
    return {
        type: CLEAR_ERRORS
    }
}