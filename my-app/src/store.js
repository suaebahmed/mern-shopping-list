import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducer/conbineReducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,compose(applyMiddleware(thunk)))

export default store;