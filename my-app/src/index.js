import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux'
import store from './store'

import { BrowserRouter,Route, Switch} from 'react-router-dom'
import Main from './components/profiles/Main';

const XX=()=>{
    return(
        <Switch>
            <Route exact path='/'>
                <App/>
            </Route>
            <Route path='/profile'>
                <Main/>
            </Route>
        </Switch>
    )
}

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <XX/>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
serviceWorker.unregister();
