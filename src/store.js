import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

import {composeWithDevTools} from 'redux-devtools-extension';
// Connect Redux Devtools (serialize option for Symbol support)
const composeEnhancers = composeWithDevTools({serialize: true});


const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;