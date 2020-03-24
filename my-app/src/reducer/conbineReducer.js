import {combineReducers} from 'redux'
import itemReducer from './itemReducer'
import errReducer from './errorReducer'
import authReducer from './authReducer'
import profileReducer from './profileReducer'

const rootReducer = combineReducers({
    rootItems: itemReducer,
    authReducer: authReducer,
    errReducer: errReducer,
    profile: profileReducer
})

export default rootReducer;