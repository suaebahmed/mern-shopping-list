import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducer/conbineReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools}  from 'redux-devtools-extension'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk))

)

export default store;

// __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()