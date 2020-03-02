import {combineReducers} from 'redux'
import itemReducer from './itemReducer'
import errReducer from './errorReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
    rootItems: itemReducer,
    authReducer: authReducer,
    errReducer: errReducer
})

export default rootReducer;