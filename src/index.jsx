import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import Main from 'components/Main.jsx';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {Provider} from 'react-redux';

// reducer
import {login , loginPage} from 'states/login-reducers.js';
import {navBar} from 'states/navbar-reducers.js'


window.onload = function() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combineReducers({
        login , loginPage ,navBar
    }), composeEnhancers(applyMiddleware(thunkMiddleware/*, loggerMiddleware*/)));
    
    ReactDOM.render(
        <Provider store={store}>
            <Main/>
        </Provider>,
        
        document.getElementById('root')
    );
};
