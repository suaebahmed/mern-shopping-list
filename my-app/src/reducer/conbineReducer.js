import {combineReducers} from 'redux'
import itemReducer from './itemReducer'

const rootReducer = combineReducers({
    rootItems: itemReducer
})

export default rootReducer;