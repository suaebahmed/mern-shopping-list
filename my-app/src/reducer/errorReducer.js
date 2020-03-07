import { GET_ERRORS, CLEAR_ERRORS} from '../actions/actionType'

const initialState = {
    msg: {},
    status: null,
    id: null
}
 
const errReducer = ( state=initialState, action) =>{
    switch (action.type) {
        case GET_ERRORS:
            return{
                msg: action.payload.msg.msg,
                status: action.payload.status,
                id: action.payload.id
            }
        case CLEAR_ERRORS:
            return{
                msg: {},
                status: null,
                id: null
            }
        default:
            return state;
    }
}

export default errReducer;