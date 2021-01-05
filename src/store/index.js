// import { combineReducers, createStore } from "redux";
// import thunk from "redux-thunk";

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';    
import reducer from "../reducers";
import logger from "redux-logger";

let store;

export default function configureStore(){
    store   = createStore(reducer, applyMiddleware(thunk, logger));
    return store;
}