import { v4 as uuidv4 } from 'uuid';
import {GET_ITEMS,DELETE_ITEM,ADD_ITEM} from './actionType'

const initState = {
    items : [
        {id: uuidv4(),name: "Eggs"},
        {id: uuidv4(),name: "Milk"},
        {id: uuidv4(),name: "Steak"},
        {id: uuidv4(),name: "Water"}
    ]
}

const itemsReducer = (state=initState,action) =>{
    switch (action.type) {
        case GET_ITEMS:
            return {
                ...state,
            }
        case ADD_ITEM:
            return {
                ...state,
                items: state.items.concat(action.payload)
            }
        case DELETE_ITEM:
            return {
                ...state,
                items: state.items.filter(item=>(item.id !== action.payload))
            }
        default:
            return state;
    }
}

export default itemsReducer;
