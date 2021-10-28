import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import './index.css';
import App from './Containers/App';
import 'tachyons';
import {searchRobots, requestRobots} from './reducer';

const rootReducer = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger));

ReactDOM.render(
	<Provider  store = {store}><App /></Provider>,
	document.getElementById('root'));
