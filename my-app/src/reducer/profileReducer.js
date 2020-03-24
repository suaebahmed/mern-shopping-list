import { LOAD_PROFILE } from '../actions/actionType'

const initialState = {
    msg: '',
    user: ''
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case LOAD_PROFILE:
        return { 
            ...state,
            ...payload
        }
    default:
        return state;
    }
}
