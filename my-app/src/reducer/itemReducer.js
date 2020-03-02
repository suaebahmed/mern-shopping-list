import {GET_ITEMS,DELETE_ITEM,ADD_ITEM,ITEMLS_LOADING} from '../actions/actionType'

const initState = {
    items : [],
    loading : false
}

const itemsReducer = (state=initState,action) =>{
    switch (action.type) {
        case ITEMLS_LOADING:
            return {
                ...state,
                loading : true
            }
        case GET_ITEMS:
            return {
                ...state,
                items: action.payload ? action.payload : [],
                loading: false
            }
        case ADD_ITEM:
            return {
                ...state,
                items: state.items.concat(action.payload)
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item=>(item._id !== action.payload))
            }
        default:
            return state;
    }
}

export default itemsReducer;
