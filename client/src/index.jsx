import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import Main from 'components/Main.jsx';
import Article from 'components/Article.jsx';
import ArticleForm from 'components/ArticleForm.jsx';
import Homepage from 'components/Homepage.jsx';
import Manager from 'components/Manager.jsx';
import CatalogPage from 'components/CatalogPage.jsx';
import SearchPage from 'components/SearchPage.jsx'
import LoginForm from 'components/LoginForm.jsx'

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {Provider} from 'react-redux';

// reducer
import {login , loginPage} from 'states/login-reducers.js';
import {navBar} from 'states/navbar-reducers.js';
import {page} from 'states/clickPage-reducer.js';
import {club} from 'states/clickClub-reducers.js';
import {post, searchText, searchStartDate, searchEndDate} from 'states/post-reducers.js';
import {category} from 'states/category-reducer.js';
import { HashRouter as Router ,Route , Link } from 'react-router-dom';

window.onload = function() {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(combineReducers({
        login , loginPage ,navBar, page, club, post, searchText, searchStartDate, searchEndDate, category
    }), composeEnhancers(applyMiddleware(thunkMiddleware/*, loggerMiddleware*/)));
    
    ReactDOM.render(
        <Provider store={store}>
            <Main/>
        </Provider>,  
        document.getElementById('root')
    );
};
